
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
type Props = {
  backTitle: string;
  to: string;
  className?: string;
};

export default function Hero({ backTitle, to }: Props) {
  return (
    <section id="home" className="relative h-[320px] w-full overflow-hidden sm:h-[380px]">
      <img
        src="https://himaaus.com/images/WEBSITE-6.png"
        alt="Student ready to start their study abroad journey"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-700/70" />



      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 sm:px-8">
        <Link
          to={to}
          className='mb-4 inline-flex w-fit flex-nowrap items-center gap-1.5 whitespace-nowrap text-sm font-medium text-white/90 hover:text-white'>
          <ArrowLeft size={16} />
          {backTitle}

        </Link>

        <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Why Choose Hima Aus
        </h1>
        <p className="mt-3 max-w-2xl whitespace-nowrap text-sm text-white/85">
          Discover the pillars of our service that make Hima Aus the preferred choice for ambitious students worldwide.
        </p>
      </div>
    </section>
  );
}