import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// ── Widget: RAG Search ──────────────────────────────────────────────
function SearchWidget() {
  const results = [
    { title: 'Prevention of Terrorism Act No. 48 of 1979', relevance: 97 },
    { title: 'Code of Criminal Procedure Act No. 15 of 1979', relevance: 91 },
    { title: 'Constitution of Sri Lanka — Article 13', relevance: 88 },
  ];

  return (
    <div
      className="bg-white border-2 border-black w-full"
      style={{ boxShadow: '6px 6px 0 0 #000' }}
    >
      <div className="bg-black px-4 py-2">
        <span className="text-white font-mono text-xs uppercase tracking-widest">Legal Search</span>
      </div>
      <div className="p-4">
        <div className="border-2 border-black px-3 py-2 flex items-center gap-2 mb-4">
          <span className="font-mono text-xs text-black/40 flex-1">rights during arrest in sri lanka</span>
          <div className="w-4 h-4 border-2 border-black flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#22c55e]" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {results.map((r, i) => (
            <div key={i} className="flex items-center gap-3 border border-black/10 p-2 hover:border-[#22c55e] transition-colors">
              <span className="font-black text-[#22c55e] text-xs w-8">{r.relevance}%</span>
              <span className="font-mono text-xs text-black leading-snug flex-1">{r.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Widget: Multilingual ────────────────────────────────────────────
function MultilingualWidget() {
  const translations = [
    { lang: 'English', flag: 'EN', text: 'You have the right to remain silent.' },
    { lang: 'Sinhala', flag: 'SI', text: 'ඔබට නිහඬව සිටීමේ අයිතිය ඇත.' },
    { lang: 'Tamil', flag: 'TA', text: 'நீங்கள் அமைதியாக இருக்க உரிமை உண்டு.' },
  ];

  return (
    <div
      className="bg-white border-2 border-black w-full"
      style={{ boxShadow: '6px 6px 0 0 #000' }}
    >
      <div className="bg-black px-4 py-2 flex items-center justify-between">
        <span className="text-white font-mono text-xs uppercase tracking-widest">Multilingual</span>
        <div className="flex gap-1">
          {['EN', 'SI', 'TA'].map((l) => (
            <span key={l} className="font-mono text-[10px] text-[#22c55e] border border-[#22c55e] px-1">
              {l}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {translations.map((t, i) => (
          <div key={i} className="flex gap-3">
            <span className="font-black text-xs text-black border-2 border-black w-8 h-6 flex items-center justify-center flex-shrink-0">
              {t.flag}
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-0.5">{t.lang}</div>
              <div className="font-mono text-xs text-black leading-snug">{t.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Widget: Citations ───────────────────────────────────────────────
function CitationsWidget() {
  return (
    <div
      className="bg-white border-2 border-black w-full"
      style={{ boxShadow: '6px 6px 0 0 #000' }}
    >
      <div className="bg-black px-4 py-2">
        <span className="text-white font-mono text-xs uppercase tracking-widest">AI Answer + Citations</span>
      </div>
      <div className="p-4">
        <p className="font-mono text-xs text-black leading-relaxed mb-4">
          Under Section 66 of the Motor Traffic Act, a vehicle owner is liable for accidents caused by their vehicle
          even if driven by another person with permission.
        </p>
        <div className="border-t-2 border-black pt-3 flex flex-col gap-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-1">Sources</div>
          {[
            'Motor Traffic Act No. 14 of 1951 — §66',
            'SC Appeal No. 152/2019 — Fernando v. Perera',
          ].map((src, i) => (
            <div key={i} className="flex items-center gap-2 border border-[#22c55e] px-2 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
              <span className="font-mono text-[10px] text-black">{src}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Feature row component ───────────────────────────────────────────
interface FeatureRowProps {
  number: string;
  tag: string;
  title: string;
  body: string;
  widget: React.ReactNode;
  reverse?: boolean;
}

function Row({ number, tag, title, body, widget, reverse }: FeatureRowProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={`grid md:grid-cols-2 border-b-2 border-black ${reverse ? 'md:grid-flow-col-dense' : ''}`}
    >
      {/* Copy side */}
      <div className={`flex flex-col justify-center px-8 py-16 ${reverse ? 'md:col-start-2' : ''}`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-black text-6xl text-black/10 leading-none">{number}</span>
          <span className="font-mono text-xs uppercase tracking-widest border border-black px-2 py-1">{tag}</span>
        </div>
        <h2 className="font-black text-black uppercase text-3xl md:text-4xl leading-tight mb-4">{title}</h2>
        <p className="font-mono text-sm text-black/60 leading-relaxed max-w-sm">{body}</p>
      </div>

      {/* Widget side */}
      <div
        className={`flex items-center justify-center px-8 py-16 bg-[#f5f5f5] border-t-2 md:border-t-0 border-black ${
          reverse ? 'md:col-start-1 md:row-start-1 md:border-r-2' : 'md:border-l-2'
        }`}
      >
        <div className="w-full max-w-sm">{widget}</div>
      </div>
    </motion.div>
  );
}

export default function FeatureRow() {
  return (
    <section id="features" className="border-b-2 border-black">
      <Row
        number="01"
        tag="RAG Search"
        title={"Ask Anything.\nGet Cited Answers."}
        body="Our RAG pipeline searches 1704+ Acts and 26,000+ case law documents in real-time. Every answer includes the exact source — act number, section, judgment reference."
        widget={<SearchWidget />}
      />
      <Row
        number="02"
        tag="Multilingual"
        title={"English.\nSinhala. Tamil."}
        body="Ask in any language Sri Lanka speaks. Lawguide understands and responds in all three official languages. No translation loss. No compromise on legal accuracy."
        widget={<MultilingualWidget />}
        reverse
      />
      <Row
        number="03"
        tag="Case Law"
        title={"2100+ Judgments.\nAt Your Fingertips."}
        body="Supreme Court and Court of Appeal judgments indexed and searchable. AI extracts the ratio decidendi, principles, and directly cites which judgment supports your answer."
        widget={<CitationsWidget />}
      />
    </section>
  );
}
