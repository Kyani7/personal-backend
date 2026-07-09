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
    <div className=" h-125 mt-5 mb-5 bg-secondary p-100">
      <p> reusable components/shared components will be here of Home Gallery .</p>
        
    </div>
    </div>
    <SectionButton
    to="/gallery"
    ButtonContent="View More Story"
    />
    </>
  );
};

export default HomeGalleryMain;