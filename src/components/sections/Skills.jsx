import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Web Design']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'Database',
    skills: ['MongoDB']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Netlify', 'Render']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0f172a]/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 relative inline-block">
            Technical Skills
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-[#1e293b] rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
