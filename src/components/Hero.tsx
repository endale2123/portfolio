import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Share2, 
  Calendar, 
  TrendingUp, 
  Instagram, 
  Video, 
  CheckCircle2, 
  FileText,
  Youtube,
  Scissors
} from 'lucide-react';
import { PERSONAL_INFO, YOUTUBE_MILESTONE } from '../data/portfolioData';

interface HeroProps {
  onOpenVideoModal?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white font-semibold">Available for Social Media Management</span>
              <span className="text-neutral-500">•</span>
              <span className="flex items-center gap-1 text-neutral-400">
                <MapPin className="w-3 h-3 text-amber-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Greeting & Name */}
            <div className="mb-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                Personal Portfolio & Introduction
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                Hi, I'm <span className="text-white">{PERSONAL_INFO.name}</span>
              </h2>
            </div>

            {/* Role List: Social Media Manager / Content Creator / Video Editor */}
            <div className="flex flex-wrap items-center gap-2 my-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm shadow-amber-500/10">
                <Share2 className="w-3.5 h-3.5" />
                Social Media Manager
              </span>
              <span className="text-neutral-600">/</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-white/10 text-neutral-200 border border-white/10">
                <Video className="w-3.5 h-3.5 text-neutral-400" />
                Content Creator
              </span>
              <span className="text-neutral-600">/</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-white/5 text-neutral-300 border border-white/10">
                <Scissors className="w-3.5 h-3.5 text-amber-400/70" />
                Video Editor
              </span>
            </div>

            {/* Core Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.15] my-4">
              Helping Brands & Creators Build a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                High-Engagement Social Media Presence.
              </span>
            </h1>

            {/* Supporting Text - Focused Introduction */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-6 font-normal">
              {PERSONAL_INFO.heroSupporting}
            </p>

            {/* Proven Milestone Quick Tag */}
            <div className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-neutral-200">
              <Youtube className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Proven organic creator with a <strong>YouTube channel built to &gt;1,500 subscribers</strong></span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-contact-btn"
                onClick={() => handleScroll('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Let's Connect & Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-strategy-btn"
                onClick={() => handleScroll('#social-media')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Share2 className="w-4 h-4 text-amber-400" />
                <span>Explore SMM Strategy</span>
              </button>

              <button
                id="hero-milestone-btn"
                onClick={() => handleScroll('#milestones')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <span>YouTube Milestone</span>
              </button>

              <a
                id="hero-resume-btn"
                href={PERSONAL_INFO.resumeUrl}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-colors"
                title="Download Endale's Resume"
              >
                <FileText className="w-4 h-4 text-neutral-400" />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Key Capabilities Quick Metrics */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Core Focus</p>
                <p className="text-sm font-bold text-white mt-0.5">Social Media Mgmt</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Audience Proof</p>
                <p className="text-sm font-bold text-red-400 mt-0.5">&gt;1.5K YouTube Subs</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Production</p>
                <p className="text-sm font-bold text-white mt-0.5">Video Editing & Pacing</p>
              </div>
            </div>
          </div>

          {/* Right Column: Social Media Management & YouTube Growth Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#0e111a]/95 border border-white/15 p-5 shadow-2xl shadow-black/80 backdrop-blur-xl">
              
              {/* Card Header: Channel Management Preview */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-xs shadow-md shadow-amber-500/20">
                    EB
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white tracking-tight">
                      Endale Aychew Begashaw
                    </h3>
                    <p className="text-[10px] text-amber-400 font-mono">
                      @endale_aychew • SMM Hub
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Management
                </div>
              </div>

              {/* YouTube Channel Milestone Spotlight Card (Replaces photo review) */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#180a0d] via-[#10141f] to-[#0a0d14] border border-red-500/20 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-400">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold block">
                        Verified Channel Proof
                      </span>
                      <h4 className="text-sm font-bold text-white font-heading">
                        Organic YouTube Creator
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    100% Organic
                  </span>
                </div>

                <div className="py-2.5 my-2 px-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Community Size</span>
                    <span className="text-2xl font-extrabold font-heading text-white tracking-tight">
                      &gt;1,500
                    </span>
                    <span className="text-xs text-neutral-400 ml-1">Subscribers</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Growth Strategy</span>
                    <span className="text-xs font-semibold text-amber-300">Audience Targeting</span>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Demonstrating genuine ability to capture attention, design click-worthy thumbnails, and retain viewers through structured storytelling and video editing.
                </p>

                {/* Overlaid Platform Badges */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Instagram className="w-3 h-3 text-pink-400" />
                    <span>Instagram • TikTok • YouTube</span>
                  </div>
                  <span className="text-amber-400/90 font-mono">Active Workflow</span>
                </div>
              </div>

              {/* Live Scheduled Content (Social Media Manager Proof) */}
              <div className="mt-4 pt-3.5 border-t border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Next Scheduled Post:
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    Today at 03:30 PM
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">
                      Instagram Reel (9:16)
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">Status: Ready to Post</span>
                  </div>
                  <p className="text-neutral-200 text-xs line-clamp-2 leading-relaxed">
                    "5 mistakes brands make that hurt their Instagram reach in 2026. Here's what the algorithm favors right now..."
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
                    <span className="text-amber-400">#SocialGrowth</span>
                    <span className="text-amber-400">#ContentStrategy</span>
                    <span className="text-amber-400">#BrandBuilding</span>
                  </div>
                </div>

                {/* 3 Pillar Summary Chips */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-[10px]">
                  <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400 block text-[9px]">CADENCE</span>
                    <span className="text-white font-semibold">5 Posts/Week</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400 block text-[9px]">ENGAGEMENT</span>
                    <span className="text-amber-400 font-semibold">Active Daily</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400 block text-[9px]">VIDEO EDIT</span>
                    <span className="text-white font-semibold">CapCut / Pacing</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Decorative Floating Accent Tag */}
            <div className="absolute -bottom-4 -left-4 bg-[#121622] border border-amber-500/30 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md hidden sm:flex">
              <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-amber-400">Social Strategy</p>
                <p className="text-xs font-semibold text-white">Audience Growth & Retention</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
