export default function CoursesIntro() {
  return (
    <div className="bg-white px-6 pb-2 pt-12 sm:px-10 md:px-20">
      <div className="mb-3 flex items-center gap-3">
        <div className="h-[2.5px] w-9 bg-brand-blue" />
        <span className="text-[13px] font-medium uppercase tracking-[0.35em] text-brand-orange">
          Test Preparation
        </span>
      </div>

      <h2 className="mb-4 text-[26px] font-bold text-brand-blue sm:text-[32px] md:text-[36px]">
        English Test Preparation for Study Abroad
      </h2>

      <p className="max-w-3xl text-[15px] leading-relaxed text-brand-text">
        We offer structured English test preparation programs to help students
        achieve the required scores for international study, with expert
        guidance and proven strategies.
      </p>
    </div>
  );
}