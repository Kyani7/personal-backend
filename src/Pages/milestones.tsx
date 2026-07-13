import AboutCta from "../components/about-us/aboutcta";
import MilestoneTimeline from "../components/about-us/milestonetimeline";
import PageHero from "../components/about-us/pagehero";
import Footer from "../components/layout/footer";

export default function MilestonesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        title="Our Milestones"
        subtitle="From a humble start to becoming a trusted global education consultancy — our journey is defined by dedication, success, and student achievements."
      />

      <MilestoneTimeline />
      <AboutCta />
      <Footer />
    </main>
  );
}
