import React from 'react';
import { Play, Mic, FileText, ExternalLink, Newspaper, ArrowRight } from 'lucide-react';
import { MEDIA_LINKS, BLOG_CTA } from '../constants'; // <-- IMPORTED BLOG_CTA

const Media: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* HEADER */}
      <section className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Media & Press</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Interviews, podcasts, and features sharing the message of emotional restoration.
        </p>
      </section>

      {/* --- NEW: ATTRACTIVE BLOG CTA SECTION --- */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="relative p-8 md:p-16 rounded-3xl text-center overflow-hidden bg-brand-dark border-2 border-brand-accent/30 shadow-2xl group transition-all duration-500 hover:border-brand-accent">
          
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative z-10">
            <Newspaper size={48} className="text-brand-accent mx-auto mb-4 animate-pulse group-hover:animate-none" />
            
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">
              {BLOG_CTA.title}
            </h2>
            <p className="text-brand-muted text-lg mb-8 max-w-3xl mx-auto">
              {BLOG_CTA.subtitle}
            </p>

            <a
              href={BLOG_CTA.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 text-base tracking-wide bg-brand-accent text-brand-darker hover:bg-white hover:text-brand-darker shadow-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]"
            >
              {BLOG_CTA.buttonText} <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      {/* --- END NEW SECTION --- */}

      <section className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-serif text-white mb-8">Featured Interviews & Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEDIA_LINKS.map((item) => (
            <a 
              key={item.id} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all hover:-translate-y-1 group block"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                   {item.type === 'video' && <Play size={20} />}
                   {item.type === 'podcast' && <Mic size={20} />}
                   {item.type === 'article' && <FileText size={20} />}
                </div>
                <ExternalLink size={20} className="text-brand-muted group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2 leading-tight group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-brand-muted uppercase tracking-wider font-semibold">
                {item.source}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;