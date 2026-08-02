import USA from "../Component/USA";
import Head from "../Component/Head";
import MiniPannel from "../../../Pages/MiniPannel";

const USAPage = () => {
  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Study in USA"}
            body={"Explore everything about studying in USA with our expert guidance."}
          />
        </div>
        <USA />
      </section>
    </>
  );
};

export default USAPage;
