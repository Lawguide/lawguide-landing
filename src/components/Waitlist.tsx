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
    // EmailJS or similar will be wired here later
    // For now just simulate success
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="waitlist" className="border-b-2 border-black bg-black">
      <div className="grid md:grid-cols-2 min-h-[360px]">

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center px-8 lg:px-12 py-16 border-b-2 md:border-b-0 md:border-r-2 border-white/10"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400">{t.hero.stillBuilding}</span>
          </div>
          <h2 className="font-black text-white uppercase text-4xl md:text-5xl leading-tight mb-4">
            {t.waitlist.title}
          </h2>
          <p className="font-mono text-sm text-white/50 leading-relaxed max-w-sm">
            {t.waitlist.body}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center px-8 lg:px-12 py-16"
        >
          {submitted ? (
            <div className="border-2 border-[#22c55e] p-6" style={{ boxShadow: '4px 4px 0 0 #22c55e' }}>
              <div className="font-black text-[#22c55e] uppercase text-sm tracking-widest mb-2">✓ You&apos;re in.</div>
              <div className="font-mono text-white/60 text-sm">{t.waitlist.success}</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.waitlist.placeholder}
                className="font-mono text-sm bg-white text-black border-2 border-white px-4 py-3 placeholder:text-black/30 focus:outline-none focus:border-[#22c55e]"
              />
              <button
                type="submit"
                disabled={loading}
                className="font-black uppercase text-xs tracking-widest bg-[#22c55e] text-black px-6 py-4 border-2 border-[#22c55e] hover:bg-white hover:text-black hover:border-white transition-colors duration-150 disabled:opacity-60"
                style={{ boxShadow: '4px 4px 0 0 rgba(255,255,255,0.2)' }}
              >
                {loading ? '...' : t.waitlist.cta}
              </button>
              <p className="font-mono text-xs text-white/30 uppercase tracking-wider">{t.waitlist.note}</p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
