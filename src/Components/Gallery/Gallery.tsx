import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";
import usePageTitle from "../../Hook/titleTab";


const Gallery = () => {
  usePageTitle("Gallery");
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
};

export default Gallery;