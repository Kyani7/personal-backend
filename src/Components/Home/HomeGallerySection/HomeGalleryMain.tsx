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

        <div className="min-h-150">
          <p>
            reusable components/shared components will be here of Home Gallery.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <SectionButton
          to="/gallery"
          ButtonContent="View More Story"
        />
      </div>
    </>
  );
};

export default HomeGalleryMain;