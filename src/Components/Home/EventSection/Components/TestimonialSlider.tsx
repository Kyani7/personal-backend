import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

export interface Testimonial {
  image: string;
  quote: string;
  name: string;
  course: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialSlider({
  testimonials,
  autoPlay = true,
  interval = 4000,
}: TestimonialSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const current = testimonials[active];
  if (!current) return null;

  return (
    <div className="bg-white px-4 sm:px-8 lg:px-15 mt-10 lg:mt-20">
  <Quote className="h-4 w-4 text-text" />

  <p className="mt-5 text-slate-700 leading-relaxed min-h-[120px] md:min-h-[96px]">
    {current.quote}
  </p>

  <div className="flex items-center gap-3 mt-6">
    <img
      src={current.image}
      alt={current.name}
      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
    />

    <div className="min-w-0">
      <p className="font-bold text-sm text-slate-900 tracking-wide break-words">
        {current.name}
      </p>

      <p className="text-sm text-slate-500 break-words">
        {current.course}
      </p>
    </div>
  </div>

 <div className="flex items-center justify-center gap-2 mt-8 md:mt-10 lg:mt-12 flex-wrap">
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setActive(index)}
        aria-label={`Go to testimonial ${index + 1}`}
        className={`h-2 rounded-full transition-all duration-300 ${
          index === active
            ? "w-6 bg-slate-900"
            : "w-1.5 bg-slate-300 hover:bg-slate-400"
        }`}
      />
    ))}
  </div>
</div>
  );
}