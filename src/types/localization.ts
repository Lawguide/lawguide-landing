export type Language = 'en' | 'si' | 'ta';

export interface FeatureRowContent {
  tag: string;
  title: string;
  body: string;
}

export interface StatContent {
  value: string;
  label: string;
  sub: string;
}

export interface PlanContent {
  name: string;
  description: string;
  queries: string;
  features: string[];
  cta: string;
}

export interface Translations {
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustItems: string[];
    stillBuilding: string;
  };
  featureRows: {
    f1: FeatureRowContent;
    f2: FeatureRowContent;
    f3: FeatureRowContent;
    f4: FeatureRowContent;
    f5: FeatureRowContent;
    f6: FeatureRowContent;
  };
  stats: [StatContent, StatContent, StatContent, StatContent];
  waitlist: {
    title: string;
    body: string;
    placeholder: string;
    cta: string;
    success: string;
    note: string;
  };
  pricing: {
    tag: string;
    title: string;
    titleLine2: string;
    body: string;
    monthly: string;
    annual: string;
    annualBadge: string;
    footerNote: string;
    noCard: string;
    popular: string;
    plans: {
      free: PlanContent;
      student: PlanContent;
      professional: PlanContent;
      firm: PlanContent;
    };
  };
  footer: {
    tagline: string;
    description: string;
    copyright: string;
    disclaimer: string;
    platform: string;
    links: { label: string; href: string }[];
    info: string;
    languages: string;
    payments: string;
    builtIn: string;
  };
  nav: {
    features: string;
    pricing: string;
    tryFree: string;
    menu: string;
    close: string;
    stillBuilding: string;
  };
}
