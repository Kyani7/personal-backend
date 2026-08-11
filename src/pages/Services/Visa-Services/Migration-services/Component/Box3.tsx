import MiniVisaCard from "../../../VisaServices-DestinationCountry/VisaCard";
import { TbCircleNumber3Filled } from "react-icons/tb";

const Box3 = () => {
  return (
    <div className="w-full">
      <MiniVisaCard
        number={
          <TbCircleNumber3Filled
            className="text-3xl sm:text-4xl text-[#3187C4]"
          />
        }
        title="PR (Permanent Resident)"
        description="Australian migrants are permanent residents of Australia who have been granted migrant or permanent residence visas and are permitted to live and work in the country permanently. Migrants are not citizens; however, they do have the option of becoming citizens after they complete the residence requirements. Immigrating to Australia can be done through family, job, refugee, or humanitarian status."
        features={[
          "Indefinite stay in Australia",
          "Enroll in Medicare, Australia’s national health insurance program",
          "Work and study in Australia",
          "Purchase a home with the help of a bank loan",
          "Sponsor relatives who are eligible for permanent residency",
          "If you meet the requirements, you can apply for Australian citizenship",
          "For as long as your travel facility allows, travel to and from Australia",
          "Work in New Zealand",
        ]}
      />
    </div>
  );
};

export default Box3;