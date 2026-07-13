import SectionHeading from "../Components/SectionHeadingProps";
import SectionButton from "../Components/SectionButtonProps";
import { blogs } from "../../Blog/blogsData";
import { BlogList } from "../../Blog/Component/Bloglist";

// Show only the latest N blogs on the homepage
const LATEST_COUNT = 2;

export const HomeBlogs = () => {
  const latestBlogs = blogs.slice(0, LATEST_COUNT);

  return (
    <section className="min-h-full max-w-full mt-7 py-12 section-heading-override">
      <SectionHeading
        headingOne="Blogs"
        title="Expert Blogs for Your Study Abroad Journey"
        briefDesc="Stay updated with expert blogs on education, visas, and global opportunities."
      />

      <div className="min-h-[500px] mt-5 mb-5 p-6 sm:p-10 lg:p-20 rounded-lg">
        <BlogList blogs={latestBlogs} imageHeight="h-96 lg:h-[150px] border-x-4 border-secondary "/>
      </div>

      <SectionButton
        ButtonContent="Read More Blog"
        to="/blog&news"
        className="mt-8"
      />
    </section>
  );
};