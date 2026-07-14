import Container from "./aboutCommon/container";
import SectionTitle from "./aboutCommon/sectiontitle";
import { guidingPrinciples } from "./data/aboutContent";

export default function GuidingPrinciples() {
  return (
    <section className="bg-gradient-to-b from-slate-50/80 to-white py-14 md:py-20">
      <Container>
        <SectionTitle
          label="Our Guiding Principles"
          title="The Values That Drive Us Forward"
          description="We believe in building lasting relationships through trust, transparency, and exceptional service."
          className="mx-auto max-w-3xl text-center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guidingPrinciples.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-primary-dark">{principle.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{principle.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
