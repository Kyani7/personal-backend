import Container from "../common/container";

type Stat = {
  value: string;
  label: string;
};

type StatsBarProps = {
  stats: Stat[];
  className?: string;
};

export default function StatsBar({ stats, className = "" }: StatsBarProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white px-6 py-8 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
