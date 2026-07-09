import type { Country } from "../Components/Data/Countries";

type HeroCardProps = {
  item: Country;
  active: boolean;
  onClick: () => void;
};

const HeroCard = ({ item, active, onClick }: HeroCardProps) => {
  const label = item.shortTitle ?? item.title;

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-transform duration-300 rounded-3xl overflow-hidden w-30 h-50 opacity-80 hover:opacity-100 hover:scale-105 ${
        active ? "ring-4 ring-[#248bc7]/20" : ""
      }`}
    >
      <img src={item.image} className="w-full h-full object-cover" alt={item.title} />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl whitespace-nowrap">
        {label}
      </h2>
    </div>
  );
};

export default HeroCard;