import type { Testimonial } from './data/testimonials';

export default function TestimonialCard({ name, role, avatar, quote }: Testimonial) {
  return (
    <div className="flex h-full min-h-[480px] flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left">
      <div className="mb-4 flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-16 w-16 shrink-0 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-base font-bold text-slate-900">{name}</p>
          <p className="text-sm leading-snug text-slate-500">{role}</p>
        </div>
      </div>
      <p className="text-base italic leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}