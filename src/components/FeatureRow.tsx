import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// ── Shared card shell ────────────────────────────────────────────────
function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border-2 border-black w-full" style={{ boxShadow: '6px 6px 0 0 #000' }}>
      <div className="bg-black px-4 py-2.5">
        <span className="text-white font-mono text-xs uppercase tracking-widest">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

// ── Widget 1: RAG Search ────────────────────────────────────────────
function SearchWidget() {
  const results = [
    { title: 'Prevention of Terrorism Act No. 48 of 1979', relevance: 97 },
    { title: 'Code of Criminal Procedure Act No. 15 of 1979', relevance: 91 },
    { title: 'Constitution of Sri Lanka — Article 13', relevance: 88 },
  ];
  return (
    <Widget title="Legal Search">
      <div className="border-2 border-black px-3 py-2 flex items-center gap-2 mb-4">
        <span className="font-mono text-xs text-black/30 flex-1">rights during arrest in sri lanka</span>
        <div className="w-4 h-4 border-2 border-black flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#22c55e]" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {results.map((r, i) => (
          <div key={i} className="flex items-center gap-3 border border-black/10 p-2 hover:border-[#22c55e] transition-colors cursor-pointer">
            <span className="font-black text-[#22c55e] text-xs w-8 flex-shrink-0">{r.relevance}%</span>
            <span className="font-mono text-xs text-black leading-snug">{r.title}</span>
          </div>
        ))}
      </div>
    </Widget>
  );
}

// ── Widget 2: Multilingual ──────────────────────────────────────────
function MultilingualWidget() {
  const items = [
    { flag: 'EN', lang: 'English', text: 'You have the right to remain silent.' },
    { flag: 'SI', lang: 'Sinhala', text: 'ඔබට නිහඬව සිටීමේ අයිතිය ඇත.' },
    { flag: 'TA', lang: 'Tamil', text: 'நீங்கள் அமைதியாக இருக்க உரிமை உண்டு.' },
  ];
  return (
    <Widget title="Multilingual">
      <div className="flex gap-1 mb-4">
        {['EN', 'SI', 'TA'].map((l) => (
          <span key={l} className="font-mono text-[10px] text-[#22c55e] border border-[#22c55e] px-1.5 py-0.5">{l}</span>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.flag} className="flex gap-3">
            <span className="font-black text-xs text-black border-2 border-black w-8 h-7 flex items-center justify-center flex-shrink-0">
              {item.flag}
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-black/35 mb-0.5">{item.lang}</div>
              <div className="font-mono text-xs text-black leading-snug">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </Widget>
  );
}

// ── Widget 3: Citations ─────────────────────────────────────────────
function CitationsWidget() {
  return (
    <Widget title="AI Answer + Citations">
      <p className="font-mono text-xs text-black leading-relaxed mb-4">
        Under Section 66 of the Motor Traffic Act, a vehicle owner is liable for accidents caused by their vehicle even if driven by another person with permission.
      </p>
      <div className="border-t-2 border-black pt-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-black/35 mb-2">Sources</div>
        {['Motor Traffic Act No. 14 of 1951 — §66', 'SC Appeal No. 152/2019 — Fernando v. Perera'].map((src) => (
          <div key={src} className="flex items-center gap-2 border border-[#22c55e] px-2.5 py-1.5 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
            <span className="font-mono text-[11px] text-black">{src}</span>
          </div>
        ))}
      </div>
    </Widget>
  );
}

// ── Widget 4: Consultation ──────────────────────────────────────────
function ConsultationWidget() {
  const lawyers = [
    { name: 'Priyantha Silva', spec: 'Property & Land Law', avail: 'Today 3 PM' },
    { name: 'Nirmala Fernando', spec: 'Family & Civil Law', avail: 'Tomorrow 10 AM' },
    { name: 'Ranil Jayawardena', spec: 'Criminal Defence', avail: 'Today 5 PM' },
  ];
  return (
    <Widget title="Book a Lawyer">
      <div className="flex flex-col gap-2">
        {lawyers.map((l) => (
          <div key={l.name} className="border-2 border-black p-3 flex items-start justify-between gap-2 hover:border-[#22c55e] transition-colors cursor-pointer">
            <div>
              <div className="font-black text-xs text-black uppercase tracking-wide">{l.name}</div>
              <div className="font-mono text-[10px] text-black/50 mt-0.5">{l.spec}</div>
            </div>
            <div className="font-mono text-[10px] text-[#22c55e] border border-[#22c55e] px-1.5 py-1 whitespace-nowrap flex-shrink-0">
              {l.avail}
            </div>
          </div>
        ))}
      </div>
    </Widget>
  );
}

// ── Widget 5: Legal Library ─────────────────────────────────────────
function LibraryWidget() {
  const categories = [
    { name: 'Labour Law', count: 24 },
    { name: 'Property Law', count: 31 },
    { name: 'Criminal Law', count: 18 },
    { name: 'Family Law', count: 12 },
    { name: 'Commercial Law', count: 27 },
  ];
  return (
    <Widget title="Legal Library — 1704 Acts">
      <div className="border-2 border-black px-3 py-2 flex items-center gap-2 mb-4">
        <span className="font-mono text-xs text-black/30 flex-1">search legislation...</span>
        <div className="font-mono text-[10px] text-[#22c55e]">⌕</div>
      </div>
      <div className="flex flex-col gap-1.5">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center justify-between border border-black/10 px-3 py-2 hover:border-[#22c55e] transition-colors cursor-pointer">
            <span className="font-mono text-xs text-black">{c.name}</span>
            <span className="font-black text-[10px] text-[#22c55e]">{c.count} Acts</span>
          </div>
        ))}
      </div>
    </Widget>
  );
}

// ── Widget 6: Jobs ──────────────────────────────────────────────────
function JobsWidget() {
  const jobs = [
    { title: 'Junior Associate', org: 'Nithyanandam & Co.', type: 'Full-time', location: 'Colombo 3' },
    { title: 'Legal Researcher', org: 'BASL', type: 'Contract', location: 'Remote' },
    { title: 'In-House Counsel', org: 'Commercial Bank', type: 'Full-time', location: 'Colombo 1' },
  ];
  return (
    <Widget title="Legal Career Hub">
      <div className="flex flex-col gap-2">
        {jobs.map((j) => (
          <div key={j.title} className="border-2 border-black p-3 hover:border-[#22c55e] transition-colors cursor-pointer">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="font-black text-xs text-black uppercase tracking-wide">{j.title}</div>
              <div className="font-mono text-[10px] bg-black text-white px-1.5 py-0.5 flex-shrink-0">{j.type}</div>
            </div>
            <div className="font-mono text-[10px] text-black/50">{j.org} · {j.location}</div>
          </div>
        ))}
      </div>
    </Widget>
  );
}

// ── Row layout ──────────────────────────────────────────────────────
interface RowProps {
  number: string;
  tag: string;
  title: string;
  body: string;
  widget: React.ReactNode;
  reverse?: boolean;
}

function Row({ number, tag, title, body, widget, reverse }: RowProps) {
  const copy = (
    <div className="flex flex-col justify-center px-8 lg:px-12 py-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-black text-7xl text-black/8 leading-none select-none">{number}</span>
        <span className="font-mono text-xs uppercase tracking-widest border-2 border-black px-2.5 py-1">{tag}</span>
      </div>
      <h2 className="font-black text-black uppercase text-3xl md:text-4xl leading-tight mb-4 whitespace-pre-line">{title}</h2>
      <p className="font-mono text-sm text-black/55 leading-relaxed max-w-sm">{body}</p>
    </div>
  );

  const visual = (
    <div className={`flex items-center justify-center px-8 py-16 bg-[#f5f5f5] border-black ${reverse ? 'border-r-2' : 'border-l-2'} border-t-2 md:border-t-0`}>
      <div className="w-full max-w-sm">{widget}</div>
    </div>
  );

  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
      className={`grid md:grid-cols-2 border-b-2 border-black ${reverse ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
    >
      {copy}
      {visual}
    </motion.div>
  );
}

export default function FeatureRow() {
  const { t } = useLanguage();
  const { f1, f2, f3, f4, f5, f6 } = t.featureRows;

  return (
    <section id="features" className="border-b-2 border-black">
      <Row number="01" tag={f1.tag} title={f1.title} body={f1.body} widget={<SearchWidget />} />
      <Row number="02" tag={f2.tag} title={f2.title} body={f2.body} widget={<MultilingualWidget />} reverse />
      <Row number="03" tag={f3.tag} title={f3.title} body={f3.body} widget={<CitationsWidget />} />
      <Row number="04" tag={f4.tag} title={f4.title} body={f4.body} widget={<ConsultationWidget />} reverse />
      <Row number="05" tag={f5.tag} title={f5.title} body={f5.body} widget={<LibraryWidget />} />
      <Row number="06" tag={f6.tag} title={f6.title} body={f6.body} widget={<JobsWidget />} reverse />
    </section>
  );
}
