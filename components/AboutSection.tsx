import React from 'react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image Composition */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative aspect-[3/4] bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Marla Bailey Real Estate Agent" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
              
              {/* Border Outline Accent */}
              <div className="absolute top-6 -left-6 w-full h-full border-2 border-brand-primary z-[-1] hidden md:block" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">About Marla Bailey</span>
              <h2 className="text-4xl lg:text-6xl font-serif text-brand-dark leading-tight mb-6">
                Your Strategic <br />
                <span className="italic text-gray-400">Real Estate Partner.</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg font-light leading-relaxed">
              With deep expertise in Spring's real estate market, Marla Bailey brings a unique blend of data-driven strategy and concierge service. She doesn't just sell homes; she curates lifestyles and manages complex transactions with grace and precision.
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-serif text-brand-primary">Top 1%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Producer Nationwide</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-serif text-brand-primary">1,200+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Families Helped</span>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-brand-dark text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all duration-300">
                Work with Marla
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;