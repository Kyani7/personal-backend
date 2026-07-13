import { Link } from "react-router-dom";
import Container from "../common/container";

type AlternatingSectionProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function AlternatingSection({
  label,
  title,
  description,
  image,
  reverse = false,
  ctaLabel,
  ctaHref,
}: AlternatingSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div
          className={`flex flex-col items-center gap-10 lg:gap-12 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="w-full space-y-5 lg:w-1/2">
            <div className="flex items-center gap-3">
              <span className="h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">{label}</p>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark sm:text-3xl md:text-4xl">{title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
            {ctaLabel && ctaHref ? (
              <Link
                to={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>
          <div className="hidden w-full md:block lg:w-1/2">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
