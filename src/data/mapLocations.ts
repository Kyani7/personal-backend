export type MapPoint = {
  id: string;
  name: string;
  coordinates: [number, number];
  color: string;
};

/** Nepal — origin hub for connection lines */
export const MAP_ORIGIN: MapPoint = {
  id: "524",
  name: "Nepal",
  coordinates: [84.12, 28.39],
  color: "#e6e6e6",
};

/** Countries on himaaus.com/find-us map */
export const HIGHLIGHTED_COUNTRIES: MapPoint[] = [
  { id: "036", name: "Australia", coordinates: [133.78, -25.27], color: "#1565c0" },
  { id: "124", name: "Canada", coordinates: [-106.35, 56.13], color: "#e53935" },
  { id: "356", name: "India", coordinates: [78.96, 20.59], color: "#ff9800" },
  { id: "392", name: "Japan", coordinates: [138.25, 36.2], color: "#e53935" },
  { id: "144", name: "Sri Lanka", coordinates: [80.77, 7.87], color: "#2e7d32" },
  { id: "764", name: "Thailand", coordinates: [100.99, 15.87], color: "#9c27b0" },
];

export const COUNTRY_COLORS = Object.fromEntries(
  [MAP_ORIGIN, ...HIGHLIGHTED_COUNTRIES].map((country) => [country.id, country.color]),
) as Record<string, string>;

export const AVAILABLE_COUNTRY_NAMES = [
  ...HIGHLIGHTED_COUNTRIES.map((country) => country.name),
  MAP_ORIGIN.name,
];
