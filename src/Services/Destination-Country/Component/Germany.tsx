import Description from "../../../Pages/Description";
import Key from "../../../Pages/Key";
import Table, { type KeyInfoArray } from "../../../Pages/Table";
import GermanyImg from "../../../assets/Germany.png";

const Germany= () => {
  const keyInfos: KeyInfoArray = [
    {
      title: "Country",
      value: "Germany",
    },
    {
      title: "Popular Language",
      value: "German (English programs available)",
    },
    {
      title: "Degree Options",
      value: "Bachelor's, Master's, PhD",
    },
    {
      title: "Popular Programs",
      value: "Engineering, Computer Science, Business, Natural Sciences",
    },
    {
      title: "Main Intakes",
      value: "Winter (Oct), Summer (Apr)",
    },
    {
      title: "English Proficiency",
      value: "IELTS 6.5-7.0 / TOEFL 80-95",
    },
    {
      title: "Application Deadlines",
      value: "July 15 (Winter), Jan 15 (Summer)",
    },
    {
      title: "Application Fee",
      value: "€75 (visa)",
    },
    {
      title: "Average Tuition Fee",
      value: "€0-500/semester admin (public); private €5,000-20,000/year",
    },
    {
      title: "Scholarships",
      value: "DAAD, Deutschlandstipendium",
    },
    {
      title: "Living Costs",
      value: "€10,000-14,400/year",
    },
    {
      title: "Work Rights",
      value: "120 full/240 half days per year (~20 hours/week)",
    },
    {
      title: "Post-Study Work",
      value: "18 months job seeker visa",
    },
    {
      title: "PR Pathway",
      value: "EU Blue Card, residence after 21-33 months skilled work",
    },
  ];

  return (
    <>

      {/* Table + Image */}
      <section className="mt-8 grid grid-cols-2 gap-10 items-start px-35 mb-30">

        {/* Right */}
        <div className="sticky top-70">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            style={{
              backgroundImage: `url(${GermanyImg})`,
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
                20 hours
              </h2>

              <p className="text-gray-600">
                Work Per Week
              </p>
            </div>
          </div>
        </div>

        <div>
        {/* Heading */}
      <Description
        title="Study in Germany"
        description="Germany provides tuition-free or low-cost public education, strong engineering/science programs, and an 18-month job seeker visa post-study."
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
          heading="Affordable / Free Tuition"
          title="Public universities mostly free (admin fees only)"
        />

      <Key
      heading="High-Quality Education"
      title="Research-focused, globally ranked"
      />

      <Key
      heading="Career Opportunities"
      title="Strong economy, 18-month job search visa"
      />

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
                Winter (Oct), Summer (Apr)
              </p>
            </div>

           <div>
            <h2 className="font-medium pb-2">
              Popular Field
            </h2> 
            <p className="text-[#1F2736]">
              Engineering, Computer Science, Natural Sciences, Business
            </p>
           </div>

           <div className="py-5">
            <h2 className="font-medium pb-2">
              Living Cost
            </h2> 
            <p className="text-[#1F2736]">
              €10,000–14,400/year (€850–1,200/month; blocked account €11,904/year from 2025)
            </p>
           </div>
          </div>
        </div>


        </div>
      </div>

      </section>
    </>
  );
};

export default Germany;