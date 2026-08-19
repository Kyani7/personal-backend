import { CiClock2 } from "react-icons/ci";
import { LuNotepadText } from "react-icons/lu";
import {
  MdLocalPostOffice,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { TfiBook } from "react-icons/tfi";

const Right = () => {
  return (
    <aside
      className="
        w-full
        lg:max-w-md
        xl:w-[380px]
        shrink-0
        xl:sticky
        xl:top-24
        h-fit
      "
    >
      {/* Quick Links */}
      <div className="border border-gray-200 shadow-md rounded-2xl bg-white">
        <h1 className="pt-5 px-5 font-medium text-lg">
          Quick Links
        </h1>

        {/* Document Checkout */}
        <div
          className="
            flex
            items-start
            p-5
            gap-3
            hover:bg-gray-50
            transition
            cursor-pointer
          "
        >
          <LuNotepadText className="text-[#0078BD] mt-1 shrink-0" />

          <p className="text-sm sm:text-base">
            Document Checkout
          </p>
        </div>

        {/* Visa Types */}
        <div
          className="
            flex
            items-start
            px-5
            pb-5
            gap-3
            hover:bg-gray-50
            transition
            cursor-pointer
          "
        >
          <TfiBook className="text-[#0078BD] mt-1 shrink-0" />

          <p className="text-sm sm:text-base">
            Visa Types
          </p>
        </div>
      </div>

      {/* Help */}
      <div
        className="
          w-full
          border
          border-gray-200
          shadow-sm
          rounded-2xl
          bg-gray-100
          p-5
          sm:p-6
          mt-6
          sm:mt-8
        "
      >
        <p className="font-medium text-lg pb-4">
          Need Help?
        </p>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <MdOutlinePhoneInTalk className="text-xl text-[#0078BD] shrink-0" />

          <p className="text-sm sm:text-base text-gray-700">
            Talk to our support team
          </p>
        </div>

        {/* Opening Hours */}
        <div className="flex items-center gap-3 pt-4">
          <CiClock2 className="text-xl text-[#0078BD] shrink-0" />

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

        {/* Contact */}
        <button
          className="
            w-full
            sm:w-fit
            bg-[#0078BD]
            hover:bg-[#FFBA1B]
            text-white
            rounded-2xl
            px-6
            py-2.5
            mt-5
            shadow-lg
            transition-colors
            duration-300
          "
        >
          Contact Us
        </button>
      </div>
    </aside>
  );
};

export default Right;