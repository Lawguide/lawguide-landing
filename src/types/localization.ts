export type Language = 'en' | 'si' | 'ta';

export interface Translations {
  header: {
    title: string;
    comingSoon: string;
    language: string;
  };
  hero: {
    location: string;
    title: string;
    titleHighlight: string;
    description: string;
    joinWaitlist: string;
    comingSoonNote: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      library: {
        title: string;
        description: string;
      };
      consultations: {
        title: string;
        description: string;
      };
      resources: {
        title: string;
        description: string;
      };
      jobs: {
        title: string;
        description: string;
      };
      bookstore: {
        title: string;
        description: string;
      };
      documents: {
        title: string;
        description: string;
      };
      management: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
    };
  };
  audience: {
    title: string;
    subtitle: string;
    items: {
      students: {
        title: string;
        description: string;
      };
      professionals: {
        title: string;
        description: string;
      };
      corporates: {
        title: string;
        description: string;
      };
      individuals: {
        title: string;
        description: string;
      };
    };
  };
  status: {
    title: string;
    subtitle: string;
    roadmapTitle: string;
    mainLanguage: string;
    localizationNote: string;
    roadmapItems: {
      library: {
        title: string;
        description: string;
      };
      consultations: {
        title: string;
        description: string;
      };
      resources: {
        title: string;
        description: string;
      };
      documents: {
        title: string;
        description: string;
      };
      jobs: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
    };
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    joinWaitlist: string;
    successTitle: string;
    successMessage: string;
    noSpam: string;
  };
  footer: {
    title: string;
    madeIn: string;
    description: string;
    buildTogether: string;
    copyright: string;
    language: string;
  };
}