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
  color: "#e63838",
};

/** Countries connected to the Nepal office hub on the Find Us map. */
export const HIGHLIGHTED_COUNTRIES: MapPoint[] = [
  { id: "840", name: "USA", coordinates: [-98.58, 39.83], color: "#24218d" },
  { id: "124", name: "Canada", coordinates: [-106.35, 56.13], color: "#df291e" },
  { id: "276", name: "Germany", coordinates: [10.45, 51.17], color: "#1f8040" },
  { id: "826", name: "UK", coordinates: [-3.44, 55.38], color: "#c2ed00" },
  { id: "246", name: "Finland", coordinates: [25.75, 61.92], color: "#1756d7" },
  { id: "208", name: "Denmark", coordinates: [9.5, 56.26], color: "#d0ad28" },
  { id: "036", name: "Australia", coordinates: [133.78, -25.27], color: "#2b49ae" },
  { id: "392", name: "Japan", coordinates: [138.25, 36.2], color: "#e63024" },
  { id: "410", name: "South Korea", coordinates: [127.77, 35.91], color: "#9a6637" },
  { id: "554", name: "New Zealand", coordinates: [174.89, -40.9], color: "#f3a317" },
];

export const COUNTRY_COLORS = Object.fromEntries(
  [MAP_ORIGIN, ...HIGHLIGHTED_COUNTRIES].map((country) => [country.id, country.color]),
) as Record<string, string>;

export const AVAILABLE_COUNTRY_NAMES = [
  ...HIGHLIGHTED_COUNTRIES.map((country) => country.name),
  MAP_ORIGIN.name,
];
