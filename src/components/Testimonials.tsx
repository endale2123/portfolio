import React from 'react';
import { Quote, MessageSquare, PlusCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0c13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            Client Words & Feedback
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Testimonials & Endorsements
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Honest feedback from creators, agencies, and brand collaborators on turnaround speed, storytelling clarity, and communication.
          </p>
        </div>

        {/* 3 Testimonials Cards (Explicitly marked placeholders as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-[#0e121c] border border-white/10 flex flex-col justify-between relative group hover:border-amber-400/30 transition-all duration-200"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                  <Quote className="w-5 h-5" />
                </div>

                {/* Clearly marked placeholder text as strictly demanded */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/15 mb-6">
                  <p className="text-sm sm:text-base text-amber-200/90 font-mono italic">
                    "{item.quote}"
                  </p>
                  <p className="text-[11px] text-neutral-500 font-mono mt-2">
                    [Replace with real testimonial quote #{idx + 1}]
                  </p>
                </div>
              </div>

              {/* Client Info Placeholder */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center font-mono text-xs text-neutral-300">
                  #{idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    {item.roleOrCompany}
                  </p>
                  <span className="text-[10px] text-amber-400/80 font-mono block mt-0.5">
                    {item.projectType}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Instructions Note */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-neutral-400 max-w-xl mx-auto">
          <span>To update these 3 quotes with real client feedback, open </span>
          <code className="text-amber-400 font-mono">src/data/portfolioData.ts</code>
          <span> and replace the items in the </span>
          <code className="text-white font-mono">TESTIMONIALS</code>
          <span> array.</span>
        </div>

      </div>
    </section>
  );
};
