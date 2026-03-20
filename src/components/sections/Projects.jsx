import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "PG Search Engine",
    description: "A web platform that helps users find PG accommodations easily with search, filtering, and detailed listings.",
    techStack: ["TypeScript", "Next.js", "MongoDB"],
    image: "/projects/pg-search.png",
    highlights: [
      "Built with advanced search and filtering capabilities.",
      "Ensured responsive UI and fast performance using Server-Side Rendering.",
      "Designed a clean and user-friendly interface."
    ],
    githubUrl: "https://github.com/Siddharath205/Rental-Pg.git"
  },
  {
    title: "Travel Agency Website",
    description: "Designed and developed a responsive and visually appealing front-end for a travel agency website, focusing on user engagement and smooth navigation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/travel-agency.png",
    highlights: [
      "Fully responsive design for all devices.",
      "Interactive UI elements and smooth transitions.",
      "Clean layout with modern design aesthetics.",
      "Optimized for fast loading and performance."
    ],
    githubUrl: "https://github.com/Siddharath205/Travel-Agency-Website.git"
  },
  {
    title: "CA Services & Business Advisory Web Application",
    description: "A responsive full-stack web application with service requests and user interaction management.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/ca-services.png",
    highlights: [
      "Built a responsive full-stack web application.",
      "Developed reusable UI components using Tailwind CSS for scalable front-end architecture.",
      "Implemented backend APIs to manage service requests and user interactions."
    ],
    githubUrl: "https://github.com/Siddharath205/CA-Services.git"
  },
  {
    title: "Responsive Restaurant Website",
    description: "A multi-page responsive restaurant website with a functional contact form and dynamic sections.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/restaurant.png",
    highlights: [
      "Designed and developed a multi-page responsive restaurant website.",
      "Implemented sticky navigation bar, testimonials section, and functional contact form.",
      "Focused on clean UI design and responsive layouts."
    ],
    githubUrl: "https://github.com/Siddharath205/Responsive-Restaurant-Website.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#09090b]/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.3)] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="h-56 w-full relative overflow-hidden flex items-center justify-center border-b border-zinc-800 group-hover:bg-zinc-800 transition-colors">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2 mt-4 text-sm text-zinc-300">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex">
                      <span className="text-primary mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-8 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-zinc-800/50 text-zinc-300 hover:text-white hover:bg-primary transition-all text-sm font-medium shadow-sm hover:shadow-primary/20 hover:-translate-y-0.5"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
