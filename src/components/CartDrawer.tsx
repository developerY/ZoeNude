import React, { useState } from 'react';
import { CartItem, Product, Shade } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Gift, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [selectedSample, setSelectedSample] = useState('Trio Card: 03 Bisque · 04 Silk · 05 Beige');
  const [checkedOutSuccess, setCheckedOutSuccess] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = Math.max(0, rawSubtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'FIRSTLUXURY' || promoCode.trim().toUpperCase() === 'ZOENUDE') {
      setDiscountPercent(15);
      setPromoApplied(true);
    }
  };

  const handleProcessCheckout = () => {
    setCheckedOutSuccess(true);
    setTimeout(() => {
      onCheckout();
      setCheckedOutSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-[#FFFFFF] shadow-2xl flex flex-col justify-between border-l border-[#E8DFD5] animate-slideLeft"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cart Header */}
          <div className="p-6 border-b border-[#E8DFD5] bg-[#FAF6F0] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-[#85513f] block">
                ATELIER BAG
              </span>
              <h2 className="font-serif text-2xl text-[#2B211E] font-normal">
                Your Selection ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#6E625D] hover:text-[#2B211E] p-2 focus:outline-none"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Complimentary Shipping Progress Banner */}
          <div className="bg-[#FCF9F3] px-6 py-3 border-b border-[#E8DFD5] text-xs font-sans text-[#2B211E]">
            <div className="flex items-center justify-between mb-1 text-[11px]">
              <span className="font-medium text-[#2F6B43] flex items-center space-x-1">
                <Check size={12} />
                <span>Complimentary Express Shipping Unlocked</span>
              </span>
              <span className="text-[#6E625D]">Free</span>
            </div>
            <div className="w-full bg-[#E8DFD5] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#2F6B43] h-full w-full rounded-full transition-all duration-500" />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {checkedOutSuccess ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-14 h-14 bg-[#EAF2EC] text-[#2F6B43] rounded-full flex items-center justify-center mx-auto">
                  <Check size={28} />
                </div>
                <h3 className="font-serif text-2xl text-[#2B211E]">Bespoke Order Confirmed</h3>
                <p className="font-sans text-xs text-[#6E625D] max-w-xs mx-auto">
                  Thank you for embracing living skin. Your formulations and complimentary trio card are being prepared in our clean atelier.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <p className="font-serif text-xl text-[#2B211E]">Your atelier bag is empty</p>
                <p className="font-sans text-xs text-[#6E625D]">
                  Explore our biomimetic formulations and discover your perfect match.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#2B211E] text-white text-xs font-semibold px-6 py-2.5 rounded tracking-wider uppercase"
                >
                  Explore Essentials
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex space-x-4 p-3 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5]"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white border border-[#E8DFD5] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-medium text-[#2B211E] leading-tight">
                          {item.title}
                        </h4>
                        <span className="font-sans text-xs font-semibold text-[#2B211E]">
                          ${item.price * item.quantity}
                        </span>
                      </div>

                      {/* Shade indicator */}
                      <div className="flex items-center space-x-1.5 mt-1 text-[11px] font-sans text-[#6E625D]">
                        <span
                          className="w-3 h-3 rounded-full border border-black/10 inline-block"
                          style={{ backgroundColor: item.shade.hex }}
                        />
                        <span>
                          {item.shade.code} · {item.shade.name}
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E8DFD5]/60">
                      <div className="flex items-center space-x-2 border border-[#E8DFD5] bg-white rounded px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-[#6E625D] hover:text-[#2B211E] p-0.5 focus:outline-none"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-sans font-medium text-[#2B211E] px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-[#6E625D] hover:text-[#2B211E] p-0.5 focus:outline-none"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#6E625D] hover:text-[#93000a] text-xs transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Complimentary Trio Sample Selection Box */}
            {items.length > 0 && !checkedOutSuccess && (
              <div className="p-4 rounded-xl bg-[#FCF9F3] border border-[#E8DFD5] space-y-2">
                <div className="flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-wider uppercase text-[#85513f]">
                  <Gift size={13} />
                  <span>Complimentary Trio Sample Card</span>
                </div>
                <p className="text-[11px] text-[#6E625D] leading-snug">
                  Select 3 adjacent shades to test in living daylight before opening your full bottle:
                </p>
                <select
                  value={selectedSample}
                  onChange={(e) => setSelectedSample(e.target.value)}
                  className="w-full text-xs bg-white border border-[#E8DFD5] rounded p-2 text-[#2B211E] focus:outline-none focus:border-[#2B211E]"
                >
                  <option value="Trio Card: 03 Bisque · 04 Silk · 05 Beige">
                    Light-Medium: 03 Bisque · 04 Silk · 05 Warm Beige
                  </option>
                  <option value="Trio Card: 01 Alabaster · 02 Opal · 03 Bisque">
                    Fair: 01 Alabaster · 02 Opal · 03 Bisque
                  </option>
                  <option value="Trio Card: 08 Sand · 09 Almond · 10 Caramel">
                    Tan: 08 Desert Sand · 09 Almond · 10 Caramel
                  </option>
                  <option value="Trio Card: 14 Mocha · 16 Espresso · 18 Cocoa">
                    Deep: 14 Mocha · 16 Espresso · 18 Cocoa
                  </option>
                </select>
              </div>
            )}
          </div>

          {/* Cart Footer & Checkout */}
          {items.length > 0 && !checkedOutSuccess && (
            <div className="p-6 bg-[#FAF6F0] border-t border-[#E8DFD5] space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Promo Code (use FIRSTLUXURY)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-white border border-[#E8DFD5] rounded px-3 py-2 text-xs font-sans placeholder-[#807571] focus:outline-none focus:border-[#2B211E]"
                />
                <button
                  type="submit"
                  className="bg-[#2B211E] text-white text-[11px] font-sans font-semibold px-3 py-2 rounded tracking-wider uppercase hover:bg-[#433430]"
                >
                  Apply
                </button>
              </form>

              {promoApplied && (
                <div className="text-[11px] text-[#2F6B43] flex items-center space-x-1">
                  <Check size={12} />
                  <span>15% Atelier Privilege discount applied (-${discountAmount.toFixed(2)})</span>
                </div>
              )}

              {/* Subtotal & Free Guarantee */}
              <div className="space-y-1.5 pt-2 border-t border-[#E8DFD5]">
                <div className="flex justify-between text-xs text-[#6E625D]">
                  <span>Subtotal</span>
                  <span>${rawSubtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-xs text-[#2F6B43]">
                    <span>Atelier VIP 15%</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-[#6E625D]">
                  <span>Shipping & Trio Swatches</span>
                  <span className="text-[#2F6B43] font-medium">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between text-base font-serif font-semibold text-[#2B211E] pt-2 border-t border-[#E8DFD5]">
                  <span>Estimated Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProcessCheckout}
                className="w-full bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase py-4 rounded shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center justify-center space-x-4 text-[10px] text-[#6E625D] font-sans">
                <span className="flex items-center space-x-1">
                  <ShieldCheck size={12} />
                  <span>100% Shade Exchange Guarantee</span>
                </span>
                <span>•</span>
                <span>Zero Carbon Shipping</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
