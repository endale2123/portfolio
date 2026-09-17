import React, { useState } from 'react';
import { FileText, Download, CheckCircle, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const [downloadClicked, setDownloadClicked] = useState(false);

  const handleDownloadClick = () => {
    setDownloadClicked(true);
    // Attempt standard download of /resume.pdf
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeUrl;
    link.download = 'Endale_Aychew_Begashaw_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 bg-[#08090e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#0e121c] via-[#0d1018] to-[#0a0c13] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Information */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest">
                Curriculum Vitae
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Review My Full Professional Background
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                Looking for a printable summary of my skills, software proficiencies, and creative competencies? Download my comprehensive one-page resume.
              </p>

              {/* Resume Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Social Media Management & Scheduling</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Content Creation & Visual Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Video Editing & Pacing (CapCut)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>YouTube Channel Built to &gt;1,500 Subscribers</span>
                </div>
              </div>

              {/* How to update notice */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-neutral-400 max-w-xl">
                <span className="text-amber-400 font-semibold">Easy Setup: </span>
                Save your completed CV as <code className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">resume.pdf</code> inside your project's <code className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">/public</code> folder. The button below will instantly link to it!
              </div>
            </div>

            {/* Right Column: Download Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-[#121623] border border-white/15 text-center shadow-xl flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-400/10">
                  <FileText className="w-8 h-8" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  Endale Aychew Begashaw
                </h3>
                <p className="text-xs text-neutral-400 font-mono mb-6">
                  PDF Format • Updated 2026
                </p>

                <button
                  id="download-resume-btn"
                  onClick={handleDownloadClick}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download My Resume</span>
                </button>

                {downloadClicked && (
                  <div className="mt-4 p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-[11px] text-amber-200 text-left flex items-start gap-2 animate-in fade-in duration-200">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Triggered download for <code>/resume.pdf</code>. Make sure your PDF is saved in <code>/public/resume.pdf</code>.
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
