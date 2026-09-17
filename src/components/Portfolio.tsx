import React, { useState } from 'react';
import { PortfolioCategory, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioCard } from './PortfolioCard';
import { Filter, Sparkles, FolderOpen } from 'lucide-react';

interface PortfolioProps {
  onOpenModal: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');

  const categories: PortfolioCategory[] = [
    'All',
    'Social Media',
    'Content Creation',
    'Video Editing',
    'YouTube',
    'Graphics',
  ];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#08090d] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
              Selected Works
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Portfolio & Creative Showcase
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              A collection of short-form edits, YouTube productions, social media campaigns, and visual graphics. Click any item to explore full project specs.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            Showing <strong className="text-white">{filteredItems.length}</strong> projects in <span className="text-amber-400 font-bold">{selectedCategory}</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 bg-[#10141e] border border-white/10 rounded-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === 'All'
                ? PORTFOLIO_ITEMS.length
                : PORTFOLIO_ITEMS.filter((i) => i.category === cat).length;

              return (
                <button
                  key={cat}
                  id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-neutral-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="p-16 text-center rounded-2xl bg-[#0f121b] border border-white/10 max-w-md mx-auto">
            <FolderOpen className="w-12 h-12 text-neutral-500 mx-auto mb-3" />
            <p className="text-base text-neutral-300 font-semibold">No items in this category yet</p>
            <p className="text-xs text-neutral-500 mt-1">
              Add projects in <code className="text-amber-400 font-mono">src/data/portfolioData.ts</code>
            </p>
          </div>
        )}

        {/* Easy Project Edit Note */}
        <div className="mt-16 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>
              All project entries are structured in <strong className="text-white">src/data/portfolioData.ts</strong> for instant updates.
            </span>
          </div>
          <span className="text-neutral-500 font-mono">
            Supports YouTube, Vimeo, TikTok, Instagram & Direct MP4
          </span>
        </div>

      </div>
    </section>
  );
};
