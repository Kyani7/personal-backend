import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "./aboutCommon/container";
import { HERO_IMAGE } from "./data/aboutContent";

type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[40vh] w-full bg-cover bg-center sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${HERO_IMAGE})`,
        backgroundPosition: "50% 30%",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/20" />
      <Container className="relative z-20 flex min-h-[40vh] flex-col justify-end pb-12 pt-24 sm:min-h-[380px] md:min-h-[420px] md:pb-16 lg:min-h-[480px]">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 flex w-fit items-center gap-2 text-base text-slate-200 transition-colors hover:text-white md:text-lg"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-slate-200 md:text-lg lg:text-xl">{subtitle}</p>
        ) : null}
      </Container>
    </section>
  );
}
