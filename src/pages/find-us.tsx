import { useState } from "react";
import SectionTitle from "../Components/about-us/aboutCommon/sectiontitle";
import Container from "../Components/about-us/aboutCommon/container";
import BranchFilterSection, { BranchFilters } from "../Components/find-us/branchfilter";
import type { BranchType } from "../data/branches";
import AboutCta from "../Components/about-us/aboutcta";
import FindUsHero from "../Components/find-us/hero";
import FindUsWorldMap from "../Components/find-us/worldmap";
import Footer from "./Foooter";
import { allBranches } from "../data/branches";

type BranchFilter = "all" | BranchType;

export default function FindUsPage() {
  const [activeFilter, setActiveFilter] = useState<BranchFilter>("all");

  return (
    <main className="min-h-screen bg-background">
      <FindUsHero />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          {/* Header row: title left, filters right — like live site */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <SectionTitle
              className="max-w-2xl"
              label="Branch Information"
              title="Find a branch office near you across multiple countries"
              description="Visit your nearest location for personalized service"
            />
            <div className="sm:pt-8">
              <BranchFilters activeFilter={activeFilter} onChangeFilter={setActiveFilter} />
            </div>
          </div>

          <BranchFilterSection
            branches={allBranches}
            activeFilter={activeFilter}
            onChangeFilter={setActiveFilter}
          />

          <FindUsWorldMap />
        </Container>
      </section>

      <AboutCta />
      <Footer />
    </main>
  );
}
