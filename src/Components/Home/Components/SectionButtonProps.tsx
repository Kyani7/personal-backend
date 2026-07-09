import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type SectionButtonProp={
    ButtonContent:string;
    to:string;
};

const SectionButton = ({ButtonContent,to}:SectionButtonProp) => {
  return (
   <>
   <div className="w-full flex justify-center">
    <Link to={to} className="inline-flex justify-center items-center gap-2 bg-[#0078bd]
        hover:bg-secondary transistion-transfer duration-200 text-white font-semibold px-10 py-3.5 rounded-2xl ">
        {ButtonContent}
        <ArrowRight className="w-4 h-4" />
    </Link>
      
      </div>
   </>
  );
};

export default SectionButton;