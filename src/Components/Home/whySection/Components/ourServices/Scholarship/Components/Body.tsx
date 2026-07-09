import { FaMedal, FaUsers, FaRegClock, FaCheckCircle } from "react-icons/fa";
import type { IconType } from "react-icons";
import PageHeader from "./PageHeader";

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

function StatRow({ label, value }: StatRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-3 last:border-b-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="text-sm font-bold text-[#0078BD]">{value}</span>
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
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function Body({
  heading = "About Scholarship Offers",
  description = `Since 2008, Hima Aus has helped over 10,000 students secure scholarships worth millions for studies abroad. Our expertise spans merit-based, need-based, and country-specific awards in Australia, UK, Canada, USA, New Zealand, Japan, Sweden, and Germany. We collaborate with university financial aid offices and external funders to uncover hidden opportunities, often securing partial to full tuition coverage plus living stipends. Our dedicated scholarship team reviews your profile holistically, considering not just academics but also leadership, community involvement, and unique personal stories to craft compelling applications.`,
  processTitle = "Our Process",
  process = [
    "Initial assessment of your academic, financial, and extracurricular profile with a free consultation",
    "Identification of suitable scholarships across 8+ destinations using our proprietary database",
    "Development of personalized application strategies, including timeline and priority list",
    "Preparation of compelling essays, recommendations, CVs, and supporting documents with expert editing",
    "Submission and follow-up with institutions worldwide, including mock interviews for competitive awards",
    "Negotiation and acceptance support for maximum funding, plus renewal guidance for multi-year scholarships",
  ],
  featuresTitle = "Service Features",
  features = [
    {
      icon: FaMedal,
      title: "Scholarship Matching",
      description:
        "We match you with scholarships that fit your profile, academic background, and financial needs in multiple destinations, drawing from our 16+ years of partnerships.",
    },
    {
      icon: FaUsers,
      title: "Personalized Strategy",
      description:
        "Customized application strategies to maximize funding across global programs, including essay coaching and recommendation letter reviews.",
    },
    {
      icon: FaRegClock,
      title: "Timely Applications",
      description:
        "Ensure submissions before deadlines with complete documentation for international opportunities, with deadline tracking tools.",
    },
  ],
  successTitle = "Our Success",
  stats = [
    { label: "Success Rate", value: "92%" },
    { label: "Total Funding Secured", value: "$12M+" },
    { label: "Students Helped", value: "3,000+" },
    { label: "Destinations Covered", value: "8+" },
    { label: "Average Award Value", value: "$20,000" },
    { label: "Renewal Rate", value: "85%" },
  ],
  offersTitle = "What We Offer",
  offers = [
    {
      title: "Merit-Based",
      badge: "Up to 50%",
      description:
        "High GPA (3.5+), leadership roles, academic excellence, standardized test scores",
    },
    {
      title: "Need-Based",
      badge: "Up to 100%",
      description:
        "Financial statements, family income details, personal circumstances essay, tax documents",
    },
    {
      title: "Field-Specific",
      badge: "Up to 75%",
      description:
        "Demonstrated passion and achievements in STEM, arts, business, or environmental studies; portfolio or research proposal",
    },
    {
      title: "Destination-Specific",
      badge: "Up to 60%",
      description:
        "Eligibility based on nationality, target country policies, and diversity initiatives",
    },
    {
      title: "Government-Funded",
      badge: "Up to Full Tuition + Stipend",
      description:
        "Strong academic record, intent to return home post-study, bilateral agreements",
    },
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

          <h3 className="mt-10 text-xl font-bold text-[#0078BD]">
            {offersTitle}
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {offers.map((offer, i) => (
              <OfferCard key={i} {...offer} />
            ))}
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