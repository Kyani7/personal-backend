import AboutCta from "../Components/about-us/aboutcta";
import PageHero from "../Components/about-us/pagehero";
import Container from "../Components/about-us/aboutCommon/container";
import SectionTitle from "../Components/about-us/aboutCommon/sectiontitle";
import { storyGallery } from "../Components/about-us/data/aboutContent";

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        title="Moments from the Hima Aus journey"
        subtitle="Explore our collection of stories, photo essays, and memorable moments from student journeys, university meetups, and campus life experiences."
      />

      <section className="py-14 md:py-20">
        <Container>
          <SectionTitle
            label="Stories & Gallery"
            title="Student Success Stories"
            description="Over the years, we've helped thousands of students achieve their dreams of studying in Australia. Our comprehensive support system ensures that every student receives the guidance they need to succeed."
            className="mx-auto mb-12 max-w-3xl text-center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {storyGallery.map((story) => (
              <article
                key={story.title}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary-dark">{story.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <AboutCta />
    </main>
  );
}
