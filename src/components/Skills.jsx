import React from 'react';
import { 
  Sparkles, 
  Server, 
  Layers, 
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Star
} from 'lucide-react';
import { skillsHierarchy } from '../data/portfolioData';

export default function Skills() {
  const iconMap = {
    Sparkles: Sparkles,
    Server: Server,
    Layers: Layers
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#FFF1F5] border-t-2 border-[#F8D7E2] relative overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-pink-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D98FA9]">
            <span className="text-xs">🎀</span>
            <span>02 / TECHNICAL HIERARCHY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#362430] tracking-tight flex items-center gap-2">
            <span>{skillsHierarchy.heading}</span>
          </h2>
          
          <p className="text-[#5D4757] text-base">
            {skillsHierarchy.subheading}
          </p>
        </div>

        {/* 3-Tier Hierarchy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {skillsHierarchy.tiers.map((tier) => {
            const IconComponent = iconMap[tier.icon] || Sparkles;
            const isCurrentFocus = tier.tierId === "current-focus";

            return (
              <div
                key={tier.tierId}
                className={`p-6 sm:p-7 rounded-3xl transition-all flex flex-col justify-between text-left relative overflow-hidden group shadow-xs hover:shadow-lg ${
                  isCurrentFocus
                    ? 'lg:col-span-5 bg-[#FFFDFB] border-3 border-[#EFB3C8] shadow-md shadow-[#EFB3C8]/15 ring-2 ring-[#EFB3C8]/30'
                    : tier.tierId === "working-with"
                    ? 'lg:col-span-4 bg-[#FFFDFB] border-2 border-[#C9B8DE]'
                    : 'lg:col-span-3 bg-[#FFFDFB] border-2 border-[#F8D7E2]'
                }`}
              >
                {/* Washi Tape Ribbon on Current Focus */}
                {isCurrentFocus && (
                  <div className="washi-tape-pink absolute -top-1.5 right-6 px-4 py-0.5 rotate-1 shadow-2xs">
                    <span className="text-[8.5px] font-mono font-bold text-[#493743]">TOP PRIORITY ♡</span>
                  </div>
                )}

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#FCE8EE] mb-4">
                    <div className="flex items-center gap-2.5">
                      <div 
                        className="w-9 h-9 rounded-2xl flex items-center justify-center text-[#362430] shadow-2xs group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: `${tier.color}40`, border: `1.5px solid ${tier.color}` }}
                      >
                        <IconComponent className="w-4 h-4 text-[#493743]" />
                      </div>

                      <div>
                        <h3 className="text-base font-serif-display font-bold text-[#362430]">
                          {tier.title}
                        </h3>
                        <span className="text-[10px] font-mono text-[#8A7080] block">
                          {tier.items.length} key areas
                        </span>
                      </div>
                    </div>

                    <span 
                      className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-2xs"
                      style={{ 
                        backgroundColor: `${tier.color}25`, 
                        borderColor: tier.color,
                        color: '#493743' 
                      }}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <p className="text-xs text-[#705668] mb-4 leading-relaxed font-normal">
                    {tier.subtitle}
                  </p>

                  {/* Skills Pills List */}
                  <div className="space-y-2.5">
                    {tier.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${
                          isCurrentFocus
                            ? 'bg-[#FFF5F8] border-[#EFB3C8] hover:border-[#D98FA9] shadow-2xs'
                            : 'bg-[#FFFDFB] border-[#F8D7E2] hover:border-[#EFB3C8]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: tier.color }} 
                          />
                          <span className="text-xs font-mono font-bold text-[#362430]">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-[10.5px] font-mono text-[#8A7080] text-right">
                          {skill.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Assurance Note */}
                <div className="pt-4 mt-5 border-t border-[#FCE8EE] flex items-center justify-between text-[11px] font-mono text-[#8A7080]">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#D98FA9]" />
                    <span>Realistic skill hierarchy</span>
                  </span>
                  <span className="font-handwriting text-xs text-[#D98FA9] font-bold">
                    step by step ♡
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Pink Quote Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-[#FFFDFB] border-2 border-[#EFB3C8] flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-xs">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌷</span>
            <div>
              <p className="text-xs font-mono font-bold text-[#362430]">
                Java + Spring Boot + DSA Focus
              </p>
              <p className="text-xs text-[#705668]">
                Committed to building solid backend fundamentals and practicing problem-solving daily.
              </p>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-1 font-handwriting text-lg text-[#D98FA9] font-bold shrink-0">
            <span>"crafting with heart &amp; logic" 🎀</span>
          </div>
        </div>

      </div>
    </section>
  );
}
