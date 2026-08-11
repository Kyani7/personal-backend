import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-[380px] sm:min-h-[420px] bg-cover bg-center bg-no-repeat relative mb-6 sm:mb-10"
      style={{
        backgroundImage:
          "url('https://himaaus.com/images/WEBSITE-2.png')",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40">
        <button
          onClick={() => navigate("/services")}
          className="mb-4 flex w-fit items-center gap-2 text-sm sm:text-[15px] font-medium text-white/90 transition-colors hover:text-brand-orange"
        >
          <span aria-hidden="true">←</span>
          Back
        </button>

        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold max-w-3xl">
          Australian Migration Made Simple & Successful
        </h1>

        <p className="text-white text-sm sm:text-base lg:text-lg mt-4 max-w-3xl leading-relaxed">
          We provide expert counselling services for students aspiring to study
          abroad across multiple countries and achieve top scores in
          international examinations.
        </p>
      </div>
    </section>
  );
};

export default Head;