import React, { useState } from 'react';
import { Search, MapPin, DollarSign, SlidersHorizontal } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  return (
    <div className="relative z-30 -mt-24 px-6 mb-32">
      <div className="max-w-6xl mx-auto">
        {/* Search Container */}
        <div className="bg-white shadow-2xl p-1">
          
          {/* Tabs */}
          <div className="flex mb-1">
            {['Buy', 'Rent', 'Sold'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-brand-dark text-white'
                    : 'bg-gray-50 text-gray-400 hover:text-brand-dark'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-white border border-gray-100 p-6 md:p-8">
            
            {/* Location */}
            <div className="md:col-span-5 relative group border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Location</label>
              <div className="flex items-center">
                <MapPin size={18} className="text-brand-primary mr-3" />
                <input 
                  type="text" 
                  placeholder="City, Neighborhood, or ZIP" 
                  className="w-full bg-transparent outline-none text-gray-900 font-serif text-xl placeholder:text-gray-300 placeholder:font-sans"
                />
              </div>
            </div>

            {/* Price */}
            <div className="md:col-span-4 relative group border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:px-6 pt-4 md:pt-0">
               <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Price Range</label>
               <div className="flex items-center">
                <DollarSign size={18} className="text-brand-primary mr-3" />
                <select className="w-full bg-transparent outline-none text-gray-900 font-serif text-xl appearance-none cursor-pointer">
                  <option>Any Price</option>
                  <option>$300k - $500k</option>
                  <option>$500k - $800k</option>
                  <option>$800k - $1.5M</option>
                  <option>$1.5M+</option>
                </select>
               </div>
            </div>

            {/* Submit */}
            <div className="md:col-span-3 pt-4 md:pt-0 md:pl-6 flex items-end">
              <button className="w-full h-14 bg-brand-primary hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;