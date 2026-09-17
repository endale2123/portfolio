import React from 'react';
import { Scissors, Palette, Share2, Youtube, Target, Layout, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Scissors: <Scissors className="w-6 h-6 text-amber-400" />,
    Palette: <Palette className="w-6 h-6 text-amber-400" />,
    Share2: <Share2 className="w-6 h-6 text-amber-400" />,
    Youtube: <Youtube className="w-6 h-6 text-amber-400" />,
    Target: <Target className="w-6 h-6 text-amber-400" />,
    Layout: <Layout className="w-6 h-6 text-amber-400" />,
  };

  const handleScrollToContact = (serviceTitle: string) => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#08090e] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            Services & Solutions
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Social Media Management & Creative Production Services
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            From strategic content calendars and community engagement to high-retention vertical reels and thumb-stopping visual carousels.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="rounded-2xl bg-[#0d1017] border border-white/10 hover:border-amber-400/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/50 transition-all duration-500" />

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                    {iconMap[service.iconName] || <Scissors className="w-6 h-6 text-amber-400" />}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/80 bg-amber-400/5 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                    Key Deliverables:
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {service.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => handleScrollToContact(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#121622] via-[#10141e] to-[#0e111a] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white font-heading">
              Need a Custom Cross-Discipline Package?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Combine video editing with recurring social media management and thumbnail creation for a synchronized content engine.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
          >
            Discuss Custom Package
          </button>
        </div>

      </div>
    </section>
  );
};
