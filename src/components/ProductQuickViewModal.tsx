import React, { useState } from 'react';
import { Product, Shade } from '../types';
import { X, Star, Check, Sparkles, Droplets, ShieldCheck, Plus } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, shade: Shade) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedShade, setSelectedShade] = useState<Shade>(product.shades[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedShade);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFFFF] max-w-3xl w-full rounded-2xl shadow-2xl border border-[#E8DFD5] overflow-hidden flex flex-col md:flex-row relative animate-scaleUp max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-[#2B211E] flex items-center justify-center hover:bg-[#2B211E] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 bg-[#FAF6F0] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E8DFD5] relative">
          <div className="aspect-square w-full rounded-xl overflow-hidden bg-white shadow-sm border border-[#E8DFD5]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {product.badge && (
            <span className="absolute top-6 left-6 px-3 py-1 text-[9px] font-sans font-semibold tracking-[0.16em] uppercase rounded-full bg-[#2B211E] text-white">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right: Formulation Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-5">
          <div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-[#85513f] block mb-1">
              {product.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2B211E] leading-tight font-normal">
              {product.title}
            </h2>
            <p className="font-serif text-xs italic text-[#6E625D] mt-0.5">
              {product.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="text-xl font-sans font-semibold text-[#2B211E]">
              ${product.price}
            </span>
            <div className="flex items-center space-x-1 text-[#85513f]">
              <Star size={13} className="fill-[#85513f]" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-[#6E625D]">({product.reviewsCount} reviews)</span>
            </div>
            {product.volume && (
              <span className="text-[11px] text-[#807571] border-l border-[#E8DFD5] pl-3">
                {product.volume}
              </span>
            )}
          </div>

          <p className="font-sans text-xs leading-relaxed text-[#4E4542]">
            {product.longDescription}
          </p>

          {/* Shade Selector */}
          <div className="pt-2 border-t border-[#F0EEE8]">
            <div className="flex items-center justify-between text-xs mb-2.5">
              <span className="font-sans font-medium text-[#2B211E]">
                Selected Shade:{' '}
                <strong className="text-[#85513f]">
                  {selectedShade.code} · {selectedShade.name}
                </strong>
              </span>
              <span className="text-[10px] font-sans uppercase tracking-wider text-[#6E625D]">
                {selectedShade.undertone} undertone
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {product.shades.map((shade) => {
                const isSelected = selectedShade.id === shade.id;
                return (
                  <button
                    key={shade.id}
                    onClick={() => setSelectedShade(shade)}
                    className={`w-7 h-7 rounded-full transition-all flex items-center justify-center ${
                      isSelected
                        ? 'ring-2 ring-[#2B211E] ring-offset-2 scale-110'
                        : 'hover:scale-105 border border-black/15'
                    }`}
                    style={{ backgroundColor: shade.hex }}
                    title={`${shade.code} ${shade.name}`}
                  >
                    {isSelected && <Check size={12} className="text-[#2B211E]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Key Biomimetic Actives */}
          <div className="pt-2 border-t border-[#F0EEE8] space-y-2">
            <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#6E625D] block">
              Formulation Actives & Integrity
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.keyIngredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[10px] font-sans rounded bg-[#FAF6F0] text-[#2B211E] border border-[#E8DFD5]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <div className="pt-4">
            <button
              onClick={handleAdd}
              className={`w-full py-4 rounded text-xs font-sans font-semibold tracking-[0.14em] uppercase transition-all flex items-center justify-center space-x-2 shadow-sm ${
                added
                  ? 'bg-[#2F6B43] text-white'
                  : 'bg-[#2B211E] hover:bg-[#433430] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check size={14} />
                  <span>Added to Atelier Bag</span>
                </>
              ) : (
                <>
                  <Plus size={14} />
                  <span>Add to Bag — ${product.price}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
