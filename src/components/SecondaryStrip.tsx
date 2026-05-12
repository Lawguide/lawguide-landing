import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function SecondaryStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {t.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`px-6 sm:px-8 py-8 sm:py-10 border-gray-200 dark:border-gray-800
              ${i % 2 === 0 ? 'border-r' : ''}
              ${i < 2 ? 'border-b md:border-b-0' : ''}
              ${i === 3 ? 'md:border-r-0' : 'md:border-r'}`}
          >
            <div className="font-black text-blue-600 dark:text-blue-400 text-3xl sm:text-4xl leading-none mb-2">{s.value}</div>
            <div className="font-black text-gray-900 dark:text-white uppercase text-[10px] sm:text-xs tracking-widest mb-1">{s.label}</div>
            <div className="font-mono text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
