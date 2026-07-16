import Japan from "../Component/Japan";
import Head from "../Component/Head";
import MiniPannel from "../../../pages/MiniPannel";

const JapanPage = () => {
  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Study in Japan"}
            body={"Explore everything about studying in Japan with our expert guidance."}
          />
        </div>
        <Japan />
      </section>
    </>
  );
};

export default JapanPage;
