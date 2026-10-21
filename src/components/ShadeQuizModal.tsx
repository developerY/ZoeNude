import React, { useState } from 'react';
import { ALL_SHADES, PRODUCTS } from '../data/cosmeticsData';
import { Shade, Product } from '../types';
import { X, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';

interface ShadeQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, shade: Shade) => void;
}

export const ShadeQuizModal: React.FC<ShadeQuizModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [depth, setDepth] = useState<'Fair' | 'Light-Med' | 'Tan' | 'Deep'>('Light-Med');
  const [undertone, setUndertone] = useState<'Warm' | 'Neutral' | 'Cool' | 'Olive'>('Neutral');
  const [finish, setFinish] = useState<'Radiant' | 'Satin' | 'Velvet'>('Radiant');
  const [addedPair, setAddedPair] = useState(false);

  if (!isOpen) return null;

  // Determine matched shade based on choices
  const matchedShade = ALL_SHADES.find(
    (s) => s.spectrum === depth && s.undertone === undertone
  ) || ALL_SHADES.find((s) => s.spectrum === depth) || ALL_SHADES[4];

  const foundationProduct = PRODUCTS[0]; // Skin Veil
  const lipProduct = PRODUCTS[1]; // Lip Cashmere

  const handleFinishAndAdd = () => {
    onAddToCart(foundationProduct, matchedShade);
    onAddToCart(lipProduct, lipProduct.shades[0]);
    setAddedPair(true);
    setTimeout(() => {
      setAddedPair(false);
      onClose();
    }, 1800);
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FCF9F3] max-w-2xl w-full rounded-2xl shadow-2xl border border-[#E8DFD5] overflow-hidden flex flex-col justify-between animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-[#FAF6F0] border-b border-[#E8DFD5] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles size={16} className="text-[#85513f]" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#85513f]">
              ADAPTIVE SKIN INTELLIGENCE · DIAGNOSTIC
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#6E625D] hover:text-[#2B211E] p-1.5 focus:outline-none"
            aria-label="Close quiz"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#E8DFD5] h-1">
          <div
            className="bg-[#2B211E] h-1 transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>

        {/* Quiz Content Body */}
        <div className="p-6 sm:p-8 flex-1">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-sans font-semibold text-[#85513f] uppercase tracking-wider block mb-1">
                  Step 1 of 3
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E] font-normal">
                  What is your natural skin depth spectrum?
                </h3>
                <p className="font-sans text-xs text-[#6E625D] mt-1">
                  Think of your bare jawline in natural morning daylight.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    id: 'Fair',
                    title: 'Fair Complexion',
                    desc: 'Porcelain to ivory tones. Very light pigment density.',
                    color: '#F7E7D9',
                  },
                  {
                    id: 'Light-Med',
                    title: 'Light-Medium Tone',
                    desc: 'Alabaster beige to golden wheat. Most versatile spectrum.',
                    color: '#DDB697',
                  },
                  {
                    id: 'Tan',
                    title: 'Tan / Sunlit Ochre',
                    desc: 'Rich amber, toasted caramel, and sun-kissed terracotta.',
                    color: '#AA7B51',
                  },
                  {
                    id: 'Deep',
                    title: 'Deep Obsidian & Cocoa',
                    desc: 'Rich chestnut, espresso, and luminous deep bio-lipid undertones.',
                    color: '#5E351B',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setDepth(item.id as any);
                      setCurrentStep(2);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center space-x-3.5 group ${
                      depth === item.id
                        ? 'bg-white border-[#2B211E] ring-1 ring-[#2B211E] shadow-sm'
                        : 'bg-white border-[#E8DFD5] hover:border-[#85513f]'
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full border border-black/10 flex-shrink-0 shadow-inner"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <h4 className="font-serif text-base text-[#2B211E] group-hover:text-[#85513f] transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[11px] text-[#6E625D] leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-sans font-semibold text-[#85513f] uppercase tracking-wider block mb-1">
                  Step 2 of 3
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E] font-normal">
                  How does your skin harmonize with the sun & jewelry?
                </h3>
                <p className="font-sans text-xs text-[#6E625D] mt-1">
                  Determines your subcutaneous vascular reflection (undertone).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    id: 'Warm',
                    title: 'Warm Golden & Peach',
                    desc: 'Gold jewelry glows against your skin. You tan easily with peachy warmth.',
                  },
                  {
                    id: 'Neutral',
                    title: 'Neutral Living Balance',
                    desc: 'Both silver and gold flatter you. Redness and yellow tones are in equilibrium.',
                  },
                  {
                    id: 'Cool',
                    title: 'Cool Rosy & Alabaster',
                    desc: 'Silver jewelry looks luminous. Skin burns initially or flushes rosy-pink.',
                  },
                  {
                    id: 'Olive',
                    title: 'Muted Neutral Olive',
                    desc: 'Subtle greenish-golden cast with ash or bronze balance in sunlight.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setUndertone(item.id as any);
                      setCurrentStep(3);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all group ${
                      undertone === item.id
                        ? 'bg-white border-[#2B211E] ring-1 ring-[#2B211E] shadow-sm'
                        : 'bg-white border-[#E8DFD5] hover:border-[#85513f]'
                    }`}
                  >
                    <h4 className="font-serif text-base text-[#2B211E] group-hover:text-[#85513f] transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] text-[#6E625D] leading-snug mt-1">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-sans font-semibold text-[#85513f] uppercase tracking-wider block mb-1">
                  Step 3 of 3
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E] font-normal">
                  What skin finish do you celebrate?
                </h3>
                <p className="font-sans text-xs text-[#6E625D] mt-1">
                  How light should bounce off your cheekbones and temples.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {[
                  {
                    id: 'Radiant',
                    title: 'Lit-From-Within Dew',
                    desc: 'Glass-skin hydration mimicking fresh post-facial skin.',
                  },
                  {
                    id: 'Satin',
                    title: 'Living Skin Satin',
                    desc: 'Undetectable biological skin luster with natural movement.',
                  },
                  {
                    id: 'Velvet',
                    title: 'Soft-Focus Velvet',
                    desc: 'Diffuse shine while preserving three-dimensional life.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFinish(item.id as any);
                      setCurrentStep(4);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all group ${
                      finish === item.id
                        ? 'bg-white border-[#2B211E] ring-1 ring-[#2B211E] shadow-sm'
                        : 'bg-white border-[#E8DFD5] hover:border-[#85513f]'
                    }`}
                  >
                    <h4 className="font-serif text-base text-[#2B211E] group-hover:text-[#85513f] transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] text-[#6E625D] leading-snug mt-1">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-md mx-auto">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EAF2EC] text-[#2F6B43] text-[10px] font-sans font-semibold uppercase tracking-wider mb-2">
                  <Check size={12} />
                  <span>100% Biomimetic Match Found</span>
                </span>
                <h3 className="font-serif text-3xl text-[#2B211E]">
                  Your Living Shade Profile
                </h3>
                <p className="font-sans text-xs text-[#6E625D] mt-1">
                  Calibrated for {depth} depth with {undertone} undertones.
                </p>
              </div>

              {/* Match Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5]">
                  <div
                    className="w-16 h-16 rounded-full shadow-inner border-2 border-white ring-2 ring-[#2B211E] mb-3"
                    style={{ backgroundColor: matchedShade.hex }}
                  />
                  <span className="text-xs font-serif font-bold text-[#2B211E]">
                    Shade {matchedShade.code} · {matchedShade.name}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#85513f] mt-0.5">
                    {matchedShade.undertone} Undertone
                  </span>
                  <p className="text-[10px] text-[#6E625D] mt-2 italic leading-tight">
                    &ldquo;{matchedShade.description}&rdquo;
                  </p>
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <h4 className="font-serif text-lg text-[#2B211E]">
                    Recommended Atelier Duo:
                  </h4>
                  <ul className="space-y-2 text-xs font-sans text-[#4E4542]">
                    <li className="flex items-center justify-between p-2 rounded bg-[#FCF9F3] border border-[#E8DFD5]">
                      <span>1. Skin Veil Tint (Shade {matchedShade.code})</span>
                      <strong className="text-[#2B211E]">$48</strong>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#FCF9F3] border border-[#E8DFD5]">
                      <span>2. Lip Cashmere in &lsquo;Raw Sand&rsquo;</span>
                      <strong className="text-[#2B211E]">$36</strong>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#EAF2EC] text-[#2F6B43] border border-[#d2e3d7]">
                      <span>3. Trio Sample Card (Adjacent shades)</span>
                      <strong>FREE</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="p-6 bg-[#FAF6F0] border-t border-[#E8DFD5] flex items-center justify-between">
          {currentStep > 1 && currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="text-xs font-sans font-semibold uppercase tracking-wider text-[#6E625D] hover:text-[#2B211E]"
            >
              ← Back
            </button>
          ) : currentStep === 4 ? (
            <button
              onClick={handleReset}
              className="text-xs font-sans font-semibold uppercase tracking-wider text-[#6E625D] hover:text-[#2B211E] flex items-center space-x-1"
            >
              <RotateCcw size={12} />
              <span>Retake Quiz</span>
            </button>
          ) : (
            <span className="text-[11px] font-sans text-[#6E625D]">
              Under 90 seconds diagnostic
            </span>
          )}

          {currentStep === 4 ? (
            <button
              onClick={handleFinishAndAdd}
              className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-sans font-semibold tracking-wider uppercase px-6 py-3 rounded shadow transition-all flex items-center space-x-2"
            >
              {addedPair ? (
                <>
                  <Check size={14} />
                  <span>Added Match Duo to Bag!</span>
                </>
              ) : (
                <>
                  <span>Add Recommended Duo ($84)</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}
              className="bg-[#2B211E] text-white text-xs font-sans font-semibold tracking-wider uppercase px-6 py-3 rounded hover:bg-[#433430] transition-colors"
            >
              Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
