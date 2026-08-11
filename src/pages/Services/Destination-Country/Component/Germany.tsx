import Description from "../../VisaServices-DestinationCountry/Description";
import Key from "../../VisaServices-DestinationCountry/Key";
import Table, {
  type KeyInfoArray,
} from "../../VisaServices-DestinationCountry/Table";
import GermanyImg from "../../../../assets/Germany.png";

const Germany = () => {
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
      value:
        "€0-500/semester admin (public); private €5,000-20,000/year",
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
    <section className="mt-8 mb-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-35">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

        {/* ================= IMAGE ================= */}
        <div className="w-full lg:sticky lg:top-24">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl h-[280px] sm:h-[350px] lg:h-[410px]"
            style={{
              backgroundImage: `url(${GermanyImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Bottom Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white rounded-xl px-5 sm:px-6 py-4 shadow-lg">
              <h2 className="text-lg font-bold text-gray-900">
                20 hours
              </h2>

              <p className="text-gray-600 text-sm">
                Work Per Week
              </p>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="min-w-0">

          {/* Description */}
          <Description
            title="Study in Germany"
            description="Germany provides tuition-free or low-cost public education, strong engineering/science programs, and an 18-month job seeker visa post-study."
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
                  Winter (Oct), Summer (Apr)
                </p>
              </div>

              {/* Popular Field */}
              <div>
                <h2 className="font-medium pb-2">
                  Popular Field
                </h2>

                <p className="text-[#1F2736] text-sm leading-6">
                  Engineering, Computer Science, Natural Sciences, Business
                </p>
              </div>

              {/* Living Cost */}
              <div>
                <h2 className="font-medium pb-2">
                  Living Cost
                </h2>

                <p className="text-[#1F2736] text-sm leading-6">
                  €10,000–14,400/year (€850–1,200/month; blocked account
                  €11,904/year from 2025)
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Germany;