import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Waitlist() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // EmailJS will be wired here — form structure is ready
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="waitlist" className="bg-white border-b border-gray-200">
      <div className="grid md:grid-cols-2">

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center px-8 lg:px-12 py-16 border-b md:border-b-0 md:border-r border-gray-200"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5 mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="font-mono text-xs text-amber-700 uppercase tracking-widest">{t.hero.stillBuilding}</span>
          </div>
          <h2 className="font-black text-gray-900 uppercase text-4xl md:text-5xl leading-tight mb-4">
            {t.waitlist.title}
          </h2>
          <p className="font-mono text-sm text-gray-500 leading-relaxed max-w-sm">
            {t.waitlist.body}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center px-8 lg:px-12 py-16 bg-gray-50"
        >
          {submitted ? (
            <div className="bg-white rounded-xl border border-green-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-black text-green-700 uppercase text-sm tracking-widest">You&apos;re in.</span>
              </div>
              <p className="font-mono text-sm text-gray-500">{t.waitlist.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.waitlist.placeholder}
                className="font-mono text-sm bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="font-black uppercase text-xs tracking-widest bg-blue-600 text-white px-6 py-3.5 rounded-sm hover:bg-blue-700 transition-colors duration-150 shadow-sm disabled:opacity-60"
              >
                {loading ? '...' : t.waitlist.cta}
              </button>
              <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">{t.waitlist.note}</p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
