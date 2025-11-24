import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  img: string;
  longDesc: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "strategy",
    title: "AI Strategy",
    desc: "Crafting a roadmap for AI integration that aligns with your business goals.",
    longDesc: "Navigating the complex landscape of Artificial Intelligence requires more than just technical know-how; it demands a strategic vision. Our AI Strategy service provides a comprehensive roadmap tailored to your specific business objectives. We analyze your current infrastructure, identify high-impact opportunities for automation and innovation, and create a phased implementation plan that mitigates risk while maximizing ROI. Whether you are looking to optimize internal workflows or revolutionize your customer experience, our strategic guidance ensures your AI adoption is purposeful, scalable, and future-proof.",
    features: ["Infrastructure Gap Analysis", "Technology Stack Selection", "ROI Forecasting", "Risk Assessment & Compliance", "Phased Implementation Roadmap"],
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ml",
    title: "Machine Learning",
    desc: "Developing predictive and generative models to unlock new capabilities.",
    longDesc: "Unlock the hidden value in your data with our bespoke Machine Learning solutions. We move beyond generic algorithms to build custom models trained on your proprietary data. From predictive analytics that forecast market trends to computer vision systems that automate quality control, our engineering team constructs robust ML architectures. We specialize in both supervised and unsupervised learning, ensuring that your systems not only process data but learn from it, becoming smarter and more efficient over time.",
    features: ["Custom Model Training", "Predictive Analytics", "Natural Language Processing (NLP)", "Computer Vision Systems", "Anomaly Detection"],
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "automation",
    title: "Data Automation",
    desc: "Automating complex data pipelines to improve efficiency and accuracy.",
    longDesc: "Data is the fuel of the AI revolution, but raw data is often messy and siloed. Our Data Automation services streamline your information architecture, creating intelligent pipelines that clean, sort, and process data in real-time. We replace manual, error-prone data entry tasks with autonomous agents that ensure data integrity and accessibility. By connecting disparate systems and automating the flow of information, we empower your decision-makers with accurate, up-to-the-minute insights.",
    features: ["ETL Pipeline Development", "Real-time Data Processing", "Automated Reporting", "Legacy System Integration", "Data Warehousing Solutions"],
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "film",
    title: "AI Film Making",
    desc: "Producing cinematic content and visual storytelling using state-of-the-art generative video AI.",
    longDesc: "Redefine the boundaries of visual storytelling with our AI Film Making services. We harness the power of cutting-edge generative video models to produce cinematic content at a fraction of the time and cost of traditional production. From photorealistic advertisements to abstract visualizers and fully animated narratives, our creative technologists blend human direction with AI generation. We handle everything from script-to-video synthesis, voice cloning, and style transfer to post-production upscaling, delivering broadcast-ready visuals that captivate audiences.",
    features: ["Script-to-Video Synthesis", "Custom Avatar Creation", "Voice Cloning & Dubbing", "Style Transfer & Grading", "4K Video Upscaling"],
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "apps",
    title: "AI Apps",
    desc: "Building intelligent, user-centric mobile and web applications powered by custom AI models.",
    longDesc: "We build the next generation of applications where AI is not an afterthought, but the core engine. Our AI Apps service focuses on creating intuitive, intelligent web and mobile experiences. Whether it's a personalized shopping assistant, an intelligent tutor, or a health monitoring system, we integrate sophisticated AI models directly into the user interface. We prioritize low-latency inference and privacy-preserving architecture to ensure your users get a seamless, magical experience right at their fingertips.",
    features: ["Personalization Engines", "Intelligent Search", "Chatbot & Assistant Integration", "On-device Inference", "Context-Aware UI"],
    img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "products",
    title: "Our AI Products",
    desc: "Explore our suite of proprietary AI tools and SaaS platforms designed to accelerate business growth.",
    longDesc: "Beyond our agency services, AIxAI develops proprietary products designed to democratize access to advanced artificial intelligence. Our suite of SaaS tools covers a range of verticals including automated content generation, market intelligence analysis, and no-code model deployment. These products are built on our own robust API infrastructure, offering enterprise-grade reliability and security. Partnering with us gives you early access to these tools, allowing you to stay ahead of the curve with ready-to-deploy AI solutions.",
    features: ["SaaS Platform Access", "API Integration", "White-label Solutions", "Enterprise Support", "Early Beta Access"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  }
];

interface ServicesProps {
  onServiceClick: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
        Our Services
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <button 
            key={service.id} 
            onClick={() => onServiceClick(service)}
            className="group relative overflow-hidden rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md text-left transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer w-full h-full flex flex-col"
          >
            <div className="aspect-square w-full overflow-hidden relative">
              <img 
                src={service.img} 
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Overlay Icon or CTA */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  {service.desc}
                </p>
                <div className="mt-4 text-primary text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  View Details
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};