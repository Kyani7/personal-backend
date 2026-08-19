import { VscExtensionsLarge } from "react-icons/vsc";
import BulletPoint from "../../../VisaServices-DestinationCountry/BulletPoint.tsx";
import { PiSealDuotone } from "react-icons/pi";
import { LuPlane } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";

const Features = () => {
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
      {/* Visa Duration */}
      <div>
        <h1
          className="
            flex
            items-start
            gap-3
            text-[#396cb8]
            font-medium
            text-xl
            sm:text-2xl
            lg:text-3xl
            pb-5
          "
        >
          <VscExtensionsLarge className="text-2xl sm:text-3xl shrink-0 mt-1" />
          <span>Visa Duration & Extension Options</span>
        </h1>

        <div className="space-y-3">
          <BulletPoint text="Initial visa duration matches your course length (up to 5 years maximum)" />
          <BulletPoint text="Primary and secondary school students: Maximum 3-year visa duration" />
          <BulletPoint text="Package courses: Visa covers entire study period including foundation courses" />
          <BulletPoint text="Research students: Additional time granted for thesis submission" />
        </div>
      </div>

      {/* Extension Pathways */}
      <div className="mt-8">
        <p className="font-medium text-base sm:text-lg pb-3">
          Extension Pathways:
        </p>

        <div className="space-y-3">
          <BulletPoint text="Apply for a new Student visa to continue studies" />
          <BulletPoint text="Temporary Graduate visa (subclass 485) for work after studies" />
          <BulletPoint text="Visitor visa (subclass 600) for graduation attendance" />
          <BulletPoint text="Skilled visas for eligible occupations and qualifications" />
          <BulletPoint text="Partner or family visas for eligible relationships" />
        </div>
      </div>

      {/* Visa Conditions */}
      <div className="pt-10 pb-5">
        <h1
          className="
            flex
            items-start
            gap-3
            text-[#396cb8]
            font-medium
            text-xl
            sm:text-2xl
            lg:text-3xl
          "
        >
          <PiSealDuotone className="text-2xl sm:text-3xl shrink-0 mt-1" />
          <span>Visa Conditions & Obligations</span>
        </h1>
      </div>

      <div className="space-y-3">
        <BulletPoint text="Maintain enrolment in a CRICOS-registered course" />
        <BulletPoint text="Achieve satisfactory course attendance and progress" />
        <BulletPoint text="Notify institution of address changes within 7 days" />
        <BulletPoint text="Maintain adequate health insurance coverage" />
        <BulletPoint text="Comply with Australian laws and visa conditions" />
        <BulletPoint text="Work within permitted hours during study periods" />
      </div>

      {/* Important Notice */}
      <div
        className="
          border
          border-gray-200
          shadow-md
          rounded-2xl
          p-4
          sm:p-5
          mt-6
          bg-[#FEFCE8]
        "
      >
        <p className="text-[#894B00] text-sm sm:text-base leading-6">
          <span className="font-semibold">Important:</span>{" "}
          Failure to comply with visa conditions may result in visa
          cancellation and affect future applications.
        </p>
      </div>

      {/* Travel & Digital Visa */}
      <div className="pt-10 pb-5">
        <h1
          className="
            flex
            items-start
            gap-3
            text-[#396cb8]
            font-medium
            text-xl
            sm:text-2xl
            lg:text-3xl
          "
        >
          <LuPlane className="text-2xl sm:text-3xl shrink-0 mt-1" />
          <span>Travel & Digital Visa Information</span>
        </h1>

        <p className="pt-3 text-sm sm:text-base leading-7">
          Australia uses a digital visa system. Your visa is electronically
          linked to your passport - no physical label is required.
        </p>
      </div>

      <div className="space-y-3">
        <BulletPoint text="Live and study in Australia for up to 5 years, depending on your course duration" />
        <BulletPoint text="Work up to 48 hours per fortnight during study periods" />
        <BulletPoint text="Work unlimited hours during scheduled course breaks" />
        <BulletPoint text="Bring eligible family members as dependents" />
        <BulletPoint text="Travel freely in and out of Australia during visa validity" />
      </div>

      {/* Processing Timeline */}
      <div className="pt-10 pb-5">
        <h1
          className="
            flex
            items-start
            gap-3
            text-[#396cb8]
            font-medium
            text-xl
            sm:text-2xl
            lg:text-3xl
          "
        >
          <CiClock2 className="text-2xl sm:text-3xl shrink-0 mt-1" />
          <span>Processing Timeline</span>
        </h1>
      </div>

      <div className="space-y-3">
        <BulletPoint text="Standard processing: 4-6 weeks for complete applications" />
        <BulletPoint text="Priority processing available for certain sectors" />
        <BulletPoint text="Longer processing during peak periods (December-February)" />
        <BulletPoint text="Apply at least 8 weeks before course commencement" />
      </div>

      <p className="pt-4 text-sm sm:text-base leading-7 text-gray-700">
        Processing times vary based on application completeness, applicant
        country, and seasonal factors.
      </p>
    </section>
  );
};

export default Features;