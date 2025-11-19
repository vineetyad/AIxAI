import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// REPLACE THIS WITH YOUR ACTUAL WHATSAPP NUMBER (International format without +)
// Example: 919876543210 for India
const WHATSAPP_NUMBER = "918005507037"; 

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the AI assistant for AIxAI. Ask me about our services, process, or how we can transform your business." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(`Hi AIxAI, I was chatting with your AI assistant on the website.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct conversation history for context
      // We only send the last few turns to keep context relevant but efficient
      const history = messages.slice(-6).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const systemPrompt = `
        You are the advanced AI representative for AIxAI (AI Agency India). 
        
        Your Knowledge Base:
        - Services: AI Strategy, Machine Learning (Predictive/Generative), Data Automation.
        - Process: Discovery, Prototyping, Implementation, Scaling.
        - Featured Work: Fintech (Fraud Detection), E-Commerce (Personalization).
        - Value: Bespoke solutions, Expert Team, Measurable ROI.
        - Contact: HQ@aixai.co.in.

        Behavior:
        - Answer questions about these services concisely and professionally.
        - Adopt a futuristic, helpful, and professional tone.
        - If the user wants to hire us, schedule a demo, or has a complex query you cannot answer, strongly encourage them to click the WhatsApp icon/button in the chat header to talk to a human directly.
        - Do not make up false case studies.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [
            ...history,
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
            systemInstruction: systemPrompt,
        }
      });

      const aiText = response.text || "I'm processing that... connection interrupted.";

      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the neural network right now. Please try again or contact us via WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Window */}
      <div 
        className={`w-[350px] sm:w-[400px] flex flex-col overflow-hidden transition-all duration-300 ease-out origin-bottom-right rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl shadow-primary/10 ${
          isOpen ? 'h-[500px] opacity-100 scale-100' : 'h-0 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <MessageSquare className="w-4 h-4" />
              <div className="absolute right-0 top-0 w-2 h-2 bg-green-500 rounded-full border border-black"></div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">AIxAI Assistant</h3>
              <span className="text-[10px] text-primary tracking-wider uppercase">Online</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <button 
              onClick={handleWhatsAppRedirect}
              className="p-2 rounded-full hover:bg-green-500/20 text-gray-400 hover:text-green-400 transition-colors"
              title="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path></svg>
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-black font-medium rounded-br-sm' 
                    : 'bg-white/10 text-gray-200 border border-white/5 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/5 rounded-bl-sm">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-xs text-gray-400">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-black/40">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about AI solutions..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
            />
            <button 
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="absolute right-1.5 p-2 rounded-full bg-primary text-black hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-2 text-center">
             <button onClick={handleWhatsAppRedirect} className="text-[10px] text-gray-500 hover:text-green-400 transition-colors flex items-center justify-center gap-1 w-full">
                Prefer WhatsApp? Click here to chat directly
             </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-black shadow-[0_0_30px_-5px_rgba(0,240,255,0.5)] hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-50" />
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};
