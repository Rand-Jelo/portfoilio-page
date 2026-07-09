import { useState, useMemo } from 'react';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Projects - Filterable project showcase with category tabs
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const headerRef = useScrollAnimation();

  // Filter projects by selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent" />

      {/* Background orbs */}
      <div
        className="orb w-80 h-80 bg-neon-pink animate-float"
        style={{ top: '20%', left: '-5%' }}
      />
      <div
        className="orb w-72 h-72 bg-neon-cyan animate-float-slow"
        style={{ bottom: '10%', right: '-3%' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <p className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">
            03. My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A collection of projects I've built while learning and growing as a developer.
            Each one taught me something new.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white glass'
              }`}
            >
              {activeCategory === category && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-violet glow-purple" />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div key={activeCategory} className="grid sm:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>See more on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
