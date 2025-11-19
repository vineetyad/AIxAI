import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-28 pb-10 text-center min-h-[85vh]">
      
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md animate-fade-in-up">
        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
        <span className="text-sm font-medium text-gray-200">Future of Intelligence</span>
      </div>

      {/* Main Headline */}
      <h1 class="inline-block text-8xl leading-[1.18] pb-1 transform translate-y-[0.02em] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl leading-relaxed">
        Transform Your Business with Artificial Intelligence
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-lg text-gray-400 md:text-xl mb-12 leading-relaxed">
        We build custom AI solutions that drive growth, efficiency, and innovation. 
        Experience the liquid speed of neural networks.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a 
          href="#contact" 
          className="group relative flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-black transition-all hover:shadow-[0_0_40px_-10px_rgba(0,240,255,0.6)] hover:scale-105"
        >
          Schedule a Demo
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a 
          href="#work" 
          className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
        >
          View Work
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[120px] rounded-full opacity-40 pointer-events-none" />
    </section>
  );
};
