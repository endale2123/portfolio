import React, { useState } from 'react';
import { Film, Layout, Youtube, Instagram, Smartphone, Calendar, Scissors, Share2, Target, Sparkles, Image, Palette, Cpu, CheckCircle } from 'lucide-react';
import { TOOLS_AND_SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'All' | 'Software & Tools' | 'Core Craft' | 'Strategy & Growth'>('All');

  const iconMap: Record<string, React.ReactNode> = {
    Film: <Film className="w-5 h-5 text-amber-400" />,
    Layout: <Layout className="w-5 h-5 text-amber-400" />,
    Youtube: <Youtube className="w-5 h-5 text-amber-400" />,
    Instagram: <Instagram className="w-5 h-5 text-amber-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-amber-400" />,
    Calendar: <Calendar className="w-5 h-5 text-amber-400" />,
    Scissors: <Scissors className="w-5 h-5 text-amber-400" />,
    Share2: <Share2 className="w-5 h-5 text-amber-400" />,
    Target: <Target className="w-5 h-5 text-amber-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Image: <Image className="w-5 h-5 text-amber-400" />,
    Palette: <Palette className="w-5 h-5 text-amber-400" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
  };

  const filteredSkills = filterCategory === 'All'
    ? TOOLS_AND_SKILLS
    : TOOLS_AND_SKILLS.filter(s => s.category === filterCategory);

  return (
    <section id="skills" className="py-24 bg-[#090b12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
              Technical Stack & Competencies
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Tools & Core Skills
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              A balanced toolkit combining industry-standard creative software, viral platform mechanics, and strategic planning systems.
            </p>
          </div>

          {/* Discipline Filters */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121622] rounded-xl border border-white/10 overflow-x-auto">
            {(['All', 'Software & Tools', 'Core Craft', 'Strategy & Growth'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`p-5 rounded-2xl bg-[#0e121b] border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group flex flex-col justify-between ${
                skill.highlight ? 'border-amber-500/30' : 'border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                    {iconMap[skill.iconName] || <Sparkles className="w-5 h-5 text-amber-400" />}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-heading">
                  {skill.name}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {skill.levelDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-neutral-400">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Production Proficient</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Note */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-neutral-400">
          Focused on measurable creative outcomes, high-retention pacing, and transparent deliverables rather than arbitrary percentages.
        </div>

      </div>
    </section>
  );
};
