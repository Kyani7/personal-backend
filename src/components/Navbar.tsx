import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

function NavItem({
  label,
  hasArrow,
  onClick,
}: {
  label: string;
  hasArrow?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-medium tracking-wide text-white transition-colors hover:text-brand-orange"
    >
      {label}
      {hasArrow && <span className="text-[10px]">⌄</span>}
    </button>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const goToCourse = (path: string) => {
    navigate(path);
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const goTo = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-transparent px-4 pt-6 pb-3 md:justify-center"
    >
      {}
      <div className="hidden items-center gap-1 rounded-full border border-white/30 bg-black/15 px-5 py-1.5 backdrop-blur-md sm:px-6 md:flex">
        <NavItem label="HOME" onClick={() => navigate("/")} />
        <NavItem label="ABOUT US" hasArrow />

        <div ref={dropRef} className="relative">
          <button
            onClick={() => setServicesOpen((v) => !v)}
            aria-expanded={servicesOpen}
            aria-haspopup="true"
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-medium tracking-wide text-brand-orange"
          >
            OUR SERVICES
            <span className="text-[10px]">{servicesOpen ? "⌃" : "⌄"}</span>
          </button>

          {servicesOpen && (
            <div
              role="menu"
              className="absolute left-0 top-[calc(100%+12px)] z-[60] min-w-[260px] overflow-hidden rounded-xl bg-[#1c2b3a] shadow-2xl"
            >
              <button
                onClick={() => goToCourse("/courses")}
                className="flex w-full items-center justify-between border-b border-white/10 px-5 py-3 text-left text-[14px] text-white transition-colors hover:bg-brand-blue/30"
              >
                All Test Preparation
              </button>

              <div className="px-5 pb-1.5 pt-3 text-[13px] font-semibold uppercase tracking-wider text-brand-orange">
                English Test Preparation
              </div>

              <div className="pb-1.5">
                {courses.map((course) => (
                  <button
                    key={course.id}
                    role="menuitem"
                    onClick={() => goToCourse(`/courses#${course.id}`)}
                    className="flex w-full items-center gap-2.5 px-8 py-2.5 text-left text-[14px] text-gray-300 transition-colors hover:bg-brand-blue/35 hover:text-white"
                  >
                    <span className="text-[11px] text-brand-orange">•</span>
                    {course.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goToCourse("/services")}
                className="flex w-full items-center justify-between border-t border-white/10 px-5 py-3 text-left text-[14px] text-white transition-colors hover:bg-brand-blue/30"
              >
                Destination Country <span className="text-[10px]">⌄</span>
              </button>
            </div>
          )}
        </div>

        <NavItem label="GALLERY" />
        <NavItem label="BLOGS & NEWS" />
        <NavItem label="FIND US" />
        <NavItem label="CONTACT US" />
      </div>

      {}
      <button
        onClick={() => navigate("/")}
        className="rounded-full border border-white/30 bg-black/15 px-4 py-2 text-[14px] font-semibold tracking-wide text-white backdrop-blur-md md:hidden"
      >
        Hima Aus
      </button>

      {}
      <button
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur-md md:hidden"
      >
        <MenuIcon open={mobileOpen} />
      </button>

      {}
      {mobileOpen && (
        <div className="absolute inset-x-4 top-[calc(100%+8px)] max-h-[75vh] overflow-y-auto rounded-2xl bg-[#1c2b3a] p-2 shadow-2xl md:hidden">
          <button
            onClick={() => goTo("/")}
            className="block w-full rounded-lg px-4 py-3 text-left text-[15px] font-medium text-white hover:bg-white/10"
          >
            HOME
          </button>
          <button className="block w-full rounded-lg px-4 py-3 text-left text-[15px] font-medium text-white hover:bg-white/10">
            ABOUT US
          </button>

          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-[15px] font-medium text-brand-orange hover:bg-white/10"
          >
            OUR SERVICES
            <span className="text-[11px]">{mobileServicesOpen ? "⌃" : "⌄"}</span>
          </button>

          {mobileServicesOpen && (
            <div className="mb-1 ml-2 border-l border-white/10 pl-3">
              <button
                onClick={() => goToCourse("/courses")}
                className="block w-full rounded-lg px-3 py-2.5 text-left text-[14px] text-white hover:bg-white/10"
              >
                All Test Preparation
              </button>
              {courses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => goToCourse(`/courses#${course.id}`)}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[14px] text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  <span className="text-[11px] text-brand-orange">•</span>
                  {course.label}
                </button>
              ))}
              <button
                onClick={() => goToCourse("/services")}
                className="block w-full rounded-lg px-3 py-2.5 text-left text-[14px] text-white hover:bg-white/10"
              >
                Destination Country
              </button>
            </div>
          )}

          <button className="block w-full rounded-lg px-4 py-3 text-left text-[15px] font-medium text-white hover:bg-white/10">
            GALLERY
          </button>
          <button className="block w-full rounded-lg px-4 py-3 text-left text-[15px] font-medium text-white hover:bg-white/10">
            BLOGS & NEWS
          </button>
          <button className="block w-full rounded-lg px-4 py-3 text-left text-[15px] font-medium text-white hover:bg-white/10">
            FIND US
          </button>
          <button className="block w-full rounded-lg px-4 py-3 text-left text-[15px] font-medium text-white hover:bg-white/10">
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
}