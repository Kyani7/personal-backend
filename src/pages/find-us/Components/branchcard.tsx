import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Branch } from "../../../data/branches";

type BranchCardProps = {
  branch: Branch;
};

const FALLBACK_GRADIENTS: Record<string, string> = {
  national: "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
  international: "linear-gradient(135deg, #0077bd 0%, #005a8e 100%)",
};

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 md:h-52">
        {branch.image ? (
          <img
            src={branch.image}
            alt={branch.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.style.background = FALLBACK_GRADIENTS[branch.type];
              }
            }}
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ background: FALLBACK_GRADIENTS[branch.type] }}
          />
        )}
        {/* Type badge */}
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow ${
            branch.type === "national"
              ? "bg-[#ffba1a] text-gray-900"
              : "bg-[#0078bd]"
          }`}
        >
          {branch.type}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 md:p-6">
        {/* City / Country */}
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#0078bd]">
          {branch.city}, {branch.country}
        </p>

        {/* Branch name */}
        <h3 className="text-lg font-bold leading-snug text-gray-900 md:text-xl">
          {branch.name}
        </h3>

        {/* Details */}
        <ul className="mt-4 space-y-2.5">
          <li className="flex items-start gap-2.5 text-sm text-gray-600 md:text-base">
            <MapPin
              size={16}
              className="mt-0.5 shrink-0 text-[#0078bd]"
            />
            <span className="leading-relaxed">{branch.address}</span>
          </li>
          <li className="flex items-center gap-2.5 text-sm text-gray-600 md:text-base">
            <Phone size={16} className="shrink-0 text-[#0078bd]" />
            <a
              href={`tel:${branch.phone}`}
              className="transition-colors hover:text-[#0078bd]"
            >
              {branch.phone}
            </a>
          </li>
          <li className="flex items-center gap-2.5 text-sm text-gray-600 md:text-base">
            <Mail size={16} className="shrink-0 text-[#0078bd]" />
            <a
              href={`mailto:${branch.email}`}
              className="transition-colors hover:text-[#0078bd]"
            >
              {branch.email}
            </a>
          </li>
          <li className="flex items-center gap-2.5 text-sm text-gray-600 md:text-base">
            <Clock size={16} className="shrink-0 text-[#0078bd]" />
            <span>{branch.hours}</span>
          </li>
        </ul>
      </div>
    </article>
  );
}
