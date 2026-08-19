import MiniPannel from "../../../VisaServices-DestinationCountry/MiniPannel";

const Top = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="
          relative
          min-h-[350px]
          sm:min-h-[400px]
          lg:min-h-[500px]
          bg-cover
          bg-center
          bg-no-repeat
          mb-10
        "
        style={{
          backgroundImage: "url('https://himaaus.com/images/WEBSITE-2.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div
          className="
            relative
            z-10
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            pt-32
            sm:pt-36
            lg:pt-40
          "
        >
          <h1
            className="
              max-w-4xl
              text-white
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              leading-tight
            "
          >
            Student Visa (Subclass 500) Australia
          </h1>

          <p
            className="
              text-white
              text-sm
              sm:text-base
              lg:text-lg
              mt-4
              max-w-3xl
              leading-relaxed
            "
          >
            Complete guidance for your Australian study journey - From
            application to arrival and beyond
          </p>
        </div>
      </section>

      {/* Mini Panel */}
      <div className="px-4 sm:px-6 lg:px-0">
        <MiniPannel
          head={"Student Visa"}
          subHead={"Simplifying Your Study Abroad Journey"}
          body={
            "Visa support designed to help students apply with clarity, confidence, and accuracy."
          }
        />
      </div>
    </>
  );
};

export default Top;
