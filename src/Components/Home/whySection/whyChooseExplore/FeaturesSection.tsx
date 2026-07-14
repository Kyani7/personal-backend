import features from './data/features.ts';
import FeatureRow from './FeatureRow.tsx';

export default function FeaturesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-brand-blue sm:text-4xl">
          What Sets Us Apart
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Comprehensive support from initial consultation to successful settlement — every step
          of your educational journey.
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {features.map((feature, index) => (
          <FeatureRow key={feature.number} {...feature} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
