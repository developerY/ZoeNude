import React, { useState } from 'react';
import { ALL_SHADES, PRODUCTS } from '../data/cosmeticsData';
import { Product, Shade } from '../types';
import { Sparkles, ArrowRight, ShoppingBag, Droplets, Palette, Sun, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface RainbowSpectrumSectionProps {
  onAddToCart: (product: Product, shade: Shade) => void;
  onQuickView: (product: Product) => void;
}

interface BotanicalHue {
  id: string;
  name: string;
  frenchName: string;
  category: string;
  hex: string;
  accentGradient: string;
  description: string;
  biologicalRole: string;
  featuredProductId: string;
  badge: string;
}

export const RainbowSpectrumSection: React.FC<RainbowSpectrumSectionProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'botanical' | 'shades'>('botanical');

  const botanicalRainbow: BotanicalHue[] = [
    {
      id: 'hue-rose',
      name: 'Peony Rose Petal',
      frenchName: 'Pétale de Pivoine',
      category: 'Vascular Flush',
      hex: '#E27D86',
      accentGradient: 'from-[#E27D86] to-[#F2A3AB]',
      description: 'Replicates natural capillary micro-circulation at the highest cheek curve.',
      biologicalRole: 'Vascular flush & capillary vitality without chalky pink mask',
      featuredProductId: 'botanical-cheek-flush',
      badge: 'Bestseller Flush',
    },
    {
      id: 'hue-coral',
      name: 'Sunkissed Coral Apricot',
      frenchName: 'Abricot Ensoleillé',
      category: 'Warm Vitality',
      hex: '#F08060',
      accentGradient: 'from-[#F08060] to-[#F7B09A]',
      description: 'Infuses warm peach-apricot lipids into parched lip and cheek contours.',
      biologicalRole: 'Cellular lipid warmth & collagen elasticity booster',
      featuredProductId: 'satin-lip-conditioning-oil',
      badge: 'Living Lip Satin',
    },
    {
      id: 'hue-gold',
      name: 'Solar Marigold Amber',
      frenchName: 'Ambre Doré Solaire',
      category: 'Solar Melanin',
      hex: '#E9B858',
      accentGradient: 'from-[#E9B858] to-[#F5D58E]',
      description: 'Prismatic mineral gold reflecting warm 5000K afternoon sunlight.',
      biologicalRole: 'Golden hour luminescence and photo-reflective clarity',
      featuredProductId: 'radiant-glaze-dew-multi-stick',
      badge: 'High-Point Dew',
    },
    {
      id: 'hue-sage',
      name: 'Sea Fennel Botanical Emerald',
      frenchName: 'Émeraude Criste Marine',
      category: 'Redness Neutralizer',
      hex: '#689775',
      accentGradient: 'from-[#689775] to-[#9BC4A6]',
      description: 'Brittany coast micro-algae that cancels facial erythema and rosacea flare.',
      biologicalRole: 'Optic color-wheel redness balancing & anti-inflammatory shield',
      featuredProductId: 'bio-lipid-restorative-primer',
      badge: 'Barrier Prep',
    },
    {
      id: 'hue-azure',
      name: 'Cerulean Prismatic Azure',
      frenchName: 'Bleuet Céruléen',
      category: 'Atmospheric Undertone',
      hex: '#5E8DB8',
      accentGradient: 'from-[#5E8DB8] to-[#99BFE0]',
      description: 'Cool blue micro-prisms neutralizing ashy oxidation and yellow dullness.',
      biologicalRole: 'Atmospheric light refractor & blue-light oxidation defender',
      featuredProductId: 'multi-use-sculpt-eye-balm',
      badge: 'Multi-Prism',
    },
    {
      id: 'hue-iris',
      name: 'French Iris Lavender',
      frenchName: 'Iris Pourpre Nocturne',
      category: 'Radiance Reset',
      hex: '#8F79B2',
      accentGradient: 'from-[#8F79B2] to-[#BFB2DA]',
      description: 'Nocturnal botanical orchid pigments eliminating fatigue and sallowness.',
      biologicalRole: 'Cellular vitality reset and evening tone brightening',
      featuredProductId: 'alabaster-silk-finishing-powder',
      badge: 'Silk Powder',
    },
    {
      id: 'hue-terracotta',
      name: 'Earthen Terracotta Clay',
      frenchName: 'Terre Cuite d’Argile',
      category: 'Warm Sculpt',
      hex: '#C85A3E',
      accentGradient: 'from-[#C85A3E] to-[#E38A73]',
      description: 'Rich Mediterranean earthenware that sculpts cheekbone anatomy naturally.',
      biologicalRole: 'Melanin ground definition and sun-warmed cheek contour',
      featuredProductId: 'radiant-glaze-dew-multi-stick',
      badge: 'Sculpt & Bronze',
    },
    {
      id: 'hue-plum',
      name: 'Mulberry Blackberry Noir',
      frenchName: 'Mûre Sauvage Noire',
      category: 'Deep Dimension',
      hex: '#4A2033',
      accentGradient: 'from-[#4A2033] to-[#804060]',
      description: 'Concentrated berry anthocyanins delivering decadent, sheer lip depth.',
      biologicalRole: 'Deep melanin harmonization and sheer vamp luxury',
      featuredProductId: 'satin-lip-conditioning-oil',
      badge: 'Statement Lip',
    },
  ];

  const [selectedHue, setSelectedHue] = useState<BotanicalHue>(botanicalRainbow[0]);
  const [selectedShadeIndex, setSelectedShadeIndex] = useState<number>(4); // default 04 Silk Neutral

  const activeProduct = PRODUCTS.find((p) => p.id === selectedHue.featuredProductId) || PRODUCTS[0];
  const activeShade = ALL_SHADES[selectedShadeIndex] || ALL_SHADES[4];

  return (
    <section className="bg-gradient-to-b from-[#FCF9F3] via-[#FAF6F0] to-[#FCF9F3] py-20 border-b border-[#E8DFD5] relative overflow-hidden">
      {/* Subtle chromatic background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#E27D86]/10 via-[#E9B858]/10 via-[#689775]/10 to-[#8F79B2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DFD5] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E27D86] via-[#E9B858] to-[#689775] animate-pulse" />
            <span className="text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-[#85513f]">
              KOCOLOR · ZOEWEAR · ZOEWAVE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#2B211E] font-normal leading-tight">
            The Rainbow of Living Skin & Botanicals
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#5C504A] leading-relaxed max-w-2xl mx-auto">
            Living skin is never a monochrome beige. It is a biological prism pulsing with vascular rose, solar amber, olive balancing greens, and rich earthen depth. Explore the full chromatic spectrum engineered by KoColor.
          </p>

          {/* Tab Switcher: Botanical Rainbow vs 24 Nude Depths */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-white p-1 rounded-full border border-[#E8DFD5] shadow-xs inline-flex">
              <button
                type="button"
                onClick={() => setActiveTab('botanical')}
                className={`px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                  activeTab === 'botanical'
                    ? 'bg-[#2B211E] text-white shadow-xs'
                    : 'text-[#6E625D] hover:text-[#2B211E]'
                }`}
              >
                Chromatic Botanical Rainbow
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('shades')}
                className={`px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                  activeTab === 'shades'
                    ? 'bg-[#2B211E] text-white shadow-xs'
                    : 'text-[#6E625D] hover:text-[#2B211E]'
                }`}
              >
                24 Biomimetic Skin Depths
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: CHROMATIC BOTANICAL RAINBOW */}
        {activeTab === 'botanical' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Color Swatch Selector Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {botanicalRainbow.map((hue) => {
                const isSelected = selectedHue.id === hue.id;
                return (
                  <button
                    key={hue.id}
                    type="button"
                    onClick={() => setSelectedHue(hue)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#2B211E] shadow-md ring-2 ring-[#2B211E]/20 scale-102'
                        : 'bg-white/80 border-[#E8DFD5] hover:border-[#85513f] hover:bg-white hover:shadow-xs'
                    }`}
                  >
                    <div>
                      {/* Swatch Pill with Glow */}
                      <div className="relative mb-2.5">
                        <div
                          className="w-full h-10 rounded-xl shadow-xs transition-transform group-hover:scale-102"
                          style={{ backgroundColor: hue.hex }}
                        />
                        {isSelected && (
                          <div className="absolute inset-0 rounded-xl ring-2 ring-white/60 pointer-events-none" />
                        )}
                      </div>
                      <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#85513f] block">
                        {hue.category}
                      </span>
                      <h4 className="font-serif text-xs font-medium text-[#2B211E] leading-snug mt-0.5 line-clamp-1">
                        {hue.name}
                      </h4>
                    </div>

                    <div className="mt-2 pt-2 border-t border-[#F0EEE8] flex items-center justify-between text-[9px] font-mono text-[#807571]">
                      <span>{hue.hex}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#85513f]' : 'bg-transparent'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Hue Spotlight Card */}
            <div className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Swatch Large Visual & Botanical Story */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-4 h-4 rounded-full shadow-xs border border-black/10"
                      style={{ backgroundColor: selectedHue.hex }}
                    />
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#85513f]">
                      {selectedHue.frenchName} · {selectedHue.category}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FAF0E6] text-[#85513f] font-semibold">
                      {selectedHue.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
                    {selectedHue.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed">
                    {selectedHue.description}
                  </p>

                  <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD5] space-y-2">
                    <div className="flex items-center space-x-2 text-[10px] font-sans font-bold uppercase tracking-wider text-[#85513f]">
                      <Sparkles size={13} />
                      <span>Biological Second-Skin Function:</span>
                    </div>
                    <p className="font-sans text-xs text-[#2B211E] leading-relaxed">
                      {selectedHue.biologicalRole}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs font-sans text-[#6E625D] pt-2">
                    <span className="flex items-center space-x-1.5">
                      <Droplets size={13} className="text-[#85513f]" />
                      <span>Bio-Lipid Soluble (Zero Flaking)</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Sun size={13} className="text-[#85513f]" />
                      <span>Natural Daylight Calibrated</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <ShieldCheck size={13} className="text-[#85513f]" />
                      <span>Non-Comedogenic Grade 0</span>
                    </span>
                  </div>
                </div>

                {/* Right: Formulation Showcase Card */}
                <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl p-6 border border-[#E8DFD5] flex flex-col justify-between space-y-4">
                  <div className="flex space-x-4">
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.title}
                      className="w-20 h-20 rounded-xl object-cover bg-white p-1 border border-[#E8DFD5] flex-shrink-0"
                    />
                    <div>
                      <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#85513f] block">
                        FORMULATION SHOWCASE
                      </span>
                      <h4 className="font-serif text-lg text-[#2B211E] font-medium leading-snug">
                        {activeProduct.title}
                      </h4>
                      <p className="text-[11px] font-sans text-[#6E625D] mt-0.5">
                        {activeProduct.subtitle}
                      </p>
                      <div className="font-serif text-base text-[#2B211E] font-semibold mt-1">
                        ${activeProduct.price}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-sans text-[#5C504A] line-clamp-2 leading-relaxed">
                    {activeProduct.description}
                  </p>

                  <div className="pt-3 border-t border-[#E8DFD5] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onQuickView(activeProduct)}
                      className="text-xs font-sans font-semibold uppercase tracking-wider text-[#6E625D] hover:text-[#2B211E]"
                    >
                      Quick View
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const shade = activeProduct.shades[0] || ALL_SHADES[4];
                        onAddToCart(activeProduct, shade);
                      }}
                      className="bg-[#2B211E] hover:bg-[#85513f] text-white px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors flex items-center space-x-2"
                    >
                      <ShoppingBag size={13} />
                      <span>Add Formulation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 24 BIOMIMETIC SKIN DEPTHS */}
        {activeTab === 'shades' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Shade Spectrum Grid */}
            <div className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#F0EEE8]">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#85513f] block mb-1">
                    THE COMPLETE SPECTRUM
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
                    24 Living Nude Depths
                  </h3>
                </div>
                <div className="flex items-center space-x-3 text-xs font-sans text-[#6E625D]">
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E27D86]" />
                    <span>Cool Rose</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E9B858]" />
                    <span>Warm Gold</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#689775]" />
                    <span>Olive Neutral</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DDB697]" />
                    <span>Neutral Beige</span>
                  </span>
                </div>
              </div>

              {/* 24 Swatches Matrix */}
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2.5">
                {ALL_SHADES.map((shade, idx) => {
                  const isSelected = selectedShadeIndex === idx;
                  return (
                    <button
                      key={shade.id}
                      type="button"
                      onClick={() => setSelectedShadeIndex(idx)}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer group focus:outline-none ${
                        isSelected
                          ? 'bg-[#FAF0E6] border-[#2B211E] ring-2 ring-[#2B211E] scale-105 z-10'
                          : 'bg-white border-[#E8DFD5] hover:border-[#85513f]'
                      }`}
                      title={`${shade.code} ${shade.name} (${shade.undertone})`}
                    >
                      <div
                        className="w-full aspect-square rounded-lg shadow-xs mb-1.5 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: shade.hex }}
                      />
                      <span className="text-[11px] font-mono font-bold text-[#2B211E] block">
                        {shade.code}
                      </span>
                      <span className="text-[8px] font-sans text-[#807571] uppercase block truncate">
                        {shade.undertone}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Shade Detail Banner */}
              <div className="mt-6 p-6 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD5] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-16 rounded-2xl shadow-md border-2 border-white flex-shrink-0"
                    style={{ backgroundColor: activeShade.hex }}
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono font-bold bg-[#2B211E] text-white px-2 py-0.5 rounded">
                        SHADE {activeShade.code}
                      </span>
                      <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#85513f]">
                        {activeShade.undertone} Undertone · {activeShade.spectrum} Spectrum
                      </span>
                    </div>
                    <h4 className="font-serif text-xl text-[#2B211E] mt-1">
                      {activeShade.name}
                    </h4>
                    <p className="text-xs text-[#6E625D] mt-0.5">
                      {activeShade.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      const veilProduct = PRODUCTS[0];
                      onAddToCart(veilProduct, activeShade);
                    }}
                    className="w-full md:w-auto bg-[#2B211E] hover:bg-[#85513f] text-white px-6 py-3 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <ShoppingBag size={14} />
                    <span>Add Shade {activeShade.code}</span>
                  </button>

                  <Link
                    to="/complexion-studio#shade-finder-matrix"
                    className="w-full md:w-auto bg-white hover:bg-[#FAF0E6] text-[#2B211E] border border-[#E8DFD5] px-5 py-3 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-1 whitespace-nowrap"
                  >
                    <span>Full Matrix</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
