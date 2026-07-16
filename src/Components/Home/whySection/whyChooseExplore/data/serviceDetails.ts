import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Users,
  Clock,
  ShieldCheck,
  GraduationCap,
  Globe2,
  PlaneTakeoff,
  Home,
  BadgeCheck,
  Video,
  BookOpenCheck,
  Building2,
} from 'lucide-react';

export interface ServiceFeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceOffering {
  title: string;
  badge: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  intro: string;
  process: string[];
  features: ServiceFeatureItem[];
  stats: ServiceStat[];
  offerings: ServiceOffering[];
}

const serviceDetails: ServiceDetail[] = [
  {
    slug: 'scholarship-offers',
    intro:
      'Our scholarship desk works alongside university financial aid offices and external funding bodies to uncover awards that genuinely match each student\u2019s profile. Rather than a one-size-fits-all list, we assess academic record, financial need, leadership, and personal story to build a shortlist worth applying for, then help turn that shortlist into funded offers.',
    process: [
      'Free initial consultation to review your academic, financial, and extracurricular profile',
      'Shortlisting suitable scholarships across our partner destinations',
      'Building a personalized application timeline and priority list',
      'Drafting essays, recommendation letters, and supporting documents with expert review',
      'Submitting applications and following up directly with institutions',
      'Negotiation support and renewal guidance for multi-year awards',
    ],
    features: [
      {
        icon: Award,
        title: 'Scholarship Matching',
        description:
          'We match you to awards that fit your academic background, financial need, and target destination.',
      },
      {
        icon: Users,
        title: 'Personalized Strategy',
        description:
          'Application strategy tailored to you, including essay coaching and reference letter reviews.',
      },
      {
        icon: Clock,
        title: 'Timely Applications',
        description: 'Deadline tracking and complete documentation so nothing is submitted late.',
      },
    ],
    stats: [
      { label: 'Success Rate', value: '90%' },
      { label: 'Total Funding Secured', value: '$10M+' },
      { label: 'Students Helped', value: '2,500+' },
      { label: 'Destinations Covered', value: '8+' },
      { label: 'Average Award Value', value: '$18,000' },
      { label: 'Renewal Rate', value: '82%' },
    ],
    offerings: [
      {
        title: 'Merit-Based',
        badge: 'Up to 50%',
        description: 'For strong GPAs, leadership roles, and standardized test scores.',
      },
      {
        title: 'Need-Based',
        badge: 'Up to 100%',
        description: 'Based on financial statements, family income, and a personal circumstances essay.',
      },
      {
        title: 'Field-Specific',
        badge: 'Up to 70%',
        description: 'For demonstrated achievement in STEM, business, arts, or environmental studies.',
      },
      {
        title: 'Destination-Specific',
        badge: 'Up to 60%',
        description: 'Eligibility depends on nationality, target country policy, and diversity initiatives.',
      },
    ],
  },
  {
    slug: 'genuine-counselling',
    intro:
      'We keep our counselling honest and student-first. Every session is one-on-one, free of hidden fees or course-selling pressure, and centred on what actually fits your budget, academic background, and long-term career goals \u2014 not a commission target.',
    process: [
      'Free discovery session to understand your goals, budget, and timeline',
      'Honest assessment of realistic course and destination options',
      'Side-by-side comparison of institutions, costs, and outcomes',
      'Clear breakdown of all fees before you commit to anything',
      'Ongoing check-ins throughout your application journey',
      'Ongoing career and pathway advice after enrolment',
    ],
    features: [
      {
        icon: ShieldCheck,
        title: 'No Hidden Fees',
        description: 'Every cost is disclosed upfront, with nothing added later in the process.',
      },
      {
        icon: Users,
        title: 'One-on-One Sessions',
        description: 'Dedicated counsellor time focused entirely on your circumstances and goals.',
      },
      {
        icon: GraduationCap,
        title: 'Career-Focused Guidance',
        description: 'Recommendations built around long-term career fit, not just enrolment.',
      },
    ],
    stats: [
      { label: 'Satisfaction Rate', value: '96%' },
      { label: 'Students Counselled', value: '5,000+' },
      { label: 'Avg. Session Length', value: '45 min' },
      { label: 'Free Consultations', value: '100%' },
      { label: 'Repeat Referrals', value: '70%' },
      { label: 'Counselling Team', value: '15+' },
    ],
    offerings: [
      {
        title: 'Course Selection',
        badge: 'Free',
        description: 'Help narrowing down programs that fit your goals and budget.',
      },
      {
        title: 'Budget Planning',
        badge: 'Included',
        description: 'A transparent breakdown of tuition, living costs, and hidden expenses.',
      },
      {
        title: 'Career Mapping',
        badge: 'Included',
        description: 'Guidance connecting your course choice to real job outcomes.',
      },
      {
        title: 'Ongoing Support',
        badge: 'Free',
        description: 'Continued advice throughout your studies, not just before enrolment.',
      },
    ],
  },
  {
    slug: 'test-preparation',
    intro:
      'Our test preparation program is built around the scores universities actually ask for. With structured study plans, timed mock sessions, and one-on-one feedback for IELTS, PTE, and other major exams, we help students close the gap between their current level and their target band.',
    process: [
      'Diagnostic test to establish your current score and target gap',
      'Personalized study plan across all four skill areas',
      'Weekly practice sessions with experienced instructors',
      'Full-length timed mock tests under exam conditions',
      'Detailed feedback and score-improvement tracking',
      'Final revision sprint before your booked exam date',
    ],
    features: [
      {
        icon: BookOpenCheck,
        title: 'IELTS & PTE Prep',
        description: 'Structured classes covering every skill section tested in the real exam.',
      },
      {
        icon: Clock,
        title: 'Mock Test Sessions',
        description: 'Timed, exam-style practice tests to build speed and confidence.',
      },
      {
        icon: Award,
        title: 'Score Improvement',
        description: 'Progress tracking with targeted coaching wherever scores are lagging.',
      },
    ],
    stats: [
      { label: 'Avg. Score Improvement', value: '1.5 Bands' },
      { label: 'Students Trained', value: '4,000+' },
      { label: 'Pass Rate', value: '94%' },
      { label: 'Mock Tests Available', value: '20+' },
      { label: 'Instructor Experience', value: '10+ yrs' },
      { label: 'Batch Size', value: 'Max 12' },
    ],
    offerings: [
      {
        title: 'IELTS Intensive',
        badge: '4 Weeks',
        description: 'Fast-track preparation for students on a tight application timeline.',
      },
      {
        title: 'PTE Fundamentals',
        badge: '6 Weeks',
        description: 'Step-by-step coaching for first-time PTE test takers.',
      },
      {
        title: 'One-on-One Coaching',
        badge: 'Flexible',
        description: 'Private sessions focused on your weakest skill areas.',
      },
      {
        title: 'Mock Test Only',
        badge: 'Drop-In',
        description: 'Book individual timed mock tests without a full course.',
      },
    ],
  },
  {
    slug: 'premium-education-institutions',
    intro:
      'Through direct partnerships with well-regarded universities, including Western Sydney University and Victoria University, we give students a faster, more reliable path to admission \u2014 with dedicated application channels and guidance built specifically for our partner institutions.',
    process: [
      'Reviewing your profile against partner university entry requirements',
      'Shortlisting institutions that best match your chosen field',
      'Preparing and checking documents against each institution\u2019s checklist',
      'Submitting through our direct partner application channel',
      'Following up with admissions teams on your behalf',
      'Supporting offer comparison and final enrolment decision',
    ],
    features: [
      {
        icon: Building2,
        title: 'Top University Partnerships',
        description: 'Direct relationships with respected institutions across multiple destinations.',
      },
      {
        icon: BadgeCheck,
        title: 'Guaranteed Placements',
        description: 'Priority consideration for students who meet partner entry criteria.',
      },
      {
        icon: GraduationCap,
        title: 'Direct Admission Access',
        description: 'Skip generic application queues through our partner channels.',
      },
    ],
    stats: [
      { label: 'Partner Institutions', value: '30+' },
      { label: 'Placement Rate', value: '95%' },
      { label: 'Students Placed', value: '3,200+' },
      { label: 'Avg. Processing Time', value: '3 Weeks' },
      { label: 'Countries Covered', value: '6' },
      { label: 'Direct Entry Programs', value: '50+' },
    ],
    offerings: [
      {
        title: 'Undergraduate Pathways',
        badge: 'Direct',
        description: 'Bachelor\u2019s degree placement through partner university channels.',
      },
      {
        title: 'Postgraduate Pathways',
        badge: 'Direct',
        description: 'Master\u2019s and postgraduate diploma placement support.',
      },
      {
        title: 'Foundation Programs',
        badge: 'Available',
        description: 'Bridging options for students who don\u2019t yet meet direct entry criteria.',
      },
      {
        title: 'Credit Transfer',
        badge: 'Case-by-Case',
        description: 'Support for students transferring existing credit into a partner program.',
      },
    ],
  },
  {
    slug: 'courses-on-demand',
    intro:
      'Not every student wants the same handful of popular courses. We help match students to diplomas, bachelor\u2019s, and master\u2019s programs across in-demand fields like nursing, IT, and business, based on genuine interest and career direction rather than what\u2019s easiest to sell.',
    process: [
      'Interest and aptitude discussion to identify suitable fields',
      'Matching your background against relevant course levels',
      'Comparing programs across multiple institutions and destinations',
      'Reviewing entry requirements and prerequisite gaps',
      'Assisting with course-specific application documents',
      'Confirming enrolment and orientation details',
    ],
    features: [
      {
        icon: BookOpenCheck,
        title: 'Personalized Matching',
        description: 'Course recommendations based on your interests, not sales targets.',
      },
      {
        icon: GraduationCap,
        title: 'Multiple Degree Levels',
        description: 'Diploma, bachelor\u2019s, and master\u2019s options across our partner network.',
      },
      {
        icon: Award,
        title: 'Industry-Relevant Programs',
        description: 'A focus on fields with strong graduate employment outcomes.',
      },
    ],
    stats: [
      { label: 'Course Options', value: '500+' },
      { label: 'Fields Covered', value: '25+' },
      { label: 'Students Matched', value: '4,500+' },
      { label: 'Partner Institutions', value: '40+' },
      { label: 'Graduate Employment', value: '88%' },
      { label: 'Avg. Matching Time', value: '1 Week' },
    ],
    offerings: [
      {
        title: 'Diploma Programs',
        badge: '1-2 Yrs',
        description: 'Practical, career-focused diplomas across popular industries.',
      },
      {
        title: "Bachelor's Degrees",
        badge: '3-4 Yrs',
        description: 'Full undergraduate degrees across nursing, IT, business, and more.',
      },
      {
        title: "Master's Degrees",
        badge: '1-2 Yrs',
        description: 'Postgraduate programs for career advancement or specialization.',
      },
      {
        title: 'Vocational Courses',
        badge: 'Flexible',
        description: 'Shorter, skills-based training for fast entry into the workforce.',
      },
    ],
  },
  {
    slug: 'virtual-counselling',
    intro:
      'For students who can\u2019t easily visit our office, our virtual counselling program delivers the same guidance online \u2014 from the first profile assessment through to final offer review \u2014 on a schedule that works around your time zone.',
    process: [
      'Booking a virtual consultation slot that fits your time zone',
      'Online profile assessment and goal-setting session',
      'Document collection and review over secure digital channels',
      'Live video sessions for application strategy and Q&A',
      'Digital tracking of application status and next steps',
      'Final offer review conducted entirely online',
    ],
    features: [
      {
        icon: Globe2,
        title: 'Global Accessibility',
        description: 'Full counselling support available from anywhere in the world.',
      },
      {
        icon: Clock,
        title: 'Flexible Scheduling',
        description: 'Sessions booked around your time zone and availability.',
      },
      {
        icon: Video,
        title: 'End-to-End Online Support',
        description: 'From first consultation to final offer, entirely over video and chat.',
      },
    ],
    stats: [
      { label: 'Countries Served', value: '20+' },
      { label: 'Virtual Sessions Held', value: '6,000+' },
      { label: 'Avg. Response Time', value: '< 24 hrs' },
      { label: 'Satisfaction Rate', value: '93%' },
      { label: 'Available Time Slots', value: '7 Days' },
      { label: 'Languages Supported', value: '4' },
    ],
    offerings: [
      {
        title: 'Video Consultation',
        badge: 'Free',
        description: 'A first session to assess your profile and outline your options.',
      },
      {
        title: 'Document Review',
        badge: 'Online',
        description: 'Secure upload and review of transcripts, essays, and forms.',
      },
      {
        title: 'Application Tracking',
        badge: 'Live',
        description: 'A dashboard-style update on where each application stands.',
      },
      {
        title: 'Offer Review Call',
        badge: 'Free',
        description: 'A final video session to compare offers before you decide.',
      },
    ],
  },
  {
    slug: 'visa-application',
    intro:
      'Visa refusals are almost always about documentation and clarity, not eligibility. We build a complete file around Genuine Temporary Entrant (GTE) requirements and give every student a clear, time-bound checklist so nothing is missed before submission.',
    process: [
      'Reviewing your profile against current visa requirements',
      'Building your Genuine Temporary Entrant (GTE) statement',
      'Compiling financial, academic, and health documentation',
      'Running your file through our 72-hour visa-ready checklist',
      'Final review and lodgement of your visa application',
      'Follow-up support until a decision is issued',
    ],
    features: [
      {
        icon: ShieldCheck,
        title: 'Documentation Support',
        description: 'A complete, checked file so nothing is missing at submission.',
      },
      {
        icon: BadgeCheck,
        title: 'GTE Criteria Guidance',
        description: 'Help articulating a genuine, well-supported study intent.',
      },
      {
        icon: Clock,
        title: '72-Hour Checklist',
        description: 'A structured countdown to get your file visa-ready fast.',
      },
    ],
    stats: [
      { label: 'Visa Approval Rate', value: '96%' },
      { label: 'Applications Processed', value: '5,500+' },
      { label: 'Avg. Prep Time', value: '72 hrs' },
      { label: 'Countries Covered', value: '8+' },
      { label: 'Refusal Appeal Support', value: 'Included' },
      { label: 'Document Checklist Items', value: '30+' },
    ],
    offerings: [
      {
        title: 'Student Visa',
        badge: 'Full Support',
        description: 'End-to-end preparation and lodgement for study visas.',
      },
      {
        title: 'Dependent Visa',
        badge: 'Add-On',
        description: 'Support for accompanying spouses or children where eligible.',
      },
      {
        title: 'GTE Statement Writing',
        badge: 'Included',
        description: 'Guided drafting of a strong, honest genuine-intent statement.',
      },
      {
        title: 'Refusal Review',
        badge: 'Case-by-Case',
        description: 'Guidance for students reapplying after a previous refusal.',
      },
    ],
  },
  {
    slug: 'pre-departure',
    intro:
      'The weeks before you fly matter as much as the application itself. Our pre-departure sessions cover cultural orientation, practical packing guidance, and family briefings so students and their families feel prepared, not anxious, about the move.',
    process: [
      'Booking your pre-departure orientation session',
      'Cultural and lifestyle briefing for your destination',
      'Practical packing and essentials checklist',
      'Accommodation and banking setup guidance',
      'Family briefing to address parents\u2019 questions and concerns',
      'Final travel and arrival-day checklist',
    ],
    features: [
      {
        icon: Globe2,
        title: 'Cultural Orientation',
        description: 'A practical introduction to daily life, customs, and expectations abroad.',
      },
      {
        icon: BookOpenCheck,
        title: 'Packing Guidance',
        description: 'A checklist tailored to your destination\u2019s climate and regulations.',
      },
      {
        icon: Users,
        title: 'Family Briefings',
        description: 'A dedicated session to answer questions from parents and family.',
      },
    ],
    stats: [
      { label: 'Students Briefed', value: '3,800+' },
      { label: 'Orientation Sessions', value: '150+' },
      { label: 'Family Satisfaction', value: '95%' },
      { label: 'Checklist Items Covered', value: '25+' },
      { label: 'Destinations Covered', value: '8+' },
      { label: 'Avg. Session Length', value: '90 min' },
    ],
    offerings: [
      {
        title: 'Orientation Session',
        badge: 'Group',
        description: 'A group briefing covering culture, essentials, and expectations.',
      },
      {
        title: 'Packing Checklist',
        badge: 'Included',
        description: 'A destination-specific list of what to bring and what to leave.',
      },
      {
        title: 'Family Q&A',
        badge: 'Free',
        description: 'A dedicated session for parents to ask questions directly.',
      },
      {
        title: 'Banking & SIM Setup',
        badge: 'Guided',
        description: 'Step-by-step help getting set up before or right after arrival.',
      },
    ],
  },
  {
    slug: 'airport-pickup',
    intro:
      'Arriving in a new country is easier with someone waiting for you. Our host team meets students at the airport, helps with initial accommodation setup, and stays on hand through the first days of settlement.',
    process: [
      'Confirming your flight details and arrival time in advance',
      'Airport reception by a dedicated host team member',
      'Transport arranged from the airport to your accommodation',
      'Help settling into your room or homestay on arrival day',
      'Orientation to nearby essentials \u2014 shops, transport, campus',
      'Check-in support through your first week of settlement',
    ],
    features: [
      {
        icon: PlaneTakeoff,
        title: 'Airport Reception',
        description: 'A host team member meets you as soon as you land.',
      },
      {
        icon: Home,
        title: 'Accommodation Setup',
        description: 'Help getting settled into student housing or a homestay.',
      },
      {
        icon: Users,
        title: 'Settlement Support',
        description: 'Guidance through your first days in a new city.',
      },
    ],
    stats: [
      { label: 'Students Welcomed', value: '2,900+' },
      { label: 'On-Time Pickup Rate', value: '99%' },
      { label: 'Cities Covered', value: '10+' },
      { label: 'First-Week Check-Ins', value: '3' },
      { label: 'Satisfaction Rate', value: '97%' },
      { label: 'Available', value: '7 Days' },
    ],
    offerings: [
      {
        title: 'Standard Pickup',
        badge: 'Included',
        description: 'Airport reception and transport to your accommodation.',
      },
      {
        title: 'Accommodation Setup',
        badge: 'Guided',
        description: 'Help moving in and settling on your arrival day.',
      },
      {
        title: 'City Orientation',
        badge: 'Free',
        description: 'A walkthrough of transport, shops, and campus essentials.',
      },
      {
        title: 'First-Week Check-In',
        badge: 'Included',
        description: 'Follow-up contact to make sure your first week goes smoothly.',
      },
    ],
  },
];

export default serviceDetails;
