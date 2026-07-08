import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import {aboutLinks} from "./Components/DropdownData/dropDownData"
import {ServicesDropDown } from "./Components/ServicesDropDown/ServicesDropDown"

const MainHeader = () => {
  const [hideNav, setHideNav] = useState(false);
const timeoutRef = useRef<number | null>(null);

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide navbar while scrolling down
    if (currentScrollY > lastScrollY) {
      setHideNav(true);
    }

    lastScrollY = currentScrollY;

    // Show navbar when scrolling stops
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
  return (
    
    <div>
      <nav className={`fixed top-6 left-1/2 z-[101] h-13 w-[min(94%,900px)]
          -translate-x-1/2 rounded-full border border-white
           bg-black/23 backdrop-blur-lg shadow-lg
           transition-transform duration-1000 ease-in-out
        ${hideNav ? "-translate-y-[150%]" : "translate-y-0"}`}
    >
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
              className="flex items-center gap-1 uppercase text-sm px-2 py-1 transition hover:text-secondary text-white"
              to="#"
              end
            >
              Our Services
              <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </NavLink>

            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-72
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
              to="/contactUs"
              end
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
 export default MainHeader;