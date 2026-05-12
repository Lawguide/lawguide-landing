import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import FeatureRow from './components/FeatureRow';
import SecondaryStrip from './components/SecondaryStrip';
import Waitlist from './components/Waitlist';
import Pricing from './components/Pricing';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen bg-white font-mono">
        <Sidebar />
        <main className="flex-1 md:ml-60 w-full">
          <Hero />
          <FeatureRow />
          <SecondaryStrip />
          <Waitlist />
          <Pricing />
          <SiteFooter />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
