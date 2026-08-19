import { FiLayers } from "react-icons/fi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const About = () => {
  return (
    <section className="w-full">
      {/* About Migration Visa */}
      <div className="flex items-start text-[#396cb8] text-xl sm:text-2xl pb-5 gap-3 sm:gap-5">
        <HiOutlineQuestionMarkCircle className="mt-1 shrink-0" />

        <h1 className="font-bold">
          About Migration Visa
        </h1>
      </div>

      <p
        className="
          text-justify
          text-sm
          sm:text-base
          leading-7
          text-gray-700
        "
      >
        An Australian migration visa is a permit allowing skilled foreign
        workers to live and work permanently or temporarily in Australia,
        primarily through the Skilled Migration Program to fill labor
        shortages, involving pathways like employer sponsorship, state
        nomination (Subclass 190, 491), or independent application
        (Subclass 189) based on skills, points, and meeting specific criteria
        for various visa subclasses.
      </p>

      {/* Varieties of Migration Visa */}
      <div className="flex items-start text-[#396cb8] text-xl sm:text-2xl gap-3 sm:gap-5 mt-8">
        <FiLayers className="mt-1 shrink-0" />

        <h1 className="font-bold">
          Varieties of Migration Visa
        </h1>
      </div>

      <p
        className="
          mt-5
          text-sm
          sm:text-base
          leading-7
          text-gray-700
        "
      >
        There are various varieties of migration visas that Australia is
        currently providing.
      </p>
    </section>
  );
};

export default About;