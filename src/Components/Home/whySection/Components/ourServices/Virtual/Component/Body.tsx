import type { IconType } from "react-icons";
import { LuCircleCheckBig, LuClock10, LuGlobe } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

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
  heading = "About Virtual Counselling",
  description = `Through secure platforms, Hima Aus delivers virtual counselling to students globally since 2008—covering applications, visas, and strategies for Australia, UK, Canada, USA, New Zealand, Japan, Sweden, and Germany with the same personalized touch that has served 10,000+ clients. Sessions are recorded for review, and we provide follow-up summaries with action items. Our tech-enabled approach includes interactive dashboards for tracking progress and accessing resources anytime.`,
  processTitle = "Our Process",
  process = [
    "Easy online appointment scheduling via app or website",
    "Secure video platform connection with end-to-end encryption",
    "Interactive profile review and Q&A with real-time polls",
    "Real-time document collaboration using shared whiteboards",
    "Actionable strategy and resource sharing with downloadable kits",
    "Follow-up sessions and progress checks at no extra cost",
  ],
  featuresTitle = "Service Features",
  features = [
    {
      icon: LuGlobe,
      title: "Worldwide Access",
      description:
        "Expert advice from anywhere for multi-country options, using secure Zoom integrations.",
    },
    {
      icon: LuClock10,
      title: "Flexible Booking",
      description:
        "24/7 availability across time zones for busy schedules, with instant confirmations.",
    },
    {
      icon: FiUsers,
      title: "Premium Quality",
      description:
        "Same in-depth service as face-to-face consultations, with screen-sharing capabilities.",
    },
  ],
  successTitle = "Our Success",
  stats = [
    { label: "Satisfaction Score", value: "97%" },
    { label: "Global Reach", value: "50+ countries" },
    { label: "Availability", value: "24/7 booking" },
    { label: "Sessions Delivered", value: "20,000+" },
    { label: "Follow-up Engagement", value: "88%" },
    { label: "Conversion to Enrollments", value: "75%" },
  ],
  benefitsTitle = "Key Benefits",
  benefits = [
    "Borderless access to 14-branch expertise without travel",
    "Time-zone friendly scheduling with AI matching",
    "Privacy-focused secure sessions compliant with GDPR",
    "Interactive tools for engagement like polls and quizzes",
    "Digital materials and recordings for self-paced review",
    "Cost-effective alternative to travel with group options",
    "Integration with our client portal for seamless updates",
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