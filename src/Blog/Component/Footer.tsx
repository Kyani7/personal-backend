import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      <img
        src="https://himaaus.com/images/footer.svg"
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-10 border-b border-white/10">
        <div>
          <h3 className="text-lg font-semibold mb-3">Head Office</h3>
          {/* TODO: replace with the real Head Office address/phone from himaaus.com */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Kathmandu, Nepal
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Branch Office</h3>
          {/* TODO: replace with the real Branch Office address/phone from himaaus.com */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Pokhara, Dhading, Itahari, Nepal
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center pt-8">
        <p className="text-sm text-gray-300">
          ©2026 Hima Aus Education Australia Ptd Ltd. All Rights Reserved
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Developed by{' '}
          <a
            href="https://hamroyouthit.com"
            className="text-gray-300 hover:text-white underline"
            target="_blank"
            rel="noreferrer"
          >
            Youth IT
          </a>
        </p>
      </div>
    </footer>
  );
};