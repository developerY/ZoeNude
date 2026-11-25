import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface LocalVideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
  quote: string;
}

export const LocalVideoPlayer: React.FC<LocalVideoPlayerProps> = ({
  src,
  poster,
  title,
  quote,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.muted = isMuted;
      video.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = isMuted;
    video.play();
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-[#3A2A23] group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={title}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        tabIndex={-1}
        className="w-full h-full object-cover pointer-events-none select-none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Bottom Interactive Control Overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto bg-gradient-to-t from-black/85 via-black/50 to-transparent p-2.5 sm:p-3 rounded-xl backdrop-blur-xs z-20">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2B211E] flex items-center justify-center transition-transform hover:scale-105 shadow-sm cursor-pointer"
            aria-label={isPlaying ? 'Pause film' : 'Play film'}
            title={isPlaying ? 'Pause film' : 'Play film'}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute film' : 'Mute film'}
            title={isMuted ? 'Unmute film' : 'Mute film'}
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Restart film"
            title="Restart film"
          >
            <RotateCcw size={12} />
          </button>
        </div>

        <div className="flex items-center space-x-2 text-[10px] text-[#D1C7BD]">
          <span className="hidden sm:inline font-serif italic text-white text-[11px]">
            {quote}
          </span>
          <span className="hidden sm:inline">&middot;</span>
          <span className="text-[#d8a48f] font-mono uppercase tracking-wider">
            {isMuted ? 'Muted Preview' : 'Sound Active'}
          </span>
        </div>
      </div>
    </div>
  );
};
