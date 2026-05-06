'use client';

import { Button } from '@/components/ui/button';
import { contact } from '@/lib/site';
import { MessageCircle, Send } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-y border-[#dccdb5] bg-[linear-gradient(135deg,#fffaf2_0%,#f8f5ef_48%,#eef3ec_100%)] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-light uppercase text-[#b8893b]">{t.cta.badge}</p>
        <h2 className="font-heading text-5xl font-light leading-tight text-stone-950 md:text-7xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-7 text-stone-600">
          {t.cta.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-full bg-stone-950 px-8 text-sm font-light text-white shadow-[0_18px_45_rgba(28,25,23,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
            onClick={() => {
              window.open(contact.whatsapp, '_blank', 'noopener,noreferrer');
            }}
          >
            <MessageCircle className="mr-2 size-4" />
            {t.cta.buttonWhatsapp}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-stone-200 bg-white px-8 text-sm font-light text-stone-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-50 hover:text-stone-950"
            onClick={() => {
              window.open(contact.instagram, '_blank', 'noopener,noreferrer');
            }}
          >
            <Send className="mr-2 size-4" />
            {t.cta.buttonInquiry}
          </Button>
        </div>
      </div>
    </section>
  );
}
