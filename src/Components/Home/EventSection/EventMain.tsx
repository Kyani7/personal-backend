import { Link } from "react-router-dom";
import SectionButton from "../Components/SectionButtonProps";
import EventHeading from "./Components/EventHeading";
import { ArrowRight } from "lucide-react";
import TestimonialSlider, { type Testimonial } from "./Components/TestimonialSlider";

const testimonials: Testimonial[] = [
  {
    image: "https://api.himaaus.com/media/testimonial/seema-pandey-600x600.jpg",
    quote:
      "I have recently completed Bachelor of Accounting from Victoria University Sydney. I have had the best experience from the very beginning and throughout my educational journey in Australia. My post graduate journey is also all planned for at HIMAAUS. #WithYouEveryStep is well justified.",
    name: "SEEMA POUDEL",
    course: "Victoria University, Sydney",
  },
  {
    image: "https://api.himaaus.com/media/testimonial/dhurba_bastola.png",
    quote:
      "HIMMAUS listened to me, made me believe and guided me to achieve my dream to study in Australia. On time process, friendly service and top notch advice.!! Forever grateful.",
    name: "SHANKAR UPRETY",
    course: "Adv Diploma of IT, ACT Sydney",
  },
  {
    image: "	https://api.himaaus.com/media/testimonial/ambika_rana.png",
    quote:
      "Thank you Himaaus for providing such a helpful. guidance to pursue my further study and live my dream freely. Thanks to each and every staffs.",
    name: "AMBIKA RANA",
    course: "Master of Professional Accounting - Federation University (IIBIT Campus)",
  },
  {
    image: "https://api.himaaus.com/media/testimonial/Arpan-Gautam-600x600.jpg",
    quote:
      "From visa documentation to university selection, the team made a stressful process feel manageable. Couldn't have done it without their support.",
    name: "BIPIN THAPA",
    course: "Bachelor of IT, Deakin University",
  },
  {
    image: "https://api.himaaus.com/media/testimonial/nishaprajapati-600x600.jpg",
    quote:
      "Professional, honest and always available to answer my questions. I'm grateful for how smoothly my application went through.",
    name: "NISHA GURUNG",
    course: "Master of Nursing, Griffith University",
  },
  {
    image: "https://api.himaaus.com/media/testimonial/sadhana-basnet-600x600.jpg",
    quote:
      "The counselors genuinely cared about finding the right fit for me, not just pushing any university. That made all the difference.",
    name: "ROSHAN KARKI",
    course: "Bachelor of Engineering, RMIT",
  },
  {
    image: "https://api.himaaus.com/media/testimonial/28212075…91415975448778_5804253220643016436_n-768x1024.jpg",
    quote:
      "I am thankful to Hima Aus who made my Nursing career possible. I called few other agencies but all of them were saying there were not any seats available; while Hima Aus only gave me a hope and helped me to study nursing in Sydney. I recommend Hima Aus to everyone for college admission and other visa guidance. A complete office for all enquiries about International Students. Very professional and quality service. #withyoueverystep well deserving slogan.",
    name: "SITA POUDEL",
    course: "Bachelor of Business, Monash University",
  },
  {
    image: "hhttps://api.himaaus.com/media/testimonial/bikki-gurung-600x600.jpg",
    quote:
      "Quick responses, clear communication, and a team that actually listens. My visa was approved without any complications.",
    name: "PRAKASH SHRESTHA",
    course: "Diploma of Hospitality, William Blue",
  },
  {
    image: "https://api.himaaus.com/media/testimonial/nishma-700x700.jpg",
    quote:
      "I was confused about which country to choose, but their counseling session cleared everything up. Now I'm happily studying in Australia.",
    name: "SUNITA ADHIKARI",
    course: "Master of Data Science, UNSW",
  },
  {
    image: "	https://api.himaaus.com/media/testimonial/niraj_hirachan.png",
    quote:
      "HimaAus made the entire journey — from test prep to visa lodgement — feel effortless. Highly recommend to anyone planning to study abroad.",
    name: "KRISHNA BHANDARI",
    course: "Bachelor of Computer Science, UTS",
  },
  {
    image: "https://api.himaaus.com/media/testimonial/agnisikha-gurung-600x600.jpg",
    quote:
      "Their team went above and beyond to make sure I understood every step of the process. I felt supported the whole way through.",
    name: "MANISHA KHADKA",
    course: "Master of Public Health, University of Sydney",
  },
  {
    image: "	https://api.himaaus.com/media/testimonial/ridesh_gurung.png",
    quote:
      "Trustworthy consultancy with genuine advice. They helped me get into my dream university with a good scholarship package.",
    name: "DIPESH SHAHI",
    course: "Bachelor of Accounting, Curtin University",
  },
];

const EventMain = () => {
  return (
    <>
     <section className="min-h-screen w-full py-2">
  <div className="max-w-full min-h-[600px] flex flex-col lg:flex-row">
    {/* Left Side */}
    <div className="w-full lg:w-2/5 px-4 sm:px-6 lg:px-10 lg:ml-20 rounded-bl-lg shadow-xl">
      <EventHeading heading="Uncoming" subHeading="Events " />

      <div className="px-4 sm:px-7 py-16 sm:py-22">
        <p className="text-[#8f9ca1] text-center lg:text-left">
          No upcoming events available at the moment.
        </p>
      </div>

      <div className="w-full px-4 sm:px-7 pb-8 lg:pb-0 text-center lg:text-left">
        <Link
          to="/explore-event"
          className="inline-flex items-center justify-center bg-primary text-[#0072BC] font-semibold gap-2"
        >
          View All Events
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>

    {/* Right Side */}
    <div className="w-full lg:w-3/5 px-4 sm:px-6 lg:px-10 lg:mr-20 shadow-lg mt-8 lg:mt-0">
      <EventHeading
        heading="What our students say"
        subHeading="Testimonials"
      />
      <TestimonialSlider testimonials={testimonials} />
    </div>
  </div>
</section>

<div className="flex justify-center items-center mt-10 px-4">
  <SectionButton
    ButtonContent="Explore More Event"
    to="./explore-event"
  />
</div>
    </>
  );
};

export default EventMain;