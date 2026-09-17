import React from 'react';
import { ArrowUp, Mail, Linkedin, Instagram, Youtube, Github, Smartphone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Featured Work', href: '#featured' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Social Media', href: '#social-media' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#06070a] border-t border-white/10 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black text-lg shadow-md shadow-amber-500/20">
                EB
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-neutral-300 font-medium">
              {PERSONAL_INFO.title}
            </p>

            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Based in Addis Ababa, Ethiopia. Delivering high-retention video editing, visual content creation, and strategic social media management for forward-thinking brands and creators.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 transition-all flex items-center justify-center text-neutral-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 transition-all flex items-center justify-center text-neutral-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 transition-all flex items-center justify-center text-neutral-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 transition-all flex items-center justify-center text-neutral-300"
                aria-label="TikTok"
              >
                <Smartphone className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 transition-all flex items-center justify-center text-neutral-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 transition-all flex items-center justify-center text-neutral-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-amber-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & direct email */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-2">
                Inquiries
              </h4>
              <p className="text-xs text-neutral-400">{PERSONAL_INFO.email}</p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 p-3 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 transition-all flex items-center gap-2 text-xs font-semibold text-white group cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            Copyright © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Addis Ababa, Ethiopia</span>
            <span>•</span>
            <span>Video Editor & Content Creator</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
