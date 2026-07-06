import type { Branch } from "../components/find-us/branchcard";
import { HIGHLIGHTED_COUNTRIES } from "./mapLocations";

export const nationalBranches: Branch[] = [
  {
    id: "nepal-kathmandu",
    name: "Kathmandu Branch",
    country: "Nepal",
    type: "national",
    address: "Putalisadak, Kathmandu",
  },
  {
    id: "nepal-itahari",
    name: "Itahari Branch",
    country: "Nepal",
    type: "national",
    address: "Main Road, Itahari",
  },
  {
    id: "nepal-pokhara",
    name: "Pokhara Branch",
    country: "Nepal",
    type: "national",
    address: "Lakeside, Pokhara",
  },
];

export const internationalBranches: Branch[] = HIGHLIGHTED_COUNTRIES.map((country) => ({
  id: `intl-${country.id}`,
  name: `${country.name} Office`,
  country: country.name,
  type: "international" as const,
  address: `Visit our ${country.name} branch for personalized consultation`,
}));

export const allBranches: Branch[] = [...nationalBranches, ...internationalBranches];
