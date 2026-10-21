import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/cosmeticsData';
import { Star, Sparkles, Check, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TransformationsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      {/* Page Banner */}
      <section className="bg-[#FAF6F0] py-14 sm:py-20 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
            <Sparkles size={14} />
            <span>AUTHENTIC TRANSFORMATIONS</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal">
            Still You. In Every Light.
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#4E4542] max-w-xl mx-auto leading-relaxed">
            Real stories from clients who replaced heavy silicone masking with breathable biomimetic living skin harmony.
          </p>
          <div className="pt-3">
            <Link
              to="/complexion-studio"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#85513f] hover:text-[#2B211E] bg-[#FAF0E6] px-4 py-2 rounded-full border border-[#d8a48f]/40 transition-colors"
            >
              <span>Explore Interactive Before/After Studio & Shade Finder</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-[#E8DFD5] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#85513f] text-[#85513f]"
                    />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#4E4542] italic">
                  {t.quote}
                </p>

                {t.skinType && (
                  <span className="inline-block text-[10px] uppercase font-sans font-semibold text-[#85513f] bg-[#f4ece7] px-2.5 py-1 rounded-full border border-[#e8dfd5]">
                    Skin: {t.skinType}
                  </span>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-[#F0EEE8] flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E8DFD5] flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-sm text-[#2B211E]">
                    {t.name}
                  </h3>
                  <p className="font-sans text-xs text-[#6E625D]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Science & Comparative Matrix */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8DFD5] shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#85513f] block">
              CLINICAL BIOMIMETICS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              Living Skin vs Traditional Masking
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6E625D]">
              A side-by-side comparison of physiological behavior on epidermal tissue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#FCF9F3] border border-[#E8DFD5] space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#93000a] block">
                Standard Polymer Foundation
              </span>
              <ul className="space-y-3 text-xs font-sans text-[#4E4542]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#93000a] font-bold">✕</span>
                  <span><strong>Titanium dioxide opacity:</strong> creates a flat, chalky mask that hides bone structure and smiles.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#93000a] font-bold">✕</span>
                  <span><strong>Volatile silicones:</strong> evaporate after 2 hours, leaving concentrated powder clinging to fine crevices.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#93000a] font-bold">✕</span>
                  <span><strong>Occlusive film:</strong> blocks natural perspiration, triggering midday sebum breakthrough and oxidization.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#85513f] space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#2F6B43] block">
                ZoeNude Biomimetic Formula
              </span>
              <ul className="space-y-3 text-xs font-sans text-[#2B211E]">
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                  <span><strong>Bio-identical squalane:</strong> dissolves onto contact, fusing with the living lipid mantle with zero white cast.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                  <span><strong>Tri-ceramide complex:</strong> reinforces epidermal moisture retention over 16 continuous hours.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                  <span><strong>Micro-ground mineral oxides:</strong> let authentic freckles, expressions, and living skin luminescence breathe.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/shade-finder"
              className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold px-8 py-3.5 rounded tracking-wider uppercase transition-colors inline-flex items-center space-x-2"
            >
              <span>Find Your Living Match</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
