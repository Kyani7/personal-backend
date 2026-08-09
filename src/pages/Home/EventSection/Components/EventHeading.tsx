interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

const SectionHeading = ({
  subHeading,
  heading,
}: SectionHeadingProps) => {
  return (
    <div className="px-7 mt-5">
      <span className="inline-block mt-5 text-xl font-semibold uppercase tracking-[8px] text-amber-400">
        {subHeading}
      </span>

      <h2 className="mt-3 text-4xl font-bold leading-tight text-[#0072BC]">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeading;