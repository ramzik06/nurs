'use client';

import { Button } from '@/components/ui/button';
import { contact, media } from '@/lib/site';
import { Sparkles, MessageCircle, Play, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="about" className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf7_48%,#f6efe7_100%)] px-5 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div className="animate-fade-up">
          <div className="mb-8 inline-flex items-center rounded-full border border-[#d7c19d]/60 bg-[#fffaf2] px-4 py-2 text-xs font-light uppercase text-stone-600 shadow-[0_12px_40px_rgba(146,111,52,0.10)]">
            <Sparkles className="mr-2 size-3.5 text-[#b8893b]" />
            {t.hero.badge}
          </div>

          <div className="space-y-7">
            <h1 className="font-heading text-6xl font-light leading-[0.92] text-stone-950 sm:text-7xl lg:text-8xl">
              {t.hero.title}
            </h1>
            <p className="max-w-xl text-lg font-light leading-8 text-stone-600">
              {t.hero.description}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full bg-stone-950 px-8 text-sm font-light text-white shadow-[0_18px_45px_rgba(28,25,23,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-[0_22px_55px_rgba(28,25,23,0.26)]"
              onClick={() => {
                window.open(contact.whatsapp, '_blank', 'noopener,noreferrer');
              }}
            >
              <MessageCircle className="mr-2 size-4" />
              {t.hero.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-stone-200 bg-white px-8 text-sm font-light text-stone-700 shadow-[0_16px_40px_rgba(120,113,108,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-50 hover:text-stone-950"
              onClick={() => {
                window.location.hash = 'video';
              }}
            >
              <Play className="mr-2 size-4" />
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-light text-stone-500">
            <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#b8893b]" /> {t.hero.feature1}</span>
            <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#7f9a86]" /> {t.hero.feature2}</span>
            <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#c9958e]" /> {t.hero.feature3}</span>
          </div>
        </div>

        <div className="relative min-h-[560px] lg:min-h-[700px]">
          <div className="absolute left-8 top-4 h-[84%] w-[78%] border border-[#d7c19d] bg-[#fffaf2]/70" />
          <div className="absolute bottom-0 right-0 h-[78%] w-[72%] border border-[#c7d4c4] bg-[#eef3ec]" />
          <div className="absolute left-0 top-20 h-28 w-2/3 bg-gradient-to-r from-transparent via-[#d7c19d]/30 to-transparent blur-xl animate-sheen" />
          
          <div className="absolute inset-0 overflow-hidden shadow-[0_28px_90px_rgba(87,83,78,0.18)] reveal-right">
            <Image
              src={media.hero}
              alt="Professional event host"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[58%_25%]"
              priority
            />
          </div>

          <div className="absolute -left-1 bottom-10 w-48 border border-white/80 bg-white p-3 shadow-[0_20px_70px_rgba(87,83,78,0.16)] reveal-up sm:w-56" style={{ animationDelay: '0.4s' }}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={media.heroDetail}
                alt="Event host portrait detail"
                fill
                sizes="224px"
                className="object-cover object-[60%_42%]"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs font-light text-stone-500">
              <CalendarDays className="size-3.5 text-[#b8893b]" />
              {t.hero.detailNote}
            </div>
          </div>

          <div className="absolute right-2 top-16 flex w-44 items-center gap-3 border border-white/80 bg-white/90 p-3 shadow-[0_20px_70px_rgba(87,83,78,0.14)] backdrop-blur-xl reveal-up sm:w-52" style={{ animationDelay: '0.6s' }}>
            <div className="flex size-11 items-center justify-center rounded-full bg-stone-950 text-white">
              <Play className="ml-0.5 size-4 fill-white" />
            </div>
            <div>
              <p className="text-sm font-light text-stone-950">{t.hero.videoNote}</p>
              <p className="mt-1 text-xs font-light text-stone-500">{t.hero.videoSubNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
