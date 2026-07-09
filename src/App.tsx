import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      {/*
        Temporary nav for previewing the Contact & Gallery pages in isolation.
        Replace with the shared site header/nav once merged with the rest of the app.
      */}
      <nav className="flex items-center gap-8 border-b border-line bg-white px-6 py-5">
        <span className="font-display text-lg font-semibold text-ink">
          Hima Aus
        </span>
        <div className="flex gap-6">
          <Link to="/contact" className="text-sm font-medium text-ink-soft transition hover:text-brand-500">
            Contact Us
          </Link>
          <Link to="/gallery" className="text-sm font-medium text-ink-soft transition hover:text-brand-500">
            Gallery
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;