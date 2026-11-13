import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Layers, Play, Pause, Volume2, VolumeX, RotateCcw, Check } from 'lucide-react';
import { TechSubNav } from '../components/TechSubNav';
import bambooPackagingImg from '../assets/images/compostable_bamboo_packaging_1794515735918.jpg';

export const TechPackagingPage: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'vessels' | 'bamboo' | 'standards'>('bamboo');
  const videoIframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const postMessageToPlayer = (func: string, args: any[] = []) => {
    if (videoIframeRef.current && videoIframeRef.current.contentWindow) {
      videoIframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func, args }),
        '*'
      );
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      postMessageToPlayer('pauseVideo');
      setIsPlaying(false);
    } else {
      postMessageToPlayer('playVideo');
      setIsPlaying(true);
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
    postMessageToPlayer('seekTo', [0, true]);
    postMessageToPlayer('playVideo');
    setIsPlaying(true);
  };

  const layerDetails = {
    bamboo: {
      title: 'Compostable Bamboo Outer Packaging',
      subtitle: 'Botanical Structure Built to Return Cleanly',
      summary:
        'Selected structural inserts, molded protective cradles, and outer bamboo-fiber shells are engineered with unbleached natural fibers—avoiding synthetic foam, glossy laminations, and excess folding cartons.',
      points: [
        'Unbleached molded bamboo fiber cradles protect formulations during transit without plastic clamshells',
        'Components are described as compostable strictly where the actual packaging parts meet relevant compostability requirements',
        'Soy- and water-based inks prevent heavy metallic coatings from interfering with natural decomposition',
      ],
    },
    vessels: {
      title: 'Refillable Atelier Vessels & Tubs',
      subtitle: 'Designed for Permanence, Not Single Use',
      summary:
        'Primary cosmetic containers balance formulation stability with material longevity. Heavyweight refillable exteriors house replaceable inner cartridges so customers keep the vessel and replenish only the active product.',
      points: [
        'Precision-turned bamboo collars and durable inner seals extend vessel lifespan across multiple refill cycles',
        'Compact footprint reduces volume per shipped unit by eliminating ornamental double-walled containers',
        'Smooth mono-material inner trays simplify cleaning, sorting, or local recycling at end of life',
      ],
    },
    standards: {
      title: 'Verification & Material Honesty',
      subtitle: 'Precise Claims Over Marketing Excess',
      summary:
        'Authenticity defines both our formulas and our environmental documentation. We separate compostable bamboo components from reusable hardware so every disposal pathway is transparent.',
      points: [
        'We specify compostable bamboo packaging only where the component itself fulfills applicable compostability criteria',
        'No vague "eco-plastic" blends—every barrier material is disclosed honestly by function and end-of-life path',
        'Packaging evolves alongside bio-polymer breakthroughs as the Zoe Nude product line scales globally',
      ],
    },
  };

  const taglines = [
    {
      num: '01',
      line: 'Nude by Nature. Kind to Nature.',
      note: 'Selected Signature Positioning — ties authentic beauty directly to environmental responsibility.',
      featured: true,
    },
    {
      num: '02',
      line: 'Beauty in Its Natural Form. Packaging in Harmony with Nature.',
      note: 'Connects raw formulation purity with material restraint.',
    },
    {
      num: '03',
      line: 'Naturally Beautiful. Naturally Responsible.',
      note: 'Pairs effortless wear with conscientious material sourcing.',
    },
    {
      num: '04',
      line: 'Bare Beauty. A Lighter Footprint.',
      note: 'Strips away synthetic excess from skin and supply chain alike.',
    },
    {
      num: '05',
      line: 'Nothing to Hide. Nothing Unnecessary.',
      note: 'Applies our skin-first honesty directly to minimal container design.',
    },
    {
      num: '06',
      line: 'Beauty That Gives Back to Nature.',
      note: 'Focuses on circular materials engineered beyond bamboo.',
    },
    {
      num: '07',
      line: 'Naturally Nude. Thoughtfully Packaged.',
      note: 'Highlights intentional craftsmanship across every vessel and tub.',
    },
    {
      num: '08',
      line: 'Less Waste. More Beauty. Closer to Nature.',
      note: 'Balances reduction of packaging volume with elevated daily ritual.',
    },
    {
      num: '09',
      line: 'From Nature, With Nature, Back to Nature.',
      note: 'Traces the circular lifecycle of certified compostable bamboo fibers.',
    },
    {
      num: '10',
      line: 'Beauty Without the Excess.',
      note: 'Rejects oversized boxes, filler plastics, and decorative waste.',
    },
  ];

  const activeSpec = layerDetails[activeLayer];

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      <TechSubNav active="packaging" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F7F5EE] via-[#FAF7F1] to-[#F3F5EC] py-16 sm:py-20 border-b border-[#EADED5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <span className="font-serif text-lg tracking-wider text-[#2B211E] block">Zoe</span>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#55715E] uppercase block">
                  NUDE COSMETICS · PACKAGING INNOVATION
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal leading-[1.1] text-balance">
                Nude by Nature. Kind to Nature.
              </h1>

              <p className="text-xs font-sans font-semibold tracking-[0.18em] text-[#85513f] uppercase">
                Beauty With a Lighter Footprint
              </p>

              <p className="font-sans text-sm sm:text-base text-[#4E4542] leading-relaxed font-light max-w-xl">
                Our packaging direction connects the true meaning of <em>Nude</em>—natural, authentic, uncomplicated—with a clear commitment to more responsible materials. From refillable exterior vessels to compostable bamboo packaging components, nothing stands between formulation purity and environmental care.
              </p>

              <p className="text-xs font-sans text-[#5C4D47] bg-white/90 border border-[#E4DDD4] rounded-xl p-4 leading-relaxed">
                <strong>Material Precision Standard:</strong> We use the term <em>compostable bamboo packaging</em> strictly where the actual packaging components meet the relevant compostability requirements—keeping every sustainability claim verifiable as our materials scale.
              </p>

              <div className="pt-1 flex flex-wrap gap-3">
                <Link
                  to="/about/tech/packaging/engineering"
                  className="bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-5 py-3 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
                >
                  <span>Materials &amp; Manufacturing Monograph</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#E4DDD4] bg-white shadow-lg">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={bambooPackagingImg}
                    alt="Zoe Nude Cosmetics refillable bamboo containers and compostable bamboo fiber tubs"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex items-center justify-between text-xs text-[#5C4D47] bg-[#FAF6F0] border-t border-[#EADED5]">
                  <span className="font-medium text-[#2B211E]">Compostable Bamboo &amp; Refillable Vessels</span>
                  <span>Unbleached Botanical Fiber</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Packaging Architecture Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#55715E] uppercase block">
              Material Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
              Every Layer Accounted For
            </h2>
            <p className="text-sm text-[#4E4542] leading-relaxed font-light">
              Rather than hiding synthetic liners behind green branding, we architect each packaging layer by its exact mechanical job and verifiable end-of-life pathway.
            </p>

            {/* Layer Selector Tabs */}
            <div className="flex flex-col space-y-2 pt-3">
              {(
                [
                  { id: 'bamboo', label: '01. Compostable Bamboo Components' },
                  { id: 'vessels', label: '02. Refillable Atelier Vessels' },
                  { id: 'standards', label: '03. Compostability Verification' },
                ] as const
              ).map((tab) => {
                const isActive = activeLayer === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveLayer(tab.id)}
                    className={`text-left px-4 py-3 rounded-xl border text-xs font-sans font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#2B211E] text-[#FCF9F3] border-[#2B211E]'
                        : 'bg-white text-[#4E4542] border-[#E4DDD4] hover:border-[#85513f] hover:text-[#2B211E]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EADED5] p-8 space-y-6">
            <div className="space-y-2 border-b border-[#F0E8DF] pb-5">
              <div className="flex items-center space-x-2 text-xs font-sans text-[#55715E]">
                <Layers size={15} />
                <span>{activeSpec.subtitle}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E] font-normal">
                {activeSpec.title}
              </h3>
              <p className="text-sm text-[#4E4542] leading-relaxed font-light">
                {activeSpec.summary}
              </p>
            </div>

            <ul className="space-y-3.5">
              {activeSpec.points.map((point) => (
                <li key={point} className="flex items-start space-x-3 text-sm text-[#2B211E]">
                  <Check size={16} className="text-[#55715E] mt-0.5 shrink-0" />
                  <span className="leading-relaxed font-light">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Packaging Story Video Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-[#3A2A23]">
              <iframe
                ref={videoIframeRef}
                src={`https://www.youtube-nocookie.com/embed/63YzoeFWR-U?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=63YzoeFWR-U&playsinline=1&controls=0&disablekb=1&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&hl=en&origin=${
                  typeof window !== 'undefined' ? window.location.origin : ''
                }`}
                title="Zoe Nude Cosmetics Packaging Innovation Film"
                className="w-full h-full border-0 absolute inset-0 pointer-events-none select-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto bg-gradient-to-t from-black/85 via-black/50 to-transparent p-2.5 sm:p-3 rounded-xl backdrop-blur-xs z-20">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2B211E] flex items-center justify-center transition-transform hover:scale-105 shadow-sm cursor-pointer"
                    aria-label={isPlaying ? 'Pause film' : 'Play film'}
                  >
                    {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute film' : 'Mute film'}
                  >
                    {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                  </button>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Restart film"
                  >
                    <RotateCcw size={12} />
                  </button>
                </div>

                <div className="flex items-center space-x-2 text-[10px] text-[#D1C7BD]">
                  <span className="hidden sm:inline font-serif italic text-white text-[11px]">
                    &ldquo;From Nature, With Nature, Back to Nature.&rdquo;
                  </span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span className="text-[#d8a48f] font-mono uppercase tracking-wider">
                    {isMuted ? 'Muted Preview' : 'Sound Active'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-2 text-xs font-sans text-[#55715E] uppercase tracking-[0.16em]">
              <Leaf size={14} />
              <span>Scalable Beyond Bamboo</span>
            </div>
            <h2 className="font-serif text-3xl text-[#2B211E] font-normal text-balance">
              A Philosophy Built to Evolve With Material Science
            </h2>
            <p className="text-sm text-[#4E4542] leading-relaxed font-light">
              <em>Nude by Nature. Kind to Nature.</em> is short, memorable, and ties the core brand philosophy directly to environmental stewardship. Just as importantly, it scales naturally alongside emerging compostable bamboo compounds, mono-material glass, and refillable dispensing cartridges.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/about/tech/packaging/engineering"
                className="bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-5 py-3 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
              >
                <span>Engineering Monograph</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/shop"
                className="bg-white hover:bg-[#FAF1E8] text-[#2B211E] border border-[#DFD2C7] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-5 py-3 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
              >
                <span>Shop Formulations</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/about/tech/distribution"
                className="bg-white hover:bg-[#FAF1E8] text-[#2B211E] border border-[#DFD2C7] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-5 py-3 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
              >
                <span>Next: Distribution Network</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ten Packaging Ethos Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-sans text-[#85513f] uppercase tracking-[0.16em]">
            <ShieldCheck size={14} />
            <span>Zoe Nude Packaging Language</span>
          </div>
          <h2 className="font-serif text-3xl text-[#2B211E] font-normal text-balance">
            Ten Expressions of Beauty Without the Excess
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {taglines.map((item) => (
            <div
              key={item.num}
              className={`rounded-xl p-6 border transition-colors ${
                item.featured
                  ? 'bg-[#2B211E] text-[#FCF9F3] border-[#2B211E]'
                  : 'bg-white text-[#2B211E] border-[#E4DDD4]'
              }`}
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span
                  className={`font-mono tabular-nums text-xs ${
                    item.featured ? 'text-[#d8a48f]' : 'text-[#85513f]'
                  }`}
                >
                  {item.num}.
                </span>
                {item.featured && (
                  <span className="text-[11px] font-sans font-medium text-[#d8a48f]">
                    Flagship Brand Direction
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl font-normal leading-snug mb-2">
                {item.line}
              </h3>
              <p
                className={`text-xs font-sans leading-relaxed ${
                  item.featured ? 'text-[#D7CCC6]' : 'text-[#5C4D47]'
                }`}
              >
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
