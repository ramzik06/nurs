'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { contact } from '@/lib/site';
import { ArrowUpRight, Check, Gem, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="overflow-hidden bg-[#f8f5ef] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-light uppercase text-[#b8893b]">
              <Gem className="size-4" />
              {t.pricing.badge}
            </p>
            <h2 className="font-heading text-5xl font-light leading-tight text-stone-950 md:text-6xl">
              {t.pricing.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base font-light leading-8 text-stone-600 lg:justify-self-end">
            {t.pricing.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.pricing.eventTypes.map((event, index) => (
            <Card
              key={event}
              className="group animate-fade-up overflow-hidden rounded-md border-stone-200 bg-white shadow-[0_18px_60px_rgba(120,113,108,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d7c19d] hover:shadow-[0_28px_90px_rgba(146,111,52,0.14)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="relative p-7">
                <div className="absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle,#fff3dc_0%,transparent_68%)] opacity-80 transition-transform duration-500 group-hover:scale-125" />
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-full bg-[#fff3dc] text-[#9a6a25]">
                      <Check className="size-5" />
                    </div>
                    <ArrowUpRight className="size-5 text-stone-300 transition-all duration-300 group-hover:text-[#b8893b]" />
                  </div>

                  <h3 className="font-heading text-3xl font-light text-stone-950">{event}</h3>
                  <div className="mt-6 flex items-end gap-2">
                    <p className="font-heading text-5xl font-light text-[#8f6426]">200k</p>
                    <p className="pb-2 text-sm font-light uppercase text-stone-500">{t.pricing.currency}</p>
                  </div>
                  <p className="mt-5 text-sm font-light leading-7 text-stone-600">
                    {t.pricing.packageIncludes}
                  </p>

                  <Button
                    variant="outline"
                    className="mt-7 h-11 w-full rounded-full border-stone-200 bg-white text-sm font-light text-stone-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d7c19d] hover:bg-[#fffaf2] hover:text-stone-950"
                    onClick={() => window.open(contact.whatsapp, '_blank', 'noopener,noreferrer')}
                  >
                    <MessageCircle className="mr-2 size-4" />
                    {t.pricing.contact}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
