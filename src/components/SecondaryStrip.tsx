import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function SecondaryStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-black border-b-2 border-black">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {t.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`px-8 py-10 ${i < 3 ? 'border-r-2 border-white/10' : ''} ${i < 2 ? 'border-b-2 md:border-b-0 border-white/10' : ''}`}
          >
            <div className="font-black text-[#22c55e] text-4xl leading-none mb-2">{s.value}</div>
            <div className="font-black text-white uppercase text-xs tracking-widest mb-1">{s.label}</div>
            <div className="font-mono text-white/35 text-xs">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
