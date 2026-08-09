import Description from "../../VisaServices-DestinationCountry/Description";
import Key from "../../VisaServices-DestinationCountry/Key";
import Table, { type KeyInfoArray } from "../../VisaServices-DestinationCountry/Table";
import SwedenImg from "../../../../assets/Sweden.png";

const Sweden = () => {
  const keyInfos: KeyInfoArray = [
    {
      title: "Country",
      value: "Sweden",
    },
    {
      title: "Popular Language",
      value: "Swedish (many programs in English)",
    },
    {
      title: "Degree Options",
      value: "Bachelor's, Master's, PhD",
    },
    {
      title: "Popular Programs",
      value: "Technology, Engineering, Business, Sustainability",
    },
    {
      title: "Main Intakes",
      value: "Autumn (Aug/Sep), Spring (Jan)",
    },
    {
      title: "English Proficiency",
      value: "IELTS 6.5-7.0 / TOEFL 90-100",
    },
    {
      title: "Application Deadlines",
      value: "Jan 15 (Autumn), Aug 15 (Spring)",
    },
    {
      title: "Application Fee",
      value: "SEK 900",
    },
    {
      title: "Average Tuition Fee",
      value: "SEK 80,000-140,000/year (non-EU/EEA)",
    },
    {
      title: "Scholarships",
      value: "Swedish Institute, university-specific",
    },
    {
      title: "Living Costs",
      value: "SEK 120,000-144,000/year",
    },
    {
      title: "Work Rights",
      value: "No limit during studies",
    },
    {
      title: "Post-Study Work",
      value: "12 months residence permit to seek employment",
    },
    {
      title: "PR Pathway",
      value: "After qualifying residence periods",
    },
  ];

  return (
    <>

      {/* Table + Image */}
      <section className="mt-8 grid grid-cols-2 gap-10 items-start px-35">
      <div>
        {/* Heading */}
      <Description
        title="Study in Sweden"
        description="New Zealand provides safe, high-quality education with strong post-study work options and pathways to residency in a welcoming environment."
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
          heading="High-Quality & English-Taught"
          title="Innovative programs, research excellence"
        />

      <Key
      heading="Career Opportunities"
      title="Unlimited part-time work, industry links"
      />

      <Key
      heading="Pathway to PR"
      title="Residence permit extensions possible"
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
                Autumn (Aug/Sep), Spring (Jan)
              </p>
            </div>

           <div>
            <h2 className="font-medium pb-2">
              Popular Field
            </h2> 
            <p className="text-[#1F2736]">
              Technology, Engineering, Business, Sustainability
            </p>
           </div>

           <div className="py-5">
            <h2 className="font-medium pb-2">
              Living Cost
            </h2> 
            <p className="text-[#1F2736]">
              SEK 120,000–144,000/year (~SEK 10,000–12,000/month)
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
              backgroundImage: `url(${SwedenImg})`,
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
                Unlimited 
              </h2>

              <p className="text-gray-600">
                Part-Time Work Hours
              </p>
            </div>
          </div>

        </div>

      </section>
    </>
  );
};

export default Sweden;