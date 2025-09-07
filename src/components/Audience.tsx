import React from 'react';
import { Users, Scale, Building2, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Audience() {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: Users,
      title: t.audience.items.students.title,
      description: t.audience.items.students.description,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Scale,
      title: t.audience.items.professionals.title,
      description: t.audience.items.professionals.description,
      color: 'text-teal-600 bg-teal-50'
    },
    {
      icon: Building2,
      title: t.audience.items.corporates.title,
      description: t.audience.items.corporates.description,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: User,
      title: t.audience.items.individuals.title,
      description: t.audience.items.individuals.description,
      color: 'text-green-600 bg-green-50'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.audience.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.audience.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-full ${audience.color} flex items-center justify-center mb-4 mx-auto`}>
                <audience.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-gray-600">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}