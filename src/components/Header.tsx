import React from 'react';
import { Scale, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">{t.header.title}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="[&>*]:hover:!text-gray-600">
              <LanguageSelector />
            </div>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">
              {t.header.comingSoon}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}