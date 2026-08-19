import { useNavigate } from "react-router-dom";

interface HeroBannerProps {
  heading: string;
  description: string;
  showBack?: boolean;
}

const HERO_IMAGE =
  "https://himaaus.com/images/WEBSITE-2.png";

export default function HeroBanner({
  heading,
  description,
  showBack = true,
}: HeroBannerProps) {
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-[380px] flex-col justify-center bg-cover bg-center px-6 py-16 sm:px-10 md:px-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,20,45,0.55),rgba(0,20,45,0.55)), url(${HERO_IMAGE})`,
      }}
    >
      {showBack && (
        <button
          onClick={() => navigate("/")}
          className="mb-4 flex w-fit items-center gap-2 text-[15px] font-medium text-white/90 transition-colors hover:text-brand-orange"
        >
          <span aria-hidden="true">←</span> Back
        </button>
      )}
      <h1 className="mb-3.5 max-w-3xl text-[26px] font-bold leading-tight text-white sm:text-[32px] md:text-[38px]">
        {heading}
      </h1>
      <p className="max-w-xl text-[14.5px] leading-relaxed text-gray-200">
        {description}
      </p>
    </div>
  );
}