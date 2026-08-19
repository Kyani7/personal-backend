
import { ArrowLeft, ChevronDown, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import EventUsAdmissionCrop from "../../../../assets/EventUsAdmissionCrop.png"
import  BookerClub from "../../../../assets/BookerClub.png"
import  ToranlhaRunningCupCrop from "../../../../assets/ToranlhaRunningCupCrop.png"

interface EventsHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  onBack: () => void;
}

export function EventsHero({ backgroundImage, title, subtitle, onBack }: EventsHeroProps) {
  return (
    <div
      className="relative h-64 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-slate-900/55" />
      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
        <button
          onClick={onBack}
          className="mb-4 flex w-fit items-center gap-2 text-sm font-medium text-[#0078bd] hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/85">{subtitle}</p>
      </div>
    </div>
  );
}

/**
 * FilterTab
 * Reusable pill-style toggle button used for category filters.
 */
interface FilterTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterTab({ label, active, onClick }: FilterTabProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-sky-600 text-white shadow-sm"
          : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

/**
 * TimeFilterSelect
 * Reusable dropdown for filtering by time period (Upcoming / Past / All).
 */
interface TimeFilterSelectProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
}

export function TimeFilterSelect({ value, onChange, options }: TimeFilterSelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-4 pr-10 text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200 cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
    </div>
  );
}

/**
 * EventCard
 * Reusable event card. Pass in whatever data you have 
 */
interface EventCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
  tags?: string[];
  href?: string;
}

export function EventCard({
  image,
  title,
  description,
  date,
  time,
  tags = [],
  href = "#",
}: EventCardProps) {
  return (
    <Link
      to={href}
      className="group grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md hover:border-slate-300"
    >
      <div className="relative h-44 sm:h-full w-full overflow-hidden rounded-xl bg-slate-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col justify-between py-1 min-w-0">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
              {title}
            </h3>
            <div className="shrink-0 text-right text-xs text-slate-500 leading-tight">
              <div>{time}</div>
              <div>{date}</div>
            </div>
          </div>

          <p className="mt-2 text-sm text-slate-600 line-clamp-3">{description}</p>
        </div>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

/**
 * EmptyState
 * Reusable placeholder shown when a list has no items to display.
 */
export function EmptyState({ message = "No events at this time." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
        <Calendar className="h-6 w-6 text-slate-400" />
      </div>
      <p className="text-slate-500">{message}</p>
    </div>
  );
}

/**
 * Sample data swap .
 * Kept here just so EventsPage.jsx has something to render out of the box.
 */
export const SAMPLE_EVENTS = [
  {
    id: 1,
    image:EventUsAdmissionCrop,
    title: "Grand US Admission Day",
    description:
      "We recently organized Grand USA Admission day with Top 10 US based Universities participating and engaging with our Students. Highlights: On the Spot I20 Eligibility Test, Scholarships.",
    date: "Fri, Dec 19, 2025",
    time: "3:45 PM",
    tags: ["General"],
    status: "Past",
    href: "/explore-event/grand-us-admission-day",
  },
  {
    id: 2,
    image:BookerClub,
    title: "Rio Carnival 2026 - EventMX",
    description:
      "Prepare to be swept away by the rhythm and spectacle of the Rio Carnival 2026, the planet's biggest and most exhilarating party! For five days and nights, the city of Rio de Janeiro transforms into a non-stop celebration of music, dance, and vibrant energy.",
    date: "Wed, Dec 17, 2025",
    time: "5:17 PM",
    tags: ["General"],
    status: "Past",
    href: "/explore-event/rio-carnival-2026",
  },
  {
    id: 3,
    image:ToranlhaRunningCupCrop,
    title: "Marketing Event",
    description:
      "We regularly participate in education seminars and fairs for larger audience. Also, we invest heavily in promoting Australian Education in respective regions with local schools, colleges conducting regular workshop and presentations.",
    date: "Fri, Dec 26, 2025",
    time: "6:50 PM",
    tags: ["General"],
    status: "Past",
    href: "/explore-event/marketing-event",
  },
];