import Container from "../common/container";
import SectionTitle from "../common/sectiontitle";
import { milestones } from "../../data/aboutContent";

export default function MilestoneTimeline() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <SectionTitle
          label="Our milestone"
          title="Milestones That Define Our Excellence"
          description="From humble beginnings to industry leadership, trace our journey of growth, innovation, and commitment to transforming student lives worldwide."
        />
        <div className="relative mt-12 space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-primary/20 md:before:left-1/2 md:before:-translate-x-px">
          {milestones.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex flex-col gap-4 md:w-1/2 ${
                index % 2 === 0 ? "md:ml-0 md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute top-1 h-4 w-4 rounded-full border-4 border-white bg-primary shadow md:top-2 ${
                  index % 2 === 0 ? "left-2 md:-right-2" : "left-2 md:-left-2"
                }`}
              />
              <div className="ml-10 rounded-2xl border border-border bg-white p-6 shadow-sm md:ml-0">
                <span className="text-sm font-bold uppercase tracking-wider text-secondary">{item.year}</span>
                <h4 className="mt-2 text-xl font-bold text-primary-dark">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
