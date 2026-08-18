import React from 'react';
import { Github, ExternalLink, Code2, Globe, Sparkles, Heart } from 'lucide-react';
import { projectStatuses } from '../data/projects';

export default function ProjectCard({ project }) {
  const statusInfo = projectStatuses[project.status] || projectStatuses["in-progress"];

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDFB] border-2 border-[#F8D7E2] hover:border-[#EFB3C8] transition-all flex flex-col justify-between text-left space-y-5 shadow-xs hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
      
      {/* Top Accent Strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 opacity-90"
        style={{ backgroundColor: project.accent || '#EFB3C8' }}
      />

      <div className="space-y-4">
        
        {/* Top Bar: Category + Status Badge */}
        <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
          <span 
            className="text-[10.5px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border text-[#493743]"
            style={{ 
              backgroundColor: `${project.accent}30`, 
              borderColor: project.accent 
            }}
          >
            {project.category}
          </span>

          {/* Automatic Status Badge */}
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold border shadow-2xs"
            style={{
              backgroundColor: statusInfo.badgeBg,
              borderColor: statusInfo.badgeBorder,
              color: statusInfo.badgeText
            }}
          >
            <span 
              className="w-1.5 h-1.5 rounded-full" 
              style={{ backgroundColor: statusInfo.dotColor }} 
            />
            <span>{statusInfo.label}</span>
          </span>
        </div>

        {/* Project Image or Attractive Pink Fallback Illustration */}
        <div className="w-full aspect-[16/9] rounded-2xl bg-gradient-to-tr from-[#FFF1F5] via-[#FFF8FA] to-[#FCE8EE] border border-[#F8D7E2] overflow-hidden relative flex flex-col items-center justify-center p-4">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="text-center space-y-2 relative z-10">
              <div className="w-10 h-10 mx-auto rounded-2xl bg-[#FFFDFB] border-2 border-[#EFB3C8] flex items-center justify-center shadow-xs text-[#362430]">
                <Code2 className="w-5 h-5 text-[#D98FA9]" />
              </div>
              <div>
                <p className="font-serif-display font-bold text-sm text-[#362430]">
                  {project.title}
                </p>
                <span className="text-[10px] font-mono text-[#8A7080]">
                  {project.technologies.slice(0, 3).join(" · ")}
                </span>
              </div>
            </div>
          )}

          {/* Pink Grid Background Overlay on Placeholder */}
          <div className="absolute inset-0 bg-pink-grid opacity-40 pointer-events-none" />
        </div>

        {/* Project Title */}
        <div className="space-y-1">
          <h3 className="text-2xl font-serif-display font-bold text-[#362430] group-hover:text-[#D98FA9] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <span className="text-xs">🌸</span>
          </h3>
          <p className="text-xs text-[#5D4757] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Role & Contribution */}
        {project.role && (
          <div className="p-3 rounded-2xl bg-[#FFF5F8] border border-[#F8D7E2] text-xs text-[#5D4757]">
            <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#493743] block">
              Contribution:
            </span>
            <p className="text-[11.5px] leading-relaxed">
              {project.role}
            </p>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="space-y-1 pt-1">
          <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#8A7080] block font-bold">
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-lg text-[10.5px] font-mono bg-[#FFF8F8] text-[#493743] border border-[#F8D7E2]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Action Buttons: Repository + Live Website Link */}
      <div className="pt-3.5 border-t border-[#FCE8EE] flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2">
          {/* GitHub Repo Button */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-bold bg-[#362430] text-[#FFF8F8] hover:bg-[#493743] transition-all shadow-2xs active:scale-95 cursor-pointer"
              id={`project-github-${project.id}`}
            >
              <Github className="w-3.5 h-3.5 text-[#EFB3C8]" />
              <span>Repository</span>
              <ExternalLink className="w-3 h-3 text-[#EFB3C8]" />
            </a>
          )}

          {/* Live Website / Demo Button */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-bold bg-[#FFF1F5] text-[#362430] border border-[#EFB3C8] hover:bg-[#F8D7E2] transition-all shadow-2xs active:scale-95 cursor-pointer"
              id={`project-demo-${project.id}`}
              title="Live project website / preview demo"
            >
              <Globe className="w-3.5 h-3.5 text-[#D98FA9]" />
              <span>Website</span>
              <ExternalLink className="w-3 h-3 text-[#D98FA9]" />
            </a>
          )}
        </div>

        <span className="text-[11px] font-handwriting text-[#D98FA9] font-bold">
          backend project ♡
        </span>
      </div>

    </div>
  );
}
