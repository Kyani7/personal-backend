import Description from "../../../Pages/Description";
import Key from "../../../Pages/Key";
import Table, { type KeyInfoArray } from "../../../Pages/Table";
import JapanImg from "../../../assets/Japan.png";

const Japan= () => {
  const keyInfos: KeyInfoArray = [
    {
      title: "Country",
      value: "Japan",
    },
    {
      title: "Popular Language",
      value: "Japanese (English programs available)",
    },
    {
      title: "Degree Options",
      value: "Bachelor's, Master's, PhD, Specialized Training",
    },
    {
      title: "Popular Programs",
      value: "Engineering, IT, Robotics, Business, Japanese Studies",
    },
    {
      title: "Main Intakes",
      value: "April, July, October, January",
    },
    {
      title: "English Proficiency",
      value: "IELTS 6.0-6.5 / TOEFL 80-90",
    },
    {
      title: "Application Deadlines",
      value: "6-10 months before intake",
    },
    {
      title: "Application Fee",
      value: "¥10,000-35,000",
    },
    {
      title: "Average Tuition Fee",
      value: "¥535,800-1,500,000/year (national/public lower)",
    },
    {
      title: "Scholarships",
      value: "MEXT, JASSO, university-specific",
    },
    {
      title: "Living Costs",
      value: "¥1,200,000-1,800,000/year",
    },
    {
      title: "Work Rights",
      value: "28 hours/week during studies",
    },
    {
      title: "Post-Study Work",
      value: "Designated Activities visa for job search",
    },
    {
      title: "PR Pathway",
      value: "Available after 5-10 years (faster for skilled)",
    },
  ];

  return (
    <>

      {/* Table + Image */}
      <section className="mt-8 grid grid-cols-2 gap-10 items-start px-35">

        {/* Right */}
        <div className="sticky top-8">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            style={{
              backgroundImage: `url(${JapanImg})`,
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
                28 hours
              </h2>

              <p className="text-gray-600">
                Part-Time Work Weekly
              </p>
            </div>
          </div>
        </div>

        <div>
        {/* Heading */}
      <Description
        title="Study in Japan"
        description="Japan excels in technology, innovation, and cultural immersion, with growing English-taught programs and part-time work options."
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
          heading="Technology-Focused Education"
          title="Strong in IT, Robotics, AI, Engineering"
        />

      <Key
      topic={<div className="w-2 h-2 rounded-full bg-[#0078BD]"></div>}
      heading="Safe Environment"
      title="One of the world's safest countries"
      />

      <Key
      topic={<div className="w-2 h-2 rounded-full bg-[#0078BD]"></div>}
      heading="Work Opportunities"
      title="Part-time up to 28 hours/week"
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
                April, July, October, January
              </p>
            </div>

           <div>
            <h2 className="font-medium pb-2">
              Popular Field
            </h2> 
            <p className="text-[#1F2736]">
              Engineering, IT, Robotics, Business, Japanese Studies
            </p>
           </div>

           <div className="py-5">
            <h2 className="font-medium pb-2">
              Living Cost
            </h2> 
            <p className="text-[#1F2736]">
              JPY 1,200,000–1,800,000/year (~¥100,000–150,000/month)
            </p>
           </div>
          </div>
        </div>


      </div>

      </section>
    </>
  );
};

export default Japan;