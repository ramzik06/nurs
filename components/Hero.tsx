'use client';

import { Button } from '@/components/ui/button';
import { contact, media } from '@/lib/site';
import { MessageCircle, Play, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="bg-white px-5 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32 lg:pt-44"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="animate-fade-up">
          <h1 className="font-heading text-[56px] font-light leading-[0.9] text-stone-950 sm:text-[80px] lg:text-[108px]">
            {t.hero.title}
          </h1>

          <div className="mt-7 h-px w-14 bg-[#9a6a25]" />

          <p className="mt-7 max-w-sm text-[15px] leading-[1.85] text-stone-600">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 w-full rounded-none bg-stone-950 px-8 text-[11px] font-light uppercase tracking-[0.15em] text-white shadow-none transition-colors duration-200 hover:bg-stone-800 sm:w-auto"
              onClick={() =>
                window.open(contact.whatsapp, '_blank', 'noopener,noreferrer')
              }
            >
              <MessageCircle className="mr-2.5 size-3.5" />
              {t.hero.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-none border-stone-200 bg-transparent px-8 text-[11px] font-light uppercase tracking-[0.15em] text-stone-600 shadow-none transition-colors duration-200 hover:bg-stone-50 hover:text-stone-950 sm:w-auto"
              onClick={() => (window.location.hash = 'video')}
            >
              <Play className="mr-2.5 size-3.5" />
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        <div className="relative min-h-[420px] sm:min-h-[540px] lg:min-h-[680px]">
          <div className="absolute inset-0 overflow-hidden reveal-right">
            <Image
              src={media.hero}
              alt="Professional event host"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[58%_20%]"
              priority
            />
          </div>

          {/* Bottom-left card — hidden on small phones, visible from sm */}
          <div
            className="absolute bottom-6 left-4 z-10 hidden w-44 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.14)] reveal-up sm:block sm:w-52 sm:p-3.5"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={media.heroDetail}
                alt="Event host portrait detail"
                fill
                sizes="208px"
                className="object-cover object-[60%_42%]"
              />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <CalendarDays className="size-3 text-[#9a6a25]" />
              <span className="text-[9px] font-light uppercase tracking-[0.15em] text-stone-400">
                {t.hero.detailNote}
              </span>
            </div>
          </div>

          {/* Top-right card — hidden on small phones, visible from sm */}
          <div
            className="absolute right-4 top-8 z-10 hidden w-44 items-center gap-3 bg-white/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm reveal-up sm:flex sm:w-48 sm:p-3.5"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="flex size-9 shrink-0 items-center justify-center bg-stone-950 sm:size-10">
              <Play className="ml-0.5 size-3 fill-white sm:size-3.5" />
            </div>
            <div>
              <p className="text-[11px] font-light text-stone-950">{t.hero.videoNote}</p>
              <p className="mt-0.5 text-[9px] font-light uppercase tracking-[0.12em] text-stone-400">
                {t.hero.videoSubNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
