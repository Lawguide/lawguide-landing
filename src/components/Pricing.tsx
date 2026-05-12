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
    <section id="pricing" className="border-b-2 border-black">

      {/* Header */}
      <div className="px-8 lg:px-12 py-16 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest border-2 border-black px-2.5 py-1 mb-6 inline-block">
            {p.tag}
          </span>
          <h2 className="font-black text-black uppercase text-4xl md:text-5xl leading-tight mb-4">
            {p.title}<br />{p.titleLine2}
          </h2>
          <p className="font-mono text-sm text-black/55 max-w-md mb-8">{p.body}</p>

          {/* Billing toggle */}
          <div className="inline-flex border-2 border-black">
            <button
              onClick={() => setAnnual(false)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-colors ${!annual ? 'bg-black text-white' : 'text-black hover:bg-black/5'}`}
            >
              {p.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 flex items-center gap-2 transition-colors ${annual ? 'bg-black text-white' : 'text-black hover:bg-black/5'}`}
            >
              {p.annual}
              <span className="bg-[#22c55e] text-black text-[10px] font-black px-1.5 py-0.5 tracking-wide">
                {p.annualBadge}
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {PLAN_IDS.map((id, i) => {
          const plan = p.plans[id];
          const prices = PRICES[id];
          const price = annual ? prices.annual : prices.monthly;
          const isPopular = id === POPULAR;
          const isAccent = id === 'professional';

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`flex flex-col border-black ${i < PLAN_IDS.length - 1 ? 'border-r-2' : ''} ${isAccent ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {/* Header */}
              <div className={`px-6 pt-8 pb-6 border-b-2 ${isAccent ? 'border-white/15' : 'border-black'}`}>
                {isPopular && (
                  <div className={`font-black text-[10px] uppercase tracking-widest mb-2 ${isAccent ? 'text-[#22c55e]' : 'text-[#22c55e]'}`}>
                    ★ {p.popular}
                  </div>
                )}
                <div className={`font-black uppercase text-base tracking-wide mb-1 ${isAccent ? 'text-white' : 'text-black'}`}>
                  {plan.name}
                </div>
                <p className={`font-mono text-xs mb-5 ${isAccent ? 'text-white/50' : 'text-black/45'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                {price === 0 ? (
                  <div className="font-black text-4xl leading-none mb-1">Free</div>
                ) : (
                  <div className="mb-1">
                    <div className="flex items-end gap-1">
                      <span className={`font-mono text-xs self-start mt-1.5 ${isAccent ? 'text-white/50' : 'text-black/40'}`}>LKR</span>
                      <span className="font-black text-4xl leading-none">{price.toLocaleString()}</span>
                      <span className={`font-mono text-xs mb-0.5 ${isAccent ? 'text-white/50' : 'text-black/40'}`}>/mo</span>
                    </div>
                    {annual && prices.annualTotal > 0 && (
                      <div className={`font-mono text-[10px] mt-1 ${isAccent ? 'text-white/35' : 'text-black/35'}`}>
                        LKR {prices.annualTotal.toLocaleString()} / year
                      </div>
                    )}
                  </div>
                )}

                <div className={`font-mono text-xs mt-3 ${isAccent ? 'text-[#22c55e]' : 'text-black/50'}`}>
                  {plan.queries}
                </div>
              </div>

              {/* Features + CTA */}
              <div className="flex-1 px-6 py-6 flex flex-col">
                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#22c55e] font-black text-xs mt-0.5 flex-shrink-0">+</span>
                      <span className={`font-mono text-xs leading-snug ${isAccent ? 'text-white/70' : 'text-black/65'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={HREFS[id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-black uppercase text-xs tracking-widest py-3.5 border-2 transition-colors duration-150 ${
                    isAccent
                      ? 'border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-black'
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                  style={{ boxShadow: isAccent ? '4px 4px 0 0 #22c55e' : '4px 4px 0 0 #000' }}
                >
                  {plan.cta}
                </a>

                {id === 'free' && (
                  <p className={`font-mono text-[10px] text-center mt-3 uppercase tracking-wider ${isAccent ? 'text-white/30' : 'text-black/35'}`}>
                    {p.noCard}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="px-8 py-5 border-t-2 border-black">
        <p className="font-mono text-xs text-black/40">{p.footerNote}</p>
      </div>
    </section>
  );
}
