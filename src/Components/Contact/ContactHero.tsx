import { FaArrowRight } from "react-icons/fa";

import heroImage from "../../assets/images/contact-banner.jpg";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background */}
      <img
        src={heroImage}
        alt="Students"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Overlay gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60"></div>

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-24">
        <div className="max-w-3xl">


          {/* Step-path signature: reflects "With You Every Step" */}
          <div className="mt-5 flex items-center gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-accent-400"></span>
            <span className="h-px w-8 bg-accent-400/60"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400/70"></span>
            <span className="h-px w-8 bg-accent-400/40"></span>
            <span className="h-1 w-1 rounded-full bg-accent-400/50"></span>
          </div>

          <h1 className="mt-6 font-display text-6xl font-semibold leading-[1.05] text-white">
            Let's talk about
            <span className="block italic text-brand-100">your next step</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Have questions or need guidance? Our friendly team is here to
            help you every step of the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#contact-form"
              className="flex items-center gap-3 rounded-full bg-accent-400 px-8 py-4 font-semibold text-ink transition hover:bg-accent-500"
            >
              Get Started
              <FaArrowRight />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;
