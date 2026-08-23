import type { CourseData } from "../utils/types";
import FeatureList from "./FeatureList";
import ImageSection from "./ImageSection";
import InfoCards from "./InfoCards";
import QuickFactsCard from "./QuickFactsCard";

interface CourseContentProps {
  course: CourseData;
  showHeading?: boolean;
}

export default function CourseContent({
  course,
  showHeading = true,
}: CourseContentProps) {
  return (
    <section
      id={course.id}
      aria-labelledby={`${course.id}-heading`}
      className="scroll-mt-24 px-6 pb-14 sm:px-10 md:px-20"
    >
      {showHeading && (
        <>
          {}
          <div className="mb-2.5 mt-12 flex items-center gap-3">
            <div className="h-[2.5px] w-9 bg-brand-blue" />
            <span className="text-[13px] font-medium uppercase tracking-[0.35em] text-brand-orange">
              {course.tagline}
            </span>
          </div>

          {}
          <h2
          id={`${course.id}-heading`}
          className="mb-4 text-[26px] font-semibold leading-tight text-brand-blue lg:text-[38px]"
          >
            {course.heading}
          </h2>
          <p className="mb-12 max-w-4xl text-[17px] leading-8 text-brand-text text-justify">
            {course.description}
          </p>
        </>
      )}

      {}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        {}
        <div className={course.wideImage ? "lg:flex-1" : "lg:flex-[1.4]"}>
        <h3 className="mb-6 text-[20px] font-semibold leading-tight text-brand-blue sm:text-[24px] lg:text-[26px]">
            {course.subheading}
          </h3>

          <p className="mb-4 text-[14.5px] leading-[1.78] text-brand-text text-justify">
    {course.intro}
          </p>
          <p className="mb-6 text-[14.5px] leading-[1.78] text-brand-text text-justify">
    {course.intro2}
          </p>

          <FeatureList features={course.features} />

    {course.intro3 && (
    <p className="mb-6 text-[14.5px] leading-[1.78] text-brand-text text-justify">
      {course.intro3}
    </p>
)}

      <InfoCards title={course.advantageTitle} items={course.advantage} />
        </div>

        {}
        <div className="lg:flex-1 lg:min-w-[300px]">
          <ImageSection
            image={course.image}
            caption={course.imageCaption}
            alt={`${course.label} students studying`}
          />
          <QuickFactsCard label={course.label} facts={course.quickFacts} />
        </div>
      </div>
    </section>
  );
}