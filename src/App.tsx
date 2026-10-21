/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { ShadeFinderSection } from './components/ShadeFinderSection';
import { EssentialsSection } from './components/EssentialsSection';
import { TransformationsSection } from './components/TransformationsSection';
import { CommunitySection } from './components/CommunitySection';
import { QuietConfidenceSection } from './components/QuietConfidenceSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ShadeQuizModal } from './components/ShadeQuizModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { SearchModal } from './components/SearchModal';
import { ManifestoModal } from './components/ManifestoModal';
import { PRODUCTS, ALL_SHADES } from './data/cosmeticsData';
import { Product, Shade, CartItem } from './types';
import { Check } from 'lucide-react';

export default function App() {
  // Pre-seed cart with 2 items to match the '2' notification badge in Image_9
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-skin-veil',
      productId: PRODUCTS[0].id,
      title: PRODUCTS[0].title,
      price: PRODUCTS[0].price,
      shade: ALL_SHADES.find((s) => s.code === '04') || ALL_SHADES[4], // 04 Silk Neutral
      quantity: 1,
      image: PRODUCTS[0].image,
      category: PRODUCTS[0].category,
    },
    {
      id: 'initial-lip-cashmere',
      productId: PRODUCTS[1].id,
      title: PRODUCTS[1].title,
      price: PRODUCTS[1].price,
      shade: PRODUCTS[1].shades[0], // Raw Sand
      quantity: 1,
      image: PRODUCTS[1].image,
      category: PRODUCTS[1].category,
    },
  ]);

  // Modal & Drawer visibility states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Category filter for bespoke essentials
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // Wishlist count & tracking
  const [wishlist, setWishlist] = useState<string[]>(['skin-veil-luminous-tint']);

  // Floating notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, shade: Shade) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.productId === product.id && item.shade.id === shade.id
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${shade.id}-${Date.now()}`,
        productId: product.id,
        title: product.title,
        price: product.price,
        shade: shade,
        quantity: 1,
        image: product.image,
        category: product.category,
      };
      setCartItems([...cartItems, newItem]);
    }

    showToast(`Added ${product.title} (${shade.name}) to your atelier bag.`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToEssentials = () => {
    const el = document.getElementById('bespoke-essentials');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F3] text-[#1C1C18] font-sans selection:bg-[#d8a48f]/30 selection:text-[#2B211E]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2B211E] text-[#FCF9F3] px-5 py-3 rounded-lg shadow-2xl border border-[#4E4542] flex items-center space-x-2 text-xs font-sans tracking-wide animate-slideUp">
          <Check size={14} className="text-[#d8a48f]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenManifesto={() => setIsManifestoOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          scrollToEssentials();
        }}
        wishlistCount={wishlist.length}
      />

      {/* Hero Section: Philosophy No. 01 matching Image_9 */}
      <HeroSection
        onExploreComplexion={scrollToEssentials}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onQuickViewProduct={(prod) => setQuickViewProduct(prod)}
        featuredProduct={PRODUCTS[0]}
      />

      {/* Five Pillars of Naked Grace (The Zoe Manifesto) matching Image_8 and Image_9 */}
      <PillarsSection
        onOpenManifesto={() => setIsManifestoOpen(true)}
      />

      {/* Adaptive Skin Intelligence / Tone Matrix Diagnostic Simulator matching Image_9 */}
      <ShadeFinderSection
        onOpenQuiz={() => setIsQuizOpen(true)}
        onAddToCart={handleAddToCart}
        foundationProduct={PRODUCTS[0]}
      />

      {/* Bespoke Essentials (Atelier Staples) matching Image_9 */}
      <EssentialsSection
        onAddToCart={handleAddToCart}
        onQuickView={(prod) => setQuickViewProduct(prod)}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Authentic Transformations (Still You. In Every Light.) matching Image_9 */}
      <TransformationsSection />

      {/* Community Gallery (#LifeLooksGoodOnYou) matching Image_9 */}
      <CommunitySection />

      {/* Quiet Confidence Dark Callout matching Image_9 */}
      <QuietConfidenceSection
        onShopCollection={scrollToEssentials}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Newsletter & Atelier Footer matching Image_9 */}
      <Footer
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          scrollToEssentials();
        }}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Interactive 90-Second Shade Finder Diagnostic Quiz */}
      <ShadeQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Product Quick View / Formulation Inspection Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Zoe Manifesto & Philosophy Deep-Dive Modal */}
      <ManifestoModal
        isOpen={isManifestoOpen}
        onClose={() => setIsManifestoOpen(false)}
        onOpenQuiz={() => {
          setIsManifestoOpen(false);
          setIsQuizOpen(true);
        }}
      />
    </div>
  );
}
