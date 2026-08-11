import Canada from "../Component/Canada";
import Head from "../Component/Head";
import MiniPannel from "../../VisaServices-DestinationCountry/MiniPannel";

const CanadaPage = () => {
  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Mini Panel */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Study in Canada"
              body="Explore everything about studying in Canada with our expert guidance."
            />
          </div>
        </div>

        {/* Canada Content */}
        <div className="w-full">
          <Canada />
        </div>
      </section>
    </>
  );
};

export default CanadaPage;
