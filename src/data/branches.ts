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
  Germany: {
    city: "BERLIN",
    address: "Visit our Germany office for personalized consultation",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
  },
  Denmark: {
    city: "COPENHAGEN",
    address: "Visit our Denmark office for personalized consultation",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
  },
  USA: {
    city: "NEW YORK",
    address: "Visit our USA office for personalized consultation",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
  },
  Canada: {
    city: "TORONTO",
    address: "Visit our Canada office for personalized consultation",
    image: "https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?auto=format&fit=crop&w=800&q=80",
  },
  UK: {
    city: "LONDON",
    address: "Visit our UK office for personalized consultation",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  },
  Finland: {
    city: "HELSINKI",
    address: "Visit our Finland office for personalized consultation",
    image: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
  },
  "South Korea": {
    city: "SEOUL",
    address: "Visit our South Korea office for personalized consultation",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80",
  },
  Japan: {
    city: "TOKYO",
    address: "Visit our Japan office for personalized consultation",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
  },
  "New Zealand": {
    city: "AUCKLAND",
    address: "Visit our New Zealand office for personalized consultation",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
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
