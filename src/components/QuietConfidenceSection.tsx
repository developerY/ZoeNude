import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface QuietConfidenceSectionProps {
  onShopCollection: () => void;
  onOpenQuiz: () => void;
}

export const QuietConfidenceSection: React.FC<QuietConfidenceSectionProps> = ({
  onShopCollection,
  onOpenQuiz,
}) => {
  return (
    <section className="bg-[#140C09] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      {/* Subtle organic light reflections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3a1b0d] rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        <span className="inline-flex items-center space-x-1.5 text-[11px] font-sans font-semibold tracking-[0.24em] uppercase text-[#d8a48f]">
          <Sparkles size={13} />
          <span>CELEBRATE YOUR NATURAL BEAUTY</span>
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FCF9F3] font-normal tracking-[-0.01em]">
          Beautifully You. Naturally Free.
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#dcdad4] max-w-2xl mx-auto leading-relaxed font-light">
          Cosmetics should never make someone feel that their natural self isn&rsquo;t enough. They should make you feel even more comfortable, confident, and free to be yourself.
        </p>

        {/* 4 Affirmations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#d8a48f] block">Mantra 01</span>
            <p className="text-xs text-[#FAF6F0] font-serif leading-snug">Feel free. Feel beautiful. Feel like you.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#d8a48f] block">Mantra 02</span>
            <p className="text-xs text-[#FAF6F0] font-serif leading-snug">Nothing to hide. Everything to love.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#d8a48f] block">Mantra 03</span>
            <p className="text-xs text-[#FAF6F0] font-serif leading-snug">Enhance your beauty. Never hide it.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#d8a48f] block">Mantra 04</span>
            <p className="text-xs text-[#FAF6F0] font-serif leading-snug">Less hiding. More shining.</p>
          </div>
        </div>

        {/* Action Buttons matching Image_9 */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onShopCollection}
            className="bg-[#FCF9F3] hover:bg-white text-[#140C09] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-8 py-4 rounded-[4px] shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            SHOP THE COLLECTION
          </button>

          <button
            onClick={onOpenQuiz}
            className="bg-transparent hover:bg-white/10 text-[#FCF9F3] border border-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-8 py-4 rounded-[4px] transition-all duration-200"
          >
            TAKE SHADE QUIZ
          </button>
        </div>
      </div>
    </section>
  );
};
