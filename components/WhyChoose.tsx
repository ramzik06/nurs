'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpenText, Palette, Sparkles, Handshake } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function WhyChoose() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Sparkles,
      title: t.whyChoose.reason1Title,
      description: t.whyChoose.reason1Desc,
    },
    {
      icon: BookOpenText,
      title: t.whyChoose.reason2Title,
      description: t.whyChoose.reason2Desc,
    },
    {
      icon: Palette,
      title: t.whyChoose.reason3Title,
      description: t.whyChoose.reason3Desc,
    },
    {
      icon: Handshake,
      title: t.whyChoose.reason4Title,
      description: t.whyChoose.reason4Desc,
    },
  ];

  return (
    <section className="bg-[#f8f5ef] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-light uppercase text-[#7f9a86]">{t.whyChoose.badge}</p>
          <h2 className="font-heading text-5xl font-light leading-tight text-stone-950 md:text-6xl">
            {t.whyChoose.title}
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-7 text-stone-600">
            {t.whyChoose.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="group rounded-md border-stone-200 bg-white/90 shadow-[0_18px_60px_rgba(120,113,108,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(120,113,108,0.13)]"
              >
                <CardContent className="p-7">
                  <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-stone-200 bg-white text-stone-700 shadow-sm transition-all duration-300 group-hover:border-stone-300 group-hover:bg-[#f4efe6]">
                    <Icon className="size-5 text-[#b8893b] transition-colors duration-300 group-hover:text-[#7f9a86]" />
                  </div>
                  <h3 className="font-heading text-3xl font-light text-stone-950">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-stone-600">
                    {reason.description}
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
