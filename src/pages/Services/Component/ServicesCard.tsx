import Card from "../VisaServices-DestinationCountry/Card";
import div1 from "../../../assets/div1.webp";
import div2 from "../../../assets/div2.webp";
import div3 from "../../../assets/div3.webp";
import div4 from "../../../assets/div4.webp";
import div5 from "../../../assets/div5.webp";
import div6 from "../../../assets/div6.webp";

const ServicesCard = () => {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6">

      <Card
        image={div1}
        title="Genuine Counselling"
        badge="98% Satisfaction"
        description="Personalized guidance and expert advice for your study abroad journey."
        points={[
          "Personalized Career Assessment",
          "University Shortlisting",
          "Course Selection Guidance",
        ]}
      />

      <Card
        image={div2}
        title="Job Placements"
        badge="85% Placement"
        description="Post-study work opportunities and internship placements abroad."
        points={[
          "Industry Partnerships",
          "Resume Building",
          "Interview Preparation",
        ]}
      />

      <Card
        image={div3}
        title="Pre-departure Training"
        badge="100% Prepared"
        description="Comprehensive training to prepare you for life abroad."
        points={[
          "Cultural Orientation",
          "Academic Preparation",
          "Survival Language Skills",
        ]}
      />

      <Card
        image={div4}
        title="Student Visa Application"
        badge="95% Success"
        description="End-to-end visa assistance with high success rates."
        points={[
          "Document Verification",
          "Application Filing",
          "Interview Coaching",
        ]}
      />

      <Card
        image={div5}
        title="Interview Preparation"
        badge="92% Success"
        description="Master university and visa interviews with expert coaching."
        points={[
          "Mock Interview Sessions",
          "Body Language Training",
          "Question Bank Access",
        ]}
      />

      <Card
        image={div6}
        title="Airport Pickup & Settlement"
        badge="100% Support"
        description="Seamless transition from airport to accommodation abroad."
        points={[
          "24/7 Airport Pickup",
          "Temporary Accommodation",
          "Local SIM & Banking",
        ]}
      />

    </section>
  )
}

export default ServicesCard;
