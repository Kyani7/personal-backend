import Description from "../../VisaServices-DestinationCountry/Description";
import Key from "../../VisaServices-DestinationCountry/Key";
import Table, {
  type KeyInfoArray,
} from "../../VisaServices-DestinationCountry/Table";
import canadaImg from "../../../../assets/Canada.png";

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
    <section className="mt-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-35">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div className="min-w-0">

          <Description
            title="Study in Canada"
            description="Canada offers high-quality education, welcoming policies, affordable options compared to neighbors, and strong PR pathways via Express Entry."
          />

          {/* Table */}
          <div className="mt-6 overflow-x-auto">
            <Table keyInfos={keyInfos} />
          </div>

          {/* Key Advantages */}
          <div className="mt-6">
            <h1 className="py-5 font-bold text-[#0078BD] text-2xl sm:text-3xl lg:text-4xl">
              Key Advantages
            </h1>

            <div className="space-y-4">
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
          </div>

          {/* Additional Details */}
          <div className="border border-gray-200 shadow-md rounded-xl bg-[#F9FAFB] p-5 mt-6">
            <h1 className="py-2 font-bold text-lg">
              Additional Details
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

              {/* Intake */}
              <div>
                <h2 className="font-medium pb-2">
                  Intake
                </h2>

                <p className="text-[#1F2736] text-sm leading-6">
                  January, May, September
                </p>
              </div>

              {/* Popular Field */}
              <div>
                <h2 className="font-medium pb-2">
                  Popular Field
                </h2>

                <p className="text-[#1F2736] text-sm leading-6">
                  IT, Business, Healthcare, Engineering, Data & AI
                </p>
              </div>

              {/* Living Cost */}
              <div>
                <h2 className="font-medium pb-2">
                  Living Cost
                </h2>

                <p className="text-[#1F2736] text-sm leading-6">
                  CAD 20,000–25,000/year (visa min. CAD 22,895 from Sep 2025)
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:sticky lg:top-24">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl h-[280px] sm:h-[350px] lg:h-[410px]"
            style={{
              backgroundImage: `url(${canadaImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Bottom Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white rounded-xl px-5 sm:px-6 py-4 shadow-lg">
              <h2 className="text-lg font-bold text-gray-900">
                Up to 3 Years
              </h2>

              <p className="text-gray-600 text-sm">
                Post-Study Work Visa
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Canada;