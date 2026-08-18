import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Currently from './components/Currently';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import CreativeCorner from './components/CreativeCorner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F8] text-[#493743] selection:bg-[#F8D7E2] selection:text-[#362430]">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Currently />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <CreativeCorner />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Recruiter-Ready Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
