import React, { useState } from 'react';
import { Product, Shade } from '../types';
import { Star, Plus, Check, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, shade: Shade) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedShade, setSelectedShade] = useState<Shade>(product.shades[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedShade);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const getExtraCount = () => {
    switch (product.id) {
      case 'skin-veil-luminous-tint':
        return '+20';
      case 'lip-cashmere-satin-lipstick':
        return '+8';
      case 'radiant-glaze-dew-multi-stick':
        return '+3';
      case 'alabaster-silk-finishing-powder':
        return '+2';
      default:
        return '';
    }
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group bg-[#FFFFFF] rounded-xl border border-[#E8DFD5] hover:border-[#85513f] overflow-hidden shadow-[0_4px_20px_rgba(43,33,30,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top Image Container with Badge */}
        <div className="relative aspect-[1/1] w-full overflow-hidden bg-[#FAF6F0] border-b border-[#F0EEE8]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          {/* Micro-Badge if present (Matches Image_9: CULT FAVORITE, NEW HUE, REFILLABLE) */}
          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-0.5 text-[9px] font-sans font-semibold tracking-[0.14em] uppercase rounded-full bg-[#FFFFFF]/90 text-[#2B211E] border border-[#E8DFD5] backdrop-blur-sm shadow-xs">
                {product.badge}
              </span>
            </div>
          )}

          {/* Quick View Hover overlay button */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-[#FFFFFF]/95 text-[#2B211E] text-[10px] font-sans font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye size={12} />
              <span>Quick View</span>
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-[#6E625D]">
              {product.category}
            </span>
            <div className="flex items-center space-x-1 text-[#2B211E]">
              <Star size={12} className="fill-[#85513f] text-[#85513f]" />
              <span className="text-[11px] font-sans font-medium text-[#2B211E]">
                {product.rating}
              </span>
              <span className="text-[10px] font-sans text-[#6E625D]">
                ({product.reviewsCount})
              </span>
            </div>
          </div>

          {/* Product Title in Bodoni Moda serif */}
          <h3 className="font-serif text-lg sm:text-xl text-[#2B211E] font-normal group-hover:text-[#85513f] transition-colors leading-snug">
            {product.title}
          </h3>

          {/* Description Excerpt */}
          <p className="font-sans text-xs leading-relaxed text-[#4E4542] line-clamp-2">
            {product.description}
          </p>

          {/* Shade Swatches */}
          <div
            className="pt-2 flex items-center space-x-2"
            onClick={(e) => e.stopPropagation()}
          >
            {product.shades.slice(0, 4).map((shade) => {
              const isSelected = selectedShade.id === shade.id;
              return (
                <button
                  key={shade.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedShade(shade);
                  }}
                  title={`${shade.code} - ${shade.name}`}
                  className={`w-4 h-4 rounded-full transition-all flex items-center justify-center ${
                    isSelected
                      ? 'ring-1.5 ring-[#2B211E] ring-offset-1 scale-110'
                      : 'hover:scale-110 border border-black/15'
                  }`}
                  style={{ backgroundColor: shade.hex }}
                />
              );
            })}

            {getExtraCount() && (
              <span className="text-[10px] font-sans font-medium text-[#6E625D] tracking-tight">
                {getExtraCount()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Price & Add Button matching Image_9 */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#F0EEE8] flex items-center justify-between">
        <span className="font-sans font-medium text-base text-[#2B211E]">
          ${product.price}
        </span>

        <button
          onClick={handleAdd}
          className={`text-xs font-sans font-semibold tracking-wider uppercase px-4 py-2 rounded transition-all duration-200 flex items-center space-x-1.5 ${
            isAdded
              ? 'bg-[#2F6B43] text-white'
              : 'bg-[#F6F3ED] hover:bg-[#2B211E] text-[#2B211E] hover:text-white border border-[#E8DFD5] hover:border-[#2B211E]'
          }`}
        >
          {isAdded ? (
            <>
              <Check size={13} />
              <span>ADDED</span>
            </>
          ) : (
            <>
              <Plus size={13} />
              <span>ADD</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
