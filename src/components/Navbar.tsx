import React from 'react';
import { ActivePage, LinkDestinationConfig } from '../types';
import { Download, Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  config: LinkDestinationConfig;
  onDownloadClick: () => void;
  onSupportClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onDownloadClick,
  onSupportClick,
}) => {
  return (
    <header 
      id="app-navbar"
      className="sticky top-0 z-40 w-full apple-nav-blur transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="nav-brand-button"
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2.5 text-left group focus:outline-none cursor-pointer"
        >
          {/* Apple-style minimalist monochrome app icon with official logo */}
          <div className="w-7 h-7 rounded-lg overflow-hidden bg-black border border-black/10 shadow-xs transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
            <img 
              src={logoImg} 
              alt="ClipDay Logo" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-semibold text-[#1d1d1f] tracking-tight text-sm">ClipDay</span>
        </button>

        {/* Center Nav Links (Apple style clean tabs) */}
        <nav className="flex items-center space-x-1 bg-black/[0.04] p-1 rounded-full border border-black/[0.04]">
          <button
            id="nav-home-tab"
            onClick={() => onNavigate('home')}
            className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
              activePage === 'home'
                ? 'bg-white text-[#1d1d1f] shadow-xs font-semibold'
                : 'text-[#6e6e73] hover:text-[#1d1d1f]'
            }`}
          >
            Home
          </button>
          <button
            id="nav-features-tab"
            onClick={() => onNavigate('features')}
            className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
              activePage === 'features'
                ? 'bg-white text-[#1d1d1f] shadow-xs font-semibold'
                : 'text-[#6e6e73] hover:text-[#1d1d1f]'
            }`}
          >
            Features
          </button>
          <button
            id="nav-pricing-tab"
            onClick={() => onNavigate('pricing')}
            className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
              activePage === 'pricing'
                ? 'bg-white text-[#1d1d1f] shadow-xs font-semibold'
                : 'text-[#6e6e73] hover:text-[#1d1d1f]'
            }`}
          >
            Pricing
          </button>
        </nav>

        {/* Right CTA: Apple Blue Pill */}
        <div className="flex items-center space-x-2">
          <button
            id="nav-support-button"
            onClick={onSupportClick}
            className="bg-[#ff3b30] hover:bg-[#ff453a] text-white text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200 shadow-xs hover:shadow active:scale-95 flex items-center space-x-1.5 cursor-pointer"
          >
            <Heart className="w-3 h-3" />
            <span>Support</span>
          </button>
          <button
            id="nav-download-button"
            onClick={onDownloadClick}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200 shadow-xs hover:shadow active:scale-95 flex items-center space-x-1.5 cursor-pointer"
          >
            <Download className="w-3 h-3" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </header>
  );
};
