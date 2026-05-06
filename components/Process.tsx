'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BriefcaseBusiness, CalendarCheck, MessageCircle, Sparkle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: t.process.step1Title,
      description: t.process.step1Desc,
    },
    {
      number: 2,
      icon: CalendarCheck,
      title: t.process.step2Title,
      description: t.process.step2Desc,
    },
    {
      number: 3,
      icon: BriefcaseBusiness,
      title: t.process.step3Title,
      description: t.process.step3Desc,
    },
    {
      number: 4,
      icon: Sparkle,
      title: t.process.step4Title,
      description: t.process.step4Desc,
    },
  ];

  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-light uppercase text-[#c9958e]">{t.process.badge}</p>
          <h2 className="font-heading text-5xl font-light leading-tight text-stone-950 md:text-6xl">
            {t.process.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-7 text-stone-600">
            {t.process.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full rounded-md border-stone-200 bg-[#fbfaf7] shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[#d7c19d] hover:bg-white hover:shadow-[0_22px_70px_rgba(146,111,52,0.12)]">
                  <CardContent className="p-7">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-full bg-stone-950 text-sm font-light text-white">
                        0{step.number}
                      </div>
                      <Icon className="size-5 text-[#7f9a86]" />
                    </div>
                    <h3 className="font-heading text-3xl font-light text-stone-950">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-7 text-stone-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(100%-10px)] top-1/2 z-10 hidden h-px w-8 bg-stone-200 lg:block">
                    <span className="absolute -right-1 -top-1 size-2 rounded-full bg-stone-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
