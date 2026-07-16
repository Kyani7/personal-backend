import { FaCheckCircle } from "react-icons/fa";
import type {
  CountryRankingProps,
  RankingProps,
} from "./types/Ranking.types";
 
/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */
 
function CountryCard({ country, universities, note }: CountryRankingProps) {
  return (
    <div className="rounded-xl border border-slate-200 p-6">
      <h3 className="text-base font-bold text-[#0078BD]">{country}</h3>
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        {universities.map((uni, i) => (
          <li key={i} className="text-sm text-slate-700">
            {uni.name}{" "}
            <span className="text-slate-500">({uni.rank})</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm italic leading-relaxed text-slate-500">
        {note}
      </p>
    </div>
  );
}
 
function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <FaCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
      <span className="text-sm leading-relaxed text-slate-700">{text}</span>
    </li>
  );
}
 
/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */
 
export default function Ranking({
  sectionTitle = "Top Institutions by Country (QS 2026 Rankings)",
  countries = [
    {
      country: "Australia",
      universities: [
        { name: "University of Melbourne", rank: "QS #19" },
        { name: "UNSW Sydney", rank: "QS #20" },
        { name: "University of Sydney", rank: "QS #25" },
        { name: "Monash University", rank: "QS #37" },
        { name: "University of Queensland", rank: "QS #40" },
      ],
      note: "World-class research, industry partnerships, and vibrant student life with strong ties to Asia-Pacific economies.",
    },
    {
      country: "UK",
      universities: [
        { name: "Imperial College London", rank: "QS #2" },
        { name: "University of Oxford", rank: "QS #4" },
        { name: "University of Cambridge", rank: "QS #6" },
        { name: "UCL", rank: "QS #9" },
        { name: "University of Edinburgh", rank: "QS #22" },
      ],
      note: "Historic excellence, interdisciplinary research, and global networks with emphasis on critical thinking and innovation.",
    },
    {
      country: "Canada",
      universities: [
        { name: "McGill University", rank: "QS #27" },
        { name: "University of Toronto", rank: "QS #29" },
        { name: "University of British Columbia", rank: "QS #40" },
        { name: "University of Alberta", rank: "QS #94" },
        { name: "McMaster University", rank: "QS #103" },
      ],
      note: "Inclusive campuses, research innovation, and post-study opportunities with multicultural diversity and work permits.",
    },
    {
      country: "USA",
      universities: [
        { name: "MIT", rank: "QS #1" },
        { name: "Stanford University", rank: "QS #3" },
        { name: "Harvard University", rank: "QS #5" },
        { name: "Caltech", rank: "QS #10" },
        { name: "UC Berkeley", rank: "QS #12" },
      ],
      note: "Entrepreneurial ecosystems, diverse programs, and elite career prospects with vast alumni networks and startup funding.",
    },
    {
      country: "New Zealand",
      universities: [
        { name: "University of Auckland", rank: "QS #65" },
        { name: "University of Otago", rank: "QS #197" },
        { name: "Victoria University of Wellington", rank: "QS #241" },
        { name: "University of Canterbury", rank: "QS #270" },
        { name: "Auckland University of Technology", rank: "QS #278" },
      ],
      note: "Sustainable education, safe environments, and residency pathways with focus on environmental sciences and indigenous studies.",
    },
    {
      country: "Japan",
      universities: [
        { name: "University of Tokyo", rank: "QS #36" },
        { name: "Kyoto University", rank: "QS #57" },
        { name: "Tokyo Institute of Technology", rank: "QS #85" },
        { name: "Osaka University", rank: "QS #91" },
        { name: "Tohoku University", rank: "QS #104" },
      ],
      note: "Technological innovation, cultural immersion, and research excellence in robotics, AI, and traditional arts.",
    },
    {
      country: "Sweden",
      universities: [
        { name: "Lund University", rank: "QS #72" },
        { name: "KTH Royal Institute of Technology", rank: "QS #78" },
        { name: "Uppsala University", rank: "QS #93" },
        { name: "Stockholm University", rank: "QS #118" },
        { name: "Karolinska Institute", rank: "QS #140" },
      ],
      note: "Sustainable innovation, English programs, and work-life balance with leadership in biotech and environmental policy.",
    },
    {
      country: "Germany",
      universities: [
        { name: "Technical University of Munich", rank: "QS #22" },
        { name: "LMU Munich", rank: "QS #58" },
        { name: "Heidelberg University", rank: "QS #80" },
        { name: "Free University of Berlin", rank: "QS #88" },
        { name: "Karlsruhe Institute of Technology", rank: "QS #98" },
      ],
      note: "Tuition-free quality, engineering leadership, and European mobility with strong emphasis on practical apprenticeships.",
    },
  ],
  benefitsTitle = "Key Benefits",
  benefits = [
    "QS/THE top-100 access across 8 countries with verified 2026 rankings",
    "Strategic matching for 95%+ success with data analytics",
    "Exclusive early-entry and scholarship routes via partnerships",
    "Comprehensive program-field alignment with career projections",
    "Global alumni and employability support including job boards",
    "Personalized cultural and academic fit assessments",
    "Free access to ranking updates and program webinars",
  ],
}: RankingProps) {
  return (
    <section className="bg-white px-4 pb-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-[#0078BD] sm:text-3xl">
          {sectionTitle}
        </h2>
 
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-1 mr-90">
          {countries.map((c, i) => (
            <CountryCard key={i} {...c} />
          ))}
        </div>
 
        <h2 className="mt-12 text-2xl font-bold text-[#0078BD] sm:text-4xl">
          {benefitsTitle}
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-1">
          {benefits.map((b, i) => (
            <BenefitItem key={i} text={b} />
          ))}
        </ul>
      </div>
    </section>
  );
}
 