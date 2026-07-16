import SectionHeading from "../Components/SectionHeadingProps";
import SectionButton from "../Components/SectionButtonProps";
import austriaposs from "../../../assets/Podcast/austrailiaPoss.jpg";
import RightPodcast from "../../../assets/Podcast/RightPodcast.jpg";
import Card from "./Components/Card";

const PodCast = () => {
  return (
    <section className="min-h-screen max-w-full section-heading-override pt-5">
      <SectionHeading
        headingOne="Podcast"
        title="Featured Podcasts"
        briefDesc="Listen to our latest episodes on technology, innovation, career growth, and the future of education."
      />

      <div
        className="
        max-w-8xl mx-auto
        flex flex-col md:flex-row
        gap-6 lg:gap-10
        items-stretch
        mt-10 lg:mt-20
        px-4 sm:px-6 lg:px-16 xl:px-25
      "
      >
        <Card
          src={austriaposs}
          title="Study in Australia, Southern Cross University, Access 2026 and More.."
          videoId="2fo9FdN8fao"
        />

        <Card
          src={RightPodcast}
          title="Hima Aus Education X Hult Prize IOE, Pulchowk Campus"
          videoId="AjKOW1ExvmQ"
        />
      </div>

      <div className="pt-10 lg:pt-16 pb-10 px-4">
        <SectionButton
          ButtonContent="Explore All Podcast"
          to="all-podcast"
        />
      </div>
    </section>
  );
};

export default PodCast;