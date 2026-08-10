import Top from "./Component/Top";
import Box from "./Component/Box";
import SubBody from "./Component/SubBody";
import Visa from "./Component/Visa";
import Ready from "./Component/Ready";
import Bottom from "./Component/Bottom";
import Eligibility from "./Component/Eligibility";
import Features from "./Component/Features";

const Student = () => {
  return (
    <>
      <Top />

      <Box />

      <SubBody />

      {/* Main Content */}
      <section
        className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-8
          sm:pt-10
          lg:pt-14
          mb-6
        "
      >
        <div
          className="
            flex
            flex-col
            xl:flex-row
            gap-8
            xl:gap-12
          "
        >
          {/* Left Content */}
          <div className="w-full xl:flex-1 min-w-0">
            <Visa />
            <Eligibility />
            <Features />
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[440px] shrink-0">
            <Ready />
          </div>
        </div>
      </section>

      <Bottom />
    </>
  );
};

export default Student;