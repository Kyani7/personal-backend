import { Menu } from "lucide-react";
import Container from "../common/container";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-30 w-full px-4 pt-4 sm:pt-6">
      <Container>
        <div className="flex items-center justify-between rounded-full border border-white/40 bg-slate-900/30 px-5 py-2.5 backdrop-blur-sm md:px-6 md:py-3">
          <div className="text-base font-semibold tracking-wide text-white md:text-lg">HIMA AUS</div>
          <button aria-label="menu" className="rounded-full p-1.5 text-white transition-colors hover:bg-white/10">
            <Menu size={22} />
          </button>
        </div>
      </Container>
    </header>
  );
}
