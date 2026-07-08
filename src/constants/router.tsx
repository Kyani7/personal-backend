import { createBrowserRouter, useNavigate } from "react-router-dom";
import Hero from "../Components/Home/FirstSection/Components/Hero.tsx";
import WhyMain from "../Components/Home/whySection/WhyMain.tsx";
import App from "../App";
import HomeGalleryMain from "../Components/Home/HomeGallerySection/HomeGalleryMain";
import { BannerMain } from "../Components/Home/BannerSection/BannerMain";
import { HomeBlogs } from "../Components/Home/HomeBlogs/HomeBlogs.tsx";
import PodCast from "../Components/Home/PodCast/PodCast.tsx";
import EventMain from "../Components/Home/EventSection/EventMain.tsx";
import ConsultationForm from "../Components/Home/Form/Consultation.tsx";
import FAQSection from "../Components/Home/faqsSection/faqsSection.tsx";
import AllpodCast from "../Components/Home/PodCast/AllPodCast.tsx";

import EventsPage from "../Components/Home/EventSection/ExploreMoreMain.tsx";
import GrandUsAdmissionDayPage from "../Components/Home/EventSection/Grandusadmissiondaypage.tsx";
import MarketingEventPage from "../Components/Home/EventSection/Marketingeventpage.tsx";
import RioCarnivalPage from "../Components/Home/EventSection/Riocarnivalpage .tsx";

function EventDetailRoute({ pageComponent: PageComponent }: { pageComponent: React.ComponentType<{ onNavigate: (pageName: string) => void }> }) {
  const navigate = useNavigate();

  const handleNavigate = (pageName: string) => {
    switch (pageName) {
      case "events-list":
        navigate("/explore-event");
        break;
      case "grand-us-admission-day":
        navigate("/explore-event/grand-us-admission-day");
        break;
      case "rio-carnival-2026":
        navigate("/explore-event/rio-carnival-2026");
        break;
      case "marketing-event":
        navigate("/explore-event/marketing-event");
        break;
      default:
        navigate("/explore-event");
        break;
    }
  };

  return <PageComponent onNavigate={handleNavigate} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <WhyMain />
            <BannerMain/>
            <HomeGalleryMain/>
            <HomeBlogs/>
            <PodCast/>
            <EventMain/>
            <ConsultationForm/>
            <FAQSection/>
          </>
        ),
      },
      {
    path: "all-podcast",
    element: <AllpodCast />,
      },
      {
        path: "explore-event",
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: "grand-us-admission-day",
            element: <EventDetailRoute pageComponent={GrandUsAdmissionDayPage} />,
          },
          {
            path: "rio-carnival-2026",
            element: <EventDetailRoute pageComponent={RioCarnivalPage} />,
          },
          {
            path: "marketing-event",
            element: <EventDetailRoute pageComponent={MarketingEventPage} />,
          },
        ],
      },
      {
        path: "about",
        element: "",
      },
      {
        path: "services",
        element: "",
      },
      {
        path: "gallery",
        element: "",
      },
      {
        path: "blog",
        element: "",
      },
      {
        path: "find-us",
        element: "",
      },
      {
        path: "contact-us",
        element: "",
      },
    ],
  },
  {
    path:"/"
  }
]);

export default router;