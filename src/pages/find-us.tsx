import { useState } from "react";
import SectionTitle from "../components/common/sectiontitle";
import Container from "../components/common/container";
import BranchFilterSection, { BranchFilters } from "../components/find-us/branchfilter";
import type { BranchType } from "../data/branches";
import FindUsCta from "../components/find-us/cta";
import FindUsHero from "../components/find-us/hero";
import FindUsWorldMap from "../components/find-us/worldmap";
import Footer from "../components/layout/footer";
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

      <FindUsCta />
      <Footer />
    </main>
  );
}
