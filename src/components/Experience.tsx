import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle2, Edit3, ArrowRight } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#08090d] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
              Career Milestones
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Experience & Project History
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Professional engagements spanning video post-production, multi-channel social management, and creative campaigns.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
            <Edit3 className="w-3.5 h-3.5 text-amber-400" />
            <span>Easily editable in <code>src/data/portfolioData.ts</code></span>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#08090d] border-2 border-amber-400 group-hover:bg-amber-400 group-hover:scale-125 transition-all shadow-md shadow-amber-400/20" />

              {/* Date pill for desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono text-amber-400 font-semibold block">
                  {item.dates}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  Milestone #{idx + 1}
                </span>
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-[#0e121b] border border-white/10 hover:border-amber-400/30 p-6 sm:p-8 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block sm:inline mr-2">
                      {item.categoryTitle}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white mt-1">
                      {item.role}
                    </h3>
                  </div>

                  <div className="md:hidden flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.dates}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-300 font-medium mb-5 pb-4 border-b border-white/5">
                  <Building className="w-4 h-4 text-neutral-400" />
                  <span className="text-amber-300 font-mono">{item.organization}</span>
                  {item.isPlaceholder && (
                    <span className="text-[10px] font-mono text-neutral-500 bg-white/5 px-2 py-0.5 rounded">
                      Placeholder
                    </span>
                  )}
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Key Responsibilities & Outcomes:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
