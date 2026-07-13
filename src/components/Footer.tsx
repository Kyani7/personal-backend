interface Branch {
  city: string;
  phone: string;
  email: string;
  address: string;
}

const branches: Branch[] = [
  {
    city: "Pokhara",
    phone: "+977 61-571918",
    email: "pokhara@himaaus.com",
    address: "Buddha Marg, New Road -9, Pokhara",
  },
  {
    city: "Kathmandu",
    phone: "+977 1-4534944",
    email: "kathmandu@himaaus.com",
    address: "Kalikasthan-29, Kalika Marga, Kathmandu",
  },
  {
    city: "Itahari",
    phone: "+977 25-580639",
    email: "itahari@himaaus.com",
    address: "Biratnagar Line, Opposite to Prime Bank, Beside Prime Bank, Itahari",
  },
  {
    city: "Butwal",
    phone: "9857073872",
    email: "butwal@himaaus.com",
    address: "Butwal-11, Kalikanagar, Rupandehi",
  },
];

function IconHouse() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-5a2 2 0 0 1 4 0v5h4a1 1 0 0 0 1-1V9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.2c1.2.5 2.5.7 3.8.7a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.3.2 2.6.7 3.8a1 1 0 0 1-.2 1.1L6.6 10.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5 text-[14px] text-white">
      <span className="text-brand-orange">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      {}
      <div className="relative overflow-hidden bg-brand-blue px-6 py-12 sm:px-10 md:px-20">
        {}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-cover bg-bottom opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=40')",
          }}
        />

        <div className="relative z-10 flex flex-wrap gap-12">
          {}
          <div className="min-w-[220px] flex-1 basis-[220px] space-y-2.5">
            <h3 className="mb-3 text-lg font-semibold text-brand-orange">
              Head Office
            </h3>
            <ContactRow icon={<IconHouse />}>Sydney</ContactRow>
            <ContactRow icon={<IconPhone />}>+61 2 9269 0551</ContactRow>
            <ContactRow icon={<IconMail />}>info@himaaus.com</ContactRow>
            <ContactRow icon={<IconPin />}>
              Suite 1106, Level 11, 370 Pitt Street, Sydney 2000 NSW Australia
            </ContactRow>
          </div>

          {}
          <div className="min-w-[280px] flex-[3] basis-[600px]">
            <h3 className="mb-3 border-b border-white/15 pb-2.5 text-lg font-semibold text-brand-orange">
              Branch Office
            </h3>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {branches.map((b) => (
                <div key={b.city} className="space-y-2.5">
                  <ContactRow icon={<IconHouse />}>{b.city}</ContactRow>
                  <ContactRow icon={<IconPhone />}>{b.phone}</ContactRow>
                  <ContactRow icon={<IconMail />}>{b.email}</ContactRow>
                  <ContactRow icon={<IconPin />}>{b.address}</ContactRow>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="flex flex-wrap items-center justify-between gap-2.5 bg-brand-darkblue px-6 py-3.5 sm:px-10 md:px-20">
        <span className="text-[13px] text-[#cde]">
          ©2026 Hima Aus Education Australia Ptd Ltd. All Rights Reserved
        </span>
        <span className="text-[13px] text-[#cde]">
          Developed by <span className="font-bold text-brand-orange">Youth IT</span>
        </span>
      </div>
    </footer>
  );
}