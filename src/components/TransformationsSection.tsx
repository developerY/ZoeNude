import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/cosmeticsData';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TransformationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'comparisons'>('testimonials');

  return (
    <section className="bg-[#FAF6F0] py-20 border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block mb-2">
            AUTHENTIC TRANSFORMATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#2B211E] font-normal mb-3">
            Still You. In Every Light.
          </h2>
          <p className="font-sans text-sm text-[#4E4542]">
            Hear from clients who traded heavy coverage for living skin harmony.
          </p>
        </div>

        {/* 3 Testimonial Cards matching Image_9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E8DFD5] shadow-[0_4px_24px_rgba(43,33,30,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="fill-[#85513f] text-[#85513f]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#4E4542] italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="mt-8 pt-4 border-t border-[#F0EEE8] flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E8DFD5] flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-sm text-[#2B211E] leading-snug">
                    {testimonial.name}
                  </h3>
                  <p className="font-sans text-[11px] text-[#6E625D]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skin Comparison callout: Living Skin vs The Mask */}
        <div className="mt-12 bg-[#FCF9F3] p-6 rounded-2xl border border-[#E8DFD5] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <span className="text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-[#85513f] flex items-center space-x-1.5">
              <Sparkles size={12} />
              <span>THE LIVING SKIN DIFFERENCE</span>
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#2B211E]">
              Why Biomimetic Lipids Outperform Traditional Foundations
            </h3>
            <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
              Standard foundations suspend pigments in synthetic silicones and heavy powders that sit atop the skin, settling into pores and exaggerating dry patches. ZoeNude suspends micro-ground mineral pigments in plant-derived bio-identical squalane that fuses directly with your lipid mantle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white border border-[#E8DFD5] space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#93000a]">
                Traditional Makeup
              </span>
              <p className="text-[#6E625D] text-[11px] leading-snug">
                • Heavy titanium white cast<br />
                • Clogs pores & suffocates skin<br />
                • Cracks along smile lines<br />
                • Flat, artificial mask look
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F3ED] border border-[#d2c3c0] space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#2F6B43]">
                ZoeNude Biomimetic
              </span>
              <p className="text-[#2B211E] text-[11px] leading-snug">
                • Zero titanium chalkiness<br />
                • 100% breathable oxygenation<br />
                • Stretches with every expression<br />
                • Luminous unmasked radiance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
