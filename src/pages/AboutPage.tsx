import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Feather, 
  Award, 
  Compass, 
  Leaf, 
  Droplets, 
  CheckCircle2, 
  MapPin,
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Film,
  Sun
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [isSealVisible, setIsSealVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };
  const standards = [
    {
      icon: <Droplets className="w-5 h-5 text-[#85513f]" />,
      title: 'Biomimetic Lipid Fusion (BLF™)',
      description:
        'Our formulas do not sit on top of skin like a mask. Engineered with 94% bio-identical squalane, plant phytosterols, and ceramide NP, our tints melt at 37°C to fuse seamlessly with the natural stratum corneum.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#85513f]" />,
      title: 'Micro-Reflective Mineral Prisms',
      description:
        'We eliminated flat talc and chalky titanium oxides. Instead, microscopic prism minerals refract ambient light across three optical axes, diffusing redness and blurring pores without dulling your inner vitality.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#85513f]" />,
      title: 'Non-Comedogenic & Breathable',
      description:
        'Formulated without heavy silicones (D4/D5), mineral oils, synthetic fragrances, or pore-clogging film formers. Clinically tested on sensitive, reactive, and post-laser recovery complexions.',
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#85513f]" />,
      title: '100% Vegan & Leaping Bunny Certified',
      description:
        'Cruelty-free from inception. Packaged in custom-molded recyclable Italian frosted glass with brushed post-consumer aluminum caps and 100% FSC-certified soy-printed cartons.',
    },
  ];

  const ateliers = [
    {
      city: 'Los Angeles R&D Bio-Lab',
      neighborhood: 'Silicon Beach & Venice Bio-District, LA, CA',
      description: 'AI bio-cosmetology research, computational spectral mapping, and customized bio-lipid synthesis.',
      hours: 'Mon – Fri, 9am – 6pm PST',
    },
    {
      city: 'San Francisco Bioscience Lab',
      neighborhood: 'Mission Bay Biotech Corridor, SF, CA',
      description: 'Advanced biological modeling, cellular lipid mechanics, and machine-learning shade intelligence.',
      hours: 'Mon – Fri, 9am – 6pm PST',
    },
    {
      city: 'New York Atelier & Studio',
      neighborhood: 'SoHo, NY, NY',
      description: 'Physical client diagnostics, live spectrometer consultations, and personal formulation masterclasses.',
      hours: 'Tue – Sun, 11am – 8pm EST',
    },
  ];

  const brandPillars = [
    {
      quote: "AI-driven computational discovery and biomimetic pigment calibration engineered to mirror true vascular undertones.",
      publication: "AI Bio-Cosmetology",
      category: "Computational R&D",
    },
    {
      quote: "Applying emerging biological science to cosmetic innovation with bio-lipids that move in harmony with natural skin.",
      publication: "Advanced Bioscience",
      category: "Cellular Mechanics",
    },
    {
      quote: "Technology that enhances rather than masks individual beauty, celebrating who you are in your own skin.",
      publication: "Natural Beauty",
      category: "Human Ethos",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FDF7F2] via-[#FAF1E8] to-[#F7ECE1] min-h-screen pb-24 animate-fadeIn">
      {/* Editorial Hero Banner with Rainbow Skintone Ambient Multi-Glow */}
      <section className="bg-gradient-to-r from-[#FAF2EB] via-[#FDF6F0] to-[#F5ECE1] py-16 sm:py-24 border-b border-[#EADED5] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E27D86]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story Header */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
                <Compass size={14} />
                <span>AI-POWERED BIO-COSMETOLOGY LAB · LOS ANGELES & SAN FRANCISCO</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal leading-[1.15]">
                The Future of Beauty Is Being Formulated.
              </h1>

              <p className="font-serif text-lg sm:text-xl text-[#85513f] italic font-normal">
                Where Artificial Intelligence Meets the Science of Beauty.
              </p>

              {/* The Core Brand Philosophy Callout */}
              <div className="p-5 bg-white/95 rounded-2xl border border-[#85513f]/30 space-y-2 shadow-xs">
                <div className="flex items-center space-x-2">
                  <span className="font-serif font-bold text-sm tracking-wide text-[#2B211E]">THE UNDERLYING PHILOSOPHY</span>
                  <span className="text-[#85513f] font-light text-base">·</span>
                  <span className="font-sans font-semibold text-[10.5px] uppercase tracking-wider text-[#85513f]">CELEBRATE YOUR NATURAL BEAUTY</span>
                </div>
                <p className="font-serif italic text-sm sm:text-base text-[#2B211E] leading-relaxed">
                  &ldquo;Cosmetics should never make someone feel that their natural self isn&rsquo;t enough. They should make someone feel even more comfortable, confident, and free to be themselves.&rdquo;
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[10.5px] font-sans text-[#6E625D]">
                  <span className="bg-[#FAF2EB] px-2.5 py-0.5 rounded-full">Feel free. Feel beautiful. Feel like you.</span>
                  <span className="bg-[#FAF2EB] px-2.5 py-0.5 rounded-full">Enhance your beauty. Never hide it.</span>
                  <span className="bg-[#FAF2EB] px-2.5 py-0.5 rounded-full">Nothing to hide. Everything to love.</span>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#4E4542] leading-relaxed max-w-2xl font-light">
                Zoe – Nude Cosmetics is an AI-powered Bio-Cosmetology Lab redefining the science of beauty. At the intersection of artificial intelligence, advanced bioscience, and cosmetic innovation, we are pioneering a new approach to cosmetic research and formulation. Every formulation begins with AI-driven R&D, leveraging cutting-edge biological science and computational intelligence to explore new possibilities.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/shop"
                  className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold px-7 py-3.5 rounded tracking-wider uppercase transition-colors inline-flex items-center space-x-2"
                >
                  <span>Explore The Formulations</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/about/tech"
                  className="bg-white hover:bg-[#FAF0E6] text-[#2B211E] border border-[#2B211E] text-xs font-semibold px-7 py-3.5 rounded tracking-wider uppercase transition-colors inline-flex items-center space-x-2"
                >
                  <span>Tech &amp; Infrastructure</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/shade-finder"
                  className="bg-transparent hover:bg-[#FAF0E6] text-[#2B211E] border border-[#2B211E] text-xs font-semibold px-7 py-3.5 rounded tracking-wider uppercase transition-colors"
                >
                  Find Your Match
                </Link>
              </div>
            </div>

            {/* Right Column: Handcrafted Brand Crest Artwork */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                <div className="rounded-3xl overflow-hidden border-2 border-[#E8DFD5] shadow-2xl bg-[#F5EDE2] p-2 group hover:shadow-3xl transition-shadow duration-500">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/aistudio/image_1f17fb6c.png`}
                    alt="Zoe · Nude Cosmetics Embossed Insignia - Beautifully You. Naturally Free."
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                {/* Floating Seal with Close Button */}
                {isSealVisible ? (
                  <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#E8DFD5] rounded-2xl p-4 shadow-xl max-w-[220px] transition-all duration-300 animate-fadeIn">
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setIsSealVisible(false)}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FAF6F0] hover:bg-[#2B211E] text-[#6E625D] hover:text-white border border-[#E8DFD5] flex items-center justify-center transition-colors shadow-xs z-20 focus:outline-none cursor-pointer"
                      title="Close official seal note"
                      aria-label="Close official seal note"
                    >
                      <X size={13} />
                    </button>

                    <div className="flex items-center space-x-2 mb-1">
                      <Award size={16} className="text-[#85513f] flex-shrink-0" />
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#2B211E]">
                        OFFICIAL ATELIER SEAL
                      </span>
                    </div>
                    <p className="text-[11px] font-sans text-[#6E625D] leading-tight pr-1">
                      The Aphrodite Crest · Hand-embossed mark of authenticity & living skin beauty.
                    </p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsSealVisible(true)}
                    className="absolute -bottom-3 -left-3 bg-white/95 hover:bg-white backdrop-blur-md border border-[#E8DFD5] rounded-full px-3 py-1.5 text-[10px] font-sans font-semibold text-[#85513f] uppercase tracking-wider shadow-md flex items-center space-x-1.5 transition-all cursor-pointer hover:shadow-lg"
                    title="View atelier seal note"
                  >
                    <Award size={12} />
                    <span>View Atelier Seal</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Atelier Origin Film: The Birth of Living Beauty */}
      <section className="bg-gradient-to-b from-[#2B211E] via-[#352824] to-[#2B211E] text-white py-20 border-b border-[#4A3832] relative overflow-hidden">
        {/* Subtle iridescent chromatic glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#E27D86]/10 via-[#E9B858]/10 via-[#689775]/10 to-[#8F79B2]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.25em] text-[#d8a48f] uppercase bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
              <Film size={13} className="text-[#d8a48f]" />
              <span>ATELIER CINÉMA · ORIGIN FILM</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF6F0] font-normal leading-tight">
              The Birth of Living Beauty
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#D1C7BD] leading-relaxed max-w-2xl mx-auto">
              Like Aphrodite emerging from the oceanic foam, ZOE celebrates the vital living force born from water, sunlight, and raw skin. Unadorned, unmasked, and defining the category of Nude Cosmetics.
            </p>
          </div>

          {/* Cinema Frame */}
          <div className="max-w-5xl mx-auto relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#52413C] shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-black aspect-[16/9]">
              <video
                ref={videoRef}
                src="/assets/aistudio/Mermaid_emerging_from_seashell_20261022111320_e18bee16.mp4"
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
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 sm:p-4 rounded-2xl backdrop-blur-xs z-20">
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
                </div>

                <div className="flex items-center space-x-2 text-[11px] font-sans text-[#D1C7BD]">
                  <span className="hidden sm:inline font-serif italic text-white text-xs">“Beautifully You. Naturally Free.”</span>
                  <span className="hidden sm:inline">·</span>
                  <span className="text-[#d8a48f] text-[10px] font-mono uppercase tracking-wider">
                    {isMuted ? 'Muted Preview (Tap to Unmute)' : 'Sound Active'}
                  </span>
                </div>
              </div>
            </div>

            {/* Three Thematic Context Cards Underneath Film */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#362A26] border border-[#52413C] rounded-2xl p-5 text-left shadow-xs hover:border-[#85513f] transition-colors">
                <div className="flex items-center space-x-2 text-[#d8a48f] text-[10px] font-sans font-bold uppercase tracking-wider mb-1.5">
                  <Droplets size={13} />
                  <span>Marine Bio-Lipid Fusion</span>
                </div>
                <h4 className="font-serif text-base text-white">
                  Oceanic Self-Leveling
                </h4>
                <p className="text-xs text-[#C5B8AF] mt-1 leading-relaxed">
                  Inspired by the tidal waters that cradle marine botanicals, our bio-lipid matrix moves like liquid velvet, self-leveling across every curve without drying.
                </p>
              </div>

              <div className="bg-[#362A26] border border-[#52413C] rounded-2xl p-5 text-left shadow-xs hover:border-[#85513f] transition-colors">
                <div className="flex items-center space-x-2 text-[#d8a48f] text-[10px] font-sans font-bold uppercase tracking-wider mb-1.5">
                  <Sparkles size={13} />
                  <span>The Aphrodite Mythos</span>
                </div>
                <h4 className="font-serif text-base text-white">
                  Born of Vital Life (&zeta;&omega;&eta;)
                </h4>
                <p className="text-xs text-[#C5B8AF] mt-1 leading-relaxed">
                  Named for the ancient Greek concept of living vitality. Like Aphrodite emerging from the sea, your beauty does not require a mask—only illumination.
                </p>
              </div>

              <div className="bg-[#362A26] border border-[#52413C] rounded-2xl p-5 text-left shadow-xs hover:border-[#85513f] transition-colors">
                <div className="flex items-center space-x-2 text-[#d8a48f] text-[10px] font-sans font-bold uppercase tracking-wider mb-1.5">
                  <Sun size={13} />
                  <span>Zero Chalk Reflection</span>
                </div>
                <h4 className="font-serif text-base text-white">
                  Golden Shore Radiance
                </h4>
                <p className="text-xs text-[#C5B8AF] mt-1 leading-relaxed">
                  Translucent micro-prisms capture ambient sunset light rather than reflecting back flat, chalky white. Undetectable even under direct sun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Story & Founders */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: Atelier Heritage Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-lg aspect-[4/5] bg-[#F2EDE4]">
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/image_3527ead4.png`}
                  alt="Zoe · Nude Cosmetics Muse & Formulation Origins"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#2B211E] text-white text-[11px] font-sans tracking-[0.18em] px-4 py-2 rounded-full uppercase shadow-md">
                EST. 2027 · CALIFORNIA (LA & SF)
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block">
              THE AI BIO-COSMETOLOGY LAB
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] leading-snug">
              Where Artificial Intelligence Meets the Science of Beauty.
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#4E4542] leading-relaxed">
              <p className="font-medium text-[#2B211E]">
                Zoe – Nude Cosmetics is an AI-powered Bio-Cosmetology Lab redefining the science of beauty.
              </p>
              <p>
                At the intersection of artificial intelligence, advanced bioscience, and cosmetic innovation, we are pioneering a new approach to cosmetic research and formulation.
              </p>
              <p>
                Every formulation begins with AI-driven research and development, leveraging cutting-edge biological science, computational intelligence, and advanced formulation methodologies to explore new possibilities in cosmetic science.
              </p>
              <p>
                With research and development laboratories in <strong>Los Angeles and San Francisco</strong>, Zoe – Nude Cosmetics is pushing the boundaries of what cosmetic formulations can achieve.
              </p>
              <blockquote className="border-l-2 border-[#85513f] pl-4 italic text-[#2B211E] text-sm sm:text-base font-serif my-4">
                &ldquo;We believe the future of beauty isn&rsquo;t about concealing who you are. It&rsquo;s about understanding, enhancing, and celebrating your natural beauty through science and innovation.&rdquo;
              </blockquote>
              <p className="font-medium text-[#85513f]">
                This is more than the evolution of cosmetics. It&rsquo;s a paradigm shift in how beauty is researched, developed, and experienced.
              </p>

              {/* 3 Pillars */}
              <div className="pt-2 space-y-2">
                <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD5] flex items-start space-x-2.5">
                  <span className="font-mono text-xs font-bold text-[#85513f]">1.</span>
                  <div>
                    <strong className="text-xs text-[#2B211E] font-sans">AI Bio-Cosmetology:</strong>{' '}
                    <span className="text-xs text-[#6E625D]">AI-driven research, discovery, and formulation.</span>
                  </div>
                </div>
                <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD5] flex items-start space-x-2.5">
                  <span className="font-mono text-xs font-bold text-[#85513f]">2.</span>
                  <div>
                    <strong className="text-xs text-[#2B211E] font-sans">Advanced Bioscience:</strong>{' '}
                    <span className="text-xs text-[#6E625D]">Applying emerging biological science to cosmetic innovation.</span>
                  </div>
                </div>
                <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD5] flex items-start space-x-2.5">
                  <span className="font-mono text-xs font-bold text-[#85513f]">3.</span>
                  <div>
                    <strong className="text-xs text-[#2B211E] font-sans">Natural Beauty:</strong>{' '}
                    <span className="text-xs text-[#6E625D]">Technology that enhances rather than masks individual beauty.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Zoe Manifesto Bridge Section */}
      <section className="bg-[#2B211E] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#85513f]/20 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#362a26] border border-[#52413c] rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#4d3c36]">
              <div>
                <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.22em] text-[#d8a48f] uppercase mb-2">
                  <Feather size={14} />
                  <span>THE FOUNDING CODE</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF6F0] font-normal">
                  The Zoe Manifesto
                </h2>
                <p className="font-serif text-sm sm:text-base text-[#d8a48f] italic mt-1">
                  Five foundational truths governing every pigment, oil, and mineral we touch.
                </p>
              </div>

              <Link
                to="/manifesto"
                className="inline-flex items-center space-x-2 bg-[#d8a48f] hover:bg-[#c99580] text-[#2B211E] text-xs font-semibold px-6 py-3.5 rounded tracking-wider uppercase transition-colors flex-shrink-0 self-start md:self-auto"
              >
                <span>Read Full Manifesto</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 5 Pillars Quick Index */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-8">
              {[
                { num: '01', title: 'Skin First, Pigment Second', tag: 'Biomimicry' },
                { num: '02', title: 'The Optical Illusion', tag: 'Prism Light' },
                { num: '03', title: 'Clean Chemistry', tag: 'Zero Occlusion' },
                { num: '04', title: 'Universal Chromatics', tag: 'Living Tones' },
                { num: '05', title: 'Conscious Luxury', tag: 'Italian Glass' },
              ].map((p) => (
                <Link
                  key={p.num}
                  to="/manifesto"
                  className="bg-[#2B211E]/70 hover:bg-[#2B211E] border border-[#4d3c36] hover:border-[#d8a48f] p-4 rounded-xl transition-all group block text-left"
                >
                  <span className="text-[10px] font-sans font-bold text-[#d8a48f] block mb-1">
                    PILLAR {p.num}
                  </span>
                  <div className="text-xs font-serif text-white group-hover:text-[#d8a48f] transition-colors leading-snug">
                    {p.title}
                  </div>
                  <span className="text-[9px] text-[#A69A95] uppercase tracking-wider block mt-2">
                    {p.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Formulation Commitments */}
      <section id="commitments" className="bg-white py-20 border-y border-[#E8DFD5] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
              SCIENTIFIC RIGOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              The Four Commitments of Biomimetic Makeup
            </h2>
            <p className="text-xs sm:text-sm text-[#6E625D]">
              Every formulation must satisfy both clinical dermatological tolerance and runway visual fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6F0] rounded-2xl p-8 border border-[#E8DFD5] hover:border-[#85513f] transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#f4ece7] flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-[#2B211E]">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Flacon Architecture */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block">
              ENVIRONMENTAL CONSCIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              Designed to Leave No Residue On Earth
            </h2>
            <p className="text-xs sm:text-sm text-[#4E4542] leading-relaxed">
              We believe luxury without environmental responsibility is hollow. ZOE flacons and vessels are crafted from 
              substantial, endlessly recyclable frosted soda-lime glass sourced in Northern Italy. Each pump is 
              designed for clean separation, and our secondary packaging utilizes 100% FSC-certified post-consumer 
              board printed with waterless soy ink.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-xs text-[#2B211E]">
                <CheckCircle2 size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                <span>Zero plastic shimmer, zero microplastics, zero phthalates</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#2B211E]">
                <CheckCircle2 size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                <span>Fair-trade, child-labor-free certified mineral mica</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#2B211E]">
                <CheckCircle2 size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                <span>Carbon-neutral fulfillment with biodegradable cornstarch cushioning</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#E8DFD5] aspect-square bg-[#FAF6F0]">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
                  alt="Glass Cosmetic Formulation Flacon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E8DFD5] aspect-square bg-[#FAF6F0] mt-6">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
                  alt="Botanical Ingredients and Oils"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Ateliers */}
      <section id="ateliers" className="bg-[#FAF6F0] py-20 border-t border-[#E8DFD5] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
              R&D LABORATORIES & STUDIOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              Our Bio-Cosmetology Labs
            </h2>
            <p className="text-xs sm:text-sm text-[#6E625D]">
              With research and development laboratories in Los Angeles and San Francisco, pushing the boundaries of what cosmetic formulations can achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ateliers.map((atelier, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#E8DFD5] shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[#85513f]">
                    <MapPin size={16} />
                    <span className="text-xs font-sans font-bold uppercase tracking-wider">
                      {atelier.city}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#2B211E]">
                    {atelier.neighborhood}
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    {atelier.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F0EEE8] text-[11px] font-sans text-[#807571]">
                  {atelier.hours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Trilogy Pillars: KoColor, ZoeWear, ZoeWave */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
            THE ATELIER FOUNDATION
          </span>
          <h2 className="font-serif text-3xl text-[#2B211E] mt-2">
            KoColor · ZoeWear · ZoeWave
          </h2>
          <p className="text-xs sm:text-sm text-[#6E625D] mt-2 max-w-lg mx-auto">
            The three unified disciplines defining our biomimetic second-skin formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandPillars.map((p, idx) => {
            const gradients = [
              'from-[#E27D86] via-[#E9B858] to-[#689775]',
              'from-[#F08060] via-[#E9B858] to-[#C85A3E]',
              'from-[#5E8DB8] via-[#8F79B2] to-[#E27D86]',
            ];
            const dotColors = ['bg-[#E27D86]', 'bg-[#F08060]', 'bg-[#8F79B2]'];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#E8DFD5] shadow-xs text-center flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className={`w-2.5 h-2.5 rounded-full ${dotColors[idx]} group-hover:scale-125 transition-transform`} />
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#85513f]">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>
                  <p className="font-serif text-base sm:text-lg italic text-[#2B211E] leading-relaxed">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EEE8]">
                  <div className={`h-[2.5px] w-16 mx-auto mb-3 bg-gradient-to-r ${gradients[idx]} rounded-full`} />
                  <span className="text-base font-serif font-bold tracking-[0.16em] uppercase text-[#2B211E] block">
                    {p.publication}
                  </span>
                  <span className="text-[10px] font-sans tracking-wider uppercase text-[#85513f] mt-0.5 block font-semibold">
                    {p.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology & Infrastructure Navigation Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#FAF4EC] rounded-3xl p-8 sm:p-12 border border-[#E4DDD4]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block">
                ABOUT / TECH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
                Technology &amp; Infrastructure
              </h2>
              <p className="text-xs sm:text-sm text-[#4E4542] font-light leading-relaxed">
                Explore how Zoe Nude pairs responsible compostable bamboo packaging with a cloud-managed, app-first dispenser network.
              </p>
            </div>
            <Link
              to="/about/tech"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Visit Tech Hub</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/about/tech/packaging"
              className="bg-white rounded-2xl p-7 border border-[#E4DDD4] hover:border-[#85513f] transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-xs font-sans font-medium text-[#55715E]">01 · About / Tech / Packaging</span>
                <h3 className="font-serif text-2xl text-[#2B211E] group-hover:text-[#85513f] transition-colors">
                  Nude by Nature. Kind to Nature.
                </h3>
                <p className="text-xs sm:text-sm text-[#4E4542] font-light leading-relaxed">
                  Refillable vessels and compostable bamboo packaging components engineered for beauty with a lighter footprint.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#F0E8DF] flex items-center justify-between text-xs font-semibold text-[#2B211E]">
                <span>Explore Packaging Innovation</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/about/tech/distribution"
              className="bg-white rounded-2xl p-7 border border-[#E4DDD4] hover:border-[#85513f] transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-xs font-sans font-medium text-[#85513f]">02 · About / Tech / Distribution</span>
                <h3 className="font-serif text-2xl text-[#2B211E] group-hover:text-[#85513f] transition-colors">
                  Beauty. Without the Baggage.
                </h3>
                <p className="text-xs sm:text-sm text-[#4E4542] font-light leading-relaxed">
                  The app is the store. The machine is fulfillment. Distributed cloud intelligence with NFC energy harvesting &amp; solar-assisted dispensing.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#F0E8DF] flex items-center justify-between text-xs font-semibold text-[#2B211E]">
                <span>Explore Distribution Architecture</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B211E] rounded-3xl p-10 sm:p-14 text-center text-white space-y-6 shadow-2xl">
          <span className="text-[10px] font-sans font-semibold tracking-[0.22em] text-[#d8a48f] uppercase">
            COMMENCE YOUR REGIMEN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF6F0] max-w-xl mx-auto font-normal">
            Ready to experience beauty without the evidence?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#D8CFCA] max-w-md mx-auto leading-relaxed">
            Take our 90-second diagnostic or browse the full collection of biomimetic essentials.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/shade-finder"
              className="bg-[#d8a48f] hover:bg-[#c99580] text-[#2B211E] text-xs font-semibold px-8 py-3.5 rounded tracking-wider uppercase transition-colors"
            >
              Take Complexion Quiz
            </Link>
            <Link
              to="/shop"
              className="bg-transparent hover:bg-white/10 text-white border border-[#807571] text-xs font-semibold px-8 py-3.5 rounded tracking-wider uppercase transition-colors"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
