type SectionHeadingProps = {
  headingOne: string;
  title: string;
  briefDesc: string;
  className?: string;
  headingClassName?: string;
  titleClassName?: string;
  briefDescClassName?: string;
};

const SectionHeading = ({
  headingOne,
  title,
  briefDesc,
  className = "",
  headingClassName = "",
  titleClassName = "",
  briefDescClassName = "",
}: SectionHeadingProps) => {
  return (
    <div className={`text-center ${className}`}>
      <h1
        className={`mt-4 tracking-[0.4em] text-sm md:text-base text-secondary uppercase font-semibold ${headingClassName}`}
      >
        {headingOne}
      </h1>

      <h3
        className={`text-lg md:text-2xl lg:text-4xl font-bold text-primary tracking-wide mt-3 ${titleClassName}`}
      >
        {title}
      </h3>

      <p
        className={`text-slate-500 mt-3 ${briefDescClassName}`}
      >
        {briefDesc}
      </p>
    </div>
  );
};

export default SectionHeading;