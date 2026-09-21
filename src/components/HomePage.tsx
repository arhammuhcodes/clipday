import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { CenterVideoPlayer } from './CenterVideoPlayer';
import { LinkDestinationConfig } from '../types';

interface HomePageProps {
  config: LinkDestinationConfig;
  onSetCustomVideo: (url: string, name?: string) => void;
  onNavigateToFeatures: () => void;
  onFreeDownload: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  config,
  onSetCustomVideo,
  onNavigateToFeatures,
  onFreeDownload,
}) => {
  return (
    <div id="home-page" className="w-full text-center">
      {/* 
        HERO SECTION: 
        Layout:
        1. Video Showcase directly on the very top.
        2. Apple-style Headline and Shrunk Subtitle text below it.
        3. Blue pill button & Secondary text link.
        4. Generous section spacing (100px - 120px).
      */}
      <section className="pt-6 sm:pt-8 pb-32 sm:pb-40 lg:pb-48 px-4 sm:px-6 max-w-6xl mx-auto">

        {/* VIDEO AT THE VERY TOP */}
        <div className="w-full mb-10 sm:mb-12">
          <CenterVideoPlayer
            customVideoUrl={config.customVideoUrl}
            onSetCustomVideo={onSetCustomVideo}
          />
        </div>

        {/* TEXT BELOW THE VIDEO */}
        <div className="max-w-3xl mx-auto space-y-5">
          {/* Apple Headline: Tight tracking and line-height */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1d1d1f]"
            style={{ letterSpacing: '-0.045em', lineHeight: 1.04 }}
          >
            The 24-hour holding area <br className="hidden sm:inline" />
            in your menu bar.
          </h1>

          {/* Shrunk Subtitle Width - Images explicitly supported */}
          <p className="text-[#6e6e73] text-base sm:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed font-normal">
            ClipDay holds your links, text, code, and images for up to 24 hours. Always ready in your macOS menu bar, summoned with a keystroke, then cleared automatically.
          </p>

          {/* Action CTAs: Blue Pill Main Button & Text Link Secondary */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              id="hero-download-button"
              onClick={onFreeDownload}
              className="px-7 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] flex items-center space-x-2 cursor-pointer"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <Download className="w-4 h-4" />
              <span>Download for macOS</span>
            </button>

            <button
              id="hero-explore-features-link"
              onClick={onNavigateToFeatures}
              className="text-[#0071e3] hover:underline text-sm font-medium inline-flex items-center space-x-1 cursor-pointer group"
            >
              <span>Explore all features</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <p className="text-xs text-[#6e6e73] font-normal pt-2">
            Free forever • Built exclusively for Apple Silicon (M1, M2, M3, M4) • macOS Ventura or later
          </p>
        </div>

      </section>
    </div>
  );
};

