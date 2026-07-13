import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import FAQSection from "../Home/faqsSection/faqsSection";
import usePageTitle from "../../Hook/titleTab";

const ContactMain = () => {
  return (
    usePageTitle("Our Service | Study Abroad Services");
    <>
      <ContactHero />
      <ContactForm />
      <FAQSection />
    </>
  );
};

export default ContactMain;