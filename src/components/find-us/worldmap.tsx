import { useEffect, useMemo, useState } from "react";
import { geoInterpolate, geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { Home, Minus, Plus } from "lucide-react";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import { COUNTRY_COLORS, AVAILABLE_COUNTRY_NAMES, HIGHLIGHTED_COUNTRIES, MAP_ORIGIN } from "../../data/mapLocations";
import Loader from "../common/loader";

const GEO_URL = "/data/countries-50m.json";
const DEFAULT_FILL = "#ececec";
const WIDTH = 960;
const HEIGHT = 500;
const MIN_ZOOM = 0.85;
const MAX_ZOOM = 2.4;
const ZOOM_STEP = 0.2;
const ARC_SEGMENTS = 96;

type CountryFeature = Feature<Geometry, { name?: string }>;

function createGreatCirclePath(
  projection: ReturnType<typeof geoMercator>,
  from: [number, number],
  to: [number, number],
): string {
  const interpolate = geoInterpolate(from, to);
  const points: string[] = [];

  for (let step = 0; step <= ARC_SEGMENTS; step += 1) {
    const coordinate = interpolate(step / ARC_SEGMENTS);
    const projected = projection(coordinate);
    if (!projected) continue;

    const command = step === 0 ? "M" : "L";
    points.push(`${command}${projected[0].toFixed(2)},${projected[1].toFixed(2)}`);
  }

  return points.join(" ");
}

export default function FindUsWorldMap() {
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    let active = true;

    fetch(GEO_URL)
      .then((response) => response.json())
      .then((topology: Topology<{ countries: GeometryCollection }>) => {
        if (!active) return;

        const geo = feature(topology, topology.objects.countries) as FeatureCollection;
        setCountries(geo.features as CountryFeature[]);
        setLoading(false);
      })
      .catch(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const projection = useMemo(
    () => geoMercator().scale(158).center([12, 18]).translate([WIDTH / 2, HEIGHT / 2]),
    [],
  );

  const pathGenerator = useMemo(
    () => geoPath(projection).pointRadius(0.5),
    [projection],
  );

  const countryPaths = useMemo(
    () =>
      countries.map((country) => {
        const countryId = String(country.id ?? "");
        return {
          id: countryId,
          d: pathGenerator(country) ?? "",
          fill: COUNTRY_COLORS[countryId] ?? DEFAULT_FILL,
        };
      }),
    [countries, pathGenerator],
  );

  const connectionPaths = useMemo(
    () =>
      HIGHLIGHTED_COUNTRIES.map((country) => ({
        id: country.id,
        d: createGreatCirclePath(projection, MAP_ORIGIN.coordinates, country.coordinates),
      })),
    [projection],
  );

  const markers = useMemo(
    () =>
      [MAP_ORIGIN, ...HIGHLIGHTED_COUNTRIES].map((point) => ({
        id: point.id,
        coordinates: projection(point.coordinates),
      })),
    [projection],
  );

  const handleZoomIn = () => setZoom((value) => Math.min(Number((value + ZOOM_STEP).toFixed(2)), MAX_ZOOM));
  const handleZoomOut = () => setZoom((value) => Math.max(Number((value - ZOOM_STEP).toFixed(2)), MIN_ZOOM));
  const handleReset = () => setZoom(1);

  return (
    <section className="mt-14 md:mt-20">
      <h3 className="text-2xl font-bold text-primary-dark md:text-3xl lg:text-4xl">We are Available in</h3>

      <div className="mt-4 flex flex-wrap gap-2 md:mt-5 md:gap-3">
        {AVAILABLE_COUNTRY_NAMES.map((country) => (
          <span
            key={country}
            className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-semibold text-foreground md:px-5 md:py-2 md:text-base"
          >
            {country}
          </span>
        ))}
      </div>

      <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-background shadow-sm md:mt-8">
        <div className="absolute right-3 top-3 z-10 flex flex-col overflow-hidden rounded-md border border-border bg-background shadow-sm">
          <button
            type="button"
            aria-label="Reset map view"
            onClick={handleReset}
            className="border-b border-border p-2 text-muted-foreground transition-colors hover:bg-muted"
          >
            <Home size={14} />
          </button>
          <button
            type="button"
            aria-label="Zoom in"
            onClick={handleZoomIn}
            className="border-b border-border p-2 text-muted-foreground transition-colors hover:bg-muted"
          >
            <Plus size={14} />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            onClick={handleZoomOut}
            className="p-2 text-muted-foreground transition-colors hover:bg-muted"
          >
            <Minus size={14} />
          </button>
        </div>

        <div className="min-h-[320px] md:min-h-[420px]">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="origin-center transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `scale(${zoom})` }}
            >
              <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                className="h-auto w-full"
                role="img"
                aria-label="World map"
                shapeRendering="geometricPrecision"
              >
                <rect width={WIDTH} height={HEIGHT} fill="#ffffff" />

                <g>
                  {countryPaths.map((country) => (
                    <path
                      key={country.id}
                      d={country.d}
                      fill={country.fill}
                      stroke="#ffffff"
                      strokeWidth={0.4}
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </g>

                <g>
                  {connectionPaths.map((path) => (
                    <path
                      key={path.id}
                      d={path.d}
                      fill="none"
                      stroke="#0077bd"
                      strokeWidth={1.4}
                      strokeDasharray="3 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </g>

                <g>
                  {markers.map((marker) => {
                    if (!marker.coordinates) return null;

                    const [x, y] = marker.coordinates;

                    return (
                      <g key={marker.id}>
                        <circle cx={x} cy={y} r={8} fill="#0077bd" opacity={0.18} />
                        <circle
                          cx={x}
                          cy={y}
                          r={4.5}
                          fill="#0077bd"
                          stroke="#ffffff"
                          strokeWidth={1.5}
                          vectorEffect="non-scaling-stroke"
                        />
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
