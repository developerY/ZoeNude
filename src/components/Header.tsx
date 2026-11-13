import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import mermaidShellSealImg from '../assets/images/mermaid_shell_seal_1794526715606.jpg';

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
    'ZOE · NUDE COSMETICS — BEAUTIFULLY YOU. NATURALLY FREE.',
    'FEEL FREE AND COMFORTABLE IN YOUR OWN SKIN',
    'NOTHING TO HIDE. EVERYTHING TO LOVE. · CELEBRATE YOUR NATURAL BEAUTY',
    'KOCOLOR, ZOEWEAR & ZOEWAVE — THE RAINBOW OF LIVING SKIN',
    'COMPLIMENTARY SHIPPING & SHADE EXCHANGE ON ALL ORDERS',
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
  const [studioDropdownOpen, setStudioDropdownOpen] = useState(false);
  const [journalDropdownOpen, setJournalDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'SHOP', to: '/shop', hasDropdown: true },
    { label: 'COMPLEXION STUDIO', to: '/complexion-studio', isHighlight: true, hasDropdown: true },
    { label: 'ARTICLES & TIPS', to: '/journal', hasDropdown: true },
    { label: 'ABOUT', to: '/about', hasDropdown: true },
  ];

  const shopCategories = [
    { label: 'All Formulations', to: '/shop' },
    { label: 'Complexion Veil', to: '/shop?category=COMPLEXION VEIL' },
    { label: 'Lip Care · Satin', to: '/shop?category=LIP CARE · SATIN' },
    { label: 'Botanical Cheek Flush', to: '/shop?category=BOTANICAL CHEEK FLUSH' },
    { label: 'Multi-Use Sculpt & Eye', to: '/shop?category=MULTI-USE SCULPT' },
    { label: 'Atelier Silk Brushes', to: '/shop?category=BRUSH & SILK TOOL' },
  ];

  const studioCategories = [
    {
      title: 'Biomimetic Shade Finder',
      to: '/complexion-studio#shade-finder-matrix',
      badge: '24 Shades',
      description: 'Depth matrix, undertone diagnostics & 90-sec match quiz',
      isHighlight: true,
    },
    {
      title: 'Real Skin Transformations',
      to: '/complexion-studio#interactive-transformations',
      badge: 'Interactive',
      description: 'Interactive before & after slider on real concerns',
      isHighlight: true,
    },
    {
      title: 'Home Swatch Trio Builder',
      to: '/complexion-studio#sample-trio-builder',
      badge: '$12 Credit',
      description: 'Test 3 adjacent sister shades in ambient natural light',
    },
    {
      title: '3-Minute Living Skin Ritual',
      to: '/complexion-studio#ritual-matrix',
      badge: 'Save 15%',
      description: 'Biomimetic primer, veil & cashmere cushion bundle',
    },
    {
      title: 'Complexion Studio Hub',
      to: '/complexion-studio',
      badge: 'Atelier',
      description: 'Explore the complete unified atelier complexion suite',
    },
  ];

  interface AboutNavItem {
    title: string;
    to: string;
    kind: string;
    description: string;
    isSubItem?: boolean;
    isHighlight?: boolean;
  }

  interface AboutNavGroup {
    heading: string;
    meta: string;
    items: AboutNavItem[];
  }

  const aboutGroups: AboutNavGroup[] = [
    {
      heading: 'About Page',
      meta: 'est. 2027',
      items: [
        {
          title: 'AI Bio-Cosmetology Lab',
          to: '/about',
          kind: 'Page Overview',
          description: 'Origin story, LA & SF labs & formulation science',
        },
        {
          title: 'Biomimetic Lipid Fusion (BLF™)',
          to: '/about#commitments',
          kind: 'Section',
          isSubItem: true,
          description: 'Four commitments to skin biocompatibility',
        },
        {
          title: 'R&D Labs & Studios',
          to: '/about#ateliers',
          kind: 'Section',
          isSubItem: true,
          description: 'Los Angeles · San Francisco · New York',
        },
      ],
    },
    {
      heading: 'Technology Pages',
      meta: '/about/tech',
      items: [
        {
          title: 'Tech & Infrastructure',
          to: '/about/tech',
          kind: 'Hub Page',
          isHighlight: true,
          description: 'Packaging materials & automated retail network',
        },
        {
          title: 'Packaging Innovation',
          to: '/about/tech/packaging',
          kind: 'Sub-Page',
          isSubItem: true,
          description: 'Nude by Nature — compostable bamboo vessels',
        },
        {
          title: 'Biocompostable Engineering',
          to: '/about/tech/packaging/engineering',
          kind: 'Materials & Mfg',
          isSubItem: true,
          description: 'Split-lifecycle PHA, Sulapac, barriers & molding',
        },
        {
          title: 'Distribution Architecture',
          to: '/about/tech/distribution',
          kind: 'Sub-Page',
          isSubItem: true,
          description: 'App, Cloud & NFC dispenser infrastructure',
        },
      ],
    },
    {
      heading: 'Philosophy & Community',
      meta: 'Dedicated Pages',
      items: [
        {
          title: 'The Zoe Manifesto',
          to: '/manifesto',
          kind: 'Page',
          description: 'Three core pillars of living natural beauty',
        },
        {
          title: 'The Zoe Collective',
          to: '/community',
          kind: 'Page',
          description: 'Unretouched client portraits & shade stories',
        },
      ],
    },
  ];

  const journalCategories = [
    {
      title: 'The Zoe Collective & Reviews',
      to: '/community',
      badge: 'Community',
      description: 'Real unretouched client portraits, shade reviews & living skin journeys',
      isHighlight: true,
    },
    {
      title: 'Beauty Tips & Masterclasses',
      to: '/journal?category=APPLICATION TIPS',
      badge: 'Technique',
      description: 'The Art of Epidermal Melt & Z-Glow Cheek placement',
      isHighlight: true,
    },
    {
      title: 'Skin Prep & Living Rituals',
      to: '/journal?category=LIVING RITUALS',
      badge: 'Rituals',
      description: '3-Minute Morning Ritual & Evening Lipid Reset',
    },
    {
      title: 'Biomimetic Science & Lipids',
      to: '/journal?category=BIOMIMETIC SCIENCE',
      badge: 'Science',
      description: 'Micro-algae vs silicones & clean laboratory notes',
    },
    {
      title: 'Shade & Color Diagnostics',
      to: '/journal?category=SHADE & COLOR SCIENCE',
      badge: 'Diagnostics',
      description: 'Vascular flush vs true undertone & Golden Hour test',
    },
    {
      title: 'Biomimetic Ingredient Codex',
      to: '/journal#ingredient-codex',
      badge: 'INCI Codex',
      description: 'Zero silicones · Bio-identical squalane, ectoin & ceramides',
    },
    {
      title: 'Virtual Atelier Concierge',
      to: '/journal#consultation',
      badge: 'Free · 15m',
      description: 'Book 1-on-1 private video shade match with an AI color diagnostic specialist',
    },
    {
      title: 'The Journal (All Stories)',
      to: '/journal',
      badge: 'Editorial',
      description: 'Explore our complete 2027 library of skin narratives',
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Luxury Chromatic Living Spectrum Hairline */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-[#E27D86] via-[#F08060] via-[#E9B858] via-[#689775] via-[#5E8DB8] via-[#8F79B2] to-[#C85A3E]" />

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
            ? 'bg-gradient-to-r from-[#FDF7F2]/95 via-[#FAF1E8]/95 to-[#F8EDE3]/95 backdrop-blur-md shadow-[0_6px_25px_rgba(43,33,30,0.06)] border-b border-[#EADED5]'
            : 'bg-gradient-to-r from-[#FDF7F2] via-[#FAF1E8] to-[#F8EDE3] border-b border-[#EADED5]'
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
                    src={`${import.meta.env.BASE_URL}assets/aistudio/image_3527ead4.png`}
                    alt="ZOE Logo Emblem"
                    className="w-full h-full object-cover rounded-full scale-[1.8] translate-y-[12%]"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline space-x-1 sm:space-x-2">
                    <span className="font-serif text-2xl sm:text-[28px] tracking-wider text-[#2B211E] font-medium transition-colors group-hover:text-[#85513f]">
                      ZOE
                    </span>
                    {/* Deliberate luxury breath/pause mark */}
                    <span className="text-[#85513f] text-sm sm:text-base font-light tracking-widest select-none opacity-85 px-0.5" aria-hidden="true">
                      ·
                    </span>
                    <span className="font-serif text-xs sm:text-[14px] tracking-[0.2em] text-[#5C4D47] font-normal uppercase whitespace-nowrap">
                      NUDE COSMETICS
                    </span>
                  </div>
                  <span className="text-[8px] sm:text-[8.5px] tracking-[0.24em] text-[#8C7A73] uppercase font-sans font-medium -mt-0.5">
                    Beautifully You · Naturally Free
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Center Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-7">
              {navLinks.map((link) => {
                const isAboutActive =
                  link.to === '/about' &&
                  (location.pathname.startsWith('/about') || location.pathname === '/manifesto');
                const isStudioActive =
                  link.to === '/complexion-studio' &&
                  (location.pathname === '/complexion-studio' ||
                    location.pathname === '/studio' ||
                    location.pathname === '/shade-finder' ||
                    location.pathname === '/transformations');
                const isJournalActive =
                  link.to === '/journal' &&
                  (location.pathname === '/journal' ||
                    location.pathname === '/beauty-tips' ||
                    location.pathname === '/editorial');
                const isActive =
                  link.to === '/'
                    ? location.pathname === '/'
                    : isAboutActive ||
                      isStudioActive ||
                      isJournalActive ||
                      location.pathname === link.to ||
                      (link.to !== '/' && location.pathname.startsWith(link.to));

                if (link.label === 'SHOP') {
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

                if (link.label === 'COMPLEXION STUDIO') {
                  return (
                    <div
                      key={link.label}
                      className="relative py-2"
                      onMouseEnter={() => setStudioDropdownOpen(true)}
                      onMouseLeave={() => setStudioDropdownOpen(false)}
                    >
                      <Link
                        to={link.to}
                        className={`text-[11px] font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-200 py-1 flex items-center space-x-1.5 ${
                          isActive
                            ? 'text-[#85513f] font-bold'
                            : 'text-[#4E4542] hover:text-[#85513f]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#85513f]"></span>
                      </Link>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#85513f]"></span>
                      )}

                      {/* Dropdown Menu for Complexion Studio */}
                      {studioDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-[#FCF9F3] border border-[#E8DFD5] rounded-xl shadow-xl py-3 px-2 z-50 animate-fadeIn">
                          <div className="text-[9px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f] px-3 pb-2 mb-1 border-b border-[#F0EEE8] flex items-center justify-between">
                            <span>COMPLEXION STUDIO</span>
                            <span className="text-[8px] text-[#807571] font-normal uppercase tracking-wider">
                              Shade & Skin Atelier
                            </span>
                          </div>
                          {studioCategories.map((item) => (
                            <Link
                              key={item.title}
                              to={item.to}
                              onClick={() => setStudioDropdownOpen(false)}
                              className={`block px-3 py-2.5 rounded-lg transition-colors group ${
                                item.isHighlight
                                  ? 'bg-[#FAF0E6]/70 hover:bg-[#FAF0E6] border border-[#d8a48f]/30 my-0.5'
                                  : 'hover:bg-[#F2EDE4]'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-xs font-sans font-medium transition-colors ${
                                    item.isHighlight
                                      ? 'text-[#85513f] font-semibold group-hover:text-[#2B211E]'
                                      : 'text-[#2B211E]'
                                  }`}
                                >
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-sans tracking-wider uppercase px-1.5 py-0.5 rounded bg-white/80 border border-[#E8DFD5] text-[#85513f]">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[10px] font-sans text-[#6E625D] mt-0.5 line-clamp-1">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.label === 'ARTICLES & TIPS' || link.label === 'JOURNAL') {
                  return (
                    <div
                      key={link.label}
                      className="relative py-2"
                      onMouseEnter={() => setJournalDropdownOpen(true)}
                      onMouseLeave={() => setJournalDropdownOpen(false)}
                    >
                      <Link
                        to={link.to}
                        className={`text-[11px] font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-200 py-1 flex items-center space-x-1.5 ${
                          isActive
                            ? 'text-[#2B211E]'
                            : 'text-[#4E4542] hover:text-[#2B211E]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="text-[9px] text-[#85513f] font-semibold tracking-normal lowercase">tips</span>
                      </Link>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2B211E]"></span>
                      )}

                      {/* Dropdown Menu for Journal & Beauty Tips */}
                      {journalDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-[#FCF9F3] border border-[#E8DFD5] rounded-xl shadow-xl py-3 px-2 z-50 animate-fadeIn">
                          <div className="text-[9px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f] px-3 pb-2 mb-1 border-b border-[#F0EEE8] flex items-center justify-between">
                            <span>BEAUTY TIPS & JOURNAL</span>
                            <span className="text-[8px] text-[#807571] font-normal uppercase tracking-wider">
                              Editorial 2027
                            </span>
                          </div>
                          {journalCategories.map((item) => (
                            <Link
                              key={item.title}
                              to={item.to}
                              onClick={() => setJournalDropdownOpen(false)}
                              className={`block px-3 py-2.5 rounded-lg transition-colors group ${
                                item.isHighlight
                                  ? 'bg-[#FAF0E6]/70 hover:bg-[#FAF0E6] border border-[#d8a48f]/30 my-0.5'
                                  : 'hover:bg-[#F2EDE4]'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-xs font-sans font-medium transition-colors ${
                                    item.isHighlight
                                      ? 'text-[#85513f] font-semibold group-hover:text-[#2B211E]'
                                      : 'text-[#2B211E]'
                                  }`}
                                >
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-sans tracking-wider uppercase px-1.5 py-0.5 rounded bg-white/80 border border-[#E8DFD5] text-[#85513f]">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[10px] font-sans text-[#6E625D] mt-0.5 line-clamp-1">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.label === 'ABOUT') {
                  return (
                    <div
                      key={link.label}
                      className="relative py-2"
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      onMouseLeave={() => setAboutDropdownOpen(false)}
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

                      {/* Structured Dropdown Menu for About */}
                      {aboutDropdownOpen && (
                        <div className="absolute top-full right-0 w-[560px] bg-[#FCF9F3] border border-[#E8DFD5] rounded-xl shadow-xl p-4 z-50 animate-fadeIn">
                          <div className="flex items-center justify-between px-2 pb-2.5 mb-3 border-b border-[#EFE6DC]">
                            <span className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f]">
                              THE HOUSE, TECHNOLOGY &amp; ETHOS
                            </span>
                            <span className="text-[10px] font-sans text-[#807571]">
                              est. 2027
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            {/* Left Column: About Page + Philosophy & Community */}
                            <div className="space-y-4">
                              {[aboutGroups[0], aboutGroups[2]].map((group) => (
                                <div key={group.heading} className="space-y-1">
                                  <div className="flex items-center justify-between px-2.5 pb-1 border-b border-[#F3ECE4]">
                                    <span className="text-[10px] font-sans font-semibold tracking-[0.14em] uppercase text-[#5C4D47]">
                                      {group.heading}
                                    </span>
                                    <span className="text-[9px] font-sans text-[#9A8A83]">
                                      {group.meta}
                                    </span>
                                  </div>
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.title}
                                      to={item.to}
                                      onClick={() => setAboutDropdownOpen(false)}
                                      className={`block px-2.5 py-2 rounded-lg transition-colors group ${
                                        item.isSubItem ? 'pl-4' : ''
                                      } ${
                                        item.isHighlight
                                          ? 'bg-[#FAF0E6]/80 hover:bg-[#FAF0E6]'
                                          : 'hover:bg-[#F2EDE4]'
                                      }`}
                                    >
                                      <div className="flex items-baseline justify-between gap-2">
                                        <span className="text-xs font-sans font-medium text-[#2B211E] group-hover:text-[#85513f] transition-colors">
                                          {item.isSubItem ? `· ${item.title}` : item.title}
                                        </span>
                                        <span className="text-[9px] font-sans text-[#8C7A73] shrink-0">
                                          {item.kind}
                                        </span>
                                      </div>
                                      <p className="text-[10px] font-sans text-[#6E625D] mt-0.5 line-clamp-1 font-light">
                                        {item.description}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>

                            {/* Right Column: Technology Pages */}
                            <div className="space-y-1 bg-[#FAF5EE] rounded-lg p-2.5 border border-[#EFE6DC]">
                              <div className="flex items-center justify-between px-2 pb-1.5 mb-1 border-b border-[#EAE0D5]">
                                <span className="text-[10px] font-sans font-semibold tracking-[0.14em] uppercase text-[#85513f]">
                                  {aboutGroups[1].heading}
                                </span>
                                <span className="text-[9px] font-mono text-[#8C7A73]">
                                  {aboutGroups[1].meta}
                                </span>
                              </div>
                              {aboutGroups[1].items.map((item) => (
                                <Link
                                  key={item.title}
                                  to={item.to}
                                  onClick={() => setAboutDropdownOpen(false)}
                                  className={`block px-2.5 py-2.5 rounded-lg transition-colors group ${
                                    item.isSubItem ? 'pl-4' : ''
                                  } ${
                                    item.isHighlight
                                      ? 'bg-white hover:bg-[#FCF9F3] border border-[#E6D9CE]'
                                      : 'hover:bg-white/80'
                                  }`}
                                >
                                  <div className="flex items-baseline justify-between gap-2">
                                    <span
                                      className={`text-xs font-sans transition-colors ${
                                        item.isHighlight
                                          ? 'font-semibold text-[#85513f] group-hover:text-[#2B211E]'
                                          : 'font-medium text-[#2B211E] group-hover:text-[#85513f]'
                                      }`}
                                    >
                                      {item.isSubItem ? `· ${item.title}` : item.title}
                                    </span>
                                    <span className="text-[9px] font-sans text-[#8C7A73] shrink-0">
                                      {item.kind}
                                    </span>
                                  </div>
                                  <p className="text-[10px] font-sans text-[#6E625D] mt-0.5 line-clamp-1 font-light">
                                    {item.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
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

              {/* Header Mermaid Shell Icon */}
              <Link
                to="/manifesto"
                aria-label="Zoe Nude Manifesto Crest"
                className="w-9 h-9 rounded-full overflow-hidden border border-[#d2c3c0] bg-[#f5ede2] hover:border-[#85513f] transition-all focus:outline-none flex-shrink-0"
              >
                <img
                  src={mermaidShellSealImg}
                  alt="Zoe Nude Mermaid Shell Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[50%_26%] scale-[1.85]"
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
                        {link.label === 'COMPLEXION STUDIO' ? 'Atelier Studio' : 'Diagnostic'}
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

                  {/* Mobile sub-links for Complexion Studio */}
                  {link.label === 'COMPLEXION STUDIO' && (
                    <div className="pl-3 py-1.5 space-y-2 border-l-2 border-[#85513f]/40 my-1 ml-1 bg-[#FAF6F0]/60 rounded-r-lg p-2.5">
                      {studioCategories.map((item) => (
                        <Link
                          key={item.title}
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between text-[11px] font-sans text-[#4E4542] hover:text-[#85513f] py-0.5"
                        >
                          <span className={item.isHighlight ? 'font-semibold text-[#85513f]' : ''}>
                            {item.title}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[#E8DFD5] text-[#85513f] font-medium">
                            {item.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile sub-links for Journal & Beauty Tips */}
                  {(link.label === 'ARTICLES & TIPS' || link.label === 'JOURNAL') && (
                    <div className="pl-3 py-1.5 space-y-2 border-l-2 border-[#85513f]/40 my-1 ml-1 bg-[#FAF6F0]/60 rounded-r-lg p-2.5">
                      {journalCategories.map((item) => (
                        <Link
                          key={item.title}
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between text-[11px] font-sans text-[#4E4542] hover:text-[#85513f] py-0.5"
                        >
                          <span className={item.isHighlight ? 'font-semibold text-[#85513f]' : ''}>
                            {item.title}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[#E8DFD5] text-[#85513f] font-medium">
                            {item.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile sub-links for About with Clear Section Headers */}
                  {link.label === 'ABOUT' && (
                    <div className="pl-3 py-2 space-y-3 border-l border-[#E8DFD5] my-1 ml-1">
                      {aboutGroups.map((group) => (
                        <div key={group.heading} className="space-y-1">
                          <div className="text-[9px] font-sans font-bold tracking-[0.14em] uppercase text-[#85513f] pt-1">
                            {group.heading}
                          </div>
                          {group.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.to}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center justify-between text-[11px] font-sans py-0.5 ${
                                item.isSubItem ? 'pl-2 text-[#6E625D]' : 'text-[#2B211E] font-medium'
                              } hover:text-[#85513f]`}
                            >
                              <span>{item.isSubItem ? `· ${item.title}` : item.title}</span>
                              <span className="text-[9px] text-[#8C7A73]">{item.kind}</span>
                            </Link>
                          ))}
                        </div>
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
