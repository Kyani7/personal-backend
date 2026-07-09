import Germany from "../Component/Germany";
import Head from "../Component/Head";
import MiniPannel from "../../../pages/MiniPannel";

const GermanyPage = () => {
  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Study in Germany"}
            body={"Explore everything about studying in Germany with our expert guidance."}
          />
        </div>
        <Germany />
      </section>
    </>
  );
};

export default GermanyPage;
