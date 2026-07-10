
import SectionHeading from "../Components/SectionHeadingProps";
import SectionButton from "../Components/SectionButtonProps";

export const HomeBlogs = () => {
  return (
    <section className="min-h-full max-w-full mt-7 py-12 section-heading-override">
      <SectionHeading
        headingOne="Blogs"
        title="Expert Blogs for Your Study Abroad Journey"
        briefDesc="Stay updated with expert blogs on education, visas, and global opportunities."
      />

      <div className="min-h-[500px] mt-5 mb-5 bg-secondary p-6 sm:p-10 lg:p-20 rounded-lg">
        <p>
          reusable components/shared components will be here of blog page
        </p>
      </div>

      <SectionButton
        ButtonContent="Read More Blog"
        to="#"
        className="mt-8"
      />
    </section>
  );
};

