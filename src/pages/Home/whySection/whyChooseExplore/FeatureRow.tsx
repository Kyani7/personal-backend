import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Feature } from './data/features';

interface FeatureRowProps extends Feature {
  reverse: boolean;
}

/**
 * FeatureRow
 * Renders one numbered service block. `reverse` flips the image/copy
 * order so the section reads as an alternating zig-zag on desktop.
 */
export default function FeatureRow({
  number,
  title,
  description,
  points,
  image,
  slug,
  reverse,
}: FeatureRowProps) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-2 lg:gap-14 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-80 lg:h-[340px]"
        />
      </div>

      <div>
        <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-light text-sm font-bold text-brand-blue">
          {number}
        </span>
        <h3 className="mb-3 text-2xl font-bold text-brand-blue sm:text-[28px]">{title}</h3>
        <p className="mb-5 max-w-md text-sm leading-relaxed text-slate-500 sm:text-[15px]">
          {description}
        </p>

        <ul className="mb-6 space-y-2.5">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <CheckCircle2 size={18} className="shrink-0 text-brand-gold" strokeWidth={2.4} />
              {point}
            </li>
          ))}
        </ul>

        <Link
          to={`/why-choose-us-learn/${slug}`}
          onTouchStart={() => {}}
          className="inline-flex items-center gap-2.5 rounded-xl bg-brand-blue px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#ffb800] active:bg-[#e69700] active:scale-95 touch-manipulation select-none"
        >
          Learn More
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
