import Description from "../../../Pages/Description";
import Key from "../../../Pages/Key";
import Table, { type KeyInfoArray } from "../../../Pages/Table";
import canadaImg from "../../../assets/Canada.png";

const Canada = () => {
  const keyInfos: KeyInfoArray = [
    {
      title: "Country",
      value: "Canada",
    },
    {
      title: "Popular Language",
      value: "English & French",
    },
    {
      title: "Degree Options",
      value: "Undergraduate, Postgraduate, PhD, Diplomas",
    },
    {
      title: "Popular Programs",
      value: "IT, Business, Healthcare, Engineering, Data Science",
    },
    {
      title: "Main Intakes",
      value: "January, May, September",
    },
    {
      title: "English Proficiency",
      value: "IELTS 6.0-7.0 / TOEFL 80-100",
    },
    {
      title: "Application Deadlines",
      value: "6-12 months before intake",
    },
    {
      title: "Application Fee",
      value: "CAD 100-250",
    },
    {
      title: "Average Tuition Fee",
      value: "CAD 15,000-35,000/year",
    },
    {
      title: "Scholarships",
      value: "Merit-based, need-based, provincial",
    },
    {
      title: "Living Costs",
      value: "CAD 20,000-25,000/year",
    },
    {
      title: "Work Rights",
      value: "20 hours/week during studies",
    },
    {
      title: "Post-Study Work",
      value: "Up to 3 years (PGWP)",
    },
    {
      title: "PR Pathway",
      value: "Express Entry, Provincial Nominee Programs",
    },
  ];

  return (
    <>

      {/* Table + Image */}
      <section className="mt-8 grid grid-cols-2 gap-10 items-start px-35">
      <div>
        {/* Heading */}
      <Description
        title="Study in Canada"
        description="Canada offers high-quality education, welcoming policies, affordable options compared to neighbors, and strong PR pathways via Express Entry."
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
          topic={<div className="w-2 h-2 rounded-full bg-[#0078BD]"></div>}
          heading="Top Universities"
          title="Multiple universities in global top 100 (QS 2025)"
        />

      <Key
      topic={<div className="w-2 h-2 rounded-full bg-[#0078BD]"></div>}
      heading="Popular Fields"
      title="Business, IT, Engineering, Healthcare, Hospitality"
      />

      <Key
      topic={<div className="w-2 h-2 rounded-full bg-[#0078BD]"></div>}
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
                January, May, September
              </p>
            </div>

           <div>
            <h2 className="font-medium pb-2">
              Popular Field
            </h2> 
            <p className="text-[#1F2736]">
              IT, Business, Healthcare, Engineering, Data & AI
            </p>
           </div>

           <div className="py-5">
            <h2 className="font-medium pb-2">
              Living Cost
            </h2> 
            <p className="text-[#1F2736]">
              CAD 20,000–25,000/year (visa min. CAD 22,895 from Sep 2025)
            </p>
           </div>
          </div>
        </div>

      </div>

        {/* Right */}
        <div className="sticky top-8">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            style={{
              backgroundImage: `url(${canadaImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "410px",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Bottom Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl pl-6 pr-10 py-4 shadow-lg">
              <h2 className="text-l font-bold text-gray-900">
                Up to 3 Years
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

export default Canada;