import React from 'react';
import { Play, ArrowRight, Mail, Instagram, Linkedin, Twitter, Clapperboard, Sparkles, Cpu, Home } from 'lucide-react';

export const QuantumCanvas: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#F2F4F8] text-gray-900 font-sans selection:bg-primary selection:text-white overflow-x-hidden pb-10 relative">
      
      {/* Light Theme Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob" />
          <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-[20%] w-[60vw] h-[60vw] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex gap-1 p-1 bg-white/60 border border-white/40 rounded-full backdrop-blur-xl shadow-sm">
              <a href="/" className="px-6 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-bold text-gray-900 hover:text-primary transition-all flex items-center gap-2 shadow-sm">
                <Home className="w-4 h-4" /> Home
              </a>
              <a href="#work" className="px-6 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Work</a>
              <a href="#about" className="px-6 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About</a>
          </div>

          <div className="flex gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white/60 border border-white/40 rounded-full text-gray-500 hover:bg-white hover:text-primary hover:shadow-md transition-all hover:scale-110">
                      <Icon className="w-4 h-4" />
                  </a>
              ))}
          </div>
        </nav>

        {/* Main Grid Content */}
        <main className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-[minmax(350px,auto)_minmax(300px,auto)] gap-6">
          
          {/* Hero Card */}
          <div className="col-span-1 md:col-span-6 bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col justify-between relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
              <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 tracking-widest uppercase mb-6">
                    <Sparkles className="w-3 h-3" /> AI Filmmaking
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                      Quantum Canvas <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Studio</span>
                  </h1>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                      Where generative AI meets cinematic storytelling. We craft visual narratives that defy reality using state-of-the-art neural networks.
                  </p>
              </div>
              
              {/* Decorative Blur */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-[60px] opacity-60 group-hover:scale-110 transition-all duration-1000"></div>
              <div className="absolute bottom-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12">
                   <Clapperboard className="w-40 h-40 text-gray-900" />
              </div>
          </div>

          {/* Work Card */}
          <div className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
               <div className="w-20 h-20 mb-6 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-all duration-500 shadow-inner">
                  <Clapperboard className="w-10 h-10" />
               </div>
               <h2 className="text-2xl font-bold text-gray-900 mb-2">My Works</h2>
               <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 tracking-widest uppercase transition-colors">Explore Gallery</span>
               
               <button className="absolute bottom-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
               </button>
          </div>

          {/* Process/About Card */}
          <div className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
               <div className="w-20 h-20 mb-6 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-inner">
                  <Cpu className="w-10 h-10" />
               </div>
               <h2 className="text-2xl font-bold text-gray-900 mb-2">Process</h2>
               <span className="text-xs font-bold text-gray-400 group-hover:text-purple-600 tracking-widest uppercase transition-colors">How We Create</span>

               <button className="absolute bottom-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
               </button>
          </div>

          {/* Contact/Connect Card */}
          <div className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Collaboration</h2>
                  <p className="text-gray-500 text-sm">Reach me directly, let's make magic.</p>
              </div>
              
              <a href="mailto:HQ@aixai.co.in" className="mt-8 w-full py-4 bg-gray-50 rounded-2xl text-gray-900 font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-gray-900 group-hover:text-white transition-all">
                  CONNECT <Mail className="w-4 h-4" />
              </a>
          </div>

          {/* Showreel / Image Card */}
          <div className="col-span-1 md:col-span-4 bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-lg group cursor-pointer min-h-[300px]">
              <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                  alt="Abstract AI Art" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg text-white">
                      <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
              </div>
              <div className="absolute bottom-6 left-6">
                  <span className="text-xs font-bold text-white/90 tracking-widest uppercase mb-1 block">Watch Showreel</span>
                  <span className="text-white text-sm">2024 Collection</span>
              </div>
          </div>

          {/* Tech Stack Card */}
          <div className="col-span-1 md:col-span-5 bg-white rounded-[2.5rem] p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col justify-center relative overflow-hidden group">
               <h2 className="text-2xl font-bold text-gray-900 mb-8 z-10">Generative Engines</h2>
               
               <div className="grid grid-cols-2 gap-4 z-10">
                  {['Runway Gen-2', 'Pika Labs', 'Sora', 'Midjourney', 'Stable Diffusion', 'ElevenLabs'].map((tool, i) => (
                      <div key={i} className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all cursor-default text-center">
                          {tool}
                      </div>
                  ))}
               </div>

               {/* Decorative Elements */}
               <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-[60px] opacity-80"></div>
               <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden sm:block opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                   <Cpu className="w-32 h-32 text-gray-400" />
               </div>
          </div>

        </main>

        <footer className="mt-12 text-center text-gray-400 text-sm relative z-10">
          <p>© 2024 Quantum Canvas Studio. A Division of AIxAI.</p>
        </footer>
      </div>
    </div>
  );
};
