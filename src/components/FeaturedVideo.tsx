import React from 'react';
import { Play, Film, ExternalLink, Sparkles, Sliders } from 'lucide-react';
import { FEATURED_VIDEOS } from '../data/portfolioData';
import { PortfolioItem } from '../types';

interface FeaturedVideoProps {
  onSelectVideo: (item: PortfolioItem) => void;
}

export const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ onSelectVideo }) => {
  return (
    <section id="featured" className="py-24 bg-[#090b11] relative border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
              Curated Production
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Featured Work
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Highlighting signature edits crafted for maximum viewer retention, cinematic pacing, and multi-channel engagement.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Click any project to launch the interactive video preview</span>
          </div>
        </div>

        {/* 3 Large Featured Cards */}
        <div className="space-y-12">
          {FEATURED_VIDEOS.map((project, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={project.id}
                id={`featured-project-${project.id}`}
                className="rounded-3xl bg-[#0d1018] border border-white/10 overflow-hidden shadow-2xl hover:border-amber-400/40 transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? 'lg:flex-row-reverse' : ''} items-stretch`}>
                  
                  {/* Thumbnail / Video Monitor Area */}
                  <div className={`lg:col-span-7 relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[380px] overflow-hidden ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-black/30 to-black/20" />

                    {/* Interactive Play Button */}
                    <button
                      onClick={() => onSelectVideo(project)}
                      className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400/90 hover:bg-amber-400 text-black flex items-center justify-center shadow-xl shadow-amber-500/40 group-hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                      aria-label={`Play ${project.title}`}
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                    </button>

                    {/* Badges on Video Card */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold text-amber-400 border border-white/10">
                        {project.aspectRatio === '9:16' ? '9:16 Vertical Cut' : '16:9 Master'}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono text-neutral-300 border border-white/10">
                        HD / 4K Ready
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono text-neutral-300 border border-white/10">
                      <Film className="w-3.5 h-3.5 text-amber-400" />
                      <span>Click to preview</span>
                    </div>
                  </div>

                  {/* Information & Details Area */}
                  <div className={`lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Category & Project Index */}
                      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                        <span className="text-amber-400 font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span>0{idx + 1} / 03</span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Role & Client Placeholder */}
                      <div className="space-y-2 mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400 font-medium">My Role:</span>
                          <span className="text-white font-semibold">{project.role}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400 font-medium">Client / Project:</span>
                          <span className="text-amber-400/90 font-mono">{project.clientPlaceholder}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400 font-medium">Benchmark:</span>
                          <span className="text-neutral-300 font-mono">{project.metricsPlaceholder}</span>
                        </div>
                      </div>

                      {/* Tools Used */}
                      <div className="mb-6">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                          Tools Applied:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.toolsUsed?.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-neutral-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Trigger Button */}
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => onSelectVideo(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-400/20 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-black" />
                        <span>Watch Video Preview</span>
                      </button>

                      <span className="text-xs text-neutral-400 font-mono">
                        Sequence #{project.id}
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
