import React, { useState } from 'react';
import { PILLARS } from '../data/cosmeticsData';
import { Pillar } from '../types';
import { ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';

interface PillarsSectionProps {
  onOpenManifesto: () => void;
  onSelectPillar?: (pillar: Pillar) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  onOpenManifesto,
  onSelectPillar,
}) => {
  const [activePillarModal, setActivePillarModal] = useState<Pillar | null>(null);

  const handleCardClick = (pillar: Pillar) => {
    setActivePillarModal(pillar);
    if (onSelectPillar) onSelectPillar(pillar);
  };

  return (
    <section className="bg-[#FCF9F3] py-20 border-b border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#6E625D] uppercase block">
              THE ZOE MANIFESTO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#2B211E] font-normal">
              Five Pillars of Naked Grace
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#4E4542]">
              We reject the mask. Every formulation is tuned to celebrate your living,
              breathing skin structure, creating the illusion of effortless perfection.
            </p>
          </div>
        </div>

        {/* 5 Pillars Grid matching Image_9 exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: 01 / The Flagship Concept (Takes 7 cols on lg, horizontal split with lipstick photo) */}
          <div
            onClick={() => handleCardClick(PILLARS[0])}
            className="lg:col-span-7 bg-[#FFFFFF] rounded-xl p-6 sm:p-8 border border-[#E8DFD5] hover:border-[#85513f] transition-all duration-300 group cursor-pointer shadow-[0_4px_20px_rgba(43,33,30,0.03)] hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D]">
                  {PILLARS[0].number} / {PILLARS[0].tag}
                </span>
                {PILLARS[0].badge && (
                  <span className="px-2.5 py-0.5 text-[10px] font-sans font-semibold tracking-[0.1em] uppercase rounded-full bg-[#EAF2EC] text-[#2F6B43] border border-[#d2e3d7]">
                    {PILLARS[0].badge}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E] font-normal leading-tight group-hover:text-[#85513f] transition-colors">
                    {PILLARS[0].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#4E4542]">
                    {PILLARS[0].description}
                  </p>
                </div>

                <div className="sm:col-span-5 aspect-[4/3] rounded-lg overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5]">
                  <img
                    src={PILLARS[0].image}
                    alt={PILLARS[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0EEE8] flex items-center justify-between text-[11px] font-sans text-[#85513f] font-semibold">
              <span className="flex items-center space-x-1">
                <Sparkles size={12} />
                <span>Read Philosophy Note</span>
              </span>
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: 02 · IDENTITY (Takes 5 cols on lg, vertical layout with radiant skin portrait) */}
          <div
            onClick={() => handleCardClick(PILLARS[1])}
            className="lg:col-span-5 bg-[#FFFFFF] rounded-xl p-6 sm:p-7 border border-[#E8DFD5] hover:border-[#85513f] transition-all duration-300 group cursor-pointer shadow-[0_4px_20px_rgba(43,33,30,0.03)] hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D]">
                  {PILLARS[1].number} · {PILLARS[1].tag}
                </span>
                {PILLARS[1].badge && (
                  <span className="px-2.5 py-0.5 text-[10px] font-sans font-semibold tracking-[0.1em] uppercase rounded-full bg-[#f4ece7] text-[#85513f] border border-[#e8dfd5]">
                    {PILLARS[1].badge}
                  </span>
                )}
              </div>

              {/* Portrait Photo at top */}
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] mb-5">
                <img
                  src={PILLARS[1].image}
                  alt={PILLARS[1].title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-[#2B211E] font-normal leading-tight group-hover:text-[#85513f] transition-colors mb-2">
                {PILLARS[1].title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-[#4E4542]">
                {PILLARS[1].description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F0EEE8] flex items-center justify-between text-[11px] font-sans text-[#85513f] font-semibold">
              <span>Customer-First Creed</span>
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: 03 · VERSATILITY (Takes 4 cols on lg) */}
          <div
            onClick={() => handleCardClick(PILLARS[2])}
            className="lg:col-span-4 bg-[#FFFFFF] rounded-xl p-6 border border-[#E8DFD5] hover:border-[#85513f] transition-all duration-300 group cursor-pointer shadow-[0_4px_20px_rgba(43,33,30,0.03)] hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D] block mb-3">
                {PILLARS[2].number} · {PILLARS[2].tag}
              </span>

              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] mb-4">
                <img
                  src={PILLARS[2].image}
                  alt={PILLARS[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-[#2B211E] font-normal leading-tight group-hover:text-[#85513f] transition-colors mb-2">
                {PILLARS[2].title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-[#4E4542]">
                {PILLARS[2].description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F0EEE8] flex items-center justify-between text-[11px] font-sans text-[#6E625D]">
              <span className="font-medium text-[#85513f]">Restorative Dermatology</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Card 4: 04 · THE PROMISE (Takes 4 cols on lg) */}
          <div
            onClick={() => handleCardClick(PILLARS[3])}
            className="lg:col-span-4 bg-[#FFFFFF] rounded-xl p-6 border border-[#E8DFD5] hover:border-[#85513f] transition-all duration-300 group cursor-pointer shadow-[0_4px_20px_rgba(43,33,30,0.03)] hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D] block mb-3">
                {PILLARS[3].number} · {PILLARS[3].tag}
              </span>

              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] mb-4">
                <img
                  src={PILLARS[3].image}
                  alt={PILLARS[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-[#2B211E] font-normal leading-tight group-hover:text-[#85513f] transition-colors mb-2">
                {PILLARS[3].title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-[#4E4542]">
                {PILLARS[3].description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F0EEE8] flex items-center justify-between text-[11px] font-sans text-[#6E625D]">
              <span className="font-medium text-[#85513f]">3-Minute Morning Routine</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Card 5: 05 · ZOE ("LIFE") (Takes 4 cols on lg - Distinctive Dark Luxury Card matching Image_9) */}
          <div
            onClick={() => handleCardClick(PILLARS[4])}
            className="lg:col-span-4 bg-[#140C09] text-white rounded-xl p-6 border border-[#2b211e] hover:border-[#85513f] transition-all duration-300 group cursor-pointer shadow-[0_12px_30px_rgba(20,12,9,0.25)] hover:shadow-2xl flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#d8a48f] block mb-3">
                {PILLARS[4].number} · {PILLARS[4].tag}
              </span>

              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#231713] border border-[#3a2822] mb-4">
                <img
                  src={PILLARS[4].image}
                  alt={PILLARS[4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-[#FCF9F3] font-normal leading-tight group-hover:text-[#d8a48f] transition-colors mb-2">
                {PILLARS[4].title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-[#dcdad4]">
                {PILLARS[4].description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#2b211e] flex items-center justify-between text-[11px] font-sans text-[#d8a48f]">
              <span>Circular Vegan Glass</span>
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Bottom link to view full manifesto modal */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenManifesto}
            className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.16em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors group"
          >
            <BookOpen size={14} className="text-[#85513f]" />
            <span className="border-b border-[#2B211E] pb-0.5 group-hover:border-[#85513f]">
              Explore the Complete Zoe Philosophy Journal & Formulation Ethics
            </span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Pillar Detail Modal */}
      {activePillarModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActivePillarModal(null)}
        >
          <div
            className="bg-[#FFFFFF] max-w-xl w-full rounded-2xl p-7 sm:p-9 shadow-2xl border border-[#E8DFD5] relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePillarModal(null)}
              className="absolute top-5 right-5 text-[#6E625D] hover:text-[#2B211E] p-1 text-lg font-serif"
              aria-label="Close modal"
            >
              ✕
            </button>

            <span className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-[#85513f] block mb-2">
              Pillar {activePillarModal.number} · {activePillarModal.tag}
            </span>

            <h3 className="font-serif text-3xl text-[#2B211E] mb-4 font-normal">
              {activePillarModal.title}
            </h3>

            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#FAF6F0] mb-5 border border-[#E8DFD5]">
              <img
                src={activePillarModal.image}
                alt={activePillarModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-sans text-sm leading-relaxed text-[#4E4542] mb-4">
              {activePillarModal.description}
            </p>

            <div className="bg-[#FCF9F3] p-4 rounded-xl border border-[#E8DFD5] mb-6">
              <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#6E625D] block mb-1">
                Atelier Formulation Standard
              </span>
              <p className="font-sans text-xs text-[#2B211E] leading-relaxed italic">
                &ldquo;{activePillarModal.extendedStory}&rdquo;
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActivePillarModal(null)}
                className="bg-[#2B211E] text-white text-xs font-semibold px-6 py-2.5 rounded tracking-wider uppercase hover:bg-[#433430] transition-colors"
              >
                Close Note
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
