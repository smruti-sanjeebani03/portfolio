import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "JOURNEY", href: "#journey" },
    { name: "HOBBIES", href: "#creative" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF8F8]/95 backdrop-blur-md border-b border-[#F8D7E2] shadow-sm shadow-[#493743]/5 py-3'
          : 'bg-[#FFF8F8]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand with Bow & Sparkle */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            id="nav-brand-link"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#EFB3C8] via-[#F8D7E2] to-[#C9B8DE] flex items-center justify-center text-[#493743] shadow-xs group-hover:scale-105 transition-transform border border-[#EFB3C8]/50">
              <span className="font-serif-display font-bold text-sm italic">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-base font-bold text-[#493743] group-hover:text-[#D98FA9] transition-colors leading-tight flex items-center gap-1.5">
                <span>Smruti Sanjeebani</span>
                <span className="text-xs">🎀</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium text-[#705668] hover:text-[#493743] tracking-wider transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EFB3C8] hover:after:w-full after:transition-all hover:after:rounded-full"
              >
                {link.name}
              </a>
            ))}

            {/* Resume Button with Pink Ribbon Style */}
            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#FFF1F5] text-[#493743] border border-[#EFB3C8] hover:bg-[#F8D7E2] hover:border-[#D98FA9] transition-all shadow-2xs active:scale-95 cursor-pointer"
              id="nav-resume-btn"
            >
              <FileText className="w-3.5 h-3.5 text-[#D98FA9]" />
              <span>RESUME</span>
              <span className="text-[11px]">♡</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              type="button"
              className="p-2 rounded-full bg-[#FFF1F5] text-[#493743] border border-[#EFB3C8] text-xs font-mono"
              aria-label="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#D98FA9]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-[#493743] hover:bg-[#FFF1F5] transition-colors"
              aria-label="Toggle navigation menu"
              id="nav-mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8F8] border-b border-[#F8D7E2] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-mono font-medium text-[#705668] hover:text-[#493743] hover:bg-[#FFF1F5] tracking-wider transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Sparkles className="w-3 h-3 text-[#EFB3C8]" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#F8D7E2]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-semibold bg-[#FFF1F5] text-[#493743] border border-[#EFB3C8] hover:bg-[#F8D7E2] transition-all"
            >
              <FileText className="w-4 h-4 text-[#D98FA9]" />
              <span>VIEW RESUME ♡</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
