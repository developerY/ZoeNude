import React, { useState } from 'react';
import { PRODUCTS, ALL_SHADES } from '../data/cosmeticsData';
import { Product } from '../types';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.keyIngredients.some((ing) => ing.toLowerCase().includes(q))
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFFFF] max-w-xl w-full rounded-2xl shadow-2xl border border-[#E8DFD5] overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Field */}
        <div className="p-4 border-b border-[#E8DFD5] flex items-center space-x-3 bg-[#FAF6F0]">
          <Search size={18} className="text-[#85513f]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search formulations, shades, squalane, ceramides..."
            autoFocus
            className="flex-1 bg-transparent border-none text-sm font-sans placeholder-[#807571] focus:outline-none text-[#2B211E]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#807571] hover:text-[#2B211E] p-1"
            >
              <X size={15} />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold text-[#6E625D] hover:text-[#2B211E] px-2"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
          {query === '' ? (
            <div className="py-4 space-y-3">
              <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#6E625D] block">
                Popular Atelier Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Skin Veil Luminous Tint',
                  'Lip Cashmere Raw Sand',
                  'Squalane Serum Base',
                  'Biomimetic Nudes',
                  'Refillable Powder',
                  'Sensitive Skin',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full text-xs bg-[#FAF6F0] hover:bg-[#F0EEE8] text-[#2B211E] border border-[#E8DFD5] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#6E625D]">
              No formulations found matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="flex items-center space-x-3.5 p-3 rounded-xl hover:bg-[#FAF6F0] border border-transparent hover:border-[#E8DFD5] cursor-pointer transition-colors"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] flex-shrink-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-sans font-semibold uppercase tracking-wider text-[#85513f] block">
                    {p.category}
                  </span>
                  <h4 className="font-serif text-sm font-medium text-[#2B211E] truncate">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-[#6E625D] truncate">
                    ${p.price} · {p.shades.length} biomimetic shades
                  </p>
                </div>
                <ArrowRight size={14} className="text-[#85513f]" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
