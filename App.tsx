import React from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-primary selection:text-black">
      {/* Dynamic Liquid Background */}
      <Background />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col w-full">
        <Header />
        
        <main className="flex flex-col items-center w-full">
          <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 space-y-24 md:space-y-32 pb-24">
            <Hero />
            <Features />
            <Services />
            <Process />
            <Stats />
            <Work />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;