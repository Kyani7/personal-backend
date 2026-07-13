import Description from "../../../pages/Description";
import Key from "../../../pages/Key";
import Table, { type KeyInfoArray } from "../../../pages/Table";
import USAImg from "../../../assets/USA.png";

const USA = () => {
  const keyInfos: KeyInfoArray = [
    {
      title: "Country",
      value: "USA",
    },
    {
      title: "Popular Language",
      value: "English",
    },
    {
      title: "Degree Options",
      value: "Bachelor's, Master's, PhD, Associate",
    },
    {
      title: "Popular Programs",
      value: "Computer Science, Engineering, Business, Medicine, Law",
    },
    {
      title: "Main Intakes",
      value: "Fall (Aug/Sep), Spring (Jan), Summer (May)",
    },
    {
      title: "English Proficiency",
      value: "TOEFL 80-100 / IELTS 6.5-7.5",
    },
    {
      title: "Application Deadlines",
      value: "Nov-Jan (Fall), Aug-Oct (Spring)",
    },
    {
      title: "Application Fee",
      value: "USD 50–150",
    },
    {
      title: "Average Tuition Fee",
      value: "USD 20,000-55,000/year (public lower, private higher))",
    },
    {
      title: "Scholarships",
      value: "Fulbright, university merit/need-based",
    },
    {
      title: "Living Costs",
      value: "USD 12,000-25,000/year",
    },
    {
      title: "Work Rights",
      value: "20 hours/week on-campus during studies",
    },
    {
      title: "Post-Study Work",
      value: "12 months OPT (up to 36 months for STEM)",
    },
    {
      title: "PR Pathway",
      value: "H-1B visa lottery, employment-based green card",
    },
  ];

  return (
    <>

      {/* Table + Image */}
      <section id="usa" className="mt-8 grid grid-cols-2 gap-10 items-start px-35">

        {/* Right */}
        <div className="sticky top-70">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            style={{
              backgroundImage: `url(${USAImg})`,
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
                1–3 Years
              </h2>

              <p className="text-gray-600">
                OPT (STEM extension)
              </p>
            </div>
          </div>
        </div>

        <div>
        {/* Heading */}
      <Description
        title="Study in USA"
        description="The USA hosts the world's leading universities with innovative programs, research opportunities, and strong career networks, though costs are higher."
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
          heading="Top-Ranked Universities"
          title="Many Ivy League and global leaders"
        />

      <Key
      heading="STEM OPT Extension"
      title="Up to 3 years post-study work for STEM fields"
      />

      <Key
      heading="Career Exposure"
      title="Internships, CPT, on-campus jobs"
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
                Fall (Aug/Sep), Spring (Jan), <br /> Summer (May)
              </p>
            </div>

           <div>
            <h2 className="font-medium pb-2">
              Popular Field
            </h2> 
            <p className="text-[#1F2736]">
              Computer Science, Engineering, Business, Data Science, AI
            </p>
           </div>

           <div className="py-5">
            <h2 className="font-medium pb-2">
              Living Cost
            </h2> 
            <p className="text-[#1F2736]">
              USD 12,000–25,000/year <br /> (varies by city/state)
            </p>
           </div>
          </div>
        </div>

      </div>

      </section>
    </>
  );
};

export default USA;