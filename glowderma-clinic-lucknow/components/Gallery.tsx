import React, { useState } from 'react';
import FadeIn from './FadeIn';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Acne', 'Hair', 'Anti-Aging'];

  const images = [
    { id: 1, category: 'Acne', before: 'https://picsum.photos/seed/acne1a/400/300', after: 'https://picsum.photos/seed/acne1b/400/300', title: 'Severe Acne Treatment' },
    { id: 2, category: 'Hair', before: 'https://picsum.photos/seed/hair1a/400/300', after: 'https://picsum.photos/seed/hair1b/400/300', title: 'PRP Hair Restoration' },
    { id: 3, category: 'Anti-Aging', before: 'https://picsum.photos/seed/age1a/400/300', after: 'https://picsum.photos/seed/age1b/400/300', title: 'Non-Surgical Facelift' },
    { id: 4, category: 'Acne', before: 'https://picsum.photos/seed/acne2a/400/300', after: 'https://picsum.photos/seed/acne2b/400/300', title: 'Scar Reduction' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Real Results</h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredImages.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 100}>
              <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-2 mb-4 h-64">
                   <div className="flex-1 relative overflow-hidden rounded-lg group">
                      <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</div>
                   </div>
                   <div className="flex-1 relative overflow-hidden rounded-lg">
                      <img src={item.after} alt="After" className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">After</div>
                   </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">Real Patient of GlowDerma</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;