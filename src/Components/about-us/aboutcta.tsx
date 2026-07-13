import { Link } from "react-router-dom";
import Container from "../common/container";

export default function AboutCta() {
  return (
    <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-transparent py-16 md:py-20">
      <Container className="text-center">
        <h3 className="text-2xl font-bold text-primary-dark sm:text-3xl md:text-4xl">Ready to Get Started?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Contact us today for a free consultation and take the first step towards your educational goals.
        </p>
        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+9779805027022"
            className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow transition-all hover:-translate-y-0.5 hover:bg-green-500/90"
          >
            Call Now: +977 980-5027022
          </a>
          <a
            href="tel:+61292690551"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3.5 text-base font-semibold text-white shadow transition-all hover:-translate-y-0.5 hover:bg-secondary/90"
          >
            Call Now: +61 2 9269 0551
          </a>
          <a
            href="mailto:info@himaaus.com"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white px-8 py-3.5 text-base font-semibold text-primary shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-50"
          >
            Email Us: info@himaaus.com
          </a>
          <Link
            to="/contactUs"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Book Consultation
          </Link>
        </div>
      </Container>
    </section>
  );
}
