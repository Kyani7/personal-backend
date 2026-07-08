import { createBrowserRouter } from "react-router-dom";
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