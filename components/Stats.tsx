'use client';

import { useLanguage } from './LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      number: '150+',
      label: t.stats.events,
    },
    {
      number: '100%',
      label: t.stats.clients,
    },
    {
      number: '8+',
      label: t.stats.experience,
    },
  ];

  return (
    <section className="bg-[#f6efe7] px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 divide-y divide-[#dccdb5] md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="px-6 py-8 text-center first:pt-0 last:pb-0 md:py-0">
              <p className="font-heading text-6xl font-light text-[#8f6426] md:text-7xl">
                {stat.number}
              </p>
              <p className="mt-3 text-sm font-light uppercase text-stone-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
