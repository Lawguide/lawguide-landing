import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types/localization';

const languages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'si' as Language, name: 'Sinhala', nativeName: 'සිංහල' },
  { code: 'ta' as Language, name: 'Tamil', nativeName: 'தமிழ்' }
];

interface LanguageSelectorProps {
  showLabel?: boolean;
}

export default function LanguageSelector({ showLabel = false }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-white transition-colors"
      >
        <Globe className="h-4 w-4" />
        {showLabel && <span className="text-sm">{t.footer.language}:</span>}
        <span className="text-sm">{currentLanguage?.nativeName}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-gray-900 transition-colors ${
                  language === lang.code ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                }`}
              >
                {lang.nativeName}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}