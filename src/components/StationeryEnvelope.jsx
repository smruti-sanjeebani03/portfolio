import React, { useState, useRef, useEffect } from 'react';
import { Heart, Sparkles, X } from 'lucide-react';

export default function StationeryEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const envelopeRef = useRef(null);

  // Close when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        envelopeRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleEnvelope = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleEnvelope();
    }
  };

  return (
    <div className="relative z-30 inline-block">
      
      {/* Outer Envelope Wrapper with Keyboard Focus & Natural Desk Hover */}
      <div
        ref={envelopeRef}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close little note" : "Open a little note from Smruti"}
        onClick={toggleEnvelope}
        onKeyDown={handleKeyDown}
        className={`group relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#D98FA9] focus-visible:ring-offset-2 rounded-2xl transition-all duration-500 ease-out select-none ${
          isOpen
            ? 'scale-105 -translate-y-1 rotate-0 shadow-lg shadow-[#EFB3C8]/25'
            : 'hover:-translate-y-1.5 hover:rotate-1 hover:shadow-md hover:shadow-[#EFB3C8]/20 rotate-[-1.5deg]'
        }`}
      >
        {/* Little Floating Heart Seal / Sparkle Indicator */}
        <div className="absolute -top-2.5 -right-1 z-30 flex items-center gap-1 bg-[#FFFDFB] border border-[#EFB3C8] px-2 py-0.5 rounded-full shadow-2xs text-[9px] font-mono text-[#705668] transition-transform duration-300 group-hover:scale-110">
          <Heart className="w-2.5 h-2.5 text-[#EFB3C8] fill-[#EFB3C8]" />
          <span>{isOpen ? 'click to close' : 'little note'}</span>
        </div>

        {/* The Physical Envelope Body */}
        <div className="relative w-44 sm:w-48 h-28 bg-[#FFF8FA] rounded-2xl border-2 border-[#EFB3C8] shadow-sm overflow-hidden flex flex-col justify-end p-2.5 transition-all">
          
          {/* Subtle Pink Grid Texture on Envelope */}
          <div className="absolute inset-0 bg-pink-grid opacity-35 pointer-events-none" />

          {/* Botanical Floral Corner Watermark */}
          <div className="absolute top-2 left-2 pointer-events-none opacity-40">
            <svg className="w-6 h-6 text-[#D98FA9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9Z" strokeDasharray="2 2" />
              <path d="M12 7c-2 2-2 5 0 7 2-2 2-5 0-7Z" fill="#EFB3C8" />
            </svg>
          </div>

          {/* Envelope Flap (Top triangular fold) */}
          <div
            className={`absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#FFF1F5] to-[#FCE8EE] border-b-2 border-[#EFB3C8] origin-top transition-transform duration-700 ease-in-out z-20 motion-reduce:transition-none ${
              isOpen ? 'rotate-x-180 -translate-y-0.5 opacity-0' : 'rotate-x-0'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Heart Seal on the Flap Tip */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFFDFB] border border-[#EFB3C8] flex items-center justify-center shadow-2xs">
              <Heart className="w-2.5 h-2.5 text-[#D98FA9] fill-[#D98FA9]" />
            </div>
          </div>

          {/* Front Envelope Pocket Folds */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-18 bg-[#FFF5F8]/90 border-t border-[#F8D7E2] z-10 pointer-events-none"
            style={{
              clipPath: 'polygon(0 100%, 0 0, 50% 60%, 100% 0, 100% 100%)',
            }}
          />

          {/* Cute Handwriting on Envelope Face when closed */}
          {!isOpen && (
            <div className="relative z-10 text-center pb-1 space-y-0.5 pointer-events-none">
              <span className="text-[9px] font-mono text-[#8A7080] uppercase tracking-widest block font-bold">
                for you ♡
              </span>
              <p className="font-handwriting text-xs text-[#362430] font-bold">
                a little note from Smruti
              </p>
            </div>
          )}

          {/* Bottom Envelope Bow */}
          <div className="absolute bottom-1 right-2 z-10 text-xs pointer-events-none opacity-80">
            🎀
          </div>
        </div>

        {/* Sliding Stationery Note Paper */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-1/2 -translate-x-1/2 w-[94%] bg-[#FFFDFB] border-2 border-[#EFB3C8] rounded-2xl p-3 shadow-xl transition-all duration-700 ease-out text-left z-40 motion-reduce:transition-opacity ${
            isOpen
              ? '-top-28 sm:-top-32 opacity-100 scale-100 pointer-events-auto shadow-[#493743]/15'
              : 'top-2 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {/* Top Tape & Close Button */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#FCE8EE] mb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-xs">🌸</span>
              <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#8A7080] font-bold">
                A NOTE FROM ME
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                envelopeRef.current?.focus();
              }}
              className="p-1 rounded-full text-[#8A7080] hover:text-[#362430] hover:bg-[#FFF1F5] transition-colors cursor-pointer"
              aria-label="Close note"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Note Content */}
          <div className="space-y-1.5">
            <p className="font-handwriting text-base text-[#D98FA9] font-bold leading-none">
              Hi! ♡
            </p>
            <p className="text-[11.5px] text-[#493743] font-serif leading-relaxed">
              Thanks for stopping by my little corner of the internet.
            </p>
            <p className="text-[11px] text-[#705668] leading-tight">
              Have a look around.
            </p>
          </div>

          {/* Bottom Note Signoff & Close Pill */}
          <div className="pt-2 mt-2 border-t border-[#FCE8EE] flex items-center justify-between">
            <span className="font-handwriting text-xs text-[#D98FA9] font-bold">
              — Smruti 🎀
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                envelopeRef.current?.focus();
              }}
              className="px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-bold bg-[#FFF1F5] hover:bg-[#F8D7E2] border border-[#EFB3C8] text-[#493743] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
