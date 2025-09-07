import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import Status from './components/Status';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <Audience />
        <Status />
        <Newsletter />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;