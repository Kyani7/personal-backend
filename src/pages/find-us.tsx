import { useState } from "react";
import SectionTitle from "../components/common/sectiontitle";
import Container from "../components/common/container";
import BranchFilterSection, { BranchFilters } from "../components/find-us/branchfilter";
import type { BranchType } from "../components/find-us/branchcard";
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

      <section className="py-14 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <SectionTitle
              className="flex-1"
              label="Branch Information"
              title="Find a branch office near you across multiple countries"
              description="Visit your nearest location for personalized service"
            />
            <BranchFilters activeFilter={activeFilter} onChangeFilter={setActiveFilter} />
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
