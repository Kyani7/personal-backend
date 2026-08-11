import Australia from "../Component/Australia";
import Head from "../Component/Head";
import MiniPannel from "../../VisaServices-DestinationCountry/MiniPannel";

const AustraliaPage = () => {
  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Mini Panel */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Study in Australia"
              body="Explore everything about studying in Australia with our expert guidance."
            />
          </div>
        </div>

        {/* Australia Content */}
        <div className="w-full">
          <Australia />
        </div>
      </section>
    </>
  );
};

export default AustraliaPage;