import UK from "../Component/UnitedKingdom";
import Head from "../Component/Head";
import MiniPannel from "../../VisaServices-DestinationCountry/MiniPannel";

const UKPage = () => {
  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Mini Panel */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Study in United Kingdom"
              body="Explore everything about studying in United Kingdom with our expert guidance."
            />
          </div>
        </div>

        {/* UK Content */}
        <div className="w-full">
          <UK />
        </div>
      </section>
    </>
  );
};

export default UKPage;