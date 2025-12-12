import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary-500 p-2 rounded-lg text-white group-hover:bg-primary-600 transition-colors">
              <Sparkles size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-slate-800 leading-none">GlowDerma</h1>
              <p className="text-xs text-slate-500 tracking-wider font-medium">LUCKNOW</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-slate-600 hover:text-primary-500 font-medium text-sm transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone size={16} />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col pt-24 px-6`}>
        <div className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-2xl font-serif font-medium text-slate-800 border-b border-slate-100 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary-500 text-white text-center py-4 rounded-xl font-bold mt-4 shadow-lg shadow-primary-500/30"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;