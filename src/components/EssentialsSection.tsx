import React, { useState } from 'react';
import { Product, Shade } from '../types';
import { PRODUCTS } from '../data/cosmeticsData';
import { ProductCard } from './ProductCard';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

interface EssentialsSectionProps {
  onAddToCart: (product: Product, shade: Shade) => void;
  onQuickView: (product: Product) => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const EssentialsSection: React.FC<EssentialsSectionProps> = ({
  onAddToCart,
  onQuickView,
  activeCategory,
  onSelectCategory,
}) => {
  const [showAllFormulations, setShowAllFormulations] = useState(false);

  const categories = [
    { label: 'All Atelier Formulations', value: 'ALL' },
    { label: 'Complexion Veil', value: 'COMPLEXION VEIL' },
    { label: 'Lip Care', value: 'LIP CARE · SATIN' },
    { label: 'Cheek & Lip', value: 'CHEEK & LIP' },
    { label: 'Setting Essence', value: 'SETTING ESSENCE' },
    { label: 'Eyes & Brows', value: 'EYES & BROWS' },
  ];

  const filteredProducts = activeCategory === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  // If showAll is false and no specific category filter, show the top 4 featured in Image_9
  const displayedProducts = showAllFormulations || activeCategory !== 'ALL'
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <section id="bespoke-essentials" className="bg-[#FCF9F3] py-20 border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#6E625D] uppercase block mb-1">
              ATELIER STAPLES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#2B211E] font-normal">
              Bespoke Essentials
            </h2>
          </div>

          <div>
            <button
              onClick={() => {
                setShowAllFormulations(!showAllFormulations);
                if (!showAllFormulations) onSelectCategory('ALL');
              }}
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors group"
            >
              <span>
                {showAllFormulations
                  ? 'SHOW FEATURED 4 FORMULATIONS'
                  : 'VIEW ALL 18 FORMULATIONS'}
              </span>
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-6 scrollbar-none">
          <div className="flex items-center space-x-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => onSelectCategory(cat.value)}
                className={`px-4 py-2 text-xs font-sans font-medium tracking-wider rounded-full transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.value
                    ? 'bg-[#2B211E] text-white shadow-sm'
                    : 'bg-[#FFFFFF] text-[#4E4542] hover:text-[#2B211E] hover:bg-[#F6F3ED] border border-[#E8DFD5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid (4 cols on desktop matching Image_9) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Value badge banner beneath products */}
        <div className="mt-14 p-6 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-[#85513f] block">
              100% CLEAN BIOMIMETIC CODE
            </span>
            <p className="font-serif text-lg text-[#2B211E]">
              Zero silicones, micro-plastics, talc, or artificial masking fragrances.
            </p>
          </div>
          <div className="flex items-center space-x-4 text-xs font-sans text-[#6E625D]">
            <span>✓ Certified Leaping Bunny Vegan</span>
            <span>✓ Circular Refill Program</span>
          </div>
        </div>
      </div>
    </section>
  );
};
