'use client';

import { Button } from '@/components/ui/button';
import { media } from '@/lib/site';
import { Play, Camera } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

export default function MediaShowcase() {
  const { t } = useLanguage();

  const photos = [
    {
      label: t.media.photoLabel1,
      image: media.hero,
      position: 'object-[58%_25%]',
    },
    {
      label: t.media.photoLabel2,
      image: media.portrait,
      position: 'object-[62%_35%]',
    },
    {
      label: t.media.photoLabel3,
      image: media.editorial,
      position: 'object-[35%_65%]',
    },
    {
      label: t.media.photoLabel4,
      image: media.galleryOne,
      position: 'object-[50%_15%]',
    },
  ];

  return (
    <section id="video" className="bg-[#fdfcfb] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-light uppercase tracking-wider text-stone-500 shadow-sm">
            {t.media.badge}
          </div>
          <h2 className="mb-6 font-heading text-4xl font-light text-stone-950 sm:text-5xl lg:text-6xl">
            {t.media.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-stone-500">
            {t.media.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="group relative overflow-hidden bg-stone-100 shadow-[0_32px_100px_rgba(0,0,0,0.08)] transition-all duration-700">
            <div className="relative aspect-video">
              <Image
                src={media.hero}
                alt="Main promotional video"
                fill
                className="media-zoom object-cover opacity-90 transition-all duration-700 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="size-20 rounded-full bg-white/95 text-stone-950 shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-white"
                >
                  <Play className="ml-1 size-8 fill-stone-950" />
                </Button>
              </div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs font-light uppercase tracking-[0.2em] opacity-80">{t.media.videoMainTitle}</p>
                <p className="mt-2 text-xl font-light">{t.media.videoMainDesc}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="group relative flex-1 overflow-hidden bg-stone-50 shadow-md">
              <div className="relative h-full min-h-[220px]">
                <Image
                  src={media.galleryOne}
                  alt="Live performance clip"
                  fill
                  className="object-cover object-[50%_15%] opacity-85 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-stone-950/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Play className="ml-0.5 size-4 fill-white text-white" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-[10px] font-light uppercase tracking-widest opacity-70">{t.media.videoLabel1}</p>
                  <p className="mt-1 text-sm font-light">{t.media.videoNote1}</p>
                </div>
              </div>
            </div>

            <div className="group relative flex-1 overflow-hidden bg-stone-50 shadow-md">
              <div className="relative h-full min-h-[220px]">
                <Image
                  src={media.heroDetail}
                  alt="Atmospheric event video"
                  fill
                  className="object-cover object-[60%_40%] opacity-85 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-stone-950/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Play className="ml-0.5 size-4 fill-white text-white" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-[10px] font-light uppercase tracking-widest opacity-70">{t.media.videoLabel2}</p>
                  <p className="mt-1 text-sm font-light">{t.media.videoNote2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 border-b border-stone-200 pb-10 md:flex-row md:items-center">
            <div className="max-w-md">
              <h3 className="font-heading text-3xl font-light text-stone-950">{t.media.momentsTitle}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-stone-500">
                {t.media.momentsDesc}
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-light text-stone-950">150+</p>
                <p className="mt-1 text-[10px] font-light uppercase tracking-widest text-stone-400">{t.stats.events}</p>
              </div>
              <div>
                <p className="text-3xl font-light text-stone-950">8+</p>
                <p className="mt-1 text-[10px] font-light uppercase tracking-widest text-stone-400">{t.stats.experience}</p>
              </div>
              <div>
                <p className="text-3xl font-light text-stone-950">100%</p>
                <p className="mt-1 text-[10px] font-light uppercase tracking-widest text-stone-400">{t.stats.clients}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {photos.map((photo, index) => (
              <div key={index} className="group relative aspect-[4/5] overflow-hidden bg-stone-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                <Image
                  src={photo.image}
                  alt={photo.label}
                  fill
                  className={`object-cover transition-transform duration-1000 group-hover:scale-110 ${photo.position}`}
                />
                <div className="absolute inset-0 bg-stone-950/0 transition-colors duration-500 group-hover:bg-stone-950/20" />
                <div className="absolute bottom-0 left-0 w-full translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-light uppercase tracking-[0.2em] text-white/90">
                      {photo.label}
                    </p>
                    <Camera className="size-3.5 text-white/70" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
