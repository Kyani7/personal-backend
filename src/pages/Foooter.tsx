import { Home, Phone, Mail, MapPin, ArrowUp, MessageCircle, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import  FooterBg from "../assets/Footer/FooterBg.png";

type OfficeInfo = {
  city: string;
  phone: string;
  email: string;
  address: string[];
};

const headOffice: OfficeInfo = {
  city: "Sydney",
  phone: "+61 2 9269 0551",
  email: "info@himaaus.com",
  address: ["Suite 1106, Level 11, 370 Pitt Street , Sydney", "2000 NSW Australia"],
};

const branchOffices: OfficeInfo[] = [
  {
    city: "Pokhara",
    phone: "+977 61-571918",
    email: "pokhara@himaaus.com",
    address: ["Buddha Marg, New", "Road -9, Pokhara"],
  },
  {
    city: "Kathmandu",
    phone: "+977 1-4534944",
    email: "kathmandu@himaaus.com",
    address: ["Kalikasthan-29,", "Kalika Marga,", "Kathmandu"],
  },
  {
    city: "Itahari",
    phone: "+977 25-580639",
    email: "itahari@himaaus.com",
    address: ["Itahari-6, Sunsari,", "opposite of Rastriya", "Banijya Bank"],
  },
  {
    city: "Butwal",
    phone: "9857073872",
    email: "butwal@himaaus.com",
    address: ["Butwal-11,", "Kalikanagar,", "Rupandehi"],
  },
];

function OfficeBlock({ office }: { office: OfficeInfo }) {
  return (
    <div className="min-w-[180px]">
      <div className="flex items-center gap-2 mb-3">
        <Home className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="text-white font-medium ">{office.city}</span>
      </div>
      <div className="flex items-center gap-2 mb-2.5">
        <Phone className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="text-white/90 text-sm">{office.phone}</span>
      </div>
      <div className="flex items-center gap-2 mb-2.5">
        <Mail className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="text-white/90 text-sm break-all">{office.email}</span>
      </div>
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-[3px]" />
        <span className="text-white/90 text-sm leading-relaxed">
          {office.address.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default function Footer() {
  const [chatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  const [showTop, setShowTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-sky-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 bg-[#0768a8] pointer-events-none"></div>
      <img
        src={FooterBg}
        alt="bgImage"
        className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-bottom opacity-20 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Head Office */}
          <div className="shrink-0">
            <h3 className="text-amber-400 text-xl font-semibold mb-5">Head Office</h3>
            <OfficeBlock office={headOffice} />
          </div>

          {/* Branch Office */}
          <div className="flex-1 mt-15">
            <h3 className="text-amber-400 text-xl font-semibold mb-3">Branch Office</h3>
            <div className="h-px bg-white/20 mb-5" />
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              {branchOffices.map((office) => (
                <OfficeBlock key={office.city} office={office} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white bg-blue-900/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/90">
          <p>©2026 Hima Aus Education Australia Ptd Ltd. All Rights Reserved</p>
          <p>
            Developed by{" "}
            <a href="https://hamroyouthit.com/" className="text-amber-400 hover:underline">
              Youth IT
            </a>
          </p>
        </div>
      </div>

      {/* Chat Box */}
      <button
        aria-label="Back to top"
        onClick={handleScrollToTop}
        className={`fixed bottom-24 right-8 w-11 h-17 rounded-2xl bg-black/23 backdrop-blur-lg text-white flex items-center justify-center shadow-lg border white transition-opacity duration-300 ${showTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
      <button
        aria-label="Chat with us"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#0768a8] text-white flex items-center justify-center shadow-lg hover:bg-sky-400 transition-colors"
        onClick={openChat}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Popup - opens when MessageCircle clicked; closes only via the colored X button */}
      {chatOpen && (
        <div className="fixed bottom-28 right-6 z-50">
          <div className="w-70 bg-white rounded-2xl shadow-lg p-4 relative">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-slate-900 text-lg font-semibold">How can we help?</h4>
              <button
                aria-label="Close chat"
                onClick={closeChat}
                className="w-6 h-6 text-slate-900 hover:text-slate-800 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp (opens in new tab)"
                className="w-full inline-flex bg-[#26d466] text-white rounded-lg py-3 items-center justify-between px-4"
              >
                <span>Chat on WhatsApp</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </a>

              <a
                href="tel:+61700000000"
                className="w-full inline-flex bg-[#3b82f5] text-white rounded-lg py-3 items-center justify-between px-4"
              >
                <span>Call Us Directly</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </a>

              <a
                href="https://hamroyouthit.com/consult"
                target="_blank"
                className="w-full inline-flex bg-[#8b5cf6] text-white rounded-lg py-3 items-center justify-between px-4"
              >
                <span>Get Consult Now</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}