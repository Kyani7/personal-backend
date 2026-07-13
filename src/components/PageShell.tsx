import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-text">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
