import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } }),
};

function SpeedLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" aria-hidden>
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={i} x1={`${(i / 20) * 100}%`} y1="0" x2={`${(i / 20) * 100 + 6}%`} y2="100%" stroke="#000" strokeWidth="1" />
      ))}
    </svg>
  );
}

// Animated typing cursor
function Cursor() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return <span className={`inline-block w-0.5 h-3.5 bg-[#22c55e] ml-0.5 align-middle ${visible ? 'opacity-100' : 'opacity-0'}`} />;
}

function ChatMockup() {
  return (
    <div className="bg-white border-2 border-black w-full max-w-[420px]" style={{ boxShadow: '8px 8px 0 0 #000' }}>
      {/* Terminal bar */}
      <div className="bg-black px-4 py-2.5 flex items-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
        <span className="text-white font-mono text-xs uppercase tracking-widest">Lawguide — Legal Assistant</span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* User message */}
        <div className="flex flex-col items-end gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">You</span>
          <div className="bg-black text-white font-mono text-xs leading-relaxed px-3.5 py-2.5 border-2 border-black max-w-[85%]">
            What are my rights as a tenant in Sri Lanka?
          </div>
        </div>

        {/* AI response */}
        <div className="flex flex-col items-start gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">Lawguide AI</span>
          <div className="bg-white font-mono text-xs leading-relaxed px-3.5 py-2.5 border-2 border-black max-w-[90%]">
            Under the Rent Act No. 7 of 1972, tenants are protected from arbitrary eviction. Your landlord must give at least 3 months&apos; notice...
          </div>
          <div className="font-mono text-[10px] text-[#22c55e] border border-[#22c55e] px-2 py-1 uppercase tracking-wider">
            Rent Act No. 7 of 1972 — §14(2)
          </div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 border-2 border-black px-3.5 py-2.5 mt-1">
          <span className="font-mono text-xs text-black/25 flex-1">Ask a legal question...</span>
          <Cursor />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen border-b-2 border-black overflow-hidden pt-14 md:pt-0">
      <div className="relative z-10 grid md:grid-cols-2 min-h-screen">

        {/* Left — copy */}
        <div className="flex flex-col justify-center px-8 lg:px-12 py-16 md:py-24 border-b-2 md:border-b-0 md:border-r-2 border-black">

          {/* Status badge */}
          <motion.div
            initial="hidden" animate="show" custom={0.05} variants={fadeUp}
            className="inline-flex items-center gap-2 border-2 border-black px-3 py-1.5 mb-8 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest">{t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6">
            <motion.div initial="hidden" animate="show" custom={0.15} variants={fadeUp}
              className="font-black text-black uppercase leading-none text-5xl md:text-6xl lg:text-7xl">
              {t.hero.titleLine1}
            </motion.div>
            <motion.div initial="hidden" animate="show" custom={0.22} variants={fadeUp}
              className="font-black text-black uppercase leading-none text-5xl md:text-6xl lg:text-7xl">
              {t.hero.titleLine2}
            </motion.div>
            <motion.div initial="hidden" animate="show" custom={0.30} variants={fadeUp}
              className="font-black text-[#22c55e] uppercase leading-none text-5xl md:text-6xl lg:text-7xl">
              {t.hero.titleAccent}
            </motion.div>
          </div>

          {/* Body */}
          <motion.p initial="hidden" animate="show" custom={0.42} variants={fadeUp}
            className="font-mono text-sm leading-relaxed text-black/60 max-w-sm mb-10">
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div initial="hidden" animate="show" custom={0.52} variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="https://app.lawguide.lk/en/register"
              target="_blank" rel="noopener noreferrer"
              className="font-black uppercase text-xs tracking-widest bg-black text-white px-6 py-4 border-2 border-black hover:bg-[#22c55e] hover:text-black hover:border-[#22c55e] transition-colors duration-150"
              style={{ boxShadow: '4px 4px 0 0 #22c55e' }}
            >
              {t.hero.ctaPrimary}
            </a>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-black uppercase text-xs tracking-widest bg-white text-black px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-150"
              style={{ boxShadow: '4px 4px 0 0 #000' }}
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>

          {/* Trust items */}
          <motion.div initial="hidden" animate="show" custom={0.62} variants={fadeUp}
            className="flex flex-wrap gap-x-5 gap-y-2">
            {t.hero.trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="text-[#22c55e] font-black text-sm">—</span>
                <span className="font-mono text-xs text-black/40 uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — mockup */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="flex items-center justify-center px-8 py-16 bg-[#f5f5f5] relative overflow-hidden"
        >
          <SpeedLines />
          <div className="relative z-10 w-full flex justify-center">
            <ChatMockup />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
