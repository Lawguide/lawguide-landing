import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import FeatureRow from './components/FeatureRow';
import SecondaryStrip from './components/SecondaryStrip';
import Pricing from './components/Pricing';
import WaitlistCTA from './components/WaitlistCTA';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="flex min-h-screen bg-white dark:bg-gray-950 font-mono transition-colors duration-200">
          <Sidebar />
          <main className="flex-1 md:ml-60 w-full">
            <Hero />
            <FeatureRow />
            <SecondaryStrip />
            <Pricing />
            <WaitlistCTA />
            <SiteFooter />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
