import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import usePageTitle from "../../Hook/titleTab";
import FaqsMain from "../Home/faqsSection/faqsMain";

const ContactMain = () => {
  usePageTitle("Contact Us");
  return (
    <>
      <ContactHero />
      <ContactForm />
       <FaqsMain/>
    </>
  );
};
export default ContactMain;
