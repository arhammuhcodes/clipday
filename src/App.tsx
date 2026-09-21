/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActivePage, LinkDestinationConfig } from './types';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { FeaturesPage } from './components/FeaturesPage';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';

const DEFAULT_CONFIG: LinkDestinationConfig = {
  freeDownloadUrl: 'https://www.patreon.com/MuhammadArham/posts/clipday-170168445',
  supportDevUrl: 'https://www.patreon.com/MuhammadArham/posts/support-clipday-170168382',
  customVideoUrl: undefined,
  customVideoName: undefined,
};

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [config, setConfig] = useState<LinkDestinationConfig>(() => {
    try {
      const saved = localStorage.getItem('clipday_macos_links');
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return DEFAULT_CONFIG;
  });

  const handleSetCustomVideo = (url: string, name?: string) => {
    const updated = {
      ...config,
      customVideoUrl: url,
      customVideoName: name,
    };
    setConfig(updated);
    try {
      localStorage.setItem('clipday_macos_links', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Direct download navigation - user will configure exact destination
  const handleFreeDownload = () => {
    const url = config.freeDownloadUrl || 'https://www.patreon.com/MuhammadArham/posts/clipday-170168445';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Support development on Patreon
  const handleSupportDev = () => {
    const url = config.supportDevUrl || 'https://www.patreon.com/MuhammadArham/posts/support-clipday-170168382';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Apple-style sticky frosted navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        config={config}
        onDownloadClick={handleFreeDownload}
        onSupportClick={handleSupportDev}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            config={config}
            onSetCustomVideo={handleSetCustomVideo}
            onNavigateToFeatures={() => handleNavigate('features')}
            onFreeDownload={handleFreeDownload}
          />
        )}

        {activePage === 'features' && (
          <FeaturesPage
            onDownloadClick={handleFreeDownload}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {activePage === 'pricing' && (
          <div className="py-12">
            <PricingSection
              config={config}
              onFreeDownload={handleFreeDownload}
            />
          </div>
        )}
      </main>

      {/* Apple-style Monochrome Footer */}
      <Footer
        onNavigate={handleNavigate}
        config={config}
      />
    </div>
  );
}
