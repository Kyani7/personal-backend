import { EventDetailPage } from "./Components/ThreeEvent";
import  ToranlhaRunningCup from "../../../assets/ToranlhaRunningCup.png"
type onNavigate={
    onNavigate:any;
 }

export default function MarketingEventPage({ onNavigate }:onNavigate) {
  return (
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
      upcomingEvents={[]}
      previous={{ label: "Previous", onClick: () => onNavigate("grand-us-admission-day") }}
      next={null}
      relatedEvents={[
        {
          image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
          title: "Grand US Admission Day",
          description:
            "We recently organized Grand USA Admission day with Top 10 US based Universities participating and engaging with our Students.",
          date: "Fri, Dec 19, 2025",
          time: "3:45 PM",
          tags: ["General"],
          href: "#grand-us-admission-day",
          onClick: (e) => {
            e.preventDefault();
            onNavigate("grand-us-admission-day");
          },
        },
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
      ]}
    />
  );
}