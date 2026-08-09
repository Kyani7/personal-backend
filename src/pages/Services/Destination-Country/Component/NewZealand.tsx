import Description from "../../VisaServices-DestinationCountry/Description";
import Key from "../../VisaServices-DestinationCountry/Key";
import Table, { type KeyInfoArray } from "../../VisaServices-DestinationCountry/Table";
import NewZerlandImg from "../../../../assets/NewZealand.png";

const NewZealand = () => {
  const keyInfos: KeyInfoArray = [
    {
      title: "Country",
      value: "New Zealand",
    },
    {
      title: "Popular Language",
      value: "English",
    },
    {
      title: "Degree Options",
      value: "Bachelor's, Master's, PhD, Diplomas",
    },
    {
      title: "Popular Programs",
      value: "IT, Business, Healthcare, Engineering, Tourism",
    },
    {
      title: "Main Intakes",
      value: "February, July",
    },
    {
      title: "English Proficiency",
      value: "IELTS 6.0-6.5 / PTE 50-58",
    },
    {
      title: "Application Deadlines",
      value: "3-6 months before intake",
    },
    {
      title: "Application Fee",
      value: "NZD 50-150",
    },
    {
      title: "Average Tuition Fee",
      value: "NZD 22,000-35,000/year",
    },
    {
      title: "Scholarships",
      value: "New Zealand Scholarships, university awards",
    },
    {
      title: "Living Costs",
      value: "NZD 20,000-27,000/year",
    },
    {
      title: "Work Rights",
      value: "20 hours/week during studies",
    },
    {
      title: "Post-Study Work",
      value: "1-3 years depending on qualification",
    },
    {
      title: "PR Pathway",
      value: "Skilled Migrant Category, Work to Residence",
    },
  ];

  return (
    <>

      {/* Table + Image */}
      <section className="mt-8 grid grid-cols-2 gap-10 items-start px-35">
      <div>
        {/* Heading */}
      <Description
        title="Study in New Zealand"
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
          heading="High-Quality Education"
          title="Globally recognized qualifications"
        />

      <Key
      heading="Post-Study Work Visa"
      title="Up to 3 years depending on level"
      />

      <Key
      heading="PR Pathways"
      title="Skilled Migrant Category, Work to Residence"
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
                February & July (main)
              </p>
            </div>

           <div>
            <h2 className="font-medium pb-2">
              Popular Field
            </h2> 
            <p className="text-[#1F2736]">
              IT, Business, Healthcare, <br /> Engineering, Tourism
            </p>
           </div>

           <div className="py-5">
            <h2 className="font-medium pb-2">
              Living Cost
            </h2> 
            <p className="text-[#1F2736]">
              NZD 20,000–27,000/year (visa min. NZD 20,000)
            </p>
           </div>
          </div>
        </div>


        </div>
      </div>

        {/* Right */}
        <div className="sticky top-70">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            style={{
              backgroundImage: `url(${NewZerlandImg})`,
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
                Up to 3 Yearsz
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

export default NewZealand;