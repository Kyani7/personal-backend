import Head from "./Component/Head";
import Feature from "./Component/Feature";
import Overview from "./Component/Overview";
import Right from "./Component/Right";
import Last from "./Component/Last";

const Visitor = () => {
  return (
    <>
      <Head />

      <Feature />

      {/* Main Content + Sidebar */}
      <section
        className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
          sm:py-10
          lg:py-12
        "
      >
        <div
          className="
            flex
            flex-col
            xl:flex-row
            items-start
            gap-8
            xl:gap-12
          "
        >
          {/* Main Content */}
          <main className="w-full min-w-0 xl:flex-1">
            <Overview />
          </main>

          {/* Right Sidebar */}
          <Right />
        </div>
      </section>

      <Last />
    </>
  );
};

export default Visitor;