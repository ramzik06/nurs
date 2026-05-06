'use client';

import { BriefcaseBusiness, CalendarCheck, MessageCircle, Sparkle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { number: '01', icon: MessageCircle, title: t.process.step1Title, description: t.process.step1Desc },
    { number: '02', icon: CalendarCheck, title: t.process.step2Title, description: t.process.step2Desc },
    { number: '03', icon: BriefcaseBusiness, title: t.process.step3Title, description: t.process.step3Desc },
    { number: '04', icon: Sparkle, title: t.process.step4Title, description: t.process.step4Desc },
  ];

  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[9px] font-light uppercase tracking-[0.2em] text-stone-400">
            {t.process.badge}
          </p>
          <h2 className="font-heading text-[48px] font-light leading-tight tracking-[-0.01em] text-stone-950 md:text-[60px]">
            {t.process.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number}>
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#9a6a25]/30" />
                  <span className="text-[10px] font-light uppercase tracking-[0.2em] text-[#9a6a25]">
                    {step.number}
                  </span>
                </div>
                <Icon className="mb-5 size-4 text-stone-400" />
                <h3 className="font-heading text-[24px] font-light leading-tight text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-stone-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
