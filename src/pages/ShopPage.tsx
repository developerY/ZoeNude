import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/cosmeticsData';
import { Product, Shade } from '../types';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, Search, ArrowUpDown, Sparkles } from 'lucide-react';

interface ShopPageProps {
  onAddToCart: (product: Product, shade: Shade) => void;
  onQuickView: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    { label: 'All Formulations (18)', value: 'ALL' },
    { label: 'Complexion Veil', value: 'COMPLEXION VEIL' },
    { label: 'Lip Care', value: 'LIP CARE · SATIN' },
    { label: 'Cheek & Lip', value: 'CHEEK & LIP' },
    { label: 'Setting Essence', value: 'SETTING ESSENCE' },
    { label: 'Eyes & Brows', value: 'EYES & BROWS' },
  ];

  const handleCategorySelect = (val: string) => {
    setSelectedCategory(val);
    if (val === 'ALL') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', val);
    }
    setSearchParams(searchParams);
  };

  // Filter & Sort logic
  let filtered = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.keyIngredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      {/* Shop Header Banner */}
      <section className="bg-[#FAF6F0] py-14 sm:py-18 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block">
            ATELIER STAPLES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#2B211E] font-normal">
            Bespoke Formulations
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#4E4542] max-w-xl mx-auto leading-relaxed">
            Every formulation is small-batch compounded with plant-derived bio-identical squalane, restorative ceramides, and living mineral pigments.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Controls Bar: Categories, Search, Sort */}
        <div className="space-y-6 mb-10 pb-6 border-b border-[#E8DFD5]">
          {/* Category Navigation Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategorySelect(cat.value)}
                className={`px-4 py-2 text-xs font-sans font-medium tracking-wider rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat.value
                    ? 'bg-[#2B211E] text-white shadow-sm'
                    : 'bg-white text-[#4E4542] hover:text-[#2B211E] hover:bg-[#F6F3ED] border border-[#E8DFD5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#85513f]"
              />
              <input
                type="text"
                placeholder="Search formulations or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E8DFD5] rounded-full pl-9 pr-4 py-2 text-xs font-sans placeholder-[#807571] focus:outline-none focus:border-[#2B211E]"
              />
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs text-[#6E625D]">
                Showing <strong>{filtered.length}</strong> items
              </span>
              <div className="flex items-center space-x-1.5 bg-white border border-[#E8DFD5] rounded-lg px-3 py-1.5 text-xs">
                <ArrowUpDown size={13} className="text-[#6E625D]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent border-none text-xs text-[#2B211E] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E8DFD5] space-y-3">
            <p className="font-serif text-xl text-[#2B211E]">No formulations found</p>
            <p className="font-sans text-xs text-[#6E625D]">
              Try clearing your search filters to explore all essentials.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="bg-[#2B211E] text-white text-xs font-semibold px-5 py-2.5 rounded tracking-wider uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

        {/* Complimentary Shade Sample Banner */}
        <div className="mt-16 bg-[#FAF6F0] p-6 sm:p-8 rounded-2xl border border-[#E8DFD5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#85513f] block">
              100% COMPLEXION CONFIDENCE
            </span>
            <h3 className="font-serif text-xl text-[#2B211E]">
              Every order arrives with 3 complimentary adjacent shade cards.
            </h3>
            <p className="text-xs font-sans text-[#6E625D]">
              Test in true daylight before opening your full glass bottle. Free exchanges anytime.
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#2B211E] text-white text-xs font-semibold px-6 py-3 rounded tracking-wider uppercase hover:bg-[#433430] whitespace-nowrap"
          >
            Explore Complexion
          </button>
        </div>
      </div>
    </div>
  );
};
