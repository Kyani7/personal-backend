import Aust from "../../../../../assets/Homee/Aust.jpg";
import Canada from "../../../../../assets/Homee/Canada.jpg";
import Germany from "../../../../../assets/Homee/Germany.jpg";
import Japan from "../../../../../assets/Homee/Japan.jpg";
import Newzealand from "../../../../../assets/Homee/NewZealand.jpg";
import Sweden from "../../../../../assets/Homee/Sweden.jpg";
import USA from "../../../../../assets/Homee/USA.avif";
import Uk from "../../../../../assets/Homee/Uk.jpg";

export type Country = {
  id: number;
  title: string;
  // Optional short version for tight spaces (hero heading, card label).
  // Falls back to `title` if not set.
  shortTitle?: string;
  subtitle: string;
  description: string;
  image: string;
};

export const countries: Country[] = [
  {
    id: 1,
    title: "USA",
    subtitle: "Study Abroad",
    description:
      "The USA is home to some of the world's most prestigious universities, offering unmatched research opportunities, diverse campus life, and flexible degree pathways across every field of study.",
    image: USA,
  },
  {
    id: 2,
    title: "Canada",
    subtitle: "Study Abroad",
    description:
      "Canada offers world-class education with globally recognized degrees. Experience multicultural campuses, affordable tuition fees, and excellent post-graduation work opportunities.",
    image: Canada,
  },
  {
    id: 3,
    title: "Australia",
    subtitle: "Study Abroad",
    description:
      "Study in Australia with top-ranked universities, vibrant student life, and a welcoming multicultural environment that blends academic rigor with an outdoor lifestyle.",
    image: Aust,
  },
  {
    id: 4,
    title: "New Zealand",
    subtitle: "Study Abroad",
    description:
      "New Zealand provides a peaceful environment with quality education, small class sizes, and stunning natural surroundings ideal for a balanced student life.",
    image: Newzealand,
  },
  {
    id: 5,
    title: "United Kingdom",
    shortTitle: "UK", // shown in hero heading + card label, matches the design
    subtitle: "Study Abroad",
    description:
      "Study at historic universities with centuries of academic excellence. The UK offers shorter degree programs, rich cultural experiences, and global recognition with degrees that open doors worldwide.",
    image: Uk,
  },
  {
    id: 6,
    title: "Germany",
    subtitle: "Study Abroad",
    description:
      "Germany is renowned for low-cost, high-quality education, particularly in engineering and technology, alongside a strong economy that supports post-study work options.",
    image: Germany,
  },
  {
    id: 7,
    title: "Japan",
    subtitle: "Study Abroad",
    description:
      "Combine ancient traditions with futuristic technology in Japan's prestigious universities, with unique teaching methods, safe living environments, and strengths in robotics and engineering.",
    image: Japan,
  },
  {
    id: 8,
    title: "Sweden",
    subtitle: "Study Abroad",
    description:
      "Sweden is home to world-leading hospitality and finance programs, set against a backdrop of exceptional quality of life and central access to the rest of Europe.",
    image: Sweden,
  },
];