import { memo } from 'react';
import FAQSection from './faqsSection';

const FaqsMain = () => {
  return (
    <>
    <FAQSection/>
    {/* Footer */}
      <p className="text-center text-slate-500  mb-30">
        Still stuck? <a href="contact-us" className="text-[#248bc7] font-semibold underline">Contact Us</a>.
      </p>
    </>
  );
};

export default memo(FaqsMain);