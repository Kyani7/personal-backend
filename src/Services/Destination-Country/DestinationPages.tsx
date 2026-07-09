import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MiniPannel from "../../pages/MiniPannel";
import NewZealand from "./Component/NewZealand";
import Australia from "./Component/Australia";
import Canada from "./Component/Canada";
import Connect from "../../pages/Connect";
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
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll to the requested country whenever the URL param changes
  useEffect(() => {
    if (!country) return;
    const el = sectionRefs.current[country];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [country]);

  const goTo = (slug: string) => {
    navigate(`/services/destination-country/${slug}`);
  };

  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Multi Destination Counselling"}
            body={"We provide personalized counselling services for students aspiring to study abroad across multiple countries, helping them choose the best pathway for their academic and career goals."}
          />

          <div className="sticky top-20 z-50 bg-white flex mx-35 border border-gray-200 shadow-md rounded-2xl py-4 gap-4">
            {COUNTRIES.map((c) => (
              <button
                key={c.slug}
                onClick={() => goTo(c.slug)}
                className={`border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 transition ${
                  country === c.slug ? "bg-secondary text-white" : "bg-[#F3F4F6]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
<div ref={(el) => { sectionRefs.current["australia"] = el; }} className="scroll-mt-40">
  <Australia />
</div>
<hr className="border-gray-200 mt-10 mb-50 mx-20" />

<div ref={(el) => { sectionRefs.current["usa"] = el; }} className="scroll-mt-40">
  <USA />
</div>
<hr className="border-gray-200 mt-10 mb-50 mx-20" />

<div ref={(el) => { sectionRefs.current["canada"] = el; }} className="scroll-mt-40">
  <Canada />
</div>
<hr className="border-gray-200 mt-10 mb-50 mx-20" />

<div ref={(el) => { sectionRefs.current["uk"] = el; }} className="scroll-mt-40">
  <UK />
</div>
<hr className="border-gray-200 mt-10 mb-50 mx-20" />

<div ref={(el) => { sectionRefs.current["new-zealand"] = el; }} className="scroll-mt-40">
  <NewZealand />
</div>
<hr className="border-gray-200 mt-10 mb-50 mx-20" />

<div ref={(el) => { sectionRefs.current["japan"] = el; }} className="scroll-mt-40">
  <Japan />
</div>
<hr className="border-gray-200 mt-10 mb-50 mx-20" />

<div ref={(el) => { sectionRefs.current["sweden"] = el; }} className="scroll-mt-40">
  <Sweden />
</div>
<hr className="border-gray-200 mt-10 mb-50 mx-20" />

<div ref={(el) => { sectionRefs.current["germany"] = el; }} className="scroll-mt-40">
  <Germany />
</div>
        <Connect />
      </section>
    </>
  );
};

export default DestinationMain;