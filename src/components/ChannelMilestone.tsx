import React from 'react';
import { Youtube, Users, TrendingUp, Scissors, Search, Layout, MessageCircle, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { YOUTUBE_MILESTONE, PERSONAL_INFO } from '../data/portfolioData';

export const ChannelMilestone: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5 text-red-400" />,
    Scissors: <Scissors className="w-5 h-5 text-amber-400" />,
    Layout: <Layout className="w-5 h-5 text-yellow-400" />,
    MessageCircle: <MessageCircle className="w-5 h-5 text-emerald-400" />,
  };

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="milestones" className="py-24 bg-[#08090d] relative border-t border-white/5">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono font-semibold text-red-400 uppercase tracking-widest mb-3">
            <Youtube className="w-3.5 h-3.5" />
            <span>Proven Growth Milestone</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Built an Organic YouTube Channel to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-400">
              &gt;1,500 Subscribers
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            {YOUTUBE_MILESTONE.description}
          </p>
        </div>

        {/* Milestone Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#121624] to-[#0c0f17] border border-white/10 p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-red-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Big Metric & Channel Summary */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                    <Youtube className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">
                      YouTube Creator Milestone
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Channel Growth Case Study
                    </p>
                  </div>
                </div>

                <div className="py-4">
                  <div className="text-5xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
                    {YOUTUBE_MILESTONE.subscribers}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs font-mono text-red-400 font-semibold uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>Organic Dedicated Subscribers</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Demonstrating hands-on proficiency in audience targeting, title and thumbnail packaging, and retaining viewers using fast-paced video editing.
                </p>
              </div>

              {/* Proof Badges */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-mono uppercase text-neutral-400">Growth Method</div>
                  <div className="text-xs font-bold text-white mt-0.5">100% Organic Content</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-mono uppercase text-neutral-400">Content Production</div>
                  <div className="text-xs font-bold text-amber-300 mt-0.5">Video Editing & Pacing</div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Core Growth Strategies */}
            <div className="lg:col-span-7">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-4">
                Execution Framework Applied
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {YOUTUBE_MILESTONE.strategies.map((strat, i) => (
                  <div
                    key={strat.title}
                    className="p-5 rounded-2xl bg-[#090c14] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                        {iconMap[strat.iconName] || <Award className="w-5 h-5 text-amber-400" />}
                      </div>
                      <h5 className="font-heading font-bold text-white text-sm mb-1.5">
                        {strat.title}
                      </h5>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {strat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-neutral-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Proven & Tested</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Callout banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-300 text-center sm:text-left">
              Want this exact growth strategy, consistency, and retention editing applied to your social media accounts?
            </div>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20"
            >
              <span>Work With Endale</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
