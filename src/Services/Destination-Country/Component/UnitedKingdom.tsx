import Description from "../../../Pages/Description";
import Key from "../../../Pages/Key";
import Table, { type KeyInfoArray } from "../../../Pages/Table";
import UKImg from "../../../assets/UK.png";

const UK= () => {
  const keyInfos: KeyInfoArray = [
    {
      title: "Country",
      value: "United Kingdom",
    },
    {
      title: "Popular Language",
      value: "English",
    },
    {
      title: "Degree Options",
      value: "Bachelor's, Master's, PhD, Foundation",
    },
    {
      title: "Popular Programs",
      value: "Business, Law, Engineering, Medicine, Arts",
    },
    {
      title: "Main Intakes",
      value: "September, January, May",
    },
    {
      title: "English Proficiency",
      value: "IELTS 6.0-7.5 / PTE 55-79",
    },
    {
      title: "Application Deadlines",
      value: "Jan 15 (UCAS main), varies",
    },
    {
      title: "Application Fee",
      value: "GBP 20-150",
    },
    {
      title: "Average Tuition Fee",
      value: "GBP 10,000-38,000/year",
    },
    {
      title: "Scholarships",
      value: "Chevening, Commonwealth, university awards",
    },
    {
      title: "Living Costs",
      value: "GBP 10,800-16,800/year (outside London)",
    },
    {
      title: "Work Rights",
      value: "20 hours/week during term time",
    },
    {
      title: "Post-Study Work",
      value: "2 years (Graduate Route; PhD 3 years)",
    },
    {
      title: "PR Pathway",
      value: "Skilled Worker visa, points-based system",
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
              backgroundImage: `url(${UKImg})`,
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
                2 Years
              </h2>

              <p className="text-gray-600">
                Graduate Route Visa
              </p>
            </div>
          </div>
        </div>

        <div>
        {/* Heading */}
      <Description
        title="Study in United Kingdom"
        description="The UK features prestigious universities, shorter programs, and the Graduate Route for post-study work, though costs and visa rules evolve."
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
          heading="Shorter Degrees"
          title="Bachelor's 3 years, Master's 1 year"
        />

      <Key
      topic={<div className="w-2 h-2 rounded-full bg-[#0078BD]"></div>}
      heading="Graduate Route Visa"
      title="2 years post-study (PhD 3 years; potential changes)"
      />

      <Key
      topic={<div className="w-2 h-2 rounded-full bg-[#0078BD]"></div>}
      heading="Globally Recognized Degrees"
      title="High employability worldwide"
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
                September (main), January, May
              </p>
            </div>

           <div>
            <h2 className="font-medium pb-2">
              Popular Field
            </h2> 
            <p className="text-[#1F2736]">
              Business, IT, Healthcare, <br /> Engineering, Law, Finance
            </p>
           </div>

           <div className="py-5">
            <h2 className="font-medium pb-2">
              Living Cost
            </h2> 
            <p className="text-[#1F2736]">
              GBP 10,800–16,800/year outside London (maintenance ~GBP 1,171-1,529/month from Nov 2025)
            </p>
           </div>
          </div>
        </div>

      </div>

      </section>
    </>
  );
};

export default UK;