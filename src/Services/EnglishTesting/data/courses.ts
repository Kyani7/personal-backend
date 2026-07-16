import type { CourseData } from "../utils/types";

import ieltsImg from "../../../assets/EnglishTesting/IELTS.webp";
import pteImg from "../../../assets/EnglishTesting/PTE.webp";
import toeflImg from "../../../assets/EnglishTesting/TOEFL.webp";
import greImg from "../../../assets/EnglishTesting/GRE.webp";

export const ieltsData: CourseData = {
  id: "ielts",
  path: "/ielts",
  order: 1,
  label: "IELTS",
  tagline: "IELTS PREPARATION",
  heading: "Master the IELTS Exam with Expert Guidance",
  description:
    "Achieve your target band score with our comprehensive, results-driven IELTS preparation program",
  subheading: "Your Pathway to Global Education & Migration Success",
  intro:
    "Our specialised IELTS preparation program is meticulously designed to help you achieve the high band scores required for university admissions, professional registration, and visa applications worldwide. With a proven track record of student success across 50+ countries, we provide the strategic advantage needed to excel in all four test components.",
  intro2:
    "Our curriculum blends expert instruction, authentic practice materials, and personalised feedback across both the Academic and General Training modules, so you know exactly what to expect on test day and how to approach every question type with confidence.",
  intro3:
    "We provide end-to-end support throughout your IELTS journey, including post-course assistance with university applications, SOP reviews, and visa documentation. Our structured curriculum and British Council-aligned practice materials ensure you're fully prepared to achieve the band score that opens doors to global education and career opportunities.",
  features: [
    {
      title: "Listening Mastery",
      desc: "Focused practice with authentic IELTS audio materials and accent-variety training across all four sections to sharpen comprehension.",
    },
    {
      title: "Reading Strategies",
      desc: "Skimming, scanning, and comprehension techniques tailored for both Academic and General Training reading passages.",
    },
    {
      title: "Writing Task 1 & 2",
      desc: "Examiner-style coaching on coherence, cohesion, lexical resource, and grammatical accuracy for reports, letters, and essays.",
    },
    {
      title: "Speaking Confidence",
      desc: "One-on-one mock interviews with expert tutors to build fluency, pronunciation, and natural, confident delivery.",
    },
  ],
  advantageTitle: "Why IELTS?",
  advantage: [
    {
      title: "Structured Learning Framework",
      desc: "Systematic curriculum covering all four modules with progressive difficulty levels and targeted skill development.",
    },
    {
      title: "Expert Examiner Insights",
      desc: "Learn from certified IELTS trainers who understand exact assessment criteria and common pitfalls to avoid.",
    },
    {
      title: "Collaborative Learning Community",
      desc: "Peer speaking practice sessions, study groups, and interactive workshops to build confidence and fluency.",
    },
  ],
  quickFacts: [
    "Test Duration: 2 hours 45 minutes",
    "Score Range: Band 1–9 (in 0.5 increments)",
    "Formats: Academic & General Training, Paper or Computer-delivered",
    "Validity: Scores valid for 2 years",
    "Accepted by: 11,000+ organisations in 140+ countries",
  ],

  image: ieltsImg,

  imageCaption:
    "Join thousands of successful students who've achieved their IELTS targets for study, work, and migration",
  ctaHeading: "Ready to Get Started?",
  ctaText:
    "Contact us today for a free consultation and take the first step towards your educational goals.",
};

export const pteData: CourseData = {
  id: "pte",
  path: "/pte",
  order: 2,
  label: "PTE",
  wideImage: true,
  tagline: "PTE PREPARATION",
  heading: "Expert PTE Coaching: Your Score, Our Mission",
  description:
    "Achieve your target PTE score and secure admission to your dream university with our proven preparation strategies",
  subheading: "Following the Success Pathway to PTE Excellence",
  intro:
    "We provide expert PTE coaching for students aspiring to study abroad through our specialised program. Our Pearson Test of English preparation offers comprehensive, computer-based training covering all four skills with strategies specifically designed for Pearson's unique AI-scoring system.",
  intro2:
    "Our PTE curriculum focuses on real-world English application through intensive practice materials, mock tests, and strategic coaching that helps students achieve the scores required for study, migration, or professional purposes. From basic trial sessions to comprehensive packages with score guarantees, we tailor our approach to your specific goals.",
  intro3:
    "We provide end-to-end support throughout your PTE journey, including post-course assistance with university applications and visa processes. Our structured curriculum, authentic Pearson-aligned practice materials, and personalised coaching ensure you're fully prepared to score the high band that opens doors to global education and career opportunities.",
  features: [
    {
      title: "Comprehensive Skills Training",
      desc: "Targeted lessons covering all PTE modules: Reading (multiple-choice, re-order paragraphs), Writing (essays, summaries), Listening (highlight correct summary, fill in blanks), and Speaking (read aloud, describe image).",
    },
    {
      title: "Format & Task Mastery",
      desc: "In-depth analysis of all 20 PTE question types with strategic approaches for each, from 'Read Aloud' to 'Write from Dictation', ensuring complete test familiarity.",
    },
    {
      title: "Intensive Practice & Simulation",
      desc: "Full-length mock tests using Pearson's official scoring algorithms, detailed performance analytics, and personalised feedback to track progress across all skill areas.",
    },
    {
      title: "Time Management Techniques",
      desc: "Strategic pacing methods for each section, helping you complete all tasks within strict time limits while maintaining accuracy and quality.",
    },
  ],
  advantageTitle: "PTE Advantage",
  advantage: [
    {
      title: "Fast Results",
      desc: "Official scores typically available within 48 hours, with 365-day test availability.",
    },
    {
      title: "Global Recognition",
      desc: "Accepted by 3,000+ institutions worldwide including universities, governments, and professional bodies.",
    },
    {
      title: "Integrated Skills",
      desc: "Combined skill tasks test real English ability as used in academic and professional settings.",
    },
  ],
  quickFacts: [
    "Test Duration: Approximately 2 hours (single-session exam)",
    "Score Range: 10–90 points (overall and communicative skills)",
    "AI-Based Scoring: Fully computer-based, unbiased automated evaluation",
    "Validity: Scores valid for 2 years",
    "Accepted by: 3,000+ universities and governments worldwide",
  ],

  image: pteImg,

  imageCaption:
    "Join thousands of successful students who've achieved their PTE targets for study, work, and migration",
  ctaHeading: "Ready to Get Started?",
  ctaText:
    "Contact us today for a free consultation and take the first step towards your educational goals.",
};

export const toeflData: CourseData = {
  id: "toefl",
  path: "/toefl",
  order: 3,
  label: "TOEFL",
  tagline: "TOEFL PREPARATION",
  heading: "Master the TOEFL iBT for Global Academic Success",
  description:
    "Achieve your target TOEFL score and unlock admissions at universities worldwide",
  subheading: "Your Pathway to International University Admissions",
  intro:
    "Our comprehensive TOEFL preparation program is designed to help you master all four sections of the TOEFL iBT. We provide expert guidance through certified mentors who understand the specific requirements of English proficiency for academic success. Our approach begins with understanding the test format, taking diagnostic practice tests to identify strengths and weaknesses, and creating a focused study plan tailored to your individual needs.",
  intro2:
    "The TOEFL iBT assesses your ability to use and understand English at the university level. Our proven methodology combines targeted skill development with test-taking strategies specifically designed for the integrated format. We help you master essential academic skills like note-taking, using templates for Speaking and Writing tasks, building academic vocabulary, and developing the fluency and accuracy required for top scores.",
  intro3:
    "With 40+ certified experts from around the world, we provide personalised mentorship to help you achieve your target score and gain admission to your dream university. Our end-to-end support continues even after course completion, including guidance on university applications, visa processes, and academic transition support.",
  features: [
    {
      title: "Expert TOEFL Mentorship",
      desc: "Learn from 40+ ETS-certified TOEFL experts with proven success guiding students to top universities in the US, UK, Canada, Australia, and beyond.",
    },
    {
      title: "Official ETS Practice Materials",
      desc: "Access authentic TOEFL iBT practice tests, speaking and writing rubrics, and simulated exam environments that mirror the actual test experience.",
    },
    {
      title: "Personalised Study Roadmap",
      desc: "Receive a customised study plan based on diagnostic tests, targeting your specific weak areas across Reading, Listening, Speaking, and Writing.",
    },
    {
      title: "Integrated Skills Development",
      desc: "Comprehensive curriculum focusing on academic skills like note-taking, summarising, synthesising information, and managing time under test conditions.",
    },
    {
      title: "Speaking & Writing Templates",
      desc: "Master ETS-approved templates and strategies for Independent and Integrated Speaking tasks, as well as the Academic Discussion writing task.",
    },
  ],
  advantageTitle: "Why TOEFL iBT?",
  advantage: [
    {
      title: "Global Acceptance",
      desc: "Accepted by 11,500+ universities and institutions across 160+ countries worldwide.",
    },
    {
      title: "Academic Focus",
      desc: "Tests English skills as used in academic settings, preparing you for university-level work.",
    },
    {
      title: "Integrated Skills",
      desc: "Combines reading, listening, speaking, and writing to reflect real academic tasks.",
    },
    {
      title: "Flexible Testing",
      desc: "Available at test centers worldwide and as a Home Edition for convenient scheduling.",
    },
  ],
  quickFacts: [
    "Test Duration: Approximately 3 hours",
    "Score Range: 0–120 total (0–30 per section)",
    "Sections: Reading, Listening, Speaking, Writing",
    "Validity: Scores valid for 2 years",
    "Accepted by: 11,500+ universities in 160+ countries",
  ],

  image: toeflImg,

  imageCaption:
    "Join thousands of successful students who achieved their TOEFL scores for university admissions worldwide",
  ctaHeading: "Ready to Get Started?",
  ctaText:
    "Contact us today for a free consultation and take the first step towards your educational goals.",
};

export const greData: CourseData = {
  id: "gre",
  path: "/gre",
  order: 4,
  label: "GRE",
  wideImage: true,
  tagline: "GRE PREPARATION",
  heading: "Empowering Your Graduate School Success",
  description:
    "Achieve your target GRE score to unlock admissions at top global graduate programs",
  subheading: "Prepare Today for a Brighter Academic Tomorrow",
  intro:
    "Our comprehensive GRE preparation program is designed to help you master both the Verbal and Quantitative Reasoning sections through strategic learning approaches. We focus on building advanced vocabulary with intelligent flashcards, developing critical reading skills through challenging academic texts, and implementing personalised study plans with regular full-length practice tests.",
  intro2:
    "The GRE assesses your readiness for graduate-level work by testing analytical writing, quantitative reasoning, and verbal reasoning skills. Our proven methodology combines targeted content review with test-taking strategies specifically designed for the computer-adaptive format. We help you master complex question types including Text Completion, Sentence Equivalence, Reading Comprehension, and Quantitative Comparison.",
  intro3:
    "Our expert instructors bring first-hand ETS scoring experience to every session, giving you an insider's view of what graders and adaptive algorithms are really looking for — so you walk into test day with a clear strategy for every section.",
  features: [
    {
      title: "Master Vocabulary Building",
      desc: "Master 1000+ high-frequency GRE words with interactive flashcards, contextual learning, and spaced repetition techniques.",
    },
    {
      title: "Expert Instructor Support",
      desc: "One-on-one sessions with GRE specialists who have scored in the 95th percentile or higher and understand ETS scoring patterns.",
    },
    {
      title: "Analytical Writing Mastery",
      desc: "Structured approach to Issue and Argument essays with ETS-aligned rubrics, personalised feedback, and sample responses.",
    },
    {
      title: "Quantitative Reasoning Bootcamp",
      desc: "Comprehensive coverage of arithmetic, algebra, geometry, and data analysis with emphasis on time-saving strategies.",
    },
    {
      title: "Adaptive Test Strategies",
      desc: "Master computer-adaptive test (CAT) strategies for both Verbal and Quantitative sections to maximise score potential.",
    },
  ],
  advantageTitle: "GRE Score Advantage",
  advantage: [
    {
      title: "Widely Accepted",
      desc: "Accepted by 1,300+ graduate and business schools worldwide, including top MBA programs.",
    },
    {
      title: "Section-Level Adaptive",
      desc: "The test adapts to your performance, giving a precise measure of your ability across sections.",
    },
    {
      title: "Long Validity",
      desc: "Scores remain valid for 5 years, giving you flexibility in your application timeline.",
    },
  ],
  quickFacts: [
    "Test Duration: Approximately 1 hour 58 minutes",
    "Score Range: Verbal 130–170, Quant 130–170, Writing 0–6",
    "Format: Computer-adaptive test (section-level adaptive)",
    "Validity: Scores valid for 5 years",
    "Accepted by: 1,300+ graduate and business schools worldwide",
  ],

  image: greImg,

  imageCaption:
    "Join hundreds of successful students who've achieved their target GRE scores for top graduate programs",
  ctaHeading: "Ready to Get Started?",
  ctaText:
    "Contact us today for a free consultation and take the first step towards your educational goals.",
};

export const courses = [ieltsData, pteData, toeflData, greData];

export const getCourseById = (id: string) =>
  courses.find((c) => c.id === id);