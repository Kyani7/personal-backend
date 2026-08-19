import MiniPannel from '../VisaServices-DestinationCountry/MiniPannel'

const Body = () => {
  return (
    <>
      <MiniPannel
        head={"Our Comprehensive Services"}
        subHead={"End-to-End Study Abroad Solutions"}
        body={
          "From initial counseling to post-arrival support, we provide complete guidance for your international education journey."
        }
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 my-10 sm:my-14 lg:my-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 text-center">

        <div className="bg-white rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 py-5 sm:py-6">
          <p className="font-bold text-[#0078BD] text-xl sm:text-2xl">
            10,000+
          </p>
          <p className="text-sm sm:text-base">
            Students
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 py-5 sm:py-6">
          <p className="font-bold text-[#0078BD] text-xl sm:text-2xl">
            98%
          </p>
          <p className="text-sm sm:text-base">
            Visa Success Rate
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 py-5 sm:py-6">
          <p className="font-bold text-[#0078BD] text-xl sm:text-2xl">
            50+
          </p>
          <p className="text-sm sm:text-base">
            Partner Universities
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 py-5 sm:py-6">
          <p className="font-bold text-[#0078BD] text-xl sm:text-2xl">
            24/7
          </p>
          <p className="text-sm sm:text-base">
            Student Support
          </p>
        </div>

      </section>
    </>
  )
}

export default Body;