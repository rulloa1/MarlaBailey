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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
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
    </div>
  );
};

export default App;