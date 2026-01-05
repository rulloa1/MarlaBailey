import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-gray-100 py-4 shadow-sm'
          : 'bg-transparent border-white/10 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="block hover:opacity-80 transition-opacity">
          <Logo variant={isScrolled ? "dark" : "light"} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Buy', 'Rent', 'Sell', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-widest uppercase hover:text-brand-primary transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className={`px-8 py-3 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
            isScrolled 
              ? 'bg-brand-dark text-white hover:bg-brand-primary' 
              : 'bg-white text-brand-dark hover:bg-brand-primary hover:text-white'
          }`}>
            List with Marla
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={isScrolled ? "md:hidden text-brand-dark" : "md:hidden text-white"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center gap-8">
          <button 
            className="absolute top-6 right-6 text-brand-dark"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          <Logo variant="dark" className="mb-8" />
          
          {['Buy', 'Rent', 'Sell', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-serif text-brand-dark hover:text-brand-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-primary text-white px-12 py-4 mt-4 text-sm font-bold tracking-widest uppercase">
            List with Marla
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;