
import { EventDetailPage, RelatedEvent } from "./Components/ThreeEvent";
type onNavigate={
    onNavigate:any;
 }
import EventUsAdmission from "../../../assets/EventUsAdmission.png"
export default function GrandUsAdmissionDayPage({ onNavigate }:onNavigate) {
  return (
    <>
    
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
      previous={{ label: "Previous", onClick: () => onNavigate("rio-carnival-2026") }}
      next={{ label: "Next", onClick: () => onNavigate("marketing-event") }}
    />
        <RelatedEvent
        text="There is no RelatedEvent Right now"
        />
    </>
  );
}