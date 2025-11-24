import React from 'react';
import { Play, ArrowRight, Mail, Instagram, Linkedin, Twitter, Clapperboard, Sparkles, Cpu } from 'lucide-react';

export const QuantumCanvas: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#F2F4F8] text-[#2D2D2D] font-sans selection:bg-[#8B5CF6] selection:text-white overflow-x-hidden pb-10">
      
      {/* Navbar */}
      <nav className="w-full px-6 py-8 flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="flex gap-4 bg-white px-2 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.03)] items-center">
            <a href="#" className="px-6 py-2 bg-[#F2F4F8] rounded-full text-sm font-bold text-[#8B5CF6]">Home</a>
            <a href="#work" className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-[#8B5CF6] transition-colors">Work</a>
            <a href="#about" className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-[#8B5CF6] transition-colors">About</a>
        </div>

        <div className="flex gap-3">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-gray-400 shadow-[0_10px_20px_rgba(0,0,0,0.03)] hover:text-[#8B5CF6] hover:scale-110 transition-all">
                    <Icon className="w-4 h-4" />
                </a>
            ))}
        </div>
      </nav>

      {/* Main Grid Content */}
      <main className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-[minmax(350px,auto)_minmax(300px,auto)] gap-6">
        
        {/* Hero Card */}
        <div className="col-span-1 md:col-span-6 bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_40px_rgba(139,92,246,0.05)] flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D2D2D] leading-tight">
                    Quantum Canvas <br/> <span className="text-[#8B5CF6]">Studio</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                    Where generative AI meets cinematic storytelling. We craft visual narratives that defy reality using state-of-the-art neural networks.
                </p>
            </div>
            
            {/* Soft Gradient Blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200 rounded-full blur-[80px] opacity-60 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute bottom-10 right-10 hidden md:block">
                 <Sparkles className="w-12 h-12 text-[#8B5CF6] opacity-20" />
            </div>
        </div>

        {/* Work Card */}
        <div className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(139,92,246,0.1)] transition-all cursor-pointer">
             <div className="w-20 h-20 mb-6 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform duration-500">
                <Clapperboard className="w-10 h-10" />
             </div>
             <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">My Works</h2>
             <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Explore Gallery</span>
             
             <button className="absolute bottom-6 right-6 w-10 h-10 bg-[#F2F4F8] rounded-full flex items-center justify-center text-[#2D2D2D] group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
             </button>
        </div>

        {/* About Card */}
        <div className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(139,92,246,0.1)] transition-all cursor-pointer">
             <div className="w-20 h-20 mb-6 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <div className="w-8 h-8 rounded-full border-4 border-[#8B5CF6]/30 border-t-[#8B5CF6] animate-spin" />
             </div>
             <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">Process</h2>
             <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">How We Create</span>

             <button className="absolute bottom-6 right-6 w-10 h-10 bg-[#F2F4F8] rounded-full flex items-center justify-center text-[#2D2D2D] group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
             </button>
        </div>

        {/* Contact/Connect Card */}
        <div className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(139,92,246,0.1)] transition-all">
            <div>
                <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">Collaboration</h2>
                <p className="text-gray-500 text-sm">Reach me directly, let's make magic.</p>
            </div>
            
            <a href="mailto:HQ@aixai.co.in" className="mt-8 w-full py-4 bg-[#F2F4F8] rounded-2xl text-[#2D2D2D] font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-[#2D2D2D] group-hover:text-white transition-colors">
                CONNECT <Mail className="w-4 h-4" />
            </a>
        </div>

        {/* Showreel / Image Card */}
        <div className="col-span-1 md:col-span-4 bg-[#2D2D2D] rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.2)] group cursor-pointer min-h-[300px]">
            <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                alt="Abstract AI Art" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
            </div>
            <div className="absolute bottom-6 left-6">
                <span className="text-xs font-bold text-white/60 tracking-widest uppercase">Showreel 2024</span>
            </div>
        </div>

        {/* Tech Stack Card */}
        <div className="col-span-1 md:col-span-5 bg-white rounded-[2.5rem] p-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col justify-center relative overflow-hidden">
             <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8 z-10">Generative Engines</h2>
             
             <div className="grid grid-cols-2 gap-4 z-10">
                {['Runway Gen-2', 'Pika Labs', 'Sora', 'Midjourney', 'Stable Diffusion', 'ElevenLabs'].map((tool, i) => (
                    <div key={i} className="px-4 py-2 rounded-xl bg-[#F2F4F8] text-gray-500 text-sm font-medium hover:bg-[#8B5CF6] hover:text-white transition-colors cursor-default">
                        {tool}
                    </div>
                ))}
             </div>

             {/* Decorative Elements */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-[60px] opacity-60"></div>
             <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden sm:block opacity-10">
                 <Cpu className="w-32 h-32 text-[#8B5CF6]" />
             </div>
        </div>

      </main>

      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>© 2024 Quantum Canvas Studio. A Division of AIxAI.</p>
      </footer>
    </div>
  );
};
