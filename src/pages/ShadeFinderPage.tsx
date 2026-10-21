import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_SHADES, PRODUCTS } from '../data/cosmeticsData';
import { Shade, Product } from '../types';
import { Sparkles, ShieldCheck, Gift, Droplets, Check, ArrowRight, RotateCcw } from 'lucide-react';

interface ShadeFinderPageProps {
  onAddToCart: (product: Product, shade: Shade) => void;
  onOpenQuizModal: () => void;
}

export const ShadeFinderPage: React.FC<ShadeFinderPageProps> = ({
  onAddToCart,
  onOpenQuizModal,
}) => {
  const [selectedSpectrum, setSelectedSpectrum] = useState<'Fair' | 'Light-Med' | 'Tan' | 'Deep'>('Light-Med');
  const [selectedUndertone, setSelectedUndertone] = useState<string>('ALL');
  const [selectedShade, setSelectedShade] = useState<Shade>(
    ALL_SHADES.find((s) => s.code === '04') || ALL_SHADES[4]
  );
  const [addedToast, setAddedToast] = useState(false);

  // Diagnostic Quiz Step State
  const [quizStep, setQuizStep] = useState(1);
  const [quizDepth, setQuizDepth] = useState<'Fair' | 'Light-Med' | 'Tan' | 'Deep'>('Light-Med');
  const [quizUndertone, setQuizUndertone] = useState<'Warm' | 'Neutral' | 'Cool' | 'Olive'>('Neutral');
  const [quizFinish, setQuizFinish] = useState<'Radiant' | 'Satin' | 'Velvet'>('Radiant');

  const spectrums: ('Fair' | 'Light-Med' | 'Tan' | 'Deep')[] = ['Fair', 'Light-Med', 'Tan', 'Deep'];
  const undertones = ['ALL', 'Warm', 'Neutral', 'Cool', 'Olive'];

  // Filtered shades by spectrum and undertone
  const visibleShades = ALL_SHADES.filter((s) => {
    const matchesSpectrum = s.spectrum === selectedSpectrum;
    const matchesUndertone = selectedUndertone === 'ALL' || s.undertone === selectedUndertone;
    return matchesSpectrum && matchesUndertone;
  });

  const foundationProduct = PRODUCTS[0];
  const lipProduct = PRODUCTS[1];

  const handleQuickAdd = () => {
    onAddToCart(foundationProduct, selectedShade);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2400);
  };

  const matchedDiagnosticShade =
    ALL_SHADES.find((s) => s.spectrum === quizDepth && s.undertone === quizUndertone) ||
    ALL_SHADES.find((s) => s.spectrum === quizDepth) ||
    ALL_SHADES[4];

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      {/* Page Header */}
      <section className="bg-[#FAF6F0] py-14 sm:py-20 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
            <Sparkles size={14} />
            <span>ADAPTIVE SKIN INTELLIGENCE</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal">
            Find Your True Match in 90 Seconds
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#4E4542] max-w-2xl mx-auto leading-relaxed">
            Our diagnostic algorithm assesses skin depth, vascular undertones, and lipid absorption to pair you with an undetectable, living complexion profile.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-sans text-[#6E625D]">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck size={15} className="text-[#85513f]" />
              <span>100% Free Color Exchange Guarantee</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Gift size={15} className="text-[#85513f]" />
              <span>Complimentary Trio Sample Card</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Droplets size={15} className="text-[#85513f]" />
              <span>Non-Comedogenic Biomimetic Base</span>
            </span>
          </div>

          <div className="pt-3">
            <Link
              to="/complexion-studio"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#85513f] hover:text-[#2B211E] bg-[#FAF0E6] px-4 py-2 rounded-full border border-[#d8a48f]/40 transition-colors"
            >
              <span>Explore All-in-One Complexion Studio (Shade Finder + Transformations + Trio Builder)</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Interactive Diagnostic Simulator & Tone Matrix Preview */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DFD5] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Spectrum & Undertone Selectors */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-[#85513f] block">
                  DIAGNOSTIC SIMULATOR
                </span>
                <h2 className="font-serif text-3xl text-[#2B211E] mt-0.5">
                  Tone Matrix Preview (24 Nude Shades)
                </h2>
                <p className="font-sans text-xs text-[#6E625D] mt-1">
                  Explore our biomimetic shade range formulated without titanium chalkiness.
                </p>
              </div>

              {/* Spectrum Selection Buttons */}
              <div className="space-y-2">
                <label className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#6E625D] block">
                  1. SELECT SKIN DEPTH SPECTRUM:
                </label>
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
                          : 'text-[#4E4542] hover:text-[#2B211E]'
                      }`}
                    >
                      {spectrum}
                    </button>
                  ))}
                </div>
              </div>

              {/* Undertone Filter Pills */}
              <div className="space-y-2">
                <label className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#6E625D] block">
                  2. FILTER BY UNDERTONE:
                </label>
                <div className="flex flex-wrap gap-2">
                  {undertones.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedUndertone(tone)}
                      className={`px-3 py-1.5 text-xs font-sans rounded-full border transition-all ${
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

              {/* Circular Swatches Row */}
              <div className="p-5 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD5] space-y-3">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="font-semibold text-[#2B211E]">
                    Selected:{' '}
                    <strong className="text-[#85513f]">
                      {selectedShade.code} {selectedShade.name}
                    </strong>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6E625D]">
                    {selectedShade.undertone.toUpperCase()} UNDERTONE
                  </span>
                </div>

                <div className="flex items-center space-x-3.5 overflow-x-auto py-2 px-1">
                  {visibleShades.map((shade) => {
                    const isSelected = selectedShade.id === shade.id;
                    return (
                      <button
                        key={shade.id}
                        onClick={() => setSelectedShade(shade)}
                        className="group relative flex flex-col items-center flex-shrink-0 focus:outline-none"
                      >
                        <div
                          className={`w-11 h-11 rounded-full transition-all duration-200 shadow-inner flex items-center justify-center ${
                            isSelected
                              ? 'ring-2 ring-[#2B211E] ring-offset-2 ring-offset-white scale-110'
                              : 'hover:scale-105 border border-black/10'
                          }`}
                          style={{ backgroundColor: shade.hex }}
                        >
                          {isSelected && (
                            <Check size={15} className="text-[#2B211E] drop-shadow-sm" />
                          )}
                        </div>
                        <span className="text-[10px] font-sans font-medium text-[#6E625D] mt-1.5 group-hover:text-[#2B211E]">
                          {shade.code}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Recommended Duo Card */}
            <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#E8DFD5] space-y-5">
              <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#85513f] block">
                COMPLEXION PAIRING
              </span>

              <div className="flex items-center space-x-4">
                <div
                  className="w-16 h-16 rounded-2xl border border-white shadow-inner flex-shrink-0"
                  style={{ backgroundColor: selectedShade.hex }}
                />
                <div>
                  <h3 className="font-serif text-xl text-[#2B211E] leading-snug">
                    Skin Veil N-{selectedShade.code}
                  </h3>
                  <p className="text-xs font-sans text-[#85513f] font-medium">
                    {selectedShade.name} ({selectedShade.undertone} Undertone)
                  </p>
                  <p className="text-[11px] text-[#6E625D] italic mt-1">
                    &ldquo;{selectedShade.description}&rdquo;
                  </p>
                </div>
              </div>

              {/* Harmonizing Lip Cashmere */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E8DFD5] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[9px] uppercase font-semibold text-[#85513f] block">
                    HARMONIZING LIP NUDE
                  </span>
                  <span className="font-serif text-sm text-[#2B211E]">
                    Lip Cashmere &lsquo;Raw Sand&rsquo;
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#C2866B] border border-black/10" />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleQuickAdd}
                  className="w-full bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold py-3.5 rounded tracking-wider uppercase transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  {addedToast ? (
                    <>
                      <Check size={14} />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <span>Add Shade {selectedShade.code} to Bag ($48)</span>
                  )}
                </button>

                <button
                  onClick={onOpenQuizModal}
                  className="w-full bg-white hover:bg-[#F6F3ED] text-[#2B211E] border border-[#E8DFD5] text-xs font-semibold py-3 rounded tracking-wider uppercase transition-colors"
                >
                  Start Guided 4-Step Quiz →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnostic Assessment Form Section */}
        <div className="bg-[#FAF6F0] rounded-2xl p-8 sm:p-12 border border-[#E8DFD5]">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#85513f] block">
                STEP-BY-STEP ADAPTIVE DIAGNOSTIC
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
                Personalized Undertone Assessment
              </h2>
              <p className="text-xs sm:text-sm text-[#6E625D]">
                Answer 3 quick biological questions to calculate your exact biomimetic match.
              </p>
            </div>

            {/* Step 1: Depth */}
            <div className="space-y-3 bg-white p-6 rounded-xl border border-[#E8DFD5]">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#2B211E] block">
                Question 1: What is your skin depth in natural daylight?
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {spectrums.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuizDepth(s)}
                    className={`p-3 rounded-lg border text-xs font-sans font-medium transition-all ${
                      quizDepth === s
                        ? 'bg-[#2B211E] text-white border-[#2B211E]'
                        : 'bg-[#FCF9F3] text-[#4E4542] border-[#E8DFD5] hover:border-[#85513f]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Undertone */}
            <div className="space-y-3 bg-white p-6 rounded-xl border border-[#E8DFD5]">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#2B211E] block">
                Question 2: How does your skin react to sun exposure?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'Warm', label: 'Tans easily with warm golden peach luster (Warm)' },
                  { id: 'Neutral', label: 'Balances between rosy and golden tones (Neutral)' },
                  { id: 'Cool', label: 'Burns quickly or flushes rosy-pink (Cool)' },
                  { id: 'Olive', label: 'Muted golden-green cast in sunlight (Olive)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setQuizUndertone(item.id as any)}
                    className={`p-3 rounded-lg border text-left text-xs font-sans font-medium transition-all ${
                      quizUndertone === item.id
                        ? 'bg-[#2B211E] text-white border-[#2B211E]'
                        : 'bg-[#FCF9F3] text-[#4E4542] border-[#E8DFD5] hover:border-[#85513f]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Matched Result Banner */}
            <div className="p-6 rounded-xl bg-[#EAF2EC] border border-[#d2e3d7] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#2F6B43] block">
                  CALCULATED LIVING MATCH
                </span>
                <h4 className="font-serif text-2xl text-[#2B211E]">
                  Shade {matchedDiagnosticShade.code} · {matchedDiagnosticShade.name}
                </h4>
                <p className="text-xs text-[#4E4542]">
                  {matchedDiagnosticShade.undertone} Undertone · Includes complimentary adjacent trio card.
                </p>
              </div>

              <button
                onClick={() => onAddToCart(foundationProduct, matchedDiagnosticShade)}
                className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold px-6 py-3 rounded tracking-wider uppercase transition-colors whitespace-nowrap"
              >
                Add Matched Bottle ($48)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
