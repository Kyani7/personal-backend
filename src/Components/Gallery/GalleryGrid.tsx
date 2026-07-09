import GalleryCard from "./GalleryCard";
import { galleryImages } from "./GalleryData";

const categories = Array.from(
  new Set(galleryImages.map((item) => item.category))
);

const GalleryGrid = () => {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 max-w-xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-500 uppercase">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
            Story Collections
          </h2>
          <p className="mt-4 text-ink-soft">
            Click into any collection to see the full photo essay.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <h3 className="mb-6 font-display text-2xl font-semibold text-ink">
              {category}
            </h3>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {galleryImages
                .filter((item) => item.category === category)
                .map((item) => (
                  <GalleryCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;