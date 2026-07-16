import { LuCircleCheckBig } from "react-icons/lu";

type ServiceCardProps = {
  image: string;
  title: string;
  badge: string;
  description: string;
  points: string[];
};

const Card = ({
  image,
  title,
  badge,
  description,
  points,
}: ServiceCardProps) => {
  return (
    <section className="w-full bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden mb-20">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      {/* Content */}
      <div className="p-8">
        {/* Title & Badge */}
        <div className="flex justify-between items-start">
          <h2 className="font-bold text-[#396cb8] text-2xl leading-tight">
            {title}
          </h2>

          <span className="bg-gray-100 px-5 py-3 rounded-full text-sm whitespace-nowrap">
            {badge}
          </span>
        </div>

        {/* Description */}
        <p className="pt-6 text-lg leading-relaxed text-gray-700">
          {description}
        </p>

        {/* Features */}
        <div className="mt-6 space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <LuCircleCheckBig className="text-[#22C55E] text-xl shrink-0" />

              <p className="text-gray-700">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="w-full mt-8 bg-[#396cb8] text-white py-4 rounded-2xl text-xl font-medium hover:bg-[#2E5DAA] transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Card;