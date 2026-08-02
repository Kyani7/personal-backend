import Australia from "../Component/Australia";
import Head from "../Component/Head";
import MiniPannel from "../../../Pages/MiniPannel";

const AustraliaPage = () => {
  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Study in Australia"}
            body={"Explore everything about studying in Australia with our expert guidance."}
          />
        </div>
        <Australia />
      </section>
    </>
  );
};

export default AustraliaPage;
