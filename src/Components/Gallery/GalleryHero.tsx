import heroImage from "../../assets/images/official-welcome-group.jpg";

const GalleryHero = () => {
  return (
    <section
      className="relative flex h-[460px] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-[0.2em] text-brand-100 uppercase">
          Home / Gallery
        </p>

        <div className="mt-5 flex items-center gap-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-accent-400"></span>
          <span className="h-px w-8 bg-accent-400/60"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400/70"></span>
          <span className="h-px w-8 bg-accent-400/40"></span>
          <span className="h-1 w-1 rounded-full bg-accent-400/50"></span>
        </div>

        <h1 className="mt-6 font-display text-6xl font-semibold text-white">
          Stories &amp; <span className="italic text-brand-100">Gallery</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
          Explore stories, photo essays, and memorable moments from
          student journeys, university meetups, and campus life.
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;