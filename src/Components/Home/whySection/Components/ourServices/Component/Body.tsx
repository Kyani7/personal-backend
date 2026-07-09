import type { IconType } from "react-icons";
import { LuCircleCheckBig, LuUsers} from "react-icons/lu";
import { FiShield} from "react-icons/fi";
import { BsFillHouseDoorFill } from "react-icons/bs";

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
  successTitle?: string;
  stats?: StatRowProps[];
}

interface StatRowProps {
  label: string;
  value: string;
}

interface RankingProps {
  benefitsTitle: string;
  benefits: string[];
}

/* ------------------------------------------------------------------ */
/*  Sub-components (all driven by typed props)                        */
/* ------------------------------------------------------------------ */

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
        <h4 className="text-l font-bold text-slate-900">{title}</h4>
        <p className="mt-1  leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function StatRow({ label, value }: StatRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-3 last:border-b-0">
      <span className=" text-slate-600">{label}</span>
      <span className=" font-bold text-[#0078BD]">{value}</span>
    </div>
  );
}


function BenefitItem({ text }:  RankingProps) {
  return (
    <li className="flex items-start gap-3">
      <LuCircleCheckBig className="mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
      <span className=" leading-relaxed text-slate-700">{text}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function Body({
  heading = "About Airport Pickup",
  description = `Our signature airport service, core to Hima Aus since 2008, ensures seamless arrivals in Australia and coordinated support in UK, Canada, USA, New Zealand, Japan, Sweden, and Germany—helping 10,000+ students settle swiftly and focus on studies. Partners with local taxis, hotels, and universities provide a safety net from the moment you land. We track flights in real-time and adjust for delays, offering refreshments and orientation chats during transit.`,
  processTitle = "Our Process",
  process = [
    "Visa checklist and eligibility screening with risk assessments",
    "GTE/statement of purpose crafting with narrative coaching",
    "Financial and academic document verification by certified notaries",
    "Form completion and submission with e-filing",
    "Real-time tracking and updates via app notifications",
    "Interview coaching and appeals support with simulation videos",
  ],
  featuresTitle = "Service Features",
  features = [
    {
      icon: BsFillHouseDoorFill,
      title: "Housing Assistance",
      description:
        "Temporary to permanent accommodation setup with virtual viewings.",
    },
    {
      icon: LuUsers,
      title: "Personal Escort",
      description:
        "Dedicated local team from airport to campus, multilingual.",
    },
    {
      icon: FiShield,
      title: "Essentials Setup",
      description:
        "Banking, SIM, and local services activation on-site.",
    },
  ],
  successTitle = "Our Success",
  stats = [
    { label: "Satisfaction Rating", value: "98%" },
    { label: "Cities Served", value: "20+" },
    { label: "Arrivals Handled", value: "7,000+" },
    { label: "Support Window", value: "First 7 days" },
    { label: "On-Time Pickup Rate", value: "99%" },
    { label: "Repeat for Family", value: "65%" },
  ],
  benefitsTitle = "Key Benefits",
  benefits = [
    "97% approval rate across destinations with track record",
    "48-72 hour document readiness for urgent cases",
    "Specialized GTE and SOP expertise tailored to officers",
    "Multi-language support for non-English documents",
    "End-to-end tracking dashboard with status alerts",
    "Post-approval compliance guidance and extension help",
    "Free policy update seminars for clients",
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
          <p className="mt-4 leading-relaxed text-slate-600 sm:text-base">
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
          
          <h2 className="mt-12 text-2xl font-bold text-[#0078BD] sm:text-3xl">
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
            <h3 className="text-xl font-bold text-[#0078BD]">
              {featuresTitle}
            </h3>
            <div className="mt-4 space-y-5">
              {features.map((feature, i) => (
                <FeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-base font-bold text-[#0078BD]">
              {successTitle}
            </h3>
            <div className="mt-2">
              {stats.map((stat, i) => (
                <StatRow key={i} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
     </>
  );
}