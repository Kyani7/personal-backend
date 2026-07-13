import AlternatingSection from "../components/about-us/alternatingsection";
import AboutCta from "../components/about-us/aboutcta";
import GuidingPrinciples from "../components/about-us/guidingprinciples";
import MilestoneTimeline from "../components/about-us/milestonetimeline";
import PageHero from "../components/about-us/pagehero";
import StatsBar from "../components/about-us/statsbar";
import Container from "../components/common/container";
import SectionTitle from "../components/common/sectiontitle";
import Footer from "../components/layout/footer";
import { companyProfileSections, companyStats } from "../data/aboutContent";

export default function CompanyProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        title="Learn more About Us"
        subtitle="Our experienced team guides students in education consultancy, visa processing, and career planning to achieve their international study goals."
      />

      <GuidingPrinciples />

      <div className="bg-gradient-to-b from-white to-slate-50/50">
        {companyProfileSections.map((section) => (
          <AlternatingSection key={section.title} {...section} />
        ))}
      </div>

      <section className="py-12 md:py-20">
        <Container>
          <SectionTitle
            label="Expert Professionals"
            title="Meet Our Leadership & Team"
            description="Our team combines years of industry experience with a passion for student success. Each member brings unique expertise to guide you through every step of your journey."
            className="mx-auto max-w-3xl text-center"
          />
        </Container>
        <StatsBar stats={companyStats} />
      </section>

      <MilestoneTimeline />
      <AboutCta />
      <Footer />
    </main>
  );
}
