'use client';

import { contact } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="bg-[#f9f7f3] px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-[9px] font-light uppercase tracking-[0.2em] text-stone-400">
              {t.pricing.badge}
            </p>
            <h2 className="font-heading text-[40px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[48px] md:text-[60px]">
              {t.pricing.title}
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="max-w-xs text-[15px] leading-8 text-stone-500">
              {t.pricing.description}
            </p>
            <p className="mt-2 text-[13px] text-stone-400">
              {t.pricing.packageIncludes}
            </p>
          </div>
        </div>

        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {t.pricing.eventTypes.map((event, index) => (
            <div
              key={event}
              className="group flex items-center justify-between gap-4 py-6 transition-colors duration-200 hover:bg-white/60 sm:gap-8 sm:py-8 lg:py-10"
            >
              <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                <span className="shrink-0 text-[10px] font-light uppercase tracking-[0.18em] text-stone-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-[22px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[28px] md:text-[34px]">
                  {event}
                </h3>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-heading text-[28px] font-light leading-none tracking-[-0.01em] text-[#8a6830] sm:text-[36px] md:text-[44px]">
                  200k
                </p>
                <p className="mt-1 text-[9px] font-light uppercase tracking-[0.14em] text-stone-400">
                  {t.pricing.currency}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            className="h-12 w-full rounded-none bg-stone-950 px-10 text-[11px] font-light uppercase tracking-[0.15em] text-white shadow-none transition-colors duration-200 hover:bg-stone-800 sm:w-auto"
            onClick={() =>
              window.open(contact.whatsapp, '_blank', 'noopener,noreferrer')
            }
          >
            <MessageCircle className="mr-2.5 size-3.5" />
            {t.pricing.contact}
          </Button>
        </div>
      </div>
    </section>
  );
}
