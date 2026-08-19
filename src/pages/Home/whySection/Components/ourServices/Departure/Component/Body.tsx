import type { IconType } from "react-icons";
import { IoIosGlobe } from "react-icons/io";
import { LuCircleCheckBig } from "react-icons/lu";
import { TbPlane, TbUsers } from "react-icons/tb";


/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ProcessStepProps {
  text: string;
}

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

interface ScholarshipOffersProps {
  heading?: string;
  description?: string;
  processTitle?: string;
  process?: string[];
  featuresTitle?: string;
  features?: FeatureCardProps[];
  benefitsTitle?: string;
  benefits?: string[];
}

interface BenefitItemProps {
  text: string;
}


function ProcessStep({ text }: ProcessStepProps) {
  return (
    <li className="flex items-start gap-3">
      <LuCircleCheckBig className="mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
      <span className="leading-relaxed text-slate-700">{text}</span>
    </li>
  );
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-[#0078BD]" />
      <div>
        <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
        <p className="mt-1 leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}


function BenefitItem({ text }:  BenefitItemProps) {
  return (
    <li className="flex items-start gap-3">
      <LuCircleCheckBig className="mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
      <span className="leading-relaxed text-slate-700">{text}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function Body({
  heading = "About Pre-Departure",
  description = `Hima Aus' pre-departure program, part of our end-to-end service since 2008, equips students and families for success in Australia, UK, Canada, USA, New Zealand, Japan, Sweden, and Germany—covering culture, logistics, and mindset for a confident start. Our program includes virtual reality tours of campuses and cities, plus peer mentoring from past students to demystify the move. We address common challenges like homesickness and academic adjustment through evidence-based workshops.`,
  processTitle = "Our Process",
  process = [
    "Holistic evaluation of goals, skills, and constraints with 360-degree interviews",
    "Global program database search and filtering by QS rankings and employability scores",
    "Comparative analysis of options by ROI, duration, and location factors",
    "Expert recommendations with destination insights and visa compatibility",
    "Application roadmap and deadline management with automated reminders",
    "Iterative refinement based on feedback and market updates",
  ],
  featuresTitle = "Service Features",
  features = [
    {
      icon: IoIosGlobe,
      title: "Cultural Briefing",
      description:
        "Destination-specific orientation for 8+ countries with interactive modules.",
    },
    {
      icon: TbPlane,
      title: "Travel Logistics",
      description:
        "Flight, insurance, and packing guidance with personalized itineraries.",
    },
    {
      icon: TbUsers,
      title: "Family Support",
      description:
        "Briefings for loved ones on the journey ahead, including emotional coping strategies.",
    },
  ],

  benefitsTitle = "Key Benefits",
  benefits = [
    "Tailored orientations for each destination with local tips",
    "Stress-reduced travel coordination with 24/7 support",
    "Proactive health and safety measures including vaccinations",
    "Financial readiness tools like currency converters",
    "Community building pre-arrival via online forums",
    "24/7 helpline activation from departure day",
    "Custom welcome packs with essentials and guides",
  ],
}: ScholarshipOffersProps) {
  return (
    <>
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left / main column */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-[#0078BD] sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>

          <div className="mt-6 rounded-2xl bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-[#0078BD]">
              {processTitle}
            </h3>
            <ul className="mt-4 space-y-4">
              {process.map((step, i) => (
                <ProcessStep key={i} text={step} />
              ))}
            </ul>
          </div>
          
          <h2 className="mt-12 text-2xl font-bold text-[#0078BD] sm:text-4xl">
          {benefitsTitle}
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <BenefitItem key={i} text={b} />
          ))}
        </ul>
        </div>

        {/* Right / sidebar column */}
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-base font-bold text-[#0078BD]">
              {featuresTitle}
            </h3>
            <div className="mt-4 space-y-5">
              {features.map((feature, i) => (
                <FeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
     </>
  );
}