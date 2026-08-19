import { FaMedal, FaUsers, FaRegClock, FaCheckCircle } from "react-icons/fa";
import type { IconType } from "react-icons";

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

interface StatRowProps {
  label: string;
  value: string;
}

interface OfferCardProps {
  title: string;
  badge: string;
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
  offersTitle?: string;
  offers?: OfferCardProps[];
}

/* ------------------------------------------------------------------ */
/*  Sub-components (all driven by typed props)                        */
/* ------------------------------------------------------------------ */

function ProcessStep({ text }: ProcessStepProps) {
  return (
    <li className="flex items-start gap-3">
      <FaCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
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

function StatRow({ label, value }: StatRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-3 last:border-b-0">
      <span className="text-slate-600">{label}</span>
      <span className="font-bold text-[#0078BD]">{value}</span>
    </div>
  );
}

function OfferCard({ title, badge, description }: OfferCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h4 className="text-base font-bold text-[#0078BD]">{title}</h4>
        <span className="whitespace-nowrap rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
      </div>
      <p className="leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function Body({
  heading = "About Best Education Institutions",
  description = `Hima Aus, trusted since 2008 with 14 branches worldwide, connects students to premier institutions in Australia, UK, Canada, USA, New Zealand, Japan, Sweden, and Germany—delivering transformative education to over 10,000 graduates through rigorous quality and innovation standards. Our selection process prioritizes QS 2026-ranked universities excelling in employability, sustainability, and international outlook, ensuring your degree opens doors globally. We provide insider access to admissions trends, program comparisons, and virtual tours to help you visualize your future on these campuses.`,
  processTitle = "Our Process",
  process = [
    "Detailed profile and aspiration analysis with psychometric assessments",
    "Ranking-based matching with global institutions using QS 2026 data",
    "Customized application and portfolio development with AI tools",
    "Admissions collaboration and advocacy through partner channels",
    "Visa integration and pre-arrival preparation with checklists",
    "ustained academic and professional mentoring post-enrollment",
  ],
  featuresTitle = "Service Features",
  features = [
    {
      icon: FaMedal,
      title: "World-Ranked Institutions",
      description:
        "Partnerships with QS and THE top universities across 8 countries, updated for 2026 rankings.",
    },
    {
      icon: FaUsers,
      title: "Diverse Destinations",
      description:
        "Tailored options in Australia, UK, Canada, USA, New Zealand, Japan, Sweden, and Germany with cultural insights.",
    },
    {
      icon: FaRegClock,
      title: "Proven Excellence",
      description:
        "High employability and research-focused institutions for career advancement, with 95% placement rates.",
    },
  ],
  successTitle = "Our Success",
  stats = [
    { label: "Institutions Partnered", value: "120+" },
    { label: "Placement Success", value: "95%" },
    { label: "Rankings Span", value: "Top 300 Globally" },
    { label: "Students Served", value: "10,000+" },
    { label: "Employability Rate", value: "93%" },
    { label: "Diversity Index", value: "85 Countries" },
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

          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-2xl font-bold text-[#0078BD]">
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