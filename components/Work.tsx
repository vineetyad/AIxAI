import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    category: "FINTECH",
    title: "Automated Fraud Detection",
    desc: "Developed an ML model that reduced fraudulent transactions by 60%, saving the client millions annually.",
    color: "from-blue-500/20 to-purple-500/5"
  },
  {
    category: "E-COMMERCE",
    title: "Personalized Recommendations",
    desc: "Implemented a recommendation engine that increased user engagement by 25% and average order value by 15%.",
    color: "from-emerald-500/20 to-teal-500/5"
  }
];

export const Work: React.FC = () => {
  return (
    <section id="work">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
        Featured Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div 
            key={i}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.color} backdrop-blur-xl p-8 md:p-10 transition-all hover:-translate-y-1 hover:shadow-2xl`}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
            </div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-primary uppercase rounded-full bg-black/30 border border-white/5">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {project.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group-hover:gap-3">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};