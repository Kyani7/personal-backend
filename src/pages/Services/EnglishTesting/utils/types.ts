export interface Feature {
  title: string;
  desc: string;
}

export interface InfoCard {
  title: string;
  desc: string;
}

export interface CourseData {
  /** URL-safe id, also used as the in-page anchor id, e.g. "ielts" */
  id: "ielts" | "pte" | "toefl" | "gre";
  /** Route path, e.g. "/ielts" */
  path: string;
  /** Order in which the course must always appear across the site */
  order: number;
  /** Short display label, e.g. "IELTS" */
  label: string;
  /** Small uppercase eyebrow text, e.g. "IELTS PREPARATION" */
  tagline: string;
  /** Large page/section heading */
  heading: string;
  /** One-line subtitle under the heading */
  description: string;
  /** Secondary heading that opens the content column */
  subheading: string;
  /** Body paragraphs */
  intro: string;
  intro2: string;
  intro3?: string;
  /** Bullet feature list */
  features: Feature[];
  /** Title for the info-card / advantage box */
  advantageTitle: string;
  advantage: InfoCard[];
  /** Right-column yellow Quick Facts box */
  quickFacts: string[];
  /** Right-column hero image */
  image: string;
  imageCaption: string;
  /** Widen the right-hand image column for this course only */
  wideImage?: boolean;
  /** CTA section copy */
  ctaHeading: string;
  ctaText: string;
}