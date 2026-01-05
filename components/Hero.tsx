import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover brightness-[0.85]"
        />
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <div className="flex flex-col items-center animate-fade-in-up">
          <span className="text-brand-primary font-medium tracking-[0.2em] uppercase text-xs mb-6 bg-black/50 backdrop-blur-sm px-4 py-2 border border-white/10">
            Premium Real Estate in Spring, TX
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]">
            <span className="block font-medium">Experience</span>
            <span className="block italic font-light text-brand-accent/90">Exceptional Living</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Curated properties and exclusive listings in Spring's most sought-after neighborhoods. Marla Bailey brings world-class marketing to your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
             <button className="bg-brand-primary text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all duration-300">
               View Listings
             </button>
             <button className="bg-transparent border border-white text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all duration-300">
               Contact Marla
             </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
        <span className="text-[10px] uppercase tracking-widest mb-2 block text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default Hero;