import Sweden from "../Component/Sweden";
import Head from "../Component/Head";
import MiniPannel from "../../VisaServices-DestinationCountry/MiniPannel";

const SwedenPage = () => {
  return (
    <>
      <Head />

      <section className="w-full bg-white">
        {/* Sticky Mini Panel */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <MiniPannel
              head="Counselling Service"
              subHead="Study in Sweden"
              body="Explore everything about studying in Sweden with our expert guidance."
            />
          </div>
        </div>

        {/* Sweden Content */}
        <div className="w-full">
          <Sweden />
        </div>
      </section>
    </>
  );
};

export default SwedenPage;