'use client';

import { contact } from '@/lib/site';
import { Camera, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-heading text-3xl font-light text-[#8f6426]">Event Host</h3>
            <p className="max-w-sm text-sm font-light leading-7 text-stone-500">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-light uppercase text-stone-400">{t.footer.socialLinks}</h4>
            <ul className="space-y-3 text-sm font-light text-stone-500">
              <li>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-stone-950">
                  Instagram
                </a>
              </li>
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-stone-950">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-stone-950">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-light uppercase text-stone-400">{t.footer.contact}</h4>
            <div className="flex gap-4">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-[#d7c19d]/70 text-[#b8893b] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d7c19d] hover:bg-[#fffaf2]"
              >
                <Camera className="size-4" />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-[#c7d4c4] text-[#7f9a86] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eef3ec]"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href={contact.phoneHref}
                aria-label="Phone"
                className="flex size-10 items-center justify-center rounded-full border border-[#e1c2bd] text-[#c9958e] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f9ecea]"
              >
                <Phone className="size-4" />
              </a>
            </div>
            <p className="text-sm font-light text-stone-500">{contact.phoneDisplay}</p>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm font-light text-stone-400 md:flex-row">
            <p>&copy; {currentYear} Event Host. {t.footer.rights}.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-stone-950">
                {t.footer.privacy}
              </a>
              <a href="#" className="transition-colors hover:text-stone-950">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
