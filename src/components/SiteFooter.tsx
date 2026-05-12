import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const scrollTo = (href: string) => {
  if (href.startsWith('#')) {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.open(href, '_blank', 'noopener,noreferrer');
  }
};

export default function SiteFooter() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-black text-white">
      <div className="grid md:grid-cols-3 border-b-2 border-white/10">

        {/* Brand */}
        <div className="px-8 lg:px-12 py-12 border-b-2 md:border-b-0 md:border-r-2 border-white/10">
          <div className="font-black text-2xl uppercase leading-none mb-0.5">Lawguide</div>
          <div className="text-[#22c55e] font-mono text-sm mb-5">.lk</div>
          <p className="font-mono text-xs text-white/35 leading-relaxed max-w-xs">{f.description}</p>
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-mono text-xs text-amber-400/70 uppercase tracking-widest">Still Building</span>
          </div>
        </div>

        {/* Platform links */}
        <div className="px-8 py-12 border-b-2 md:border-b-0 md:border-r-2 border-white/10">
          <div className="font-black text-[10px] uppercase tracking-widest text-white/30 mb-5">{f.platform}</div>
          <div className="flex flex-col gap-3">
            {f.links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left font-mono text-xs text-white/50 hover:text-[#22c55e] transition-colors uppercase tracking-widest"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="px-8 py-12">
          <div className="font-black text-[10px] uppercase tracking-widest text-white/30 mb-5">{f.info}</div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-1">{f.info === 'Info' ? 'Languages' : f.languages}</div>
              <div className="font-mono text-xs text-white/50">{f.languages}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-1">Payments</div>
              <div className="font-mono text-xs text-white/50">{f.payments}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-1">Built in</div>
              <div className="font-mono text-xs text-white/50">{f.builtIn}</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="font-mono text-xs text-white/25">{f.copyright}</p>
        <p className="font-mono text-[10px] text-white/20 uppercase tracking-wider">{f.disclaimer}</p>
      </div>
    </footer>
  );
}
