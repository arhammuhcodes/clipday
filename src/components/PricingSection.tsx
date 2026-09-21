import React from 'react';
import { Check, Download, Cpu } from 'lucide-react';
import { LinkDestinationConfig } from '../types';
import logoImg from '../assets/logo.png';

interface PricingSectionProps {
  config: LinkDestinationConfig;
  onFreeDownload: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onFreeDownload,
}) => {
  return (
    <section id="pricing-section" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center animate-fade-in">
      
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-14 sm:mb-16">
        <h2 
          className="text-4xl sm:text-6xl font-bold text-[#1d1d1f]"
          style={{ letterSpacing: '-0.045em', lineHeight: 1.04 }}
        >
          Completely free. <br />
          No strings attached.
        </h2>
        <p className="text-[#6e6e73] text-base sm:text-lg mt-4 leading-relaxed font-normal">
          No subscriptions, no accounts, and no locked features. ClipDay is an independent utility built for pure macOS workflow speed.
        </p>
      </div>

      {/* Single Apple-Style Pricing Card */}
      <div className="max-w-md mx-auto">
        <div 
          id="pricing-card-free"
          className="bg-white rounded-3xl p-8 sm:p-10 text-left border border-black/[0.06] shadow-xs"
        >
          {/* Tag & Platform */}
          <div className="flex items-center justify-between pb-5 border-b border-black/[0.06]">
            <div className="flex items-center space-x-2">
              <img
                src={logoImg}
                alt="ClipDay"
                className="w-5 h-5 rounded-md object-cover shadow-xs border border-black/10"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-semibold text-[#1d1d1f] tracking-tight">
                ClipDay for macOS
              </span>
            </div>
            <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-[#0071e3] bg-[#0071e3]/10 px-2.5 py-0.5 rounded-full font-medium">
              <Cpu className="w-3 h-3" />
              <span>Apple Silicon</span>
            </span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <div className="flex items-baseline space-x-2">
              <span className="text-5xl sm:text-6xl font-extrabold text-[#1d1d1f] tracking-tight">$0</span>
              <span className="text-sm font-normal text-[#6e6e73]">/ free forever</span>
            </div>
            <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
              Every feature included out of the box. No trial, no paywalls, and no telemetry.
            </p>
          </div>

          {/* Feature List */}
          <div className="mt-8 space-y-3.5 text-xs sm:text-sm text-[#1d1d1f]">
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
              <span>24-hour auto-decay for links, text, and images</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
              <span>Menu bar popover with customizable hotkey summon</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
              <span>Image & screenshot support with drag-and-drop export</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
              <span>100% private, on-device local storage</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
              <span>Built exclusively for Apple Silicon (M1, M2, M3, M4)</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
              <span>Free updates forever</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-9 pt-6 border-t border-black/[0.06]">
            <button
              id="pricing-download-button"
              onClick={onFreeDownload}
              className="w-full py-3 px-5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs hover:shadow cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download for macOS</span>
            </button>
            <p className="text-[11px] text-center text-[#6e6e73] mt-3">
              Requires macOS Ventura, Sonoma, or Sequoia on Apple Silicon
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
