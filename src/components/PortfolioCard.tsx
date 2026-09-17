import React from 'react';
import { Play, Eye, ExternalLink, Film, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpenModal: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onOpenModal }) => {
  return (
    <div
      id={`portfolio-card-${item.id}`}
      className="group rounded-2xl bg-[#0e1119] border border-white/10 overflow-hidden hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1.5"
    >
      <div>
        {/* Media Thumbnail Container */}
        <div 
          onClick={() => onOpenModal(item)}
          className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1119] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Video or Graphic Pill */}
          <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-black/80 backdrop-blur-md text-amber-400 border border-white/15">
              {item.category}
            </span>
            {item.isVideo && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                VIDEO
              </span>
            )}
          </div>

          {/* Center Action Overlay Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-300 shadow-xl">
              {item.isVideo ? (
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </div>
          </div>

          {/* Bottom tag on media */}
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-neutral-400 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm">
            {item.aspectRatio || '16:9'}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-1">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-4">
            {item.shortDescription}
          </p>

          {/* Tools applied */}
          {item.toolsUsed && item.toolsUsed.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.toolsUsed.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 border border-white/5 text-neutral-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-neutral-400">
          {item.clientPlaceholder || '[Client Placeholder]'}
        </span>

        <button
          onClick={() => onOpenModal(item)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          <span>View Project</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
