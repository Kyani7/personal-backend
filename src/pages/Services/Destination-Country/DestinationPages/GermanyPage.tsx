import Germany from "../Component/Germany";
import Head from "../Component/Head";
import MiniPannel from "../../VisaServices-DestinationCountry/MiniPannel";

const GermanyPage = () => {
  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Mini Panel */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Study in Germany"
              body="Explore everything about studying in Germany with our expert guidance."
            />
          </div>
        </div>

        {/* Germany Content */}
        <div className="w-full">
          <Germany />
        </div>
      </section>
    </>
  );
};

export default GermanyPage;