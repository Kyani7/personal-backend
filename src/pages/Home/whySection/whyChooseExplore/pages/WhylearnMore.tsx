import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import CTASection from '../CTASection.tsx';
import features from '../data/features.ts';
import serviceDetails from '../data/serviceDetails.ts';
import Hero from '../Hero.tsx';

export default function WhyLearnMore() {
  const { slug } = useParams<{ slug: string }>();

  const feature = features.find((item) => item.slug === slug);
  const detail = serviceDetails.find((item) => item.slug === slug);

  useEffect(() => {
    if (feature) {
      document.title = `${feature.title} | Himaus Education`;
    }
  }, [feature]);

  if (!feature || !detail) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Hero
        backTitle="Back to Services"
        to="/why-choose-us"
      />


      <main className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start lg:gap-12">
          {/* Main column */}
          <div className="lg:col-span-2">
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-light text-sm font-bold text-brand-blue">
              {feature.number}
            </span>
            <h1 className="mb-5 text-3xl font-extrabold text-brand-blue sm:text-4xl">
              About {feature.title}
            </h1>
            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              {detail.intro}
            </p>

            {/* Our Process */}
            <div className="mb-12 rounded-2xl bg-brand-blue-light p-6 sm:p-8">
              <h2 className="mb-5 text-xl font-bold text-brand-blue sm:text-2xl">Our Process</h2>
              <ul className="space-y-4">
                {detail.process.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-brand-gold"
                      strokeWidth={2.4}
                    />
                    <span className="text-sm font-medium leading-relaxed text-slate-700 sm:text-[15px]">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Offer */}
            <h2 className="mb-5 text-xl font-bold text-brand-blue sm:text-2xl">What We Offer</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {detail.offerings.map((offer) => (
                <div
                  key={offer.title}
                  className="rounded-xl border border-slate-100 p-5 shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-brand-blue">{offer.title}</h3>
                    <span className="shrink-0 rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white">
                      {offer.badge}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-500">{offer.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6  lg:top-28">
            <div className="rounded-2xl border border-slate-100 p-6 shadow-card">
              <h2 className="mb-5 text-lg font-bold text-brand-blue">Service Features</h2>
              <ul className="space-y-5">
                {detail.features.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="flex gap-3">
                    <Icon size={22} className="mt-0.5 shrink-0 text-brand-blue" strokeWidth={2} />
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-800">{title}</h3>
                      <p className="text-[13px] leading-relaxed text-slate-500">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 p-6 shadow-card">
              <h2 className="mb-4 text-lg font-bold text-brand-blue">Our Success</h2>
              <dl className="divide-y divide-slate-100">
                {detail.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-2.5 text-sm">
                    <dt className="text-slate-500">{stat.label}</dt>
                    <dd className="font-bold text-brand-blue">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              to="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-dark active:bg-brand-gold"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </main>

      <CTASection />
    </>
  );
}
