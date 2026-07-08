import { EventDetailPage, RelatedEvent } from "./Components/ThreeEvent";
import  ToranlhaRunningCup from "../../../assets/ToranlhaRunningCup.png"
type onNavigate={
    onNavigate:any;
 }

export default function MarketingEventPage({ onNavigate }:onNavigate) {
  return (
    <>
    
    <EventDetailPage
      backHref="#events"
      onBack={() => onNavigate("events-list")}
      event={{
        banner: {
          image:ToranlhaRunningCup,
          alt: "Marketing Event",
        },
        date: "Friday, December 26, 2025",
        time: "01:05 PM",
        location: "Itahari, Nepal",
        title: "Marketing Event",
        description:
          "We regularly participate in education seminars and fairs for larger audience. Also, we invest heavily in promoting Australian Education in respective regions with local schools, colleges conducting regular workshop and p",
        highlightsIntro:
          "We regularly participate in education seminars and fairs for larger audience. Also, we invest heavily in promoting Australian Education in respective regions with local schools, colleges conducting regular workshop and presentations to educate and provide students with advance and updated knowledge regarding Australian education.",
        highlights: [],
        shareLinks: { facebook: "#", twitter: "#", linkedin: "#" },
      }}
      previous={{ label: "Previous", onClick: () => onNavigate("grand-us-admission-day") }}
      next={null}
    />
    <RelatedEvent
        text="There is no RelatedEvent Right now"
    />
    </>
  );
}