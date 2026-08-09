import { FaArrowLeft } from "react-icons/fa";



export interface PageHeaderProps {
  backLabel?: string;
  backHref?: string;
  title?: string;
  description?: string;
  backgroundImage?: string;
}



export default function Head({
  backLabel = "Back To Services",
  backHref = "/",
  title = "Visa Application",
  description = "End-to-end support for student visas to Australia, UK, Canada, USA, New Zealand, Japan, Sweden, and Germany with expert GTE and documentation.",
  backgroundImage = "https://himaaus.com/images/WEBSITE-6.png",
}: PageHeaderProps) {
  return (
    <header
      className="relative overflow-hidden bg-slate-700 bg-cover bg-center py-16 sm:py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay so text stays readable over the photo */}
      <div className="absolute inset-0 bg-slate-800/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-16">
        <a
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
        >
          <FaArrowLeft className="h-3.5 w-3.5" />
          {backLabel}
        </a>

        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
          {description}
        </p>
      </div>
    </header>
  );
}