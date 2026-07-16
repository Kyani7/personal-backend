import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { Home, Minus, Plus, Loader2 } from "lucide-react";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import { COUNTRY_COLORS, HIGHLIGHTED_COUNTRIES, MAP_ORIGIN } from "../../data/mapLocations";

const GEO_URL = "/data/countries-50m.json";
const WIDTH = 1120;
const HEIGHT = 700;
const DEFAULT_FILL = "#eeeeee";
const HOVER_FILL = "#cbd5e1";
const MIN_ZOOM = 0.8;
const MAX_ZOOM = 8.25;
const ZOOM_STEP = 0.25;

// Sensitivity factor — converts touchpad deltaY into a zoom multiplier.
// Lower = smoother, higher = faster zoom per scroll.
const TRACKPAD_SENSITIVITY = 0.005;

type CountryFeature = Feature<Geometry, { name?: string }>;
type Tooltip = { name: string; x: number; y: number } | null;
type Pan = { x: number; y: number };

function createConnectionPath(
  projection: ReturnType<typeof geoMercator>,
  from: [number, number],
  to: [number, number],
) {
  const start = projection(from);
  const end = projection(to);
  if (!start || !end) return "";

  const [x1, y1] = start;
  const [x2, y2] = end;
  const midpointX = (x1 + x2) / 2;
  const midpointY = (y1 + y2) / 2;
  const distance = Math.hypot(x2 - x1, y2 - y1) || 1;
  const curve = Math.min(distance * 0.22, 105);

  return `M ${x1},${y1} Q ${midpointX},${midpointY - curve} ${x2},${y2}`;
}

// Clamp panning so you can't drag the map past its own edges.
function clampPan(pan: Pan, zoom: number): Pan {
  if (zoom <= 1) return { x: 0, y: 0 };
  const maxX = (WIDTH * (zoom - 1)) / 2;
  const maxY = (HEIGHT * (zoom - 1)) / 2;
  return {
    x: Math.min(maxX, Math.max(-maxX, pan.x)),
    y: Math.min(maxY, Math.max(-maxY, pan.y)),
  };
}

export default function FindUsWorldMap() {
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip>(null);

  // Use refs for zoom/pan to avoid React batching delays during rapid
  // touchpad scroll events. We drive the SVG transform directly via the DOM
  // and sync React state only when the gesture settles.
  const zoomRef = useRef(MIN_ZOOM);
  const panRef = useRef<Pan>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState<Pan>({ x: 0, y: 0 });

  const mapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const transformGroupRef = useRef<SVGGElement>(null);
  const rafId = useRef(0);

  const dragState = useRef<{ startX: number; startY: number; panStart: Pan; dragging: boolean }>({
    startX: 0,
    startY: 0,
    panStart: { x: 0, y: 0 },
    dragging: false,
  });

  // Apply the current zoom/pan refs directly to the DOM for buttery-smooth updates.
  const applyTransform = useCallback(() => {
    const g = transformGroupRef.current;
    if (!g) return;
    const z = zoomRef.current;
    const p = panRef.current;
    g.setAttribute(
      "transform",
      `translate(${WIDTH / 2 + p.x} ${HEIGHT / 2 + p.y}) scale(${z}) translate(${-WIDTH / 2} ${-HEIGHT / 2})`,
    );
  }, []);

  // Flush ref values into React state (for button disabled states, cursor, etc.)
  const syncState = useCallback(() => {
    setZoom(zoomRef.current);
    setPan({ ...panRef.current });
  }, []);

  const applyZoom = useCallback(
    (nextZoom: number) => {
      const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));
      zoomRef.current = clamped;
      panRef.current = clampPan(panRef.current, clamped);
      applyTransform();
      syncState();
    },
    [applyTransform, syncState],
  );

  const resetView = useCallback(() => {
    zoomRef.current = MIN_ZOOM;
    panRef.current = { x: 0, y: 0 };
    applyTransform();
    syncState();
  }, [applyTransform, syncState]);

  // --- Load topology ---
  useEffect(() => {
    let mounted = true;
    fetch(GEO_URL)
      .then((response) => response.json())
      .then((topology: Topology<{ countries: GeometryCollection }>) => {
        if (!mounted) return;
        const collection = feature(topology, topology.objects.countries) as FeatureCollection;
        setCountries(collection.features as CountryFeature[]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  // --- Native wheel listener with { passive: false } so preventDefault works ---
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      // Determine zoom delta. Touchpads fire many small deltas; discrete mice
      // fire larger ones with deltaMode === 1 (lines).
      let delta = -event.deltaY;
      if (event.deltaMode === 1) {
        // Line-mode (standard mice) — treat each line as a bigger step
        delta *= 12;
      }

      const factor = 1 + delta * TRACKPAD_SENSITIVITY;
      const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoomRef.current * factor));

      zoomRef.current = nextZoom;
      panRef.current = clampPan(panRef.current, nextZoom);

      // Coalesce rapid events into a single rAF
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        applyTransform();
        syncState();
      });
    };

    svg.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      svg.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(rafId.current);
    };
  }, [applyTransform, syncState]);

  const projection = useMemo(
    () => geoMercator().scale(178).center([18, 20]).translate([WIDTH / 2, HEIGHT / 2]),
    [],
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  const countryPaths = useMemo(
    () => countries.map((country, index) => {
      const id = String(country.id ?? "");
      return { id, key: `${id || "country"}-${index}`, name: country.properties?.name ?? "Unknown country", d: path(country) ?? "", fill: COUNTRY_COLORS[id] ?? DEFAULT_FILL };
    }),
    [countries, path],
  );

  const connections = useMemo(
    () => HIGHLIGHTED_COUNTRIES.map((country) => ({ id: country.id, d: createConnectionPath(projection, MAP_ORIGIN.coordinates, country.coordinates) })),
    [projection],
  );
  const markers = useMemo(
    () => [MAP_ORIGIN, ...HIGHLIGHTED_COUNTRIES].map((location) => ({ ...location, position: projection(location.coordinates) })),
    [projection],
  );

  const showTooltip = (name: string, event: React.MouseEvent<SVGPathElement>) => {
    const bounds = mapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setHoveredCountry(name);
    setTooltip({ name, x: event.clientX - bounds.left + 14, y: event.clientY - bounds.top - 38 });
  };

  // --- Drag to pan (mouse) ---
  const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    if (zoomRef.current <= 1) return;
    (event.target as Element).setPointerCapture(event.pointerId);
    dragState.current = { startX: event.clientX, startY: event.clientY, panStart: { ...panRef.current }, dragging: true };
  };

  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!dragState.current.dragging) return;
    const bounds = mapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    // Convert screen-pixel drag delta into viewBox units.
    const scaleFactor = WIDTH / bounds.width;
    const dx = (event.clientX - dragState.current.startX) * scaleFactor;
    const dy = (event.clientY - dragState.current.startY) * scaleFactor;
    panRef.current = clampPan({ x: dragState.current.panStart.x + dx, y: dragState.current.panStart.y + dy }, zoomRef.current);
    applyTransform();
    syncState();
    setTooltip(null);
  };

  const endDrag = () => { dragState.current.dragging = false; };

  return (
    <section className="mt-16 md:mt-20">
      <p className="text-lg font-medium text-gray-900 md:text-xl">We are Available in</p>

      <div ref={mapRef} className="relative mt-5 overflow-hidden rounded-xl bg-gray-100 md:mt-7">
        <div className="absolute left-4 top-4 z-10 flex flex-col overflow-hidden rounded border border-gray-200 bg-white shadow-sm">
          <button type="button" aria-label="Reset view" disabled={zoom === MIN_ZOOM} onClick={resetView} className="flex h-9 w-9 items-center justify-center border-b border-gray-200 text-gray-600 hover:bg-gray-100 disabled:text-gray-300"><Home size={15} /></button>
          <button type="button" aria-label="Zoom in" disabled={zoom >= MAX_ZOOM} onClick={() => applyZoom(zoomRef.current + ZOOM_STEP)} className="flex h-9 w-9 items-center justify-center border-b border-gray-200 text-gray-600 hover:bg-gray-100 disabled:text-gray-300"><Plus size={16} /></button>
          <button type="button" aria-label="Zoom out" disabled={zoom <= MIN_ZOOM} onClick={() => applyZoom(zoomRef.current - ZOOM_STEP)} className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-100 disabled:text-gray-300"><Minus size={16} /></button>
        </div>

        <div className="min-h-[320px] sm:min-h-[440px] lg:min-h-[620px]">
          {loading ? (
            <div className="flex h-full min-h-[320px] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <svg
              ref={svgRef}
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className={`block h-auto w-full ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
              role="img"
              aria-label="Interactive world map showing Hima Aus office locations"
              preserveAspectRatio="xMidYMid meet"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
            >
              <rect width={WIDTH} height={HEIGHT} fill="#f7f7f7" />
              <g
                ref={transformGroupRef}
                transform={`translate(${WIDTH / 2 + pan.x} ${HEIGHT / 2 + pan.y}) scale(${zoom}) translate(${-WIDTH / 2} ${-HEIGHT / 2})`}
              >
                {countryPaths.map((country) => {
                  const selected = COUNTRY_COLORS[country.id] !== undefined;
                  const hovered = hoveredCountry === country.name;
                  return <path key={country.key} d={country.d} fill={hovered ? HOVER_FILL : country.fill} stroke="#ffffff" strokeWidth={hovered || selected ? 1.05 : 0.65} strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="cursor-pointer transition-[fill] duration-150" onMouseMove={(event) => showTooltip(country.name, event)} onMouseLeave={() => { setHoveredCountry(null); setTooltip(null); }} />;
                })}

                {connections.map((connection) => <path key={connection.id} d={connection.d} fill="none" stroke="#087bc1" strokeWidth={1.35} strokeDasharray="5 5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />)}
                {markers.map((marker) => marker.position && <g key={marker.id}><circle cx={marker.position[0]} cy={marker.position[1]} r={6.5} fill="#087bc1" opacity={0.18} /><circle cx={marker.position[0]} cy={marker.position[1]} r={3.5} fill="#087bc1" stroke="#ffffff" strokeWidth={1.2} vectorEffect="non-scaling-stroke" /></g>)}
              </g>
            </svg>
          )}
        </div>

        {tooltip && <div className="pointer-events-none absolute z-20 rounded bg-[#0078bd] px-3 py-1.5 text-sm font-medium text-white shadow-md" style={{ left: tooltip.x, top: tooltip.y }}>{tooltip.name}</div>}
      </div>
    </section>
  );
}