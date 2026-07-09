import { memo } from 'react';
import SectionHeading from '../Components/SectionHeadingProps';
import Card from './Components/Card';
import third from "../../../assets/Podcast/third.jpg"
import four from "../../../assets/Podcast/four.jpg"
import austriaposs from '../../../assets/Podcast/austrailiaPoss.jpg';
import RightPodcast from "../../../assets/Podcast/RightPodcast.jpg"

const AllpodCast = () => {
  return (
    <>
  <section className="bg-gray-50 py-20 section-heading-override">
  <SectionHeading
    headingOne="Podcasts"
    title="Hima Aus Podcasts"
    briefDesc="Listen to expert discussions, interviews, and insights on technology, education, and career growth."
  />

  <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-20 md:grid-cols-2">
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

    <Card
      src={third}
      title="Study in Australia exclusive, NAPS, Documentation and VISA !"
      videoId="dO16CevGqb4"
    />

    <Card
      src={four}
      title="Get It Right about USA Application, Interview, Universities and Scholarships, life in USA and more"
      videoId="ya84Kn26iZM"
    />
  </div>
</section>
    </>
  );
};

export default memo(AllpodCast);