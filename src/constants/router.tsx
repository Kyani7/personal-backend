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
        path: "about",
        element: <div className="pt-24 px-6 text-white">About us page</div>,
      },
      {
        path: "services",
        element: <div className="pt-24 px-6 text-white">Our services page</div>,
      },
      {
        path: "gallery",
        element: <HomeGalleryMain />,
      },
      {
        path: "blog",
        element: <HomeBlogs />,
      },
      {
        path: "find-us",
        element: <div className="pt-24 px-6 text-white">Find us page</div>,
      },
      {
        path: "contact-us",
        element: <div className="pt-24 px-6 text-white">Contact us page</div>,
      },
    ],
  },
]);

export default router;