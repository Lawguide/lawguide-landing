import React, { useState } from 'react';
import { Mail, Sparkles, ArrowRight, Rocket, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleGetStarted = () => {
    // This will eventually link to app.lawguide.lk
    window.open('https://app.lawguide.lk', '_blank');
  };

  const handleJoinWaitlist = () => {
    window.open('https://tally.so/r/mV72dl', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main CTA Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
              <Rocket className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Legal Journey?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using LawGuide's AI-powered platform 
            to get instant legal insights and expert assistance.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Zap,
                title: 'Instant Answers',
                desc: 'Get immediate responses to legal queries'
              },
              {
                icon: Shield,
                title: 'Secure & Private',
                desc: 'Your data is protected with enterprise security'
              },
              {
                icon: Sparkles,
                title: 'AI-Powered',
                desc: 'Advanced AI trained on Sri Lankan law'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <button
              onClick={handleGetStarted}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleJoinWaitlist}
              className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              Join Updates List
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>No credit card required</span>
            </div>
            <span>•</span>
            <span>Free 14-day trial</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Secondary Info */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-lg mb-4">
            🇱🇰 Proudly made in Sri Lanka for Sri Lankans
          </p>
          <div className="flex items-center justify-center space-x-8 text-white/60">
            <span>10,000+ Legal Documents</span>
            <span>•</span>
            <span>500+ Daily Users</span>
            <span>•</span>
            <span>24/7 AI Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}