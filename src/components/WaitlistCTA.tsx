import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function WaitlistCTA() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // EmailJS will be wired here
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 600);
  };

  return (
    <section id="waitlist" className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="px-6 sm:px-8 lg:px-16 py-14 sm:py-20 max-w-3xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest">{t.hero.stillBuilding}</span>
          </div>

          <h2 className="font-black text-gray-900 dark:text-white uppercase text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            {t.waitlist.title}
          </h2>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mx-auto mb-10">
            {t.waitlist.body}
          </p>

          {submitted ? (
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-8 py-6 inline-flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wide">You&apos;re in.</div>
                <div className="font-mono text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.waitlist.success}</div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.waitlist.placeholder}
                className="w-full font-mono text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3.5 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full font-black uppercase text-xs tracking-widest bg-blue-600 text-white px-6 py-3.5 rounded-lg hover:bg-blue-700 transition-colors duration-150 disabled:opacity-60 shadow-sm"
              >
                {loading ? '...' : t.waitlist.cta}
              </button>
            </form>
          )}

          <p className="font-mono text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-5">{t.waitlist.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
