import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FrontPageCinemaSection } from '../components/FrontPageCinemaSection';
import { RainbowSpectrumSection } from '../components/RainbowSpectrumSection';
import { QuietConfidenceSection } from '../components/QuietConfidenceSection';
import { PRODUCTS, PILLARS, ALL_SHADES } from '../data/cosmeticsData';
import { JOURNAL_ARTICLES } from '../data/journalData';
import { Product, Shade } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Gift, Droplets, Star, BookOpen } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

interface HomePageProps {
  onAddToCart: (product: Product, shade: Shade) => void;
  onQuickView: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 1. Hero Cover Art & Philosophy No. 01 with KoColor / ZoeWear / ZoeWave */}
      <HeroSection
        onExploreComplexion={() => navigate('/shop?category=COMPLEXION VEIL')}
        onOpenQuiz={() => navigate('/shade-finder')}
        onQuickViewProduct={onQuickView}
        featuredProduct={PRODUCTS[0]}
      />

      {/* 2. Atelier Cinéma Showcase: Living Nude in Motion (Auto-starts & cycles forever) */}
      <FrontPageCinemaSection videoId="qtA4q3gqk4w" />

      {/* 3. The Rainbow of Living Skin & Botanical Color Spectrum */}
      <RainbowSpectrumSection
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
      />

      {/* 3. Philosophy & Manifesto Teaser Section (Terracotta-Rose Skintone Glow) */}
      <section className="bg-gradient-to-br from-[#FAF2EB] via-[#FDF6F0] to-[#F6EDE4] py-20 border-b border-[#EADED5] relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#E27D86]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block mb-1">
                THE ZOE MANIFESTO · CELEBRATE YOUR NATURAL BEAUTY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
                Beautifully You. Naturally Free.
              </h2>
            </div>
            <Link
              to="/manifesto"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.16em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors group"
            >
              <span>EXPLORE COMPLETE MANIFESTO</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.slice(0, 3).map((pillar) => (
              <div
                key={pillar.number}
                onClick={() => navigate('/manifesto')}
                className="bg-white/95 rounded-xl p-6 border border-[#E8DFD5] hover:border-[#85513f] transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-sans font-semibold tracking-wider text-[#6E625D] uppercase">
                      Pillar {pillar.number} · {pillar.tag}
                    </span>
                    {pillar.badge && (
                      <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#f4ece7] text-[#85513f] font-semibold">
                        {pillar.badge}
                      </span>
                    )}
                  </div>
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#FAF6F0] mb-4 border border-[#E8DFD5]">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#2B211E] group-hover:text-[#85513f] transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs text-[#4E4542] leading-relaxed line-clamp-2">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0EEE8] flex items-center justify-between text-[11px] font-sans text-[#85513f] font-semibold">
                  <span>Read Philosophy</span>
                  <ArrowRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Philosophy Centerpiece: Celebrate Your Natural Beauty */}
          <div className="mt-14 bg-gradient-to-r from-[#FAF0E6] via-[#FCF7F1] to-[#F5ECE1] rounded-3xl p-8 sm:p-12 border border-[#EADED5] shadow-sm relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
              <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.24em] text-[#85513f] uppercase bg-white/85 px-4 py-1.5 rounded-full border border-[#E8DFD5] shadow-2xs">
                <span>ZOE · NUDE COSMETICS</span>
                <span>·</span>
                <span className="text-[#2B211E]">THE BRAND PHILOSOPHY</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B211E] tracking-tight font-normal">
                Beautifully You. Naturally Free.
              </h3>

              <div className="p-6 bg-white/95 rounded-2xl border border-[#85513f]/25 shadow-xs max-w-2xl mx-auto">
                <p className="font-serif italic text-base sm:text-lg text-[#2B211E] leading-relaxed">
                  &ldquo;Cosmetics should never make someone feel that their natural self isn&rsquo;t enough. They should make someone feel even more comfortable, confident, and free to be themselves.&rdquo;
                </p>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#85513f] uppercase block mt-3">
                  — CELEBRATE YOUR NATURAL BEAUTY
                </span>
              </div>
            </div>

            {/* 4 Thematic Mode Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Pillar 1 */}
              <div className="bg-white/90 rounded-2xl p-6 border border-[#E8DFD5] space-y-3 shadow-2xs hover:border-[#85513f] transition-all">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-[#2B211E]">
                    Feel Free & Comfortable in Your Own Skin
                  </h4>
                  <span className="text-[10px] bg-[#FAF2EB] text-[#85513f] px-2 py-0.5 rounded-full font-semibold uppercase">
                    Mantra 01
                  </span>
                </div>
                <div className="h-[2px] w-12 bg-[#E27D86] rounded-full" />
                <p className="text-xs text-[#4E4542] leading-relaxed font-light">
                  Feel free. Feel beautiful. Feel like you. Feel comfortable in your own skin. Be free. Be natural. Be you. Love your skin. Embrace your beauty. Confidence begins in your own skin.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white/90 rounded-2xl p-6 border border-[#E8DFD5] space-y-3 shadow-2xs hover:border-[#85513f] transition-all">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-[#2B211E]">
                    Nothing to Hide. Everything to Love.
                  </h4>
                  <span className="text-[10px] bg-[#FAF2EB] text-[#85513f] px-2 py-0.5 rounded-full font-semibold uppercase">
                    Mantra 02
                  </span>
                </div>
                <div className="h-[2px] w-12 bg-[#F08060] rounded-full" />
                <p className="text-xs text-[#4E4542] leading-relaxed font-light">
                  Your beauty. Your way. Enhance your beauty. Never hide it. Beauty that feels like you. Reveal your natural beauty. Simply you. Naturally beautiful. Let your natural beauty shine.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white/90 rounded-2xl p-6 border border-[#E8DFD5] space-y-3 shadow-2xs hover:border-[#85513f] transition-all">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-[#2B211E]">
                    Beauty Begins With Being Yourself
                  </h4>
                  <span className="text-[10px] bg-[#FAF2EB] text-[#85513f] px-2 py-0.5 rounded-full font-semibold uppercase">
                    Mantra 03
                  </span>
                </div>
                <div className="h-[2px] w-12 bg-[#E9B858] rounded-full" />
                <p className="text-xs text-[#4E4542] leading-relaxed font-light">
                  Be comfortable. Be confident. Be beautiful. Your skin. Your beauty. Your freedom. Own your beauty. Own your confidence. Celebrate the beauty of being you. Feel good in the skin you&rsquo;re in.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white/90 rounded-2xl p-6 border border-[#E8DFD5] space-y-3 shadow-2xs hover:border-[#85513f] transition-all">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-[#2B211E]">
                    Beauty Without Boundaries
                  </h4>
                  <span className="text-[10px] bg-[#FAF2EB] text-[#85513f] px-2 py-0.5 rounded-full font-semibold uppercase">
                    Mantra 04
                  </span>
                </div>
                <div className="h-[2px] w-12 bg-[#689775] rounded-full" />
                <p className="text-xs text-[#4E4542] leading-relaxed font-light">
                  Naturally beautiful. Unapologetically you. The freedom to be beautiful. Less hiding. More shining. Beauty, without pretending. Simply beautiful. Completely you. Uncover confidence. Embrace beauty.
                </p>
              </div>
            </div>
          </div>

          {/* Zoe Nude Brand Philosophy Ribbon */}
          <div className="mt-10 bg-white/90 rounded-2xl p-6 sm:p-8 border border-[#EADED5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
                THE PHILOSOPHY OF ZOE · NUDE COSMETICS
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2B211E]">
                Confidence Begins in Your Own Skin
              </h3>
              <p className="text-xs text-[#6E625D] max-w-xl">
                Cosmetics should make you feel even more comfortable, confident, and free to be yourself. Discover lightweight second-skin veils, lip cashmeres, and living cheek glazes.
              </p>
            </div>
            <Link
              to="/manifesto"
              className="bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-semibold px-6 py-3 rounded tracking-wider uppercase transition-colors whitespace-nowrap inline-flex items-center space-x-2"
            >
              <span>Read The Manifesto</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Bespoke Essentials Showcase (Olive-Balanced Golden Skintone Glow) */}
      <section className="bg-gradient-to-br from-[#F8F6F1] via-[#F3F4ED] to-[#FAF3EC] py-20 border-b border-[#EADED5] relative overflow-hidden">
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#689775]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#6E625D] uppercase block mb-1">
                ATELIER STAPLES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
                Bespoke Essentials
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors group"
            >
              <span>VIEW ALL FORMULATIONS IN SHOP</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Adaptive Skin Intelligence Teaser Banner (Golden Amber Skintone Glow) */}
      <section className="bg-gradient-to-br from-[#FFF9EE] via-[#FAF1E3] to-[#F6E6D4] py-16 border-b border-[#EADED5] relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#E9B858]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/95 rounded-2xl p-8 sm:p-12 border border-[#EADED5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#85513f] flex items-center space-x-1.5">
                <Sparkles size={12} />
                <span>ADAPTIVE SKIN INTELLIGENCE</span>
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
                Find Your True Match in 90 Seconds.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed">
                Take our 4-point undertone assessment. We analyze lipid density and vascular reflection to pair you with your exact biomimetic shade profile.
              </p>
              <div className="flex items-center space-x-6 text-xs text-[#6E625D] pt-2">
                <span className="flex items-center space-x-1">
                  <ShieldCheck size={13} className="text-[#85513f]" />
                  <span>100% Shade Guarantee</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Gift size={13} className="text-[#85513f]" />
                  <span>Trio Card Included</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/complexion-studio"
                className="bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-7 py-4 rounded shadow transition-all whitespace-nowrap inline-flex items-center justify-center space-x-2"
              >
                <span>COMPLEXION STUDIO</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/shade-finder"
                className="bg-white hover:bg-[#FAF0E6] text-[#2B211E] border border-[#E8DFD5] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-5 py-4 rounded transition-all whitespace-nowrap inline-flex items-center justify-center space-x-1"
              >
                <span>TAKE QUIZ</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Journal & Beauty Tips Editorial Teaser (Plum & Orchid Skintone Glow) */}
      <section className="bg-gradient-to-br from-[#FAF4F7] via-[#F6ECF1] to-[#F8F1EB] py-20 border-b border-[#EADED5] relative overflow-hidden">
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#8F79B2]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block mb-1">
                THE JOURNAL · LES NARRATIVES DU TEINT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
                Beauty Tips, Masterclasses & Skin Science
              </h2>
            </div>
            <Link
              to="/journal"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.16em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors group"
            >
              <span>EXPLORE ALL 8 EDITORIAL STORIES</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
              <div
                key={article.id}
                onClick={() => navigate(`/journal?article=${article.slug}`)}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD5] hover:border-[#85513f] transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#F2EDE4]">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-sans tracking-[0.16em] uppercase text-[#807571] mb-2 flex items-center space-x-2">
                      <span className="text-[#85513f] font-semibold">{article.categoryLabel}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                      <span>·</span>
                      <span>{article.publishedDate}</span>
                    </div>
                    <h3 className="font-serif text-lg text-[#2B211E] font-medium leading-snug group-hover:text-[#85513f] transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-[#5C504A] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3.5 border-t border-[#F0EEE8] bg-[#FAFAF8] flex items-center justify-between text-xs font-sans">
                  <span className="text-[11px] text-[#6E625D]">By {article.author.name}</span>
                  <span className="text-[#85513f] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                    <span>Read Technique</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quiet Confidence Dark Velvet Banner */}
      <QuietConfidenceSection
        onShopCollection={() => navigate('/shop')}
        onOpenQuiz={() => navigate('/shade-finder')}
      />

      {/* 7. AT THE VERY BOTTOM: AI BIO-COSMETOLOGY LAB INNOVATION */}
      <section className="bg-gradient-to-b from-[#140C09] via-[#1A100C] to-[#241712] text-[#FCF9F3] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#3A2A23] relative overflow-hidden">
        {/* Subtle computational background ambient glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-[#E27D86]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[#5E8DB8]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/[0.04] rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#85513f]/30 border border-[#d8a48f]/30 text-[#e8b9a7] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase">
                <Sparkles size={12} className="text-[#e8b9a7]" />
                <span>INNOVATION &amp; FORMULATION &middot; LOS ANGELES &amp; SAN FRANCISCO</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#FAF6F0] leading-snug">
                Where Artificial Intelligence Meets the Science of Beauty.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#D1C7BD] leading-relaxed">
                Behind Zoe &ndash; Nude Cosmetics is our AI-powered Bio-Cosmetology Lab with research and development in Los Angeles and San Francisco. We leverage computational intelligence and advanced bioscience to formulate second-skin cosmetics that enhance rather than mask your natural beauty.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-[11px] font-sans text-[#D8A48F]">
                <span>1. AI Bio-Cosmetology</span>
                <span className="text-[#85513f]">&middot;</span>
                <span>2. Advanced Bioscience</span>
                <span className="text-[#85513f]">&middot;</span>
                <span>3. Natural Beauty</span>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <Link
                to="/about"
                className="bg-[#FAF6F0] hover:bg-white text-[#140C09] text-xs font-sans font-bold tracking-[0.16em] uppercase px-8 py-4 rounded transition-all shadow-md hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>DISCOVER THE AI BIO-LAB</span>
                <ArrowRight size={14} />
              </Link>
              <span className="text-[10px] text-[#A89C94] uppercase tracking-wider font-light">
                The Future of Beauty Is Being Formulated
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
