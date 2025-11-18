import React from 'react';

const services = [
  {
    title: "AI Strategy",
    desc: "Crafting a roadmap for AI integration that aligns with your business goals.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" // Abstract Neural
  },
  {
    title: "Machine Learning",
    desc: "Developing predictive and generative models to unlock new capabilities.",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" // Geometric Data
  },
  {
    title: "Data Automation",
    desc: "Automating complex data pipelines to improve efficiency and accuracy.",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop" // Flowing lines
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
        Our Services
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group relative overflow-hidden rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img 
                src={service.img} 
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};