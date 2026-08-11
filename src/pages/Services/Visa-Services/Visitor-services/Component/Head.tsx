const Head = () => {
  return (
    <>
      <section
        className="
          min-h-[320px]
          sm:min-h-[380px]
          lg:min-h-[420px]
          bg-cover
          bg-center
          bg-no-repeat
          mb-6
          sm:mb-8
          lg:mb-10
          flex
          items-center
        "
        style={{
          backgroundImage:
            "url('https://himaaus.com/images/WEBSITE-2.png')",
        }}
      >
        <div
          className="
            w-full
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            pt-16
            sm:pt-20
            lg:pt-24
          "
        >
          <h1
            className="
              text-white
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              leading-tight
              max-w-4xl
            "
          >
            Visitor Visa/Tourist Visa
          </h1>

          <p
            className="
              text-white
              text-sm
              sm:text-base
              lg:text-lg
              mt-4
              max-w-3xl
              leading-6
              sm:leading-7
            "
          >
            Complete guidance for your Australia visiting journey - From
            application to arrival and beyond
          </p>
        </div>
      </section>

      <div className="h-4 sm:h-6 lg:h-8 bg-white" />
    </>
  );
};

export default Head;