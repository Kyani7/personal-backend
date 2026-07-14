

// Each entry drives one row in <FeaturesSection />.
// `image` values are placeholders — swap for real photography before launch.

export interface Feature {
  number: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  slug: string;
}

import img01 from '../../../../../assets/ExploreWhyChooseUs/01.jpg';
import img02 from '../../../../../assets/ExploreWhyChooseUs/02.jpg';
import img03 from '../../../../../assets/ExploreWhyChooseUs/03.jpg';
import img04 from '../../../../../assets/ExploreWhyChooseUs/04.jpg';
import img05 from '../../../../../assets/ExploreWhyChooseUs/05.jpg';
import img06 from '../../../../../assets/ExploreWhyChooseUs/06.jpg';
import img07 from '../../../../../assets/ExploreWhyChooseUs/07.jpg';
import img08 from '../../../../../assets/ExploreWhyChooseUs/08.jpg';
import img09 from '../../../../../assets/ExploreWhyChooseUs/09.jpg';

const features: Feature[] = [
  {
    number: '01',
    title: 'Scholarship Offers',
    slug: 'scholarship-offers',
    description:
      'Guidance on securing up to 50% scholarships, with personalized applications built to maximize every funding opportunity.',
    points: [
      'Up to 50% scholarship guidance',
      'Personalized application strategy',
      'Funding opportunity optimization',
    ],
    image: img01,
  },
  {
    number: '02',
    title: 'Genuine Counselling',
    slug: 'genuine-counselling',
    description:
      'Ethical, one-on-one advisory with no hidden fees — focused on your goals, budget, and long-term career fit.',
    points: ['One-on-one sessions', 'No hidden fees', 'Career-focused guidance'],
    image: img02,
  },
  {
    number: '03',
    title: 'Test Preparation',
    slug: 'test-preparation',
    description:
      'Prep support for IELTS, PTE, and other exams, with resources and mock sessions to boost your scores.',
    points: ['IELTS & PTE preparation', 'Mock test sessions', 'Score improvement guarantee'],
    image: img03,
  },
  {
    number: '04',
    title: 'Premium Education Institutions',
    slug: 'premium-education-institutions',
    description:
      'Partnerships with top universities like Western Sydney University, Victoria University, and more for guaranteed placements.',
    points: ['Top university partnerships', 'Guaranteed placements', 'Direct admission access'],
    image: img04,
  },
  {
    number: '05',
    title: 'Courses on Demand',
    slug: 'courses-on-demand',
    description:
      "Custom course matching for diplomas, bachelor's, and master's in fields like Nursing, IT, and Business.",
    points: ['Personalized course matching', 'Multiple degree levels', 'Industry-relevant programs'],
    image: img05,
  },
  {
    number: '06',
    title: 'Virtual Counselling',
    slug: 'virtual-counselling',
    description:
      'Flexible online sessions for global accessibility, from initial profile assessment to final offer reviews.',
    points: ['Global accessibility', 'Flexible scheduling', 'End-to-end online support'],
    image: img06,
  },
  {
    number: '07',
    title: 'Visa Application',
    slug: 'visa-application',
    description:
      'Full documentation support, including Genuine Temporary Entrant (GTE) criteria, with a 72-hour visa-ready checklist.',
    points: ['Documentation support', 'GTE criteria guidance', '72-hour checklist'],
    image: img07,
  },
  {
    number: '08',
    title: 'Pre-Departure',
    slug: 'pre-departure',
    description:
      'Cultural orientation, packing guides, and family briefings to ensure a smooth transition.',
    points: ['Cultural orientation', 'Packing guidance', 'Family briefings'],
    image: img08,
  },
  {
    number: '09',
    title: 'Airport Pickup',
    slug: 'airport-pickup',
    description:
      'A dedicated host team in Australia for seamless arrival, accommodation setup, and initial settlement.',
    points: ['Airport reception', 'Accommodation setup', 'Settlement support'],
    image: img09,
  },
];

export default features;
