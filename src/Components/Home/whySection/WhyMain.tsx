import { Link } from "react-router-dom";
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
  href: string;
};

const services: Service[] = [
  { icon: Award, label: "Scholarship Offers", href: "/scholarship" },
  { icon: Users, label: "Genuine Counselling", href: "/services/counselling" },
  {
    icon: BookOpen,
    label: "Test Preparation",
    href: "/services/test-preparation",
  },
  {
    icon: GraduationCap,
    label: "Best Education Institutions",
    href: "/services/institution",
  },
  { icon: Target, label: "Courses on Demand", href: "/services/course" },
  { icon: Video, label: "Virtual Counselling", href: "/services/virtual" },
  {
    icon: FileText,
    label: "Visa Application",
    href: "/services/visa-application",
  },
  { icon: Plane, label: "Pre-Departure", href: "/services/departure" },
  { icon: MapPin, label: "Airport Pickup", href: "/services/airport" },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        flex flex-col lg:flex-row
        gap-10 lg:gap-14
        px-4 sm:px-6 md:px-8 lg:px-20
        py-12 lg:py-20
        mt-5 mb-10
      "
    >
      {/* Video */}
      <div className="w-full lg:w-[42%] shrink-0">
        <div className="relative aspect-video lg:aspect-[9/16] overflow-hidden rounded-3xl shadow-lg">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/zZAtX5YohWg?autoplay=1&mute=1"
            title="What makes Hima Aus Education Standout"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          <span className="text-amber-500">Why choose </span>
          <span className="text-[#0078bd]">Hima Aus?</span>
        </h2>

        <p className="text-[#1d398f] text-base md:text-lg leading-8 mb-10">
          Hima Aus pairs Australian expertise with global reach. Families trust
          us for meticulous planning, cultural preparation, and constant
          communication before, during, and after departure.
        </p>

        <h3 className="text-2xl font-bold text-[#0078bd] mb-6">
          Our Core Services
        </h3>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-10">
          {services.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              to={href}
              className="
                flex flex-col justify-center
                gap-4 max-[425px]:gap-2
                min-h-[150px]
                max-[425px]:min-h-[120px]
                rounded-3xl
                border border-slate-200
                bg-white
                p-6 max-[425px]:p-4
                shadow-sm
                hover:shadow-md
                hover:border-blue-200
                transition-all duration-300
              "
            >
              <Icon
                className="
                  h-7 w-7 text-[#0078bd]
                  max-[425px]:h-5
                  max-[425px]:w-5
                "
                strokeWidth={1.75}
              />

              <span
                className="
                  text-slate-800
                  font-semibold
                  text-base
                  leading-7
                  max-[425px]:text-sm
                  max-[425px]:leading-5
                  max-[425px]:font-medium
                "
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="
              inline-flex items-center gap-2
              rounded-2xl
              bg-[#0078bd]
              px-7 py-4
              text-white
              font-semibold
              transition-all
              hover:bg-secondary
              hover:scale-[1.02]
            "
          >
            Explore Why Choose Us
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}