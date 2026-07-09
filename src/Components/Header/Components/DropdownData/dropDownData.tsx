interface aboutLinks {
 label:String;
 href?:String;
}

interface services{
    labe:String;
    href?:String;
}

export const aboutLinks = [
  { label: "Company Profile", href: "" },
  { label: "Message from Director", href: "" },
  { label: "Our Partner", href: "" },
  { label: "Events", href: "" },
];

export const services = [
  {
    key: "visa",
    label: "Visa Service",
    href: "",
    items: [
      { label: "Student Visa", href: "" },
      { label: "Visitor/Tourist Visa", href: "" },
      { label: "Migration Visa", href: "" },
    ],
  },
  {
    key: "english",
    label: "English Test Preparation",
    href: "",
    items: [
      { label: "IELTS", href: "" },
      { label: "PTE", href: "" },
      { label: "TOFEL", href: "" },
      { label: "GRE", href: "" },
    ],
  },
  {
    key: "destination",
    label: "Destination Country",
    href: "",
    items: [
      { label: "Australia", href: "" },
      { label: "USA", href: "" },
      { label: "Canada", href: "" },
      { label: "UK", href: "" },
      { label: "New Zealand", href: "" },
      { label: "Japan", href: "" },
      { label: "Sweden", href: "" },
      { label: "Germany", href: "" },
    ],
  },
];