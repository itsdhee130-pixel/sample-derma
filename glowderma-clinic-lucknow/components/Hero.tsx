import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn delay={100}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-900 text-sm font-semibold tracking-wide mb-6">
                ✨ Gomti Nagar's Most Trusted Skin Clinic
              </span>
            </FadeIn>
            
            <FadeIn delay={300}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                Transform Your Skin,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  Transform Your Life
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={500}>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience world-class dermatology and aesthetic treatments right here in Lucknow. 
                Combining advanced medical technology with personalized care for radiant results.
              </p>
            </FadeIn>

            <FadeIn delay={700}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 group"
                >
                  <Calendar size={18} />
                  Book Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services"
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-full font-semibold transition-all flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={900}>
               <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Trust Badges Simple Text for landing page cleanliness */}
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">US-FDA Approved</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Board Certified</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">5-Star Rated</span>
                 </div>
               </div>
            </FadeIn>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
             <FadeIn direction="left" delay={500} className="relative z-10">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-500/20 border-4 border-white">
                  <img 
                    src="https://picsum.photos/seed/skinclinic/600/700" 
                    alt="Radiant woman skin" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute top-10 left-0 lg:-left-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white animate-float">
                    <div className="flex items-center gap-3">
                       <div className="bg-green-100 p-2 rounded-full text-green-600">
                         <Calendar size={20} />
                       </div>
                       <div>
                         <p className="text-xs text-slate-500">Next Available</p>
                         <p className="font-bold text-slate-800">Today, 4:00 PM</p>
                       </div>
                    </div>
                  </div>

                  <div className="absolute bottom-10 right-0 lg:-right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-3">
                       <div className="bg-primary-100 p-2 rounded-full text-primary-600">
                         <ArrowRight size={20} />
                       </div>
                       <div>
                         <p className="font-bold text-slate-800">10k+ Happy Patients</p>
                         <div className="flex -space-x-2 mt-1">
                            {[1,2,3].map(i => (
                              <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                            ))}
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
             </FadeIn>
             
             {/* Decorative pattern */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-dots-pattern opacity-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;