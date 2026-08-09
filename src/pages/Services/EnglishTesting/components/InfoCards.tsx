import type { InfoCard } from "../utils/types";

interface InfoCardsProps {
  title: string;
  items: InfoCard[];
}

export default function InfoCards({ title, items }: InfoCardsProps) {
  return (
    <div className="rounded-2xl bg-brand-panel p-6 sm:p-8">
      <h3 className="mb-6 text-lg font-semibold text-brand-blue sm:text-xl">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-x-14 gap-y-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i}>
            <p className="mb-2 text-sm font-semibold text-gray-900 sm:text-base">
              {item.title}
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}