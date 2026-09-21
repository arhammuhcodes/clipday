import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface CenterVideoPlayerProps {
  customVideoUrl?: string;
  onSetCustomVideo: (url: string, name?: string) => void;
}

export const CenterVideoPlayer: React.FC<CenterVideoPlayerProps> = ({
  customVideoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Robust autoplay handling
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay waiting:", error);
      }
    };

    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, [customVideoUrl]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div id="center-video-container" className="w-full max-w-4xl mx-auto">
      {/* Sleek Mac Display Enclosure */}
      <div
        id="mac-display-frame"
        className="relative bg-[#1c1c1e] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 shadow-2xl shadow-black/15 ring-1 ring-black/10 overflow-hidden"
      >
        {/* Screen Bezel */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/10 aspect-16/10 flex flex-col">

          {/* Demo Video - Always Shown */}
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              src={customVideoUrl || '/video.mp4'}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              className="w-full h-full object-contain"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Playback Controls Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-xs text-neutral-400 font-mono">ClipDay Demo Video</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
