import { EventDetailPage, RelatedEvent } from "./Components/ThreeEvent";
import  BookerClub from "../../../assets/BookerClub.png"

 type onNavigate={
    onNavigate:any;
 }
export default function RioCarnivalPage({ onNavigate }:onNavigate) {
  return (
    <>
    
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
    />
    <RelatedEvent
        text="There is no RelatedEvent Right now"
    />
    
    </>
  );
}