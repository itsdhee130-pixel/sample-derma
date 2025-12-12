import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">GlowDerma</h2>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Gomti Nagar's premier destination for clinical dermatology and aesthetic excellence. Reimagining skincare with science and compassion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#doctor" className="hover:text-primary-400 transition-colors">Dr. Sharma</a></li>
              <li><a href="#gallery" className="hover:text-primary-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Acne Treatment</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Laser Hair Reduction</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Anti-Aging</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">PRP Therapy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">HydraFacial</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} GlowDerma Clinic. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> in Lucknow
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;