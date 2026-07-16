type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionTitle({ label, title, description, className = "" }: SectionTitleProps) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-center gap-2">
        <span className="h-[2px] w-6 bg-primary" aria-hidden="true" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary md:text-sm">{label}</p>
      </div>
      <h2 className="text-2xl font-bold leading-snug text-primary sm:text-3xl md:text-[2rem] lg:text-[2.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
