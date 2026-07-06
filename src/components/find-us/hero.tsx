import heroImage from "../../assest/images/backgroung img.jpeg";
import Container from "../common/container";
import Navbar from "../layout/navbar";

export default function FindUsHero() {
  return (
    <section
      className="relative min-h-[380px] w-full bg-cover bg-center sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-slate-950/55" />
      <Navbar />
      <Container className="relative z-20 flex min-h-[380px] flex-col justify-end pb-12 pt-24 sm:min-h-[420px] md:min-h-[480px] md:pb-16 lg:min-h-[520px]">
        <button className="mb-4 w-fit text-base text-slate-200 transition-colors hover:text-white md:text-lg">
          ← Back
        </button>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Find Our Offices around you
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200 md:text-lg lg:text-xl">
          Visit us for personalized consultation and expert guidance.
        </p>
      </Container>
    </section>
  );
}
