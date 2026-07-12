import React from 'react';

const navLinks = [
  { label: 'Home', href: 'https://himaaus.com/' },
  { label: 'About Us', href: 'https://himaaus.com/company-profile', hasChevron: true },
  { label: 'Our Services', href: 'https://himaaus.com/our-services', hasChevron: true },
  { label: 'Gallery', href: 'https://himaaus.com/stories' },
  { label: 'Blogs & News', href: '/blogs', active: true },
  { label: 'Find Us', href: 'https://himaaus.com/find-us' },
  { label: 'Contact Us', href: 'https://himaaus.com/contact' },
];

export const BlogPostHeader = () => {
  return (
    <>
      <div className="bg-white px-6 py-4">
        <a
          href="/blogs"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
        >
          <span aria-hidden>←</span> Back to Blog
        </a>
      </div>

      <div className="sticky top-0 z-30 flex justify-center px-4">
        <nav className="mt-4 bg-black/60 backdrop-blur-md rounded-full px-2 py-2 flex items-center gap-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-xs md:text-sm font-medium px-3 py-2 rounded-full transition-colors whitespace-nowrap ${
                link.active
                  ? 'text-amber-400'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {link.label}
              {link.hasChevron && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
