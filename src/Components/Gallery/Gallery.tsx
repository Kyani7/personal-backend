import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";
import usePageTitle from "../../Hook/titleTab";


const Gallery = () => {
  usePageTitle("Stories & Gallery | Students Journey");
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
};

export default Gallery;