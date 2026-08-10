import { CiClock2 } from "react-icons/ci";
import {
  MdLocalPostOffice,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { PiGlobeSimpleBold } from "react-icons/pi";

const Ready = () => {
  return (
    <section
      className="
        w-full
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-10
        sm:py-14
        lg:py-20
      "
    >
      {/* Main Content */}
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-[#396cb8]
          "
        >
          Ready to begin?
        </h1>

        <p
          className="
            mt-4
            text-sm
            sm:text-base
            lg:text-lg
            leading-7
            text-gray-600
          "
        >
          Get personalized guidance for your Student Visa application. Our
          experts will assess your eligibility and create a tailored strategy.
        </p>

        <button
          className="
            mt-6
            bg-[#0078BD]
            hover:bg-[#0069a5]
            text-white
            px-6
            py-3
            rounded-2xl
            text-sm
            sm:text-base
            transition-colors
            duration-300
          "
        >
          Free Consultation
        </button>
      </div>

      {/* Help Card */}
      <div
        className="
          w-full
          max-w-md
          lg:w-[440px]
          lg:max-w-none
          h-fit
          border
          border-gray-200
          shadow-sm
          rounded-2xl
          bg-gray-100
          p-5
          sm:p-6
          mt-10
          mx-auto
          lg:sticky
          lg:top-24
        "
      >
        <p className="font-medium text-lg pb-4">
          Need Help?
        </p>

        {/* Phone */}
        <div className="flex items-center gap-3 text-[#0078BD]">
          <MdOutlinePhoneInTalk className="text-xl shrink-0" />

          <p className="text-sm sm:text-base text-gray-700">
            Talk to our support team
          </p>
        </div>

        {/* Opening Hours */}
        <div
          className="
            flex
            items-center
            gap-3
            pt-4
            text-[#0078BD]
          "
        >
          <CiClock2 className="text-xl shrink-0" />

          <p className="text-sm sm:text-base text-gray-700">
            Mon-Fri: 9AM-6PM
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 pt-4">
          <MdLocalPostOffice className="text-xl text-[#0078BD] shrink-0" />

          <p className="text-sm sm:text-base text-gray-700">
            Email Support Available
          </p>
        </div>

        {/* Contact Button */}
        <button
          className="
            w-full
            sm:w-fit
            bg-[#0078BD]
            hover:bg-[#0069a5]
            rounded-2xl
            text-white
            px-6
            py-2.5
            mt-5
            transition-colors
            duration-300
          "
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Ready;