import USA from "../Component/USA";
import Head from "../Component/Head";
import MiniPannel from "../../VisaServices-DestinationCountry/MiniPannel";

const USAPage = () => {
  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Mini Panel */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Study in USA"
              body="Explore everything about studying in USA with our expert guidance."
            />
          </div>
        </div>

        {/* USA Content */}
        <div className="w-full">
          <USA />
        </div>
      </section>
    </>
  );
};

export default USAPage;
