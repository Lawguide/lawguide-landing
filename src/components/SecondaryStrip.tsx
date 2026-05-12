import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '1704+',
    label: 'Acts & Regulations',
    sub: 'All Sri Lankan legislation indexed',
  },
  {
    value: '26K+',
    label: 'Case Law Docs',
    sub: 'Supreme Court & Court of Appeal',
  },
  {
    value: '3',
    label: 'Languages',
    sub: 'English · Sinhala · Tamil',
  },
  {
    value: '<2s',
    label: 'Response Time',
    sub: 'Powered by Gemini 2.0 Flash',
  },
];

export default function SecondaryStrip() {
  return (
    <section className="border-b-2 border-black bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`px-8 py-10 border-black ${
              i < stats.length - 1
                ? 'border-r-2 border-b-2 md:border-b-0'
                : ''
            } ${i === 1 ? 'border-b-2 md:border-b-0' : ''}`}
          >
            <div className="font-black text-[#22c55e] text-4xl leading-none mb-2">{s.value}</div>
            <div className="font-black text-white uppercase text-sm tracking-wide mb-1">{s.label}</div>
            <div className="font-mono text-white/40 text-xs">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
