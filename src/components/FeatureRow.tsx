import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Shared card shell — matches app's card style (white, border-gray-200, rounded-xl, shadow-sm)
function Card({ header, children }: { header: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">{header}</div>
      <div className="p-4">{children}</div>
    </div>
  );
}

// ── Widget 1: RAG Search ────────────────────────────────────────────
function SearchWidget() {
  const results = [
    { title: 'Prevention of Terrorism Act No. 48 of 1979', score: 97, type: 'act' },
    { title: 'Code of Criminal Procedure Act No. 15 of 1979', score: 91, type: 'act' },
    { title: 'Constitution of Sri Lanka — Article 13', score: 88, type: 'act' },
  ];
  return (
    <Card header={
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">Legal Search</span>
      </div>
    }>
      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mb-3 bg-white">
        <span className="font-mono text-xs text-gray-400 flex-1">rights during arrest in sri lanka</span>
        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {results.map((r, i) => (
          <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
            <span className="font-black text-blue-600 text-xs w-8 flex-shrink-0">{r.score}%</span>
            <span className="font-mono text-xs text-gray-700 leading-snug">{r.title}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ── Widget 2: Multilingual ──────────────────────────────────────────
function MultilingualWidget() {
  const items = [
    { flag: 'EN', lang: 'English', text: 'You have the right to remain silent.', color: 'bg-blue-600' },
    { flag: 'SI', lang: 'Sinhala', text: 'ඔබට නිහඬව සිටීමේ අයිතිය ඇත.', color: 'bg-indigo-600' },
    { flag: 'TA', lang: 'Tamil', text: 'நீங்கள் அமைதியாக இருக்க உரிமை உண்டு.', color: 'bg-violet-600' },
  ];
  return (
    <Card header={
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">Multilingual</span>
        </div>
        <div className="flex gap-1">
          {['EN', 'SI', 'TA'].map((l) => (
            <span key={l} className="font-mono text-[10px] text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">{l}</span>
          ))}
        </div>
      </div>
    }>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.flag} className="flex gap-3 items-start">
            <span className={`font-black text-[10px] text-white ${item.color} w-7 h-6 flex items-center justify-center rounded flex-shrink-0`}>
              {item.flag}
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{item.lang}</div>
              <div className="font-mono text-xs text-gray-700 leading-snug">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ── Widget 3: Citations — matches CitationSidePanel ─────────────────
function CitationsWidget() {
  const sources = [
    { label: 'Motor Traffic Act No. 14 of 1951 — §66', type: 'act', color: 'bg-blue-600' },
    { label: 'SC Appeal No. 152/2019 — Fernando v. Perera', type: 'judgment', color: 'bg-purple-600' },
  ];
  return (
    <Card header={
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">AI Answer + Citations</span>
      </div>
    }>
      <p className="font-mono text-xs text-gray-700 leading-relaxed mb-4">
        Under Section 66 of the Motor Traffic Act, a vehicle owner is liable for accidents caused by their vehicle even if driven by another person with permission.
      </p>
      <div className="border-t border-gray-100 pt-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-2">Sources</div>
        {sources.map((src) => (
          <div key={src.label} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-2 mb-1.5 hover:border-blue-300 cursor-pointer transition-colors">
            <div className={`w-4 h-4 ${src.color} rounded flex items-center justify-center flex-shrink-0`}>
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 8l9-5 9 5M5 11l-2 7h4l-2-7zM19 11l-2 7h4l-2-7zM3 18h18" />
              </svg>
            </div>
            <span className="font-mono text-[11px] text-gray-700">{src.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ── Widget 4: Consultation ──────────────────────────────────────────
function ConsultationWidget() {
  const lawyers = [
    { name: 'Priyantha Silva', spec: 'Property & Land Law', avail: 'Today 3:00 PM' },
    { name: 'Nirmala Fernando', spec: 'Family & Civil Law', avail: 'Tomorrow 10 AM' },
    { name: 'Ranil Jayawardena', spec: 'Criminal Defence', avail: 'Today 5:00 PM' },
  ];
  return (
    <Card header={
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">Book a Lawyer</span>
      </div>
    }>
      <div className="flex flex-col gap-2">
        {lawyers.map((l) => (
          <div key={l.name} className="flex items-center justify-between gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
            <div>
              <div className="font-black text-xs text-gray-900 uppercase tracking-wide">{l.name}</div>
              <div className="font-mono text-[10px] text-gray-400 mt-0.5">{l.spec}</div>
            </div>
            <span className="font-mono text-[10px] text-blue-700 bg-blue-50 border border-blue-200 rounded px-1.5 py-1 whitespace-nowrap flex-shrink-0">
              {l.avail}
            </span>
          </div>
        ))}
      </div>
    </Card>
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
    <Card header={
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">Legal Library — 1704 Acts</span>
      </div>
    }>
      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mb-3 bg-white">
        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="font-mono text-xs text-gray-400 flex-1">search legislation...</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
            <span className="font-mono text-xs text-gray-700">{c.name}</span>
            <span className="font-black text-[10px] text-blue-600 bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5">{c.count} Acts</span>
          </div>
        ))}
      </div>
    </Card>
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
    <Card header={
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">Legal Career Hub</span>
      </div>
    }>
      <div className="flex flex-col gap-2">
        {jobs.map((j) => (
          <div key={j.title} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="font-black text-xs text-gray-900 uppercase tracking-wide">{j.title}</div>
              <span className="font-mono text-[10px] text-gray-500 bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5 flex-shrink-0">{j.type}</span>
            </div>
            <div className="font-mono text-[10px] text-gray-400">{j.org} · {j.location}</div>
          </div>
        ))}
      </div>
    </Card>
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
      <div className="flex items-center gap-3 mb-6">
        <span className="font-black text-6xl text-gray-100 leading-none select-none">{number}</span>
        <span className="font-mono text-xs uppercase tracking-widest text-gray-500 border border-gray-300 bg-gray-50 px-2.5 py-1 rounded-sm">{tag}</span>
      </div>
      <h2 className="font-black text-gray-900 uppercase text-3xl md:text-4xl leading-tight mb-4 whitespace-pre-line">{title}</h2>
      <p className="font-mono text-sm text-gray-500 leading-relaxed max-w-sm">{body}</p>
    </div>
  );

  const visual = (
    <div className={`flex items-center justify-center px-8 py-16 bg-gray-50 border-gray-200 border-t md:border-t-0 ${reverse ? 'md:border-r' : 'md:border-l'}`}>
      <div className="w-full max-w-sm">{widget}</div>
    </div>
  );

  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
      className={`grid md:grid-cols-2 border-b border-gray-200 ${reverse ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
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
    <section id="features" className="bg-white border-b border-gray-200">
      <Row number="01" tag={f1.tag} title={f1.title} body={f1.body} widget={<SearchWidget />} />
      <Row number="02" tag={f2.tag} title={f2.title} body={f2.body} widget={<MultilingualWidget />} reverse />
      <Row number="03" tag={f3.tag} title={f3.title} body={f3.body} widget={<CitationsWidget />} />
      <Row number="04" tag={f4.tag} title={f4.title} body={f4.body} widget={<ConsultationWidget />} reverse />
      <Row number="05" tag={f5.tag} title={f5.title} body={f5.body} widget={<LibraryWidget />} />
      <Row number="06" tag={f6.tag} title={f6.title} body={f6.body} widget={<JobsWidget />} reverse />
    </section>
  );
}
