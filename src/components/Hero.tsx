import React from 'react';
import { MapPin, Sparkles, ArrowRight, Play, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleTryNow = () => {
    // This will eventually link to app.lawguide.lk
    window.open('https://app.lawguide.lk', '_blank');
  };

  const handleWatchDemo = () => {
    // Placeholder for demo video
    window.open('#', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50/30 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Location Badge */}
          <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200/50 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span>{t.hero.location}</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <span className="block">{t.hero.title}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          {/* AI Badge */}
          <div className="flex items-center justify-center space-x-2 mb-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Sparkles className="h-4 w-4" />
              <span>Powered by Advanced AI</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {t.hero.description}
            <br />
            <span className="text-blue-600 font-semibold">Experience the future of legal assistance in Sri Lanka.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mb-12 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Secure & Confidential</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Zap className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-medium">Instant Responses</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            <button
              onClick={handleTryNow}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center space-x-2"
            >
              <span>Try LawGuide Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleWatchDemo}
              className="group bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5 text-blue-600" />
              <span>Watch Demo</span>
            </button>
          </div>
          
          {/* Launch Status */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
            <p className="text-gray-500 mb-4">🚀 Now Live & Ready to Use</p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>✨ Free trial available</span>
              <span>•</span>
              <span>🔒 No credit card required</span>
              <span>•</span>
              <span>🇱🇰 Made for Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-cyan-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '3s' }} />
    </section>
  );
}