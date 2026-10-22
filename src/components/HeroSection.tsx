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

  const rainbowHues = [
    { name: 'Rose Petal', role: 'Vascular Flush & Capillary Radiance', hex: '#E27D86', family: 'Rose' },
    { name: 'Apricot Peach', role: 'Warm Dermal Vitality & Collagen Glow', hex: '#F08060', family: 'Peach' },
    { name: 'Sunlit Ochre', role: 'Golden Hour Melanin Reflection', hex: '#E9B858', family: 'Gold' },
    { name: 'Botanical Sage', role: 'Vascular Flush & Redness Balancer', hex: '#689775', family: 'Olive' },
    { name: 'Azure Mist', role: 'Atmospheric Undertone Clarifier', hex: '#5E8DB8', family: 'Azure' },
    { name: 'French Iris', role: 'Anti-Sallow Radiance & Night Reset', hex: '#8F79B2', family: 'Violet' },
    { name: 'Terracotta Earth', role: 'Zygomatic Bone Dimension', hex: '#C85A3E', family: 'Copper' },
    { name: 'Blackberry Plum', role: 'Deep Melanin Dimension & Richness', hex: '#4A2033', family: 'Plum' },
  ];
  const [activeHue, setActiveHue] = useState<typeof rainbowHues[0] | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF7F2] via-[#FAF1E8] to-[#F7ECE1] pt-6 pb-16 lg:py-20 border-b border-[#EADED5]">
      {/* Rainbow Skintone Ambient Multi-Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#E27D86]/10 via-[#F08060]/10 to-[#E9B858]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#689775]/10 via-[#E9B858]/10 to-[#8F79B2]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Manifesto Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7 pr-0 lg:pr-6">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 text-[11px] font-sans font-semibold tracking-[0.14em] uppercase rounded-full bg-[#f4ece7] text-[#85513f] border border-[#e8dfd5]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#85513f] mr-2"></span>
                ATELIER RELEASE 04 · BIOMIMETIC NUDES
              </span>
            </div>

            {/* Subhead */}
            <div className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#6E625D] uppercase">
              PHILOSOPHY NO. 01
            </div>

            {/* Display Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] tracking-[-0.02em] text-[#2B211E] font-normal">
              Beauty, Without the Evidence.
            </h1>

            {/* Body Description */}
            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#4E4542] max-w-xl font-light">
              Skin-first formulations engineered with bio-identical lipids that dissolve on
              contact. Undetectable coverage, breathable wear, and luminous finish that
              mimics living skin.
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

            {/* The Rainbow of Living Skin Spectrum & Brand Pillars */}
            <div className="pt-6 border-t border-[#E8DFD5] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#85513f] uppercase">
                    THE RAINBOW OF LIVING SKIN
                  </span>
                  <span className="text-[9px] bg-gradient-to-r from-[#E27D86] via-[#E9B858] via-[#689775] to-[#8F79B2] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-xs">
                    KoColor Chromatics
                  </span>
                </div>
                <span className="text-[10px] font-sans text-[#6E625D] font-medium">
                  {activeHue ? (
                    <span className="text-[#85513f] font-semibold animate-fadeIn">
                      {activeHue.name} · {activeHue.role}
                    </span>
                  ) : (
                    <span>Hover or tap to reveal undertone</span>
                  )}
                </span>
              </div>

              {/* Rainbow Swatch Dot Ribbon */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 p-2 bg-[#FAF6F0] rounded-xl border border-[#E8DFD5]">
                {rainbowHues.map((hue) => {
                  const isSelected = activeHue?.name === hue.name;
                  return (
                    <button
                      key={hue.name}
                      type="button"
                      onMouseEnter={() => setActiveHue(hue)}
                      onClick={() => setActiveHue(hue)}
                      className={`flex-1 h-6 sm:h-7 rounded-md transition-all duration-200 transform hover:scale-110 shadow-xs relative group focus:outline-none cursor-pointer ${
                        isSelected ? 'ring-2 ring-[#2B211E] scale-105 z-10' : 'hover:opacity-95'
                      }`}
                      style={{ backgroundColor: hue.hex }}
                      aria-label={`${hue.name} - ${hue.role}`}
                      title={`${hue.name} (${hue.family}) · ${hue.role}`}
                    >
                      <span className="sr-only">{hue.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Brand Pillars: KoColor, ZoeWear, ZoeWave */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-1">
                <div className="space-y-1.5 p-3 rounded-xl bg-white border border-[#E8DFD5] hover:border-[#E27D86] transition-colors shadow-2xs group">
                  <div className="flex items-center justify-between">
                    <span className="block font-serif text-xs sm:text-sm tracking-wider font-bold text-[#2B211E] uppercase">
                      KOCOLOR
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E27D86] group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#E27D86] via-[#E9B858] to-[#689775] rounded-full" />
                  <p className="text-[10px] leading-snug text-[#6E625D] italic">
                    &ldquo;Precision biomimetic pigment calibration for true vascular undertone harmony.&rdquo;
                  </p>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl bg-white border border-[#E8DFD5] hover:border-[#F08060] transition-colors shadow-2xs group">
                  <div className="flex items-center justify-between">
                    <span className="block font-serif text-xs sm:text-sm tracking-wider font-bold text-[#2B211E] uppercase">
                      ZOEWEAR
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#F08060] group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#F08060] via-[#E9B858] to-[#C85A3E] rounded-full" />
                  <p className="text-[10px] leading-snug text-[#6E625D] italic">
                    &ldquo;Undetectable second-skin wear that breathes seamlessly with your natural lipid barrier.&rdquo;
                  </p>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl bg-white border border-[#E8DFD5] hover:border-[#8F79B2] transition-colors shadow-2xs group">
                  <div className="flex items-center justify-between">
                    <span className="block font-serif text-xs sm:text-sm tracking-wider font-bold text-[#2B211E] uppercase">
                      ZOEWAVE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#8F79B2] group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#5E8DB8] via-[#8F79B2] to-[#E27D86] rounded-full" />
                  <p className="text-[10px] leading-snug text-[#6E625D] italic">
                    &ldquo;Multi-dimensional light refraction and cellular vitality moving with your skin.&rdquo;
                  </p>
                </div>
              </div>
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
                      src="/assets/aistudio/Gemini_Generated_Image_bj462jbj462jbj46_fa1cb5df.jpeg"
                      alt="ZoeNude Official Cover Art - Beauty, Without The Evidence"
                      className="w-full h-full object-cover object-center filter contrast-[1.02] transform hover:scale-[1.02] transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85"
                      alt="Radiant bare skin with ZoeNude Skin Veil"
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
