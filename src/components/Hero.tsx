import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleJoinWaitlist = () => {
    window.open('https://tally.so/r/mV72dl', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-medium">{t.hero.location}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.hero.title}{' '}
            <span className="text-blue-600">{t.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          
          <button
            onClick={handleJoinWaitlist}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t.hero.joinWaitlist}
          </button>
          
          <p className="text-gray-500 mt-6">{t.hero.comingSoonNote}</p>
        </div>
      </div>
    </section>
  );
}