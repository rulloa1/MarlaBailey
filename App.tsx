import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import Neighborhoods from './components/Neighborhoods';
import FeaturedListings from './components/FeaturedListings';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-primary/20 selection:text-brand-dark relative">
      <Navbar />
      <main className="relative">
        <Hero />
        <SearchSection />
        <Neighborhoods />
        <FeaturedListings />
        <AboutSection />
        <Testimonials />
      </main>
      <Footer />

      {/* Preview Mode Watermark */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 text-[10vw] font-bold text-black opacity-[0.15] z-[9999] pointer-events-none select-none whitespace-nowrap font-serif">
        Preview Mode
      </div>
    </div>
  );
};

export default App;