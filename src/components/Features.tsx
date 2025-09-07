import React from 'react';
import { MessageCircle, BookOpen, Calendar, Briefcase, GraduationCap, Globe, Sparkles, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: MessageCircle,
      title: 'AI-Powered Legal Assistant',
      description: 'Get instant answers to legal questions with our advanced RAG-based AI system trained on Sri Lankan law.',
      image: '/chat.jpeg',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Legal Library',
      description: 'Access thousands of legal documents, acts, and regulations with powerful search capabilities.',
      image: '/library.jpeg',
      gradient: 'from-purple-500 to-pink-500',
      delay: '200'
    },
    {
      icon: Calendar,
      title: 'Expert Consultation Booking',
      description: 'Schedule consultations with qualified legal professionals at your convenience.',
      image: '/landing-page.jpeg',
      gradient: 'from-green-500 to-teal-500',
      delay: '400'
    },
    {
      icon: Briefcase,
      title: 'Legal Career Hub',
      description: 'Discover job opportunities in the legal field and connect with top law firms.',
      image: null,
      gradient: 'from-orange-500 to-red-500',
      delay: '600'
    },
    {
      icon: GraduationCap,
      title: 'Student Resources',
      description: 'Access educational materials, case studies, and learning resources for law students.',
      image: null,
      gradient: 'from-indigo-500 to-purple-500',
      delay: '800'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Available in English and Sinhala, making legal information accessible to all Sri Lankans.',
      image: null,
      gradient: 'from-pink-500 to-rose-500',
      delay: '1000'
    }
  ];

  const aiFeatures = [
    {
      icon: Sparkles,
      title: 'Smart Document Analysis',
      description: 'AI-powered analysis of legal documents with instant insights and summaries.'
    },
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Enterprise-grade security ensuring your legal queries remain private and protected.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Legal Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Legal Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LawGuide combines cutting-edge AI technology with comprehensive legal resources 
            to transform how you access and understand Sri Lankan law.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Feature Image */}
              {feature.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
              
              {/* Content */}
              <div className="p-6 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* AI Features Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Powered by Advanced AI Technology
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Experience the future of legal assistance with our state-of-the-art artificial intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="opacity-90">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          {[
            { number: '10,000+', label: 'Legal Documents' },
            { number: '500+', label: 'Daily Queries Resolved' },
            { number: '99.9%', label: 'Accuracy Rate' },
            { number: '24/7', label: 'AI Assistant Available' }
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1200 + index * 100}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}