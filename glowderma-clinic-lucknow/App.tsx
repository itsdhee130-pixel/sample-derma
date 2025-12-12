import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Doctor from './components/Doctor';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsapp(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Doctor />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-500 transform ${
          showWhatsapp ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } hover:scale-110 flex items-center gap-2 group`}
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-bold pl-1">Chat on WhatsApp</span>
        <MessageCircle size={28} className="animate-pulse" />
      </a>
    </div>
  );
};

export default App;