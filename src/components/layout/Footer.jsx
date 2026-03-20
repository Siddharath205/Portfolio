import React from 'react';
import { Github, Linkedin, Mail, Phone, Send, User, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#09090b] pt-20 pb-10 border-t border-zinc-900" id="contact">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 text-center md:text-left">
          
          {/* Left Column: Text & Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
              I’m currently open to new opportunities and collaborations. 
              Whether you have a project in mind, a role to offer, or just want to connect — feel free to reach out.
            </p>

            <div className="space-y-6 flex flex-col items-center md:items-start">
              <a 
                href="mailto:Siddharathmishra3@gmail.com" 
                className="flex items-center gap-4 text-zinc-300 hover:text-primary transition-all group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Email Me</p>
                  <p className="text-base font-medium">Siddharathmishra3@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919634975509" 
                className="flex items-center gap-4 text-zinc-300 hover:text-primary transition-all group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Call Me</p>
                  <p className="text-base font-medium">+91 9634975509</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <form className="space-y-4 glass-card p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name" 
                    className="w-full pl-12 pr-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="email" 
                    required 
                    placeholder="Email Address" 
                    className="w-full pl-12 pr-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="text" 
                  required 
                  placeholder="Subject" 
                  className="w-full pl-12 pr-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
              <textarea 
                required 
                rows="4" 
                placeholder="Your Message..." 
                className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Minimal Footer bar */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © 2026 Siddharath Mishra. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-zinc-500">
            <a href="https://github.com/Siddharath205" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/SiddharathMishra" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
