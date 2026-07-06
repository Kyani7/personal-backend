type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionTitle({ label, title, description, className = "" }: SectionTitleProps) {
  return (
    <div className={className}>
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary md:text-base">{label}</p>
      </div>
      <h2 className="text-2xl font-bold leading-tight text-primary-dark sm:text-3xl md:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-base text-muted-foreground md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
