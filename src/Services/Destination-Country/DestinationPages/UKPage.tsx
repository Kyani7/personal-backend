import UK from "../Component/UnitedKingdom";
import Head from "../Component/Head";
import MiniPannel from "../../pages/MiniPannel";

const UKPage = () => {
  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Study in United Kingdom"}
            body={"Explore everything about studying in United Kingdom with our expert guidance."}
          />
        </div>
        <UK />
      </section>
    </>
  );
};

export default UKPage;
