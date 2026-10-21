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

  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'SHOP', to: '/shop', hasDropdown: true },
    { label: 'ABOUT', to: '/about' },
    { label: 'THE MANIFESTO', to: '/manifesto' },
    { label: 'SHADE FINDER', to: '/shade-finder', isHighlight: true },
    { label: 'TRANSFORMATIONS', to: '/transformations' },
    { label: 'COMMUNITY', to: '/community' },
  ];

  const shopCategories = [
    { label: 'All Formulations', to: '/shop' },
    { label: 'Complexion Veil', to: '/shop?category=COMPLEXION VEIL' },
    { label: 'Lip Care · Satin', to: '/shop?category=LIP CARE · SATIN' },
    { label: 'Botanical Cheek Flush', to: '/shop?category=BOTANICAL CHEEK FLUSH' },
    { label: 'Multi-Use Sculpt & Eye', to: '/shop?category=MULTI-USE SCULPT' },
    { label: 'Atelier Silk Brushes', to: '/shop?category=BRUSH & SILK TOOL' },
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
                className="group flex items-center space-x-3 text-left focus:outline-none mr-2 sm:mr-4"
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
                  <div className="flex items-baseline">
                    <span className="font-serif text-2xl sm:text-[28px] tracking-tight text-[#2B211E] font-medium transition-colors group-hover:text-[#85513f]">
                      ZoeNude<span className="text-[#85513f]">.</span>
                    </span>
                  </div>
                  <span className="text-[9px] tracking-[0.25em] text-[#6E625D] uppercase font-sans -mt-1 font-medium">
                    COSMETICS
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Center Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive =
                  link.to === '/'
                    ? location.pathname === '/'
                    : location.pathname === link.to ||
                      (link.to !== '/' && location.pathname.startsWith(link.to));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative py-2"
                      onMouseEnter={() => setShopDropdownOpen(true)}
                      onMouseLeave={() => setShopDropdownOpen(false)}
                    >
                      <Link
                        to={link.to}
                        className={`text-[11px] font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-200 py-1 flex items-center space-x-1 ${
                          isActive
                            ? 'text-[#2B211E]'
                            : 'text-[#4E4542] hover:text-[#2B211E]'
                        }`}
                      >
                        <span>{link.label}</span>
                      </Link>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2B211E]"></span>
                      )}

                      {/* Dropdown Menu for Shop */}
                      {shopDropdownOpen && (
                        <div className="absolute top-full left-0 w-56 bg-[#FCF9F3] border border-[#E8DFD5] rounded-xl shadow-xl py-3 px-2 z-50 animate-fadeIn">
                          <div className="text-[9px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f] px-3 pb-2 mb-1 border-b border-[#F0EEE8]">
                            ATELIER FORMULATIONS
                          </div>
                          {shopCategories.map((cat) => (
                            <Link
                              key={cat.label}
                              to={cat.to}
                              onClick={() => setShopDropdownOpen(false)}
                              className="block px-3 py-2 text-xs font-sans text-[#4E4542] hover:text-[#2B211E] hover:bg-[#F2EDE4] rounded-lg transition-colors"
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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
            <div className="flex flex-col space-y-2.5 pb-4 border-b border-[#E8DFD5]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left text-xs font-semibold tracking-[0.14em] uppercase text-[#2B211E] py-1.5 flex items-center justify-between hover:text-[#85513f] transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.isHighlight && (
                      <span className="text-[10px] bg-[#d8a48f]/20 text-[#85513f] px-2 py-0.5 rounded-full font-bold">
                        Diagnostic
                      </span>
                    )}
                  </Link>

                  {/* Mobile sub-links for Shop */}
                  {link.label === 'SHOP' && (
                    <div className="pl-3 py-1 space-y-1.5 border-l border-[#E8DFD5] my-1 ml-1">
                      {shopCategories.slice(1).map((cat) => (
                        <Link
                          key={cat.label}
                          to={cat.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-[11px] font-sans text-[#6E625D] hover:text-[#2B211E] py-0.5"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
