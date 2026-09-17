import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  Calendar, 
  Video, 
  UploadCloud, 
  MessageSquare, 
  BarChart3, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Layers, 
  Filter, 
  Share2 
} from 'lucide-react';
import { WORKFLOW_STEPS, CONTENT_PILLARS, WEEKLY_CONTENT_SCHEDULE } from '../data/portfolioData';

export const SocialMedia: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'workflow' | 'pillars'>('calendar');

  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5 text-amber-400" />,
    Compass: <Compass className="w-5 h-5 text-amber-400" />,
    Calendar: <Calendar className="w-5 h-5 text-amber-400" />,
    Video: <Video className="w-5 h-5 text-amber-400" />,
    UploadCloud: <UploadCloud className="w-5 h-5 text-amber-400" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-amber-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="social-media" className="py-24 bg-[#090c13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            Channel Growth & Strategy
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Social Media Management & Systematic Channel Growth
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-2xl leading-relaxed">
            Great social media isn't guesswork. It requires structured planning, strategic content pillars, fast-paced video editing, and dependable posting rhythms. Here is how I organize and manage brand feeds.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'calendar'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Weekly Content Calendar Demo</span>
          </button>

          <button
            onClick={() => setActiveTab('workflow')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'workflow'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>7-Step Management Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('pillars')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'pillars'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>5 Core Content Pillars</span>
          </button>
        </div>

        {/* TAB 1: WEEKLY CONTENT CALENDAR DEMO */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  Sample 7-Day Social Media Publishing Calendar
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  How I plan and balance content types, platform formats, and peak posting times for consistent weekly momentum.
                </p>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20 self-start sm:self-auto whitespace-nowrap">
                Multi-Platform Cadence
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WEEKLY_CONTENT_SCHEDULE.map((item) => (
                <div
                  key={item.day}
                  className="p-5 rounded-2xl bg-[#0e121d] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-white text-base">
                          {item.day}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          {item.time}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                        {item.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-semibold text-neutral-400">Platform:</span>
                        <span className="text-xs font-semibold text-white">{item.platform}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-semibold text-neutral-400">Format:</span>
                        <span className="text-xs text-amber-300">{item.format}</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-white/5">
                        <span className="text-[10px] uppercase font-mono text-neutral-500 block mb-1">
                          Pillar: {item.pillar}
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-200 leading-snug font-medium">
                          "{item.topic}"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle className="w-3 h-3" />
                      Captions & Tags Ready
                    </span>
                    <span className="text-[10px] text-neutral-500">Peak Hour Slot</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 7-STEP WORKFLOW */}
        {activeTab === 'workflow' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-[#0e121c] border border-white/10 hover:border-amber-400/40 transition-all duration-200 flex flex-col justify-between group relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-amber-400 transition-colors">
                        {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/10 transition-colors">
                        {iconMap[step.icon]}
                      </div>
                    </div>

                    <h4 className="font-heading text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-neutral-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CONTENT PILLARS */}
        {activeTab === 'pillars' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {CONTENT_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#0e121a] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-block mb-3">
                      <span className={`text-xs font-bold uppercase tracking-wider ${pillar.accent}`}>
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <CheckCircle className="w-3 h-3 text-amber-400" />
                    <span>Balanced Cadence</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
