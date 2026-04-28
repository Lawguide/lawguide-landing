import React, { useState } from 'react';
import { Check, Zap, Users, Star } from 'lucide-react';

const APP_URL = 'https://app.lawguide.lk';

const plans = [
  {
    id: 'free',
    name: 'Free',
    description: 'For curious individuals exploring Sri Lankan law',
    price_monthly_lkr: 0,
    price_annual_lkr: 0,
    price_monthly_usd: 0,
    daily_chat_limit: 5,
    seat_count: 1,
    is_popular: false,
    languages: ['English'],
    features: [
      '5 AI legal queries per day',
      'English only',
      'Basic legal library access',
      'Email support',
    ],
    cta: 'Get Started Free',
    href: `${APP_URL}/en/register`,
    gradient: 'from-gray-100 to-gray-50',
    border: 'border-gray-200',
    ctaClass: 'bg-gray-900 hover:bg-gray-800 text-white',
    badgeClass: '',
  },
  {
    id: 'student',
    name: 'Student',
    description: 'For law students who need full multilingual access',
    price_monthly_lkr: 1500,
    price_annual_lkr: 15000,
    price_monthly_usd: 5,
    daily_chat_limit: 15,
    seat_count: 1,
    is_popular: true,
    languages: ['English', 'Sinhala', 'Tamil'],
    features: [
      '15 AI legal queries per day',
      'English, Sinhala & Tamil',
      'Full legal library access',
      'Chat history saved',
      'Priority email support',
    ],
    cta: 'Start Student Plan',
    href: `${APP_URL}/en/register?plan=student`,
    gradient: 'from-blue-600 to-purple-600',
    border: 'border-blue-500',
    ctaClass: 'bg-white hover:bg-blue-50 text-blue-700 font-bold',
    badgeClass: 'bg-white text-blue-700',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For individual lawyers and legal professionals',
    price_monthly_lkr: 4500,
    price_annual_lkr: 45000,
    price_monthly_usd: 15,
    daily_chat_limit: 60,
    seat_count: 1,
    is_popular: false,
    languages: ['English', 'Sinhala', 'Tamil'],
    features: [
      '60 AI legal queries per day',
      'English, Sinhala & Tamil',
      'Claude AI for English queries',
      'Document upload & analysis',
      'Legal templates',
      'Analytics dashboard',
      '24/7 support',
    ],
    cta: 'Start Professional',
    href: `${APP_URL}/en/register?plan=professional`,
    gradient: 'from-gray-100 to-gray-50',
    border: 'border-gray-200',
    ctaClass: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white',
    badgeClass: '',
  },
  {
    id: 'firm',
    name: 'Firm',
    description: 'For law firms needing team access and API',
    price_monthly_lkr: 9000,
    price_annual_lkr: 90000,
    price_monthly_usd: 30,
    daily_chat_limit: 200,
    seat_count: 3,
    is_popular: false,
    languages: ['English', 'Sinhala', 'Tamil'],
    features: [
      '200 shared queries per day',
      '3 team seats included',
      'English, Sinhala & Tamil',
      'Claude AI for English queries',
      'API access',
      'Document upload & analysis',
      'Legal templates',
      'Analytics dashboard',
      'Priority processing',
      'Dedicated support',
    ],
    cta: 'Start Firm Plan',
    href: `${APP_URL}/en/register?plan=firm`,
    gradient: 'from-gray-100 to-gray-50',
    border: 'border-gray-200',
    ctaClass: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
    badgeClass: '',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Simple, transparent pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plans for every legal need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            From students to law firms — pay in LKR, cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-full px-2 py-2 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? 'bg-gray-900 text-white shadow' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                annual ? 'bg-gray-900 text-white shadow' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                Save 2 months
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan) => {
            const priceMonthly = annual && plan.price_annual_lkr > 0
              ? Math.round(plan.price_annual_lkr / 12)
              : plan.price_monthly_lkr;
            const isPopular = plan.is_popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 overflow-hidden flex flex-col ${
                  isPopular
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/20 scale-[1.02]'
                    : `${plan.border} shadow-lg`
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center text-xs font-bold py-2 tracking-wider uppercase">
                    <Star className="inline h-3 w-3 mr-1 mb-0.5" />
                    Most Popular
                  </div>
                )}

                {/* Card header */}
                <div
                  className={`p-6 ${
                    isPopular
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                      : 'bg-white'
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-1 ${isPopular ? 'text-white' : 'text-gray-900'}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${isPopular ? 'text-blue-100' : 'text-gray-500'}`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    {priceMonthly === 0 ? (
                      <div className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                        Free
                      </div>
                    ) : (
                      <>
                        <div className={`flex items-end gap-1 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                          <span className="text-sm font-medium self-start mt-2">LKR</span>
                          <span className="text-4xl font-bold">{priceMonthly.toLocaleString()}</span>
                          <span className={`text-sm mb-1 ${isPopular ? 'text-blue-100' : 'text-gray-500'}`}>/mo</span>
                        </div>
                        <div className={`text-xs mt-1 ${isPopular ? 'text-blue-200' : 'text-gray-400'}`}>
                          ≈ USD {plan.price_monthly_usd}/mo
                          {annual && (
                            <span className="ml-2 font-medium text-green-400">
                              · billed LKR {plan.price_annual_lkr.toLocaleString()}/yr
                            </span>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Limits */}
                  <div className={`flex flex-wrap gap-2 mt-4 text-xs font-medium ${isPopular ? 'text-blue-100' : 'text-gray-500'}`}>
                    <span>{plan.daily_chat_limit} queries/day</span>
                    {plan.seat_count > 1 && (
                      <>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {plan.seat_count} seats
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 bg-white flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md ${plan.ctaClass}`}
                  >
                    {plan.cta}
                  </a>

                  {plan.id === 'free' && (
                    <p className="text-center text-xs text-gray-400 mt-3">No credit card required</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All paid plans include a <strong>7-day free trial</strong>. Upgrade or downgrade anytime.
            Payments processed securely via PayHere.lk in LKR.
          </p>
        </div>
      </div>
    </section>
  );
}
