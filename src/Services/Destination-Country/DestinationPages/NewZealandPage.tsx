import NewZealand from "../Component/NewZealand";
import Head from "../Component/Head";
import MiniPannel from "../../../pages/MiniPannel";

const NewZealandPage = () => {
  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Study in New Zealand"}
            body={"Explore everything about studying in New Zealand with our expert guidance."}
          />
        </div>
        <NewZealand />
      </section>
    </>
  );
};

export default NewZealandPage;
