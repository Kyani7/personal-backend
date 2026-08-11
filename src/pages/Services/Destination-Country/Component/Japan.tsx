import Description from "../../VisaServices-DestinationCountry/Description";
import Key from "../../VisaServices-DestinationCountry/Key";
import Table, {
  type KeyInfoArray,
} from "../../VisaServices-DestinationCountry/Table";
import JapanImg from "../../../../assets/Japan.png";

const Japan = () => {
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
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start px-4 sm:px-8 lg:px-20 xl:px-35">

        {/* Image */}
        <div className="lg:sticky lg:top-24">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl h-[280px] sm:h-[350px] lg:h-[410px]"
            style={{
              backgroundImage: `url(${JapanImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Bottom Card */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                28 hours
              </h2>

              <p className="text-sm sm:text-base text-gray-600">
                Part-Time Work Weekly
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0">

          {/* Heading */}
          <Description
            title="Study in Japan"
            description="Japan excels in technology, innovation, and cultural immersion, with growing English-taught programs and part-time work options."
          />

          {/* Table */}
          <div className="mt-5 overflow-x-auto">
            <Table keyInfos={keyInfos} />
          </div>

          {/* Key Advantages */}
          <div>
            <h1 className="py-5 font-bold text-[#0078BD] text-2xl sm:text-3xl lg:text-4xl">
              Key Advantages
            </h1>

            <Key
              heading="Technology-Focused Education"
              title="Strong in IT, Robotics, AI, Engineering"
            />

            <Key
              heading="Safe Environment"
              title="One of the world's safest countries"
            />

            <Key
              heading="Work Opportunities"
              title="Part-time up to 28 hours/week"
            />
          </div>

          {/* Additional Details */}
          <div className="border border-gray-200 shadow-md rounded-xl bg-[#F9FAFB] p-4 sm:p-5 mt-5">
            <h1 className="py-3 sm:py-5 font-bold text-lg sm:text-xl">
              Additional Details
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

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

              <div className="sm:py-5">
                <h2 className="font-medium pb-2">
                  Living Cost
                </h2>

                <p className="text-[#1F2736]">
                  JPY 1,200,000–1,800,000/year
                  (~¥100,000–150,000/month)
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