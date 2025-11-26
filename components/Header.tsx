import React, { useState, useEffect } from 'react';
import { BrainCircuit } from 'lucide-react';

interface HeaderProps {
  onHomeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (onHomeClick) {
      // If we are on a details page, we want to go back to home first
      onHomeClick();
      // We might need to delay the scroll slightly if the home page is re-rendering
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12`}>
        <div 
          className={`flex items-center justify-between rounded-2xl border border-white/10 px-6 py-3 backdrop-blur-xl transition-all duration-500 ${
            scrolled ? 'bg-black/60 shadow-lg shadow-primary/5' : 'bg-white/5'
          }`}
        >
          {/* Logo */}
          <button 
            onClick={() => onHomeClick && onHomeClick()}
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 text-primary">
              <BrainCircuit className="w-full h-full fill-primary/10 stroke-primary" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50" />
            </div>
            
            <div className="flex items-center gap-3">
                <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                    AI<span className="text-primary">X</span>AI
                </span>
                <span className="text-[0.65rem] font-bold text-primary tracking-[0.2em] uppercase ml-0.5">
                    AI Agency India
                </span>
                </div>
            </div>
          </button>

          {/* Nav - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {['Services', 'Process', 'Work', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="px-4 py-2 text-sm font-medium text-gray-300 transition-all rounded-full hover:text-white hover:bg-white/10 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icon (Hidden on Desktop for simplicity in this demo) */}
          <div className="md:hidden text-white/70">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </div>
        </div>
      </div>
    </header>
  );
};
