import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import FeatureRow from './components/FeatureRow';
import SecondaryStrip from './components/SecondaryStrip';
import Pricing from './components/Pricing';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen bg-white font-mono">
        {/* Fixed sidebar desktop */}
        <Sidebar />
        {/* Main content — offset by sidebar width on desktop */}
        <main className="flex-1 md:ml-60 w-full">
          <Hero />
          <FeatureRow />
          <SecondaryStrip />
          <Pricing />
          <SiteFooter />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
