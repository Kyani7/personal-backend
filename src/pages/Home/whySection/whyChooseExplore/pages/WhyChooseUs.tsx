import Hero from '../Hero.tsx';
import FeaturesSection from '../FeaturesSection.tsx';
import TestimonialsSection from '../TestimonialsSection.tsx';
import CTASection from '../CTASection.tsx';

export default function whyChooseUs() {
  return (
    <>
      <Hero 
      to='/'
backTitle="Back to Home"
      />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
