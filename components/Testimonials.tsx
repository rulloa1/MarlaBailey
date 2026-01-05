import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Marla made the process of buying our first home incredibly smooth. Her knowledge of Spring is unmatched!",
      author: "Sarah & Mike T.",
      location: "Bought in Spring Creek"
    },
    {
      text: "We sold our home in record time thanks to Marla's marketing strategy. Highly professional and communicative.",
      author: "David L.",
      location: "Sold in The Woodlands"
    },
    {
      text: "She went above and beyond to find us a rental that fit our specific needs. Truly cares about her clients.",
      author: "Jessica R.",
      location: "Rented in Gleannloch"
    }
  ];

  return (
    <section className="bg-brand-dark py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Client Experiences</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/5 p-10 relative border border-white/10 hover:border-brand-primary/50 transition-colors duration-300">
              <Quote className="text-brand-primary mb-6 w-8 h-8 opacity-50" />
              <p className="text-gray-300 text-lg font-light italic mb-8 leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <p className="font-serif text-lg text-white">{review.author}</p>
                    <p className="text-xs text-brand-primary uppercase tracking-wider">{review.location}</p>
                  </div>
                  <div className="flex gap-1 text-brand-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;