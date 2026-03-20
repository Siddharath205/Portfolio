import React from 'react';
import { Mail, ArrowDown, FolderGit2, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-20 pb-12 px-6 relative">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-end justify-between gap-12 z-10 animate-fade-in-up md:pb-12">
        
        {/* Text Content - Aligned toward bottom-left */}
        <div className="flex-1 flex flex-col justify-end items-center md:items-start text-center md:text-left">
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Siddharath Mishra
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6">
            MERN Stack Developer
          </h3>
          <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed md:pr-10">
            "Building scalable and user-focused web applications using modern JavaScript technologies."
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <FolderGit2 size={20} />
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-zinc-800/50"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-6 text-slate-500 w-full justify-center md:justify-start">
            <a href="https://github.com/Siddharath205" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-125">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/SiddharathMishra" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-125">
              <Linkedin size={24} />
            </a>
            <a href="mailto:Siddharathmishra3@gmail.com" className="hover:text-primary transition-all hover:scale-125">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Image Content - Positioned on the right */}
        <div className="flex-1 flex justify-center md:justify-end items-center w-full mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl border-2 border-zinc-800 shadow-2xl shadow-primary/10 overflow-hidden group rotate-3 hover:rotate-0 transition-all duration-500 bg-zinc-900">
            <img 
              src="/pfp.png" 
              alt="Siddharath Mishra" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://ui-avatars.com/api/?name=Siddharath+Mishra&background=8B5CF6&color=fff&size=512";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
