import React from 'react';
import { Heart, Sparkles, Coffee, Headphones, BookOpen, PenTool, Palette } from 'lucide-react';

export default function CreativeCorner() {
  const hobbies = [
    {
      id: 'doodles',
      icon: '✏️',
      title: 'Drawing & Doodling',
      subtitle: 'Pencil, Fineliner & Paper',
      description: 'Freehand sketching in notebook margins, drawing botanical leaves, and drafting logic diagrams on real paper before coding.',
      badge: 'Favorite Hobby 🎀',
      tape: 'washi-tape-pink',
      rotation: '-rotate-1',
      bg: 'from-[#FFFDFB] to-[#FFF5F8]',
      accentColor: '#D98FA9'
    },
    {
      id: 'thoughts',
      icon: '💭',
      title: 'Writing & Reflection',
      subtitle: 'Notes & Small Write-ups',
      description: 'Writing casual reflections about problem-solving, daily learnings as a developer, and thoughts whenever inspiration strikes.',
      badge: 'Creative Outlet 🌸',
      tape: 'washi-tape-lavender',
      rotation: 'rotate-1',
      bg: 'from-[#FFFDFB] to-[#FAF5FF]',
      accentColor: '#C9B8DE'
    },
    {
      id: 'cozy-vibes',
      icon: '🎧',
      title: 'Music & Cozy Desk Time',
      subtitle: 'Peaceful Focus Flow',
      description: 'Pairing coding sessions with calm lofi and acoustic playlists, warm cups of tea, and a quiet, organized study environment.',
      badge: 'Daily Routine ☕',
      tape: 'washi-tape-pink',
      rotation: '-rotate-1',
      bg: 'from-[#FFFDFB] to-[#FFF8FA]',
      accentColor: '#EFB3C8'
    },
    {
      id: 'exploring',
      icon: '🌱',
      title: 'Exploring & Learning',
      subtitle: 'Curiosity Beyond the Screen',
      description: 'Reading about thoughtful software craftsmanship, exploring clean design layouts, and constantly discovering new ideas.',
      badge: 'Always Curious ✨',
      tape: 'washi-tape-lavender',
      rotation: 'rotate-1',
      bg: 'from-[#FFFDFB] to-[#F7F4FA]',
      accentColor: '#B8A5D1'
    }
  ];

  return (
    <section id="creative" className="py-16 sm:py-20 bg-[#FFF8F8] border-t-2 border-[#F8D7E2] relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#EFB3C8]/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C9B8DE]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left border-b-2 border-[#F8D7E2] pb-6">
          <div className="max-w-2xl space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D98FA9]">
              <span className="text-xs">🎨</span>
              <span>05 / BEYOND THE SCREEN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#362430] tracking-tight flex items-center gap-2">
              <span>Hobbies &amp; Little Joys</span>
              <span className="text-[#D98FA9] font-normal">♡</span>
            </h2>

            <p className="text-[#5D4757] text-sm sm:text-base leading-relaxed">
              When I'm away from the keyboard and IDE, these are the personal hobbies and creative outlets that keep me balanced, inspired, and curious.
            </p>
          </div>

          <div className="font-handwriting text-xl sm:text-2xl text-[#705668] font-bold shrink-0">
            "pencils, playlists &amp; notebooks" 🎀
          </div>
        </div>

        {/* 4 Clean Hobby Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className={`p-6 rounded-3xl bg-gradient-to-b ${hobby.bg} border-2 border-[#F8D7E2] hover:border-[#EFB3C8] transition-all flex flex-col justify-between space-y-5 shadow-xs hover:shadow-lg hover:-translate-y-1 group text-left relative ${hobby.rotation}`}
            >
              {/* Washi Tape Header */}
              <div className={`${hobby.tape} absolute -top-2.5 left-1/2 -translate-x-1/2 px-4 py-0.5 shadow-2xs pointer-events-none rounded-xs`}>
                <span className="text-[7.5px] font-mono uppercase tracking-widest text-[#705668] font-bold">
                  HOBBY
                </span>
              </div>

              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between pt-1">
                <div className="w-12 h-12 rounded-2xl bg-[#FFFDFB] border-2 border-[#EFB3C8] flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                  <span>{hobby.icon}</span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FFFDFB] text-[#705668] border border-[#F8D7E2]">
                  {hobby.badge}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div>
                  <h3 className="font-serif-display font-bold text-lg text-[#362430]">
                    {hobby.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#D98FA9] font-bold block">
                    {hobby.subtitle}
                  </span>
                </div>

                <p className="text-xs text-[#5D4757] leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              {/* Bottom Decorative Footer */}
              <div className="pt-3 border-t border-[#FCE8EE] flex items-center justify-between text-[11px] text-[#8A7080] font-mono">
                <span className="flex items-center gap-1 text-[#D98FA9]">
                  <span>♡</span>
                  <span className="text-[10px] text-[#705668]">Off-screen interest</span>
                </span>
                <Heart className="w-3 h-3 text-[#EFB3C8] fill-[#EFB3C8]" />
              </div>
            </div>
          ))}
        </div>

        {/* Cozy Note Banner */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDFB] border-2 border-[#EFB3C8] text-center space-y-2 relative shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D98FA9]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREATIVE BALANCE</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <p className="font-serif-display text-lg sm:text-xl text-[#362430] font-bold">
            "Sometimes with code. Sometimes with a pencil."
          </p>
          <p className="text-xs sm:text-sm text-[#5D4757] max-w-lg mx-auto leading-relaxed">
            Doodling and creative thinking help me stay calm, approach problem-solving from different angles, and bring care to everything I build.
          </p>
        </div>

      </div>
    </section>
  );
}
