import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from './Services';

interface ServiceDetailsProps {
  service: ServiceItem;
  onBack: () => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onBack }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen pt-28 pb-20 animate-fade-in-up">
      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] mb-16 overflow-hidden">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            {service.desc}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-primary">Overview</h2>
            <div className="prose prose-lg prose-invert text-gray-300 leading-relaxed">
              <p>{service.longDesc}</p>
              <p>
                At AIxAI, we don't just implement technology; we integrate it into the DNA of your organization. 
                Our team works closely with your stakeholders to ensure that the {service.title} solution we build 
                is not only technically sound but also aligned with your long-term strategic vision.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a 
                href="#contact" 
                onClick={(e) => {
                  // If we are in a "page" mode, hash links might not scroll properly if the contact section isn't rendered.
                  // But since we will implement this by hiding sections, we might need to handle this.
                  // For now, let's assume the Contact component is rendered at the bottom of this view or we navigate back.
                  // A simple mailto or external link works best, or we keep the contact form in the details view.
                }}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-black transition-all hover:shadow-[0_0_40px_-10px_rgba(0,240,255,0.6)] hover:scale-105"
              >
                Inquire About This Service
              </a>
            </div>
          </div>

          {/* Sidebar / Features */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="text-sm font-bold text-white mb-2">Why Choose AIxAI?</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We combine deep industry expertise with cutting-edge research to deliver solutions that give you an unfair advantage in the market.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};