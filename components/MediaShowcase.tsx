'use client';

import { media } from '@/lib/site';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

export default function MediaShowcase() {
  const { t } = useLanguage();

  const photos = [
    { label: t.media.photoLabel1, image: media.hero, position: 'object-[58%_25%]' },
    { label: t.media.photoLabel2, image: media.portrait, position: 'object-[62%_35%]' },
    { label: t.media.photoLabel3, image: media.editorial, position: 'object-[35%_65%]' },
    { label: t.media.photoLabel4, image: media.galleryOne, position: 'object-[50%_15%]' },
  ];

  return (
    <section id="video" className="bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-[40px] font-light leading-tight tracking-[-0.01em] text-stone-950 sm:text-[48px] md:text-[60px]">
            {t.media.title}
          </h2>
          <p className="max-w-sm text-[15px] leading-8 text-stone-500 lg:text-right">
            {t.media.description}
          </p>
        </div>

        {/* Featured video / main image */}
        <div className="group relative overflow-hidden bg-stone-100">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/8]">
            <Image
              src={media.hero}
              alt={t.media.videoMainDesc}
              fill
              sizes="100vw"
              priority
              className="media-zoom object-cover object-[58%_25%] brightness-90 transition-all duration-700 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-stone-950/25 transition-colors duration-500 group-hover:bg-stone-950/15" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-14 cursor-pointer items-center justify-center bg-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105 sm:size-16">
                <Play className="ml-0.5 size-5 fill-stone-950 sm:ml-1 sm:size-6" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
              <p className="text-[9px] font-light uppercase tracking-[0.22em] opacity-60">
                {t.media.videoMainTitle}
              </p>
              <p className="mt-2 font-heading text-lg font-light leading-tight sm:text-[22px]">
                {t.media.videoMainDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Photo grid */}
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-100"
            >
              <Image
                src={photo.image}
                alt={photo.label}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photo.position}`}
              />
              <div className="absolute inset-0 bg-stone-950/0 transition-colors duration-500 group-hover:bg-stone-950/20" />
              <div className="absolute bottom-0 left-0 w-full translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[9px] font-light uppercase tracking-[0.2em] text-white/80">
                  {photo.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
