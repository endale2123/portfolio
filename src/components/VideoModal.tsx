import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink, Film, Youtube, Instagram, Share2, CheckCircle, Smartphone, Monitor } from 'lucide-react';
import { PortfolioItem } from '../types';

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ item, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState<'16:9' | '9:16'>('16:9');
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    if (item) {
      setSelectedRatio(item.aspectRatio === '9:16' ? '9:16' : '16:9');
      setIsPlaying(false);
      setShowEmbed(Boolean(item.embedUrl));
    }
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      id="video-preview-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="video-preview-modal-container"
        className="relative w-full max-w-4xl bg-[#0c0f17] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#080a10]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              {item.category} • Project Sequence
            </span>
            <span className="text-xs text-neutral-500 hidden sm:inline">|</span>
            <span className="text-xs text-neutral-400 hidden sm:inline truncate max-w-xs font-medium">
              {item.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Aspect Ratio Switcher */}
            {item.isVideo && (
              <div className="flex items-center bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs">
                <button
                  onClick={() => setSelectedRatio('16:9')}
                  className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] font-mono ${
                    selectedRatio === '16:9'
                      ? 'bg-amber-400 text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3 h-3" />
                  <span>16:9</span>
                </button>
                <button
                  onClick={() => setSelectedRatio('9:16')}
                  className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] font-mono ${
                    selectedRatio === '9:16'
                      ? 'bg-amber-400 text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span>9:16 Reel</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              id="close-video-modal-btn"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Main Visual / Video Player Viewport */}
          <div className="relative rounded-xl overflow-hidden bg-black border border-white/10 flex items-center justify-center min-h-[260px] sm:min-h-[420px] max-h-[550px] shadow-inner">
            {showEmbed && item.embedUrl ? (
              <div className={`w-full h-full flex items-center justify-center p-2 ${selectedRatio === '9:16' ? 'max-w-xs aspect-[9/16]' : 'aspect-video'}`}>
                <iframe
                  src={item.embedUrl}
                  title={item.title}
                  className="w-full h-full rounded-lg border border-white/10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : item.videoUrl ? (
              <video
                src={item.videoUrl}
                controls
                autoPlay
                className={`w-full h-full object-contain ${selectedRatio === '9:16' ? 'max-w-xs' : ''}`}
              />
            ) : (
              /* Simulated Studio Media Monitor with Image Preview & Player Controls */
              <div className={`relative w-full h-full flex items-center justify-center ${selectedRatio === '9:16' ? 'max-w-xs aspect-[9/16]' : 'aspect-[16/9]'}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Simulated Player Controls Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 z-10 pointer-events-none">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-300">
                    <span className="bg-black/70 px-2 py-0.5 rounded border border-white/10">
                      PREVIEW MONITOR • 60 FPS
                    </span>
                    <span className="bg-amber-400/90 text-black font-bold px-2 py-0.5 rounded">
                      {item.aspectRatio || selectedRatio}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center my-auto pointer-events-auto">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-7 h-7 fill-black" /> : <Play className="w-7 h-7 fill-black translate-x-0.5" />}
                    </button>
                    <p className="text-xs text-neutral-200 mt-2 font-mono bg-black/60 px-3 py-1 rounded-full">
                      {isPlaying ? 'Playing Simulated Stream' : 'Click to Play Reel Preview'}
                    </p>
                  </div>

                  {/* Playback timeline bar */}
                  <div className="pointer-events-auto bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span>00:12 / 00:45</span>
                      <span>Audio Sync: Normalized -14 LUFS</span>
                    </div>
                    <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full bg-amber-400 rounded-full transition-all duration-300 ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/4'}`} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Description & Core Specs */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.fullDescription || item.shortDescription}
                </p>
              </div>

              {/* Deliverables */}
              {item.deliverables && (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-300 mb-2.5">
                    Project Deliverables:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {item.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick instructions on how to swap in your real video */}
              <div className="p-3.5 rounded-lg bg-amber-500/5 border border-amber-500/20 text-xs text-neutral-400">
                <span className="font-semibold text-amber-400">Customizing this project: </span>
                Update the <code className="text-white font-mono">embedUrl</code>, <code className="text-white font-mono">videoUrl</code>, or social links for project ID <code className="text-amber-400 font-mono">"{item.id}"</code> inside <code className="text-white font-mono">src/data/portfolioData.ts</code>.
              </div>
            </div>

            {/* Sidebar Metadata */}
            <div className="md:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 text-xs">
                <div>
                  <span className="text-neutral-500 block font-mono">ROLE</span>
                  <span className="text-white font-semibold">{item.role || 'Video Editor & Content Creator'}</span>
                </div>

                <div>
                  <span className="text-neutral-500 block font-mono">CLIENT / PRODUCTION</span>
                  <span className="text-amber-400 font-mono">{item.clientPlaceholder || '[Add Client Name]'}</span>
                </div>

                <div>
                  <span className="text-neutral-500 block font-mono">METRIC BENCHMARK</span>
                  <span className="text-neutral-300 font-mono">{item.metricsPlaceholder || '[Add Reach / Views]'}</span>
                </div>

                <div>
                  <span className="text-neutral-500 block font-mono mb-1.5">TOOLS USED</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.toolsUsed?.map((tool) => (
                      <span key={tool} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-neutral-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* External Links */}
              <div className="flex flex-col gap-2">
                {item.youtubeUrl && (
                  <a
                    href={item.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-xs font-semibold text-red-400 transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Watch on YouTube</span>
                  </a>
                )}

                {item.instagramUrl && (
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-pink-600/10 hover:bg-pink-600/20 border border-pink-500/30 text-xs font-semibold text-pink-400 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>View on Instagram</span>
                  </a>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#080a10] flex items-center justify-between text-xs text-neutral-400">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded font-mono text-neutral-300">Esc</kbd> to close</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
