'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Award, HeartHandshake, Lightbulb, Mic2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Mic2,
      title: t.features.item1Title,
      description: t.features.item1Desc,
      accent: 'bg-[#fff3dc] text-[#9a6a25] group-hover:bg-[#9a6a25]',
    },
    {
      icon: HeartHandshake,
      title: t.features.item2Title,
      description: t.features.item2Desc,
      accent: 'bg-[#eef3ec] text-[#667f6c] group-hover:bg-[#667f6c]',
    },
    {
      icon: Lightbulb,
      title: t.features.item3Title,
      description: t.features.item3Desc,
      accent: 'bg-[#f9ecea] text-[#b07870] group-hover:bg-[#b07870]',
    },
    {
      icon: Award,
      title: t.features.item4Title,
      description: t.features.item4Desc,
      accent: 'bg-[#f2eee6] text-stone-800 group-hover:bg-stone-950',
    },
  ];

  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-light uppercase text-stone-400">{t.features.badge}</p>
          <h2 className="font-heading text-5xl font-light leading-tight text-stone-950 md:text-6xl">
            {t.features.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-7 text-stone-600">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden rounded-md border-stone-200 bg-white shadow-[0_20px_70px_rgba(120,113,108,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_28px_90px_rgba(120,113,108,0.14)]"
              >
                <CardContent className="p-8">
                  <div className={`mb-8 flex size-14 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white ${feature.accent}`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-3xl font-light text-stone-950">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm font-light leading-7 text-stone-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
