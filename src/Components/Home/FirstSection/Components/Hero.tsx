import HeroCard from "./HeroCard";
import { useHeroCarousel } from "../Components/Hooks/useHeroCarousel";

const Hero = () => {
  const { activeCountry, visibleCountries, next, prev, goTo } = useHeroCarousel();

  // Use the short label (e.g. "UK") in the big heading when one is set,
  // otherwise fall back to the full title (e.g. "Germany").
  const headingTitle = activeCountry.shortTitle ?? activeCountry.title;

  return (
    <section
      className="relative  h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${activeCountry.image})` }}
    >
      <div className="absolute inset-0 bg-sky-900/50" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-8">
        <div className="max-w-2xl">
          <p className="text-lg font-semibold uppercase tracking-[10px] text-white">
            {activeCountry.subtitle}
          </p>

          <h1 className="text-7xl font-bold text-white">Study In</h1>

          <h2 className="text-8xl font-bold text-yellow-400 break-words">
            {headingTitle}
          </h2>

          <p className="mt-6 text-base leading-7 text-white break-words">
            {activeCountry.description}
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold">
              SEE MORE
            </button>
            <button className="rounded-lg border border-white px-8 py-4 text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 flex items-end gap-4">
        <button
          onClick={prev}
          aria-label="Previous country"
          className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next country"
          className="mr-2 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
        >
          ›
        </button>

        {visibleCountries.map((country) => (
          <HeroCard
            key={country.id}
            item={country}
            active={country.id === activeCountry.id}
            onClick={() => goTo(country.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;