import React from 'react';
import { Sparkles, Code2, Heart } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#FFF8F8] border-t-2 border-[#F8D7E2] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#EFB3C8]/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C9B8DE]/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D98FA9]">
            <span className="text-xs">🎀</span>
            <span>03 / FEATURED BUILDS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#362430] tracking-tight flex items-center gap-2">
            <span>Things I've built</span>
            <span className="text-[#D98FA9] font-normal">♡</span>
          </h2>

          <p className="text-[#5D4757] text-base">
            Projects that helped me learn by actually building things. Explore repositories and live preview links below.
          </p>
        </div>

        {/* Self-Editable Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Recruiter / Deployment Note Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FFF1F5] border-2 border-[#EFB3C8] text-xs text-[#5D4757] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div className="flex items-start sm:items-center gap-2.5">
            <span className="text-lg">🚀</span>
            <span>
              <strong>Note for Recruiters:</strong> Projects are under active development. Both code repositories and preview website links are attached for exploration.
            </span>
          </div>
          <span className="font-handwriting text-sm text-[#D98FA9] font-bold shrink-0">
            "building step by step" ♡
          </span>
        </div>

      </div>
    </section>
  );
}
