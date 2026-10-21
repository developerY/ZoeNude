import React, { useState } from 'react';
import { PILLARS } from '../data/cosmeticsData';
import { Pillar } from '../types';
import { Sparkles, Check, ArrowRight, Feather, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ManifestoPage: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<Pillar>(PILLARS[0]);

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      {/* Manifesto Page Banner */}
      <section className="bg-[#FAF6F0] py-16 sm:py-20 border-b border-[#E8DFD5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
            <Feather size={14} />
            <span>FOUNDING ETHOS & PHILOSOPHY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal max-w-3xl mx-auto leading-tight">
            The Zoe Manifesto: Five Pillars of Naked Grace
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#4E4542] max-w-2xl mx-auto leading-relaxed font-light">
            Rooted in the ancient Greek <em>Zoe</em> (&zeta;&omega;&eta;)—the vibrant essence of living breath.
            We reject the mask to celebrate your living, breathing skin structure.
          </p>

          {/* Official Brand Crest Banner */}
          <div className="pt-6 max-w-md mx-auto">
            <div className="rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-sm bg-[#f5ede2]">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_bj462jbj462jbj46_fa1cb5df.jpeg"
                alt="ZoeNude Cosmetics Brand Crest"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars Full Exhibition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-[#85513f] block mb-1">
              THE DOCTRINE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              Five Foundational Truths
            </h2>
          </div>
          <p className="text-xs font-sans text-[#6E625D] max-w-md">
            Click on any pillar to inspect its formulation standard, physiological rationale, and dermatological integrity.
          </p>
        </div>

        {/* Pillars Grid matching Image_8 and Image_9 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Pillar 01 */}
          <div
            onClick={() => setSelectedPillar(PILLARS[0])}
            className={`lg:col-span-7 rounded-2xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              selectedPillar.number === '01'
                ? 'bg-white border-[#2B211E] shadow-xl ring-1 ring-[#2B211E]'
                : 'bg-white border-[#E8DFD5] hover:border-[#85513f] shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D]">
                  {PILLARS[0].number} / {PILLARS[0].tag}
                </span>
                {PILLARS[0].badge && (
                  <span className="px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase rounded-full bg-[#EAF2EC] text-[#2F6B43] border border-[#d2e3d7]">
                    {PILLARS[0].badge}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
                    {PILLARS[0].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed">
                    {PILLARS[0].description}
                  </p>
                  <p className="text-xs text-[#6E625D] italic pt-2 border-t border-[#F0EEE8]">
                    {PILLARS[0].extendedStory}
                  </p>
                </div>

                <div className="sm:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5]">
                  <img
                    src={PILLARS[0].image}
                    alt={PILLARS[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 02 */}
          <div
            onClick={() => setSelectedPillar(PILLARS[1])}
            className={`lg:col-span-5 rounded-2xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              selectedPillar.number === '02'
                ? 'bg-white border-[#2B211E] shadow-xl ring-1 ring-[#2B211E]'
                : 'bg-white border-[#E8DFD5] hover:border-[#85513f] shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D]">
                  {PILLARS[1].number} · {PILLARS[1].tag}
                </span>
                {PILLARS[1].badge && (
                  <span className="px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase rounded-full bg-[#f4ece7] text-[#85513f]">
                    {PILLARS[1].badge}
                  </span>
                )}
              </div>

              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] mb-4">
                <img
                  src={PILLARS[1].image}
                  alt={PILLARS[1].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-[#2B211E] mb-2">
                {PILLARS[1].title}
              </h3>
              <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
                {PILLARS[1].description}
              </p>
            </div>
          </div>

          {/* Pillar 03 */}
          <div
            onClick={() => setSelectedPillar(PILLARS[2])}
            className={`lg:col-span-4 rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              selectedPillar.number === '03'
                ? 'bg-white border-[#2B211E] shadow-xl ring-1 ring-[#2B211E]'
                : 'bg-white border-[#E8DFD5] hover:border-[#85513f] shadow-xs'
            }`}
          >
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-[#6E625D] block mb-2">
                {PILLARS[2].number} · {PILLARS[2].tag}
              </span>
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] mb-4">
                <img
                  src={PILLARS[2].image}
                  alt={PILLARS[2].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-lg text-[#2B211E] mb-2">
                {PILLARS[2].title}
              </h3>
              <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
                {PILLARS[2].description}
              </p>
            </div>
          </div>

          {/* Pillar 04 */}
          <div
            onClick={() => setSelectedPillar(PILLARS[3])}
            className={`lg:col-span-4 rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              selectedPillar.number === '04'
                ? 'bg-white border-[#2B211E] shadow-xl ring-1 ring-[#2B211E]'
                : 'bg-white border-[#E8DFD5] hover:border-[#85513f] shadow-xs'
            }`}
          >
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-[#6E625D] block mb-2">
                {PILLARS[3].number} · {PILLARS[3].tag}
              </span>
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] mb-4">
                <img
                  src={PILLARS[3].image}
                  alt={PILLARS[3].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-lg text-[#2B211E] mb-2">
                {PILLARS[3].title}
              </h3>
              <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
                {PILLARS[3].description}
              </p>
            </div>
          </div>

          {/* Pillar 05 */}
          <div
            onClick={() => setSelectedPillar(PILLARS[4])}
            className={`lg:col-span-4 rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between bg-[#140C09] text-white ${
              selectedPillar.number === '05'
                ? 'border-[#d8a48f] shadow-2xl ring-2 ring-[#d8a48f]'
                : 'border-[#2b211e] hover:border-[#85513f]'
            }`}
          >
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-[#d8a48f] block mb-2">
                {PILLARS[4].number} · {PILLARS[4].tag}
              </span>
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#231713] border border-[#3a2822] mb-4">
                <img
                  src={PILLARS[4].image}
                  alt={PILLARS[4].title}
                  className="w-full h-full object-cover filter brightness-95"
                />
              </div>
              <h3 className="font-serif text-lg text-[#FCF9F3] mb-2">
                {PILLARS[4].title}
              </h3>
              <p className="font-sans text-xs text-[#dcdad4] leading-relaxed">
                {PILLARS[4].description}
              </p>
            </div>
          </div>
        </div>

        {/* Selected Pillar Detailed Rationale */}
        <div className="mt-14 bg-white rounded-2xl p-8 sm:p-10 border border-[#E8DFD5] shadow-sm">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#85513f] block">
              DETAILED PERSPECTIVE · PILLAR {selectedPillar.number}
            </span>
            <h3 className="font-serif text-3xl text-[#2B211E]">
              {selectedPillar.title}
            </h3>
            <p className="font-sans text-sm text-[#4E4542] leading-relaxed">
              {selectedPillar.extendedStory}
            </p>

            <div className="pt-6 border-t border-[#F0EEE8] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-[#2F6B43]">
                <ShieldCheck size={16} />
                <span>100% Leaping Bunny Certified Vegan & Biomimetic Squalane Base</span>
              </div>
              <Link
                to="/shop"
                className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold px-6 py-2.5 rounded tracking-wider uppercase transition-colors"
              >
                Experience the Formulations →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
