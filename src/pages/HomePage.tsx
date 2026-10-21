import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { QuietConfidenceSection } from '../components/QuietConfidenceSection';
import { PRODUCTS, PILLARS, ALL_SHADES } from '../data/cosmeticsData';
import { Product, Shade } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Gift, Droplets, Star } from 'lucide-react';
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
      {/* 1. Hero Cover Art & Philosophy No. 01 */}
      <HeroSection
        onExploreComplexion={() => navigate('/shop?category=COMPLEXION VEIL')}
        onOpenQuiz={() => navigate('/shade-finder')}
        onQuickViewProduct={onQuickView}
        featuredProduct={PRODUCTS[0]}
      />

      {/* 2. Philosophy & Manifesto Teaser Section */}
      <section className="bg-[#FAF6F0] py-20 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block mb-1">
                THE ZOE MANIFESTO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal">
                Five Pillars of Naked Grace
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
                className="bg-white rounded-xl p-6 border border-[#E8DFD5] hover:border-[#85513f] transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group"
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
        </div>
      </section>

      {/* 3. Bespoke Essentials Showcase */}
      <section className="bg-[#FCF9F3] py-20 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* 4. Adaptive Skin Intelligence Teaser Banner */}
      <section className="bg-[#FAF6F0] py-16 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8DFD5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
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

            <div>
              <Link
                to="/shade-finder"
                className="bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-8 py-4 rounded shadow transition-all whitespace-nowrap inline-flex items-center space-x-2"
              >
                <span>LAUNCH DIAGNOSTIC</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quiet Confidence Dark Velvet Banner */}
      <QuietConfidenceSection
        onShopCollection={() => navigate('/shop')}
        onOpenQuiz={() => navigate('/shade-finder')}
      />
    </div>
  );
};
