import { memo } from 'react';
import Hero from './FirstSection/Components/Hero';
import HomeGalleryMain from './HomeGallerySection/HomeGalleryMain';
import { HomeBlogs } from './HomeBlogs/HomeBlogs';
import PodCast from './PodCast/PodCast';
import EventMain from './EventSection/EventMain';
import ConsultationForm from './Form/Consultation';
import FaqsMain from './faqsSection/faqsMain';
import { BannerMain } from './BannerSection/BannerMain';
import WhyMain from "./whySection/WhyMain"
const HomeMain = () => {
  return (
    <>
    
            <Hero />
            <WhyMain/>
            <BannerMain />
            <HomeGalleryMain />
            <HomeBlogs />
            <PodCast />
            <EventMain />
            <ConsultationForm />
            <FaqsMain />
          
    </>
  );
};

export default memo(HomeMain);