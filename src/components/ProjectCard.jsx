import { useRef, useState } from 'react';

/**
 * ProjectCard - Individual project card with 3D tilt hover effect,
 * project image, tech tags, and clickable action links
 * 
 * @param {Object} project - Project data object
 * @param {number} index - Index for stagger animation
 */
export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 3D tilt effect on mouse move
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform('');
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease',
        animationDelay: `${index * 100}ms`,
      }}
      className="glass rounded-3xl overflow-hidden group hover:glow-purple transition-shadow duration-500"
    >
      {/* Project image header */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Placeholder shimmer while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 shimmer" />
        )}

        {/* Project image */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-110`}
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium border border-white/20">
            {project.category}
          </span>
        </div>

        {/* "View Project" overlay on hover */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <span className="px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/30 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Project
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-neon-purple/10 border border-neon-purple/20 text-xs font-mono text-neon-purple group-hover:bg-neon-purple/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-neon-cyan hover:text-white transition-colors group/link"
          >
            <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
          <span className="text-slate-600">•</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors group/link"
          >
            <svg className="w-4 h-4 fill-current group-hover/link:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>

          {/* Arrow indicator */}
          <span className={`ml-auto text-neon-purple transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
            →
          </span>
        </div>
      </div>
    </div>
  );
}