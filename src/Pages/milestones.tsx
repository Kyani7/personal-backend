import AboutCta from "../Components/about-us/aboutcta";
import MilestoneTimeline from "../Components/about-us/milestonetimeline";
import PageHero from "../Components/about-us/pagehero";


export default function MilestonesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        title="Our Milestones"
        subtitle="From a humble start to becoming a trusted global education consultancy — our journey is defined by dedication, success, and student achievements."
      />

      <MilestoneTimeline />
      <AboutCta />
    </main>
  );
}
