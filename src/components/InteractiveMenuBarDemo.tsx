import React, { useState, useEffect } from 'react';
import { Clock, Plus, Trash2, ExternalLink, Command, Copy, Check, Sparkles } from 'lucide-react';
import { StashedLink } from '../types';

export const InteractiveMenuBarDemo: React.FC = () => {
  const [links, setLinks] = useState<StashedLink[]>([
    {
      id: '1',
      title: 'Figma: New Mac Menu Bar Design System 2026',
      url: 'https://figma.com/@design/macos-system',
      hoursRemaining: 23.8,
      addedAt: '12m ago',
    },
    {
      id: '2',
      title: 'Hacker News: Show HN – Minimalist Swift daemons',
      url: 'https://news.ycombinator.com/item?id=40219',
      hoursRemaining: 16.4,
      addedAt: '7h ago',
    },
    {
      id: '3',
      title: 'GitHub: apple/swift-syntax documentation',
      url: 'https://github.com/apple/swift-syntax',
      hoursRemaining: 3.1,
      addedAt: '20h ago',
    },
  ]);

  const [inputUrl, setInputUrl] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Tick the countdown timer subtly to illustrate live 24-hour decay
  useEffect(() => {
    const timer = setInterval(() => {
      setLinks((prevLinks) =>
        prevLinks.map((l) => ({
          ...l,
          hoursRemaining: Math.max(0, parseFloat((l.hoursRemaining - 0.01).toFixed(2))),
        }))
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    let cleanUrl = inputUrl.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    try {
      const parsed = new URL(cleanUrl);
      const newEntry: StashedLink = {
        id: Date.now().toString(),
        title: parsed.hostname.replace('www.', '') + ' ' + (parsed.pathname !== '/' ? parsed.pathname.slice(0, 18) + '...' : ''),
        url: cleanUrl,
        hoursRemaining: 24.0,
        addedAt: 'Just now',
      };
      setLinks([newEntry, ...links]);
      setInputUrl('');
    } catch {
      // Fallback title
      const newEntry: StashedLink = {
        id: Date.now().toString(),
        title: cleanUrl.slice(0, 30),
        url: cleanUrl,
        hoursRemaining: 24.0,
        addedAt: 'Just now',
      };
      setLinks([newEntry, ...links]);
      setInputUrl('');
    }
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  const copyLink = (l: StashedLink) => {
    navigator.clipboard.writeText(l.url);
    setCopiedId(l.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div id="interactive-demo-card" className="w-full max-w-2xl mx-auto my-12 text-left">
      <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-sm">
        
        {/* Title & Concept Explanation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-neutral-100 gap-2">
          <div>
            <h3 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center space-x-2">
              <span>Interactive Menu Bar Simulator</span>
              <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-mono">
                Live Preview
              </span>
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Experience the 24-hour ephemeral link shelf right in your browser.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-xs px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 font-medium text-neutral-700 transition-colors flex items-center space-x-1"
            >
              <span>{isMenuOpen ? 'Hide Menu Popover' : 'Click Menu Bar Icon'}</span>
            </button>
          </div>
        </div>

        {/* Simulated Menu Bar Strip */}
        <div className="mt-5 rounded-xl border border-neutral-200/80 bg-neutral-900 text-white overflow-hidden shadow-inner">
          <div className="h-9 px-3 flex items-center justify-between text-xs border-b border-neutral-800 bg-[#141416]">
            <div className="flex items-center space-x-3 text-neutral-400">
              <span className="text-white font-semibold"></span>
              <span className="text-neutral-200 hidden sm:inline">Safari</span>
              <span className="hidden md:inline">File</span>
              <span className="hidden md:inline">Edit</span>
            </div>

            {/* Menu Bar Status Area */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center space-x-1 px-2 py-1 rounded text-xs transition-colors ${
                  isMenuOpen ? 'bg-white text-black font-semibold' : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
                title="Click to toggle Shelf"
              >
                <span>⌥</span>
                <span className="text-[10px] font-mono px-1 rounded bg-black/10 text-inherit">
                  {links.length}
                </span>
              </button>
              <span className="text-neutral-500 text-[10px]">|</span>
              <span className="text-[11px] font-mono text-neutral-400">9:41 AM</span>
            </div>
          </div>

          {/* Interactive Popover */}
          {isMenuOpen ? (
            <div className="p-4 bg-[#1b1b1e] text-white">
              {/* Quick Add Form */}
              <form onSubmit={handleAddLink} className="flex items-center space-x-2 mb-4">
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Paste a link to stash for 24h (e.g., figma.com/spec)..."
                  className="flex-1 px-3 py-2 text-xs bg-[#242429] border border-neutral-700/80 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white transition-all font-mono"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-semibold bg-white text-black hover:bg-neutral-200 rounded-lg transition-colors shrink-0 flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Stash</span>
                </button>
              </form>

              {/* Stashed Links Count & Status */}
              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2 px-1">
                <span>Active Temporary Links ({links.length})</span>
                <span className="text-[10px] text-emerald-400 font-mono">Self-cleans at 0h</span>
              </div>

              {/* Items List */}
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {links.length === 0 ? (
                  <div className="text-center py-6 text-neutral-500 text-xs">
                    Shelf is empty. Your menu bar is clean and zero bookmark debt!
                  </div>
                ) : (
                  links.map((link) => (
                    <div
                      key={link.id}
                      className="p-2.5 rounded-lg bg-[#242429] hover:bg-[#2c2c33] border border-neutral-800 transition-colors flex items-center justify-between group"
                    >
                      <div className="min-w-0 flex-1 pr-3">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-white hover:underline truncate block"
                        >
                          {link.title}
                        </a>
                        <span className="text-[10px] text-neutral-400 font-mono truncate block mt-0.5">
                          {link.url}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        {/* Countdown Badge */}
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-[11px] font-mono text-emerald-400 font-medium">
                            <Clock className="w-3 h-3" />
                            <span>{link.hoursRemaining.toFixed(1)}h</span>
                          </div>
                          <span className="text-[9px] text-neutral-500">remaining</span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-1 pl-1">
                          <button
                            onClick={() => copyLink(link)}
                            className="p-1 text-neutral-400 hover:text-white rounded transition-colors"
                            title="Copy link"
                          >
                            {copiedId === link.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => removeLink(link.id)}
                            className="p-1 text-neutral-400 hover:text-rose-400 rounded transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Shortcut Banner */}
              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                <div className="flex items-center space-x-1.5">
                  <span className="font-mono bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-300">⌥ Space</span>
                  <span>Instant summon shortcut</span>
                </div>
                <button
                  onClick={() => setLinks([])}
                  className="text-neutral-400 hover:text-white text-[11px] underline"
                >
                  Clear all
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-neutral-400 text-xs">
              <p>Menu is hidden. Click the <span className="font-bold text-white">⌥</span> icon in the top right to open.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
