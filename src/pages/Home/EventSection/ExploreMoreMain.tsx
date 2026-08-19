import  { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  EventsHero,
  EventCard,
  FilterTab,
  TimeFilterSelect,
  EmptyState,
  SAMPLE_EVENTS,
} from "./Components/ExploreMore";
import Eventbgphoto from "../../../assets/EventBgphoto.png"
/**
 * EventsPage
 */
export default function EventsPage({
  heroImage =Eventbgphoto,
  eyebrow = "CONNECTING MINDS THROUGH EXPERIENCES",
  heading = "Events That Inspire, Inform, and Empower",
  subheading = "From educational seminars to interactive workshops and global exposure events, our programs are designed to guide students with clarity.",
  categories = ["All", "General"],
  timeOptions = ["Upcoming", "Past", "All Events"],
  events = SAMPLE_EVENTS,
}) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [timeFilter, setTimeFilter] = useState(timeOptions[0]);

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const categoryMatch =
        activeCategory === "All" || e.tags.includes(activeCategory);
      const timeMatch = timeFilter === "All Events" || e.status === timeFilter;
      return categoryMatch && timeMatch;
    });
  }, [events, activeCategory, timeFilter]);

  return (
    <div className="min-h-screen bg-slate-50">
      <EventsHero
        backgroundImage={heroImage}
        title="Upcoming & Past Events"
        subtitle="Join us for exclusive education fairs, workshops, and seminars designed to help you achieve your study abroad dreams."
        onBack={() => navigate("/")}
      />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-1 flex items-center gap-2">
          <span className="h-[2px] w-8 bg-[#0078bd]" />
          <span className="text-xs font-semibold tracking-widest text-[#fbbf24]">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-700">{heading}</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">{subheading}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 ">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <FilterTab
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>
          <TimeFilterSelect value={timeFilter} onChange={setTimeFilter} options={timeOptions} />
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <EventCard key={event.id} {...event} />)
          ) : (
            <EmptyState
              message={
                timeFilter === "Upcoming"
                  ? "No upcoming events at this time."
                  : "No events found."
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}