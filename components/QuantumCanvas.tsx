import React from 'react';
import { Play, ArrowRight, Mail, Instagram, Linkedin, Twitter, Clapperboard, Sparkles, Cpu, Home } from 'lucide-react';
import { Background } from './Background';

export const QuantumCanvas: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-primary selection:text-black overflow-x-hidden pb-10 relative">
      
      {/* Dynamic Background */}
      <Background />

      {/* Content Wrapper */}
      <div className="relative z-10">
        
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex gap-1 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg shadow-black/20">
              <a href="/" className="px-6 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-bold text-primary hover:bg-primary hover:text-black transition-all flex items-center gap-2">
                <Home className="w-4 h-4" /> Home
              </a>
              <a href="#work" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors">Work</a>
              <a href="#about" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
          </div>

          <div className="flex gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                      <Icon className="w-4 h-4" />
                  </a>
              ))}
          </div>
        </nav>

        {/* Main Grid Content */}
        <main className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-[minmax(350px,auto)_minmax(300px,auto)] gap-6">
          
          {/* Hero Card */}
          <div className="col-span-1 md:col-span-6 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase mb-6">
                    <Sparkles className="w-3 h-3" /> AI Filmmaking
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
                      Quantum Canvas <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Studio</span>
                  </h1>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                      Where generative AI meets cinematic storytelling. We craft visual narratives that defy reality using state-of-the-art neural networks.
                  </p>
              </div>
              
              {/* Animated Glow */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"></div>
              <div className="absolute bottom-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:rotate-12">
                   <Clapperboard className="w-40 h-40 text-white" />
              </div>
          </div>

          {/* Work Card */}
          <div className="col-span-1 md:col-span-3 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.1)] transition-all duration-300 cursor-pointer">
               <div className="w-20 h-20 mb-6 bg-gradient-to-tr from-gray-800 to-black rounded-3xl border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-inner">
                  <Clapperboard className="w-10 h-10" />
               </div>
               <h2 className="text-2xl font-bold text-white mb-2">My Works</h2>
               <span className="text-xs font-bold text-gray-500 group-hover:text-primary tracking-widest uppercase transition-colors">Explore Gallery</span>
               
               <button className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  <ArrowRight className="w-5 h-5" />
               </button>
          </div>

          {/* About Card */}
          <div className="col-span-1 md:col-span-3 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.1)] transition-all duration-300 cursor-pointer">
               <div className="w-20 h-20 mb-6 bg-gradient-to-tr from-gray-800 to-black rounded-3xl border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-inner">
                  <Cpu className="w-10 h-10" />
               </div>
               <h2 className="text-2xl font-bold text-white mb-2">Process</h2>
               <span className="text-xs font-bold text-gray-500 group-hover:text-primary tracking-widest uppercase transition-colors">How We Create</span>

               <button className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  <ArrowRight className="w-5 h-5" />
               </button>
          </div>

          {/* Contact/Connect Card */}
          <div className="col-span-1 md:col-span-3 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-2xl flex flex-col justify-between group hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
              <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Collaboration</h2>
                  <p className="text-gray-400 text-sm">Reach me directly, let's make magic.</p>
              </div>
              
              <a href="mailto:HQ@aixai.co.in" className="mt-8 w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  CONNECT <Mail className="w-4 h-4" />
              </a>
          </div>

          {/* Showreel / Image Card */}
          <div className="col-span-1 md:col-span-4 bg-black rounded-[2.5rem] border border-white/10 overflow-hidden relative shadow-2xl group cursor-pointer min-h-[300px]">
              <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                  alt="Abstract AI Art" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
              </div>
              <div className="absolute bottom-6 left-6">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">Watch Showreel</span>
                  <span className="text-white text-sm">2024 Collection</span>
              </div>
          </div>

          {/* Tech Stack Card */}
          <div className="col-span-1 md:col-span-5 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-2xl flex flex-col justify-center relative overflow-hidden group hover:border-primary/30 transition-all">
               <h2 className="text-2xl font-bold text-white mb-8 z-10">Generative Engines</h2>
               
               <div className="grid grid-cols-2 gap-4 z-10">
                  {['Runway Gen-2', 'Pika Labs', 'Sora', 'Midjourney', 'Stable Diffusion', 'ElevenLabs'].map((tool, i) => (
                      <div key={i} className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 text-gray-400 text-sm font-medium hover:bg-primary hover:text-black hover:border-primary transition-all cursor-default text-center">
                          {tool}
                      </div>
                  ))}
               </div>

               {/* Decorative Elements */}
               <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
               <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden sm:block opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                   <Cpu className="w-32 h-32 text-primary" />
               </div>
          </div>

        </main>

        <footer className="mt-12 text-center text-gray-600 text-sm relative z-10">
          <p>© 2024 Quantum Canvas Studio. A Division of AIxAI.</p>
        </footer>
      </div>
    </div>
  );
};
