import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ALL_SHADES, PRODUCTS, TESTIMONIALS } from '../data/cosmeticsData';
import { Shade, Product } from '../types';
import {
  Sparkles,
  ShieldCheck,
  Gift,
  Droplets,
  Check,
  ArrowRight,
  SlidersHorizontal,
  Star,
  Info,
  Sparkle
} from 'lucide-react';

interface ComplexionStudioPageProps {
  onAddToCart: (product: Product, shade: Shade) => void;
  onOpenQuizModal: () => void;
  onQuickView?: (product: Product) => void;
}

interface TransformationCase {
  id: string;
  name: string;
  age: number;
  concern: string;
  category: 'Redness & Rosacea' | 'Hyperpigmentation' | 'Mature & Texture' | 'Deep Tone Radiance';
  shadeCode: string;
  shadeName: string;
  undertone: string;
  quote: string;
  routine: string[];
  beforeImage: string;
  afterImage: string;
  stats: string;
}

const TRANSFORMATION_CASES: TransformationCase[] = [
  {
    id: 'case-rosacea',
    name: 'Chloe V.',
    age: 32,
    concern: 'Vascular Flushing & Rosacea',
    category: 'Redness & Rosacea',
    shadeCode: '02',
    shadeName: 'Opal Ivory',
    undertone: 'Cool Rose',
    quote: 'Traditional makeup gave me that pasty white mask that looked separated after two hours. Skin Veil melts directly into my skin, neutralizing persistent redness without suffocation.',
    routine: ['Bio-Lipid Restorative Primer', 'Skin Veil N-02 Opal Ivory (1.5 pumps)', 'Radiant Glaze Dew Stick in Golden Aura'],
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    stats: '96% reduction in visible redness without titanium chalkiness'
  },
  {
    id: 'case-melasma',
    name: 'Elena R.',
    age: 41,
    concern: 'Post-Sun Melasma & Hyperpigmentation',
    category: 'Hyperpigmentation',
    shadeCode: '03',
    shadeName: 'Bisque Light',
    undertone: 'Warm Golden',
    quote: 'I spent twenty years attempting to paste over my melasma. ZoeNude taught me to harmonize it with living light. My peers ask what holistic clinic I frequent—not what makeup I wear.',
    routine: ['Bio-Lipid Restorative Primer', 'Skin Veil N-03 Bisque Light', 'Alabaster Silk Finishing Powder'],
    beforeImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=700&q=80',
    afterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
    stats: '100% natural dermal harmony with true-to-skin light reflection'
  },
  {
    id: 'case-deep',
    name: 'Amara K.',
    age: 29,
    concern: 'Dullness & Ashy Undertones in Traditional Formulas',
    category: 'Deep Tone Radiance',
    shadeCode: '18',
    shadeName: 'Cocoa Living',
    undertone: 'Cool Cocoa',
    quote: 'Most cosmetic lines turn ashy or grey on deep skin. ZoeNude uses micro-ground iron oxides suspended in bio-squalane that honor rich skin depths with pure luminescence.',
    routine: ['Skin Veil N-18 Cocoa Living', 'Lip Cashmere in Sienna Living', 'Dual Sculpt & Eye in Espresso Ember'],
    beforeImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80',
    afterImage: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=700&q=80',
    stats: 'Zero ash or white cast; 16-hour biomimetic color fidelity'
  },
  {
    id: 'case-mature',
    name: 'Sylvia M.',
    age: 58,
    concern: 'Dehydration, Smile Lines & Creasing',
    category: 'Mature & Texture',
    shadeCode: '06',
    shadeName: 'Nude Cashmere',
    undertone: 'Neutral Balanced',
    quote: 'As your skin matures, heavy powder foundations age you by a decade. This formula stretches dynamically with every expression, laugh, and smile without clinging to fine lines.',
    routine: ['Bio-Lipid Restorative Primer', 'Skin Veil N-06 Nude Cashmere', 'Lip Cashmere in Cashmere Petal'],
    beforeImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
    afterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
    stats: 'Zero settling in fine lines; continuous 16-hour hydration'
  }
];

export const ComplexionStudioPage: React.FC<ComplexionStudioPageProps> = ({
  onAddToCart,
  onOpenQuizModal,
  onQuickView
}) => {
  // Shade Selector State
  const [selectedSpectrum, setSelectedSpectrum] = useState<'Fair' | 'Light-Med' | 'Tan' | 'Deep'>('Light-Med');
  const [selectedUndertone, setSelectedUndertone] = useState<string>('ALL');
  const [selectedShade, setSelectedShade] = useState<Shade>(
    ALL_SHADES.find((s) => s.code === '04') || ALL_SHADES[4]
  );
  const [addedToast, setAddedToast] = useState(false);
  const [sampleTrioToast, setSampleTrioToast] = useState(false);

  // Before / After Interactive Slider State
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100

  // Routine Matrix Step Selections
  const [selectedPrimer] = useState(PRODUCTS[4]); // Primer
  const [selectedFoundation] = useState(PRODUCTS[0]); // Skin Veil
  const [selectedLip] = useState(PRODUCTS[1]); // Lip Cashmere
  const [routineAddedToast, setRoutineAddedToast] = useState(false);

  const spectrums: ('Fair' | 'Light-Med' | 'Tan' | 'Deep')[] = ['Fair', 'Light-Med', 'Tan', 'Deep'];
  const undertones = ['ALL', 'Warm', 'Neutral', 'Cool', 'Olive'];

  const location = useLocation();

  // Handle URL query parameter or hash deep linking
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const view = params.get('view') || params.get('tab');
    if (view === 'shade-finder' || view === 'shades') {
      const el = document.getElementById('shade-finder-matrix');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (view === 'transformations' || view === 'before-after') {
      const el = document.getElementById('interactive-transformations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (view === 'trio' || view === 'sample') {
      const el = document.getElementById('sample-trio-builder');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (view === 'ritual') {
      const el = document.getElementById('ritual-matrix');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.search]);

  // Filtered shades
  const visibleShades = ALL_SHADES.filter((s) => {
    const matchesSpectrum = s.spectrum === selectedSpectrum;
    const matchesUndertone = selectedUndertone === 'ALL' || s.undertone === selectedUndertone;
    return matchesSpectrum && matchesUndertone;
  });

  // Calculate adjacent trio shades for the customizer
  const currentShadeIndex = ALL_SHADES.findIndex((s) => s.id === selectedShade.id);
  const prevShade = currentShadeIndex > 0 ? ALL_SHADES[currentShadeIndex - 1] : ALL_SHADES[1];
  const nextShade = currentShadeIndex < ALL_SHADES.length - 1 ? ALL_SHADES[currentShadeIndex + 1] : ALL_SHADES[ALL_SHADES.length - 2];
  const sampleTrio = [prevShade, selectedShade, nextShade];

  const handleAddFullBottle = () => {
    onAddToCart(selectedFoundation, selectedShade);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2400);
  };

  const handleAddSampleTrio = () => {
    onAddToCart(
      {
        ...selectedFoundation,
        id: `trio-${selectedShade.id}`,
        title: `Atelier Shade Trio Card (${selectedShade.code} + Sisters)`,
        price: 12
      },
      selectedShade
    );
    setSampleTrioToast(true);
    setTimeout(() => setSampleTrioToast(false), 2400);
  };

  const handleAddCompleteRoutine = () => {
    onAddToCart(selectedPrimer, selectedPrimer.shades[0]);
    onAddToCart(selectedFoundation, selectedShade);
    onAddToCart(selectedLip, selectedLip.shades[0]);
    setRoutineAddedToast(true);
    setTimeout(() => setRoutineAddedToast(false), 2600);
  };

  const currentCase = TRANSFORMATION_CASES[activeCaseIndex];

  return (
    <div className="bg-gradient-to-b from-[#FDF7F2] via-[#FAF1E8] to-[#F7ECE1] min-h-screen pb-28 animate-fadeIn text-[#2B211E]">
      {/* Editorial Hero Header with Rainbow Skintone Ambient Multi-Glow */}
      <section className="bg-gradient-to-r from-[#FAF2EB] via-[#FDF6F0] to-[#F5ECE1] py-16 sm:py-24 border-b border-[#EADED5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E27D86]/8 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E9B858]/8 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.25em] text-[#85513f] uppercase bg-[#FAF0E6] px-3.5 py-1.5 rounded-full border border-[#d8a48f]/40">
              <Sparkles size={13} className="text-[#85513f]" />
              <span>THE ATELIER COMPLEXION STUDIO · 2027</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal leading-[1.12]">
              Shade Intelligence, Living Skin & Real Transformations
            </h1>

            <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed max-w-2xl mx-auto">
              Welcome to the ZoeNude Complexion Atelier. Discover our 24 biomimetic living skin shades, inspect interactive before-and-after transformations across skin concerns, and customize your complimentary swatch trio.
            </p>

            {/* Quick studio action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenQuizModal}
                className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold px-7 py-3.5 rounded tracking-wider uppercase transition-all shadow-sm flex items-center space-x-2 group"
              >
                <Sparkle size={14} className="text-[#d8a48f]" />
                <span>Launch 90-Sec Shade Diagnostic</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#interactive-transformations"
                className="bg-white hover:bg-[#F2EDE4] text-[#2B211E] border border-[#E8DFD5] text-xs font-semibold px-6 py-3.5 rounded tracking-wider uppercase transition-colors"
              >
                Inspect Transformations ↓
              </a>
            </div>

            {/* Value guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-[11px] font-sans text-[#6E625D]">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck size={15} className="text-[#85513f]" />
                <span>Free Shade Exchange Guarantee</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Gift size={15} className="text-[#85513f]" />
                <span>Complimentary Trio Swatch Card</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Droplets size={15} className="text-[#85513f]" />
                <span>94% Bio-Identical Lipid Mantle</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Studio Jump Sub-Navigation Bar */}
      <nav className="sticky top-20 z-30 bg-[#FCF9F3]/95 backdrop-blur-md border-b border-[#E8DFD5] py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-center space-x-2 overflow-x-auto no-scrollbar py-0.5">
            <a
              href="#shade-finder-matrix"
              className="whitespace-nowrap px-3.5 py-1.5 rounded-full text-[11px] font-sans font-semibold text-[#4E4542] hover:text-[#2B211E] hover:bg-[#FAF0E6] transition-colors border border-[#E8DFD5] hover:border-[#85513f] flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#85513f]"></span>
              <span>01 · Shade Finder</span>
            </a>
            <a
              href="#interactive-transformations"
              className="whitespace-nowrap px-3.5 py-1.5 rounded-full text-[11px] font-sans font-semibold text-[#4E4542] hover:text-[#2B211E] hover:bg-[#FAF0E6] transition-colors border border-[#E8DFD5] hover:border-[#85513f] flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#85513f]"></span>
              <span>02 · Transformations</span>
            </a>
            <a
              href="#sample-trio-builder"
              className="whitespace-nowrap px-3.5 py-1.5 rounded-full text-[11px] font-sans font-semibold text-[#4E4542] hover:text-[#2B211E] hover:bg-[#FAF0E6] transition-colors border border-[#E8DFD5] hover:border-[#85513f] flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#85513f]"></span>
              <span>03 · Swatch Trio Builder</span>
            </a>
            <a
              href="#ritual-matrix"
              className="whitespace-nowrap px-3.5 py-1.5 rounded-full text-[11px] font-sans font-semibold text-[#4E4542] hover:text-[#2B211E] hover:bg-[#FAF0E6] transition-colors border border-[#E8DFD5] hover:border-[#85513f] flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#85513f]"></span>
              <span>04 · Living Skin Ritual</span>
            </a>
            <a
              href="#clinical-study"
              className="whitespace-nowrap px-3.5 py-1.5 rounded-full text-[11px] font-sans font-semibold text-[#4E4542] hover:text-[#2B211E] hover:bg-[#FAF0E6] transition-colors border border-[#E8DFD5] hover:border-[#85513f] flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#85513f]"></span>
              <span>05 · Clinical Study</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-20">

        {/* SECTION 1: INTERACTIVE SHADE FINDER & TONE MATRIX */}
        <section id="shade-finder-matrix" className="scroll-mt-24">
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD5] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-[#F0EEE8] gap-4">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#85513f] block mb-1">
                  MODULE 01 · COLOR SCIENCE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
                  The 24 Biomimetic Shade Matrix
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#6E625D] mt-1 max-w-xl">
                  Formulated without chalky titanium dioxide. Select your depth spectrum and filter by vascular undertone to discover your living skin match.
                </p>
              </div>

              <button
                onClick={onOpenQuizModal}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#85513f] hover:text-[#2B211E] tracking-wider uppercase transition-colors self-start md:self-auto py-1"
              >
                <span>Prefer a guided diagnosis?</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Filter Controls and Interactive Swatch Palette */}
              <div className="lg:col-span-7 space-y-7">
                {/* 1. Depth Spectrum Selector */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#6E625D]">
                      1. SELECT SKIN DEPTH SPECTRUM:
                    </label>
                    <span className="text-[11px] font-medium text-[#85513f]">
                      Current: {selectedSpectrum}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 p-1.5 bg-[#FAF6F0] rounded-xl border border-[#E8DFD5]">
                    {spectrums.map((spectrum) => (
                      <button
                        key={spectrum}
                        onClick={() => {
                          setSelectedSpectrum(spectrum);
                          const first = ALL_SHADES.find((s) => s.spectrum === spectrum);
                          if (first) setSelectedShade(first);
                        }}
                        className={`py-2.5 text-xs font-sans font-semibold tracking-wider rounded-lg transition-all ${
                          selectedSpectrum === spectrum
                            ? 'bg-[#2B211E] text-white shadow-sm'
                            : 'text-[#4E4542] hover:text-[#2B211E] hover:bg-white/60'
                        }`}
                      >
                        {spectrum}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Undertone Filter */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#6E625D]">
                      2. FILTER BY VASCULAR UNDERTONE:
                    </label>
                    <span className="text-[11px] text-[#6E625D]">
                      {visibleShades.length} shades visible
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {undertones.map((tone) => (
                      <button
                        key={tone}
                        onClick={() => setSelectedUndertone(tone)}
                        className={`px-3.5 py-1.5 text-xs font-sans rounded-full border transition-all ${
                          selectedUndertone === tone
                            ? 'bg-[#85513f] text-white border-[#85513f]'
                            : 'bg-white text-[#4E4542] border-[#E8DFD5] hover:border-[#85513f]'
                        }`}
                      >
                        {tone === 'ALL' ? 'All Undertones' : `${tone} Tone`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Interactive Swatches Display */}
                <div className="p-6 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD5] space-y-4">
                  <div className="flex items-center justify-between text-xs font-sans border-b border-[#E8DFD5]/60 pb-3">
                    <span className="text-[#2B211E]">
                      Inspecting:{' '}
                      <strong className="text-[#85513f] font-semibold">
                        Shade {selectedShade.code} · {selectedShade.name}
                      </strong>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#85513f] border border-[#E8DFD5]">
                      {selectedShade.undertone} undertone
                    </span>
                  </div>

                  <div className="flex items-center space-x-3.5 overflow-x-auto py-2.5 px-1">
                    {visibleShades.map((shade) => {
                      const isSelected = selectedShade.id === shade.id;
                      return (
                        <button
                          key={shade.id}
                          onClick={() => setSelectedShade(shade)}
                          aria-label={`Select shade ${shade.code} ${shade.name}`}
                          className="group relative flex flex-col items-center flex-shrink-0 focus:outline-none"
                        >
                          <div
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all duration-200 shadow-inner flex items-center justify-center ${
                              isSelected
                                ? 'ring-2 ring-[#2B211E] ring-offset-2 ring-offset-white scale-110'
                                : 'hover:scale-105 border border-black/10'
                            }`}
                            style={{ backgroundColor: shade.hex }}
                          >
                            {isSelected && (
                              <Check size={16} className="text-[#2B211E] drop-shadow-sm" />
                            )}
                          </div>
                          <span className="text-[10px] font-sans font-medium text-[#6E625D] mt-2 group-hover:text-[#2B211E]">
                            {shade.code}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-[11px] font-sans text-[#6E625D] italic">
                    &ldquo;{selectedShade.description}&rdquo;
                  </p>
                </div>

                {/* Micro Shade Advisory Callout */}
                <div className="p-4 bg-[#FAF0E6]/50 rounded-xl border border-[#d8a48f]/30 flex items-start space-x-3 text-xs">
                  <Info size={16} className="text-[#85513f] flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-semibold text-[#2B211E]">The ZoeNude Melt Test:</span>
                    <p className="text-[#6E625D] text-[11px] leading-relaxed">
                      Our organic squalane base adapts by 0.5 tone within 90 seconds as it absorbs your skin temperature. When in doubt between two shades, both will blend harmoniously.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Selected Shade Profile & Action Card */}
              <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DFD5] space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#85513f]">
                    COMPLEXION PROFILE
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#6E625D] bg-white px-2 py-0.5 rounded border border-[#E8DFD5]">
                    30 ml Refillable Glass
                  </span>
                </div>

                {/* Big Swatch Preview with product thumbnail */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-20 h-20 rounded-2xl border-2 border-white shadow-md flex-shrink-0 relative overflow-hidden"
                    style={{ backgroundColor: selectedShade.hex }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none"></div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#85513f]">
                      SHADE N-{selectedShade.code}
                    </span>
                    <h3 className="font-serif text-2xl text-[#2B211E] leading-snug">
                      {selectedShade.name}
                    </h3>
                    <p className="text-xs font-sans text-[#6E625D]">
                      {selectedShade.spectrum} Depth · {selectedShade.undertone} Undertone
                    </p>
                  </div>
                </div>

                {/* Product formulation summary */}
                <div className="space-y-2 bg-white p-4 rounded-xl border border-[#E8DFD5] text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE8]">
                    <span className="text-[#6E625D]">Formulation:</span>
                    <span className="font-medium text-[#2B211E]">94% Bio-Lipid Serum</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE8]">
                    <span className="text-[#6E625D]">Finish:</span>
                    <span className="font-medium text-[#2B211E]">Living Second-Skin Dew</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6E625D]">Coverage:</span>
                    <span className="font-medium text-[#2B211E]">Sheer to Buildable Medium</span>
                  </div>
                </div>

                {/* Two Action Buttons: Full Bottle vs $12 Trio */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={handleAddFullBottle}
                    className="w-full bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold py-3.5 rounded tracking-wider uppercase transition-all flex items-center justify-center space-x-2 shadow-sm"
                  >
                    {addedToast ? (
                      <>
                        <Check size={14} className="text-[#d8a48f]" />
                        <span>Added Shade {selectedShade.code} to Bag!</span>
                      </>
                    ) : (
                      <span>Add Full Bottle to Bag · $48</span>
                    )}
                  </button>

                  <button
                    onClick={handleAddSampleTrio}
                    className="w-full bg-white hover:bg-[#F2EDE4] text-[#2B211E] border border-[#E8DFD5] text-xs font-semibold py-3 rounded tracking-wider uppercase transition-colors flex items-center justify-center space-x-2"
                  >
                    {sampleTrioToast ? (
                      <>
                        <Check size={14} className="text-[#85513f]" />
                        <span>Trio Card Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <Gift size={13} className="text-[#85513f]" />
                        <span>Order Home Sample Trio · $12 (Refundable)</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-[#6E625D] pt-1">
                    *The $12 sample trio price is 100% credited toward your full bottle purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE BEFORE & AFTER TRANSFORMATION STUDIO */}
        <section id="interactive-transformations" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#85513f] block">
              MODULE 02 · REAL SKINCASE STUDIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#2B211E] font-normal leading-tight">
              Interactive Transformations Across Real Concerns
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4E4542]">
              Drag the interactive split-slider below to witness unedited epidermal transitions from bare skin to 1 sheer layer of Skin Veil.
            </p>
          </div>

          {/* Skin Concern Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TRANSFORMATION_CASES.map((c, index) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(index);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all border ${
                  activeCaseIndex === index
                    ? 'bg-[#2B211E] text-white border-[#2B211E] shadow-sm'
                    : 'bg-white text-[#4E4542] border-[#E8DFD5] hover:border-[#85513f]'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>

          {/* Main Interactive Split-Screen Slider Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DFD5] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Image Comparison Slider */}
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden select-none border border-[#E8DFD5] shadow-inner bg-[#2B211E]">
                  {/* "After" Image (Full background) */}
                  <img
                    src={currentCase.afterImage}
                    alt={`${currentCase.name} After Transformation`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#2B211E]/80 backdrop-blur-md text-white text-[10px] font-sans uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow">
                    After: 1 Layer Skin Veil
                  </div>

                  {/* "Before" Image (Clipped on top with slider position) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={currentCase.beforeImage}
                      alt={`${currentCase.name} Bare Skin Before`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        width: '100%',
                        maxWidth: 'none',
                        height: '100%'
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#2B211E] text-[10px] font-sans uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow">
                      Before: Bare Epidermis
                    </div>
                  </div>

                  {/* Draggable Vertical Divider Bar */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#2B211E] text-white border-2 border-white shadow-xl flex items-center justify-center text-[10px] font-bold">
                      <SlidersHorizontal size={13} />
                    </div>
                  </div>

                  {/* Range Slider for Accessible / Easy Touch Dragging */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    aria-label="Before and after transformation slider"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-sans text-[#6E625D] mt-3 px-1">
                  <span>← Drag or click image to slide</span>
                  <span className="font-medium text-[#85513f]">{sliderPosition}% Visible Reveal</span>
                  <span>Unedited Natural Light</span>
                </div>
              </div>

              {/* Right Column: Case Details & Clinical Observation */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-wider uppercase text-[#85513f] mb-1">
                    <span>CASE FILE #{activeCaseIndex + 1}</span>
                    <span>·</span>
                    <span>{currentCase.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
                    {currentCase.name}, Age {currentCase.age}
                  </h3>
                  <p className="text-xs font-sans font-medium text-[#85513f] mt-0.5">
                    Wears Shade {currentCase.shadeCode} ({currentCase.shadeName} · {currentCase.undertone})
                  </p>
                </div>

                <blockquote className="font-sans text-xs sm:text-[13px] text-[#4E4542] italic leading-relaxed bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DFD5]">
                  &ldquo;{currentCase.quote}&rdquo;
                </blockquote>

                {/* Clinical Stat */}
                <div className="p-3.5 rounded-xl bg-[#EAF2EC] border border-[#d2e3d7] text-xs flex items-center space-x-2.5">
                  <Check size={16} className="text-[#2F6B43] flex-shrink-0" />
                  <span className="text-[#2F6B43] font-medium text-[11px]">
                    {currentCase.stats}
                  </span>
                </div>

                {/* Applied Routine Pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#6E625D] block">
                    ATELIER FORMULATION STEPS USED:
                  </span>
                  <div className="space-y-1.5">
                    {currentCase.routine.map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs font-sans text-[#2B211E]">
                        <span className="w-4 h-4 rounded-full bg-[#FAF0E6] text-[#85513f] text-[9px] font-bold flex items-center justify-center border border-[#d8a48f]/40">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Add This Wearer's Shade */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      const matched = ALL_SHADES.find((s) => s.code === currentCase.shadeCode) || ALL_SHADES[0];
                      onAddToCart(selectedFoundation, matched);
                    }}
                    className="w-full bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold py-3 rounded tracking-wider uppercase transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Adopt {currentCase.name}&rsquo;s Shade ({currentCase.shadeCode})</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMPLIMENTARY ATELIER TRIO SWATCH BUILDER */}
        <section id="sample-trio-builder" className="scroll-mt-24">
          <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD5]">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#85513f] block">
                MODULE 03 · ZERO RISK SAMPLING
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
                Build Your Complimentary Home Swatch Trio
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#4E4542]">
                Test your prospective shade alongside its lighter and deeper sister hues in morning, midday, and ambient evening light before unsealing your full bottle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {sampleTrio.map((shade, idx) => {
                const isTarget = idx === 1;
                return (
                  <div
                    key={shade.id}
                    onClick={() => setSelectedShade(shade)}
                    className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                      isTarget
                        ? 'bg-white border-[#85513f] shadow-md ring-1 ring-[#85513f]'
                        : 'bg-white/80 border-[#E8DFD5] hover:border-[#85513f]'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                          isTarget
                            ? 'bg-[#85513f] text-white'
                            : 'bg-[#FAF6F0] text-[#6E625D]'
                        }`}>
                          {idx === 0 ? 'Step Lighter' : idx === 1 ? 'Primary Focus' : 'Step Deeper'}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#85513f]">
                          {shade.code}
                        </span>
                      </div>

                      <div
                        className="w-full h-24 rounded-xl shadow-inner border border-black/10 flex items-center justify-center relative overflow-hidden"
                        style={{ backgroundColor: shade.hex }}
                      >
                        {isTarget && (
                          <div className="bg-[#2B211E]/80 backdrop-blur-sm text-white text-[10px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Selected
                          </div>
                        )}
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-[#2B211E]">
                          {shade.name}
                        </h4>
                        <p className="text-xs font-sans text-[#6E625D]">
                          {shade.undertone} undertone · {shade.spectrum}
                        </p>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#6E625D] italic mt-4 pt-3 border-t border-[#F0EEE8]">
                      {shade.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="max-w-md mx-auto pt-8 text-center space-y-3">
              <button
                onClick={handleAddSampleTrio}
                className="w-full bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold py-4 rounded tracking-wider uppercase transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Gift size={15} className="text-[#d8a48f]" />
                <span>Add Custom Trio Card to Bag ($12)</span>
              </button>
              <p className="text-[11px] text-[#6E625D]">
                Includes 3 × 3ml sample droppers + $12 digital credit towards full bottle.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE 3-STEP BIOMIMETIC LIVING SKIN RITUAL */}
        <section id="ritual-matrix" className="scroll-mt-24">
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD5] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-[#F0EEE8] gap-4">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#85513f] block mb-1">
                  MODULE 04 · DERMATOLOGICAL HARMONY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
                  The 3-Minute Living Skin Morning Ritual
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#6E625D] mt-1 max-w-xl">
                  Formulated to synergize at a cellular level. Prep the lipid mantle, unify tone, and drape lips in cashmere cushion.
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-[#6E625D] block">Ritual Bundle Total:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm line-through text-[#6E625D]">$126</span>
                  <span className="font-serif text-2xl font-bold text-[#2B211E]">$107</span>
                  <span className="text-[10px] bg-[#EAF2EC] text-[#2F6B43] px-2 py-0.5 rounded font-bold uppercase">
                    Save 15%
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1: Primer */}
              <div className="p-6 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD5] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#85513f] bg-white px-2.5 py-0.5 rounded border border-[#E8DFD5]">
                      STEP 1 · PREP
                    </span>
                    <span className="text-xs font-semibold text-[#2B211E]">$42</span>
                  </div>

                  <div className="w-full h-36 rounded-xl overflow-hidden bg-white border border-[#E8DFD5]">
                    <img
                      src={selectedPrimer.image}
                      alt={selectedPrimer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-serif text-lg text-[#2B211E]">
                      {selectedPrimer.title}
                    </h4>
                    <p className="text-xs text-[#6E625D] mt-0.5">
                      {selectedPrimer.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-[#4E4542] leading-relaxed pt-2 border-t border-[#E8DFD5]">
                  Fuses squalane with epidermal ceramides to smooth flakiness before pigment application.
                </p>
              </div>

              {/* Step 2: Foundation */}
              <div className="p-6 bg-white rounded-2xl border-2 border-[#85513f] shadow-md space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white bg-[#85513f] px-2.5 py-0.5 rounded">
                      STEP 2 · UNIFY (HERO)
                    </span>
                    <span className="text-xs font-semibold text-[#2B211E]">$48</span>
                  </div>

                  <div className="w-full h-36 rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] relative">
                    <img
                      src={selectedFoundation.image}
                      alt={selectedFoundation.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute bottom-2 right-2 w-7 h-7 rounded-full border-2 border-white shadow"
                      style={{ backgroundColor: selectedShade.hex }}
                    />
                  </div>

                  <div>
                    <h4 className="font-serif text-lg text-[#2B211E]">
                      Skin Veil N-{selectedShade.code}
                    </h4>
                    <p className="text-xs text-[#85513f] font-medium mt-0.5">
                      {selectedShade.name} · {selectedShade.undertone}
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-[#4E4542] leading-relaxed pt-2 border-t border-[#F0EEE8]">
                  Suspends iron oxides in lipid squalane for breathable, crease-free true skin harmony.
                </p>
              </div>

              {/* Step 3: Lip Cashmere */}
              <div className="p-6 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD5] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#85513f] bg-white px-2.5 py-0.5 rounded border border-[#E8DFD5]">
                      STEP 3 · ENHANCE
                    </span>
                    <span className="text-xs font-semibold text-[#2B211E]">$36</span>
                  </div>

                  <div className="w-full h-36 rounded-xl overflow-hidden bg-white border border-[#E8DFD5]">
                    <img
                      src={selectedLip.image}
                      alt={selectedLip.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-serif text-lg text-[#2B211E]">
                      Lip Cashmere &lsquo;Raw Sand&rsquo;
                    </h4>
                    <p className="text-xs text-[#6E625D] mt-0.5">
                      Ceramide-Infused Conditioning Nude
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-[#4E4542] leading-relaxed pt-2 border-t border-[#E8DFD5]">
                  Botanical waxes and moringa butter cushion lips in featherlight, non-drying warmth.
                </p>
              </div>
            </div>

            {/* Bundle Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#F0EEE8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-[#6E625D]">
                <ShieldCheck size={16} className="text-[#85513f]" />
                <span>Includes complimentary silk application brush with the 3-step ritual.</span>
              </div>

              <button
                onClick={handleAddCompleteRoutine}
                className="w-full sm:w-auto bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold px-8 py-4 rounded tracking-wider uppercase transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                {routineAddedToast ? (
                  <>
                    <Check size={14} className="text-[#d8a48f]" />
                    <span>Added Complete 3-Step Ritual to Bag!</span>
                  </>
                ) : (
                  <span>Add Complete 3-Step Ritual · $107</span>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: CLINICAL SCIENCE COMPARISON */}
        <section id="clinical-study" className="scroll-mt-24 bg-[#FAF6F0] rounded-2xl p-8 sm:p-12 border border-[#E8DFD5] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#85513f] block">
              CELLULAR BIOMIMETICS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              Living Skin vs Traditional Masking
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6E625D]">
              A physiological analysis of biomimetic lipid suspension versus traditional synthetic foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-white border border-[#E8DFD5] space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#93000a] block">
                Traditional High-Coverage Polymer
              </span>
              <ul className="space-y-3 text-xs font-sans text-[#4E4542]">
                <li className="flex items-start space-x-2.5">
                  <span className="text-[#93000a] font-bold text-sm leading-none mt-0.5">✕</span>
                  <span><strong>Heavy titanium dioxide opacity:</strong> creates a flat, artificial mask that washes away authentic facial dimension.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-[#93000a] font-bold text-sm leading-none mt-0.5">✕</span>
                  <span><strong>Volatile dimethicone silicones:</strong> evaporate after 2 hours, trapping concentrated powder in pores and expression lines.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-[#93000a] font-bold text-sm leading-none mt-0.5">✕</span>
                  <span><strong>Occlusive film formation:</strong> blocks dermal perspiration, provoking midday sebum breakthrough and oxidization.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-[#FCF9F3] border-2 border-[#85513f] space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#2F6B43] block">
                ZoeNude Biomimetic Lipid Fusion (BLF™)
              </span>
              <ul className="space-y-3 text-xs font-sans text-[#2B211E]">
                <li className="flex items-start space-x-2.5">
                  <Check size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                  <span><strong>Plant squalane fusion:</strong> dissolves on contact, matching the refractive index of living skin for zero white cast.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                  <span><strong>Micro-ground mineral oxides:</strong> equalize vascular redness and melasma while letting natural freckles shine through.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                  <span><strong>Tri-ceramide barrier repair:</strong> seals cellular hydration for 16 hours without cracking along smile lines.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: CLIENT COMMUNITY REVIEWS */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#85513f] block">
              VERIFIED ATELIER CLIENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              What Our Community Says
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 border border-[#E8DFD5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-[#85513f] text-[#85513f]" />
                    ))}
                  </div>
                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#4E4542] italic">
                    {t.quote}
                  </p>
                  {t.skinType && (
                    <span className="inline-block text-[10px] font-sans font-semibold text-[#85513f] bg-[#FAF0E6] px-2 py-0.5 rounded border border-[#d8a48f]/40">
                      Skin: {t.skinType}
                    </span>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EEE8] flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E8DFD5] flex-shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-xs text-[#2B211E]">{t.name}</h4>
                    <p className="font-sans text-[11px] text-[#6E625D]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: FINAL CTA BANNER */}
        <section className="bg-[#2B211E] text-[#FCF9F3] rounded-3xl p-8 sm:p-14 text-center space-y-5 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#d8a48f] uppercase block">
              BESPOKE CONCIERGE · EST. 2027
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Begin Your Living Complexion Journey
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#E8DFD5] max-w-lg mx-auto leading-relaxed">
              Take the 90-second diagnostic or receive personal advice from our Parisian atelier colorists. Free exchanges on every bottle.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenQuizModal}
                className="bg-white hover:bg-[#F2EDE4] text-[#2B211E] text-xs font-semibold px-8 py-4 rounded tracking-wider uppercase transition-all shadow-md"
              >
                Launch Diagnostic Quiz →
              </button>
              <button
                onClick={handleAddSampleTrio}
                className="bg-transparent hover:bg-white/10 text-white border border-[#E8DFD5]/40 text-xs font-semibold px-6 py-4 rounded tracking-wider uppercase transition-colors"
              >
                Order $12 Swatch Trio
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
