import PageShell from "../Services/EnglishTesting/PageShell";
import HeroBanner from "../Services/EnglishTesting/HeroBanner";
import CoursesIntro from "../Services/EnglishTesting/CoursesIntro";
import CourseContent from "../Services/EnglishTesting/CourseContent";
import CTASection from "../Services/EnglishTesting/CTASection";
import { courses } from "../data/courses";
import { useScrollToHash } from "../Hook/useScrollToHash";

export default function Courses() {
  useScrollToHash();

  const orderedCourses = [...courses].sort((a, b) => a.order - b.order);

  return (
    <PageShell>
      <HeroBanner
        heading="English Test Preparation Programs"
        description="We offer expert-led English test preparation courses for students who aspire to study abroad and achieve top scores in international exams."
      />
      <CoursesIntro />

      {orderedCourses.map((course, i) => (
        <div
          key={course.id}
          className={i > 0 ? "border-t border-gray-100" : ""}
        >
          <CourseContent course={course} />
        </div>
      ))}

      <CTASection />
    </PageShell>
  );
}