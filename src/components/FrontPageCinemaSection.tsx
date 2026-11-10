import React from 'react';

interface FrontPageCinemaSectionProps {
  videoId?: string;
}

export const FrontPageCinemaSection: React.FC<FrontPageCinemaSectionProps> = ({
  videoId = 'EzTReAG2Ctk',
}) => {
  // Pure video: autostart and cycle forever, no controls, no annotations, no suggestions
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&controls=0&disablekb=1&modestbranding=1&rel=0&iv_load_policy=3`;

  return (
    <section className="w-full bg-[#1A1210] py-4 sm:py-8 border-y border-[#3A2A25]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl">
          <iframe
            src={embedUrl}
            title="Video"
            className="w-full h-full border-0 absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
