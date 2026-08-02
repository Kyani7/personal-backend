import Description from "../../../Pages/Description";
import Key from "../../../Pages/Key";
import Table, { type KeyInfoArray } from "../../../Pages/Table";
import australiaImg from "../../../assets/Australia.png";

const Australia = () => {
  const keyInfos: KeyInfoArray = [
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
      value: "AUD 20,000-45,000/year (undergrad ~AUD 20k-40k, postgrad up to AUD 45k+)",
    },
    {
      title: "Scholarships",
      value: "Australia Awards, university merit-based",
    },
    {
      title: "Living Costs",
      value: "AUD 24,000–36,000/year",
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

      {/* Table + Image */}
      <section id="australia" className="mt-8 grid grid-cols-2 gap-10 items-start px-35">
      <div>
        {/* Heading */}
      <Description
        title="Study in Australia"
        description="Australia remains a top choice for international students with world-class universities, practical learning, strong job markets, and clear pathways to post-study work and permanent residency."
      />
        {/* Left */}
      <div>
        <Table keyInfos={keyInfos} />
        </div>
        <div>
          <h1 className="py-5 font-bold text-[#0078BD] text-4xl">
            Key Advantages
          </h1>

      <Key
          heading="Top Universities"
          title="Multiple universities in global top 100 (QS 2025)"
        />

      <Key
      heading="Popular Fields"
      title="Business, IT, Engineering, Healthcare, Hospitality"
      />

      <Key
      heading="Work Opportunities"
      title="Unlimited part-time work (48 hours/fortnight from mid-2023 policy)"
      />
        </div>

        <div className="border border-gray-200 shadow-md rounded-xl bg-[#F9FAFB] pl-5 mt-5">
          <h1 className="py-5 font-bold">
            Additional Details
          </h1>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="font-medium pb-2">
                Intake
              </h2>
              <p className="text-[#1F2736]">
                February (main), July <br /> (secondary), November (limited)
              </p>
            </div>

           <div>
            <h2 className="font-medium pb-2">
              Scholership
            </h2> 
            <p className="text-[#1F2736]">
              Australia Awards, Destination Australia, university-specific
            </p>
           </div>

           <div className="py-5">
            <h2 className="font-medium pb-2">
              Living Cost
            </h2> 
            <p className="text-[#1F2736]">
              AUD 24,000–36,000/year (visa minimum ~AUD 29,710 for <br /> 2025/26)
            </p>
           </div>
          </div>
        </div>
      </div>

        {/* Right */}
        <div className="sticky top-70">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            style={{
              backgroundImage: `url(${australiaImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "410px",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
a
            {/* Bottom Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl pl-6 pr-10 py-4 shadow-lg">
              <h2 className="text-l font-bold text-gray-900">
                2–6 Years
              </h2>

              <p className="text-gray-600">
                Post-Study Work Visa
              </p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Australia;