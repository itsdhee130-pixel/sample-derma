import React from 'react';
import { DOCTOR } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

const Doctor: React.FC = () => {
  return (
    <section id="doctor" className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full md:w-1/2">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-200 rounded-[3rem] transform rotate-3 scale-105"></div>
                <img 
                  src={DOCTOR.image} 
                  alt={DOCTOR.name} 
                  className="relative rounded-[3rem] shadow-2xl w-full object-cover h-[500px] md:h-[600px] bg-slate-200"
                />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  <p className="text-sm font-bold text-primary-600 tracking-wide mb-1">MEET THE EXPERT</p>
                  <p className="text-slate-600 text-xs italic">"Skin care is healthcare, not just vanity."</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2">
            <FadeIn>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2">{DOCTOR.name}</h2>
              <p className="text-primary-600 font-medium mb-6 text-lg">{DOCTOR.role}</p>
              <p className="inline-block bg-slate-100 px-3 py-1 rounded text-sm text-slate-600 font-semibold mb-6">
                {DOCTOR.qualifications}
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {DOCTOR.bio}
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-4">Core Specializations:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOCTOR.specialties.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 size={18} className="text-secondary-500" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#contact"
                className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
              >
                Book Appointment with Dr. Sharma
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Doctor;