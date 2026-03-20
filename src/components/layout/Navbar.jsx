import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between relative">
          
          {/* Logo / Branding - Left */}
          <div className="flex-shrink-0 z-10">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border-2 border-primary/30 overflow-hidden group-hover:border-primary group-hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/10">
                <img 
                  src="/pfp.png" 
                  alt="SM" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://ui-avatars.com/api/?name=S+M&background=8B5CF6&color=fff";
                  }}
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter group-hover:text-primary transition-colors hidden sm:block">
                Siddharath<span className="text-primary text-2xl">.</span>
              </span>
            </a>
          </div>

          {/* Centered Navigation - Desktop */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="flex items-center gap-8 bg-zinc-900/40 px-8 py-2.5 rounded-full border border-zinc-800/50 backdrop-blur-md pointer-events-auto transform hover:scale-[1.02] transition-transform duration-300 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm lg:text-[15px] font-medium text-zinc-400 hover:text-white transition-all relative group py-1"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ))}
              
              <div className="w-px h-4 bg-zinc-800/80 mx-1"></div>
              
              <a 
                href="https://github.com/Siddharath205" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-all hover:scale-125 p-1"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block z-10">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 z-10">
             <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg bg-primary text-white text-xs font-bold shadow-lg shadow-primary/20"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-zinc-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-900 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-semibold text-zinc-300 hover:text-primary transition-all flex items-center justify-between group"
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          ))}
          <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
            <a 
              href="https://github.com/Siddharath205" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-zinc-400 font-medium hover:text-white transition-colors"
            >
              <Github size={22} />
              <span className="text-lg">GitHub</span>
            </a>
            <a 
              href="mailto:Siddharathmishra3@gmail.com"
              className="px-6 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold hover:border-primary/50 transition-all"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
