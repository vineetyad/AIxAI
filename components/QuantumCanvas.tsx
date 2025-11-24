import React, { useState } from 'react';
import { Play, ArrowRight, Mail, Instagram, Linkedin, Twitter, Clapperboard, Sparkles, Cpu, Home, Target, Zap, Users, X } from 'lucide-react';
import { Background } from './Background';

export const QuantumCanvas: React.FC = () => {
  const [view, setView] = useState<'home' | 'about'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const message = (formData.get('message') as string || '').trim();

    const newErrors: {name?: string, email?: string, message?: string} = {};

    // Validate Name
    if (!name) {
      newErrors.name = 'Name is required.';
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address (e.g., name@company.com).';
    }

    // Validate Message
    if (!message) {
      newErrors.message = 'Message is required.';
    } else if (message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});
    setIsSubmitting(true);

    // Append Web3Forms Access Key
    formData.append("access_key", "f7762166-f677-4553-88d3-218edb56f940");
    // Add context to know it came from Quantum Canvas
    formData.append("source", "Quantum Canvas Studio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent.");
        form.reset();
        setIsContactOpen(false);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-primary selection:text-black overflow-x-hidden pb-10 relative">
      
      {/* Dynamic Background */}
      <Background />

      {/* Content Wrapper */}
      <div className="relative z-10">
        
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex justify-between items-center max-w-[1400px] mx-auto sticky top-0 z-50">
          <div className="flex gap-1 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg shadow-black/20">
              <button 
                onClick={() => {
                    setView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                    view === 'home' 
                    ? 'bg-primary/10 border border-primary/20 text-primary' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Home className="w-4 h-4" /> Home
              </button>
              <a href="#work" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors hidden sm:block">Work</a>
              <button 
                onClick={() => {
                    setView('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    view === 'about' 
                    ? 'bg-white/10 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                About
              </button>
          </div>

          <div className="flex gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                      <Icon className="w-4 h-4" />
                  </a>
              ))}
          </div>
        </nav>

        {/* View Switcher */}
        {view === 'home' ? (
             /* Main Grid Content (Home) */
            <main className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-[minmax(350px,auto)_minmax(300px,auto)] gap-6 animate-fade-in-up">
            
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
            <div 
                onClick={() => setView('about')}
                className="col-span-1 md:col-span-3 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.1)] transition-all duration-300 cursor-pointer"
            >
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
                
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="mt-8 w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all"
                >
                    CONNECT <Mail className="w-4 h-4" />
                </button>
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
        ) : (
             /* About View */
            <section className="max-w-[1000px] mx-auto px-6 py-6 animate-fade-in-up">
                 <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase mb-8">
                            <Users className="w-3 h-3" /> About Us
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                            The Architecture of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Imagination</span>
                        </h1>
                        
                        <div className="prose prose-lg prose-invert text-gray-300 max-w-none">
                            <p className="text-xl leading-relaxed mb-6">
                                Quantum Canvas Studio is not just a production house; it is a laboratory where the physics of storytelling are rewritten. We believe that Artificial Intelligence is the most significant leap in artistic expression since the invention of the camera.
                            </p>
                            
                            <p className="mb-10 text-gray-400">
                                Founded by a collective of filmmakers, neural architects, and visual artists, we exist at the intersection of human emotion and machine precision. Our mission is to democratize cinematic excellence, allowing creators to manifest worlds that previously existed only in dreams.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 my-12">
                                {/* Vision Cards */}
                                <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 hover:border-primary/30 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                        <Target className="text-primary w-6 h-6"/> Precision
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Controlling chaos. We fine-tune generative models to deliver exact directorial visions, moving beyond random outputs to precise artistic intent. Every frame is calculated, every pixel is purposeful.
                                    </p>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 hover:border-primary/30 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                        <Zap className="text-primary w-6 h-6"/> Velocity
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Speed of thought. What used to take months of rendering now happens in real-time, allowing for iterative creativity at the speed of imagination. We prototype entire feature films in days, not years.
                                    </p>
                                </div>
                            </div>
                            
                            <h2 className="text-2xl font-bold text-white mb-4">Our Methodology</h2>
                            <p className="text-gray-400">
                                We combine traditional cinematic principles—composition, lighting, pacing—with the fluid capabilities of neural networks. Our team consists of traditional filmmakers, prompt engineers, and creative technologists working in synthesis. We don't replace the artist; we arm them with a quantum brush.
                            </p>
                        </div>
                        
                        <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-sm text-gray-500">Ready to redefine your visual narrative?</p>
                            <button 
                                onClick={() => setIsContactOpen(true)}
                                className="px-8 py-4 rounded-full bg-primary text-black font-bold hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                Start a Project <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none opacity-30" />
                </div>
            </section>
        )}

        <footer className="mt-12 text-center text-gray-600 text-sm relative z-10">
          <p>© 2024 Quantum Canvas Studio. A Division of AIxAI.</p>
        </footer>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up">
            <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl">
                <button 
                    onClick={() => setIsContactOpen(false)} 
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-white mb-6">Start a Project</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    
                    <div>
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Name"
                        disabled={isSubmitting}
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-all ${
                            errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-primary/50'
                        }`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                        <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        disabled={isSubmitting}
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-all ${
                            errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-primary/50'
                        }`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                    </div>

                    <div>
                        <textarea 
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        disabled={isSubmitting}
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-all resize-none ${
                            errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-primary/50'
                        }`}
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-xl bg-primary text-black font-bold text-lg tracking-wide transition-all ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.5)] hover:scale-[1.02]'
                        }`}
                    >
                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};
