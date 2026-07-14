import AboutCta from "../components/about-us/aboutcta";
import PageHero from "../components/about-us/pagehero";
import Container from "../Components/about-us/aboutCommon/container";
import SectionTitle from "../Components/about-us/aboutCommon/sectiontitle";
import { eventsList } from "../Components/about-us/data/aboutContent";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Upcoming & Past Events"
        subtitle="Join us for exclusive education fairs, workshops, and seminars designed to help you achieve your study abroad dreams."
      />

      <section className="py-14 md:py-20">
        <Container>
          <SectionTitle
            label="Connecting Minds Through Experiences"
            title="Events That Inspire, Inform, and Empower"
            description="From educational seminars to interactive workshops and global exposure events, our programs are designed to guide students with clarity."
            className="mx-auto mb-12 max-w-3xl text-center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {eventsList.map((event) => (
              <article
                key={event.title}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{event.date}</span>
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary-dark">{event.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{event.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <AboutCta />
    </main>
  );
}
