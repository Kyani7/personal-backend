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

/**
 * Highlighted countries on the map — matching himaaus.com/find-us
 * Colors aligned with the live site reference design
 */
export const HIGHLIGHTED_COUNTRIES: MapPoint[] = [
  { id: "036", name: "Australia", coordinates: [133.78, -25.27], color: "#1565c0" },
  { id: "276", name: "Germany", coordinates: [10.45, 51.17], color: "#2e7d32" },
  { id: "208", name: "Denmark", coordinates: [9.5, 56.26], color: "#42a5f5" },
  { id: "840", name: "USA", coordinates: [-98.58, 39.83], color: "#1565c0" },
  { id: "124", name: "Canada", coordinates: [-106.35, 56.13], color: "#e53935" },
  { id: "826", name: "UK", coordinates: [-3.44, 55.38], color: "#8bc34a" },
  { id: "246", name: "Finland", coordinates: [25.75, 61.92], color: "#42a5f5" },
  { id: "410", name: "Korea", coordinates: [127.77, 35.91], color: "#7b1fa2" },
  { id: "392", name: "Japan", coordinates: [138.25, 36.2], color: "#e53935" },
  { id: "554", name: "New Zealand", coordinates: [174.89, -40.9], color: "#ff9800" },
];

export const COUNTRY_COLORS = Object.fromEntries(
  [MAP_ORIGIN, ...HIGHLIGHTED_COUNTRIES].map((country) => [country.id, country.color]),
) as Record<string, string>;

export const AVAILABLE_COUNTRY_NAMES = HIGHLIGHTED_COUNTRIES.map((country) => country.name);
