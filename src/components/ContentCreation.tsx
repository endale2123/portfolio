import React, { useState } from 'react';
import { CONTENT_CREATION_ITEMS } from '../data/portfolioData';
import { Sparkles, Image as ImageIcon, Eye, ExternalLink, Smartphone, Monitor } from 'lucide-react';

export const ContentCreation: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof CONTENT_CREATION_ITEMS[0] | null>(null);

  return (
    <section id="content-creation" className="py-24 bg-[#08090e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
              Visual Asset Formats
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Content Creation Gallery
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              From vertical short-form assets engineered for TikTok & Reels to high-contrast YouTube thumbnails and branded carousel graphics.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            Easily replace placeholder images in <code className="text-amber-400">src/data/portfolioData.ts</code>
          </div>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT_CREATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#0d1017] border border-white/10 overflow-hidden hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1"
            >
              <div>
                {/* Media Image with Overlay */}
                <div 
                  onClick={() => setSelectedItem(item)}
                  className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.placeholderImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                    loading="lazy"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-black/80 backdrop-blur-md text-amber-400 border border-white/10">
                      {item.type}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-300 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                    {item.format}
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-11 h-11 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  {item.badge}
                </span>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Format</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Preview Modal for Content Creation Item */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0d1018] border border-white/15 rounded-2xl overflow-hidden shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                {selectedItem.type} Preview
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-xs text-neutral-400 hover:text-white px-2 py-1 bg-white/5 rounded"
              >
                Close (Esc)
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-black border border-white/10 aspect-video flex items-center justify-center">
              <img
                src={selectedItem.placeholderImage}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading text-white">{selectedItem.title}</h3>
              <p className="text-sm text-neutral-300 mt-1">{selectedItem.description}</p>
              <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-400">
                <p><strong className="text-white">Format:</strong> {selectedItem.format}</p>
                <p className="mt-1">Replace this placeholder image with your exported graphic in <code className="text-amber-400">src/data/portfolioData.ts</code></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
