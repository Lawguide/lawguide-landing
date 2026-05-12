import React from 'react';
import { motion } from 'framer-motion';

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="grid md:grid-cols-3 border-b-2 border-white/10">
        {/* Brand */}
        <div className="px-8 py-12 border-b-2 md:border-b-0 md:border-r-2 border-white/10">
          <div className="font-black text-2xl uppercase leading-none mb-1">Lawguide</div>
          <div className="text-[#22c55e] font-mono text-sm mb-6">.lk</div>
          <p className="font-mono text-xs text-white/40 leading-relaxed max-w-xs">
            AI-powered legal research for Sri Lanka. Built for lawyers, law students, and everyone who needs to understand the law.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-xs text-white/50 uppercase tracking-widest">Live at www.lawguide.lk</span>
          </div>
        </div>

        {/* Links */}
        <div className="px-8 py-12 border-b-2 md:border-b-0 md:border-r-2 border-white/10">
          <div className="font-black text-xs uppercase tracking-widest text-white/40 mb-6">Platform</div>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Try Free', href: 'https://app.lawguide.lk/en/register' },
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'App Login', href: 'https://app.lawguide.lk' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-mono text-xs text-white/60 hover:text-[#22c55e] transition-colors uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact / Legal */}
        <div className="px-8 py-12">
          <div className="font-black text-xs uppercase tracking-widest text-white/40 mb-6">Info</div>
          <div className="flex flex-col gap-3">
            <div className="font-mono text-xs text-white/60">
              <div className="text-white/30 uppercase tracking-widest mb-1">Languages</div>
              English · සිංහල · தமிழ்
            </div>
            <div className="font-mono text-xs text-white/60 mt-2">
              <div className="text-white/30 uppercase tracking-widest mb-1">Payments</div>
              PayHere.lk — LKR only
            </div>
            <div className="font-mono text-xs text-white/60 mt-2">
              <div className="text-white/30 uppercase tracking-widest mb-1">Built in</div>
              Sri Lanka 🇱🇰
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-xs text-white/30">
          © 2025 Lawguide.lk — All rights reserved.
        </p>
        <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          Not a substitute for legal advice from a qualified attorney.
        </p>
      </div>
    </footer>
  );
}
