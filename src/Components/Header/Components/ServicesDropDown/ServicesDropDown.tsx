import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { services } from "../DropdownData/dropDownData";
import { useState } from "react";

export function ServicesDropDown() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <ul className="space-y-3">
      {services.map((service, idx) => {
        const isOpen = openKey === service.key;
        return (
          <li
            key={service.key}
            className={idx !== services.length - 1 ? "border-b border-white/20 pb-3" : ""}
          >
            <button
              type="button"
              onClick={() => toggle(service.key)}
              className={`flex w-full items-center justify-between text-sm transition ${
                isOpen ? "text-secondary" : "text-white/90 hover:text-secondary"
              }`}
            >
              {service.label}
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="overflow-hidden space-y-2 pl-2">
                {service.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-secondary transition"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/70 shrink-0" />
                    <Link to={item.href} className="hover:text-secondary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}