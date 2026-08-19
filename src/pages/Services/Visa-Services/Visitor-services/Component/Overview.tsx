import { FaGlobe } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiNotepadDuotone } from "react-icons/pi";
import Features from "../../../VisaServices-DestinationCountry/Features";

const Overview = () => {
  return (
    <section
      className="
        w-full
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-8
        sm:py-10
        lg:py-14
      "
    >
      {/* Visitor Visa Overview */}
      <div className="flex items-start gap-3 text-[#0078BD]">
        <FaGlobe className="text-xl sm:text-2xl mt-1 shrink-0" />

        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          Visitor Visa Overview
        </h1>
      </div>

      <div className="space-y-5 mt-5 text-sm sm:text-base leading-7 text-gray-700">
        <p>
          All citizens can apply for a visiting visa for Australia online
          through the Australia Immigration Department, except those from
          Somalia, who must apply in person.
        </p>

        <p>
          There are several types of visiting visas in subclass 600, depending
          on the purpose of the visit and the applicant's nationality.
          Australia visiting visas are awarded for stays of three, six, or
          twelve months, with single or multiple entries, as assessed by
          Australian Immigration officials on a case-by-case basis.
        </p>

        <p>
          Before applying for a visiting visa, those who are eligible must
          fulfill the Australia visa criteria. This mostly entails entering
          Australia with a passport that is valid for at least three months,
          with extra supporting papers depending on the visa's purpose.
        </p>
      </div>

      {/* Types of Visitor Visas */}
      <div className="flex items-start gap-3 pt-10 text-[#0078BD]">
        <PiNotepadDuotone className="text-xl sm:text-2xl mt-1 shrink-0" />

        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          Types of Visitor Visas
        </h1>
      </div>

      {/* Visa Cards */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          lg:gap-8
          pt-5
        "
      >
        {/* Tourist Visa */}
        <div className="border border-gray-200 rounded-2xl shadow-md p-5">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <p className="bg-[#FFBA1B] border border-gray-200 rounded-md px-3 py-1 text-xs font-bold">
              3-12 months
            </p>

            <p className="bg-white border border-gray-200 rounded-md px-3 py-1 text-xs font-bold">
              Single/Multiple Entry
            </p>
          </div>

          <h2 className="text-lg sm:text-xl px-0 pt-5 font-medium">
            Tourist Visa (Subclass 600)
          </h2>

          <p className="text-[#737373] text-sm pt-2 leading-6">
            For tourism, visiting family, or short-term non-work purposes
          </p>

          <div className="mt-5 space-y-2">
            <Features
              text="Business meetings"
              colorClass="text-[#00C951]"
            />

            <Features
              text="Conferences"
              colorClass="text-[#00C951]"
            />

            <Features
              text="Short courses (up to 3 months)"
              colorClass="text-[#00C951]"
            />
          </div>
        </div>

        {/* Business Visitor Visa */}
        <div className="border border-gray-200 rounded-2xl shadow-md p-5">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <p className="bg-[#FFBA1B] border border-gray-200 rounded-md px-3 py-1 text-xs font-bold">
              3-12 months
            </p>

            <p className="bg-white border border-gray-200 rounded-md px-3 py-1 text-xs font-bold">
              Multiple Entry
            </p>
          </div>

          <h2 className="text-lg sm:text-xl pt-5 font-medium">
            Business Visitor Visa
          </h2>

          <p className="text-[#737373] text-sm pt-2 leading-6">
            For business meetings, conferences, or exploratory business visits
          </p>

          <div className="mt-5 space-y-2">
            <Features
              text="Business meetings"
              colorClass="text-[#00C951]"
            />

            <Features
              text="Conferences"
              colorClass="text-[#00C951]"
            />

            <Features
              text="Contract negotiations"
              colorClass="text-[#00C951]"
            />
          </div>
        </div>
      </div>

      {/* Document Requirements */}
      <div className="flex items-start gap-3 pt-10 text-[#0078BD]">
        <HiOutlineClipboardDocumentList className="text-xl sm:text-2xl mt-1 shrink-0" />

        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          Document Requirements
        </h1>
      </div>

      {/* Document List */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          md:gap-6
          mt-5
        "
      >
        <div className="space-y-3">
          <Features
            text="Valid passport with minimum 6 months validity"
            colorClass="text-[#0078BD] bg-[#E9F1F9] rounded-sm"
          />

          <Features
            text="Passport-size photographs"
            colorClass="text-[#0078BD] bg-[#E9F1F9] rounded-sm"
          />

          <Features
            text="Travel itinerary and accommodation details"
            colorClass="text-[#0078BD] bg-[#E9F1F9] rounded-sm"
          />

          <Features
            text="Character certificate (if required)"
            colorClass="text-[#0078BD] bg-[#E9F1F9] rounded-sm"
          />
        </div>

        <div className="space-y-3">
          <Features
            text="Completed visa application form"
            colorClass="text-[#0078BD] bg-[#E9F1F9] rounded-sm"
          />

          <Features
            text="Proof of financial means"
            colorClass="text-[#0078BD] bg-[#E9F1F9] rounded-sm"
          />

          <Features
            text="Health insurance coverage"
            colorClass="text-[#0078BD] bg-[#E9F1F9] rounded-sm"
          />

          <Features
            text="Invitation letter (for visiting family/friends)"
            colorClass="text-[#0078BD] bg-[#E9F1F9] rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;