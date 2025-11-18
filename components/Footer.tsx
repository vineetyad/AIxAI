import React from 'react';
import { BrainCircuit, Linkedin, Twitter, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleShare = (platform: 'twitter' | 'linkedin') => {
    if (typeof window === 'undefined') return;
    
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out AIxAI - The Future of Liquid Intelligence");
    
    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-lg mt-10 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 text-primary">
              <BrainCircuit className="w-full h-full fill-primary/10 stroke-primary" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold tracking-tight text-white leading-none">
                AI<span className="text-primary">X</span>AI
              </span>
              <span className="text-[0.55rem] font-medium text-primary/80 tracking-[0.25em] uppercase ml-0.5">
                AI Agency India
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Follow Us */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Follow</span>
              <div className="flex gap-2">
                <a 
                  href="#" 
                  className="group p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all hover:scale-110"
                  aria-label="Follow on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="group p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all hover:scale-110"
                  aria-label="Follow on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/10"></div>

            {/* Share Section */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <Share2 className="w-3 h-3" /> Share
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="group relative p-2 rounded-full bg-primary/5 border border-primary/10 text-primary/80 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all hover:scale-110 hover:shadow-[0_0_15px_-3px_rgba(0,240,255,0.3)]"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="group relative p-2 rounded-full bg-primary/5 border border-primary/10 text-primary/80 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all hover:scale-110 hover:shadow-[0_0_15px_-3px_rgba(0,240,255,0.3)]"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 text-center md:text-left pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 AIxAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};