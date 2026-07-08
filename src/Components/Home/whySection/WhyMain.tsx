import {Link} from "react-router-dom"
import {
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Target,
  Video,
  FileText,
  Plane,
  MapPin,
  ArrowRight,
} from "lucide-react";

type Service = {
  icon: React.ElementType;
  label: string;
  href:string;
};

const services: Service[] = [
  { icon: Award, label: "Scholarship Offers",href:"services/scholarship-offer" },
  { icon: Users, label: "Genuine Counselling",href:"" },
  { icon: BookOpen, label: "Test Preparation",href:"" },
  { icon: GraduationCap, label: "Best Education Institutions",href:"" },
  { icon: Target, label: "Courses on Demand",href:"" },
  { icon: Video, label: "Virtual Counselling",href:"" },
  { icon: FileText, label: "Visa Application",href:"" },
  { icon: Plane, label: "Pre-Departure",href:"" },
  { icon: MapPin, label: "Airport Pickup",href:"" },
];

export default function WhyChooseUs() {
  return (
    <>
    <div className="flex flex-row gap-10 p-20 mb-10 mt-5 md:flex felx-col">
       
    <div className="w-full lg:w-1/2 rounded-xl overflow-hidden lg:top-24 self-start">
        <div className="relative w-full aspect-[9/16] max-h-[600px]">
         <iframe className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/zZAtX5YohWg?autoplay=1&loop=1&mute=1" 
          title="What makes Hima Aus Education Standout.." 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
          </iframe>
        </div>
      </div>
    <div className="max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-amber-500">Why choose</span>{" "}
        <span className="text-blue-900">Hima Aus?</span>
      </h2>

      <p className="text-[#1d398f] mb-8 transition hover:text-secondary ">
        Hima Aus pairs Australian expertise with global reach. Families trust us
        for meticulous planning, cultural preparation, and constant communication
        before, during, and after departure.
      </p>

      <h3 className="text-2xl font-bold text-blue-900 mb-5">Our Core Services</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {services.map(({ icon: Icon, label,href }) => (
          <Link
            key={label}
            to={href}
            className="flex flex-col gap-3 rounded-xl border border-blue-50 bg-white p-5 shadow-sm 
            hover:shadow-md hover:border-blue-200 transition-all"
          >
            <Icon className="w-6 h-6 text-[#0078bd]" strokeWidth={1.75} />
            <span className="font-semibold text-slate-800 text-[13px] whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="inline-flex justify-center items-center gap-2 bg-[#0078bd]
        hover:bg-secondary text-white font-semibold px-6 py-3.5 rounded-2xl ">
        Explore Why CHoose Us
        <ArrowRight className="w-4 h-4" />
      </button>
      </div>
      
    </div>
    </div>
    </>
  );
}