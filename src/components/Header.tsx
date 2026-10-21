import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  wishlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  wishlistCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);
  const location = useLocation();

  const announcements = [
    'COMPLIMENTARY STANDARD SHIPPING & SHADE MATCHING SAMPLES WITH EVERY ORDER',
    'THE ATELIER GUARANTEE: FREE COLOR EXCHANGES UNTIL YOUR COMPLEXION SINGS',
    'DISCOVER BIOMIMETIC NUDES: FORMULATED WITH 94% BIO-LIPID VEIL',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'COMPLEXION', to: '/shop?category=COMPLEXION VEIL' },
    { label: 'LIPS', to: '/shop?category=LIP CARE · SATIN' },
    { label: 'THE MANIFESTO', to: '/manifesto' },
    { label: 'SHADE FINDER', to: '/shade-finder', isHighlight: true },
    { label: 'TRANSFORMATIONS', to: '/transformations' },
    { label: 'COMMUNITY', to: '/community' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Luxury Announcement Banner */}
      <div className="bg-[#2B211E] text-[#F9F6F0] text-[10px] sm:text-[11px] font-medium tracking-[0.14em] py-2 px-4 text-center border-b border-[#3d312e] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden md:inline-block text-[9px] uppercase tracking-[0.2em] text-[#d8a48f] opacity-80">
            ATELIER RELEASE 04
          </span>
          <div className="mx-auto flex items-center space-x-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d8a48f] animate-pulse"></span>
            <span className="tracking-[0.12em] font-sans font-medium uppercase">
              {announcements[bannerIndex]}
            </span>
          </div>
          <button
            onClick={() => setBannerIndex((prev) => (prev + 1) % announcements.length)}
            className="hidden md:inline-block text-[9px] tracking-wider text-[#d8a48f] hover:text-white transition-colors"
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCF9F3]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(43,33,30,0.04)] border-b border-[#E8DFD5]'
            : 'bg-[#FCF9F3] border-b border-[#E8DFD5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Mobile hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#2B211E] p-2 hover:opacity-75 focus:outline-none"
                aria-label="Open menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Brand Logo & Crest */}
            <div className="flex items-center space-x-3">
              <Link
                to="/"
                className="group flex items-center space-x-3.5 text-left focus:outline-none"
              >
                {/* Main Logo Emblem with the Venus face */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#d2c3c0] bg-[#f5ede2] p-0.5 flex-shrink-0 shadow-xs group-hover:border-[#85513f] transition-all">
                  <img
                    src="/favicon.png"
                    alt="ZoeNude Main Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-baseline space-x-1.5">
                    <span className="font-serif text-2xl sm:text-[28px] tracking-tight text-[#2B211E] font-medium transition-colors group-hover:text-[#85513f]">
                      ZoeNude
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#85513f] inline-block mb-1"></span>
                  </div>
                  <span className="text-[9px] tracking-[0.25em] text-[#6E625D] uppercase font-sans -mt-1 font-medium">
                    COSMETICS
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Center Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive =
                  link.to === '/'
                    ? location.pathname === '/'
                    : location.pathname + location.search === link.to ||
                      location.pathname.startsWith(link.to.split('?')[0]);

                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`text-[11px] font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-200 py-1 relative ${
                      link.isHighlight
                        ? 'text-[#85513f] hover:text-[#2B211E] font-bold'
                        : isActive
                        ? 'text-[#2B211E]'
                        : 'text-[#4E4542] hover:text-[#2B211E]'
                    }`}
                  >
                    {link.label}
                    {link.isHighlight && (
                      <span className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-[#85513f]"></span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2B211E]"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Icons matching Image_9 */}
            <div className="flex items-center space-x-5">
              {/* Search Icon */}
              <button
                onClick={onOpenSearch}
                aria-label="Search formulations"
                className="text-[#2B211E] hover:text-[#85513f] p-1.5 transition-colors focus:outline-none"
              >
                <Search size={19} strokeWidth={1.75} />
              </button>

              {/* Wishlist / Heart Icon */}
              <Link
                to="/shop"
                aria-label="Wishlist"
                className="text-[#2B211E] hover:text-[#85513f] p-1.5 transition-colors relative focus:outline-none"
              >
                <Heart size={19} strokeWidth={1.75} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#85513f] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Icon with counter badge */}
              <button
                onClick={onOpenCart}
                aria-label="Shopping Cart"
                className="text-[#2B211E] hover:text-[#85513f] p-1.5 transition-colors relative focus:outline-none group"
              >
                <ShoppingBag size={20} strokeWidth={1.75} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-[#2B211E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium group-hover:bg-[#85513f] transition-colors">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Avatar Portrait */}
              <Link
                to="/manifesto"
                aria-label="Client Account / Manifesto"
                className="w-8 h-8 rounded-full overflow-hidden border border-[#E8DFD5] hover:border-[#85513f] transition-all focus:outline-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                  alt="Client Profile"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCF9F3] border-b border-[#E8DFD5] px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3 pb-4 border-b border-[#E8DFD5]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-xs font-semibold tracking-[0.14em] uppercase text-[#2B211E] py-2 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.isHighlight && (
                    <span className="text-[10px] bg-[#d8a48f]/20 text-[#85513f] px-2 py-0.5 rounded-full font-bold">
                      Diagnostic
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#6E625D]">
              <span>Complimentary Concierge & Shade Swatches</span>
              <Link
                to="/shade-finder"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#85513f] font-semibold flex items-center space-x-1"
              >
                <span>Take Diagnostic</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
