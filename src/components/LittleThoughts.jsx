import React, { useState } from 'react';
import { BookOpen, Sparkles, Heart, X, Quote } from 'lucide-react';
import { littleThoughts } from '../data/creativeData';

export default function LittleThoughts() {
  const [activeThought, setActiveThought] = useState(null);

  return (
    <div className="space-y-6 text-left">
      
      {/* Subheader */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D98FA9]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>WRITING &amp; REFLECTIONS</span>
        </div>
        <h3 className="text-2xl font-serif-display font-bold text-[#362430] flex items-center gap-1.5">
          <span>Little Thoughts</span>
          <span className="text-[#D98FA9] font-normal">♡</span>
        </h3>
        <p className="font-handwriting text-xl text-[#705668] font-bold">
          "Some things are easier to write than explain."
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {littleThoughts.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-[#FFFDFB] border-2 border-[#F8D7E2] hover:border-[#EFB3C8] transition-all flex flex-col justify-between space-y-4 text-left shadow-xs hover:shadow-lg group relative overflow-hidden"
          >
            {/* Top quote and tag */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF1F5] text-[#493743] border border-[#EFB3C8]">
                {item.tag}
              </span>
              <Quote className="w-4 h-4 text-[#D98FA9]" />
            </div>

            <div className="space-y-1.5">
              <h4 className="font-serif-display font-bold text-lg text-[#362430] group-hover:text-[#D98FA9] transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-[#5D4757] leading-relaxed line-clamp-3 font-normal">
                {item.excerpt}
              </p>
            </div>

            {/* Read Note button */}
            <div className="pt-3 border-t border-[#FCE8EE] flex items-center justify-between">
              <span className="text-[10.5px] font-mono text-[#8A7080]">
                {item.date}
              </span>

              <button
                onClick={() => setActiveThought(item)}
                type="button"
                className="text-xs font-mono font-bold text-[#D98FA9] hover:text-[#362430] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Read note</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reading Modal */}
      {activeThought && (
        <div className="fixed inset-0 z-50 bg-[#362430]/45 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div 
            className="bg-[#FFFDFB] border-2 border-[#EFB3C8] rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 text-left shadow-2xl relative"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-[#FCE8EE] pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A7080] font-bold">
                {activeThought.tag} &bull; {activeThought.date}
              </span>
              <button
                onClick={() => setActiveThought(null)}
                type="button"
                className="p-1.5 rounded-full text-[#8A7080] hover:text-[#362430] hover:bg-[#FFF1F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif-display font-bold text-[#362430]">
                {activeThought.title}
              </h3>
              <p className="text-sm text-[#5D4757] leading-relaxed whitespace-pre-line font-serif">
                {activeThought.content}
              </p>
            </div>

            <div className="pt-4 border-t border-[#FCE8EE] flex items-center justify-between">
              <span className="font-handwriting text-base text-[#D98FA9] font-bold">
                Smruti's notebook ♡
              </span>
              <button
                onClick={() => setActiveThought(null)}
                type="button"
                className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-[#FFF1F5] text-[#362430] border border-[#EFB3C8] hover:bg-[#F8D7E2]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
