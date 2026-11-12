import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/cosmeticsData';
import { Product, Shade } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Search, ArrowUpDown, Play, Pause, Volume2, VolumeX, RotateCcw, Leaf, Recycle, PackageCheck } from 'lucide-react';

interface ShopPageProps {
  onAddToCart: (product: Product, shade: Shade) => void;
  onQuickView: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const packagingIframeRef = useRef<HTMLIFrameElement>(null);
  const [isPackagingPlaying, setIsPackagingPlaying] = useState(true);
  const [isPackagingMuted, setIsPackagingMuted] = useState(true);

  const postMessageToPackagingPlayer = (func: string, args: any[] = []) => {
    if (packagingIframeRef.current && packagingIframeRef.current.contentWindow) {
      packagingIframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func, args }),
        '*'
      );
    }
  };

  const togglePackagingPlay = () => {
    if (isPackagingPlaying) {
      postMessageToPackagingPlayer('pauseVideo');
      setIsPackagingPlaying(false);
    } else {
      postMessageToPackagingPlayer('playVideo');
      setIsPackagingPlaying(true);
    }
  };

  const togglePackagingMute = () => {
    if (isPackagingMuted) {
      postMessageToPackagingPlayer('unMute');
      postMessageToPackagingPlayer('setVolume', [100]);
      setIsPackagingMuted(false);
    } else {
      postMessageToPackagingPlayer('mute');
      setIsPackagingMuted(true);
    }
  };

  const handlePackagingRestart = () => {
    postMessageToPackagingPlayer('seekTo', [0, true]);
    postMessageToPackagingPlayer('playVideo');
    setIsPackagingPlaying(true);
  };

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    { label: 'All Formulations (18)', value: 'ALL' },
    { label: 'Complexion Veil', value: 'COMPLEXION VEIL' },
    { label: 'Lip Care', value: 'LIP CARE · SATIN' },
    { label: 'Cheek & Lip', value: 'CHEEK & LIP' },
    { label: 'Setting Essence', value: 'SETTING ESSENCE' },
    { label: 'Eyes & Brows', value: 'EYES & BROWS' },
  ];

  const handleCategorySelect = (val: string) => {
    setSelectedCategory(val);
    if (val === 'ALL') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', val);
    }
    setSearchParams(searchParams);
  };

  // Filter & Sort logic
  let filtered = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.keyIngredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="bg-gradient-to-b from-[#FDF7F2] via-[#FAF1E8] to-[#F7ECE1] min-h-screen pb-24 animate-fadeIn">
      {/* Conscious Packaging Section: Reusable & Compostable Containers and Tubs */}
      <section className="bg-gradient-to-br from-[#F6F5EE] via-[#FAF7F1] to-[#F3F5EC] py-12 sm:py-16 border-b border-[#EADED5] relative overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#689775]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Packaging Video (Or0n2PGVh14) */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-[#3A2A23] group">
                <iframe
                  ref={packagingIframeRef}
                  src={`https://www.youtube-nocookie.com/embed/Or0n2PGVh14?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Or0n2PGVh14&playsinline=1&controls=0&disablekb=1&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&hl=en&origin=${
                    typeof window !== 'undefined' ? window.location.origin : ''
                  }`}
                  title="Zoe · Nude Cosmetics Reusable & Compostable Packaging"
                  className="w-full h-full border-0 absolute inset-0 pointer-events-none select-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Bottom Interactive Control Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto bg-gradient-to-t from-black/85 via-black/50 to-transparent p-2.5 sm:p-3 rounded-xl backdrop-blur-xs z-20">
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={togglePackagingPlay}
                      className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2B211E] flex items-center justify-center transition-transform hover:scale-105 shadow-sm cursor-pointer"
                      aria-label={isPackagingPlaying ? 'Pause film' : 'Play film'}
                    >
                      {isPackagingPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={togglePackagingMute}
                      className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label={isPackagingMuted ? 'Unmute film' : 'Mute film'}
                    >
                      {isPackagingMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                    </button>
                    <button
                      type="button"
                      onClick={handlePackagingRestart}
                      className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Restart film"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 text-[10px] text-[#D1C7BD]">
                    <span className="hidden sm:inline font-serif italic text-white text-[11px]">
                      &ldquo;Bare Beauty. A Lighter Footprint.&rdquo;
                    </span>
                    <span className="hidden sm:inline">&middot;</span>
                    <span className="text-[#d8a48f] font-mono uppercase tracking-wider">
                      {isPackagingMuted ? 'Muted Preview' : 'Sound Active'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Reusable & Compostable Packaging Copy */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2.5">
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#55715E] uppercase block">
                  NUDE BY NATURE · KIND TO NATURE
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal leading-tight">
                  Naturally Nude. Thoughtfully Packaged.
                </h1>
                <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed font-light">
                  Beauty in its natural form deserves packaging in harmony with nature. Every order ships in reusable containers and compostable tubs crafted so nothing unnecessary stands between your skin and the earth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="bg-white/90 rounded-xl p-4 border border-[#E8DFD5] space-y-1.5 shadow-2xs">
                  <div className="flex items-center space-x-2 text-[#55715E]">
                    <Recycle size={15} />
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#2B211E]">
                      Reusable Containers
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E625D] leading-relaxed font-light">
                    Refillable atelier jars and durable tubs designed to be kept, rinsed, and reused again.
                  </p>
                </div>

                <div className="bg-white/90 rounded-xl p-4 border border-[#E8DFD5] space-y-1.5 shadow-2xs">
                  <div className="flex items-center space-x-2 text-[#55715E]">
                    <Leaf size={15} />
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#2B211E]">
                      Compostable Tubs
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E625D] leading-relaxed font-light">
                    From nature, with nature, back to nature—plant-fiber shipping tubs break down cleanly.
                  </p>
                </div>

                <div className="bg-white/90 rounded-xl p-4 border border-[#E8DFD5] space-y-1.5 shadow-2xs">
                  <div className="flex items-center space-x-2 text-[#55715E]">
                    <PackageCheck size={15} />
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#2B211E]">
                      Zero Excess
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E625D] leading-relaxed font-light">
                    Nothing to hide, nothing unnecessary—less waste, more beauty, and a lighter footprint.
                  </p>
                </div>
              </div>

              <p className="font-serif italic text-sm text-[#85513f] pt-1">
                &ldquo;Less Waste. More Beauty. Closer to Nature.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Controls Bar: Categories, Search, Sort */}
        <div className="space-y-6 mb-10 pb-6 border-b border-[#E8DFD5]">
          {/* Category Navigation Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategorySelect(cat.value)}
                className={`px-4 py-2 text-xs font-sans font-medium tracking-wider rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat.value
                    ? 'bg-[#2B211E] text-white shadow-sm'
                    : 'bg-white text-[#4E4542] hover:text-[#2B211E] hover:bg-[#F6F3ED] border border-[#E8DFD5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#85513f]"
              />
              <input
                type="text"
                placeholder="Search formulations or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E8DFD5] rounded-full pl-9 pr-4 py-2 text-xs font-sans placeholder-[#807571] focus:outline-none focus:border-[#2B211E]"
              />
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs text-[#6E625D]">
                Showing <strong>{filtered.length}</strong> items
              </span>
              <div className="flex items-center space-x-1.5 bg-white border border-[#E8DFD5] rounded-lg px-3 py-1.5 text-xs">
                <ArrowUpDown size={13} className="text-[#6E625D]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent border-none text-xs text-[#2B211E] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E8DFD5] space-y-3">
            <p className="font-serif text-xl text-[#2B211E]">No formulations found</p>
            <p className="font-sans text-xs text-[#6E625D]">
              Try clearing your search filters to explore all essentials.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="bg-[#2B211E] text-white text-xs font-semibold px-5 py-2.5 rounded tracking-wider uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

        {/* Complimentary Shade Sample Banner */}
        <div className="mt-16 bg-[#FAF6F0] p-6 sm:p-8 rounded-2xl border border-[#E8DFD5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#85513f] block">
              100% COMPLEXION CONFIDENCE
            </span>
            <h3 className="font-serif text-xl text-[#2B211E]">
              Every order arrives with 3 complimentary adjacent shade cards.
            </h3>
            <p className="text-xs font-sans text-[#6E625D]">
              Test in true daylight before opening your full glass bottle. Free exchanges anytime.
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#2B211E] text-white text-xs font-semibold px-6 py-3 rounded tracking-wider uppercase hover:bg-[#433430] whitespace-nowrap"
          >
            Explore Complexion
          </button>
        </div>
      </div>
    </div>
  );
};
