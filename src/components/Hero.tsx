import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: 'easeOut' } }),
};

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return <span className={`inline-block w-0.5 h-3.5 bg-blue-600 ml-0.5 align-middle transition-opacity ${on ? 'opacity-100' : 'opacity-0'}`} />;
}

// Mirrors the app's ChatHome input + CitationSidePanel card style
function ChatMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-[420px] overflow-hidden">
      {/* Navbar strip — matches app's top bar feel */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2.5">
        <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18M3 8l9-5 9 5M5 11l-2 7h4l-2-7zM19 11l-2 7h4l-2-7zM3 18h18" />
          </svg>
        </div>
        <span className="text-gray-700 font-mono text-xs uppercase tracking-widest">Legal Assistant</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">Online</span>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* User message — matches app's chat bubble */}
        <div className="flex flex-col items-end gap-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">You</span>
          <div className="bg-gray-900 text-white text-xs font-mono leading-relaxed px-3.5 py-2.5 rounded-lg max-w-[85%]">
            What are my rights as a tenant in Sri Lanka?
          </div>
        </div>

        {/* AI response — matches app's response area */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Lawguide AI</span>
          <div className="bg-gray-50 border border-gray-200 text-gray-800 text-xs font-mono leading-relaxed px-3.5 py-2.5 rounded-lg max-w-[92%]">
            Under the Rent Act No. 7 of 1972, tenants are protected from arbitrary eviction. Your landlord must give at least 3 months&apos; notice...
          </div>

          {/* Citation card — matches CitationSidePanel style */}
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1.5 max-w-[92%]">
            <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M3 8l9-5 9 5M5 11l-2 7h4l-2-7zM19 11l-2 7h4l-2-7zM3 18h18" />
              </svg>
            </div>
            <span className="font-mono text-[10px] text-blue-700 leading-tight">Rent Act No. 7 of 1972 — §14(2)</span>
          </div>
        </div>

        {/* Input — matches app's chat input */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3.5 py-2.5 mt-1 bg-white">
          <span className="font-mono text-xs text-gray-300 flex-1">Ask a legal question...</span>
          <Cursor />
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen border-b border-gray-200 overflow-hidden pt-14 md:pt-0 bg-white">
      <div className="relative z-10 grid md:grid-cols-2 min-h-screen">

        {/* Left — copy */}
        <div className="flex flex-col justify-center px-8 lg:px-12 py-16 md:py-24 border-b-2 md:border-b-0 md:border-r border-gray-200">

          {/* Badge */}
          <motion.div
            initial="hidden" animate="show" custom={0.05} variants={fadeUp}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 mb-8 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="font-mono text-xs text-blue-700 uppercase tracking-widest">{t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6">
            <motion.div initial="hidden" animate="show" custom={0.15} variants={fadeUp}
              className="font-black text-gray-900 uppercase leading-none text-5xl md:text-6xl lg:text-[4rem]">
              {t.hero.titleLine1}
            </motion.div>
            <motion.div initial="hidden" animate="show" custom={0.22} variants={fadeUp}
              className="font-black text-gray-900 uppercase leading-none text-5xl md:text-6xl lg:text-[4rem]">
              {t.hero.titleLine2}
            </motion.div>
            <motion.div initial="hidden" animate="show" custom={0.30} variants={fadeUp}
              className="font-black text-blue-600 uppercase leading-none text-5xl md:text-6xl lg:text-[4rem]">
              {t.hero.titleAccent}
            </motion.div>
          </div>

          {/* Body */}
          <motion.p initial="hidden" animate="show" custom={0.42} variants={fadeUp}
            className="font-mono text-sm leading-relaxed text-gray-500 max-w-sm mb-10">
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div initial="hidden" animate="show" custom={0.52} variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="https://app.lawguide.lk/en/register"
              target="_blank" rel="noopener noreferrer"
              className="font-black uppercase text-xs tracking-widest bg-blue-600 text-white px-6 py-3.5 rounded-lg hover:bg-blue-700 transition-colors duration-150 shadow-sm text-center"
            >
              {t.hero.ctaPrimary}
            </a>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-black uppercase text-xs tracking-widest bg-white text-gray-700 px-6 py-3.5 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-150 text-center"
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>

          {/* Trust items */}
          <motion.div initial="hidden" animate="show" custom={0.62} variants={fadeUp}
            className="flex flex-wrap gap-x-5 gap-y-2">
            {t.hero.trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — mockup */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center justify-center px-8 py-16 bg-gray-50 relative"
        >
          <div className="relative z-10 w-full flex justify-center">
            <ChatMockup />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
