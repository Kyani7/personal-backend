import { BiSolidNotepad } from "react-icons/bi";
import BulletPoint from "../../../VisaServices-DestinationCountry/BulletPoint.tsx";

const Eligibility = () => {
  return (
    <section
      className="
        w-full
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        my-10
        sm:my-14
        lg:my-20
        text-justify
      "
    >
      {/* Heading */}
      <div className="flex items-start gap-3 sm:gap-4">
        <BiSolidNotepad
          className="
            shrink-0
            text-2xl
            sm:text-3xl
            text-[#396cb8]
            mt-1
          "
        />

        <h1
          className="
            text-xl
            sm:text-2xl
            lg:text-3xl
            text-[#396cb8]
            font-bold
          "
        >
          Eligibility & Document Requirements
        </h1>
      </div>

      {/* Introduction */}
      <p
        className="
          mt-4
          text-sm
          sm:text-base
          leading-7
          text-gray-700
        "
      >
        To ensure a successful application, you must meet specific criteria
        and provide comprehensive documentation:
      </p>

      {/* Eligibility Criteria */}
      <h2
        className="
          font-medium
          text-lg
          sm:text-xl
          pt-6
          pb-3
          text-gray-800
        "
      >
        Eligibility Criteria:
      </h2>

      <div className="space-y-3">
        <BulletPoint text="Enrolled in a full-time course registered under CRICOS" />

        <BulletPoint text="Meet English language requirements for your course level" />

        <BulletPoint text="Have adequate financial capacity for tuition and living expenses" />

        <BulletPoint text="Meet health and character requirements" />

        <BulletPoint text="Have Overseas Student Health Cover (OSHC) for entire stay" />

        <BulletPoint text="Genuine intention to study and comply with visa conditions" />
      </div>

      {/* Required Documents */}
      <h2
        className="
          font-medium
          text-lg
          sm:text-xl
          pt-8
          pb-3
          text-gray-800
        "
      >
        Required Documents:
      </h2>

      <div className="space-y-3">
        <BulletPoint text="Academic transcripts and certificates from previous studies" />

        <BulletPoint text="Proof of current qualifications and certifications" />

        <BulletPoint text="English language proficiency test results (IELTS, TOEFL, PTE, etc.)" />

        <BulletPoint text="For course credit: Translated documents proving past studies or professional experience" />

        <BulletPoint text="Valid passport and passport-sized photographs" />

        <BulletPoint text="Confirmation of Enrolment (CoE) from your Australian institution" />

        <BulletPoint text="Genuine Temporary Entrant (GTE) statement" />

        <BulletPoint text="Financial capacity proof (bank statements, sponsorship documents)" />

        <BulletPoint text="Overseas Student Health Cover (OSHC) documentation" />

        <BulletPoint text="Character and health examination certificates" />
      </div>
    </section>
  );
};

export default Eligibility;