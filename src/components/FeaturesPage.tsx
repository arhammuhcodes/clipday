import React from 'react';
import {
  Clock,
  ShieldCheck,
  Cpu,
  Image as ImageIcon,
  Search,
  ArrowRight
} from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FeaturesPageProps {
  onDownloadClick: () => void;
  onNavigateHome: () => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({
  onDownloadClick,
  onNavigateHome,
}) => {
  return (
    <div id="features-page" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-left animate-fade-in">
      
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <h1 
          className="text-4xl sm:text-6xl font-bold text-[#1d1d1f]"
          style={{ letterSpacing: '-0.045em', lineHeight: 1.04 }}
        >
          Simple by design. <br />
          Built for how you work.
        </h1>
        <p className="text-[#6e6e73] text-base sm:text-lg mt-4 leading-relaxed font-normal">
          ClipDay holds links, text, code, and images for up to 24 hours. No bloat, no clutter, and zero maintenance.
        </p>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            id="features-download-cta"
            onClick={onDownloadClick}
            className="px-6 py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-medium rounded-full shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
          >
            Download for macOS
          </button>
          <button
            onClick={onNavigateHome}
            className="text-[#0071e3] hover:underline text-xs sm:text-sm font-medium inline-flex items-center space-x-1 cursor-pointer"
          >
            <span>Back to overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid of Clean Apple Feature Cards (No AI Clutter) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Card 1: 24-Hour Auto-Decay */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-5">
              <Clock className="w-5 h-5 text-black" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              24-Hour Auto-Decay
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Everything you copy during your workday is kept for exactly 24 hours. When the countdown completes, items quietly purge themselves on-device. Your history stays clean with zero manual upkeep.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#6e6e73]">
            <span>Automatic garbage collection</span>
            <span className="font-mono font-medium text-[#1d1d1f]">24h Expiration</span>
          </div>
        </div>

        {/* Card 2: Images & Screenshots */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-5">
              <ImageIcon className="w-5 h-5 text-black" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              Holds Images & Screenshots
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Capture a screenshot with <kbd className="px-1.5 py-0.5 rounded bg-black/[0.06] text-xs font-mono text-[#1d1d1f]">⌘ ⌃ ⇧ 4</kbd> or copy an image from Figma, Safari, or Slack. ClipDay stores the image with a visual thumbnail and lets you drag it right out into any app.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#6e6e73]">
            <span>Drag & drop anywhere</span>
            <span className="font-mono font-medium text-[#1d1d1f]">PNG • JPEG • WebP</span>
          </div>
        </div>

        {/* Card 3: Menu Bar Companion */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-black border border-black/10 flex items-center justify-center mb-5 shadow-xs">
              <img
                src={logoImg}
                alt="ClipDay Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              Menu Bar Native
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Lives discreetly in your status bar. Summon it instantly with a global hotkey (<kbd className="px-1.5 py-0.5 rounded bg-black/[0.06] text-xs font-mono text-[#1d1d1f]">⌥ Space</kbd>). No windows cluttering your desktop, and no icon occupying space in your Dock.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#6e6e73]">
            <span>Runs as background agent</span>
            <span className="font-mono font-medium text-[#1d1d1f]">⌥ Space</span>
          </div>
        </div>

        {/* Card 4: Built for Apple Silicon */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-5">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              Apple Silicon Only
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Built exclusively in native Swift for M1, M2, M3, and M4 processors. It consumes under 12MB of RAM, wakes the CPU for zero extra cycles, and launches in less than 50 milliseconds. (Intel Macs are not supported).
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#6e6e73]">
            <span>Native ARM64 binary</span>
            <span className="font-mono font-medium text-[#0071e3]">M1 • M2 • M3 • M4</span>
          </div>
        </div>

        {/* Card 5: 100% On-Device & Private */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-5">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              100% On-Device & Private
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Your clipboard never leaves your Mac. ClipDay connects to zero cloud servers, has no analytics or trackers, and requires no account. Everything is held locally inside macOS sandboxed storage.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#6e6e73]">
            <span>Zero cloud telemetry</span>
            <span className="font-mono font-medium text-emerald-600">Local Only</span>
          </div>
        </div>

        {/* Card 6: Instant Search & Pinning */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-5">
              <Search className="w-5 h-5 text-black" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              Fuzzy Search & Pinning
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Instantly find any link, terminal command, or note from earlier in the day with real-time fuzzy search. Need to keep an item past the 24-hour limit? Pin it with one click to keep it forever.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#6e6e73]">
            <span>Instant keyboard filtering</span>
            <span className="font-mono font-medium text-[#1d1d1f]">Pin / Unpin</span>
          </div>
        </div>

      </div>

      {/* Bottom CTA on Features Page */}
      <div className="mt-16 sm:mt-24 text-center py-10 border-t border-black/[0.06]">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
          Ready to experience ClipDay?
        </h3>
        <p className="text-[#6e6e73] text-sm mt-2 max-w-md mx-auto">
          Completely free forever for Apple Silicon. No accounts, no subscriptions.
        </p>
        <div className="mt-6">
          <button
            onClick={onDownloadClick}
            className="px-6 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-medium rounded-full shadow-xs hover:shadow transition-all cursor-pointer"
          >
            Download for macOS
          </button>
        </div>
      </div>

    </div>
  );
};
