import React from 'react';
import { Sparkles, ChevronRight, Heart, ArrowRight } from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="py-16 sm:py-20 bg-[#FFF1F5] border-t-2 border-[#F8D7E2] relative overflow-hidden">
      
      {/* Background Dots & Ambience */}
      <div className="absolute inset-0 bg-pink-dots opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-[#C9B8DE]/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#EFB3C8]/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D98FA9]">
            <span className="text-xs">🌷</span>
            <span>04 / SCRAPBOOK TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#362430] tracking-tight flex items-center gap-2">
            <span>My journey so far</span>
            <span className="text-[#D98FA9] font-normal">♡</span>
          </h2>

          <p className="text-[#5D4757] text-base">
            Growing from computer applications into backend development.
          </p>
        </div>

        {/* Decorated Scrapbook Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {journeyTimeline.map((item, idx) => {
            const isFinal = idx === journeyTimeline.length - 1;
            const isGoal = item.tag.includes("Active Goal");

            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border-2 transition-all text-left flex flex-col justify-between space-y-4 shadow-xs hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden ${
                  isFinal
                    ? 'bg-gradient-to-br from-[#FFFDFB] via-[#FFF5F8] to-[#FFF1F5] border-[#EFB3C8]'
                    : isGoal
                    ? 'bg-[#FFFDFB] border-[#EFB3C8] shadow-md shadow-[#EFB3C8]/10'
                    : 'bg-[#FFFDFB] border-[#F8D7E2] hover:border-[#EFB3C8]'
                }`}
              >
                {/* Scrapbook Top Paper Tape */}
                <div className="washi-tape-pink absolute -top-1 right-6 px-3 py-0.5 rotate-1">
                  <span className="text-[8px] font-mono font-bold text-[#705668]">STEP {item.step}</span>
                </div>

                {/* Top Badge */}
                <div className="flex items-center justify-between pt-1">
                  <span 
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      isFinal
                        ? 'bg-[#D98FA9] text-white'
                        : 'bg-[#FFF1F5] text-[#362430] border border-[#EFB3C8]'
                    }`}
                  >
                    {item.step}
                  </span>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF5F8] text-[#493743] border border-[#F8D7E2]">
                    {item.tag}
                  </span>
                </div>

                {/* Body Content */}
                <div className="space-y-1">
                  <h3 className="text-xl font-serif-display font-bold text-[#362430] group-hover:text-[#D98FA9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#8A7080] font-medium">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#5D4757] leading-relaxed pt-1 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-2 border-t border-[#FCE8EE] flex items-center justify-between text-[10px] font-mono text-[#8A7080]">
                  <span>Step {idx + 1} of {journeyTimeline.length}</span>
                  {isFinal ? (
                    <span className="text-[#D98FA9] font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>always growing</span>
                    </span>
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-[#EFB3C8] group-hover:translate-x-1 transition-transform" />
                  )}
                </div>

              </div>
            );
          })}

        </div>

        {/* Fresher Note Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-[#FFFDFB] border-2 border-[#EFB3C8] flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-xs">
          <div className="space-y-1">
            <h4 className="font-serif-display font-bold text-[#362430] text-base sm:text-lg flex items-center gap-1.5">
              <span>Ready for Entry-Level Backend Opportunities</span>
              <span>🎀</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#5D4757]">
              Eager to learn from experienced developers, write clean Java/Spring Boot code, and contribute to engineering teams.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-[#362430] text-[#FFF8F8] hover:bg-[#493743] transition-all shadow-xs"
            >
              <span>GET IN TOUCH</span>
              <Heart className="w-3.5 h-3.5 text-[#EFB3C8] fill-[#EFB3C8]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
