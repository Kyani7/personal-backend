import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { Home, Minus, Plus, Loader2, MapPin, Building2 } from "lucide-react";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import { COUNTRY_COLORS, HIGHLIGHTED_COUNTRIES, MAP_ORIGIN } from "../../data/mapLocations";
import { allBranches, type Branch } from "../../data/branches";

const GEO_URL = "/data/countries-50m.json";
const WIDTH = 1120;
const HEIGHT = 640;
const DEFAULT_FILL = "#e2e8f0";
const HOVER_FILL = "#cbd5e1";
const MIN_ZOOM = 0.8;
const MAX_ZOOM = 8.25;
const ZOOM_STEP = 0.3;
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
  const curve = Math.min(distance * 0.22, 100);

  return `M ${x1},${y1} Q ${midpointX},${midpointY - curve} ${x2},${y2}`;
}

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
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip>(null);

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
    setSelectedLocation(null);
    applyTransform();
    syncState();
  }, [applyTransform, syncState]);

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

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      let delta = -event.deltaY;
      if (event.deltaMode === 1) {
        delta *= 12;
      }

      const factor = 1 + delta * TRACKPAD_SENSITIVITY;
      const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoomRef.current * factor));

      zoomRef.current = nextZoom;
      panRef.current = clampPan(panRef.current, nextZoom);

      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        applyTransform();
        syncState();
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(rafId.current);
    };
  }, [applyTransform, syncState]);

  const projection = useMemo(
    () => geoMercator().scale(175).center([18, 20]).translate([WIDTH / 2, HEIGHT / 2]),
    [],
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  const countryPaths = useMemo(
    () =>
      countries.map((country, index) => {
        const id = String(country.id ?? "");
        return {
          id,
          key: `${id || "country"}-${index}`,
          name: country.properties?.name ?? "Unknown country",
          d: path(country) ?? "",
          fill: COUNTRY_COLORS[id] ?? DEFAULT_FILL,
        };
      }),
    [countries, path],
  );

  const connections = useMemo(
    () =>
      HIGHLIGHTED_COUNTRIES.map((country) => ({
        id: country.id,
        name: country.name,
        d: createConnectionPath(projection, MAP_ORIGIN.coordinates, country.coordinates),
      })),
    [projection],
  );

  const markers = useMemo(
    () =>
      [MAP_ORIGIN, ...HIGHLIGHTED_COUNTRIES].map((location) => ({
        ...location,
        position: projection(location.coordinates),
      })),
    [projection],
  );

  const activeBranches = useMemo(() => {
    if (!selectedLocation) return [];
    if (selectedLocation === "Nepal") {
      return allBranches.filter((b) => b.country === "Nepal");
    }
    return allBranches.filter((b) => b.country.toLowerCase() === selectedLocation.toLowerCase());
  }, [selectedLocation]);

  const showTooltip = (name: string, event: React.MouseEvent) => {
    const bounds = mapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setHoveredCountry(name);
    setTooltip({ name, x: event.clientX - bounds.left + 12, y: event.clientY - bounds.top - 36 });
  };

  const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    if (zoomRef.current <= 1) return;
    (event.target as Element).setPointerCapture?.(event.pointerId);
    dragState.current = {
      startX: event.clientX,
      startY: event.clientY,
      panStart: { ...panRef.current },
      dragging: true,
    };
  };

  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!dragState.current.dragging) return;
    const bounds = mapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const scaleFactor = WIDTH / bounds.width;
    const dx = (event.clientX - dragState.current.startX) * scaleFactor;
    const dy = (event.clientY - dragState.current.startY) * scaleFactor;
    panRef.current = clampPan(
      { x: dragState.current.panStart.x + dx, y: dragState.current.panStart.y + dy },
      zoomRef.current,
    );
    applyTransform();
    syncState();
    setTooltip(null);
  };

  const endDrag = () => {
    dragState.current.dragging = false;
  };

  const selectCountry = (countryName: string) => {
    setSelectedLocation((prev) => (prev === countryName ? null : countryName));
  };

  return (
    <section className="mt-16 md:mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 md:text-2xl">We are Available in</h3>
          <p className="text-sm text-gray-500 mt-1">
            Click any active pin on the map to highlight branches in that region
          </p>
        </div>
        {selectedLocation && (
          <button
            type="button"
            onClick={() => setSelectedLocation(null)}
            className="self-start sm:self-auto rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-[#0078bd] hover:bg-blue-100 transition-colors"
          >
            Show All Locations ({selectedLocation}) ✕
          </button>
        )}
      </div>

      <div
        ref={mapRef}
        className="relative mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fafc] shadow-sm md:mt-7"
      >
        {/* Navigation Zoom / Reset Controls */}
        <div className="absolute left-4 top-4 z-10 flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm shadow-md">
          <button
            type="button"
            aria-label="Reset map view"
            disabled={zoom === MIN_ZOOM && pan.x === 0 && pan.y === 0}
            onClick={resetView}
            className="flex h-9 w-9 items-center justify-center border-b border-gray-100 text-gray-700 transition-colors hover:bg-blue-50 hover:text-[#0078bd] disabled:opacity-40"
            title="Reset View"
          >
            <Home size={15} />
          </button>
          <button
            type="button"
            aria-label="Zoom in"
            disabled={zoom >= MAX_ZOOM}
            onClick={() => applyZoom(zoomRef.current + ZOOM_STEP)}
            className="flex h-9 w-9 items-center justify-center border-b border-gray-100 text-gray-700 transition-colors hover:bg-blue-50 hover:text-[#0078bd] disabled:opacity-40"
            title="Zoom In"
          >
            <Plus size={16} />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            disabled={zoom <= MIN_ZOOM}
            onClick={() => applyZoom(zoomRef.current - ZOOM_STEP)}
            className="flex h-9 w-9 items-center justify-center text-gray-700 transition-colors hover:bg-blue-50 hover:text-[#0078bd] disabled:opacity-40"
            title="Zoom Out"
          >
            <Minus size={16} />
          </button>
        </div>

        {/* Selected Country Active Card overlay */}
        {selectedLocation && activeBranches.length > 0 && (
          <div className="absolute right-4 top-4 z-10 max-w-xs w-full rounded-xl border border-gray-200 bg-white/95 p-4 backdrop-blur shadow-lg transition-all animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0078bd]">
                <Building2 size={14} /> {selectedLocation} Office
              </span>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                ✕
              </button>
            </div>
            {activeBranches.map((b) => (
              <div key={b.id} className="text-xs space-y-1 py-1">
                <p className="font-semibold text-gray-900">{b.name}</p>
                <p className="text-gray-600 line-clamp-1">{b.address}</p>
                <p className="text-[#0078bd] font-medium">{b.phone}</p>
              </div>
            ))}
          </div>
        )}

        <div className="min-h-[360px] sm:min-h-[460px] lg:min-h-[580px]">
          {loading ? (
            <div className="flex h-full min-h-[360px] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-[#0078bd]" />
            </div>
          ) : (
            <svg
              ref={svgRef}
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className={`block h-auto w-full select-none ${
                zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""
              }`}
              role="img"
              aria-label="Interactive world map showing Hima Aus office locations"
              preserveAspectRatio="xMidYMid meet"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
            >
              <defs>
                {/* Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <rect width={WIDTH} height={HEIGHT} fill="#f8fafc" />

              <g
                ref={transformGroupRef}
                transform={`translate(${WIDTH / 2 + pan.x} ${HEIGHT / 2 + pan.y}) scale(${zoom}) translate(${-WIDTH / 2} ${-HEIGHT / 2})`}
              >
                {/* Country Shapes */}
                {countryPaths.map((country) => {
                  const isHighlighted = COUNTRY_COLORS[country.id] !== undefined;
                  const isHovered = hoveredCountry === country.name;
                  const isSelected =
                    selectedLocation &&
                    (selectedLocation === country.name ||
                      (selectedLocation === "Nepal" && country.name === "Nepal"));

                  return (
                    <path
                      key={country.key}
                      d={country.d}
                      fill={
                        isSelected
                          ? "#0078bd"
                          : isHovered
                            ? HOVER_FILL
                            : country.fill
                      }
                      stroke="#ffffff"
                      strokeWidth={isHovered || isHighlighted ? 1.1 : 0.65}
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      className="cursor-pointer transition-colors duration-200"
                      onClick={() => isHighlighted && selectCountry(country.name)}
                      onMouseMove={(event) => showTooltip(country.name, event)}
                      onMouseLeave={() => {
                        setHoveredCountry(null);
                        setTooltip(null);
                      }}
                    />
                  );
                })}

                {/* Animated Dash Connection Lines */}
                {connections.map((connection) => {
                  const isConnectedActive =
                    !selectedLocation ||
                    selectedLocation === "Nepal" ||
                    selectedLocation === connection.name;
                  return (
                    <path
                      key={connection.id}
                      d={connection.d}
                      fill="none"
                      stroke={isConnectedActive ? "#0078bd" : "#cbd5e1"}
                      strokeWidth={isConnectedActive ? 1.6 : 0.8}
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                      opacity={isConnectedActive ? 0.85 : 0.3}
                      vectorEffect="non-scaling-stroke"
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Location Markers with Pulsing Rings */}
                {markers.map((marker) => {
                  if (!marker.position) return null;
                  const [cx, cy] = marker.position;
                  const isSelected = selectedLocation === marker.name;
                  const isHovered = hoveredCountry === marker.name;
                  const isNepal = marker.id === MAP_ORIGIN.id;

                  return (
                    <g
                      key={marker.id}
                      className="cursor-pointer group"
                      onClick={() => selectCountry(marker.name)}
                      onMouseEnter={(e) => showTooltip(marker.name, e as unknown as React.MouseEvent)}
                      onMouseLeave={() => {
                        setHoveredCountry(null);
                        setTooltip(null);
                      }}
                    >
                      {/* Hover / Selected Outer Aura */}
                      {(isHovered || isSelected) && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={10}
                          fill={isNepal ? "#e63838" : "#0078bd"}
                          opacity={0.35}
                        />
                      )}

                      {/* Main Marker Circle */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isNepal ? 6 : isSelected ? 5.5 : 4.5}
                        fill={isNepal ? "#e63838" : marker.color || "#0078bd"}
                        stroke="#ffffff"
                        strokeWidth={1.5}
                        vectorEffect="non-scaling-stroke"
                        className="transition-all duration-200 group-hover:scale-125"
                        filter="url(#glow)"
                      />

                      {/* Inner Dot */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={1.8}
                        fill="#ffffff"
                        vectorEffect="non-scaling-stroke"
                      />
                    </g>
                  );
                })}
              </g>
            </svg>
          )}
        </div>

        {/* Hover Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-30 flex items-center gap-1.5 rounded-lg bg-gray-900/90 px-3 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-sm transition-all"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            <MapPin size={12} className="text-[#0078bd]" />
            {tooltip.name}
          </div>
        )}
      </div>
    </section>
  );
}