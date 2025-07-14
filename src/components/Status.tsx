import React from 'react';
import { Construction, CheckCircle, Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Status() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.status.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.status.subtitle}
          </p>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white text-blue-700 px-4 py-2 rounded-lg mb-3 shadow-sm">
            <span className="text-sm font-medium">🌐 {t.status.mainLanguage}</span>
          </div>
          <p className="text-gray-600 text-sm">
            {t.status.localizationNote}
          </p>
        </div>
      </div>
    </section>
  );
}