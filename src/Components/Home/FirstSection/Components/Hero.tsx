import { useNavigate } from "react-router-dom";
import HeroCard from "./HeroCard";
import { useHeroCarousel } from "../Components/Hooks/useHeroCarousel";

const Hero = () => {
  const { activeCountry, visibleCountries, next, prev, goTo } =
    useHeroCarousel();

  const navigate = useNavigate();

  const headingTitle =
    activeCountry.shortTitle ?? activeCountry.title;

  const handleSeeMore = () => {
    navigate("/services");
  };

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${activeCountry.image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-900/50" />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto
          flex min-h-screen
          items-start lg:items-center
          max-w-7xl
          px-5 sm:px-8 lg:px-12
          pt-28 sm:pt-32 lg:pt-0
          pb-32 lg:pb-0
        "
      >
        <div className="max-w-2xl">
          <p
            className="
              text-sm sm:text-lg
              font-semibold
              uppercase
              tracking-[6px] sm:tracking-[10px]
              text-white
            "
          >
            {activeCountry.subtitle}
          </p>

          <h1
            className="
              mt-2
              text-5xl sm:text-6xl lg:text-7xl
              font-bold text-white
              leading-none
            "
          >
            Study In
          </h1>

          <h2
            className="
              text-5xl sm:text-7xl lg:text-8xl
              font-bold text-yellow-400
              leading-none break-words
            "
          >
            {headingTitle}
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-base sm:text-lg
              leading-7 text-white
            "
          >
            {activeCountry.description}
          </p>

          <div
            className="
              mt-8
              flex flex-col sm:flex-row
              gap-4
            "
          >
            <button
              onClick={handleSeeMore}
              className="
                w-full sm:w-auto
                rounded-lg
                bg-white
                px-8 py-4
                font-semibold
                tracking-[4px]
              "
            >
              SEE MORE
            </button>

            <button
              onClick={handleContactUs}
              className="
                w-full sm:w-auto
                rounded-lg
                border border-white
                px-8 py-4
                font-semibold
                tracking-[4px]
                text-white
              "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Cards */}
      <div
        className="
          hidden lg:flex
          absolute
          bottom-10 right-8
          z-10
          items-end gap-4
        "
      >
        <button
          onClick={prev}
          className="
            grid h-12 w-12
            place-items-center
            rounded-full
            bg-white/20
            text-white
            hover:bg-white/30
          "
        >
          ‹
        </button>

        <button
          onClick={next}
          className="
            grid h-12 w-12
            place-items-center
            rounded-full
            bg-white/20
            text-white
            hover:bg-white/30
          "
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

      {/* Tablet Cards */}
      <div
        className="
          hidden md:flex lg:hidden
          absolute bottom-8 right-6
          gap-3 z-10
        "
      >
        {visibleCountries.slice(0, 2).map((country) => (
          <HeroCard
            key={country.id}
            item={country}
            active={country.id === activeCountry.id}
            onClick={() => goTo(country.id)}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div
        className="
          lg:hidden
          absolute bottom-8 left-1/2
          -translate-x-1/2
          z-10
          flex gap-4
        "
      >
        <button
          onClick={prev}
          className="
            grid h-12 w-12
            place-items-center
            rounded-full
            bg-white/20
            text-white
          "
        >
          ‹
        </button>

        <button
          onClick={next}
          className="
            grid h-12 w-12
            place-items-center
            rounded-full
            bg-white/20
            text-white
          "
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Hero;