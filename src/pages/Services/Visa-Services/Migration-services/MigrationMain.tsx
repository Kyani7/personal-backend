import { Head } from "./Component/Head";
import Last from "./Component/Last";
import About from "./Component/About";
import Box1 from "./Component/Box1";
import Right from "./Component/Right";
import Box2 from "./Component/Box2";
import Box3 from "./Component/Box3";
import Box4 from "./Component/Box4";

const MigrationMain = () => {
  return (
    <>
      <Head />

      {/* Main Content */}
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
          lg:py-16
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
          {/* Left Content */}
          <main className="w-full min-w-0 xl:flex-1">
            <About />

            <div className="mt-6 space-y-5">
              <Box1 />
              <Box2 />
              <Box3 />
              <Box4 />
            </div>
          </main>

          {/* Right Sidebar */}
          <Right />
        </div>
      </section>

      <Last />
    </>
  );
};

export default MigrationMain;