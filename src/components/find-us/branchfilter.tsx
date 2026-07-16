import type { Branch, BranchType } from "../../data/branches";
import BranchCard from "./branchcard";

export type BranchFilter = "all" | BranchType;

type BranchFilterProps = {
  branches: Branch[];
  activeFilter: BranchFilter;
  onChangeFilter: (filter: BranchFilter) => void;
};

const filterLabels: Record<BranchFilter, string> = {
  all: "All",
  national: "National",
  international: "International",
};

export function BranchFilters({
  activeFilter,
  onChangeFilter,
}: Pick<BranchFilterProps, "activeFilter" | "onChangeFilter">) {
  const filters: BranchFilter[] = ["all", "national", "international"];

  return (
    <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gray-100 p-1">
      {filters.map((filter) => {
        const isActive = filter === activeFilter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChangeFilter(filter)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all md:px-6 md:py-2.5 md:text-base ${
              isActive
                ? "bg-[#0078bd] text-white shadow-sm"
                : "text-gray-900 hover:bg-white"
            }`}
          >
            {filterLabels[filter]}
          </button>
        );
      })}
    </div>
  );
}

export default function BranchFilterSection({ branches, activeFilter }: BranchFilterProps) {
  const visibleBranches =
    activeFilter === "all" ? branches : branches.filter((branch) => branch.type === activeFilter);

  return (
    <section className="mt-8 md:mt-10">
      {/* Bordered content panel — matches live site */}
      <div className="min-h-[200px] rounded-xl border border-gray-200 bg-white md:min-h-[240px]">
        {visibleBranches.length === 0 ? (
          <div className="flex min-h-[200px] items-center justify-center px-6 py-16 md:min-h-[240px] md:py-20">
            <p className="text-center text-base text-gray-600 md:text-lg">
              No branch offices available in this category at the moment.
            </p>
          </div>
        ) : (
          <div className="p-5 md:p-6">
            <h3 className="mb-5 text-lg font-bold text-[#0078bd] md:text-xl">Available Branch Locations</h3>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleBranches.map((branch) => (
                <BranchCard key={branch.id} branch={branch} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
