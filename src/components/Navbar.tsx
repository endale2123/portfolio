import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'social-media', 'services', 'portfolio', 'milestones', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Social Media', href: '#social-media' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="nav-brand-link"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-bold text-black text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            EB
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white text-base tracking-tight group-hover:text-amber-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-neutral-400 font-medium tracking-wide">
              SMM • Creator • Video Editor
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                id={`nav-link-${sectionId}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="setup-guide-nav-btn"
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 hover:border-amber-500/50 hover:text-amber-400 hover:bg-white/10 transition-all"
            title="Read how to update your videos, photos, and deploy"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Setup Guide</span>
          </button>

          <a
            id="nav-cta-work-together"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs xl:text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-guide-btn"
            onClick={onOpenGuide}
            className="p-2 rounded-lg text-xs font-medium text-neutral-300 bg-white/5 border border-white/10"
            aria-label="Setup Guide"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
          </button>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0a0c12]/95 border-b border-white/10 px-6 py-5 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-neutral-200 hover:text-amber-400 hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
              <button
                id="mobile-drawer-guide-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-200 bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>How to Edit & Deploy Guide</span>
              </button>

              <a
                id="mobile-drawer-cta"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 text-center shadow-lg shadow-amber-500/20"
              >
                <span>Let's Work Together</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
