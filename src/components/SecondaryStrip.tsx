import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function SecondaryStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-900 border-b border-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {t.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`px-8 py-10 ${i < 3 ? 'border-r border-gray-800' : ''} ${i < 2 ? 'border-b md:border-b-0 border-gray-800' : ''}`}
          >
            <div className="font-black text-blue-400 text-4xl leading-none mb-2">{s.value}</div>
            <div className="font-black text-white uppercase text-xs tracking-widest mb-1">{s.label}</div>
            <div className="font-mono text-gray-500 text-xs">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
