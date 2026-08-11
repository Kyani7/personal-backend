import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import MiniPannel from "../VisaServices-DestinationCountry/MiniPannel";
import Connect from "../VisaServices-DestinationCountry/Connect";

import NewZealand from "./Component/NewZealand";
import Australia from "./Component/Australia";
import Canada from "./Component/Canada";
import Germany from "./Component/Germany";
import Head from "./Component/Head";
import Japan from "./Component/Japan";
import Sweden from "./Component/Sweden";
import UK from "./Component/UnitedKingdom";
import USA from "./Component/USA";

const COUNTRIES = [
  { slug: "australia", label: "Australia" },
  { slug: "usa", label: "USA" },
  { slug: "canada", label: "Canada" },
  { slug: "uk", label: "United Kingdom" },
  { slug: "new-zealand", label: "New Zealand" },
  { slug: "japan", label: "Japan" },
  { slug: "sweden", label: "Sweden" },
  { slug: "germany", label: "Germany" },
];

const DestinationMain = () => {
  const { country } = useParams<{ country?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll to selected country
  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (!hash) return;

    const el = sectionRefs.current[hash];

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.hash]);

  const goTo = (slug: string) => {
    navigate(`/services/destination-country#${slug}`);
  };

  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Counselling + Country Navigation */}
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          {/* Mini Panel */}
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Multi Destination Counselling"
              body="We provide personalized counselling services for students aspiring to study abroad across multiple countries, helping them choose the best pathway for their academic and career goals."
            />
          </div>

          {/* Country Navigation */}
          <div
            className="
              w-full
              px-3
              sm:px-6
              lg:px-8
              pb-3
              sm:pb-4
            "
          >
            <div
              className="
                max-w-7xl
                mx-auto
                flex
                gap-2
                sm:gap-3
                overflow-x-auto
                scrollbar-hide
                border
                border-gray-200
                shadow-md
                rounded-2xl
                p-3
                bg-white
              "
            >
              {COUNTRIES.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => goTo(c.slug)}
                  className={`
                    shrink-0
                    border
                    border-gray-200
                    shadow-sm
                    rounded-3xl
                    px-4
                    sm:px-5
                    py-2
                    text-sm
                    sm:text-base
                    whitespace-nowrap
                    transition
                    duration-200
                    ${
                      country === c.slug
                        ? "bg-secondary text-white"
                        : "bg-[#F3F4F6] hover:bg-gray-200"
                    }
                  `}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Australia */}
        <div
          ref={(el) => {
            sectionRefs.current["australia"] = el;
          }}
          className="scroll-mt-[220px] sm:scroll-mt-[240px]"
        >
          <Australia />
        </div>

        <hr className="border-gray-200 mt-10 sm:mt-16 mb-20 sm:mb-32 mx-4 sm:mx-10 lg:mx-20" />

        {/* USA */}
        <div
          ref={(el) => {
            sectionRefs.current["usa"] = el;
          }}
          className="scroll-mt-[220px] sm:scroll-mt-[240px]"
        >
          <USA />
        </div>

        <hr className="border-gray-200 mt-10 sm:mt-16 mb-20 sm:mb-32 mx-4 sm:mx-10 lg:mx-20" />

        {/* Canada */}
        <div
          ref={(el) => {
            sectionRefs.current["canada"] = el;
          }}
          className="scroll-mt-[220px] sm:scroll-mt-[240px]"
        >
          <Canada />
        </div>

        <hr className="border-gray-200 mt-10 sm:mt-16 mb-20 sm:mb-32 mx-4 sm:mx-10 lg:mx-20" />

        {/* United Kingdom */}
        <div
          ref={(el) => {
            sectionRefs.current["uk"] = el;
          }}
          className="scroll-mt-[220px] sm:scroll-mt-[240px]"
        >
          <UK />
        </div>

        <hr className="border-gray-200 mt-10 sm:mt-16 mb-20 sm:mb-32 mx-4 sm:mx-10 lg:mx-20" />

        {/* New Zealand */}
        <div
          ref={(el) => {
            sectionRefs.current["new-zealand"] = el;
          }}
          className="scroll-mt-[220px] sm:scroll-mt-[240px]"
        >
          <NewZealand />
        </div>

        <hr className="border-gray-200 mt-10 sm:mt-16 mb-20 sm:mb-32 mx-4 sm:mx-10 lg:mx-20" />

        {/* Japan */}
        <div
          ref={(el) => {
            sectionRefs.current["japan"] = el;
          }}
          className="scroll-mt-[220px] sm:scroll-mt-[240px]"
        >
          <Japan />
        </div>

        <hr className="border-gray-200 mt-10 sm:mt-16 mb-20 sm:mb-32 mx-4 sm:mx-10 lg:mx-20" />

        {/* Sweden */}
        <div
          ref={(el) => {
            sectionRefs.current["sweden"] = el;
          }}
          className="scroll-mt-[220px] sm:scroll-mt-[240px]"
        >
          <Sweden />
        </div>

        <hr className="border-gray-200 mt-10 sm:mt-16 mb-20 sm:mb-32 mx-4 sm:mx-10 lg:mx-20" />

        {/* Germany */}
        <div
          ref={(el) => {
            sectionRefs.current["germany"] = el;
          }}
          className="scroll-mt-[220px] sm:scroll-mt-[240px]"
        >
          <Germany />
        </div>

        <Connect />
      </section>
    </>
  );
};

export default DestinationMain;