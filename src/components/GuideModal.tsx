import React, { useState } from 'react';
import { X, BookOpen, Check, Copy, ExternalLink, Code2, Image, Video, FileText, Briefcase, Share2, Globe, Github } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const steps = [
    {
      num: 1,
      title: "Replace Portfolio Images",
      icon: <Image className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            Open <code className="text-amber-400 font-mono">src/data/portfolioData.ts</code> and locate the <code className="text-white font-mono">PORTFOLIO_ITEMS</code> array or <code className="text-white font-mono">CONTENT_CREATION_ITEMS</code>.
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed mb-2">
            Option A (Local images): Save your JPG/PNG files inside the <code className="text-white font-mono">public/projects/</code> folder (e.g., <code className="text-white font-mono">public/projects/reel1.jpg</code>), then set:
          </p>
          <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`thumbnail: "/projects/reel1.jpg"`}
          </pre>
          <p className="text-xs text-neutral-400 mt-2">
            Option B (Cloud / CDN images): Paste any public image URL from Imgur, Cloudinary, or your hosting provider.
          </p>
        </div>
      ),
    },
    {
      num: 2,
      title: "Add Your Real Videos",
      icon: <Video className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            For each video project in <code className="text-amber-400 font-mono">src/data/portfolioData.ts</code>, update the <code className="text-white font-mono">embedUrl</code> or <code className="text-white font-mono">videoUrl</code> properties:
          </p>
          <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`// YouTube Embed format:
embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"

// Vimeo Embed format:
embedUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID"

// Or direct MP4 hosted in /public/videos/:
videoUrl: "/videos/my-showreel.mp4"`}
          </pre>
        </div>
      ),
    },
    {
      num: 3,
      title: "Add YouTube / Instagram / TikTok Links",
      icon: <Share2 className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            Each portfolio item supports direct links to the live platforms. In <code className="text-amber-400 font-mono">src/data/portfolioData.ts</code>:
          </p>
          <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`youtubeUrl: "https://youtube.com/watch?v=...",
instagramUrl: "https://www.instagram.com/reel/...",
tiktokUrl: "https://www.tiktok.com/@yourhandle/video/..."`}
          </pre>
        </div>
      ),
    },
    {
      num: 4,
      title: "Upload Your Resume",
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            Save your exported resume PDF with the exact filename:
          </p>
          <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-amber-300">
{`/public/resume.pdf`}
          </pre>
          <p className="text-xs text-neutral-400 mt-2">
            The "Download My Resume" button automatically points to <code className="text-white font-mono">/resume.pdf</code>.
          </p>
        </div>
      ),
    },
    {
      num: 5,
      title: "Add Real Experience & Testimonials",
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            In <code className="text-amber-400 font-mono">src/data/portfolioData.ts</code>, locate <code className="text-white font-mono">EXPERIENCE_ITEMS</code> and <code className="text-white font-mono">TESTIMONIALS</code>.
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Replace the bracketed placeholders (<code className="text-amber-300">[Add organization/project]</code>, <code className="text-amber-300">[Add dates]</code>, <code className="text-amber-300">[Add responsibilities]</code>) with your true project details.
          </p>
        </div>
      ),
    },
    {
      num: 6,
      title: "Add Your Social Media Profiles",
      icon: <Share2 className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            At the top of <code className="text-amber-400 font-mono">src/data/portfolioData.ts</code>, replace the placeholders in <code className="text-white font-mono">PERSONAL_INFO.socials</code>:
          </p>
          <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`socials: {
  email: "mailto:endaleaychew@gmail.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  instagram: "https://www.instagram.com/your-handle",
  tiktok: "https://www.tiktok.com/@your-handle",
  youtube: "https://www.youtube.com/@your-channel",
  github: "https://github.com/your-username",
}`}
          </pre>
        </div>
      ),
    },
    {
      num: 7,
      title: "Test the Website Locally",
      icon: <Code2 className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            Run the development server in your terminal:
          </p>
          <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-amber-300">
{`npm run dev`}
          </pre>
          <p className="text-xs text-neutral-400 mt-2">
            Open <code className="text-white">http://localhost:3000</code> to verify on mobile & desktop screen sizes.
          </p>
        </div>
      ),
    },
    {
      num: 8,
      title: "Deploy to GitHub",
      icon: <Github className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            Initialize git and push your repository to your GitHub account:
          </p>
          <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`git init
git add .
git commit -m "Initial Endale Aychew portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/endale-portfolio.git
git push -u origin main`}
          </pre>
        </div>
      ),
    },
    {
      num: 9,
      title: "Deploy to Vercel (Free 1-Click)",
      icon: <Globe className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <ol className="list-decimal list-inside text-xs text-neutral-300 space-y-1.5 leading-relaxed">
            <li>Go to <strong className="text-white">vercel.com</strong> and sign in with GitHub.</li>
            <li>Click <strong className="text-amber-400">"Add New Project"</strong>.</li>
            <li>Select your <code className="text-white font-mono">endale-portfolio</code> repository.</li>
            <li>Framework Preset: <strong className="text-white">Vite</strong>.</li>
            <li>Click <strong className="text-amber-400">Deploy</strong>. Vercel automatically builds and provides a worldwide CDN link!</li>
          </ol>
        </div>
      ),
    },
    {
      num: 10,
      title: "Get Your Final Public Portfolio URL",
      icon: <ExternalLink className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-2">
            Once deployed on Vercel, you get an instant HTTPS URL such as:
          </p>
          <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-amber-300">
{`https://endale-aychew.vercel.app`}
          </pre>
          <p className="text-xs text-neutral-400 mt-2">
            You can also connect your own custom domain (e.g., <code className="text-white">endaleaychew.com</code>) for free in Vercel's Domain Settings.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div
      id="portfolio-guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="portfolio-guide-modal-container"
        className="relative w-full max-w-3xl bg-[#0d1019] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090b11]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">
                Portfolio Setup & Deployment Guide
              </h3>
              <p className="text-xs text-neutral-400">
                10-step reference for updating videos, images, CV, and deploying live
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-4 rounded-xl bg-[#090c13] border border-white/10 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  <h4 className="font-heading text-sm font-bold text-white flex items-center gap-2">
                    {step.title}
                  </h4>
                </div>

                <div className="pl-10">
                  {step.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-[#090b11] flex items-center justify-between text-xs text-neutral-400">
          <span>Editable file: <code className="text-amber-400 font-mono">src/data/portfolioData.ts</code></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
