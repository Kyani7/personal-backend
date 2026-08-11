const Last = () => {
  return (
    <section
      className="
        pt-8
        sm:pt-10
        bg-[#F6FAFC]
        pb-16
        sm:pb-20
        lg:pb-30
        mt-8
        sm:mt-10
        px-4
        sm:px-6
      "
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-[#396cb8]
            pt-5
          "
        >
          Ready to Start Your Journey?
        </h1>

        <p
          className="
            text-[#6DA7D5]
            text-sm
            sm:text-base
            mt-3
            leading-6
          "
        >
          Join thousands of successful students who have transformed their
          lives through our guidance and support.
        </p>
      </div>

      {/* Buttons */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-4
          sm:gap-6
          lg:gap-10
          pt-6
        "
      >
        <button
          className="
            w-full
            sm:w-auto
            px-6
            py-3
            sm:px-8
            sm:py-4
            bg-[#396cb8]
            text-white
            rounded-3xl
            shadow-2xl
            text-sm
            hover:border-2
            hover:border-blue-500
            transition
          "
        >
          Get Appointment Now
        </button>

        <button
          className="
            w-full
            sm:w-auto
            px-6
            py-3
            sm:px-8
            sm:py-4
            bg-[#FFBA1B]
            text-white
            rounded-3xl
            shadow-2xl
            text-sm
            hover:border-2
            hover:border-blue-500
            transition
          "
        >
          Call Us Now
        </button>
      </div>
    </section>
  );
};

export default Last;