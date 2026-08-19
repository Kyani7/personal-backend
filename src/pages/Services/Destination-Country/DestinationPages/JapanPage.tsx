import Japan from "../Component/Japan";
import Head from "../Component/Head";
import MiniPannel from "../../VisaServices-DestinationCountry/MiniPannel";

const JapanPage = () => {
  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Mini Panel */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Study in Japan"
              body="Explore everything about studying in Japan with our expert guidance."
            />
          </div>
        </div>

        {/* Japan Content */}
        <div className="w-full">
          <Japan />
        </div>
      </section>
    </>
  );
};

export default JapanPage;