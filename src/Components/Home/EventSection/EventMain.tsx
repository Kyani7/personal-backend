import { Link } from "react-router-dom";
import SectionButton from "../Components/SectionButtonProps";
import EventHeading from "./Components/EventHeading";
import { ArrowRight } from "lucide-react";
import EventSecond from "./Components/EventSecond";

const EventMain = () => {
  return (
    <>
      <section className="min-h-screen w-full py-2">
        <div className="max-w-full min-h-150 flex flex-row gap-1">
          <div className="w-2/5 ml-20 shadow-lg">
            <EventHeading
            heading="Uncoming"
            subHeading="Events "
            />
            <div className=" px-7 py-22 ">
            <p className="text-[#8f9ca1]">No upcoming events available at the moment.</p>
            </div>

            {/**button  */}
            <div className="w-full  px-7">
            <Link to="" className=" inline-flex justify-centerbg-primary text-[#0072BC] font-semibold gap-2" >View All Events
            <ArrowRight className="w-4 h-4 my-1"/>
            </Link>
            </div>
            
          </div>
          <div className="w-3/5 mr-20 shadow-lg ">
          <EventHeading heading="What our students say" subHeading="Testimonials"/>
          <EventSecond
          heading=""
          insideBief="Got 50% scholarship through good guidance from Hima Aus expertise. I highly recommend Hima Aus to everyone who is looking for good and trustworthy consultants. Thanks and good "
          />
          </div>
        </div>
      </section>
      <SectionButton ButtonContent="Explore More Event" to="#" />
    </>
  );
};
 
export default EventMain;
