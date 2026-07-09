import React from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface CtaSectionProps {
  heading?: string;
  description?: string;
  primaryPhone?: string;
  secondaryPhone?: string;
  email?: string;
  bookLabel?: string;
  onBookClick?: () => void;
  primaryPhoneHref?: string;
  secondaryPhoneHref?: string;
  emailHref?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Last({
  heading = "Ready to Get Started?",
  description = "Contact us today for a free consultation and take the first step towards your educational goals.",
  primaryPhone = "+977 980-5027022",
  secondaryPhone = "+977 980-5027023",
  email = "info@himaaus.com",
  bookLabel = "Book Consultation",
  onBookClick,
  primaryPhoneHref,
  secondaryPhoneHref,
  emailHref,
}: CtaSectionProps) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 text-center sm:px-8">
      <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
        {heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-900/70 sm:text-base">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={primaryPhoneHref ?? `tel:${primaryPhone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-600"
        >
          <FaPhoneAlt className="h-3.5 w-3.5" />
          Call Now: {primaryPhone}
        </a>

        <a
          href={secondaryPhoneHref ?? `tel:${secondaryPhone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-500"
        >
          <FaPhoneAlt className="h-3.5 w-3.5" />
          Call Now: {secondaryPhone}
        </a>

        <a
          href={emailHref ?? `mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          <FaEnvelope className="h-3.5 w-3.5" />
          Email Us: {email}
        </a>

        <button
          type="button"
          onClick={onBookClick}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0078BD]"
        >
          <FaCalendarCheck className="h-3.5 w-3.5" />
          {bookLabel}
        </button>
      </div>
    </section>
  );
}