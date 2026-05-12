import React, { useState } from 'react';
import { motion } from 'framer-motion';

const APP_URL = 'https://app.lawguide.lk';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price_monthly_lkr: 0,
    price_annual_lkr: 0,
    description: 'Try Lawguide. No card needed.',
    queries: '5 queries / day',
    languages: ['English'],
    features: [
      'AI legal Q&A (English)',
      'Basic library access',
      'Cited answers',
      'Email support',
    ],
    cta: 'Start Free',
    href: `${APP_URL}/en/register`,
    accent: false,
  },
  {
    id: 'student',
    name: 'Student',
    price_monthly_lkr: 1500,
    price_annual_lkr: 15000,
    description: 'For law students who need full access.',
    queries: '15 queries / day',
    languages: ['English', 'Sinhala', 'Tamil'],
    features: [
      'All Free features',
      'Sinhala & Tamil support',
      'Chat history',
      'Full library access',
      'Priority email support',
    ],
    cta: 'Start Student',
    href: `${APP_URL}/en/register?plan=student`,
    accent: false,
    popular: true,
  },
  {
    id: 'professional',
    name: 'Professional',
    price_monthly_lkr: 4500,
    price_annual_lkr: 45000,
    description: 'For individual legal professionals.',
    queries: '60 queries / day',
    languages: ['English', 'Sinhala', 'Tamil'],
    features: [
      'All Student features',
      'Claude AI (English queries)',
      'Document upload & analysis',
      'Legal templates',
      'Analytics dashboard',
      '24/7 support',
    ],
    cta: 'Start Professional',
    href: `${APP_URL}/en/register?plan=professional`,
    accent: true,
  },
  {
    id: 'firm',
    name: 'Firm',
    price_monthly_lkr: 9000,
    price_annual_lkr: 90000,
    description: 'For law firms needing team access.',
    queries: '200 shared queries / day',
    languages: ['English', 'Sinhala', 'Tamil'],
    features: [
      'All Professional features',
      '3 team seats',
      'API access',
      'Priority processing',
      'Dedicated account support',
    ],
    cta: 'Start Firm',
    href: `${APP_URL}/en/register?plan=firm`,
    accent: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="border-b-2 border-black">
      {/* Header */}
      <div className="px-8 py-16 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest border border-black px-2 py-1">Pricing</span>
          </div>
          <h2 className="font-black text-black uppercase text-4xl md:text-5xl leading-tight mb-4">
            Plans for Every<br />Legal Need.
          </h2>
          <p className="font-mono text-sm text-black/60 max-w-md mb-8">
            Pay in LKR. Cancel anytime. All paid plans include a 7-day free trial. Payments via PayHere.lk.
          </p>

          {/* Toggle */}
          <div className="inline-flex border-2 border-black">
            <button
              onClick={() => setAnnual(false)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-colors ${
                !annual ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 flex items-center gap-2 transition-colors ${
                annual ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'
              }`}
            >
              Annual
              <span className="bg-[#22c55e] text-black text-[10px] font-black px-1.5 py-0.5 tracking-wide">
                2 months free
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan, i) => {
          const price = annual && plan.price_annual_lkr > 0
            ? Math.round(plan.price_annual_lkr / 12)
            : plan.price_monthly_lkr;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`flex flex-col border-black ${
                i < plans.length - 1 ? 'border-r-2' : ''
              } ${plan.accent ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {/* Plan header */}
              <div className={`px-6 pt-8 pb-6 border-b-2 ${plan.accent ? 'border-white/20' : 'border-black'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`font-black text-xs uppercase tracking-widest mb-1 ${plan.accent ? 'text-[#22c55e]' : 'text-black'}`}>
                      {plan.popular ? '★ Most Popular' : plan.name}
                    </div>
                    {plan.popular && (
                      <div className="font-black uppercase text-sm">{plan.name}</div>
                    )}
                  </div>
                </div>

                <p className={`font-mono text-xs mb-6 ${plan.accent ? 'text-white/60' : 'text-black/50'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-2">
                  {price === 0 ? (
                    <div className="font-black text-4xl leading-none">Free</div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className={`font-mono text-xs self-start mt-2 ${plan.accent ? 'text-white/60' : 'text-black/50'}`}>
                        LKR
                      </span>
                      <span className="font-black text-4xl leading-none">{price.toLocaleString()}</span>
                      <span className={`font-mono text-xs mb-1 ${plan.accent ? 'text-white/60' : 'text-black/50'}`}>
                        /mo
                      </span>
                    </div>
                  )}
                </div>

                <div className={`font-mono text-xs ${plan.accent ? 'text-[#22c55e]' : 'text-black/50'}`}>
                  {plan.queries}
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 px-6 py-6 flex flex-col">
                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className={`font-black text-xs mt-0.5 ${plan.accent ? 'text-[#22c55e]' : 'text-[#22c55e]'}`}>
                        +
                      </span>
                      <span className={`font-mono text-xs leading-snug ${plan.accent ? 'text-white/80' : 'text-black/70'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-black uppercase text-xs tracking-widest py-3.5 border-2 transition-colors duration-150 ${
                    plan.accent
                      ? 'border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-black'
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                  style={{ boxShadow: plan.accent ? '4px 4px 0 0 #22c55e' : '4px 4px 0 0 #000' }}
                >
                  {plan.cta}
                </a>

                {plan.id === 'free' && (
                  <p className="font-mono text-[10px] text-black/40 text-center mt-3 uppercase tracking-wider">
                    No credit card required
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="px-8 py-6 border-t-2 border-black">
        <p className="font-mono text-xs text-black/50">
          All plans billed in LKR via PayHere.lk — Sri Lanka&apos;s leading payment gateway. 7-day free trial on all paid plans.
        </p>
      </div>
    </section>
  );
}
