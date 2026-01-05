import React from 'react';
import { ArrowRight } from 'lucide-react';

const Neighborhoods: React.FC = () => {
  const areas = [
    {
      name: "The Woodlands",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      count: "124 Listings"
    },
    {
      name: "Gleannloch Farms",
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
      count: "45 Listings"
    },
    {
      name: "Auburn Lakes",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
      count: "18 Listings"
    },
    {
      name: "Benders Landing",
      image: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=800&q=80",
      count: "32 Listings"
    }
  ];

  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Explore Areas</span>
              <h2 className="text-4xl font-serif text-brand-dark">Popular Neighborhoods</h2>
           </div>
           <a href="#" className="hidden md:flex items-center gap-2 text-brand-dark hover:text-brand-primary text-xs font-bold uppercase tracking-widest transition-all mt-4 md:mt-0">
              View All Areas <ArrowRight size={16} />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="group relative h-[450px] overflow-hidden cursor-pointer">
              <img 
                src={area.image} 
                alt={area.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full border-b-4 border-transparent group-hover:border-brand-primary transition-all duration-300">
                <h3 className="text-2xl font-serif text-white mb-2">{area.name}</h3>
                <p className="text-brand-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">{area.count}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
             <a href="#" className="inline-flex items-center gap-2 text-brand-dark font-bold uppercase tracking-widest text-xs">
              View All Areas <ArrowRight size={16} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Neighborhoods;