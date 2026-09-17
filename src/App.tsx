/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SocialMedia } from './components/SocialMedia';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ChannelMilestone } from './components/ChannelMilestone';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { GuideModal } from './components/GuideModal';
import { PortfolioItem } from './types';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090d] text-[#e2e8f0] relative overflow-x-hidden font-sans selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Main Content Layout - Focused on Social Media Management, Self Introduction & YouTube Milestone */}
      <main>
        <Hero onOpenVideoModal={() => setIsGuideOpen(true)} />
        <About />
        <SocialMedia />
        <Services />
        <Portfolio onOpenModal={(item) => setSelectedVideo(item)} />
        <ChannelMilestone />
        <Skills />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Video & Project Preview Modal */}
      <VideoModal
        item={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Step-by-Step Setup & Deployment Guide Modal */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
