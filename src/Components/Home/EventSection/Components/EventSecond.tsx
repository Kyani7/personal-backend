import { Quote } from "lucide-react";

type eventSecndprops={
  heading:string;
  insideBief:string;
}
const EventSecond = ( {heading,insideBief}:eventSecndprops) => {
  return (
    <>
    <div className='flex flex-row m-21 gap-3 '>
      <div className="hero">
        <Quote className="h-10 w-10 text-[#0071bd]"/>
      </div>
      <div className="hero">{heading}</div>
      <div className="hero">{insideBief}</div>
    </div>
    </>
  );
};

export default EventSecond;