import { useEffect, useState } from "react";
import { countries } from "../Data/Countries";
import type { Country } from "../Data/Countries";

type UseHeroCarousel = {
  activeCountry: Country;
  visibleCountries: Country[];
  next: () => void;
  prev: () => void;
  goTo: (id: number) => void;
};

const WINDOW_SIZE = 4;
const INTERVAL_MS = 5000;

export function useHeroCarousel(): UseHeroCarousel {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % countries.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const visibleCountries: Country[] = [];
  for (let offset = 0; offset < WINDOW_SIZE; offset++) {
    visibleCountries.push(countries[(activeIndex + offset) % countries.length]);
  }

  const next = () => setActiveIndex((index) => (index + 1) % countries.length);
  const prev = () =>
    setActiveIndex((index) => (index - 1 + countries.length) % countries.length);
  const goTo = (id: number) => {
    const index = countries.findIndex((country) => country.id === id);
    if (index !== -1) setActiveIndex(index);
  };

  return {
    activeCountry: countries[activeIndex],
    visibleCountries,
    next,
    prev,
    goTo,
  };
}