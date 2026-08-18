import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroWorkspaceVisual from './HeroWorkspaceVisual';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      
      {/* Background Decorative Pink Blobs & Sparkles */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#EFB3C8]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-6 left-10 w-80 h-80 bg-[#C9B8DE]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#F8D7E2]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Identity */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top Identity: Name & Professional Descriptor */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-bold text-[#362430] tracking-tight leading-[1.12]">
                {personalInfo.name}
              </h1>
              <p className="text-sm sm:text-base font-mono text-[#705668] tracking-wide font-medium">
                {personalInfo.descriptor}
              </p>
            </div>

            {/* Current Technical Focus */}
            <p className="text-base sm:text-lg text-[#5D4757] leading-relaxed max-w-xl font-normal">
              {personalInfo.heroIntro}
            </p>

            {/* Personal Creative Note / Secondary Statement */}
            <div className="space-y-1 border-l-3 border-[#EFB3C8] pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#362430]">
                {personalInfo.heroHeadline}
              </h2>
              <p className="font-handwriting text-xl sm:text-2xl text-[#D98FA9] font-bold tracking-wide flex items-center gap-1.5">
                <span>{personalInfo.heroSubline}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider bg-[#362430] text-[#FFF8F8] hover:bg-[#493743] shadow-md shadow-[#362430]/15 transition-all transform active:scale-95"
                id="hero-view-work-btn"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#EFB3C8]" />
              </a>

              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider bg-[#FFFDFB] text-[#362430] border-2 border-[#EFB3C8] hover:bg-[#FFF1F5] hover:border-[#D98FA9] shadow-xs transition-all active:scale-95 cursor-pointer"
                id="hero-download-resume-btn"
              >
                <FileText className="w-3.5 h-3.5 text-[#D98FA9]" />
                <span>DOWNLOAD RESUME</span>
                <span className="text-[11px] text-[#D98FA9]">♡</span>
              </button>
            </div>

            {/* Quick Profile Links with Pink Stationery Styling */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-[#8A7080] font-medium">find me on:</span>
              
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FFFDFB] border-2 border-[#F8D7E2] text-[#493743] hover:border-[#EFB3C8] hover:bg-[#FFF1F5] hover:text-[#D98FA9] transition-all shadow-2xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FFFDFB] border-2 border-[#F8D7E2] text-[#493743] hover:border-[#EFB3C8] hover:bg-[#FFF1F5] hover:text-[#D98FA9] transition-all shadow-2xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                className="p-2.5 rounded-full bg-[#FFFDFB] border-2 border-[#F8D7E2] text-[#493743] hover:border-[#EFB3C8] hover:bg-[#FFF1F5] hover:text-[#D98FA9] transition-all shadow-2xs"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Illustrated Creative Workspace */}
          <div className="lg:col-span-5">
            <HeroWorkspaceVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
