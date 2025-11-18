import React from 'react';

const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your business to understand your challenges." },
  { num: "02", title: "Prototyping", desc: "We build and test a proof-of-concept to validate our approach." },
  { num: "03", title: "Implementation", desc: "We integrate the validated AI solution seamlessly into your workflows." },
  { num: "04", title: "Scaling", desc: "We monitor performance and scale the solution as your business grows." },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          How We Work
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A streamlined liquid process from concept to scale.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-black border-2 border-primary/50 flex items-center justify-center text-2xl font-bold text-primary shadow-[0_0_20px_-5px_rgba(0,240,255,0.4)] mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary">
              {step.num}
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors w-full h-full">
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};