import React, { useState } from 'react';

export const Contact: React.FC = () => {
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
    // Stricter regex for email validation:
    // 1. Alphanumeric + symbols before @
    // 2. Domain name
    // 3. TLD must be at least 2 characters
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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent.");
        form.reset();
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
        
        <form onSubmit={handleSubmit} className="relative w-full rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl p-8 space-y-6 text-left shadow-2xl">
          {/* Honeypot to prevent spam (optional but good practice with web3forms) */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Name"
              disabled={isSubmitting}
              className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.name 
                  ? 'border-red-500/50 focus:border-red-500' 
                  : 'border-white/10 focus:border-primary/50'
              }`}
            />
            {errors.name && (
              <p className="mt-2 text-xs text-red-400 font-medium ml-1">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="sr-only">Company Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Company Email"
              disabled={isSubmitting}
              className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.email 
                  ? 'border-red-500/50 focus:border-red-500' 
                  : 'border-white/10 focus:border-primary/50'
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-xs text-red-400 font-medium ml-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea 
              id="message"
              name="message"
              rows={4}
              placeholder="How can we help?"
              disabled={isSubmitting}
              className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.message 
                  ? 'border-red-500/50 focus:border-red-500' 
                  : 'border-white/10 focus:border-primary/50'
              }`}
            />
            {errors.message && (
              <p className="mt-2 text-xs text-red-400 font-medium ml-1">{errors.message}</p>
            )}
          </div>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl bg-primary text-black font-bold text-lg tracking-wide transition-all ${
              isSubmitting 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.5)] hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};