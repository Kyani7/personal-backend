import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import testimonials from './data/testimonials.ts';
import TestimonialCard from './TestimonialCard.tsx';

const TOTAL = testimonials.length;

/** Tracks how many cards are visible at once, matching the sm/lg breakpoints
 *  used elsewhere on the site, so the slide distance always lines up with
 *  the actual card width on screen. */
function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const compute = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };
    const update = () => setCount(compute());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return count;
}

export default function TestimonialsSection() {
  const perView = useVisibleCount();
  const maxIndex = Math.max(0, TOTAL - perView);
  const [index, setIndex] = useState(0);

  // Keep the current position valid if the viewport is resized across a
  // breakpoint (e.g. desktop showing 3 cards, index 5, resized to mobile).
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const isPrevDisabled = index === 0;
  const isNextDisabled = index === maxIndex;
  const step = 100 / perView;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
          What Our Students Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
          Don&rsquo;t just take our word for it &mdash; hear from students who have successfully
          transformed their lives with our guidance.
        </p>

        <div className="relative mt-14 px-9 sm:px-12 lg:px-0">
          <button
            type="button"
            onClick={goPrev}
            disabled={isPrevDisabled}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 flex -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-400 transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400 lg:-left-8 xl:-left-10"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * step}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="shrink-0 px-2.5" style={{ flex: `0 0 ${step}%` }}>
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={isNextDisabled}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 flex -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-400 transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400 lg:-right-8 xl:-right-10"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="mt-8 text-sm font-semibold text-brand-gold">
  {index + 1} / {maxIndex + 1}
</p>
      </div>
    </section>
  );
}