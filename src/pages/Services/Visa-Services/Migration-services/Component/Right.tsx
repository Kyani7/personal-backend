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
        xl:w-80
        2xl:w-96
        xl:sticky
        xl:top-24
        shrink-0
      "
    >
      {/* Quick Links */}
      <div className="border border-gray-200 shadow-md rounded-2xl bg-white">
        <h1 className="pt-5 px-5 font-medium text-lg">
          Quick Links
        </h1>

        <div className="flex items-start p-5 gap-3">
          <LuNotepadText className="text-[#0078BD] mt-1 shrink-0" />

          <p className="text-sm sm:text-base">
            Document Checkout
          </p>
        </div>

        <div className="flex items-start px-5 pb-5 gap-3">
          <TfiBook className="text-[#0078BD] mt-1 shrink-0" />

          <p className="text-sm sm:text-base">
            Visa Types
          </p>
        </div>
      </div>

      {/* Need Help */}
      <div
        className="
          w-full
          border
          border-gray-200
          shadow-sm
          rounded-2xl
          bg-gray-100
          p-5
          mt-6
          sm:mt-8
        "
      >
        <p className="font-medium pb-4 text-lg">
          Need Help?
        </p>

        {/* Phone */}
        <div className="flex items-center gap-3 text-[#0078BD]">
          <MdOutlinePhoneInTalk className="text-xl shrink-0" />

          <p className="text-sm sm:text-base">
            Contact our support team
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

          <p className="text-sm sm:text-base">
            Mon-Fri: 9AM-6PM
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 pt-4 text-[#0078BD]">
          <MdLocalPostOffice className="text-xl shrink-0" />

          <p className="text-sm sm:text-base break-all">
            Email Support
          </p>
        </div>

        {/* Button */}
        <div className="pt-4">
          <button
            className="
              w-full
              sm:w-auto
              bg-[#0078BD]
              text-white
              rounded-2xl
              px-5
              py-2.5
              text-sm
              hover:bg-[#FFBA1B]
              shadow-lg
              transition
            "
          >
            Contact Us
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Right;