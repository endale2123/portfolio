import React from 'react';
import { 
  Share2, 
  Calendar, 
  Users, 
  Film, 
  TrendingUp, 
  Repeat, 
  BarChart3, 
  Check, 
  MapPin, 
  Sparkles, 
  Target 
} from 'lucide-react';
import { PERSONAL_INFO, WHAT_I_BRING } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Calendar: <Calendar className="w-5 h-5 text-amber-400" />,
    Users: <Users className="w-5 h-5 text-amber-400" />,
    Film: <Film className="w-5 h-5 text-amber-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
    Repeat: <Repeat className="w-5 h-5 text-amber-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-amber-400" />,
  };

  const coreDisciplines = [
    'Social media management',
    'Content calendar planning',
    'Audience engagement',
    'Instagram Reels & TikTok',
    'Short-form video editing',
    'YouTube Shorts & long-form',
    'Visual carousel design',
    'Hashtag & trend research',
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0c13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            Self Introduction
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Hi, I'm Endale — Bridging Social Strategy With Creative Content.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-2xl leading-relaxed">
            I help brands, businesses, and creators turn their social media channels into consistent, high-engagement growth drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Bio / Self-Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f131d] border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <blockquote className="text-base sm:text-lg text-neutral-200 font-normal leading-relaxed mb-6 border-l-2 border-amber-400 pl-4">
                "{PERSONAL_INFO.intro}"
              </blockquote>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                <p>
                  Based in <strong className="text-white">{PERSONAL_INFO.location}</strong>, I work remotely with clients worldwide. Many businesses struggle with social media because they either post randomly without a plan, or they lack the creative time to edit videos, create carousels, and reply to comments daily.
                </p>
                <p>
                  That's where I come in. As a <strong className="text-amber-400">Social Media Manager, Content Creator, and Video Editor</strong>, I handle the full cycle: from audience research and weekly content calendars, to editing punchy vertical reels, scheduling posts at peak times, and interacting with your community.
                </p>
                <p>
                  I've put these exact organic growth principles into practice on my own content — having built an organic YouTube channel to <strong className="text-red-400 font-semibold">&gt;1,500 dedicated subscribers</strong> through strategic positioning, clickable thumbnail packaging, and audience retention.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4">
                  What I Specialize In
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coreDisciplines.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-200 hover:border-amber-400/30 transition-colors"
                    >
                      <Check className="w-3 h-3 text-amber-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy / Mindset */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-500/20 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex-shrink-0 flex items-center justify-center font-bold text-lg">
                <Target className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-200 font-medium italic">
                  "Sustainable social media growth isn't about chasing one lucky viral moment. It is built on a clear strategy, high-retention storytelling, and showing up with consistency week after week."
                </p>
                <p className="text-xs text-amber-400 font-mono mt-2 uppercase tracking-wider">
                  — Endale Aychew Begashaw
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: "What I Bring" Section */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                How I Manage & Grow Your Channels
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                A structured, reliable approach to elevate brand authority and audience engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHAT_I_BRING.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-[#0e111a] border border-white/10 hover:border-amber-400/40 hover:bg-[#121622] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-amber-400" />}
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
