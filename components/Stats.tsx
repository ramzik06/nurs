'use client';

import { useLanguage } from './LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { number: '150+', label: t.stats.events },
    { number: '100%', label: t.stats.clients },
    { number: '8+', label: t.stats.experience },
  ];

  return (
    <section className="bg-[#f9f7f3] px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-24 lg:gap-36">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-[64px] font-light leading-none tracking-[-0.02em] text-[#8a6830] md:text-[72px]">
                {stat.number}
              </p>
              <p className="mt-3 text-[9px] font-light uppercase tracking-[0.2em] text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
