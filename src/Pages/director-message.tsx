import AboutCta from "../Components/about-us/aboutcta";
import PageHero from "../Components/about-us/pagehero";
import StatsBar from "../Components/about-us/statsbar";
import Container from "../Components/about-us/aboutCommon/container";
import SectionTitle from "../Components/about-us/aboutCommon/sectiontitle";
import { directorStats, directorValues } from "../Components/about-us/data/aboutContent";

export default function DirectorMessagePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="A Message From Our Director"
        subtitle="Words of wisdom, vision, and inspiration from our leadership guiding your educational journey."
      />

      <section className="py-14 md:py-20">
        <Container>
          <SectionTitle
            label="Inspiring You Through Words"
            title="Words of Inspiration That Guide You"
            description="Our vision is rooted in empowering students to pursue global education with clarity, confidence, and purpose. Every journey we guide is built on trust, integrity, and a deep commitment to student success."
            className="mx-auto max-w-3xl text-center"
          />
        </Container>
        <StatsBar stats={directorStats} />
      </section>

      <section className="bg-muted py-14 md:py-20">
        <Container>
          <SectionTitle
            label="Our Core Values"
            title="What Drives Our Leadership"
            className="mx-auto mb-12 max-w-3xl text-center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {directorValues.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-dark">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              label="Director's Message"
              title="Guiding Your Journey with Vision & Passion"
              description="A heartfelt message from our director, sharing insights, values, and the vision that drives us to help students achieve their international education dreams."
            />
            <blockquote className="mt-8 rounded-2xl border-l-4 border-primary bg-slate-50 p-8 text-xl font-medium italic text-primary-dark md:text-2xl">
              &ldquo;Authentic and Genuine Counseling is the core value of our service.&rdquo;
            </blockquote>
            <div className="mt-8 rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h4 className="text-lg font-bold text-primary-dark">Director&apos;s Personal Commitment</h4>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                I personally oversee and ensure every student receives the attention and guidance they deserve for a
                successful international education journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <AboutCta />
    </main>
  );
}
