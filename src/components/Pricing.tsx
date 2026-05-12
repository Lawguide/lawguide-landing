import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const APP = 'https://app.lawguide.lk';

const PLAN_IDS = ['free', 'student', 'professional', 'firm'] as const;
type PlanId = typeof PLAN_IDS[number];

const PRICES: Record<PlanId, { monthly: number; annual: number; annualTotal: number }> = {
  free:         { monthly: 0,    annual: 0,     annualTotal: 0 },
  student:      { monthly: 1500, annual: 1250,  annualTotal: 15000 },
  professional: { monthly: 4500, annual: 3750,  annualTotal: 45000 },
  firm:         { monthly: 9000, annual: 7500,  annualTotal: 90000 },
};

const HREFS: Record<PlanId, string> = {
  free:         `${APP}/en/register`,
  student:      `${APP}/en/register?plan=student`,
  professional: `${APP}/en/register?plan=professional`,
  firm:         `${APP}/en/register?plan=firm`,
};

export default function Pricing() {
  const { t } = useLanguage();
  const [annual, setAnnual] = useState(false);
  const p = t.pricing;

  return (
    <section id="pricing" className="bg-gray-50 border-b border-gray-200">

      {/* Header */}
      <div className="px-8 lg:px-12 py-16 border-b border-gray-200 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-6">
            {p.tag}
          </span>
          <h2 className="font-black text-gray-900 uppercase text-4xl md:text-5xl leading-tight mb-3">
            {p.title}<br />{p.titleLine2}
          </h2>
          <p className="font-mono text-sm text-gray-500 max-w-md mb-8">{p.body}</p>

          {/* Billing toggle */}
          <div className="inline-flex bg-gray-100 rounded-xl p-1 border border-gray-200">
            <button
              onClick={() => setAnnual(false)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2 rounded-lg transition-all duration-150 ${
                !annual ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {p.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-150 ${
                annual ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {p.annual}
              <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full tracking-wide">
                {p.annualBadge}
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {PLAN_IDS.map((id, i) => {
          const plan = p.plans[id];
          const price = annual ? PRICES[id].annual : PRICES[id].monthly;
          const annualTotal = PRICES[id].annualTotal;
          const isPopular = id === 'student';

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`flex flex-col bg-white rounded-2xl border shadow-sm overflow-hidden transition-shadow hover:shadow-md ${
                isPopular
                  ? 'border-blue-500 ring-2 ring-blue-500 ring-offset-2'
                  : 'border-gray-200'
              }`}
            >
              {/* Popular ribbon */}
              {isPopular && (
                <div className="bg-blue-600 text-white text-center font-black text-[10px] uppercase tracking-widest py-2">
                  ★ {p.popular}
                </div>
              )}

              {/* Plan header */}
              <div className="px-5 pt-6 pb-5 border-b border-gray-100">
                <div className="font-black uppercase text-sm tracking-wide text-gray-900 mb-1">
                  {plan.name}
                </div>
                <p className="font-mono text-xs text-gray-500 mb-5 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                {price === 0 ? (
                  <div className="font-black text-4xl text-gray-900 leading-none mb-1">Free</div>
                ) : (
                  <div className="mb-1">
                    <div className="flex items-end gap-1">
                      <span className="font-mono text-xs text-gray-400 self-start mt-1.5">LKR</span>
                      <span className="font-black text-4xl text-gray-900 leading-none">{price.toLocaleString()}</span>
                      <span className="font-mono text-xs text-gray-400 mb-0.5">/mo</span>
                    </div>
                    {annual && annualTotal > 0 && (
                      <div className="font-mono text-[10px] text-gray-400 mt-1">
                        LKR {annualTotal.toLocaleString()} billed annually
                      </div>
                    )}
                  </div>
                )}

                <div className="font-mono text-xs text-blue-600 mt-2">
                  {plan.queries}
                </div>
              </div>

              {/* Features + CTA */}
              <div className="flex-1 px-5 py-5 flex flex-col">
                <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-mono text-xs text-gray-600 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={HREFS[id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-black uppercase text-xs tracking-widest py-3.5 rounded-lg transition-all duration-150 ${
                    isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                      : 'bg-gray-900 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </a>

                {id === 'free' && (
                  <p className="font-mono text-[10px] text-center mt-3 uppercase tracking-wider text-gray-400">
                    {p.noCard}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="px-8 pb-8">
        <p className="font-mono text-xs text-gray-400">{p.footerNote}</p>
      </div>
    </section>
  );
}
