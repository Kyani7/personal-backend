import SectionButton from "../Components/SectionButtonProps";
import SectionHeading from "../Components/SectionHeadingProps";

const HomeGalleryMain = () => {
  return (
    <>
    <div className="min-h-full max-w-full py-12 section-heading-override">
    <SectionHeading 
    headingOne="Gallery"
    title="Moments from the Hima Aus journey"
    briefDesc="Click into any collection to open its story page and see full photo essays, itineraries and student tips."
    />
    <div className=" flex flex-row gap-3 h-100 max-w-full mt-3">
      <p> reusable components/shared components will be here of Home Gallery .</p>
        <div className=" flex-1 bg-secondary"></div>
        <div className="flex-1 bg-black"></div>
        <div className="flex-1 bg-red-500"></div>
    </div>
    </div>
    <SectionButton
    to="#"
    ButtonContent="View More Story"
    />
    </>
  );
};

export default HomeGalleryMain;