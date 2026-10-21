import React, { useState } from 'react';
import { ALL_SHADES } from '../data/cosmeticsData';
import { Shade, Product } from '../types';
import { ShieldCheck, Gift, Droplets, ArrowRight, Check, Sparkles } from 'lucide-react';

interface ShadeFinderSectionProps {
  onOpenQuiz: () => void;
  onAddToCart: (product: Product, shade: Shade) => void;
  foundationProduct: Product;
}

export const ShadeFinderSection: React.FC<ShadeFinderSectionProps> = ({
  onOpenQuiz,
  onAddToCart,
  foundationProduct,
}) => {
  const [selectedSpectrum, setSelectedSpectrum] = useState<'Fair' | 'Light-Med' | 'Tan' | 'Deep'>('Light-Med');
  const [selectedShade, setSelectedShade] = useState<Shade>(
    ALL_SHADES.find((s) => s.code === '04') || ALL_SHADES[4]
  );
  const [addedToast, setAddedToast] = useState(false);

  const spectrums: ('Fair' | 'Light-Med' | 'Tan' | 'Deep')[] = ['Fair', 'Light-Med', 'Tan', 'Deep'];

  // Filter swatches by selected spectrum
  const visibleShades = ALL_SHADES.filter((s) => s.spectrum === selectedSpectrum);

  const handleSelectSpectrum = (spectrum: 'Fair' | 'Light-Med' | 'Tan' | 'Deep') => {
    setSelectedSpectrum(spectrum);
    const firstOfSpectrum = ALL_SHADES.find((s) => s.spectrum === spectrum);
    if (firstOfSpectrum) {
      setSelectedShade(firstOfSpectrum);
    }
  };

  const handleQuickAdd = () => {
    onAddToCart(foundationProduct, selectedShade);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2400);
  };

  return (
    <section className="bg-[#FAF6F0] py-20 border-b border-[#E8DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Adaptive Skin Intelligence Copy */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center space-x-2 text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#85513f]">
              <Sparkles size={14} />
              <span>ADAPTIVE SKIN INTELLIGENCE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-[#2B211E] font-normal">
              Find Your True Match in 90 Seconds.
            </h2>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#4E4542]">
              Take our interactive undertone assessment. We analyze depth, overtone warmth,
              and lipid density to pair you with your exact biomimetic shade profile.
            </p>

            {/* 3 Pillars / Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3">
              <div className="space-y-1.5 bg-[#FFFFFF]/80 p-4 rounded-xl border border-[#E8DFD5]/80">
                <div className="w-8 h-8 rounded-full bg-[#f4ece7] text-[#85513f] flex items-center justify-center mb-2">
                  <ShieldCheck size={16} />
                </div>
                <h3 className="font-sans font-semibold text-xs text-[#2B211E]">
                  100% Shade Guarantee
                </h3>
                <p className="font-sans text-[11px] leading-snug text-[#6E625D]">
                  Free exchanges until your complexion sings.
                </p>
              </div>

              <div className="space-y-1.5 bg-[#FFFFFF]/80 p-4 rounded-xl border border-[#E8DFD5]/80">
                <div className="w-8 h-8 rounded-full bg-[#f4ece7] text-[#85513f] flex items-center justify-center mb-2">
                  <Gift size={16} />
                </div>
                <h3 className="font-sans font-semibold text-xs text-[#2B211E]">
                  Trio Sample Included
                </h3>
                <p className="font-sans text-[11px] leading-snug text-[#6E625D]">
                  Complimentary adjacent mini swatches.
                </p>
              </div>

              <div className="space-y-1.5 bg-[#FFFFFF]/80 p-4 rounded-xl border border-[#E8DFD5]/80">
                <div className="w-8 h-8 rounded-full bg-[#f4ece7] text-[#85513f] flex items-center justify-center mb-2">
                  <Droplets size={16} />
                </div>
                <h3 className="font-sans font-semibold text-xs text-[#2B211E]">
                  Biomimetic Blends
                </h3>
                <p className="font-sans text-[11px] leading-snug text-[#6E625D]">
                  Formulated without white-cast titanium.
                </p>
              </div>
            </div>

            {/* Launch Shade Quiz Button */}
            <div className="pt-2">
              <button
                onClick={onOpenQuiz}
                className="group bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-8 py-4 rounded-[4px] shadow-sm transition-all duration-200 inline-flex items-center space-x-3 transform hover:-translate-y-0.5"
              >
                <span>LAUNCH SHADE QUIZ</span>
                <ArrowRight
                  size={15}
                  className="transform transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Diagnostic Simulator / Tone Matrix Preview matching Image_9 */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E8DFD5] shadow-[0_12px_36px_-4px_rgba(43,33,30,0.06),0_4px_12px_-2px_rgba(43,33,30,0.03)]">
              {/* Header inside simulator */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F0EEE8]">
                <div>
                  <span className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-[#85513f] block">
                    DIAGNOSTIC SIMULATOR
                  </span>
                  <h3 className="font-serif text-2xl text-[#2B211E] font-normal mt-0.5">
                    Tone Matrix Preview
                  </h3>
                </div>
                <span className="text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#F6F3ED] text-[#6E625D] border border-[#E8DFD5]">
                  24 Nude Shades
                </span>
              </div>

              {/* Spectrum Selection Segmented Tabs */}
              <div className="mt-6">
                <label className="text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D] block mb-2.5">
                  SELECT SPECTRUM
                </label>
                <div className="grid grid-cols-4 gap-1.5 p-1 bg-[#F6F3ED] rounded-lg border border-[#E8DFD5]">
                  {spectrums.map((spectrum) => (
                    <button
                      key={spectrum}
                      onClick={() => handleSelectSpectrum(spectrum)}
                      className={`py-2 text-xs font-sans font-semibold tracking-wider rounded-md transition-all duration-200 ${
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

              {/* Selected Shade Details & Undertone Note */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-sans text-[#2B211E]">
                  Selected:{' '}
                  <strong className="font-semibold text-[#85513f]">
                    {selectedShade.code} {selectedShade.name}
                  </strong>
                </span>
                <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#6E625D]">
                  {selectedShade.undertone.toUpperCase()}-WARM UNDERTONE
                </span>
              </div>

              {/* Shade Swatches Row (Interactive with active ring) */}
              <div className="mt-4 p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5]">
                <div className="flex items-center space-x-3 overflow-x-auto py-2 px-1">
                  {visibleShades.map((shade) => {
                    const isSelected = selectedShade.id === shade.id;
                    return (
                      <button
                        key={shade.id}
                        onClick={() => setSelectedShade(shade)}
                        aria-label={`Select shade ${shade.code} ${shade.name}`}
                        className="group relative flex flex-col items-center flex-shrink-0 focus:outline-none"
                      >
                        {/* Swatch circle with 2px offset ring as defined in design doc */}
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 shadow-inner flex items-center justify-center ${
                            isSelected
                              ? 'ring-2 ring-[#2B211E] ring-offset-2 ring-offset-white scale-110'
                              : 'hover:scale-105 border border-black/10'
                          }`}
                          style={{ backgroundColor: shade.hex }}
                        >
                          {isSelected && (
                            <Check size={14} className="text-[#2B211E] drop-shadow-sm" />
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

              {/* Recommendation Card matching Image_9 */}
              <div className="mt-6 p-4 rounded-xl bg-[#FCF9F3] border border-[#E8DFD5] flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-[#E8DFD5] flex-shrink-0">
                    <img
                      src={foundationProduct.image}
                      alt="Recommended Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-serif font-semibold text-[#2B211E]">
                      Recommended: Skin Veil N-{selectedShade.code}
                    </span>
                    <p className="text-[11px] font-sans text-[#6E625D] mt-0.5">
                      Best matched with Lip Cashmere &lsquo;Raw Sand&rsquo;
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleQuickAdd}
                  className="bg-[#2B211E] hover:bg-[#433430] text-white text-[11px] font-sans font-semibold tracking-wider uppercase px-4 py-2.5 rounded transition-all whitespace-nowrap flex-shrink-0 flex items-center space-x-1.5"
                >
                  {addedToast ? (
                    <>
                      <Check size={13} />
                      <span>Added!</span>
                    </>
                  ) : (
                    <span>Add ($48)</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
