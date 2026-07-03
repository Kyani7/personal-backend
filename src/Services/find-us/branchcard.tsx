export type BranchType = "national" | "international";

export type Branch = {
  id: string;
  name: string;
  country: string;
  type: BranchType;
  address: string;
};

type BranchCardProps = {
  branch: Branch;
};

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
      <h3 className="text-lg font-bold text-foreground md:text-xl">{branch.name}</h3>
      <p className="mt-1 text-base font-medium text-primary md:text-lg">{branch.country}</p>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{branch.address}</p>
      <span className="mt-5 inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-foreground">
        {branch.type}
      </span>
    </article>
  );
}
