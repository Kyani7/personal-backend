export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: 'study-abroad-dynamics-are-changing-what-students-should-know',
    title: 'Study Abroad Dynamics Are Changing: What Students Should Know',
    excerpt:
      'Studying abroad is still a dream for many students, but the global international student recruitment process has changed significantly in recent years.',
    date: 'January 13, 2026',
    author: 'Anup Acharya',
    readTime: '2 min read',
    category: 'Educational',
    image: 'https://api.himaaus.com/media/blogs/e95cc2d0-30cb-4bad-b8cd-a231aa346302.png',
  },
  {
    id: 2,
    slug: 'your-trusted-partner-for-a-better-future-himalus-consultancy',
    title: 'Your Trusted Partner for a Better Future – Himalus Consultancy',
    excerpt:
      'Choosing the right guidance can make a big difference in shaping your future. At Himalus Consultancy, we are committed to helping students and professionals make informed decisions for education and career growth.',
    date: 'December 19, 2025',
    author: 'Himaaus',
    readTime: '1 min read',
    category: 'general',
    image: 'https://api.himaaus.com/media/blogs/bg1.jpg',
  },
];
