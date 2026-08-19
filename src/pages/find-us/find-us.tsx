import { useState } from "react";
import BranchFilterSection, { BranchFilters } from "./Components/branchfilter";
import type { BranchType } from "../../data/branches";
import FindUsHero from "./Components/hero";
import FindUsWorldMap from "./Components/worldmap";
import { allBranches } from "../../data/branches";
import CTASection from "../Services/EnglishTesting/components/CTASection";
import SectionTitle from "./Components/sectiontitle";
import Container from "./Components/container";

type BranchFilter = "all" | BranchType;

export default function FindUsPage() {
  const [activeFilter, setActiveFilter] = useState<BranchFilter>("all");

  return (
    <main className="min-h-screen bg-white">
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

      <CTASection />
    </main>
  );
}
