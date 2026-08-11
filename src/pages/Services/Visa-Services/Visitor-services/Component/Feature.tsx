import FeaturesCard from "../../../VisaServices-DestinationCountry/FeaturesCard";
import { MdDoneAll, MdOutlineDomainVerification } from "react-icons/md";
import MiniPannel from "../../../VisaServices-DestinationCountry/MiniPannel";
import { CiClock2 } from "react-icons/ci";
import { FiTarget } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

const Feature = () => {
  return (
    <>
      {/* Mini Panel */}
      <section className="bg-[#F9FAFB]">
        <div className="w-full">
          <MiniPannel
            head="Visit Visa"
            subHead="Your Complete Visit Visa Solution Partner"
            body="We provide end-to-end support for your Australia visitor visa application"
          />
        </div>
      </section>

      {/* Features */}
      <section
        className="
          w-full
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-5
          sm:gap-6
          lg:gap-8
          px-4
          sm:px-6
          lg:px-8
          py-10
          sm:py-14
          lg:py-16
        "
      >
        {/* 1 */}
        <FeaturesCard
          icon={<MdOutlineDomainVerification />}
          title="100% Visa Success Rate"
          description="Expert guidance ensures your application meets all requirements"
        />

        {/* 2 */}
        <FeaturesCard
          icon={<CiClock2 />}
          title="Fast Processing"
          description="Express processing options available for urgent travel needs"
        />

        {/* 3 */}
        <FeaturesCard
          icon={<FiTarget />}
          title="Personalized Assistance"
          description="Dedicated case officer for personalized support throughout"
        />

        {/* 4 */}
        <FeaturesCard
          icon={<MdDoneAll />}
          title="Document Verification"
          description="Complete document checklist and verification service"
        />

        {/* 5 */}
        <FeaturesCard
          icon={<IoCallOutline />}
          title="24/7 Support"
          description="Round-the-clock assistance for all your queries"
        />

        {/* 6 */}
        <FeaturesCard
          icon={<FaGlobe />}
          title="Multiple Entry Options"
          description="Single or multiple entry visas based on your travel needs"
        />
      </section>
    </>
  );
};

export default Feature;