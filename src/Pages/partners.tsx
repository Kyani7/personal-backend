import AboutCta from "../components/about-us/aboutcta";
import PageHero from "../components/about-us/pagehero";
import Container from "../Components/about-us/aboutCommon/container";
import SectionTitle from "../Components/about-us/aboutCommon/sectiontitle";
import { partnerLogos } from "../Components/about-us/data/aboutContent";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Our Global Partnership Network"
        subtitle="Collaborating with world-class universities and institutions to create exceptional study abroad opportunities for our students."
      />

      <section className="py-14 md:py-20">
        <Container>
          <SectionTitle
            label="Partners"
            title="Our Trusted Partners"
            description="We collaborate with trusted partners who share our commitment to delivering high-quality education and exceptional student support."
            className="mx-auto mb-12 max-w-3xl text-center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerLogos.map((partner) => (
              <article
                key={partner}
                className="flex min-h-28 items-center justify-center rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-base font-semibold text-primary-dark">{partner}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <AboutCta />
    </main>
  );
}
