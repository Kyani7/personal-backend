import Description from "../../VisaServices-DestinationCountry/Description";
import Key from "../../VisaServices-DestinationCountry/Key";
import Table, {
  type KeyInfoArray,
} from "../../VisaServices-DestinationCountry/Table";
import australiaImg from "../../../../assets/Australia.png";

const Australia = () => {
  const keyInfos: KeyInfoArray = [
    {
      title: "Country",
      value: "Australia",
    },
    {
      title: "Popular Language",
      value: "English",
    },
    {
      title: "Degree Options",
      value: "Bachelor's, Master's, PhD, Vocational",
    },
    {
      title: "Popular Programs",
      value: "Business, IT, Engineering, Healthcare, Hospitality",
    },
    {
      title: "Main Intakes",
      value: "February, July, November",
    },
    {
      title: "English Proficiency",
      value: "IELTS 6.0–7.0 overall / PTE 50–65",
    },
    {
      title: "Application Deadlines",
      value: "4–8 months before intake",
    },
    {
      title: "Application Fee",
      value: "AUD 50–150",
    },
    {
      title: "Average Tuition Fee",
      value:
        "AUD 20,000-45,000/year (undergrad ~AUD 20k-40k, postgrad up to AUD 45k+)",
    },
    {
      title: "Scholarships",
      value: "Australia Awards, university merit-based",
    },
    {
      title: "Living Costs",
      value: "AUD 24,000–36,000/year",
    },
    {
      title: "Work Rights",
      value: "48 hours/fortnight during studies",
    },
    {
      title: "Post-Study Work",
      value: "2-6 years (Temporary Graduate Visa Subclass 485)",
    },
    {
      title: "PR Pathway",
      value:
        "Skilled migration, points-tested visas, state nomination",
    },
  ];

  return (
    <section
      id="australia"
      className="
        mt-8
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-8
        lg:gap-10
        items-start
        px-4
        sm:px-8
        lg:px-20
        xl:px-35
      "
    >
      {/* LEFT CONTENT */}
      <div className="min-w-0">
        <Description
          title="Study in Australia"
          description="Australia remains a top choice for international students with world-class universities, practical learning, strong job markets, and clear pathways to post-study work and permanent residency."
        />

        {/* Information Table */}
        <div className="mt-6 w-full overflow-x-auto">
          <Table keyInfos={keyInfos} />
        </div>

        {/* Key Advantages */}
        <div className="mt-8">
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
          <h1 className="font-bold text-lg sm:text-xl mb-5">
            Additional Details
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Intake */}
            <div>
              <h2 className="font-medium pb-2">Intake</h2>
              <p className="text-[#1F2736] leading-6">
                February (main), July (secondary), November (limited)
              </p>
            </div>

            {/* Scholarship */}
            <div>
              <h2 className="font-medium pb-2">Scholarship</h2>
              <p className="text-[#1F2736] leading-6">
                Australia Awards, Destination Australia, university-specific
              </p>
            </div>

            {/* Living Cost */}
            <div className="sm:col-span-2">
              <h2 className="font-medium pb-2">Living Cost</h2>
              <p className="text-[#1F2736] leading-6">
                AUD 24,000–36,000/year (visa minimum ~AUD 29,710 for 2025/26)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="lg:sticky lg:top-24 w-full">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            shadow-xl
            w-full
            h-72
            sm:h-96
            lg:h-[410px]
          "
          style={{
            backgroundImage: `url(${australiaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Bottom Card */}
          <div
            className="
              absolute
              bottom-4
              left-4
              right-4
              sm:left-6
              sm:right-auto
              bg-white
              rounded-xl
              px-5
              sm:pr-10
              py-4
              shadow-lg
            "
          >
            <h2 className="text-lg font-bold text-gray-900">
              2–6 Years
            </h2>

            <p className="text-gray-600 text-sm sm:text-base">
              Post-Study Work Visa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Australia;