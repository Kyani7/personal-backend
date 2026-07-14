export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

import arpanGautam from '../../../../../assets/ExploreWhyChooseUs/arpanGautam.jpg';
import yubarajGautam from '../../../../../assets/ExploreWhyChooseUs/yubarajGautam.jpg';
import sunilThapa from '../../../../../assets/ExploreWhyChooseUs/sunilThapa.jpg';
import mojtabaKhalili from '../../../../../assets/ExploreWhyChooseUs/MojtabaKhalili.jpg';
import seemaPandey from '../../../../../assets/ExploreWhyChooseUs/seemaPandey.jpg';
import sadhanaBasnet from '../../../../../assets/ExploreWhyChooseUs/sadhanaBasnet.jpg';
import nishaPrajapati from '../../../../../assets/ExploreWhyChooseUs/nishaPrajapati.jpg';
import satishPahari from '../../../../../assets/ExploreWhyChooseUs/satishpPahari.jpg';
import shankarUprety from '../../../../../assets/ExploreWhyChooseUs/shankarUprety.jpg';
import bikkiGurung from '../../../../../assets/ExploreWhyChooseUs/bikkiGurung.jpg';
import agnisikhaGurung from '../../../../../assets/ExploreWhyChooseUs/agnisikhaGurung.jpg';
import nishma from '../../../../../assets/ExploreWhyChooseUs/nishma.jpg';
import sushmitaBaral from '../../../../../assets/ExploreWhyChooseUs/sushmitaBaral.jpg';
import nirajHirachan from '../../../../../assets/ExploreWhyChooseUs/nirajHirachan.jpg';


const testimonials: Testimonial[] = [
  {
    name: 'Arpan Gautam',
    role: 'Southern Cross University, Sydney (Bachelor of Accounting)',
    avatar: arpanGautam,
    quote:
      'Moving abroad for the first time felt overwhelming, but the team walked me through every step. Their honesty and follow-through made the whole process feel manageable.',
  },
  {
    name: 'Yubaraj Gautam',
    role: "MPA, King's Own Institute",
    avatar: yubarajGautam,
    quote:
      'I was genuinely impressed by how well-prepared the counsellors were. They knew my paperwork better than I did, met me at the airport, and even helped me find housing.',
  },
  {
    name: 'Sunil Thapa',
    role: 'Master of IT, CSU Melbourne',
    avatar: sunilThapa,
    quote:
      'Every part of the service felt personal, from the very first consultation to settling into my new home. I always felt supported, never just another file on a desk.',
  },
  {
    name: 'Mojtaba Khalili',
    role: 'Master of Engineering, Curtin University',
    avatar: mojtabaKhalili,
    quote:
      'My visa file had a few complicated gaps because of my background, but the team knew exactly how to document everything properly. It was approved without a single query back from the department.',
  },
  {
    name: 'Seema Pandey',
    role: 'Bachelor of Nursing, Victoria University',
    avatar: seemaPandey,
    quote:
      'The scholarship guidance alone saved my family a huge amount of money. I would not have known where to start without their step-by-step support.',
  },
  {
    name: 'Sadhana Basnet',
    role: 'Bachelor of Business, Deakin University',
    avatar: sadhanaBasnet,
    quote:
      'I compared three consultancies before choosing them. They were the only ones upfront about total costs from day one, with nothing hidden or added later.',
  },
  {
    name: 'Nisha Prajapati',
    role: 'Master of Public Health, University of Melbourne',
    avatar: nishaPrajapati,
    quote:
      "Working full-time meant I could only do calls in the evening. Virtual counselling here never once felt like an afterthought just because I wasn't coming into the office.",
  },
  {
    name: 'Satish Pahari',
    role: 'Diploma in Hospitality Management, William Angliss Institute',
    avatar: satishPahari,
    quote:
      'Someone was waiting for me at arrivals with a sign, and helped me get straight to my homestay. First-day nerves gone within an hour of landing.',
  },
  {
    name: 'Shankar Uprety',
    role: 'Master of Information Technology, RMIT',
    avatar: shankarUprety,
    quote:
      'PTE prep here is structured properly, not just practice tests on repeat. I understood why I was losing marks, not just where, and my score jumped within a month.',
  },
  {
    name: 'Bikki Gurung',
    role: 'Bachelor of Accounting, University of Newcastle',
    avatar: bikkiGurung,
    quote:
      'Pre-departure orientation genuinely calmed my parents down. They had answers for every question my mother asked, even the small ones about winter clothing.',
  },
  {
    name: 'Agnisikha Gurung',
    role: 'Bachelor of Early Childhood Education, Griffith University',
    avatar: agnisikhaGurung,
    quote:
      "They matched me to a course I hadn't even considered at first, closer to what I actually wanted to do. Looking back, it was exactly the right call for my career.",
  },
  {
    name: 'Nishma',
    role: 'Bachelor of Psychology, University of Wollongong',
    avatar: nishma,
    quote:
      'I switched from another agent halfway through my application. This team picked up my file, fixed the gaps, and still managed to hit the intake deadline.',
  },

  {
    name: 'Sushmita Baral',
    role: 'Bachelor of Nursing (Western Sydney University)',
    avatar: sushmitaBaral,
    quote: 'I am thankful to Hima Aus who made my Nursing career possible. I called few other agencies but all of them were saying there were not any seats available; while Hima Aus only gave me a hope and helped me to study nursing in Sydney.',
  },

  {
    name: 'Niraj Hirachan',
    role: 'Master of Finance, University of Sydney',
    avatar: nirajHirachan,
    quote:
      "The scholarship team found an award I didn't even know existed for my exact program. It ended up covering nearly half of my first-year tuition.",
  },

];

export default testimonials;