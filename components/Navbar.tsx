'use client';

import Link from 'next/link';
import { Languages } from 'lucide-react';
import { contact } from '@/lib/site';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#video', label: t.nav.video },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-stone-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-xl font-light tracking-[0.08em] text-stone-950">
          Nursultan
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-light uppercase tracking-[0.18em] text-stone-400 transition-colors duration-300 hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'RU' ? 'KZ' : 'RU')}
            className="flex items-center gap-1.5 text-[10px] font-light uppercase tracking-[0.14em] text-stone-400 transition-colors hover:text-stone-950"
          >
            <Languages className="size-3" />
            {language}
          </button>

          <div className="hidden h-3.5 w-px bg-stone-200 sm:block" />

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[10px] font-light uppercase tracking-[0.14em] text-stone-400 transition-colors hover:text-stone-950 sm:block"
          >
            WhatsApp
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[10px] font-light uppercase tracking-[0.14em] text-stone-400 transition-colors hover:text-stone-950 sm:block"
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}
