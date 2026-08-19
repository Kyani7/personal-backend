import MiniPannel from "../../../VisaServices-DestinationCountry/MiniPannel";

export const Head = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="
          min-h-[420px]
          sm:min-h-[450px]
          lg:min-h-[480px]
          bg-cover
          bg-center
          bg-no-repeat
          relative
          mb-8
          sm:mb-10
          flex
          items-center
        "
        style={{
          backgroundImage:
            "url('https://himaaus.com/images/WEBSITE-2.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div
          className="
            relative
            z-10
            w-full
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-20
            sm:py-24
            lg:py-28
          "
        >
          <h1
            className="
              text-white
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-tight
              max-w-xl
              sm:max-w-2xl
              lg:max-w-3xl
            "
          >
            Australian Migration Made Simple & Successful
          </h1>

          <p
            className="
              text-white
              text-sm
              sm:text-base
              lg:text-lg
              mt-4
              max-w-xl
              sm:max-w-2xl
              lg:max-w-3xl
              leading-7
            "
          >
            End-to-end support services designed to make your Australian
            education journey smooth, successful and memorable.
          </p>
        </div>
      </section>

      {/* Mini Panel */}
      <div className="w-full">
        <MiniPannel
          head="Migration Visa"
          subHead="Expert Guidance for Your Migration Journey"
          body="Our migration visa services are designed to support individuals seeking to migrate and settle in Australia, ensuring a smooth, transparent, and well-guided process."
        />
      </div>
    </>
  );
};
