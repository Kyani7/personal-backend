import { LuCircleCheckBig } from "react-icons/lu";

type MiniVisaCardProps = {
  number : string;
  title : string;
  description : string;
  features : string[];
}
const MiniVisaCard = ({ number, title, description, features,} : MiniVisaCardProps) => {
  return (
    <div className="border border-gray-200 shadow-md rounded-2xl p-5 mt-5">
      {/* Header */}
      <div className="flex gap-3 items-center">
        {number}

        <h2 className="text-2xl font-medium">
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-[#737373] pl-12 mt-4">
        {description}
      </p>

      {/* Key Features */}
      <h3 className="font-medium mt-6 mb-4">
        Key Features
      </h3>

      <div className="grid md:grid-cols-2 gap-5 bg-[#F1F5F8] border border-gray-200 rounded-2xl p-5">
        {features.map((feature:any, index:any) => (
          <div key={index} className="flex gap-3">
            <LuCircleCheckBig className="text-[#0078BD] text-xl mt-1 shrink-0" />

            <p className="text-[#111828]">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniVisaCard;