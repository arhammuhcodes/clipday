export type ActivePage = 'home' | 'features' | 'pricing';

export interface LinkDestinationConfig {
  freeDownloadUrl: string;
  supportDevUrl?: string;
  customVideoUrl?: string;
  customVideoName?: string;
}

export interface StashedLink {
  id: string;
  title: string;
  url: string;
  hoursRemaining: number;
  tags?: string[];
  addedAt: string;
}

export interface ShortcutPreferences {
  primaryShortcut: string;
  retentionHours: number;
  autoCaptureClipboard: boolean;
  launchAtLogin: boolean;
  soundEffect: boolean;
}
