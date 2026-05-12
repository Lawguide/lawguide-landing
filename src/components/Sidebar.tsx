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
  document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
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
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-60 bg-white flex-col z-50 border-r border-gray-200 shadow-sm">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <a href="/" className="flex items-center gap-2.5">
            {/* Scale icon matching the app */}
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M3 8l9-5 9 5M5 11l-2 7h4l-2-7zM19 11l-2 7h4l-2-7zM3 18h18" />
              </svg>
            </div>
            <div>
              <div className="text-gray-900 font-black text-base uppercase tracking-tight leading-none">Lawguide</div>
              <div className="text-blue-600 font-mono text-[10px] tracking-widest">.lk</div>
            </div>
          </a>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest">{t.nav.stillBuilding}</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 flex flex-col gap-0.5">
          {navLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-gray-500 hover:text-gray-900 hover:bg-gray-50 font-mono text-xs uppercase tracking-widest px-3 py-2.5 rounded-sm transition-colors duration-150"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://app.lawguide.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block bg-blue-600 text-white text-center font-black text-xs uppercase tracking-widest py-3 rounded-sm hover:bg-blue-700 transition-colors duration-150 shadow-sm"
          >
            {t.nav.tryFree}
          </a>
        </nav>

        {/* Language switcher */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex gap-1">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`flex-1 font-mono text-xs uppercase tracking-widest py-1.5 rounded-sm border transition-colors duration-150 ${
                  language === l.code
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'text-gray-400 border-gray-200 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-4 h-14 shadow-sm">
        <a href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v18M3 8l9-5 9 5M5 11l-2 7h4l-2-7zM19 11l-2 7h4l-2-7zM3 18h18" />
            </svg>
          </div>
          <span className="font-black text-gray-900 uppercase tracking-tight text-base">Lawguide<span className="text-blue-600">.lk</span></span>
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="font-mono text-xs uppercase tracking-widest border border-gray-300 px-3 py-1.5 rounded-sm hover:bg-gray-50 text-gray-600 transition-colors"
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
            transition={{ duration: 0.15 }}
            className="md:hidden fixed top-14 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-md px-4 py-5 flex flex-col gap-3"
          >
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-left text-gray-600 font-mono uppercase tracking-widest text-sm border-b border-gray-100 pb-3 hover:text-gray-900"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://app.lawguide.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white text-center font-black uppercase text-xs py-3 rounded-sm tracking-widest hover:bg-blue-700"
            >
              {t.nav.tryFree}
            </a>
            <div className="flex gap-1.5 pt-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLanguage(l.code); setMobileOpen(false); }}
                  className={`flex-1 font-mono text-xs uppercase tracking-widest py-1.5 rounded-sm border transition-colors ${
                    language === l.code
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'text-gray-400 border-gray-200'
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
