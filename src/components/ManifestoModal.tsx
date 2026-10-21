import React from 'react';
import { X, Sparkles, Check, Heart, Feather } from 'lucide-react';
import { PILLARS } from '../data/cosmeticsData';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuiz: () => void;
}

export const ManifestoModal: React.FC<ManifestoModalProps> = ({
  isOpen,
  onClose,
  onOpenQuiz,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FCF9F3] max-w-3xl w-full rounded-2xl shadow-2xl border border-[#E8DFD5] overflow-hidden flex flex-col max-h-[90vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="p-6 bg-[#FAF6F0] border-b border-[#E8DFD5] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Feather size={16} className="text-[#85513f]" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#85513f]">
              ATELIER PHILOSOPHY & MANIFESTO
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#6E625D] hover:text-[#2B211E] p-1.5 focus:outline-none"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          {/* Brand Logo & Origin Header using new Venus Cover Art */}
          <div className="text-center space-y-3 pb-6 border-b border-[#E8DFD5]">
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-md mb-3 bg-[#f5ede2]">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_bj462jbj462jbj46_fa1cb5df.jpeg"
                alt="ZoeNude Cosmetics Cover Art & Crest"
                className="w-full h-auto object-cover"
              />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
              Beauty, Without the Evidence.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4E4542] max-w-xl mx-auto leading-relaxed">
              From the ancient Greek <em>Zoe</em> (&zeta;&omega;&eta;), meaning vitality, life, and living breath. We believe true luxury cosmetics should never mask your humanity.
            </p>
          </div>

          {/* The 5 Pillars of Naked Grace from Image_8 and Image_9 */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#2B211E]">
              The Five Pillars of Naked Grace
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {PILLARS.map((p) => (
                <div
                  key={p.number}
                  className="p-5 rounded-xl bg-white border border-[#E8DFD5] shadow-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.16em] text-[#85513f]">
                      Pillar {p.number} · {p.tag}
                    </span>
                    {p.badge && (
                      <span className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#f4ece7] text-[#85513f]">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-lg text-[#2B211E] font-medium">
                    {p.title}
                  </h4>
                  <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
                    {p.description}
                  </p>
                  <p className="font-sans text-[11px] text-[#6E625D] italic pt-1 border-t border-[#F0EEE8]">
                    {p.extendedStory}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Atelier Commitments */}
          <div className="bg-[#FAF6F0] p-6 rounded-xl border border-[#E8DFD5] space-y-3">
            <h4 className="font-serif text-lg text-[#2B211E]">
              Our Biomimetic Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#4E4542]">
              <div className="flex items-center space-x-2">
                <Check size={14} className="text-[#2F6B43]" />
                <span>94% Bio-Identical Squalane Base</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={14} className="text-[#2F6B43]" />
                <span>Zero Titanium Dioxide White-Cast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={14} className="text-[#2F6B43]" />
                <span>100% Leaping Bunny Certified Vegan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={14} className="text-[#2F6B43]" />
                <span>Italian Refillable Frosted Glass</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#FAF6F0] border-t border-[#E8DFD5] flex items-center justify-between">
          <span className="text-xs font-sans text-[#6E625D]">
            Curated in small artisanal batches.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenQuiz();
            }}
            className="bg-[#2B211E] text-white text-xs font-sans font-semibold tracking-wider uppercase px-6 py-3 rounded hover:bg-[#433430] transition-colors"
          >
            Find My True Match →
          </button>
        </div>
      </div>
    </div>
  );
};
