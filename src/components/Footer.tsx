import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-gradient-to-b from-[#FAF1E8] via-[#FAF6F0] to-[#F5ECE1] border-t border-[#EADED5] text-[#2B211E] relative">
      {/* Top Rainbow Skintone Spectrum Hairline */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-[#E27D86] via-[#F08060] via-[#E9B858] via-[#689775] via-[#5E8DB8] via-[#8F79B2] to-[#C85A3E]" />
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
                  <Link to="/community" className="hover:text-[#2B211E] text-left transition-colors font-medium text-[#2B211E]">
                    The Zoe Collective (Real Skin)
                  </Link>
                </li>
                <li>
                  <Link to="/complexion-studio" className="hover:text-[#2B211E] text-left transition-colors font-medium text-[#85513f]">
                    Complexion Studio (Shades & Transformations)
                  </Link>
                </li>
                <li>
                  <Link to="/journal" className="hover:text-[#2B211E] text-left transition-colors">
                    The Journal & Beauty Tips
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#2B211E] text-left transition-colors">
                    AI Bio-Cosmetology Lab (LA & SF)
                  </Link>
                </li>
                <li>
                  <Link to="/manifesto" className="hover:text-[#2B211E] text-left transition-colors">
                    The Five Pillars Manifesto
                  </Link>
                </li>
                <li>
                  <Link to="/shade-finder" className="hover:text-[#2B211E] text-left transition-colors">
                    Biomimetic Shade Matrix
                  </Link>
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
                  <Link to="/shade-finder" className="hover:text-[#2B211E] transition-colors">
                    Virtual Concierge
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-[#2B211E] transition-colors">
                    Bespoke Essentials
                  </Link>
                </li>
                <li>
                  <Link to="/transformations" className="hover:text-[#2B211E] transition-colors">
                    Complimentary Returns
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="hover:text-[#2B211E] transition-colors">
                    Contact California Labs
                  </Link>
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
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2B211E] transition-colors"
                  >
                    Instagram Editorial
                  </a>
                </li>
                <li>
                  <Link to="/community" className="hover:text-[#2B211E] transition-colors">
                    Community Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/transformations" className="hover:text-[#2B211E] transition-colors">
                    Skin Match Labs
                  </Link>
                </li>
                <li>
                  <Link to="/manifesto" className="hover:text-[#2B211E] transition-colors">
                    Private Salons
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Philosophy Banner */}
        <div className="py-8 border-b border-[#E8DFD5] text-center space-y-3">
          <p className="font-serif italic text-sm sm:text-base text-[#4E4542] max-w-2xl mx-auto">
            &ldquo;Cosmetics should never make someone feel that their natural self isn&rsquo;t enough. They should make someone feel even more comfortable, confident, and free to be themselves.&rdquo;
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
            <span>AI BIO-COSMETOLOGY</span>
            <span className="text-[#d8c2b7]">·</span>
            <span>ADVANCED BIOSCIENCE</span>
            <span className="text-[#d8c2b7]">·</span>
            <span>NATURAL BEAUTY</span>
          </div>
          <p className="font-sans text-xs text-[#6E625D] max-w-xl mx-auto">
            &ldquo;Where Artificial Intelligence Meets the Science of Beauty.&rdquo; &mdash; Research &amp; Development Laboratories in Los Angeles &amp; San Francisco.
          </p>
        </div>

        {/* Bottom Bar with Face Logo Emblem */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6E625D]">
          <div className="flex items-center space-x-3.5">
            <Link to="/" className="w-9 h-9 rounded-full overflow-hidden border border-[#d2c3c0] bg-[#f5ede2] p-0.5 flex-shrink-0 shadow-xs hover:border-[#85513f] transition-all">
              <img
                src="/favicon.png"
                alt="ZOE Logo Emblem"
                className="w-full h-full object-cover rounded-full"
              />
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
              <div className="flex items-baseline space-x-1.5">
                <Link to="/" className="font-serif text-lg font-medium text-[#2B211E] hover:text-[#85513f] transition-colors tracking-wide">
                  ZOE
                </Link>
                <span className="text-[#85513f] font-light text-sm">·</span>
                <span className="font-serif text-xs font-normal tracking-[0.18em] text-[#5C4D47] uppercase">
                  NUDE COSMETICS
                </span>
              </div>
              <span className="hidden sm:inline text-[#E8DFD5]">•</span>
              <span className="italic font-serif text-xs text-[#85513f]">
                Beautifully You. Naturally Free.
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
              &copy; 2027 ZOE &ndash; NUDE COSMETICS &middot; AI BIO-COSMETOLOGY LAB (LA &amp; SF) &middot; ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
