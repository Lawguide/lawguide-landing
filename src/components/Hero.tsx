import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

function SpeedLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <line
          key={i}
          x1={`${(i / 18) * 100}%`}
          y1="0"
          x2={`${(i / 18) * 100 + 8}%`}
          y2="100%"
          stroke="#000"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function ChatMockup() {
  const messages = [
    { role: 'user', text: 'What are my rights as a tenant in Sri Lanka?' },
    {
      role: 'ai',
      text: 'Under the Rent Act No. 7 of 1972, tenants are protected from arbitrary eviction. Your landlord must...',
      citation: 'Rent Act No. 7 of 1972 — §14(2)',
    },
  ];

  return (
    <div
      className="bg-white border-2 border-black w-full max-w-md"
      style={{ boxShadow: '8px 8px 0 0 #000' }}
    >
      {/* Terminal bar */}
      <div className="bg-black px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
        <span className="text-white font-mono text-xs uppercase tracking-widest">
          lawguide — legal assistant
        </span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col gap-1 ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">
              {m.role === 'user' ? 'You' : 'Lawguide AI'}
            </span>
            <div
              className={`font-mono text-xs leading-relaxed px-3 py-2 border-2 border-black max-w-[85%] ${
                m.role === 'user' ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              {m.text}
            </div>
            {m.citation && (
              <div className="font-mono text-[10px] text-[#22c55e] border border-[#22c55e] px-2 py-1 uppercase tracking-wider">
                {m.citation}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center gap-2 border-2 border-black px-3 py-2 mt-1">
          <span className="font-mono text-xs text-black/30 flex-1">Ask a legal question...</span>
          <div className="w-2 h-4 bg-[#22c55e] animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen border-b-2 border-black overflow-hidden pt-14 md:pt-0">
      <SpeedLines />

      <div className="relative z-10 grid md:grid-cols-2 gap-0 min-h-screen">
        {/* Left — copy */}
        <div className="flex flex-col justify-center px-8 py-16 md:py-24 border-b-2 md:border-b-0 md:border-r-2 border-black">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 border-2 border-black px-3 py-1 mb-8 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="font-mono text-xs uppercase tracking-widest">Sri Lanka&apos;s Legal AI</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-black text-black uppercase leading-none text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            AI Legal
            <br />
            Research
            <br />
            <span className="text-[#22c55e]">For Sri Lanka.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.35 }}
            className="font-mono text-sm leading-relaxed text-black/70 max-w-sm mb-10"
          >
            RAG-powered answers over 1700+ Acts, 26,000+ case law documents, and Supreme Court judgments.
            In English, Sinhala, and Tamil. Instant. Cited. Accurate.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://app.lawguide.lk/en/register"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black uppercase text-sm tracking-widest bg-black text-white px-6 py-4 border-2 border-black hover:bg-[#22c55e] hover:text-black hover:border-[#22c55e] transition-colors duration-150"
              style={{ boxShadow: '4px 4px 0 0 #22c55e' }}
            >
              Start Free — 5 Queries/Day
            </a>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-black uppercase text-sm tracking-widest bg-white text-black px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-150"
              style={{ boxShadow: '4px 4px 0 0 #000' }}
            >
              View Plans
            </button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {['No card required', '1704 Acts indexed', '26K+ case law docs'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-[#22c55e] font-black">—</span>
                <span className="font-mono text-xs text-black/50 uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center px-8 py-16 bg-[#f5f5f5] relative"
        >
          <SpeedLines />
          <div className="relative z-10">
            <ChatMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
