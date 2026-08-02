import Canada from "../Component/Canada";
import Head from "../Component/Head";
import MiniPannel from "../../../Pages/MiniPannel";

const CanadaPage = () => {
  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Study in Canada"}
            body={"Explore everything about studying in Canada with our expert guidance."}
          />
        </div>
        <Canada />
      </section>
    </>
  );
};

export default CanadaPage;
