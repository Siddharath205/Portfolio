import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            Education
            <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-700/50 shadow-xl hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <GraduationCap size={100} />
            </div>
            <div className="relative z-10">
              <div className="text-primary font-bold tracking-wider text-sm mb-2">2025 – Present</div>
              <h3 className="text-2xl font-bold text-white mb-2">Master of Computer Applications (MCA)</h3>
              <p className="text-slate-400">Graphic Era (Deemed to be University), Dehradun</p>
            </div>
          </div>

          <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-700/50 shadow-xl hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <GraduationCap size={100} />
            </div>
            <div className="relative z-10">
              <div className="text-primary font-bold tracking-wider text-sm mb-2">2022 – 2025</div>
              <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-slate-400">Graphic Era Hill University, Dehradun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
