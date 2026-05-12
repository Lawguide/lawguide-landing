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
    <footer className="bg-gray-900 text-white">
      <div className="grid md:grid-cols-3 border-b border-gray-800">

        {/* Brand */}
        <div className="px-8 lg:px-12 py-12 border-b md:border-b-0 md:border-r border-gray-800">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M3 8l9-5 9 5M5 11l-2 7h4l-2-7zM19 11l-2 7h4l-2-7zM3 18h18" />
              </svg>
            </div>
            <div>
              <div className="font-black text-white uppercase text-base leading-none tracking-tight">Lawguide</div>
              <div className="text-blue-400 font-mono text-[10px]">.lk</div>
            </div>
          </div>
          <p className="font-mono text-xs text-gray-400 leading-relaxed max-w-xs mb-5">{f.description}</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="font-mono text-xs text-amber-400/70 uppercase tracking-widest">Still Building</span>
          </div>
        </div>

        {/* Platform links */}
        <div className="px-8 py-12 border-b md:border-b-0 md:border-r border-gray-800">
          <div className="font-black text-[10px] uppercase tracking-widest text-gray-500 mb-5">{f.platform}</div>
          <div className="flex flex-col gap-3">
            {f.links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left font-mono text-xs text-gray-400 hover:text-blue-400 transition-colors uppercase tracking-widest"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="px-8 py-12">
          <div className="font-black text-[10px] uppercase tracking-widest text-gray-500 mb-5">{f.info}</div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">Languages</div>
              <div className="font-mono text-xs text-gray-400">{f.languages}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">Payments</div>
              <div className="font-mono text-xs text-gray-400">{f.payments}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">Built in</div>
              <div className="font-mono text-xs text-gray-400">{f.builtIn}</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="font-mono text-xs text-gray-600">{f.copyright}</p>
        <p className="font-mono text-[10px] text-gray-700 uppercase tracking-wider">{f.disclaimer}</p>
      </div>
    </footer>
  );
}
