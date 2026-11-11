import React, { useState } from 'react';
import { ArrowRight, Maximize2, Sparkles, Check, X, Info } from 'lucide-react';
import { Product } from '../types';

interface HeroSectionProps {
  onExploreComplexion: () => void;
  onOpenQuiz: () => void;
  onQuickViewProduct: (product: Product) => void;
  featuredProduct: Product;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreComplexion,
  onOpenQuiz,
  onQuickViewProduct,
  featuredProduct,
}) => {
  const [heroView, setHeroView] = useState<'cover' | 'model'>('cover');
  const [isBadgeVisible, setIsBadgeVisible] = useState(true);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF7F2] via-[#FAF1E8] to-[#F7ECE1] pt-6 pb-16 lg:py-20 border-b border-[#EADED5]">
      {/* Rainbow Skintone Ambient Multi-Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#E27D86]/10 via-[#F08060]/10 to-[#E9B858]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#689775]/10 via-[#E9B858]/10 to-[#8F79B2]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Manifesto Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7 pr-0 lg:pr-6">
            {/* Brand & Category Hierarchy Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 text-[11px] font-sans font-semibold tracking-[0.14em] uppercase rounded-full bg-white/95 text-[#2B211E] border border-[#e8dfd5] shadow-2xs">
                <span className="font-serif font-bold tracking-wider text-[#2B211E] text-xs">Zoe</span>
                <span className="text-[#85513f] font-light">·</span>
                <span className="text-[#85513f] tracking-[0.18em] text-[10px]">NUDE COSMETICS</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-sans font-semibold tracking-[0.12em] uppercase rounded-full bg-[#f4ece7] text-[#85513f] border border-[#e8dfd5]/80">
                BEAUTIFULLY YOU · NATURALLY FREE
              </span>
            </div>

            {/* Subhead with Concept Breakdown */}
            <div className="flex items-center space-x-2 text-[11px] font-sans font-semibold tracking-[0.2em] text-[#6E625D] uppercase">
              <span>CELEBRATE YOUR NATURAL BEAUTY</span>
            </div>

            {/* Display Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#2B211E] font-normal">
              Feel Free and Comfortable in Your Own Skin.
            </h1>

            {/* Body Description */}
            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#4E4542] max-w-xl font-light">
              Cosmetics should never make someone feel that their natural self isn&rsquo;t enough. Zoe &middot; Nude Cosmetics are crafted to enhance rather than hide who you are&mdash;formulated with breathable botanical lipids and living undertones so you feel free, confident, and beautiful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreComplexion}
                className="bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-8 py-4 rounded-[4px] shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                EXPLORE COMPLEXION
              </button>

              <button
                onClick={onOpenQuiz}
                className="group inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#2B211E] hover:text-[#85513f] px-4 py-4 transition-colors"
              >
                <span>FIND YOUR MATCH</span>
                <ArrowRight
                  size={15}
                  className="transform transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Mode Affirmations Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-sans text-[#5C4D47]">
              <span className="inline-flex items-center bg-white/90 border border-[#E8DFD5] px-3 py-1 rounded-full shadow-2xs font-light">
                ✨ Nothing to hide. Everything to love.
              </span>
              <span className="inline-flex items-center bg-white/90 border border-[#E8DFD5] px-3 py-1 rounded-full shadow-2xs font-light">
                🌿 Beauty that feels like you.
              </span>
              <span className="inline-flex items-center bg-white/90 border border-[#E8DFD5] px-3 py-1 rounded-full shadow-2xs font-light">
                💫 Less hiding. More shining.
              </span>
            </div>
          </div>

          {/* Right Column: Hero Cover Art & Portrait + Floating Formulation Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(43,33,30,0.12)] border border-[#E8DFD5] bg-[#FAF6F0]">
                {/* Main Hero Visual: Official Cover Art or Living Skin */}
                <div className="aspect-[16/11] sm:aspect-[4/3.8] lg:aspect-[4/4.2] w-full overflow-hidden bg-[#e8dfd5] relative">
                  {heroView === 'cover' ? (
                    <img
                      src={`${import.meta.env.BASE_URL}assets/aistudio/image_3527ead4.png`}
                      alt="ZOE · Nude Cosmetics Official Cover Art - Beauty, Without The Evidence"
                      className="w-full h-full object-cover object-center filter contrast-[1.02] transform hover:scale-[1.02] transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85"
                      alt="Radiant bare skin with ZOE Skin Veil"
                      className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02] transform hover:scale-[1.02] transition-transform duration-700"
                    />
                  )}
                </div>

                {/* View Switcher Controls on Top Right */}
                <div className="absolute top-4 right-4 bg-[#FCF9F3]/90 backdrop-blur-md p-1 rounded-full border border-[#E8DFD5] flex items-center space-x-1 shadow-sm">
                  <button
                    onClick={() => setHeroView('cover')}
                    className={`px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase transition-all ${
                      heroView === 'cover'
                        ? 'bg-[#2B211E] text-white shadow-xs'
                        : 'text-[#6E625D] hover:text-[#2B211E]'
                    }`}
                  >
                    Cover Art
                  </button>
                  <button
                    onClick={() => setHeroView('model')}
                    className={`px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase transition-all ${
                      heroView === 'model'
                        ? 'bg-[#2B211E] text-white shadow-xs'
                        : 'text-[#6E625D] hover:text-[#2B211E]'
                    }`}
                  >
                    Living Skin
                  </button>
                </div>

                {/* Subtitle bottom banner inside photo */}
                <div className="absolute bottom-4 right-6 text-right pointer-events-none hidden sm:block">
                  <span className="text-[#2B211E]/80 bg-[#FCF9F3]/80 backdrop-blur-xs px-2.5 py-0.5 rounded font-serif text-[11px] italic tracking-widest border border-[#E8DFD5]">
                    {heroView === 'cover'
                      ? 'OFFICIAL ATELIER COVER ART'
                      : 'WARM BEIGE · Luminous Tint'}
                  </span>
                </div>
              </div>

              {/* Floating Formulation Badge Card with Close / Dismiss capability */}
              {isBadgeVisible ? (
                <div
                  onClick={() => onQuickViewProduct(featuredProduct)}
                  className="cursor-pointer group absolute -bottom-6 left-2 sm:-left-6 bg-[#FFFFFF] rounded-xl p-3 sm:p-4 shadow-[0_12px_36px_-4px_rgba(43,33,30,0.12),0_4px_12px_-2px_rgba(43,33,30,0.06)] border border-[#E8DFD5] max-w-[280px] sm:max-w-[310px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn"
                >
                  {/* Close / Dismiss Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsBadgeVisible(false);
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FAF6F0] hover:bg-[#2B211E] text-[#6E625D] hover:text-white border border-[#E8DFD5] flex items-center justify-center transition-colors shadow-xs z-20 focus:outline-none"
                    title="Close formulation note"
                    aria-label="Close formulation note"
                  >
                    <X size={13} />
                  </button>

                  <div className="flex items-center space-x-3.5">
                    {/* Small Product Dropper Bottle Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-[#FAF6F0] flex-shrink-0 border border-[#E8DFD5]">
                      <img
                        src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80"
                        alt="Skin Veil Formulation"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="block text-[9px] font-sans font-semibold tracking-[0.14em] uppercase text-[#85513f]">
                        FORMULATION
                      </span>
                      <h2 className="text-xs sm:text-[13px] font-serif font-bold text-[#2B211E] truncate leading-tight mt-0.5">
                        94% Bio-Lipid Serum Base
                      </h2>
                      <p className="text-[10px] text-[#6E625D] mt-0.5 flex items-center space-x-1 truncate">
                        <span className="w-2 h-2 rounded-full bg-[#D2A782] inline-block"></span>
                        <span>WARM BEIGE · 05 Luminous Tint</span>
                      </p>
                    </div>

                    {/* Expand / Quick View Icon Button */}
                    <div className="w-8 h-8 rounded-full bg-[#F6F3ED] group-hover:bg-[#2B211E] group-hover:text-white text-[#2B211E] flex items-center justify-center transition-colors flex-shrink-0">
                      <Maximize2 size={13} />
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#F0EEE8] flex items-center justify-between text-[9px] font-sans text-[#6E625D]">
                    <span className="flex items-center text-[#85513f]">
                      <Check size={10} className="mr-1" />
                      Undetectable micro-veil
                    </span>
                    <span className="underline group-hover:text-[#2B211E]">Click to Inspect</span>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsBadgeVisible(true)}
                  className="absolute -bottom-4 left-2 sm:-left-4 bg-[#FFFFFF]/95 hover:bg-[#2B211E] text-[#6E625D] hover:text-white border border-[#E8DFD5] px-3 py-1.5 rounded-full text-[10px] font-sans font-medium tracking-wider uppercase transition-all shadow-sm flex items-center space-x-1.5 backdrop-blur-sm z-10"
                  title="Show formulation card"
                  aria-label="Show formulation card"
                >
                  <Info size={11} className="text-[#85513f]" />
                  <span>Show Formulation Note</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
