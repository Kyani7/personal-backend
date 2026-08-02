import Sweden from "../Component/Sweden";
import Head from "../Component/Head";
import MiniPannel from "../../../Pages/MiniPannel";

const SwedenPage = () => {
  return (
    <>
      <Head />
      <section className="z-50 min-h-200 bg-white">
        <div className="sticky top-0 z-50 bg-white">
          <MiniPannel
            head={"Counselling Service"}
            subHead={"Study in Sweden"}
            body={"Explore everything about studying in Sweden with our expert guidance."}
          />
        </div>
        <Sweden />
      </section>
    </>
  );
};

export default SwedenPage;
