import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Patient Stories</h2>
          </FadeIn>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 200} className="w-full md:w-[350px]">
              <div className="bg-secondary-50 p-8 rounded-3xl relative h-full flex flex-col hover:scale-105 transition-transform duration-300 border border-secondary-100">
                <Quote className="text-secondary-200 absolute top-6 right-6" size={48} />
                
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed italic mb-6 flex-grow">"{testimonial.text}"</p>

                <div className="border-t border-secondary-200 pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}, {testimonial.age}</p>
                  <p className="text-sm text-secondary-600 font-medium">{testimonial.treatment}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;