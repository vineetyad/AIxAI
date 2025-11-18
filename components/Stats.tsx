import React from 'react';
import { Reveal } from './Reveal';

export const Stats: React.FC = () => {
  return (
    <section className="w-full">
      <Reveal width="100%">
        <div className="w-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            <div className="flex flex-col items-center gap-2 p-4">
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white drop-shadow-lg">95%</span>
              <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">Client Satisfaction</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white drop-shadow-lg">3x</span>
              <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">Average ROI</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white drop-shadow-lg">50+</span>
              <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">Projects Delivered</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};