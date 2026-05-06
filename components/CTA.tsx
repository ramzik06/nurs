'use client';

import { Button } from '@/components/ui/button';
import { contact } from '@/lib/site';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-stone-950 px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-[9px] font-light uppercase tracking-[0.22em] text-stone-500">
          {t.cta.badge}
        </p>
        <h2 className="font-heading text-[40px] font-light leading-[0.95] tracking-[-0.02em] text-white sm:text-[56px] md:text-[72px] lg:text-[88px]">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-8 max-w-sm text-sm font-light leading-8 text-stone-400">
          {t.cta.description}
        </p>

        <div className="mt-12">
          <Button
            size="lg"
            className="h-12 rounded-none border border-white/20 bg-transparent px-10 text-[11px] font-light uppercase tracking-[0.15em] text-white shadow-none transition-colors duration-200 hover:bg-white hover:text-stone-950"
            onClick={() =>
              window.open(contact.whatsapp, '_blank', 'noopener,noreferrer')
            }
          >
            <MessageCircle className="mr-2.5 size-3.5" />
            {t.cta.buttonWhatsapp}
          </Button>
        </div>
      </div>
    </section>
  );
}
