'use client';

import { Award, HeartHandshake, Lightbulb, Mic2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: Mic2, title: t.features.item1Title, description: t.features.item1Desc },
    { icon: HeartHandshake, title: t.features.item2Title, description: t.features.item2Desc },
    { icon: Lightbulb, title: t.features.item3Title, description: t.features.item3Desc },
    { icon: Award, title: t.features.item4Title, description: t.features.item4Desc },
  ];

  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-[48px] font-light leading-tight tracking-[-0.01em] text-stone-950 md:text-[60px]">
            {t.features.title}
          </h2>
          <p className="max-w-sm text-[15px] leading-8 text-stone-500 lg:text-right">
            {t.features.description}
          </p>
        </div>

        <div className="divide-y divide-stone-100">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex gap-6 py-10 lg:gap-16 lg:py-12"
              >
                <span className="w-8 shrink-0 pt-1 text-[10px] font-light uppercase tracking-[0.2em] text-stone-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-1 flex-col gap-5 lg:flex-row lg:items-start lg:gap-20">
                  <div className="lg:w-2/5">
                    <Icon className="mb-5 size-5 text-[#9a6a25]" />
                    <h3 className="font-heading text-[28px] font-light leading-tight tracking-[-0.01em] text-stone-950 md:text-[32px]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-[1.85] text-stone-600 lg:flex-1 lg:pt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
