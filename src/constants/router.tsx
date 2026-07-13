import { createBrowserRouter, useNavigate } from "react-router-dom";

import App from "../App";

import AllpodCast from "../Components/Home/PodCast/AllpodCast.tsx";

import EventsPage from "../Components/Home/EventSection/ExploreMoreMain.tsx";
import GrandUsAdmissionDayPage from "../Components/Home/EventSection/Grandusadmissiondaypage.tsx";
import MarketingEventPage from "../Components/Home/EventSection/Marketingeventpage.tsx";
import RioCarnivalPage from "../Components/Home/EventSection/Riocarnivalpage .tsx";

import DestinationMain from "../Services/Destination-Country/DestinationPages.tsx";
import MigrationMain from "../Services/Visa-Services/Migration-services/MigrationMain.tsx";
import Student from "../Services/Visa-Services/Student-services/Student.tsx";
import Visitor from "../Services/Visa-Services/Visitor-services/Visitor.tsx";

import Airport from "../Components/Home/whySection/Components/ourServices/Airpot/Airpot.tsx";
import Counselling from "../Components/Home/whySection/Components/ourServices/Counselling/Counselling.tsx";
import Course from "../Components/Home/whySection/Components/ourServices/Course/Course.tsx";
import Departure from "../Components/Home/whySection/Components/ourServices/Departure/Departure.tsx";
import Instuation from "../Components/Home/whySection/Components/ourServices/Institutation/Instuation.tsx";
import Scholarship from "../Components/Home/whySection/Components/ourServices/Scholarship/Scholarship";
import Virtual from "../Components/Home/whySection/Components/ourServices/Virtual/Virtual";
import VisaApplication from "../Components/Home/whySection/Components/ourServices/VisaApplication/Application.tsx";

import ContactMain from "../Components/Contact/Contact.tsx";

import Gallery from "../Components/Gallery/Gallery.tsx";
import Main from "../Services/ServceMainPage.tsx";
import HomeMain from "../Components/Home/HomeMain.tsx";

function EventDetailRoute({
  pageComponent: PageComponent,
}: {
  pageComponent: React.ComponentType<{
    onNavigate: (pageName: string) => void;
  }>;
}) {
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
        element: <HomeMain/>,
      },
      //home our services
      {
        path: "why-choose",
        children: [
          {
            path: "scholarship",
            element: <Scholarship />,
          },
          {
            path: "counselling",
            element: <Counselling />,
          },
          {
            path: "course",
            element: <Course />,
          },
          {
            path: "institution",
            element: <Instuation />,
          },
          {
            path: "virtual",
            element: <Virtual />,
          },
          {
            path: "visa-application",
            element: <VisaApplication />,
          },
          {
            path: "departure",
            element: <Departure />,
          },
          {
            path: "airport",
            element: <Airport />,
          },
        ],
      },
      // Allpodcast
      {
        path: "all-podcast",
        element: <AllpodCast />,
      },
      // all event home
      {
        path: "explore-event",
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: "grand-us-admission-day",
            element: (
              <EventDetailRoute pageComponent={GrandUsAdmissionDayPage} />
            ),
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
      // about
      {
        path: "about",
        element: "",
      },
      // service main page
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Main />,
          },
          {
            path:"english-testing-preparation",
            element:"",
          },
          {
            path: "destination-country",
            element: <DestinationMain />,
          },
          {
            path: "visa-service/migration-visa",
            element: <MigrationMain />,
          },
          {
            path: "visa-service/student-visa",
            element: <Student />,
          },
          {
            path: "visa-service/visitor-visa",
            element: <Visitor />,
          },
        ],
      },
      {
        path: "gallery",
        element: <Gallery />,
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
        element: <ContactMain />,
      },
    ],
  },
]);

export default router;