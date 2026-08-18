import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#FFF8F8] border-t-2 border-[#F8D7E2] relative overflow-hidden text-left">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-pink-dots opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#F8D7E2]">
          
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-serif-display text-lg font-bold text-[#362430]">
                Smruti Sanjeebani
              </span>
              <span className="text-xs">🎀</span>
            </div>
            <p className="font-handwriting text-lg text-[#D98FA9] font-bold">
              "Made with code, curiosity &amp; a little bit of pink. ♡"
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#FFFDFB] border-2 border-[#F8D7E2] text-[#493743] hover:border-[#EFB3C8] hover:text-[#D98FA9] transition-all shadow-2xs"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#FFFDFB] border-2 border-[#F8D7E2] text-[#493743] hover:border-[#EFB3C8] hover:text-[#D98FA9] transition-all shadow-2xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="p-2.5 rounded-full bg-[#FFFDFB] border-2 border-[#F8D7E2] text-[#493743] hover:border-[#EFB3C8] hover:text-[#D98FA9] transition-all shadow-2xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-full bg-[#362430] text-[#FFF8F8] hover:bg-[#493743] transition-all shadow-xs cursor-pointer ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#EFB3C8]" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Freshness */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A7080]">
          <div>
            &copy; {new Date().getFullYear()} Smruti Sanjeebani &bull; MCA Student &amp; Aspiring Software Developer
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenResume}
              type="button"
              className="hover:text-[#362430] hover:underline transition-colors"
            >
              Resume
            </button>
            <a href="#projects" className="hover:text-[#362430] hover:underline transition-colors">
              Projects
            </a>
            <a href="#journey" className="hover:text-[#362430] hover:underline transition-colors">
              Timeline
            </a>
            <a href="#creative" className="hover:text-[#362430] hover:underline transition-colors">
              Doodles ♡
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
