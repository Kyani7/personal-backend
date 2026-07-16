import { useEffect, useRef, useState } from "react";
import SectionHeading from "../Components/SectionHeadingProps";

/** Importing all the images */
import aapoly from "../../../assets/Homee/BannerImage/AAPOLY.webp";
import acbi from "../../../assets/Homee/BannerImage/ACBI.webp";
import aih from "../../../assets/Homee/BannerImage/AIH.webp";
import apic from "../../../assets/Homee/BannerImage/APIC.webp";
import berlinSchool from "../../../assets/Homee/BannerImage/berlin-school-of-business-and-innovation.webp";
import cim from "../../../assets/Homee/BannerImage/CIM.webp";
import crown from "../../../assets/Homee/BannerImage/CROWN.webp";
import download4 from "../../../assets/Homee/BannerImage/download_4.webp";
import download5 from "../../../assets/Homee/BannerImage/download_5.webp";
import download from "../../../assets/Homee/BannerImage/download.webp";
import ecaLogo from "../../../assets/Homee/BannerImage/ECA_LOGO.webp";
import eit from "../../../assets/Homee/BannerImage/EIT.webp";
import harbourCollege from "../../../assets/Homee/BannerImage/HarbourCollege.webp";
import holmes from "../../../assets/Homee/BannerImage/HOLMES.webp";
import ihna from "../../../assets/Homee/BannerImage/IHNA.webp";
import images from "../../../assets/Homee/BannerImage/images.webp";
import imc from "../../../assets/Homee/BannerImage/IMC.webp";
import kaplan from "../../../assets/Homee/BannerImage/KAPLAN.webp";
import kingswayLogo from "../../../assets/Homee/BannerImage/KINGSWAY_LOGO.webp";
import koi from "../../../assets/Homee/BannerImage/KOI.webp";
import newLogoNaps from "../../../assets/Homee/BannerImage/newlogonaps.webp";
import pia from "../../../assets/Homee/BannerImage/PIA.webp";
import queensfordCollege from "../../../assets/Homee/BannerImage/Queensford-College-LOGO.webp";
import scLogo from "../../../assets/Homee/BannerImage/sc-logo.webp";
import skillAustraliaInstitute from "../../../assets/Homee/BannerImage/SKILL_AUSTRALIA_INSTITUTE.webp";
import stotts from "../../../assets/Homee/BannerImage/STOTTS.webp";
import sydneyMet from "../../../assets/Homee/BannerImage/sydneyMet.webp";
import theHotelSchool from "../../../assets/Homee/BannerImage/THE_HOTEL_SCHOOL.webp";
import vuSydney from "../../../assets/Homee/BannerImage/VU_SYDNEY.webp";
import wentworth from "../../../assets/Homee/BannerImage/WENTWORTH.webp";
import wstc from "../../../assets/Homee/BannerImage/WSTC.webp";

const partners = [
  { name: "AA Poly", logo: aapoly },
  { name: "ACBI", logo: acbi },
  { name: "AIH", logo: aih },
  { name: "APIC", logo: apic },
  { name: "Berlin School of Business and Innovation", logo: berlinSchool },
  { name: "CIM", logo: cim },
  { name: "Crown Institute", logo: crown },
  { name: "Partner", logo: download4 },
  { name: "Partner", logo: download5 },
  { name: "Partner", logo: download },
  { name: "ECA", logo: ecaLogo },
  { name: "EIT", logo: eit },
  { name: "Harbour College", logo: harbourCollege },
  { name: "Holmes Institute", logo: holmes },
  { name: "IHNA", logo: ihna },
  { name: "Partner", logo: images },
  { name: "IMC", logo: imc },
  { name: "Kaplan", logo: kaplan },
  { name: "Kingsway", logo: kingswayLogo },
  { name: "KOI", logo: koi },
  { name: "NAPS", logo: newLogoNaps },
  { name: "PIA", logo: pia },
  { name: "Queensford College", logo: queensfordCollege },
  { name: "SC Institute", logo: scLogo },
  { name: "Skill Australia Institute", logo: skillAustraliaInstitute },
  { name: "STOTTS", logo: stotts },
  { name: "Sydney Met", logo: sydneyMet },
  { name: "The Hotel School", logo: theHotelSchool },
  { name: "VU Sydney", logo: vuSydney },
  { name: "Wentworth", logo: wentworth },
  { name: "WSTC", logo: wstc },
];

export const BannerMain = () => {
  const [isRunning, setIsRunning] = useState(true);
  const row1Ref = useRef<HTMLUListElement>(null);
  const row2Ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (row1Ref.current) {
        const computedTransform = window.getComputedStyle(
          row1Ref.current
        ).transform;
        row1Ref.current.style.transform = computedTransform;
      }

      if (row2Ref.current) {
        const computedTransform = window.getComputedStyle(
          row2Ref.current
        ).transform;
        row2Ref.current.style.transform = computedTransform;
      }

      setIsRunning(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full section-heading-oz">
      {/* HEAD */}
      <div className="bg-[#0078bd] py-8 sm:py-10 lg:py-12">
        <SectionHeading
          headingOne="Our Global Partners"
          title="Trusted by Leading Universities and Colleges Worldwide"
          briefDesc="We collaborate with reputed institutions across the globe to provide students with trusted pathways to quality education."
        />
      </div>

      {/* MIDDLE */}
      <div className="bg-white py-6 sm:py-8 lg:py-10">
        {partners.length === 0 ? (
          <div className="flex items-center justify-center py-16 text-gray-500">
            No partners available at the moment
          </div>
        ) : (
          <>
            {/* Row 1 */}
            <div className="row-1-wrapper overflow-hidden">
              <ul
                ref={row1Ref}
                className={`flex w-max gap-4 sm:gap-6 lg:gap-10 marquee-row ${
                  isRunning ? "animate-scroll-left" : ""
                }`}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <li
                    key={`row1-${index}`}
                    className="
                      flex
                      h-20 w-32
                      sm:h-24 sm:w-40
                      lg:h-30 lg:w-45
                      flex-shrink-0
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                        max-h-12
                        sm:max-h-16
                        lg:max-h-20
                        max-w-full
                        object-contain
                      "
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100 my-4 sm:my-6" />

            {/* Row 2 */}
            <div className="row-2-wrapper overflow-hidden">
              <ul
                ref={row2Ref}
                className={`flex w-max gap-4 sm:gap-6 lg:gap-8 marquee-row ${
                  isRunning ? "animate-scroll-right" : ""
                }`}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <li
                    key={`row2-${index}`}
                    className="
                      flex
                      h-20 w-32
                      sm:h-24 sm:w-40
                      lg:h-30 lg:w-45
                      flex-shrink-0
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                        max-h-12
                        sm:max-h-16
                        lg:max-h-20
                        max-w-full
                        object-contain
                      "
                    />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* FOOT */}
      <div className="bg-[#0078bd] h-12 sm:h-16 lg:h-20" />

      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }

        .row-1-wrapper:hover .marquee-row,
        .row-2-wrapper:hover .marquee-row {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};