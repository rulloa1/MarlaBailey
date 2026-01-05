import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Logo variant="light" />
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Marla Bailey sets the standard for luxury real estate in Spring, TX. Dedicated service, proven results, and a commitment to excellence.
            </p>
            
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                    <Linkedin size={18} />
                </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-8">Contact</h4>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-brand-primary mt-1 shrink-0" />
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Office</span>
                        <span className="text-gray-300">Spring, TX (Home Based)</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone size={20} className="text-brand-primary mt-1 shrink-0" />
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</span>
                        <span className="text-gray-300 hover:text-white cursor-pointer">(713) 705-6150</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail size={20} className="text-brand-primary mt-1 shrink-0" />
                     <div>
                        <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Email</span>
                        <span className="text-gray-300 hover:text-white cursor-pointer">marla.bailey@compass.com</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
             <h4 className="font-serif text-xl mb-8">Navigation</h4>
             <ul className="space-y-4 text-sm font-light text-gray-400">
                <li className="hover:text-brand-primary cursor-pointer transition-colors">Home</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors">Exclusive Listings</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors">Neighborhoods</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors">About Marla</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors">Client Reviews</li>
             </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h4 className="font-serif text-xl mb-8">Newsletter</h4>
             <p className="text-gray-400 text-sm font-light mb-6">Subscribe to receive market updates and exclusive listings.</p>
             <div className="flex border-b border-gray-700 pb-2">
                 <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-white placeholder:text-gray-600" />
                 <button className="text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-white transition-colors">Join</button>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-gray-600 text-xs">© 2024 Marla Bailey / Compass. All rights reserved.</p>
           <div className="flex gap-8 text-xs text-gray-600 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;