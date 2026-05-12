import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme, ThemeMode } from '../contexts/ThemeContext';
import { Language } from '../types/localization';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'si', label: 'SI' },
  { code: 'ta', label: 'TA' },
];

const scrollTo = (href: string) => {
  document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
};

function SunIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

const THEMES: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
  { mode: 'light', label: 'Light', icon: <SunIcon /> },
  { mode: 'dark',  label: 'Dark',  icon: <MoonIcon /> },
  { mode: 'system',label: 'Auto',  icon: <SystemIcon /> },
];

export default function Sidebar() {
  const { language, setLanguage, t } = useLanguage();
  const { mode, setMode, dark } = useTheme();
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
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-60 bg-white dark:bg-gray-900 flex-col z-50 border-r border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-200">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M3 8l9-5 9 5M5 11l-2 7h4l-2-7zM19 11l-2 7h4l-2-7zM3 18h18" />
              </svg>
            </div>
            <div>
              <div className="text-gray-900 dark:text-white font-black text-base uppercase tracking-tight leading-none">Lawguide</div>
              <div className="text-blue-600 font-mono text-[10px] tracking-widest">.lk</div>
            </div>
          </a>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-amber-600 dark:text-amber-400 font-mono text-[10px] uppercase tracking-widest">{t.nav.stillBuilding}</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 flex flex-col gap-0.5">
          {navLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-mono text-xs uppercase tracking-widest px-3 py-2.5 rounded-sm transition-colors duration-150"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://app.lawguide.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block bg-blue-600 text-white text-center font-black text-xs uppercase tracking-widest py-3 rounded-lg hover:bg-blue-700 transition-colors duration-150 shadow-sm"
          >
            {t.nav.tryFree}
          </a>
        </nav>

        {/* Bottom controls */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
          {/* Theme selector — 3 modes */}
          <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
            {THEMES.map(({ mode: m, label, icon }) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                title={label}
                className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-widest transition-colors duration-150 ${
                  mode === m
                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {icon}
                <span className="hidden lg:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Language switcher */}
          <div className="flex gap-1">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`flex-1 font-mono text-xs uppercase tracking-widest py-1.5 rounded-lg border transition-colors duration-150 ${
                  language === l.code
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 h-14 shadow-sm transition-colors duration-200">
        <a href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v18M3 8l9-5 9 5M5 11l-2 7h4l-2-7zM19 11l-2 7h4l-2-7zM3 18h18" />
            </svg>
          </div>
          <span className="font-black text-gray-900 dark:text-white uppercase tracking-tight text-base">Lawguide<span className="text-blue-600">.lk</span></span>
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const next: ThemeMode = mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light';
              setMode(next);
            }}
            title={`Theme: ${mode}`}
            className="p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {mode === 'light' ? <SunIcon /> : mode === 'dark' ? <MoonIcon /> : <SystemIcon />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="font-mono text-xs uppercase tracking-widest border border-gray-300 dark:border-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
          >
            {mobileOpen ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed top-14 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-md px-4 py-5 flex flex-col gap-3"
          >
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-left text-gray-600 dark:text-gray-300 font-mono uppercase tracking-widest text-sm border-b border-gray-100 dark:border-gray-800 pb-3 hover:text-gray-900 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://app.lawguide.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white text-center font-black uppercase text-xs py-3 rounded-lg tracking-widest hover:bg-blue-700"
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
                      : 'text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700'
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
