import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Which countries do you provide counselling for?",
    answer:
      "We provide expert counselling for Australia, Canada, the UK, the USA, New Zealand, and other popular study destinations.",
  },
  {
    question: "Do you help with visa applications?",
    answer:
      "Yes. Our experienced team assists with document preparation, visa applications, and interview guidance.",
  },
  {
    question: "Can you help me find scholarships?",
    answer:
      "Absolutely! We help students identify scholarship opportunities and prepare competitive applications.",
  },
  {
    question: "Is the consultation free?",
    answer:
      "Yes. Your first consultation is completely free and includes course and university guidance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-brand-500 uppercase">
              FAQs
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-ink-soft">
              Quick answers, neatly organized.
            </p>
          </div>

          <button
            onClick={() => setOpenIndex(null)}
            className="shrink-0 text-sm font-semibold text-brand-500 hover:text-brand-600"
          >
            Collapse all
          </button>
        </div>

        <div className="divide-y divide-line border-t border-b border-line">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-medium text-ink">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`shrink-0 text-brand-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 pb-6"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="max-w-xl text-ink-soft">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;