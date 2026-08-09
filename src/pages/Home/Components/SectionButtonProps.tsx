import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type SectionButtonProp={
    ButtonContent:string;
    to:string;
    className?:string;
};

const SectionButton = ({
  ButtonContent,
  to,
  className = "",
}: SectionButtonProp) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
  <Link
    to={to}
    className="
      inline-flex items-center justify-center gap-2
      bg-[#0078bd] hover:bg-secondary
      transition-all duration-200
      text-white font-semibold
      px-6 sm:px-8 lg:px-10
      py-3 sm:py-3.5
      rounded-2xl
      w-full sm:w-auto
      max-w-xs sm:max-w-none
    "
  >
    {ButtonContent}
    <ArrowRight className="w-4 h-4" />
  </Link>
</div>
  );
};
export default SectionButton;