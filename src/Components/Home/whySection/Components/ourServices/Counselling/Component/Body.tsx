import type { IconType } from "react-icons";
import { LuCircleCheckBig, LuTarget } from "react-icons/lu";
import { FiShield } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";

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
      <span className="text-sm leading-relaxed text-slate-700">{text}</span>
    </li>
  );
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-[#0078BD]" />
      <div>
        <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}


function BenefitItem({ text }:  RankingProps) {
  return (
    <li className="flex items-start gap-3">
      <LuCircleCheckBig className="mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
      <span className="text-sm leading-relaxed text-slate-700">{text}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function Body({
  heading = "About Genuine Counselling",
  description = `With 14 branches across 6 countries since 2008, Hima Aus provides unbiased, student-first counselling to navigate study options in Australia, UK, Canada, USA, New Zealand, Japan, Sweden, and Germany—empowering over 10,000 students with informed decisions for lifelong success. Our certified counselors, with average 10+ years of experience, use data-driven tools to match your profile to programs that align with market demands and personal growth. We emphasize holistic development, integrating mental health resources and cultural adaptation workshops to ensure a smooth transition from application to graduation.`,
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
      icon: FiShield,
      title: "Transparent & Ethical",
      description:
        "No hidden fees; honest advice prioritizing your goals across global destinations, backed by our no-commission policy.",
    },
    {
      icon: IoMdHeartEmpty,
      title: "Student-Centric",
      description:
        "Tailored to your budget, aspirations, and preferences in 8+ countries, with family involvement options.",
    },
    {
      icon: LuTarget,
      title: "Goal-Oriented",
      description:
        "Clear roadmaps for education and career in international settings, including post-study work and migration paths.",
    },
  ],

  benefitsTitle = "Key Benefits",
  benefits = [
    "15,000+ courses across 8 countries with real-time availability",
    "Career-outcome projections and employability data from QS surveys",
    "Cost vs. value optimization including scholarship overlays",
    "Industry trend integration with guest expert sessions",
    "Visa and funding compatibility checks pre-selection",
    "Seamless transition to application phase with document templates",
    "Post-selection support like course previews and peer chats",
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