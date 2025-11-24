import React, { useState } from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services, ServiceItem } from './components/Services';
import { ServiceDetails } from './components/ServiceDetails';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleServiceClick = (service: ServiceItem) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-primary selection:text-black">
      {/* Dynamic Liquid Background */}
      <Background />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col w-full">
        <Header onHomeClick={handleGoHome} />
        
        <main className="flex flex-col items-center w-full">
          {selectedService ? (
             <ServiceDetails service={selectedService} onBack={handleGoHome} />
          ) : (
            <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 space-y-24 md:space-y-32 pb-24">
              <Hero />
              <Features />
              <Services onServiceClick={handleServiceClick} />
              <Process />
              <Stats />
              <Work />
              <Contact />
            </div>
          )}
        </main>

        <Footer />
      </div>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;