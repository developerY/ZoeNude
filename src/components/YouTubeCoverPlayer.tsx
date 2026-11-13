import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface YouTubeCoverPlayerProps {
  videoId: string;
  title: string;
  quote: string;
}

export const YouTubeCoverPlayer: React.FC<YouTubeCoverPlayerProps> = ({
  videoId,
  title,
  quote,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeLoadedRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const revealTimeoutRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [posterUrl, setPosterUrl] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  useEffect(() => {
    setPosterUrl(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  }, [videoId]);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=1&loop=1&playlist=${videoId}&playsinline=1&controls=0&disablekb=1&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&hl=en&origin=${
    typeof window !== 'undefined' ? window.location.origin : ''
  }`;

  const postMessageToPlayer = (func: string, args: unknown[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func, args }),
        '*'
      );
    }
  };

  const clearRevealTimeout = () => {
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
      revealTimeoutRef.current = null;
    }
  };

  const scheduleRevealFallback = () => {
    clearRevealTimeout();
    revealTimeoutRef.current = window.setTimeout(() => {
      setIsVideoVisible(true);
    }, 550);
  };

  const handleIframeLoad = () => {
    iframeLoadedRef.current = true;
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'listening' }),
        '*'
      );
      postMessageToPlayer('unloadModule', ['captions']);
      postMessageToPlayer('setOption', ['captions', 'track', {}]);
      postMessageToPlayer('setOption', ['cc', 'track', {}]);

      if (pendingPlayRef.current) {
        pendingPlayRef.current = false;
        if (!isMuted) {
          postMessageToPlayer('unMute');
          postMessageToPlayer('setVolume', [100]);
        }
        postMessageToPlayer('playVideo');
        scheduleRevealFallback();
      }
    }
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!iframeRef.current || e.source !== iframeRef.current.contentWindow) {
        return;
      }
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data?.event === 'infoDelivery' && data.info) {
          if (typeof data.info.playerState === 'number') {
            if (data.info.playerState === 1) {
              clearRevealTimeout();
              setIsPlaying(true);
              setIsVideoVisible(true);
            } else if (data.info.playerState === 2) {
              clearRevealTimeout();
              setIsPlaying(false);
              setIsVideoVisible(false);
            }
          }
          if (typeof data.info.muted === 'boolean') {
            setIsMuted(data.info.muted);
          }
        }
      } catch {
        // Ignore non-JSON postMessage frames
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      clearRevealTimeout();
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      pendingPlayRef.current = false;
      clearRevealTimeout();
      postMessageToPlayer('pauseVideo');
      setIsPlaying(false);
      setIsVideoVisible(false);
    } else {
      setIsPlaying(true);
      if (iframeLoadedRef.current) {
        if (!isMuted) {
          postMessageToPlayer('unMute');
          postMessageToPlayer('setVolume', [100]);
        }
        postMessageToPlayer('playVideo');
        scheduleRevealFallback();
      } else {
        pendingPlayRef.current = true;
      }
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      postMessageToPlayer('unMute');
      postMessageToPlayer('setVolume', [100]);
      setIsMuted(false);
    } else {
      postMessageToPlayer('mute');
      setIsMuted(true);
    }
  };

  const handleRestart = () => {
    setIsPlaying(true);
    if (iframeLoadedRef.current) {
      postMessageToPlayer('seekTo', [0, true]);
      if (!isMuted) {
        postMessageToPlayer('unMute');
        postMessageToPlayer('setVolume', [100]);
      }
      postMessageToPlayer('playVideo');
      scheduleRevealFallback();
    } else {
      pendingPlayRef.current = true;
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-[#3A2A23] group">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={title}
        className="w-full h-full border-0 absolute inset-0 pointer-events-none select-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={handleIframeLoad}
      />

      {/* Clean poster overlay hides YouTube's centered Play / Skip overlay while stopped or paused */}
      <img
        src={posterUrl}
        alt={title}
        onError={() => {
          const fallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
          if (posterUrl !== fallback) {
            setPosterUrl(fallback);
          }
        }}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-10 transition-opacity duration-300 ${
          isVideoVisible ? 'opacity-0' : 'opacity-100'
        }`}
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
