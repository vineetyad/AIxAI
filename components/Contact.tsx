import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center text-center">
      <div className="max-w-2xl mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Let's Build The Future.
        </h2>
        <p className="text-gray-400 text-lg">
          Ready to unlock the power of AI for your business? Get in touch with our experts today.
        </p>
      </div>

      <div className="w-full max-w-xl relative">
        {/* Glow effect behind form */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20" />
        
        <form className="relative w-full rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl p-8 space-y-6 text-left shadow-2xl">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Name"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Company Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Company Email"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea 
              id="message"
              name="message"
              rows={4}
              placeholder="How can we help?"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-4 rounded-xl bg-primary text-black font-bold text-lg tracking-wide hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};