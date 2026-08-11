import Description from "../../VisaServices-DestinationCountry/Description";
import Key from "../../VisaServices-DestinationCountry/Key";
import Table, {type KeyInfoArray,
} from "../../VisaServices-DestinationCountry/Table";
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
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start px-4 sm:px-8 lg:px-20 xl:px-35">

        {/* LEFT - Content */}
        <div className="min-w-0">

          <Description
            title="Study in Sweden"
            description="Sweden provides high-quality education, innovative learning environments, strong research opportunities, and pathways to career development."
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

              <div className="sm:py-5">
                <h2 className="font-medium pb-2">
                  Living Cost
                </h2>

                <p className="text-[#1F2736]">
                  SEK 120,000–144,000/year
                  (~SEK 10,000–12,000/month)
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT - Image */}
        <div className="lg:sticky lg:top-24">

          <div
            className="relative overflow-hidden rounded-2xl shadow-xl h-[280px] sm:h-[350px] lg:h-[410px]"
            style={{
              backgroundImage: `url(${SwedenImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Bottom Card */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg">

              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Unlimited
              </h2>

              <p className="text-sm sm:text-base text-gray-600">
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