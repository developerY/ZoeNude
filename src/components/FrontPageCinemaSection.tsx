import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface FrontPageCinemaSectionProps {
  videoId?: string;
  videoSrc?: string;
  badgeTitle?: string;
  quote?: string;
}

export const FrontPageCinemaSection: React.FC<FrontPageCinemaSectionProps> = ({
  videoId = 'EzTReAG2Ctk',
  videoSrc,
  quote = '“Beautifully You. Naturally Free.”',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isCcOn, setIsCcOn] = useState(false);
  const [posterUrl, setPosterUrl] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeLoadedRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const revealTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setPosterUrl(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  }, [videoId]);

  // YouTube embed URL with autoplay=0 and cc_load_policy=0 so videos start stopped until clicked
  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=1&loop=1&playlist=${videoId}&playsinline=1&controls=0&disablekb=1&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&hl=en&origin=${
        typeof window !== 'undefined' ? window.location.origin : ''
      }`
    : '';

  const postMessageToPlayer = (func: string, args: any[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func,
          args,
        }),
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
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'listening' }),
        '*'
      );
      // Suppress closed captions so they do not show under the controls
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

  // Sync state from YouTube messages scoped to this iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!iframeRef.current || e.source !== iframeRef.current.contentWindow) {
        return;
      }
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data && data.event === 'infoDelivery' && data.info) {
          if (typeof data.info.playerState === 'number') {
            // 1 = playing, 2 = paused, 0 = ended
            if (data.info.playerState === 1) {
              clearRevealTimeout();
              setIsPlaying(true);
              setIsVideoVisible(true);
            }
            if (data.info.playerState === 2) {
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
        // ignore non-json messages
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      clearRevealTimeout();
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const togglePlay = () => {
    if (videoSrc && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
      return;
    }

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
    if (videoSrc && videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      return;
    }

    if (isMuted) {
      postMessageToPlayer('unMute');
      postMessageToPlayer('setVolume', [100]);
      // Maintain caption preference
      if (!isCcOn) {
        postMessageToPlayer('unloadModule', ['captions']);
        postMessageToPlayer('setOption', ['captions', 'track', {}]);
      }
      setIsMuted(false);
    } else {
      postMessageToPlayer('mute');
      setIsMuted(true);
    }
  };

  const toggleCc = () => {
    if (isCcOn) {
      postMessageToPlayer('unloadModule', ['captions']);
      postMessageToPlayer('setOption', ['captions', 'track', {}]);
      setIsCcOn(false);
    } else {
      postMessageToPlayer('loadModule', ['captions']);
      postMessageToPlayer('setOption', ['captions', 'track', { languageCode: 'en' }]);
      setIsCcOn(true);
    }
  };

  const handleRestart = () => {
    if (videoSrc && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      return;
    }

    setIsPlaying(true);
    if (iframeLoadedRef.current) {
      postMessageToPlayer('seekTo', [0, true]);
      if (!isMuted) {
        postMessageToPlayer('unMute');
        postMessageToPlayer('setVolume', [100]);
      }
      postMessageToPlayer('playVideo');
      if (!isCcOn) {
        postMessageToPlayer('unloadModule', ['captions']);
        postMessageToPlayer('setOption', ['captions', 'track', {}]);
      }
      scheduleRevealFallback();
    } else {
      pendingPlayRef.current = true;
    }
  };

  return (
    <section className="w-full bg-[#1A1210] py-4 sm:py-8 border-y border-[#3A2A25]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#3A2A23] group">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
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
          ) : (
            <>
              <iframe
                ref={iframeRef}
                src={embedUrl}
                title="Zoe · Nude Cosmetics Cinema"
                className="w-full h-full border-0 absolute inset-0 pointer-events-none select-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleIframeLoad}
              />
              {videoId && (
                <img
                  src={posterUrl}
                  alt="Zoe · Nude Cosmetics Cinema"
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
              )}
            </>
          )}

          {/* Bottom Interactive Control Overlay matching About Page */}
          <div
            className={`absolute left-4 right-4 flex items-center justify-between pointer-events-auto bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 sm:p-4 rounded-2xl backdrop-blur-xs z-20 transition-all duration-300 ${
              isCcOn ? 'bottom-16 sm:bottom-20' : 'bottom-4'
            }`}
          >
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <button
                type="button"
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#2B211E] flex items-center justify-center transition-transform hover:scale-105 shadow-md focus:outline-none cursor-pointer"
                aria-label={isPlaying ? 'Pause film' : 'Play film'}
                title={isPlaying ? 'Pause film' : 'Play film'}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label={isMuted ? 'Unmute film' : 'Mute film'}
                title={isMuted ? 'Unmute film' : 'Mute film'}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Restart film"
                title="Restart film"
              >
                <RotateCcw size={14} />
              </button>

              {/* CC Toggle Button */}
              {videoId && (
                <button
                  type="button"
                  onClick={toggleCc}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all focus:outline-none cursor-pointer text-[10px] font-mono font-bold tracking-wider ${
                    isCcOn
                      ? 'bg-[#d8a48f] text-[#2B211E] shadow-sm font-black'
                      : 'bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/20'
                  }`}
                  aria-label={isCcOn ? 'Hide closed captions' : 'Show closed captions'}
                  title={isCcOn ? 'Hide closed captions' : 'Show closed captions'}
                >
                  CC
                </button>
              )}
            </div>

            <div className="flex items-center space-x-2 text-[11px] font-sans text-[#D1C7BD]">
              <span className="hidden sm:inline font-serif italic text-white text-xs">
                {quote}
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="text-[#d8a48f] text-[10px] font-mono uppercase tracking-wider">
                {isMuted ? 'Muted Preview (Tap to Unmute)' : 'Sound Active'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
