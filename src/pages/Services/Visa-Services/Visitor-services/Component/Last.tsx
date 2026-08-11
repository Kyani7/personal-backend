const Last = () => {
  return (
    <section
      className="
        w-full
        bg-[#396cb8]
        px-4
        sm:px-6
        lg:px-8
        py-12
        sm:py-16
        lg:py-20
        text-center
      "
    >
      {/* Heading */}
      <h1
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-white
        "
      >
        Ready to Start Your Journey?
      </h1>

      {/* Description */}
      <p
        className="
          max-w-2xl
          mx-auto
          mt-4
          text-sm
          sm:text-base
          lg:text-lg
          leading-7
          text-white/90
        "
      >
        Join thousands of successful students who have transformed their lives
        through our guidance and support.
      </p>

      {/* Buttons */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-4
          sm:gap-5
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
            bg-white
            text-black
            rounded-3xl
            text-sm
            shadow-2xl
            hover:border
            hover:border-blue-500
            transition
            duration-300
          "
        >
          Get Free Appointment
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
            text-sm
            shadow-2xl
            hover:border
            hover:border-blue-500
            transition
            duration-300
          "
        >
          Why Choose Us
        </button>
      </div>
    </section>
  );
};

export default Last;