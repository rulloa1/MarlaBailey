import React, { useState } from 'react';
import { ArrowRight, Bed, Bath, Move, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../types';

const ListingCard: React.FC<{ listing: Property }> = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % listing.imageUrls.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + listing.imageUrls.length) % listing.imageUrls.length);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`View details clicked for property: ${listing.title} (${listing.id})`);
  };

  return (
    <div className="group cursor-pointer bg-white transition-all duration-300 flex flex-col h-full border-b border-gray-100 pb-8 hover:border-brand-primary">
      {/* Image Container */}
      <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 mb-6">
        <img 
          src={listing.imageUrls[currentImageIndex]} 
          alt={listing.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.1] group-hover:grayscale-0"
        />
        
        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={prevImage} className="bg-white text-black p-2 hover:bg-brand-primary hover:text-white transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button onClick={nextImage} className="bg-white text-black p-2 hover:bg-brand-primary hover:text-white transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {listing.tags.map((tag) => (
            <span key={tag} className="bg-white text-brand-dark text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col grow px-2">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-serif text-brand-dark group-hover:text-brand-primary transition-colors">{listing.title}</h3>
            <span className="text-xl font-serif text-brand-primary">{listing.price}</span>
        </div>
        
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-4 flex items-center gap-1">
           <MapPin size={12} className="text-brand-primary" /> {listing.location}
        </p>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-6 font-light">
           {listing.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-gray-500 text-sm">
            <div className="flex gap-6">
                <span className="flex items-center gap-2"><Bed size={16} className="text-brand-primary"/> {listing.beds} Beds</span>
                <span className="flex items-center gap-2"><Bath size={16} className="text-brand-primary"/> {listing.baths} Baths</span>
                <span className="flex items-center gap-2"><Move size={16} className="text-brand-primary"/> {listing.sqft} sqft</span>
            </div>
            
            <button 
                onClick={handleViewDetails}
                className="text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-primary border-b border-transparent hover:border-brand-primary transition-all pb-0.5"
            >
                Details
            </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedListings: React.FC = () => {
  const listings: Property[] = [
    {
      id: '1',
      title: 'Modern Farmhouse Estate',
      price: '$650,000',
      location: 'Gleannloch Farms, Spring, TX',
      beds: 4,
      baths: 3.5,
      sqft: '3,200',
      imageUrls: [
        'https://images.unsplash.com/photo-1600596542815-600025529888?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
      ],
      tags: ['Featured'],
      description: 'Experience luxury living in this custom-built modern farmhouse. Features high ceilings, a chef-inspired kitchen, and a private backyard oasis perfect for entertaining.'
    },
    {
      id: '2',
      title: 'Luxury Haven',
      price: '$1,250,000',
      location: 'Benders Landing, Spring, TX',
      beds: 5,
      baths: 5,
      sqft: '4,850',
      imageUrls: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
      ],
      tags: ['Luxury'],
      description: 'Breathtaking estate on a 1-acre lot. Boasting a resort-style pool, home theater, wine grotto, and impeccable finishes throughout.'
    },
    {
      id: '3',
      title: 'Classic Brick Estate',
      price: '$425,000',
      location: 'Spring Creek Oaks, Spring, TX',
      beds: 4,
      baths: 2.5,
      sqft: '2,800',
      imageUrls: [
        'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
      ],
      tags: ['Just Listed'],
      description: 'Charming traditional home zoned to top-rated schools. Offers spacious living areas, a renovated kitchen, and lush landscaping with mature trees.'
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-32 pt-10">
      <div className="flex items-end justify-between mb-16 border-b border-gray-100 pb-6">
        <div>
          <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Exclusive Portfolio</span>
          <h2 className="text-4xl font-serif text-brand-dark">Featured Residences</h2>
        </div>
        <button className="group hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors">
          View all properties
          <ArrowRight size={16} className="text-brand-primary group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
         <button className="bg-brand-secondary text-white px-8 py-3 text-xs font-bold uppercase tracking-widest">
            View All Listings
         </button>
      </div>
    </section>
  );
};

export default FeaturedListings;