import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  ArrowUpRight, 
  Sparkles,
  Heart,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const emailToUse = personalInfo.socialLinks.email || 'smrutisanjeebani.41173@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailToUse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !senderMessage.trim()) return;

    setSubmitStatus('loading');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailToUse}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          _subject: senderSubject ? `[Portfolio Note] ${senderSubject}` : `[Portfolio Note] New message from ${senderName}`,
          message: senderMessage,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setSubmitStatus('success');
        setSenderName('');
        setSenderEmail('');
        setSenderSubject('');
        setSenderMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Failed to send direct email:', err);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FFF1F5] border-t-2 border-[#F8D7E2] relative overflow-hidden">
      
      {/* Pink & Lavender Ambient Blobs */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#EFB3C8]/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#C9B8DE]/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D98FA9]">
            <span className="text-xs">💌</span>
            <span>06 / GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#362430] tracking-tight flex items-center gap-2">
            <span>Let's create something.</span>
            <span className="text-[#D98FA9] font-normal">♡</span>
          </h2>

          <p className="text-[#5D4757] text-base">
            Whether it's a project, an opportunity, or simply a conversation about tech — I'd love to hear from you.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Inbox & Profiles */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Direct Email Card with Pink Ribbon */}
            <div className="p-7 rounded-3xl bg-[#FFFDFB] border-2 border-[#EFB3C8] space-y-4 shadow-sm relative overflow-hidden">
              
              <div className="washi-tape-pink absolute -top-1 right-6 px-3 py-0.5">
                <span className="text-[8px] font-mono font-bold text-[#493743]">INBOX ♡</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A7080]">
                  OPEN TO OPPORTUNITIES
                </span>
                <Heart className="w-4 h-4 text-[#EFB3C8] fill-[#EFB3C8]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-serif-display font-bold text-[#362430]">
                  Say Hello! 🌸
                </h3>
                <p className="text-xs sm:text-sm text-[#5D4757] leading-relaxed">
                  Actively seeking entry-level software developer and backend roles. Feel free to reach out via direct note or LinkedIn!
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#EFB3C8] flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[9.5px] font-mono uppercase text-[#8A7080] block font-bold">
                    Direct Email:
                  </span>
                  <span className="text-xs font-mono font-bold text-[#362430] truncate block">
                    {emailToUse}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-[#FFFDFB] hover:bg-[#F8D7E2] border border-[#EFB3C8] text-xs font-mono text-[#362430] font-bold flex items-center gap-1 shrink-0 transition-all cursor-pointer active:scale-95 shadow-2xs"
                  title="Copy email"
                  id="copy-email-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                      <span className="text-[#2E7D32] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8A7080]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional Profile Links */}
            <div className="p-7 rounded-3xl bg-[#FFFDFB] border-2 border-[#F8D7E2] space-y-3 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A7080] block font-bold">
                CONNECT &amp; RESUME
              </span>

              <div className="space-y-2">
                {/* LinkedIn */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#F8D7E2] hover:border-[#EFB3C8] text-[#362430] transition-all group"
                  id="contact-linkedin-link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#C9B8DE]/40 text-[#362430]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold block">LinkedIn</span>
                      <span className="text-[10.5px] text-[#8A7080]">Professional Network</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8A7080] group-hover:text-[#D98FA9] transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#F8D7E2] hover:border-[#EFB3C8] text-[#362430] transition-all group"
                  id="contact-github-link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#EFB3C8]/40 text-[#362430]">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold block">GitHub</span>
                      <span className="text-[10.5px] text-[#8A7080]">Repositories &amp; Code</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8A7080] group-hover:text-[#D98FA9] transition-colors" />
                </a>

                {/* Resume Modal Trigger */}
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#F8D7E2] hover:border-[#EFB3C8] text-[#362430] transition-all group cursor-pointer"
                  id="contact-resume-link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#D98FA9]/35 text-[#362430]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono font-bold block">Curriculum Vitae</span>
                      <span className="text-[10.5px] text-[#8A7080]">View or Print Resume PDF</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8A7080] group-hover:text-[#D98FA9] transition-colors" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Note Composer */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FFFDFB] border-2 border-[#EFB3C8] space-y-5 shadow-sm text-left relative">
              
              <div className="washi-tape-lavender absolute -top-1.5 right-8 px-4 py-0.5">
                <span className="text-[8px] font-mono font-bold text-[#493743]">DIRECT INBOX 🎀</span>
              </div>

              <div className="flex items-center gap-2.5 border-b border-[#FCE8EE] pb-4 pt-1">
                <MessageSquare className="w-5 h-5 text-[#D98FA9]" />
                <div>
                  <h3 className="text-lg font-serif-display font-bold text-[#362430]">
                    Send a Note
                  </h3>
                  <p className="text-xs text-[#5D4757]">
                    Sends your message directly to my email inbox — no email app needed.
                  </p>
                </div>
              </div>

              {submitStatus === 'success' ? (
                /* Success Stationery Message */
                <div className="p-6 rounded-2xl bg-[#FFF5F8] border-2 border-[#EFB3C8] text-center space-y-3.5 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#EFB3C8]/30 text-[#D98FA9] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 text-[#D98FA9]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif-display font-bold text-lg text-[#362430]">
                      Note Delivered! 💌
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5D4757] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out! Your message has been sent directly to my personal email inbox. I'll get back to you soon.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-mono font-bold bg-[#362430] text-[#FFF8F8] hover:bg-[#493743] transition-colors cursor-pointer"
                  >
                    <span>Send another note</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#EFB3C8]" />
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSendEmail} className="space-y-4">
                  
                  {submitStatus === 'error' && (
                    <div className="p-3.5 rounded-2xl bg-[#FFF0F0] border border-[#FFCDD2] text-xs text-[#C62828] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Oops! We couldn't send the note. You can still email me directly at <strong>{emailToUse}</strong>.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-[10px] font-mono uppercase tracking-wider text-[#5D4757] block font-bold">
                        Your Name / Team <span className="text-[#D98FA9]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Recruiter / Engineering Team"
                        className="w-full px-4 py-2.5 rounded-2xl bg-[#FFF5F8] border border-[#EFB3C8] focus:border-[#D98FA9] focus:ring-1 focus:ring-[#D98FA9] text-xs font-mono text-[#362430] placeholder-[#8A7080] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-[10px] font-mono uppercase tracking-wider text-[#5D4757] block font-bold">
                        Your Email Address <span className="text-[#D98FA9]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. you@company.com"
                        className="w-full px-4 py-2.5 rounded-2xl bg-[#FFF5F8] border border-[#EFB3C8] focus:border-[#D98FA9] focus:ring-1 focus:ring-[#D98FA9] text-xs font-mono text-[#362430] placeholder-[#8A7080] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-[10px] font-mono uppercase tracking-wider text-[#5D4757] block font-bold">
                      Subject (Optional)
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={senderSubject}
                      onChange={(e) => setSenderSubject(e.target.value)}
                      placeholder="e.g. Software Developer Opportunity / Java Project"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FFF5F8] border border-[#EFB3C8] focus:border-[#D98FA9] focus:ring-1 focus:ring-[#D98FA9] text-xs font-mono text-[#362430] placeholder-[#8A7080] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-[10px] font-mono uppercase tracking-wider text-[#5D4757] block font-bold">
                      Message <span className="text-[#D98FA9]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      placeholder="Hello Smruti, I saw your portfolio and would love to connect regarding..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FFF5F8] border border-[#EFB3C8] focus:border-[#D98FA9] focus:ring-1 focus:ring-[#D98FA9] text-xs font-mono text-[#362430] placeholder-[#8A7080] outline-none transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider bg-[#362430] text-[#FFF8F8] hover:bg-[#493743] disabled:opacity-70 transition-all shadow-md shadow-[#362430]/15 active:scale-95 cursor-pointer"
                    id="contact-send-btn"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 text-[#EFB3C8] animate-spin" />
                        <span>SENDING NOTE TO SMRUTI... 🌸</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#EFB3C8]" />
                        <span>SEND NOTE DIRECTLY ♡</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="pt-1 text-center">
                <span className="font-handwriting text-base text-[#D98FA9] font-bold">
                  "looking forward to hearing from you!" 🌸
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
