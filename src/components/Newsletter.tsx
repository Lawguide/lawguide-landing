import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleJoinWaitlist = () => {
    window.open('https://tally.so/r/mV72dl', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <Mail className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {t.newsletter.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {t.newsletter.subtitle}
          </p>
          
          <button
            onClick={handleJoinWaitlist}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {t.newsletter.joinWaitlist}
          </button>
          
          <p className="text-gray-500 mt-4 text-sm">
            {t.newsletter.noSpam}
          </p>
        </div>
      </div>
    </section>
  );
}