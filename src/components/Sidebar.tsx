import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types/localization';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'si', label: 'SI' },
  { code: 'ta', label: 'TA' },
];

const scrollTo = (href: string) => {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Sidebar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.pricing, href: '#pricing' },
  ];

  const handleNav = (href: string) => {
    scrollTo(href);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-60 bg-black flex-col z-50 border-r-2 border-black">
        {/* Logo */}
        <div className="p-6 border-b-2 border-white/10">
          <a href="/" className="block">
            <div className="text-white font-black text-xl uppercase tracking-tight leading-none">Lawguide</div>
            <div className="text-[#22c55e] font-mono text-xs mt-0.5 tracking-widest">.lk</div>
          </a>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest">{t.nav.stillBuilding}</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-6 flex flex-col gap-0.5">
          {navLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest py-2.5 border-b border-white/10 hover:border-[#22c55e] transition-colors duration-150"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://app.lawguide.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block border-2 border-[#22c55e] text-[#22c55e] text-center font-black text-xs uppercase tracking-widest py-3 hover:bg-[#22c55e] hover:text-black transition-colors duration-150"
            style={{ boxShadow: '4px 4px 0 0 #22c55e' }}
          >
            {t.nav.tryFree}
          </a>
        </nav>

        {/* Language switcher */}
        <div className="p-6 border-t-2 border-white/10">
          <div className="flex gap-1.5">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`flex-1 font-mono text-xs uppercase tracking-widest py-1.5 border transition-colors duration-150 ${
                  language === l.code
                    ? 'bg-[#22c55e] text-black border-[#22c55e]'
                    : 'text-white/40 border-white/20 hover:text-white hover:border-white/40'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black flex items-center justify-between px-4 h-14">
        <a href="/" className="font-black text-black uppercase tracking-tight text-lg leading-none">
          Lawguide<span className="text-[#22c55e]">.lk</span>
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="font-mono text-xs uppercase tracking-widest border-2 border-black px-3 py-1.5 hover:bg-black hover:text-white transition-colors"
        >
          {mobileOpen ? t.nav.close : t.nav.menu}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed top-14 left-0 right-0 z-40 bg-black border-b-2 border-black px-5 py-6 flex flex-col gap-4"
          >
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-left text-white font-mono uppercase tracking-widest text-sm border-b border-white/10 pb-3"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://app.lawguide.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#22c55e] text-[#22c55e] text-center font-black uppercase text-xs py-3 tracking-widest"
            >
              {t.nav.tryFree}
            </a>
            <div className="flex gap-1.5 pt-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLanguage(l.code); setMobileOpen(false); }}
                  className={`flex-1 font-mono text-xs uppercase tracking-widest py-1.5 border transition-colors ${
                    language === l.code
                      ? 'bg-[#22c55e] text-black border-[#22c55e]'
                      : 'text-white/40 border-white/20'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
