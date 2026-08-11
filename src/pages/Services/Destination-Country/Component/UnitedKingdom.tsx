import Description from "../../VisaServices-DestinationCountry/Description";
import Key from "../../VisaServices-DestinationCountry/Key";
import Table, {
  type KeyInfoArray,
} from "../../VisaServices-DestinationCountry/Table";
import UKImg from "../../../../assets/UK.png";

const UK = () => {
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
    <section
      className="
        mt-8
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-8
        lg:gap-10
        items-start
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-35
        mb-10
        lg:mb-30
      "
    >
      {/* IMAGE */}
      <div className="order-1 lg:order-1 lg:sticky lg:top-24">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            shadow-xl
            h-64
            sm:h-80
            lg:h-[410px]
            w-full
          "
          style={{
            backgroundImage: `url(${UKImg})`,
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
              sm:bottom-6
              left-4
              sm:left-6
              bg-white
              rounded-xl
              px-5
              sm:px-6
              py-3
              sm:py-4
              shadow-lg
            "
          >
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              2 Years
            </h2>

            <p className="text-sm sm:text-base text-gray-600">
              Graduate Route Visa
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="order-2 lg:order-2 min-w-0">
        {/* Heading */}
        <Description
          title="Study in United Kingdom"
          description="The UK features prestigious universities, shorter programs, and the Graduate Route for post-study work, though costs and visa rules evolve."
        />

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <Table keyInfos={keyInfos} />
        </div>

        {/* Key Advantages */}
        <div>
          <h1
            className="
              py-5
              font-bold
              text-[#0078BD]
              text-2xl
              sm:text-3xl
              lg:text-4xl
            "
          >
            Key Advantages
          </h1>

          <Key
            heading="Shorter Degrees"
            title="Bachelor's 3 years, Master's 1 year"
          />

          <Key
            heading="Graduate Route Visa"
            title="2 years post-study (PhD 3 years; potential changes)"
          />

          <Key
            heading="Globally Recognized Degrees"
            title="High employability worldwide"
          />
        </div>

        {/* Additional Details */}
        <div
          className="
            border
            border-gray-200
            shadow-md
            rounded-xl
            bg-[#F9FAFB]
            p-4
            sm:p-5
            mt-5
          "
        >
          <h1 className="pb-5 font-bold text-lg sm:text-xl">
            Additional Details
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Intake */}
            <div>
              <h2 className="font-medium pb-2">
                Intake
              </h2>

              <p className="text-[#1F2736]">
                September (main), January, May
              </p>
            </div>

            {/* Popular Field */}
            <div>
              <h2 className="font-medium pb-2">
                Popular Field
              </h2>

              <p className="text-[#1F2736]">
                Business, IT, Healthcare,
                Engineering, Law, Finance
              </p>
            </div>

            {/* Living Cost */}
            <div className="sm:col-span-2">
              <h2 className="font-medium pb-2">
                Living Cost
              </h2>

              <p className="text-[#1F2736]">
                GBP 10,800–16,800/year outside London
                (maintenance ~GBP 1,171-1,529/month from Nov 2025)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UK;