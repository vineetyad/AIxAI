import React from 'react';
import { Shapes, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Shapes className="w-8 h-8" />,
    title: "Bespoke Solutions",
    description: "Custom-built AI models tailored to your unique business challenges and architecture."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "A dedicated team of data scientists and engineers obsessed with pushing boundaries."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Measurable ROI",
    description: "Solutions focused on delivering tangible, impactful business outcomes you can see."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="value-prop" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Why Partner With Us?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We're not just developers; we're strategic partners. Our liquid AI infrastructure adapts to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-2xl bg-black/30 border border-white/10 text-primary shadow-inner group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};