import type { KeyInfoArray } from "../../../Pages/Table";
import Table from "../../../Pages/Table";

const Australia = () => {
    const keyInfos: KeyInfoArray= [
  {
    title: "Country",
    value: "Australia",
  },
  {
    title: "Popular Language",
    value: "English",
  },
  {
    title: "Degree Options",
    value: "Bachelor's, Master's, PhD, Vocational",
  },
  {
    title: "Popular Programs",
    value: "Business, IT, Engineering, Healthcare, Hospitality",
  },
  {
    title: "Main Intakes",
    value: "February, July, November",
  },
  {
    title: "English Proficiency",
    value: "IELTS 6.0–7.0 overall / PTE 50–65",
  },
  {
    title: "Application Deadlines",
    value: "4–8 months before intake",
  },
  {
    title: "Application Fee",
    value: "AUD 50–150",
  },
  {
    title: "Average Tuition Fee",
    value: "AUD 20,000-45,000/year (undergrad ~AUD 20k-40k, postgrad up to AUD 45k+)"
  },
  {
    title: "Scholarships",
    value: "Australia Awards, university merit-based",
  },
  {
    title: "Living Costs",
    value: "AUD 24,000-36,000/year",
  },
  {
    title: "Work Rights",
    value: "48 hours/fortnight during studies",
  },
  {
    title: "Post-Study Work",
    value: "2-6 years (Temporary Graduate Visa Subclass 485)",
  },
  {
    title: "PR Pathway",
    value: "Skilled migration, points-tested visas, state nomination",
  },
];
  return (
    <>
        <Table keyInfos={keyInfos}/></>
  )
}

export default Australia