import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
          
          <div className="mt-12 max-w-3xl glass-card p-8 rounded-2xl animate-slide-up">
            <p className="text-slate-300 text-lg leading-relaxed text-center sm:text-left mb-4">
              I am a <strong className="text-primary font-semibold">MERN Stack Developer</strong> with hands-on experience building modern and scalable web applications. My technical expertise deeply involves working with <strong className="text-white">React.js, Node.js, Express.js, and MongoDB</strong> to create seamless full-stack solutions.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mt-4 text-center sm:text-left">
              I am passionate about creating intuitive user experiences and writing clean, efficient code. I continuously learn and adapt to new technologies to build robust applications that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
