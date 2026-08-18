import React from 'react';
import { Heart, Sparkles, Coffee, Code2, Compass, Flower2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FFF8F8] relative overflow-hidden">
      
      {/* Delicate background pink glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#EFB3C8]/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-4 right-10 w-72 h-72 bg-[#C9B8DE]/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Scrapbook Polaroid with Pink Washi Tape & Bows */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm">
              
              {/* Pink Washi Tape Top Accent */}
              <div className="washi-tape-pink absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rotate-1 z-20 flex items-center justify-center rounded-xs shadow-2xs">
                <span className="text-[9px] font-mono text-[#705668] tracking-widest uppercase font-bold">
                  SKETCHBOOK ENTRY 🎀
                </span>
              </div>

              {/* Polaroid Frame */}
              <div className="p-5 pb-6 rounded-3xl bg-[#FFFDFB] border-2 border-[#F8D7E2] shadow-xl shadow-[#493743]/8 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 space-y-4">
                
                {/* Polaroid Image Box with Floral and Tech vector doodle */}
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-[#FFF1F5] via-[#FFF8FA] to-[#FCE8EE] border border-[#F8D7E2] p-4 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Pink Grid background */}
                  <div className="absolute inset-0 bg-pink-grid opacity-60 pointer-events-none" />

                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#705668] px-2.5 py-0.5 rounded-full bg-[#FFFDFB] border border-[#EFB3C8] font-semibold">
                      MCA STUDENT · DEVELOPER
                    </span>
                    <Heart className="w-4 h-4 text-[#EFB3C8] fill-[#EFB3C8]" />
                  </div>

                  {/* Center Art × Code Emblem */}
                  <div className="flex items-center justify-center gap-3 py-2 z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFFDFB] border-2 border-[#EFB3C8] flex items-center justify-center shadow-xs">
                      <Code2 className="w-6 h-6 text-[#362430]" />
                    </div>
                    <span className="font-handwriting text-2xl text-[#D98FA9] font-bold">×</span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FFFDFB] border-2 border-[#EFB3C8] flex items-center justify-center shadow-xs">
                      <span className="text-2xl">✏️</span>
                    </div>
                  </div>

                  {/* Botanical line */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#705668] z-10 pt-1 border-t border-[#F8D7E2]">
                    <span className="flex items-center gap-1 font-semibold">
                      <span>Java &amp; Spring Boot</span>
                      <span>🌷</span>
                    </span>
                    <span className="text-[#D98FA9] font-bold">backend focus</span>
                  </div>
                </div>

                {/* Polaroid Caption */}
                <div className="text-center space-y-1">
                  <p className="font-serif-display text-lg font-bold text-[#362430]">
                    Smruti Sanjeebani
                  </p>
                  <p className="font-handwriting text-xl text-[#D98FA9] font-bold">
                    "building software with a creative soul" ♡
                  </p>
                </div>

                {/* Micro Badges inside Polaroid */}
                <div className="flex items-center justify-center gap-2 pt-1 border-t border-[#FCE8EE]">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FFF1F5] text-[#5D4757] border border-[#EFB3C8] font-medium">
                    Java + DSA
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FAF5FF] text-[#5D4757] border border-[#C9B8DE] font-medium">
                    Spring Boot
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FFF1F5] text-[#5D4757] border border-[#EFB3C8] font-medium">
                    Doodles 🌸
                  </span>
                </div>

              </div>

              {/* Pink Sticky Note Annotation */}
              <div className="washi-tape-lavender absolute -bottom-4 -right-4 p-3 rounded-2xl border-2 border-[#C9B8DE] shadow-md rotate-3 text-left max-w-[175px] bg-[#FAF5FF]">
                <div className="flex items-center gap-1 text-[10px] font-mono text-[#705668] font-bold">
                  <Sparkles className="w-3 h-3 text-[#D98FA9]" />
                  <span>daily learning</span>
                </div>
                <p className="text-[11.5px] text-[#5D4757] leading-tight mt-1 font-handwriting font-bold">
                  turning algorithmic concepts into useful tools ✨
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: About Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left order-1 lg:order-2">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D98FA9]">
              <span className="text-xs">🌷</span>
              <span>01 / ABOUT ME</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#362430] tracking-tight">
              {personalInfo.aboutHeading}
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 text-base text-[#5D4757] leading-relaxed">
              {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="relative">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars Grid — Pink & Lavender Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t-2 border-[#F8D7E2]">
              
              <div className="p-3.5 rounded-2xl bg-[#FFFDFB] border-2 border-[#EFB3C8] space-y-1 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#362430]">
                  <Code2 className="w-3.5 h-3.5 text-[#D98FA9]" />
                  <span>Backend Core</span>
                </div>
                <p className="text-xs text-[#705668]">
                  Java, Spring Boot, REST APIs, MySQL &amp; MongoDB.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFFDFB] border-2 border-[#C9B8DE] space-y-1 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#362430]">
                  <Compass className="w-3.5 h-3.5 text-[#C9B8DE]" />
                  <span>Education</span>
                </div>
                <p className="text-xs text-[#705668]">
                  MCA (8.33 CGPA) &amp; BCA (8.82 CGPA) @ ITER, SOA University.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFFDFB] border-2 border-[#F8D7E2] space-y-1 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#362430]">
                  <Flower2 className="w-3.5 h-3.5 text-[#EFB3C8]" />
                  <span>Certifications</span>
                </div>
                <p className="text-xs text-[#705668]">
                  Apna College (Java + DSA) &amp; TCS iON Career Edge.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
