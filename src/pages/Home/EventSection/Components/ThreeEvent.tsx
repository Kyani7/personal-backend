import React from "react";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
// Facebook has no icon in lucide-react (lucide dropped brand/logo marks),
// so all three social icons come from react-icons instead, for consistency.
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter, CiLinkedin } from "react-icons/ci";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface BackLinkProps {
  label?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface EventBannerProps {
  image: string;
  alt?: string;
}

interface EventMetaProps {
  date: string;
  time: string;
  location: string;
}

interface ShareLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

interface ShareBarProps {
  links?: ShareLinks;
}

interface HighlightsBoxProps {
  intro: string;
  highlights?: string[];
}

interface UpcomingEventItem {
  title: string;
  href: string;
}

interface UpcomingEventsSidebarProps {
  title?: string;
  items?: UpcomingEventItem[];
}

interface NavigationLink {
  label: string;
  onClick: () => void;
}

interface PrevNextNavProps {
  previous?: NavigationLink | null;
  next?: NavigationLink | null;
}

interface EventDetailData {
  banner: {
    image: string;
    alt?: string;
  };
  date: string;
  time: string;
  location: string;
  title: string;
  description: string;
  highlightsIntro: string;
  highlights: string[];
  shareLinks?: ShareLinks;
}

interface EventDetailPageProps {
  backHref?: string;
  onBack?: () => void;
  event: EventDetailData;
  previous?: NavigationLink | null;
  next?: NavigationLink | null;
}

export function BackLink({ label = "Back to Events", href = "#", onClick }: BackLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </a>
  );
}

/**
 * EventBanner — full-width image banner.
 */
export function EventBanner({ image, alt = "" }: EventBannerProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-slate-100">
      <img src={image} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
}

/**
 * EventMeta — date / time / location row with icons.
 */
export function EventMeta({ date, time, location }: EventMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
      <span className="inline-flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        {date}
      </span>
      <span className="inline-flex items-center gap-2">
        <Clock className="h-4 w-4" />
        {time}
      </span>
      <span className="inline-flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        {location}
      </span>
    </div>
  );
}

/**
 * ShareBar — "Share:" row with social icon links.
 */
export function ShareBar({ links = {} }: ShareBarProps) {
  const icons = [
    { key: "facebook", Icon: FaFacebookF, href: links.facebook },
    { key: "twitter", Icon: CiTwitter, href: links.twitter },
    { key: "linkedin", Icon: CiLinkedin, href: links.linkedin },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-slate-700">Share:</span>
      <div className="flex items-center gap-3">
        {icons.map(({ key, Icon, href }) => (
          <a
            key={key}
            href={href || "#"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-sky-300 hover:text-sky-600 transition-colors"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

/**
 * HighlightsBox — light-gray content panel for the intro paragraph + bullet list.
 */
export function HighlightsBox({ intro, highlights = [] }: HighlightsBoxProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-6">
      {intro && <p className="text-slate-700">{intro}</p>}
      {highlights.length > 0 && (
        <ul className="mt-3 space-y-1 text-slate-700">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * UpcomingEventsSidebar — sidebar card, optionally listing links.
 */
export function UpcomingEventsSidebar({
  title = "Upcoming Events",
  items = [],
}: UpcomingEventsSidebarProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 h-fit">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {items.length > 0 && (
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="text-sm text-sky-600 hover:text-sky-700">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * PrevNextNav — previous / next navigation row.
 */
export function PrevNextNav({ previous, next }: PrevNextNavProps) {
  return (
    <div className="flex items-center justify-between border-t border-slate-200 pt-6">
      {previous ? (
        <button
          onClick={previous.onClick}
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700"
        >
          <ArrowLeft className="h-4 w-4" />
          {previous.label}
        </button>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-300">
          <ArrowLeft className="h-4 w-4" />
          No previous event
        </span>
      )}

      {next ? (
        <button
          onClick={next.onClick}
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700"
        >
          {next.label}
          <ArrowRight className="h-4 w-4" />
        </button>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-300">
          No next event
          <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}

/**
 * EventDetailPage
 * The one reusable page template. Every page file (RioCarnivalPage,
 * GrandUsAdmissionDayPage, MarketingEventPage)
 */
export function EventDetailPage({
  backHref = "#",
  onBack,
  event,
  previous,
  next,
}: EventDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <BackLink
          label="Back to Events"
          href={backHref}
          onClick={
            onBack
              ? (e) => {
                  e.preventDefault();
                  onBack();
                }
              : undefined
          }
        />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <EventBanner image={event.banner.image} alt={event.banner.alt} />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col gap-6">
        <EventMeta date={event.date} time={event.time} location={event.location} />

        <h1 className="text-3xl sm:text-4xl font-bold text-sky-700">{event.title}</h1>

        {event.description && (
          <p className="text-slate-600 -mt-2">{event.description}</p>
        )}

        <ShareBar links={event.shareLinks} />

        

        <PrevNextNav previous={previous} next={next} />
      </div>
    </div>
  );
}

interface RelatedEventProps {
  text: string;
}

export function RelatedEvent({ text }: RelatedEventProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-10">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
        <p className="text-sm leading-6">{text}</p>
      </div>
    </div>
  );
}