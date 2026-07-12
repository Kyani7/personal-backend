import React, { useState } from 'react';

const navLinks = [
  { label: 'Home', href: null },
  { label: 'About Us', href: null },
  { label: 'Our Services', href: null },
  { label: 'Gallery', href: null },
  { label: 'Blogs & News', href: '/blogs' },
  { label: 'Find Us', href: null },
  { label: 'Contact Us', href: null },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="/blogs">
          <img src="https://himaaus.com/logo.png" alt="HimaAus logo" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-blue-700"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="text-sm font-medium text-gray-400 cursor-not-allowed select-none"
                title="Coming soon"
              >
                {link.label}
              </span>
            )
          )}
        </nav>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href} className="text-sm font-medium text-blue-700">
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="text-sm font-medium text-gray-400 cursor-not-allowed select-none"
                title="Coming soon"
              >
                {link.label}
              </span>
            )
          )}
        </nav>
      )}
    </header>
  );
};

