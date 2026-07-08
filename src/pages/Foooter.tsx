import { Home, Phone, Mail, MapPin, ArrowUp, MessageCircle } from "lucide-react";
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
        className="fixed bottom-24 right-6 
        w-11 h-20 rounded-full bg-blue-950 
        text-white flex items-center justify-center shadow-lg
        border white"
      >
      <ArrowUp className="w-5 h-5" />
      </button>
      <button
        aria-label="Chat with us"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg hover:bg-sky-400 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </footer>
  );
}