import React from 'react';
import { Stethoscope, ClipboardList, Sparkles, HeartHandshake } from 'lucide-react';
import FadeIn from './FadeIn';

const steps = [
  { icon: Stethoscope, title: 'Consultation', desc: 'In-depth skin analysis and history taking.' },
  { icon: ClipboardList, title: 'Diagnosis', desc: 'Expert diagnosis and personalized plan.' },
  { icon: Sparkles, title: 'Treatment', desc: 'Safe procedure using advanced tech.' },
  { icon: HeartHandshake, title: 'Aftercare', desc: 'Follow-up support for lasting results.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Your Journey to Radiance</h2>
            <p className="text-slate-500">Simple, transparent, and patient-centric process.</p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 200}>
                <div className="bg-white p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/30 mb-6 relative">
                    <step.icon size={28} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-slate-900 text-sm shadow border border-slate-100">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;