const Last = () => {
  return (
    <section className="my-10 sm:my-14 lg:my-20 px-4 sm:px-6">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#396cb8]">
          Ready to Start Your Journey?
        </h2>

        <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
          Join thousands of successful students who have transformed their
          lives through our guidance and support.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
        
        <button
          className="
            w-full
            sm:w-auto
            px-6
            sm:px-8
            py-3
            sm:py-4
            bg-[#396cb8]
            text-white
            rounded-3xl
            shadow-2xl
            text-sm
            sm:text-base
            hover:outline
            hover:outline-2
            hover:outline-blue-500
            transition
          "
        >
          Book Appointment Now
        </button>

        <button
          className="
            w-full
            sm:w-auto
            px-6
            sm:px-8
            py-3
            sm:py-4
            bg-[#FFBA1B]
            text-white
            rounded-3xl
            shadow-2xl
            text-sm
            sm:text-base
            hover:outline
            hover:outline-2
            hover:outline-blue-500
            transition
          "
        >
          Explore Destination Country
        </button>

      </div>
    </section>
  )
}

export default Last;