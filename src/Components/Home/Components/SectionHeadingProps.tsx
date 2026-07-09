type SectionHeadingProps = {
    headingOne: string;
    title: string;
    briefDesc: string;
};

const SectionHeading = ({
  headingOne,
  title,
  briefDesc,
}: SectionHeadingProps) => {
  return (
    <div className="text-center">
      <h1 className="mt-4 tracking-[0.4em] text-ms md:xs text-secondary uppercase font-semibold">
        {headingOne}
      </h1>

      <h3 className="text-lg md:text-2xl lg:text-4xl font-bold text-primary tracking-wide mt-3">
        {title}
      </h3>

      <p className="text-slate-500 mt-3">
        {briefDesc}
      </p>
    </div>
  );
};

export default SectionHeading;