import { CiClock2 } from "react-icons/ci";
import { GiGraduateCap } from "react-icons/gi";
import {
  MdLocalPostOffice,
  MdOutlineDomainVerification,
} from "react-icons/md";

const Box = () => {
  return (
    <section
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
        sm:gap-6
        lg:gap-8
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        my-10
        sm:my-14
        lg:my-20
      "
    >
      {/* 1 - Full Visa Guidance */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          sm:items-start
          bg-white
          rounded-3xl
          border
          border-gray-200
          shadow-md
          p-5
          hover:shadow-lg
          transition-shadow
          duration-300
        "
      >
        <GiGraduateCap
          className="
            shrink-0
            text-4xl
            border
            border-gray-200
            rounded-md
            bg-[#E9F1F9]
            text-[#0078BD]
            p-1
          "
        />

        <div className="sm:pl-5 pt-4 sm:pt-0 text-center sm:text-left">
          <h1 className="text-[#396cb8] font-medium text-lg sm:text-xl">
            Full Visa Guidance
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            End-to-end support from application to approval
          </p>
        </div>
      </div>

      {/* 2 - Document Verification */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          sm:items-start
          bg-white
          rounded-3xl
          border
          border-gray-200
          shadow-md
          p-5
          hover:shadow-lg
          transition-shadow
          duration-300
        "
      >
        <MdOutlineDomainVerification
          className="
            shrink-0
            text-4xl
            border
            border-gray-200
            rounded-md
            bg-[#E9F1F9]
            text-[#0078BD]
            p-1
          "
        />

        <div className="sm:pl-5 pt-4 sm:pt-0 text-center sm:text-left">
          <h1 className="text-[#396cb8] font-medium text-lg sm:text-xl">
            Document Verification
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Thorough review of all required documents
          </p>
        </div>
      </div>

      {/* 3 - Timely Processing */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          sm:items-start
          bg-white
          rounded-3xl
          border
          border-gray-200
          shadow-md
          p-5
          hover:shadow-lg
          transition-shadow
          duration-300
        "
      >
        <CiClock2
          className="
            shrink-0
            text-4xl
            border
            border-gray-200
            rounded-md
            bg-[#E9F1F9]
            text-[#0078BD]
            p-1
          "
        />

        <div className="sm:pl-5 pt-4 sm:pt-0 text-center sm:text-left">
          <h1 className="text-[#396cb8] font-medium text-lg sm:text-xl">
            Timely Processing
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Priority handling to meet your deadlines
          </p>
        </div>
      </div>

      {/* 4 - Post-Arrival Support */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          sm:items-start
          bg-white
          rounded-3xl
          border
          border-gray-200
          shadow-md
          p-5
          hover:shadow-lg
          transition-shadow
          duration-300
        "
      >
        <MdLocalPostOffice
          className="
            shrink-0
            text-4xl
            border
            border-gray-200
            rounded-md
            bg-[#E9F1F9]
            text-[#0078BD]
            p-1
          "
        />

        <div className="sm:pl-5 pt-4 sm:pt-0 text-center sm:text-left">
          <h1 className="text-[#396cb8] font-medium text-lg sm:text-xl">
            Post-Arrival Support
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Assistance with accommodation and settling
          </p>
        </div>
      </div>
    </section>
  );
};

export default Box;