'use client';

import { BookOpenText, Palette, Sparkles, Handshake } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function WhyChoose() {
  const { t } = useLanguage();

  const reasons = [
    { icon: Sparkles, title: t.whyChoose.reason1Title, description: t.whyChoose.reason1Desc },
    { icon: BookOpenText, title: t.whyChoose.reason2Title, description: t.whyChoose.reason2Desc },
    { icon: Palette, title: t.whyChoose.reason3Title, description: t.whyChoose.reason3Desc },
    { icon: Handshake, title: t.whyChoose.reason4Title, description: t.whyChoose.reason4Desc },
  ];

  return (
    <section className="bg-[#f9f7f3] px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-28">
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 text-[9px] font-light uppercase tracking-[0.2em] text-stone-400">
            {t.whyChoose.badge}
          </p>
          <h2 className="font-heading text-[48px] font-light leading-tight tracking-[-0.01em] text-stone-950 md:text-[58px]">
            {t.whyChoose.title}
          </h2>
          <div className="mt-7 h-px w-10 bg-[#9a6a25]" />
          <p className="mt-7 max-w-xs text-[15px] leading-8 text-stone-500">
            {t.whyChoose.description}
          </p>
        </div>

        <div>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="border-t border-stone-200 py-9 first:border-t-0 first:pt-0"
              >
                <div className="flex items-start gap-5">
                  <Icon className="mt-1 size-4 shrink-0 text-[#9a6a25]" />
                  <div>
                    <h3 className="font-heading text-[26px] font-light leading-tight tracking-[-0.01em] text-stone-950">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.85] text-stone-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
