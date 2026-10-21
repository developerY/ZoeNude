import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenManifesto: () => void;
  onOpenQuiz: () => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenManifesto,
  onOpenQuiz,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#FAF6F0] border-t border-[#E8DFD5] text-[#2B211E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#E8DFD5]">
          {/* Newsletter Section: Join The Circle (Takes 5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-8">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block">
              NEWSLETTER
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E] font-normal">
              Join The Circle
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed">
              Receive curated skin narratives, private bespoke consultations, and first
              allocation to small-batch formulations.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2">
              {subscribed ? (
                <div className="p-3.5 bg-[#EAF2EC] rounded-md border border-[#d2e3d7] flex items-center space-x-2 text-xs text-[#2F6B43]">
                  <Check size={16} />
                  <span>Welcome to the Circle. Check your inbox for your 15% bespoke code.</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white border border-[#E8DFD5] rounded px-4 py-3 text-xs font-sans placeholder-[#807571] focus:outline-none focus:border-[#2B211E]"
                  />
                  <button
                    type="submit"
                    className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-sans font-semibold tracking-wider uppercase px-6 py-3 rounded transition-colors whitespace-nowrap"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Nav Columns: Philosophy, Client Care, Connect (Takes 7 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Philosophy */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D]">
                PHILOSOPHY
              </h4>
              <ul className="space-y-2 text-xs font-sans text-[#4E4542]">
                <li>
                  <button onClick={onOpenManifesto} className="hover:text-[#2B211E] text-left transition-colors">
                    The Manifesto
                  </button>
                </li>
                <li>
                  <button onClick={onOpenManifesto} className="hover:text-[#2B211E] text-left transition-colors">
                    Clean Biomimetic Base
                  </button>
                </li>
                <li>
                  <button onClick={onOpenQuiz} className="hover:text-[#2B211E] text-left transition-colors">
                    True Skin Matching
                  </button>
                </li>
                <li>
                  <button onClick={onOpenManifesto} className="hover:text-[#2B211E] text-left transition-colors">
                    Refillable Glass
                  </button>
                </li>
              </ul>
            </div>

            {/* Client Care */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D]">
                CLIENT CARE
              </h4>
              <ul className="space-y-2 text-xs font-sans text-[#4E4542]">
                <li>
                  <span className="hover:text-[#2B211E] cursor-pointer">Virtual Concierge</span>
                </li>
                <li>
                  <span className="hover:text-[#2B211E] cursor-pointer">Order Tracking</span>
                </li>
                <li>
                  <span className="hover:text-[#2B211E] cursor-pointer">Complimentary Returns</span>
                </li>
                <li>
                  <span className="hover:text-[#2B211E] cursor-pointer">Contact Atelier</span>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D]">
                CONNECT
              </h4>
              <ul className="space-y-2 text-xs font-sans text-[#4E4542]">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2B211E] transition-colors">
                    Instagram Editorial
                  </a>
                </li>
                <li>
                  <span className="hover:text-[#2B211E] cursor-pointer">Journal & Technique</span>
                </li>
                <li>
                  <button onClick={onOpenQuiz} className="hover:text-[#2B211E] text-left transition-colors">
                    Skin Match Labs
                  </button>
                </li>
                <li>
                  <span className="hover:text-[#2B211E] cursor-pointer">Private Salons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching Image_9 with new logo emblem */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6E625D]">
          <div className="flex items-center space-x-3.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#d2c3c0] bg-[#f5ede2] p-0.5 flex-shrink-0 shadow-xs">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_ac8jwiac8jwiac8j_feb6fedb.jpeg"
                alt="ZoeNude Logo Emblem"
                className="w-full h-full object-cover scale-[1.7] object-center transform -translate-y-0.5"
              />
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-serif text-lg font-medium text-[#2B211E]">
                ZoeNude
              </span>
              <span className="hidden sm:inline text-[#E8DFD5]">•</span>
              <span className="italic font-serif text-xs text-[#85513f]">
                Beauty, Without the Evidence.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-wider uppercase font-medium">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#2B211E] transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#2B211E] transition-colors">
              TERMS OF SERVICE
            </a>
            <span className="text-[#807571]">
              &copy; 2025 ZOENUDE ATELIER INC. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
