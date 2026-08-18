import React, { useState } from 'react';
import { Sparkles, Heart, Coffee, BookOpen, Music, Code2 } from 'lucide-react';
import StationeryEnvelope from './StationeryEnvelope';

export default function HeroWorkspaceVisual() {
  const [bowTapped, setBowTapped] = useState(false);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      
      {/* Decorative Warm Pink Ambient Glows */}
      <div className="absolute -top-6 -left-6 w-60 h-60 rounded-full bg-[#EFB3C8]/35 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-60 h-60 rounded-full bg-[#C9B8DE]/40 blur-3xl -z-10 pointer-events-none" />

      {/* Main Workspace Frame — Pink Scrapbook Styling */}
      <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FFFDFB] border-2 border-[#F8D7E2] shadow-xl shadow-[#493743]/8">
        
        {/* Top Paper Tape Banner with Bow */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#FCE8EE] mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EFB3C8]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9B8DE]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D98FA9]" />
            <span className="text-[11px] font-mono text-[#8A7080] ml-1.5 flex items-center gap-1">
              <span>smruti.desk.workspace</span>
              <span className="text-xs">🌷</span>
            </span>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF1F5] border border-[#EFB3C8] text-[10px] font-mono text-[#493743]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98FA9] animate-ping" />
            <span>coding &amp; doodling</span>
            <span>🎀</span>
          </div>
        </div>

        {/* Workspace Composition Area */}
        <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#FFF5F8] via-[#FFF8FA] to-[#FFF1F5] border border-[#F8D7E2] p-4 flex flex-col justify-between shadow-inner">
          
          {/* Background Pink Grid Pattern */}
          <div className="absolute inset-0 bg-pink-grid opacity-70 pointer-events-none" />

          {/* Floating Sticker / Washi Tape Accents */}
          <div className="absolute top-2 right-3 flex items-center gap-1.5 text-[#D98FA9] opacity-85 z-20">
            <span className="font-handwriting text-base text-[#D98FA9]">creative corner</span>
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#EFB3C8]" />
          </div>

          {/* Center Composition: Left Laptop, Right Pink Sketchbook */}
          <div className="relative z-10 grid grid-cols-12 gap-3.5 items-center my-1">
            
            {/* Left: Laptop Screen with Java + Spring Boot Code */}
            <div className="col-span-7 flex flex-col justify-center">
              <div className="bg-[#362430] text-[#FFF8F8] rounded-xl p-3.5 shadow-md border-2 border-[#493743] space-y-2 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                
                {/* Cute Heart Sticker on Laptop Corner */}
                <div className="absolute -top-2 -right-2 bg-[#EFB3C8] text-white p-1 rounded-full text-[9px] shadow-xs">
                  💗
                </div>

                <div className="flex items-center justify-between border-b border-[#493743] pb-1.5">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#EFB3C8]" />
                    <span className="w-2 h-2 rounded-full bg-[#FCE790]" />
                    <span className="w-2 h-2 rounded-full bg-[#C9B8DE]" />
                  </div>
                  <span className="text-[9px] font-mono text-[#F8D7E2]">CodeMateController.java</span>
                </div>

                <div className="font-mono text-[9.5px] leading-relaxed space-y-0.5 text-left">
                  <p className="text-[#C9B8DE]">@RestController</p>
                  <p className="text-[#C9B8DE]">@RequestMapping(<span className="text-[#FCE790]">"/api/v1"</span>)</p>
                  <p className="text-[#F8D7E2]">public class <span className="text-[#FFFFFF] font-bold">BackendDev</span> &#123;</p>
                  <p className="pl-2 text-[#EFB3C8]">@GetMapping(<span className="text-[#FCE790]">"/build"</span>)</p>
                  <p className="pl-2 text-[#F8D7E2]">public Response <span className="text-[#C9B8DE]">create</span>() &#123;</p>
                  <p className="pl-4 text-[#FCE790]">return new Response(<span className="text-[#F8D7E2]">"Java + DSA ♡"</span>);</p>
                  <p className="pl-2 text-[#F8D7E2]">&#125;</p>
                  <p className="text-[#F8D7E2]">&#125;</p>
                </div>
              </div>
            </div>

            {/* Right: Pink Sketchbook & Doodles */}
            <div className="col-span-5 flex flex-col justify-between space-y-2.5">
              
              {/* Pink Sketchbook / Polaroid */}
              <div className="bg-[#FFFDFB] border-2 border-[#F8D7E2] rounded-xl p-2.5 shadow-sm rotate-2 hover:rotate-0 transition-transform duration-300 relative">
                
                {/* Washi Tape Header */}
                <div className="washi-tape-pink -mt-4 mx-auto w-16 h-3.5 flex items-center justify-center rounded-xs mb-1">
                  <span className="text-[7.5px] font-mono uppercase tracking-wider text-[#705668]">DOODLES</span>
                </div>

                {/* SVG Floral Sketch */}
                <div className="w-full h-14 bg-[#FFF5F8] rounded-lg border border-[#F8D7E2] flex items-center justify-center p-1 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Stems */}
                    <path d="M 50,55 C 50,40 48,25 50,15" stroke="#9BB0A0" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 50,35 C 38,30 32,32 26,38" stroke="#9BB0A0" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M 50,25 C 62,20 68,24 74,28" stroke="#9BB0A0" strokeWidth="1.2" strokeLinecap="round" />
                    {/* Pink Tulip Bloom */}
                    <path d="M 42,18 C 40,8 48,6 50,16 C 52,6 60,8 58,18 C 56,24 44,24 42,18 Z" fill="#EFB3C8" stroke="#D98FA9" strokeWidth="1" />
                    <circle cx="50" cy="15" r="2" fill="#FFF8FA" />
                    {/* Little sparkle star */}
                    <path d="M 75,10 L 76,13 L 79,14 L 76,15 L 75,18 L 74,15 L 71,14 L 74,13 Z" fill="#FCE790" />
                  </svg>
                </div>
                
                <p className="font-handwriting text-xs text-[#705668] text-center mt-1 font-semibold">
                  spring sketches ♡
                </p>
              </div>

              {/* Bottom Row: Cute Pink Mug & Stylus */}
              <div className="flex items-center justify-between gap-1.5">
                {/* Ceramic Mug */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#FFFDFB] border border-[#F8D7E2] text-[#493743] shadow-2xs">
                  <Coffee className="w-3 h-3 text-[#D98FA9]" />
                  <span className="text-[8.5px] font-mono text-[#705668]">warm tea</span>
                </div>

                {/* Pink Pen / Stylus */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#FFFDFB] border border-[#F8D7E2] text-[#D98FA9] shadow-2xs">
                  <span className="text-[10px]">✏️</span>
                  <span className="text-[8.5px] font-mono text-[#705668]">gel pen</span>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Stationery Envelope Resting on Desk */}
          <div className="relative z-20 mt-3 pt-3 border-t border-[#F8D7E2] flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <StationeryEnvelope />
            </div>

            {/* Sparkle Button & Micro Note */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBowTapped(!bowTapped)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFDFB] hover:bg-[#FFF1F5] border border-[#EFB3C8] text-[10px] font-mono text-[#493743] transition-all cursor-pointer shadow-2xs active:scale-95"
                title="Tap for a pink sparkle!"
              >
                <span className={`transition-transform duration-300 ${bowTapped ? 'rotate-12 scale-125' : ''}`}>🎀</span>
                <span>{bowTapped ? '✨ sweet dreams & code' : 'tap sparkle'}</span>
              </button>

              <span className="text-xs text-[#D98FA9] flex items-center gap-1">
                <span>♡</span>
                <span>🌸</span>
              </span>
            </div>
          </div>

        </div>

        {/* Paper Tape Top Corner Label */}
        <div className="washi-tape-pink absolute -top-1.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rotate-1 shadow-2xs pointer-events-none">
          <span className="text-[8.5px] font-mono uppercase tracking-widest text-[#705668] font-bold">CREATIVE DESK</span>
        </div>

      </div>
    </div>
  );
}
