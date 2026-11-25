import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { YouTubeCoverPlayer } from './YouTubeCoverPlayer';

export const NudeMagicSection: React.FC = () => {
  return (
    <section id="nude-is-magic" className="bg-[#FCF9F3] py-20 border-b border-[#EADED5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Split: Combined Philosophy + Single Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-3">
              <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#85513f] uppercase block">
                The Philosophy of Minimal Magic
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#2B211E] font-normal leading-[1.15] text-balance">
                Why We Believe Nude Makeup Is Magic
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-[#85513f]">
                The transformation is magic. The makeup is minimal. Freckles stay. Texture stays.
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#4E4542] leading-relaxed font-light">
              True cosmetic magic has nothing to do with hiding under opaque layers. When formulation works in harmony with living skin, the lightest, most restrained touch shifts light, warmth, and presence—leaving every natural freckle, brow hair, and authentic skin texture completely intact. Even at inches away, it reads as breathing skin, never as coverage.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/complexion-studio"
                className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-sans font-semibold tracking-[0.14em] uppercase px-6 py-3 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
              >
                <span>Explore Complexion Studio</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/shade-finder"
                className="text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors inline-flex items-center space-x-1.5 whitespace-nowrap shrink-0"
              >
                <span>Find Your Shade</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <YouTubeCoverPlayer
              videoId="3W5boDHXfww"
              title="Why We Believe Nude Makeup Is Magic — Minimal Makeup, Real Skin"
              quote="“The transformation is magic. The makeup is minimal.”"
            />
          </div>
        </div>

        {/* Unified 4-Point Editorial Breakdown */}
        <div className="mt-14 pt-10 border-t border-[#EADED5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#85513f] tabular-nums block">01</span>
            <h3 className="font-serif text-lg text-[#2B211E] font-normal">
              Maximum Shift, Minimum Product
            </h3>
            <p className="text-xs sm:text-sm text-[#4E4542] leading-relaxed font-light">
              A fraction of the pigment—just enough to soften shadow, balance undertone, and wake up natural luminosity without weight.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-[#85513f] tabular-nums block">02</span>
            <h3 className="font-serif text-lg text-[#2B211E] font-normal">
              Freckles &amp; Texture Stay
            </h3>
            <p className="text-xs sm:text-sm text-[#4E4542] leading-relaxed font-light">
              Zero heavy foundation line and zero powdery buildup—every natural freckle and living contour remains untouched in daylight.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-[#85513f] tabular-nums block">03</span>
            <h3 className="font-serif text-lg text-[#2B211E] font-normal">
              Tonal Harmony Over Coverage
            </h3>
            <p className="text-xs sm:text-sm text-[#4E4542] leading-relaxed font-light">
              Micro-translucent pigments echo your own undertones, bringing eyes, cheekbones, and lips into effortless focus.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-[#85513f] tabular-nums block">04</span>
            <h3 className="font-serif text-lg text-[#2B211E] font-normal">
              Still Unmistakably You
            </h3>
            <p className="text-xs sm:text-sm text-[#4E4542] leading-relaxed font-light">
              Invisible craft, visible presence: never replacing your face with a mask, only revealing the most radiant version of yourself.
            </p>
          </div>
        </div>

        {/* Plain AI-Generated Demonstration Disclosure */}
        <div className="mt-10 pt-6 border-t border-[#EADED5]">
          <p className="text-xs font-sans text-[#5C4D47] leading-relaxed">
            <strong className="font-semibold text-[#2B211E]">Disclosure:</strong>{' '}
            The video shown in this section is AI-generated and provided strictly for demonstration purposes to illustrate our minimal nude makeup philosophy.
          </p>
        </div>
      </div>
    </section>
  );
};
