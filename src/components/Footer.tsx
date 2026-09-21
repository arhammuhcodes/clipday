import React from 'react';
import { ActivePage, LinkDestinationConfig } from '../types';
import { Shield, Cpu, Image as ImageIcon, Lock } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  config: LinkDestinationConfig;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
}) => {
  return (
    <footer id="app-footer" className="w-full bg-[#f5f5f7] border-t border-neutral-200/80 pt-16 pb-12 text-xs text-[#6e6e73]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple Style Editorial Subtext */}
        <div className="pb-8 border-b border-neutral-200/80 space-y-2 text-[11px] leading-relaxed text-neutral-400">
          <p>
            1. 24-hour expiration duration is evaluated continuously on-device by macOS background daemons. No data ever leaves your Mac.
          </p>
          <p>
            2. Built exclusively for Apple Silicon processors (M1, M2, M3, M4 or later). Requires macOS 13.0 (Ventura), macOS 14.0 (Sonoma), or macOS 15.0 (Sequoia). Not compatible with Intel Macs.
          </p>
          <p>
            3. ClipDay is completely free forever. All features—including image holding, link stashing, and hotkey summoning—are included with zero subscriptions.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-neutral-200/80">
          <div>
            <h4 className="font-semibold text-[#1d1d1f] uppercase tracking-wider text-[11px] mb-3">
              Application
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-black transition-colors cursor-pointer">
                  All Features
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-black transition-colors cursor-pointer">
                  Free Download
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] uppercase tracking-wider text-[11px] mb-3">
              Core Capabilities
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-1.5">
                <ImageIcon className="w-3 h-3 text-[#1d1d1f]" />
                <span>Images & Screenshots Stash</span>
              </li>
              <li><span>24-Hour Ephemeral Vault</span></li>
              <li><span>macOS Menu Bar Native</span></li>
              <li><span>Instant Hotkey Summon</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] uppercase tracking-wider text-[11px] mb-3">
              Compatibility
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-1.5">
                <Cpu className="w-3 h-3 text-[#0071e3]" />
                <span className="font-medium text-[#1d1d1f]">Apple Silicon (M1–M4) Only</span>
              </li>
              <li className="text-neutral-400"><span>(Intel not supported)</span></li>
              <li><span>macOS Ventura, Sonoma, Sequoia</span></li>
              <li><span>Native ARM64 Swift 6 Binary</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] uppercase tracking-wider text-[11px] mb-3">
              Privacy & Storage
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-1.5">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>100% On-Device Only</span>
              </li>
              <li><span>Zero Cloud Telemetry</span></li>
              <li><span>Zero External Servers</span></li>
              <li><span>Local Application Support</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6e6e73]">
          <div className="flex items-center space-x-2">
            <img
              src={logoImg}
              alt="ClipDay"
              className="w-4 h-4 rounded object-cover shadow-xs"
              referrerPolicy="no-referrer"
            />
            <span className="font-semibold text-[#1d1d1f]">ClipDay</span>
            <span>•</span>
            <span>Crafted with Apple-inspired monochrome precision</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Shield className="w-3 h-3 text-[#6e6e73]" />
              <span>100% Private & Local</span>
            </span>
            <span>•</span>
            <span>© {new Date().getFullYear()} ClipDay. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
