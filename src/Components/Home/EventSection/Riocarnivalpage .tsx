import { EventDetailPage } from "./Components/ThreeEvent";
import  BookerClub from "../../../assets/BookerClub.png"
/**
 * RioCarnivalPage
 * Everything is passed in manually as props to EventDetailPage —
 * no shared data file. `onNavigate` is called with the target page's
 * name so App.jsx can switch pages when Previous/Next/Related is clicked.
 *
 * Props:
 *  - onNavigate: (pageName) => void
 */

 type onNavigate={
    onNavigate:any;
 }
export default function RioCarnivalPage({ onNavigate }:onNavigate) {
  return (
    <EventDetailPage
      backHref="#events"
      onBack={() => onNavigate("events-list")}
      event={{
        banner: {
          image:BookerClub,
          alt: "Rio Carnival 2026",
        },
        date: "Wednesday, December 17, 2025",
        time: "11:32 AM",
        location: "Kathmandu, New Baneshwor",
        title: "Rio Carnival 2026 - EventMX",
        description:
          "Prepare to be swept away by the rhythm and spectacle of the Rio Carnival 2026, the planet's biggest and most exhilarating party! For five days and nights, the city of Rio de Janeiro transforms into a non-stop celebration",
        highlightsIntro:
          "Prepare to be swept away by the rhythm and spectacle of the Rio Carnival 2026, the planet's biggest and most exhilarating party! For five days and nights, the city of Rio de Janeiro transforms into a non-stop celebration of music, dance, and vibrant energy. The heart of the event is the iconic Samba Parade at the Sambadrome, where the city's top samba schools compete in a dazzling display of elaborate costumes, massive floats, and breathtaking choreography. This is a must-see event that showcases the passion and artistry of Brazilian culture. Beyond the Sambadrome, the entire city comes alive with hundreds of free street parties, or \"blocos,\" where everyone is invited to dance samba, sing along, and join the joyous crowds.",
        highlights: [],
        shareLinks: { facebook: "#", twitter: "#", linkedin: "#" },
      }}
      upcomingEvents={[]}
      previous={null}
      next={{ label: "Next", onClick: () => onNavigate("grand-us-admission-day") }}
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