import { HIGHLIGHTED_COUNTRIES } from "./mapLocations";

export type BranchType = "national" | "international";

export type Branch = {
  id: string;
  name: string;
  country: string;
  city: string;
  type: BranchType;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image?: string;
};

export const nationalBranches: Branch[] = [
  {
    id: "nepal-kathmandu",
    name: "Kathmandu Branch",
    country: "Nepal",
    city: "KATHMANDU",
    type: "national",
    address: "Kalikasthan-29, Kalika Marga, Kathmandu",
    phone: "+977 1-4534944",
    email: "kathmandu@himaaus.com",
    hours: "Sun – Fri: 9:00 AM – 6:00 PM",
    image: "https://api.himaaus.com/media/Branch_office/arnav-adhikari-3ADP7lpEPds-unsplash_pWnB8Sy.jpg",
  },
  {
    id: "nepal-itahari",
    name: "Itahari Branch",
    country: "Nepal",
    city: "ITAHARI",
    type: "national",
    address: "Biratnagar Line, Opposite to Prime Bank, Beside Prime Bank, Itahari",
    phone: "+977 25-580639",
    email: "itahari@himaaus.com",
    hours: "Sun – Fri: 9:00 AM – 6:00 PM",
    image: "https://api.himaaus.com/media/Branch_office/sagar-bhujel-ZH7aXKcoK9o-unsplash.jpg",
  },
  {
    id: "nepal-pokhara",
    name: "Pokhara Branch",
    country: "Nepal",
    city: "POKHARA",
    type: "national",
    address: "Buddha Marg, New Road -9, Pokhara",
    phone: "+977 61-571918",
    email: "pokhara@himaaus.com",
    hours: "Sun – Fri: 9:00 AM – 6:00 PM",
    image: "https://api.himaaus.com/media/Branch_office/mariam-g-cA1ROIwLnyQ-unsplash.jpg",
  },
  {
    id: "nepal-butwal",
    name: "Butwal Branch",
    country: "Nepal",
    city: "BUTWAL",
    type: "national",
    address: "Butwal-11, Kalikanagar, Rupandehi",
    phone: "9857073872",
    email: "butwal@himaaus.com",
    hours: "Sun – Fri: 9:00 AM – 6:00 PM",
    image: "https://api.himaaus.com/media/Branch_office/WhatsApp_Image_2026-06-05_at_2.49.57_PM.jpeg",
  },
];

const internationalOfficeDetails: Record<string, Partial<Branch>> = {
  Australia: {
    id: "australia-sydney",
    name: "Sydney Office",
    city: "SYDNEY",
    address: "Suite 1106, Level 11, 370 Pitt Street, Sydney 2000 NSW Australia",
    phone: "+61 2 9269 0551",
    email: "info@himaaus.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
    image: "https://api.himaaus.com/media/Branch_office/anthony-ketland-y-uwLAuUESU-unsplash.jpg",
  },
  Canada: {
    city: "TORONTO",
    address: "Visit our Canada office for personalized consultation",
    phone: "+61 2 9269 0551",
    email: "info@himaaus.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
  India: {
    city: "NEW DELHI",
    address: "Visit our India office for personalized consultation",
    phone: "+61 2 9269 0551",
    email: "info@himaaus.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
  Japan: {
    city: "TOKYO",
    address: "Visit our Japan office for personalized consultation",
    phone: "+61 2 9269 0551",
    email: "info@himaaus.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
  "Sri Lanka": {
    city: "COLOMBO",
    address: "Visit our Sri Lanka office for personalized consultation",
    phone: "+61 2 9269 0551",
    email: "info@himaaus.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
  Thailand: {
    city: "BANGKOK",
    address: "Visit our Thailand office for personalized consultation",
    phone: "+61 2 9269 0551",
    email: "info@himaaus.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
};

export const internationalBranches: Branch[] = HIGHLIGHTED_COUNTRIES.map((country) => {
  const details = internationalOfficeDetails[country.name] ?? {};

  return {
    id: details.id ?? `intl-${country.id}`,
    name: details.name ?? `${country.name} Office`,
    country: country.name,
    city: details.city ?? country.name.toUpperCase(),
    type: "international",
    address: details.address ?? `Visit our ${country.name} branch for personalized consultation`,
    phone: details.phone ?? "+61 2 9269 0551",
    email: details.email ?? "info@himaaus.com",
    hours: details.hours ?? "Mon – Sat: 9:00 AM – 6:00 PM",
    image: details.image,
  };
});

export const internationalBranchesExtended: Branch[] = [
  ...internationalBranches,
  {
    id: "australia-melbourne",
    name: "Melbourne Office",
    country: "Australia",
    city: "MELBOURNE",
    type: "international",
    address: "World Trade Centre, 611 Flinders St, Tower 4 - Level 10, Melbourne",
    phone: "+61 2 9269 0551",
    email: "melbourne@himaaus.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
    image: "https://api.himaaus.com/media/Branch_office/sawada-kedavra-s3LxRdYUTKM-unsplash.jpg",
  },
];

export const allBranches: Branch[] = [...nationalBranches, ...internationalBranchesExtended];
