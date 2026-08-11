import NewZealand from "../Component/NewZealand";
import Head from "../Component/Head";
import MiniPannel from "../../VisaServices-DestinationCountry/MiniPannel";

const NewZealandPage = () => {
  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Mini Panel */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Study in New Zealand"
              body="Explore everything about studying in New Zealand with our expert guidance."
            />
          </div>
        </div>

        {/* New Zealand Content */}
        <div className="w-full">
          <NewZealand />
        </div>
      </section>
    </>
  );
};

export default NewZealandPage;