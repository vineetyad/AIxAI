import React, { useState, useEffect } from 'react';
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
import { QuantumCanvas } from './components/QuantumCanvas';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isQuantumCanvas, setIsQuantumCanvas] = useState(false);

  useEffect(() => {
    // Check for query parameter instead of pathname to avoid 404s on static hosts
    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'quantum') {
      setIsQuantumCanvas(true);
    }
  }, []);

  const handleServiceClick = (service: ServiceItem) => {
    // Special handling for AI Film Making to open in a new tab
    if (service.id === 'film') {
      // Open in new tab using query parameter
      window.open('?page=quantum', '_blank');
      return;
    }

    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render specific landing page if route matches
  if (isQuantumCanvas) {
    return <QuantumCanvas />;
  }

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