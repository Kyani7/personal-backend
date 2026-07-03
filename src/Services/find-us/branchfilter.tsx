import BranchCard, { type Branch, type BranchType } from "./branchcard";

export type BranchFilter = "all" | BranchType;

type BranchFilterProps = {
  branches: Branch[];
  activeFilter: BranchFilter;
  onChangeFilter: (filter: BranchFilter) => void;
  showFiltersOnly?: boolean;
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
    <div className="flex flex-wrap items-center gap-2 rounded-full bg-muted p-1.5">
      {filters.map((filter) => {
        const isActive = filter === activeFilter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChangeFilter(filter)}
            className={`rounded-full px-5 py-2 text-base font-semibold transition-colors md:px-6 md:py-2.5 md:text-lg ${
              isActive
                ? "bg-secondary text-secondary-foreground shadow-sm"
                : "text-foreground hover:bg-background"
            }`}
          >
            {filterLabels[filter]}
          </button>
        );
      })}
    </div>
  );
}

export default function BranchFilterSection({
  branches,
  activeFilter,
  onChangeFilter,
  showFiltersOnly = false,
}: BranchFilterProps) {
  const visibleBranches =
    activeFilter === "all" ? branches : branches.filter((branch) => branch.type === activeFilter);

  if (showFiltersOnly) {
    return <BranchFilters activeFilter={activeFilter} onChangeFilter={onChangeFilter} />;
  }

  return (
    <section>
      <div className="mt-8 md:mt-10">
        <h3 className="mb-5 text-xl font-bold text-primary-dark md:text-2xl">Available Branch Locations</h3>

        {visibleBranches.length === 0 ? (
          <div className="rounded-2xl border border-border px-6 py-14 text-center text-base text-muted-foreground md:py-20 md:text-lg">
            No branch offices available in this category at the moment.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleBranches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
