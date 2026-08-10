import { PiMedalBold } from "react-icons/pi";
import BulletPoint from "../../../VisaServices-DestinationCountry/BulletPoint.tsx";

const SubBody = () => {
  return (
    <section
      className="
        flex
        flex-col
        lg:flex-row
        justify-between
        px-4
        sm:px-6
        lg:px-20
        gap-8
        lg:gap-12
        max-w-7xl
        mx-auto
        my-10
        sm:my-14
        lg:my-20
      "
    >
      {/* Left Content */}
      <div className="flex-1 text-justify">
        <h1
          className="
            text-xl
            sm:text-2xl
            text-[#396cb8]
            font-bold
            pb-5
            flex
            items-start
            gap-3
            sm:gap-5
          "
        >
          <PiMedalBold className="shrink-0 mt-1" />

          <span>
            About the Student Visa (Subclass 500)
          </span>
        </h1>

        <p className="pb-5 text-sm sm:text-base leading-7">
          Australia offers international students an exceptional education
          experience with globally recognized qualifications, vibrant
          multicultural communities, and outstanding quality of life. The
          Student Visa (Subclass 500) is your gateway to this transformative
          journey.
        </p>

        <p className="text-sm sm:text-base leading-7">
          Our comprehensive service ensures you navigate the visa application
          process smoothly, with expert guidance at every step. We work closely
          with you to prepare a complete application that meets all Department
          of Home Affairs requirements.
        </p>
      </div>

      {/* Key Information */}
      <div
        className="
          w-full
          lg:w-[440px]
          h-fit
          border
          border-gray-200
          shadow-sm
          rounded-2xl
          bg-gray-100
          shrink-0
        "
      >
        <h1 className="px-6 sm:px-8 pt-5 font-bold text-lg">
          Key Information
        </h1>

        <div className="mt-6 space-y-3 px-6 sm:px-8 pb-6 text-sm">
          <BulletPoint text="Apply from inside or outside Australia" />

          <BulletPoint text="Family members can be included in application" />

          <BulletPoint text="Health insurance (OSHC) is mandatory" />

          <BulletPoint text="Visa application charge applies" />
        </div>
      </div>
    </section>
  );
};

export default SubBody;