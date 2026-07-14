interface CTASectionProps {
  heading?: string;
  text?: string;
}

const buttonBase =
  "inline-block cursor-pointer rounded-full px-8 py-4 text-[15px] font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 active:shadow-sm";

export default function CTASection({
  heading = "Ready to Get Started?",
  text = "Contact us today for a free consultation and take the first step towards your educational goals.",
}: CTASectionProps) {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#eaf3fb] to-[#f7fafd] px-6 py-20 text-center sm:px-10 md:px-20"
    >
      <h2 className="mb-4 text-[30px] font-extrabold text-brand-blue sm:text-[38px]">
        {heading}
      </h2>
      <p className="mx-auto mb-10 max-w-[950px] text-[17px] leading-relaxed text-brand-blue/80 sm:text-[18px]">
        {text}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
        <a
          href="tel:+9779805027022"
          className={buttonBase + " bg-[#00c950] text-white hover:brightness-105"}
        >
          Call Now: +977 980-5027022
        </a>

        <a
          href="tel:+9779805027022"
          className={buttonBase + " bg-brand-orange text-white hover:brightness-105"}
        >
          Call Now:
        </a>

        <a
          href="mailto:info@himaaus.com"
          className={
            buttonBase +
            " border-2 border-gray-200 bg-white text-brand-blue hover:border-brand-blue hover:bg-blue-50"
          }
        >
          Email Us:
        </a>

        <button
          type="button"
          className={buttonBase + " bg-brand-blue text-white hover:bg-brand-darkblue"}
        >
          Book Consultation
        </button>
      </div>
    </section>
  );
}
