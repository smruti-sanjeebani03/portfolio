import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Currently() {
  return (
    <section className="py-7 bg-[#FFF1F5] border-y-2 border-[#F8D7E2] relative overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-pink-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Section Title Ribbon */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-serif-display text-xl font-bold italic text-[#362430] flex items-center gap-1">
              <span>currently...</span>
              <span className="text-[#D98FA9] font-normal">♡</span>
            </span>
          </div>

          {/* Cute Stationery Sticker Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {personalInfo.currently.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-[#FFFDFB] border-2 border-[#F8D7E2] hover:border-[#EFB3C8] transition-all flex items-center gap-2.5 text-left group shadow-xs hover:shadow-md hover:-translate-y-0.5 relative overflow-hidden"
              >
                {/* Colored Top Edge Indicator */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.accent }}
                />

                <span className="text-lg shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>

                <div className="min-w-0">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#8A7080] block leading-tight">
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-[#362430] truncate block leading-snug">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
