import React, { useEffect, useState, useRef } from 'react';
import { STATS } from '../constants';
import FadeIn from './FadeIn';

const Counter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    });
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <FadeIn>
              <h2 className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Excellence in Every Detail</h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                At GlowDerma, we don't just treat skin; we build confidence. Our facility in Gomti Nagar adheres to the highest international standards of safety and hygiene.
              </p>
              
              <ul className="space-y-4">
                {['US-FDA Approved Technology', 'Strict Sterilization Protocols', 'Customized Treatment Plans', 'Post-Procedure Care Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, index) => (
              <FadeIn key={index} delay={index * 150} direction={index % 2 === 0 ? 'left' : 'up'}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                  <div className="text-primary-400 mb-4">
                    <stat.icon size={32} />
                  </div>
                  <div className="text-4xl font-bold font-serif mb-1">
                    <Counter end={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;