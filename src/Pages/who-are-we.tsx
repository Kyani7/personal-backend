import { Link } from "react-router-dom";
import AboutCta from "../Components/about-us/aboutcta";
import PageHero from "../Components/about-us/pagehero";
import StatsBar from "../Components/about-us/statsbar";
import Container from "../Components/about-us/aboutCommon/container";
import SectionTitle from "../Components/about-us/aboutCommon/sectiontitle";
import { missionVisionCards, whoWeAreStats } from "../Components/about-us/data/aboutContent";

export default function WhoAreWePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Who We Are?"
        subtitle="Hima Aus Education Consultancy is education and visa consultancy firm dedicated to guiding international students and aspiring migrants towards their global academic and career aspirations."
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <SectionTitle
              label="About Us"
              title="Who We Are?"
              className="mx-auto max-w-3xl text-center"
            />
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Hima Aus Education Australia Pty Ltd is an established education and visa consultancy firm providing a
              wide range of services to international students and aspiring migrants since 2008. Our unrivalled service,
              support and guidance to students begins in their home country and continues throughout their stay and
              educational journey in Australia.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              We have grown and evolved over the years and now operate from 14 branch offices across 6 countries. Our
              services include course and institution selection, visa assistance, pre-departure briefing, ongoing student
              support and pathways to work and migration.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/our-services"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary/90"
              >
                Our Services
              </Link>
              <Link
                to="/contactUs"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-muted"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-14 md:py-20">
        <Container>
          <p className="mx-auto max-w-4xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            Hima Aus Education Australia Pty Ltd is powered by a highly dedicated team of education and migration
            professionals with extensive experience in student counselling, training, and global educational pathways.
            We believe strongly in quality service, transparency, and professional delivery — values that define every
            interaction we have with our students.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            All of our Educational Counselors and Migration Advisors hold relevant certifications and professional
            qualifications. We ensure continuous training to keep our team aligned with the latest educational
            opportunities, migration legislation, and student support standards.
          </p>
        </Container>
      </section>

      <StatsBar stats={whoWeAreStats} className="bg-white" />

      <section className="py-14 md:py-20">
        <Container>
          <SectionTitle
            label="Our Purpose"
            title="Mission, Vision & Goals"
            description="The principles that guide every student journey we support."
            className="mx-auto mb-12 max-w-3xl text-center"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {missionVisionCards.map((card) => (
              <article
                key={card.label}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">{card.label}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{card.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <AboutCta />
    </main>
  );
}
