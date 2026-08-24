interface QuickFactsCardProps {
  label: string;
  facts: string[];
}

export default function QuickFactsCard({ label, facts }: QuickFactsCardProps) {
  return (
    <div className="rounded-lg border border-red-500 bg-[#fffbe8] p-5">
      <p className="mb-3 text-[14px] font-bold text-brand-blue">
        {label} Quick Facts:
      </p>
      <ul className="space-y-2">
        {facts.map((fact, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-px text-[14px] text-brand-blue">•</span>
            <span className="text-[13px] leading-snug text-brand-text">
              {fact}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
