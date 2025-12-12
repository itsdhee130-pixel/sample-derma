import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">World-Class Treatments</h3>
            <p className="text-slate-600">
              We utilize cutting-edge technology and evidence-based protocols to address your skin and hair concerns effectively.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100} className="h-full">
              <div className="group h-full bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-primary-500" />
                </div>
                
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary-500 shadow-sm mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                
                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <span className="ml-1">→</span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;