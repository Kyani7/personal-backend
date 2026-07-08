
import { EventDetailPage } from "./Components/ThreeEvent";
type onNavigate={
    onNavigate:any;
 }
import EventUsAdmission from "../../../assets/EventUsAdmission.png"
export default function GrandUsAdmissionDayPage({ onNavigate }:onNavigate) {
  return (
    <EventDetailPage
      backHref="#events"
      onBack={() => onNavigate("events-list")}
      event={{
        banner: {
          image:EventUsAdmission,
          alt: "Grand US Admission Day",
        },
        date: "Friday, December 19, 2025",
        time: "10:00 AM",
        location: "Kathmandu",
        title: "Grand US Admission Day",
        description:
          "We recently organized Grand USA Admission day with Top 10 US based Universities participating and engaging with our Students. Highlights: On the Spot I20 Eligibility Test, Scholarships.",
        highlightsIntro:
          "We recently organized Grand USA Admission day with Top 10 US based Universities participating and engaging with our Students.",
        highlights: ["Highlights :", "On the Spot I20", "Eligibility Test", "Scholarships"],
        shareLinks: { facebook: "#", twitter: "#", linkedin: "#" },
      }}
      upcomingEvents={[]}
      previous={{ label: "Previous", onClick: () => onNavigate("rio-carnival-2026") }}
      next={{ label: "Next", onClick: () => onNavigate("marketing-event") }}
      relatedEvents={[
        {
          image:
            "https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e5?w=800&q=80",
          title: "Rio Carnival 2026 - EventMX",
          description:
            "Prepare to be swept away by the rhythm and spectacle of the Rio Carnival 2026, the planet's biggest and most exhilarating party!",
          date: "Wed, Dec 17, 2025",
          time: "5:17 PM",
          tags: ["General"],
          href: "#rio-carnival-2026",
          onClick: (e) => {
            e.preventDefault();
            onNavigate("rio-carnival-2026");
          },
        },
        {
          image:
            "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
          title: "Marketing Event",
          description:
            "We regularly participate in education seminars and fairs for larger audience. Also, we invest heavily in promoting Australian Education.",
          date: "Fri, Dec 26, 2025",
          time: "6:50 PM",
          tags: ["General"],
          href: "#marketing-event",
          onClick: (e) => {
            e.preventDefault();
            onNavigate("marketing-event");
          },
        },
      ]}
    />
  );
}