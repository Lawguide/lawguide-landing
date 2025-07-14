import React from 'react';
import { Scale, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Scale className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">{t.footer.title}</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-sm">{t.footer.madeIn}</span>
            </div>
            <LanguageSelector showLabel />
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-2">
            {t.footer.description}
          </p>
          <p className="text-gray-500 text-xs">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}