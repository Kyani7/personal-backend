import type { Feature } from "./utils/types";

interface FeatureListProps {
  features: Feature[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="mb-7">
      <h4 className="mb-4 text-[15px] font-semibold text-brand-blue">
        Our Program Features:
      </h4>
      <ul className="space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3.5">
            <span className="mt-[7px] h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-blue" />
            <span className="text-[14px] leading-relaxed text-brand-text">
              <strong className="font-semibold text-brand-heading">
                {f.title}:
              </strong>{" "}
              <span className="text-[#555]">{f.desc}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
