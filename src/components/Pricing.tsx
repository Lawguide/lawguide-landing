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

const POPULAR: PlanId = 'student';

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
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500 border border-gray-300 bg-gray-50 px-2.5 py-1 rounded-sm mb-6 inline-block">
            {p.tag}
          </span>
          <h2 className="font-black text-gray-900 uppercase text-4xl md:text-5xl leading-tight mb-4">
            {p.title}<br />{p.titleLine2}
          </h2>
          <p className="font-mono text-sm text-gray-500 max-w-md mb-8">{p.body}</p>

          {/* Billing toggle — matches app button style */}
          <div className="inline-flex bg-gray-100 rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setAnnual(false)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2 rounded-md transition-colors ${
                !annual ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {p.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2 rounded-md flex items-center gap-2 transition-colors ${
                annual ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {p.annual}
              <span className="bg-blue-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded tracking-wide">
                {p.annualBadge}
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Cards grid — matches app's card style */}
      <div className="p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {PLAN_IDS.map((id, i) => {
          const plan = p.plans[id];
          const prices = PRICES[id];
          const price = annual ? prices.annual : prices.monthly;
          const isPopular = id === POPULAR;
          const isAccent = id === 'professional';

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`flex flex-col bg-white rounded-xl border shadow-sm overflow-hidden ${
                isPopular
                  ? 'border-blue-500 ring-2 ring-blue-500 ring-offset-1'
                  : isAccent
                  ? 'border-gray-800 bg-gray-900'
                  : 'border-gray-200'
              }`}
            >
              {/* Popular ribbon */}
              {isPopular && (
                <div className="bg-blue-600 text-white text-center font-black text-[10px] uppercase tracking-widest py-1.5">
                  ★ {p.popular}
                </div>
              )}

              {/* Header */}
              <div className={`px-5 pt-6 pb-5 border-b ${isAccent ? 'border-gray-700' : 'border-gray-100'}`}>
                <div className={`font-black uppercase text-sm tracking-wide mb-1 ${isAccent ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </div>
                <p className={`font-mono text-xs mb-4 ${isAccent ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                {price === 0 ? (
                  <div className={`font-black text-3xl leading-none mb-1 ${isAccent ? 'text-white' : 'text-gray-900'}`}>Free</div>
                ) : (
                  <div className="mb-1">
                    <div className="flex items-end gap-1">
                      <span className={`font-mono text-xs self-start mt-1 ${isAccent ? 'text-gray-400' : 'text-gray-400'}`}>LKR</span>
                      <span className={`font-black text-3xl leading-none ${isAccent ? 'text-white' : 'text-gray-900'}`}>{price.toLocaleString()}</span>
                      <span className={`font-mono text-xs mb-0.5 ${isAccent ? 'text-gray-400' : 'text-gray-400'}`}>/mo</span>
                    </div>
                    {annual && prices.annualTotal > 0 && (
                      <div className={`font-mono text-[10px] mt-1 ${isAccent ? 'text-gray-500' : 'text-gray-400'}`}>
                        LKR {prices.annualTotal.toLocaleString()} / year
                      </div>
                    )}
                  </div>
                )}

                <div className={`font-mono text-[11px] mt-2 ${isAccent ? 'text-blue-400' : 'text-blue-600'}`}>
                  {plan.queries}
                </div>
              </div>

              {/* Features + CTA */}
              <div className="flex-1 px-5 py-5 flex flex-col">
                <ul className="flex flex-col gap-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isAccent ? 'text-blue-400' : 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`font-mono text-xs leading-snug ${isAccent ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={HREFS[id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-black uppercase text-xs tracking-widest py-3 rounded-sm transition-colors duration-150 ${
                    isAccent
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : isPopular
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
