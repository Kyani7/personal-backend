import { CiHospital1 } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { RiBookLine } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import MiniPannel from "../VisaServices-DestinationCountry/MiniPannel";

const Package = () => {
  return (
    <>
      <MiniPannel
        head={"Additional Support"}
        subHead={"Complete Student Care Package"}
        body={
          "Extra services to ensure your comfort, safety, and academic success throughout your stay in Australia."
        }
      />

      {/* Support Cards */}
      <section
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
          lg:gap-8
          max-w-6xl
          mx-auto
          my-10
          sm:my-14
          lg:my-20
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Emergency */}
        <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden p-5 hover:shadow-lg transition-shadow duration-300">
          <LuClock className="text-4xl border border-gray-200 rounded-md bg-red-100 text-red-500 p-1" />

          <h1 className="text-[#396cb8] font-medium text-xl pt-5">
            24/7 Emergency Support
          </h1>

          <p className="pt-3 text-sm leading-6 text-gray-600">
            Round-the-clock assistance for any emergencies or urgent
            situations with dedicated helpline.
          </p>
        </div>

        {/* Health */}
        <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden p-5 hover:shadow-lg transition-shadow duration-300">
          <CiHospital1 className="text-4xl border border-gray-200 rounded-md bg-[#DCFCE6] text-[#00A63D] p-1" />

          <h1 className="text-[#396cb8] font-medium text-xl pt-5">
            Health & Insurance
          </h1>

          <p className="pt-3 text-sm leading-6 text-gray-600">
            Complete guidance on OSHC and accessing healthcare services
            throughout your stay.
          </p>
        </div>

        {/* Academic */}
        <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden p-5 hover:shadow-lg transition-shadow duration-300">
          <RiBookLine className="text-4xl border border-gray-200 rounded-md bg-purple-200 text-purple-500 p-1" />

          <h1 className="text-[#396cb8] font-medium text-xl pt-5">
            Academic Support
          </h1>

          <p className="pt-3 text-sm leading-6 text-gray-600">
            Tutoring, study groups, and academic writing assistance for
            ongoing success.
          </p>
        </div>

        {/* Cultural */}
        <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden p-5 hover:shadow-lg transition-shadow duration-300">
          <GoGlobe className="text-4xl border border-gray-200 rounded-md bg-[#FFEDD4] text-[#F54900] p-1" />

          <h1 className="text-[#396cb8] font-medium text-xl pt-5">
            Cultural Integration
          </h1>

          <p className="pt-3 text-sm leading-6 text-gray-600">
            Events and activities to help you adapt and thrive in Australian
            multicultural society.
          </p>
        </div>

        {/* Financial */}
        <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden p-5 hover:shadow-lg transition-shadow duration-300">
          <BsCurrencyDollar className="text-4xl border border-gray-200 rounded-md bg-[#FFE2E2] text-[#E7000B] p-1" />

          <h1 className="text-[#396cb8] font-medium text-xl pt-5">
            Financial Guidance
          </h1>

          <p className="pt-3 text-sm leading-6 text-gray-600">
            Personalized budgeting advice and financial management support.
          </p>
        </div>

        {/* Alumni */}
        <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden p-5 hover:shadow-lg transition-shadow duration-300">
          <FaNetworkWired className="text-4xl border border-gray-200 rounded-md bg-[#DFE7FF] text-[#4F39F6] p-1" />

          <h1 className="text-[#396cb8] font-medium text-xl pt-5">
            Alumni Network
          </h1>

          <p className="pt-3 text-sm leading-6 text-gray-600">
            Connect with successful graduates for mentorship and professional
            networking.
          </p>
        </div>
      </section>
    </>
  );
};

export default Package;