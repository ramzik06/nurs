'use client';

import Link from 'next/link';
import { Camera, Languages, MessageCircle } from 'lucide-react';
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
    <nav className="fixed top-0 z-50 w-full border-b border-stone-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-2xl font-medium text-stone-950">
          Nursultan
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-light text-stone-500 transition-colors duration-300 hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'RU' ? 'KZ' : 'RU')}
            className="mr-2 flex h-9 items-center gap-2 rounded-full border border-stone-200 bg-white px-3 text-xs font-medium text-stone-600 transition-all hover:bg-stone-50 hover:text-stone-950"
          >
            <Languages className="size-3.5" />
            {language}
          </button>
          
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-9 items-center justify-center rounded-full text-stone-500 transition-all duration-300 hover:bg-stone-100 hover:text-stone-950"
          >
            <Camera className="size-4" />
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex size-9 items-center justify-center rounded-full text-stone-500 transition-all duration-300 hover:bg-stone-100 hover:text-stone-950"
          >
            <MessageCircle className="size-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
