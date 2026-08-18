import React, { useState } from 'react';
import { 
  X, Download, Mail, Phone, MapPin, Github, Linkedin, 
  ExternalLink, FileText, Link as LinkIcon, Copy, Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { projects } from '../data/projects';

// Helper function to format Google Drive link for direct iframe embedding
function formatGoogleDriveEmbedUrl(url) {
  if (!url) return '';
  const trimmed = url.trim();
  
  // If it's already a preview link
  if (trimmed.includes('/preview')) return trimmed;

  // Convert Google Drive view/sharing links
  const fileMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch && fileMatch[1]) {
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  }

  // Convert Google Docs / Drive open ID links (e.g., id=123...)
  const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
  }

  // Google Docs document link
  const docMatch = trimmed.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
  if (docMatch && docMatch[1]) {
    return `https://docs.google.com/document/d/${docMatch[1]}/preview`;
  }

  return trimmed;
}

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' | 'digital'
  const [customDriveUrl, setCustomDriveUrl] = useState(
    personalInfo.socialLinks.googleDriveResumeUrl || ''
  );
  const [showDriveInput, setShowDriveInput] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Default PDF path or Google Drive preview path
  const localPdfPath = personalInfo.socialLinks.resumePdfUrl || '/resume.pdf';
  const effectiveEmbedUrl = customDriveUrl 
    ? formatGoogleDriveEmbedUrl(customDriveUrl) 
    : localPdfPath;

  if (!isOpen) return null;

  // Copy plain text resume for ATS & email
  const handleCopyText = () => {
    const textContent = `
SMRUTI SANJEEBANI
Aspiring Software Developer
Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.socialLinks.linkedin}
GitHub: ${personalInfo.socialLinks.github}

PROFESSIONAL SUMMARY
${personalInfo.professionalSummary}

EDUCATION
1. Master of Computer Applications (MCA) — ITER, Siksha 'O' Anusandhan University, Bhubaneswar (2025 – 2027) | CGPA: 8.33
2. Bachelor of Computer Applications (BCA) — ITER, Siksha 'O' Anusandhan University, Bhubaneswar (2022 – 2025) | CGPA: 8.82

TECHNICAL SKILLS
- Programming Languages: Java, PHP, Python (Basics)
- Web Technologies: HTML, CSS, JavaScript
- Backend: Spring Boot, REST APIs
- Databases: MySQL, MongoDB
- Tools: Git, GitHub, Visual Studio Code

PROJECTS
1. CodeMate – Smart Coding Practice Tracker (In Progress)
   Stack: Java | Spring Boot | MongoDB | HTML | CSS | JavaScript | Chart.js
   - Developing a full-stack coding practice tracker with user authentication, problem management, daily goals, streak tracking, and progress monitoring using Spring Boot and MongoDB.
   - Building an interactive dashboard featuring coding analytics, visualisations, and a rule-based coding companion to encourage consistent learning.

2. HealthHub – A Centralised Healthcare Management System
   Stack: PHP | MySQL | HTML | CSS | JavaScript
   - Collaborated in developing a web-based healthcare platform that enables users to search, compare, and review hospitals using filters such as location, specialisation, and ratings.
   - Contributed to backend development by implementing user authentication, database operations, and core application functionalities using PHP and MySQL.

CERTIFICATIONS
- Java Programming and DSA by Apna College.
- TCS iON Career Edge – Young Professional.
    `.trim();

    navigator.clipboard.writeText(textContent).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#362430]/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn"
    >
      
      {/* Modal Container */}
      <div 
        className="bg-[#FFFDFB] border-2 border-[#EFB3C8] rounded-3xl max-w-3xl w-full max-h-[94vh] flex flex-col shadow-2xl relative overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b-2 border-[#F8D7E2] bg-[#FFF8F8] shrink-0 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-base">🎀</span>
            <div>
              <h3 id="resume-title" className="font-serif-display font-bold text-base sm:text-lg text-[#362430] leading-tight">
                Resume &bull; Smruti Sanjeebani
              </h3>
              <span className="text-[10.5px] font-mono text-[#8A7080] block">
                Official Google Drive Embed &bull; Bhubaneswar, Odisha
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#FFF5F8] p-1 rounded-xl border border-[#EFB3C8] text-[11px] font-mono font-bold">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#362430] text-[#FFF8F8]'
                    : 'text-[#705668] hover:text-[#362430]'
                }`}
              >
                Embedded PDF / Drive
              </button>
              <button
                type="button"
                onClick={() => setViewMode('digital')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'digital'
                    ? 'bg-[#362430] text-[#FFF8F8]'
                    : 'text-[#705668] hover:text-[#362430]'
                }`}
              >
                Digital CV
              </button>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-full text-[#8A7080] hover:text-[#362430] hover:bg-[#FFF1F5] transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        {viewMode === 'digital' ? (
          /* Exact Resume Representation with aesthetic typography */
          <div 
            className="p-6 sm:p-8 space-y-6 overflow-y-auto text-left text-[#362430] bg-[#FFFDFB]"
          >
            
            {/* Header Section */}
            <div className="border-b-2 border-[#F8D7E2] pb-5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h1 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#362430] uppercase tracking-wide">
                  SMRUTI SANJEEBANI
                </h1>
                <span className="text-xs font-mono font-bold text-[#D98FA9]">
                  Aspiring Software Developer
                </span>
              </div>

              {/* Contact bar */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#5D4757] pt-1">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#D98FA9]" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:underline text-[#362430]">
                    {personalInfo.phone}
                  </a>
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#D98FA9]" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline text-[#362430]">
                    {personalInfo.email}
                  </a>
                </span>
                <span>&bull;</span>
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-[#362430] hover:text-[#D98FA9] hover:underline font-bold"
                >
                  <Linkedin className="w-3 h-3 text-[#D98FA9]" />
                  <span>LinkedIn</span>
                </a>
                <span>&bull;</span>
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-[#362430] hover:text-[#D98FA9] hover:underline font-bold"
                >
                  <Github className="w-3 h-3 text-[#D98FA9]" />
                  <span>GitHub</span>
                </a>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D98FA9]" />
                  <span>{personalInfo.location}</span>
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#362430] font-bold border-b border-[#FCE8EE] pb-1">
                PROFESSIONAL SUMMARY
              </h4>
              <p className="text-xs text-[#5D4757] leading-relaxed">
                {personalInfo.professionalSummary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#362430] font-bold border-b border-[#FCE8EE] pb-1 flex items-center justify-between">
                <span>EDUCATION</span>
                <span className="text-[10px] text-[#D98FA9] font-normal lowercase font-serif">academic records</span>
              </h4>

              <div className="space-y-3 text-xs">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <span className="font-bold text-[#362430] text-sm">
                        {edu.degree}
                      </span>
                      <span className="font-mono text-[#705668] text-[11px] font-bold">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[#5D4757]">
                      <span>{edu.institution}</span>
                      <span className="font-mono font-bold text-[#362430] bg-[#FFF1F5] px-2 py-0.5 rounded border border-[#EFB3C8] text-[11px] mt-1 sm:mt-0 self-start sm:self-auto">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#362430] font-bold border-b border-[#FCE8EE] pb-1">
                TECHNICAL SKILLS
              </h4>

              <div className="space-y-1.5 text-xs text-[#5D4757]">
                <div>
                  <span className="font-mono font-bold text-[#362430]">Programming Languages: </span>
                  <span>Java, PHP, Python (Basics)</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#362430]">Web Technologies: </span>
                  <span>HTML, CSS, JavaScript</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#362430]">Backend: </span>
                  <span>Spring Boot, REST APIs</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#362430]">Databases: </span>
                  <span>MySQL, MongoDB</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#362430]">Tools: </span>
                  <span>Git, GitHub, Visual Studio Code</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#362430] font-bold border-b border-[#FCE8EE] pb-1">
                PROJECTS
              </h4>

              <div className="space-y-4">
                {/* 1. CodeMate */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-sm text-[#362430]">
                      1. CodeMate – Smart Coding Practice Tracker (In Progress)
                    </span>
                    <div className="flex items-center gap-2">
                      <a 
                        href="https://github.com/smruti-sanjeebani03/codemate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10.5px] font-mono text-[#D98FA9] hover:underline font-bold"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                  
                  <div className="font-mono text-[11px] text-[#705668] italic">
                    Java | Spring Boot | MongoDB | HTML | CSS | JavaScript | Chart.js
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-[#5D4757] leading-relaxed">
                    <li>
                      Developing a full-stack coding practice tracker with user authentication, problem management, daily goals, streak tracking, and progress monitoring using Spring Boot and MongoDB.
                    </li>
                    <li>
                      Building an interactive dashboard featuring coding analytics, visualisations, and a rule-based coding companion to encourage consistent learning.
                    </li>
                  </ul>
                </div>

                {/* 2. HealthHub */}
                <div className="space-y-1.5 text-xs pt-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-sm text-[#362430]">
                      2. HealthHub – A Centralised Healthcare Management System
                    </span>
                    <div className="flex items-center gap-2">
                      <a 
                        href="https://github.com/smruti-sanjeebani03/HealthHubProject-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10.5px] font-mono text-[#D98FA9] hover:underline font-bold"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                  
                  <div className="font-mono text-[11px] text-[#705668] italic">
                    PHP | MySQL | HTML | CSS | JavaScript
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-[#5D4757] leading-relaxed">
                    <li>
                      Collaborated in developing a web-based healthcare platform that enables users to search, compare, and review hospitals using filters such as location, specialisation, and ratings.
                    </li>
                    <li>
                      Contributed to backend development by implementing user authentication, database operations, and core application functionalities using PHP and MySQL.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#362430] font-bold border-b border-[#FCE8EE] pb-1">
                CERTIFICATIONS
              </h4>

              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#5D4757]">
                <li>
                  <strong className="text-[#362430]">Java Programming and DSA</strong> by Apna College.
                </li>
                <li>
                  <strong className="text-[#362430]">TCS iON Career Edge – Young Professional</strong>.
                </li>
              </ul>
            </div>

          </div>
        ) : (
          /* Embedded PDF & Google Drive Viewer Tab */
          <div className="p-4 sm:p-6 flex-1 flex flex-col items-center justify-start space-y-3 bg-[#FFF5F8] overflow-y-auto">
            
            {/* Google Drive Link Bar / Helper */}
            <div className="w-full bg-[#FFFDFB] p-3.5 rounded-2xl border-2 border-[#EFB3C8] shadow-xs text-xs space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 font-bold text-[#362430]">
                  <LinkIcon className="w-3.5 h-3.5 text-[#D98FA9]" />
                  <span>Google Drive Resume Integration</span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowDriveInput(!showDriveInput)}
                  className="text-[11px] font-mono font-bold text-[#D98FA9] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>{showDriveInput ? 'Hide link editor' : 'Edit Google Drive Link'}</span>
                  <span>⚙️</span>
                </button>
              </div>

              {showDriveInput ? (
                <div className="space-y-2 pt-1 border-t border-[#F8D7E2]">
                  <label className="block text-[11px] text-[#5D4757]">
                    Google Drive link:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={customDriveUrl}
                      onChange={(e) => setCustomDriveUrl(e.target.value)}
                      placeholder="https://drive.google.com/file/d/.../view"
                      className="flex-1 px-3 py-1.5 rounded-xl border border-[#EFB3C8] bg-white text-xs font-mono text-[#362430] focus:outline-none focus:ring-2 focus:ring-[#D98FA9]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowDriveInput(false)}
                      className="px-3 py-1.5 rounded-xl bg-[#362430] text-[#FFF8F8] text-xs font-mono font-bold hover:bg-[#493743]"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-[11px] text-[#5D4757] flex items-center justify-between flex-wrap gap-2">
                  <span>
                    Loaded: <code className="bg-[#FFF1F5] px-1.5 py-0.5 rounded border border-[#EFB3C8]">Google Drive Preview</code>
                  </span>
                  <a
                    href="https://drive.google.com/file/d/1VBHZjnbeBei16qsVfsXuM6XtluwdbRe1/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D98FA9] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Open in Google Drive</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Embedded iFrame for PDF / Google Drive */}
            <div className="w-full h-[58vh] bg-white rounded-2xl border-2 border-[#EFB3C8] shadow-inner overflow-hidden relative">
              <iframe
                src={effectiveEmbedUrl}
                title="Smruti Sanjeebani Resume Preview"
                className="w-full h-full border-none"
                allow="autoplay"
              />
            </div>

            {/* Bottom info helper */}
            <div className="w-full flex flex-wrap items-center justify-between text-xs text-[#5D4757] px-1 gap-2">
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <FileText className="w-3.5 h-3.5 text-[#D98FA9]" />
                <span>Live Google Drive preview active.</span>
              </div>
              <a
                href={effectiveEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono font-bold text-[#D98FA9] hover:underline"
              >
                <span>Open in full tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        )}

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-t-2 border-[#F8D7E2] bg-[#FFF8F8] shrink-0 gap-3">
          <div className="flex items-center gap-2">
            <span className="font-handwriting text-base text-[#D98FA9] font-bold">
              "ready for review" 🎀
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Copy Resume Text button */}
            <button
              onClick={handleCopyText}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FFFDFB] border border-[#EFB3C8] hover:bg-[#FFF1F5] text-xs font-mono font-semibold text-[#362430] transition-all cursor-pointer shadow-2xs active:scale-95"
              title="Copy plain text resume to clipboard"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#D98FA9]" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            {/* Open / View Google Drive Document */}
            <a
              href="https://drive.google.com/file/d/1VBHZjnbeBei16qsVfsXuM6XtluwdbRe1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#362430] text-[#FFF8F8] hover:bg-[#493743] text-xs font-mono font-bold transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-[#EFB3C8]" />
              <span>Open in Drive</span>
            </a>
            
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-full bg-[#FFFDFB] border border-[#EFB3C8] text-xs font-mono font-bold text-[#362430] hover:bg-[#FFF1F5] transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
