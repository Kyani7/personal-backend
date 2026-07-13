import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { aboutLinks } from "./Components/DropdownData/dropDownData";
import { ServicesDropDown } from "./Components/ServicesDropDown/ServicesDropDown";

const MainHeader = () => {
  const [hideNav, setHideNav] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  //  Mobile / tablet (sm, md) menu state 
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideNav(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setHideNav(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close the mobile panel whenever a link inside it is clicked
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div>
      <nav
        className={`fixed top-6 left-1/2 z-[101] h-13 w-[min(94%,900px)]
          -translate-x-1/2 rounded-full border border-white
           bg-black/23 backdrop-blur-lg shadow-lg
           transition-transform duration-1000 ease-in-out
        ${hideNav ? "-translate-y-[150%]" : "translate-y-0"}`}
      >
        {/*  MOBILE / TABLET TOP BAR (sm, md)  */}
        <div className="flex lg:hidden h-full items-center justify-between px-6 text-white">
          <NavLink to="" end className="flex items-center gap-2" onClick={closeMobileMenu}>
            {/* Replace with your actual logo image if you have one */}
            <span className="font-bold text-sm tracking-wide">
              HIMA <span className="text-secondary">AUS</span>
            </span>
          </NavLink>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/*  DESKTOP NAV (lg) — unchanged logic  */}
        <ul className="hidden lg:flex h-full items-center justify-between px-6 text-white">
          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to=""
              end
            >
              Home
            </NavLink>
          </li>

          {/* About Us — hover dropdown, no click state needed */}
          <li className="group relative">
            <NavLink
              className="flex items-center gap-1 uppercase text-sm px-2 py-1 transition hover:text-secondary text-white"
              to="#"
              end
            >
              About us
              <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </NavLink>

            <div
              className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-64
                         invisible opacity-0 translate-y-2
                         group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-200 ease-out"
            >
              <ul className="rounded-2xl bg-black/40 backdrop-blur-lg shadow-lg p-5 space-y-4">
                {aboutLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.href}
                      end
                      className={({ isActive }) =>
                        `block text-sm hover:text-secondary transition pb-1 border-b border-white/20 ${
                          isActive ? "text-primary" : "text-white/90"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Our Services — hover opens the panel, clicks inside drive the accordion */}
          <li className="group relative">
           <NavLink
           className={({ isActive }) =>
          `flex items-center gap-1 uppercase text-sm px-2 py-1 transition hover:text-secondary ${
           isActive ? "text-secondary" : "text-white"
          }`
          }
          to="/services"
        >
        Our Services
    <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
    </NavLink>

            <div
              className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-72
                         invisible opacity-0 translate-y-2
                         group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-200 ease-out"
            >
              <div className="rounded-2xl bg-black/40 backdrop-blur-lg shadow-lg p-5 max-h-[70vh] overflow-y-auto">
                <ServicesDropDown />
              </div>
            </div>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/gallery"
              end
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              className="uppercase text-sm px-2 py-1 transition hover:text-secondary text-white"
              to="/BlogandNews"
              end
            >
              Blog and News
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/find-us"
              end
            >
              Find Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/contact-us"
              end
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* ================= MOBILE / TABLET DROPDOWN PANEL (sm, md) ================= */}
      <div
        className={`lg:hidden fixed left-1/2 -translate-x-1/2 z-[100] w-[min(94%,900px)]
          top-24 rounded-3xl border border-white bg-black/40 backdrop-blur-lg shadow-lg
          text-white overflow-hidden transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <ul className="max-h-[80vh] overflow-y-auto p-5 space-y-1">
          <li>
            <NavLink
              to=""
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "bg-white/10 text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          {/* About Us — accordion, children nested as grandchild */}
          <li className="border-b border-white/20">
            <button
              type="button"
              onClick={() => setMobileAboutOpen((prev) => !prev)}
              className="flex w-full items-center justify-between px-4 py-3 uppercase text-sm font-semibold hover:text-secondary transition"
            >
              About Us
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${
                  mobileAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                mobileAboutOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="overflow-hidden pl-6 pb-2 space-y-1 border-l border-white/20 ml-6">
                {aboutLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.href}
                      end
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block py-2 text-sm transition hover:text-secondary ${
                          isActive ? "text-primary" : "text-white/80"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Our Services — accordion, ServicesDropDown renders nested children */}
          <li className="border-b border-white/20">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between px-4 py-3 uppercase text-sm font-semibold hover:text-secondary transition"
            >
              Our Services
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pl-6 pb-2 border-l border-white/20 ml-6">
                <ServicesDropDown />
              </div>
            </div>
          </li>

          <li>
            <NavLink
              to="/gallery"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/BlogandNews"
              onClick={closeMobileMenu}
              className="block px-4 py-3 uppercase text-sm font-semibold text-white hover:text-secondary transition"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-us"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Find Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;