import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Search,
  BookOpen,
  Clock,
  Sparkles,
  ArrowRight,
  Check,
  Share2,
  Bookmark,
  X,
  ChevronRight,
  Eye,
  ShoppingBag,
  SlidersHorizontal,
  Compass,
  ArrowUpRight,
  Filter,
  Calendar,
  Video,
  Award,
  ShieldCheck,
  Droplets,
  Microscope,
  Sun,
  Snowflake,
  Globe,
  Percent,
  Play,
  UserCheck,
  ExternalLink,
  Layers,
  ChevronDown
} from 'lucide-react';
import {
  JOURNAL_ARTICLES,
  JOURNAL_CATEGORIES,
  QUICK_BEAUTY_TIPS,
  SKIN_CONCERN_FILTERS,
  SKIN_CLIMATE_FILTERS,
  ADVISORY_BOARD_EXPERTS,
  INGREDIENT_CODEX,
  MASTERCLASS_REELS
} from '../data/journalData';
import { PRODUCTS, ALL_SHADES } from '../data/cosmeticsData';
import {
  JournalArticle,
  JournalCategory,
  Product,
  Shade,
  SkinConcern,
  SkinClimate,
  MasterclassReel,
  IngredientCodexEntry
} from '../types';

interface JournalPageProps {
  onAddToCart: (product: Product, shade: Shade) => void;
  onQuickView?: (product: Product) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({
  onAddToCart,
  onQuickView
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Category, Skin Concern, Climate, and Search State
  const initialCategory = (searchParams.get('category') as JournalCategory) || 'ALL';
  const [activeCategory, setActiveCategory] = useState<JournalCategory>(
    JOURNAL_CATEGORIES.some(c => c.id === initialCategory) ? initialCategory : 'ALL'
  );
  const [activeSkinConcern, setActiveSkinConcern] = useState<SkinConcern>('ALL');
  const [activeClimate, setActiveClimate] = useState<SkinClimate>('ALL');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Saved / Bookmarked articles in state
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>([
    'art-of-epidermal-melt',
    'three-minute-second-skin-ritual'
  ]);

  // Selected article for full-screen reading modal
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  // Selected reel for video masterclass modal
  const [activeReel, setActiveReel] = useState<MasterclassReel | null>(null);

  // Selected ingredient for Codex detail modal
  const [activeIngredient, setActiveIngredient] = useState<IngredientCodexEntry | null>(null);
  const [codexSearch, setCodexSearch] = useState('');

  // 1-on-1 Virtual Consultation Modal & Form State
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingAtelier, setBookingAtelier] = useState<'Paris Ateliers (Rue Saint-Honoré)' | 'New York Atelier (SoHo)' | 'Virtual Global Concierge'>('Virtual Global Concierge');
  const [bookingDate, setBookingDate] = useState('2027-04-12');
  const [bookingTime, setBookingTime] = useState('14:30 CET (Paris)');
  const [bookingConcern, setBookingConcern] = useState('Shade Diagnostic & Biomimetic Match');

  // Routine Bundle shade selections inside active article
  const [routineShades, setRoutineShades] = useState<Record<string, Shade>>({});

  // Toast alert states
  const [copiedTipId, setCopiedTipId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync category param with URL
  useEffect(() => {
    const cat = searchParams.get('category') as JournalCategory;
    if (cat && JOURNAL_CATEGORIES.some(c => c.id === cat)) {
      setActiveCategory(cat);
    }
    const slug = searchParams.get('article');
    if (slug) {
      const found = JOURNAL_ARTICLES.find(a => a.slug === slug);
      if (found) {
        setActiveArticle(found);
      }
    }
  }, [searchParams]);

  const handleSelectCategory = (cat: JournalCategory) => {
    setActiveCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'ALL') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams);
  };

  const handleOpenArticle = (article: JournalArticle) => {
    setActiveArticle(article);
    // Initialize default shades for related products
    const initialShades: Record<string, Shade> = {};
    article.relatedProductIds.forEach(id => {
      const p = PRODUCTS.find(prod => prod.id === id);
      if (p && p.shades.length > 0) {
        initialShades[id] = p.shades[0];
      }
    });
    setRoutineShades(initialShades);

    const newParams = new URLSearchParams(searchParams);
    newParams.set('article', article.slug);
    setSearchParams(newParams);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('article');
    setSearchParams(newParams);
  };

  const toggleBookmark = (slug: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedSlugs(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const handleCopyTip = (tipId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTipId(tipId);
    setTimeout(() => setCopiedTipId(null), 2500);
  };

  const handleShareArticle = (article: JournalArticle) => {
    const url = `${window.location.origin}/#/journal?article=${article.slug}`;
    navigator.clipboard.writeText(url);
    setToastMessage('Story link copied to clipboard.');
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Add Complete Routine Capsule to Cart with 15% savings
  const handleAddRoutineToCart = (article: JournalArticle) => {
    if (!article.routineCapsule) return;
    const routineProds = PRODUCTS.filter(p => article.routineCapsule?.productIds.includes(p.id));
    
    routineProds.forEach(prod => {
      const selectedShade = routineShades[prod.id] || prod.shades[0] || ALL_SHADES[4];
      onAddToCart(prod, selectedShade);
    });

    setToastMessage(`✓ Added "${article.routineCapsule.bundleTitle}" (${routineProds.length} formulations) to your cart with Atelier savings.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filtered Articles with Category, Concern, Climate, and Search
  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter(article => {
      const matchesCategory =
        activeCategory === 'ALL' || article.category === activeCategory;
      
      const matchesConcern =
        activeSkinConcern === 'ALL' ||
        (article.skinConcerns && article.skinConcerns.includes(activeSkinConcern));

      const matchesClimate =
        activeClimate === 'ALL' ||
        (article.climateFit && article.climateFit.includes(activeClimate));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.author.name.toLowerCase().includes(q) ||
        article.keyTips.some(t => t.toLowerCase().includes(q)) ||
        article.atelierRule.toLowerCase().includes(q);

      return matchesCategory && matchesConcern && matchesClimate && matchesSearch;
    });
  }, [activeCategory, activeSkinConcern, activeClimate, searchQuery]);

  // Filtered Ingredients for Codex
  const filteredIngredients = useMemo(() => {
    if (!codexSearch.trim()) return INGREDIENT_CODEX;
    const q = codexSearch.toLowerCase();
    return INGREDIENT_CODEX.filter(ing =>
      ing.inciName.toLowerCase().includes(q) ||
      ing.commonName.toLowerCase().includes(q) ||
      ing.replacesSynthetic.toLowerCase().includes(q) ||
      ing.clinicalBenefit.toLowerCase().includes(q)
    );
  }, [codexSearch]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) return;
    setConsultationSubmitted(true);
  };

  const getArticleProducts = (productIds: string[]): Product[] => {
    return PRODUCTS.filter(p => productIds.includes(p.id));
  };

  return (
    <div className="bg-gradient-to-b from-[#FDF7F2] via-[#FAF1E8] to-[#F7ECE1] text-[#2B211E] min-h-screen">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2B211E] text-[#FCF9F3] px-5 py-3.5 rounded-xl shadow-2xl border border-[#4E4542] flex items-center space-x-2.5 text-xs font-sans tracking-wide animate-slideUp">
          <Check size={16} className="text-[#d8a48f] flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Editorial Page Header & Institutional Crest with Rainbow Skintone Ambient Multi-Glow */}
      <section className="border-b border-[#EADED5] bg-gradient-to-r from-[#FAF2EB] via-[#FDF6F0] to-[#F5ECE1] pt-14 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8F79B2]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#E27D86]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-[11px] font-sans uppercase tracking-[0.16em] text-[#807571] mb-6">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#2B211E] transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#85513f] font-semibold">Articles, Beauty Tips & Scientific Codex</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.25em] text-[#85513f] uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#85513f]" />
                <span>LES NARRATIVES DU TEINT · EDITION 2027</span>
                <span>·</span>
                <span className="text-[#807571]">CLINICAL & ARTISTIC CODEX</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal tracking-tight leading-[1.08]">
                Skin Narratives, Masterclasses & Biomimetic Science
              </h1>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#5C504A] max-w-2xl leading-relaxed">
                Formulation deep-dives, Parisian master artist techniques, and dermatological
                barrier research direct from our Paris and Kyoto laboratories. All biological truth, zero petrochemical smoke.
              </p>

              {/* Fast Jump Anchor Links */}
              <div className="mt-6 flex flex-wrap gap-2 pt-2">
                <a
                  href="#video-masterclasses"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-[#E8DFD5] rounded-full text-[11px] font-sans font-medium text-[#4E4542] hover:border-[#85513f] hover:text-[#85513f] transition-colors shadow-xs"
                >
                  <Play size={12} className="text-[#85513f]" />
                  <span>Micro-Masterclass Reels</span>
                </a>
                <a
                  href="#advisory-board"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-[#E8DFD5] rounded-full text-[11px] font-sans font-medium text-[#4E4542] hover:border-[#85513f] hover:text-[#85513f] transition-colors shadow-xs"
                >
                  <Award size={12} className="text-[#85513f]" />
                  <span>Scientific & Artist Board</span>
                </a>
                <a
                  href="#ingredient-codex"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-[#E8DFD5] rounded-full text-[11px] font-sans font-medium text-[#4E4542] hover:border-[#85513f] hover:text-[#85513f] transition-colors shadow-xs"
                >
                  <Microscope size={12} className="text-[#85513f]" />
                  <span>Biomimetic Ingredient Codex</span>
                </a>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#85513f] text-white rounded-full text-[11px] font-sans font-medium hover:bg-[#6c4032] transition-colors shadow-xs"
                >
                  <Video size={12} />
                  <span>Book Atelier Concierge (Free)</span>
                </button>
              </div>
            </div>

            {/* Right: Institutional Standards Card */}
            <div className="lg:col-span-4 flex flex-col justify-end space-y-3 text-xs font-sans text-[#6E625D]">
              <div className="bg-white/90 border border-[#E8DFD5] rounded-xl p-5 shadow-xs">
                <div className="flex items-center space-x-2 text-[#85513f] font-semibold text-[11px] uppercase tracking-wider mb-2">
                  <ShieldCheck size={15} />
                  <span>The Clinical Clean Standard</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-[#4E4542]">
                  <div className="p-2 bg-[#FAF6F0] rounded border border-[#F0EEE8]">
                    <span className="font-bold block text-[#2B211E]">0% SILICONES</span>
                    <span>No dimethicone or D4/D5</span>
                  </div>
                  <div className="p-2 bg-[#FAF6F0] rounded border border-[#F0EEE8]">
                    <span className="font-bold block text-[#2B211E]">100% BIO-LIPID</span>
                    <span>Squalane & micro-algae</span>
                  </div>
                  <div className="p-2 bg-[#FAF6F0] rounded border border-[#F0EEE8]">
                    <span className="font-bold block text-[#2B211E]">+41% HYDRATION</span>
                    <span>Clinically verified in vivo</span>
                  </div>
                  <div className="p-2 bg-[#FAF6F0] rounded border border-[#F0EEE8]">
                    <span className="font-bold block text-[#2B211E]">GRADE 0 COMEDO</span>
                    <span>Zero pore congestion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MICRO-MASTERCLASS VIDEO REELS */}
      <section id="video-masterclasses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-[#E8DFD5]">
          <div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block mb-1">
              LIVE UNRETOUCHED DEMONSTRATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
              Micro-Masterclass Reels
            </h2>
          </div>
          <p className="font-sans text-xs text-[#6E625D] mt-1 sm:mt-0 max-w-md">
            Watch exact hand angles, thermal melt pressures, and unpowdered skin reflections on real complexions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MASTERCLASS_REELS.map(reel => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group bg-white border border-[#E8DFD5] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-[#85513f]/60 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#2B211E]">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20">
                  {reel.duration}
                </div>

                {/* Technique Tag */}
                <div className="absolute top-3 right-3 bg-[#d8a48f] text-[#2B211E] text-[9px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {reel.techniqueBadge}
                </div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white text-[#85513f] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} className="ml-1 fill-[#85513f]" />
                  </div>
                </div>

                {/* Overlay Title at bottom of thumb */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] uppercase font-sans tracking-widest text-[#d8a48f] mb-0.5">
                    {reel.artist} · {reel.artistRole}
                  </p>
                  <h4 className="font-serif text-base text-white leading-tight">
                    {reel.title}
                  </h4>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-[#F0EEE8]">
                <p className="text-[11px] font-sans text-[#5C504A] line-clamp-2">
                  {reel.stepsSummary}
                </p>
                <div className="mt-3 flex items-center justify-between text-[10px] text-[#85513f] font-semibold uppercase tracking-wider pt-2 border-t border-[#F5F2EC]">
                  <span>Watch Demonstration</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: 30-SECOND CHEAT SHEET CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white border border-[#E8DFD5] rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(43,33,30,0.06)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 mb-5 border-b border-[#F0EEE8] gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#85513f] flex-shrink-0">
                <Compass size={17} />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-[#2B211E] font-medium">
                  The Atelier Beauty Cheat Sheet
                </h3>
                <p className="font-sans text-[11px] text-[#807571] tracking-wide">
                  Four 30-second rules for undetectable, living second-skin application
                </p>
              </div>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#85513f] font-semibold bg-[#FAF0E6] px-3 py-1 rounded-full border border-[#d8a48f]/40">
              Quick Reference Guide
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_BEAUTY_TIPS.map(tip => (
              <div
                key={tip.id}
                className="bg-[#FAF6F0]/80 border border-[#E8DFD5] rounded-xl p-4 flex flex-col justify-between hover:border-[#85513f]/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f]">
                      {tip.category}
                    </span>
                    <span className="text-[9px] text-[#807571] font-mono">
                      {tip.technique}
                    </span>
                  </div>
                  <h4 className="font-serif text-base text-[#2B211E] font-medium leading-snug">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-[#85513f] italic font-serif mt-0.5 mb-2.5">
                    "{tip.tagline}"
                  </p>
                  <p className="font-sans text-[11px] text-[#4E4542] leading-relaxed">
                    {tip.tip}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#E8DFD5]/60 flex items-center justify-between">
                  <button
                    onClick={() => handleCopyTip(tip.id, `${tip.title}: ${tip.tip}`)}
                    className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#6E625D] hover:text-[#2B211E] flex items-center space-x-1.5 transition-colors"
                  >
                    {copiedTipId === tip.id ? (
                      <>
                        <Check size={12} className="text-[#2F6B43]" />
                        <span className="text-[#2F6B43]">Copied Rule</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={12} />
                        <span>Copy Rule</span>
                      </>
                    )}
                  </button>
                  <span className="text-[10px] font-sans text-[#807571]">
                    30s Guide
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: MULTI-DIMENSIONAL CONCIERGE FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="bg-white border border-[#E8DFD5] rounded-2xl p-6 shadow-xs space-y-5">
          {/* Top Row: Category Tabs & Search */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-4 border-b border-[#F0EEE8]">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-sans font-bold tracking-[0.16em] uppercase text-[#85513f] mr-1 flex-shrink-0">
                TOPIC:
              </span>
              {JOURNAL_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`text-xs font-sans uppercase tracking-[0.12em] px-3.5 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#2B211E] text-white shadow-xs font-semibold'
                      : 'bg-[#FAF6F0] text-[#5C504A] hover:bg-[#F2EDE4] hover:text-[#2B211E]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1.5 text-[10px] opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#807571]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search technique, undertone, squalane..."
                className="w-full bg-[#FAF6F0] border border-[#E8DFD5] rounded-full pl-9 pr-4 py-2 text-xs font-sans placeholder-[#807571] text-[#2B211E] focus:outline-none focus:border-[#2B211E] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#807571] hover:text-[#2B211E]"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Skin Concern Diagnostic & Climate Filters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Skin Concern Filter Pills */}
            <div className="md:col-span-8 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-sans font-bold tracking-[0.16em] uppercase text-[#85513f] mr-1">
                SKIN CONCERN:
              </span>
              {SKIN_CONCERN_FILTERS.map(concern => (
                <button
                  key={concern.id}
                  onClick={() => setActiveSkinConcern(concern.id)}
                  className={`text-[11px] font-sans px-3 py-1 rounded-full transition-all border ${
                    activeSkinConcern === concern.id
                      ? 'bg-[#85513f] text-white border-[#85513f] font-medium'
                      : 'bg-white text-[#5C504A] border-[#E8DFD5] hover:border-[#85513f]'
                  }`}
                  title={concern.description}
                >
                  {concern.label}
                </button>
              ))}
            </div>

            {/* Climate Filter Pills */}
            <div className="md:col-span-4 flex flex-wrap items-center justify-start md:justify-end gap-1.5">
              <span className="text-[10px] font-sans font-bold tracking-[0.16em] uppercase text-[#85513f] mr-1">
                CLIMATE:
              </span>
              {SKIN_CLIMATE_FILTERS.map(clim => (
                <button
                  key={clim.id}
                  onClick={() => setActiveClimate(clim.id)}
                  className={`text-[10px] font-sans px-2.5 py-1 rounded-md transition-all border ${
                    activeClimate === clim.id
                      ? 'bg-[#2B211E] text-white border-[#2B211E]'
                      : 'bg-[#FAF6F0] text-[#6E625D] border-[#E8DFD5] hover:text-[#2B211E]'
                  }`}
                >
                  {clim.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Summary Bar */}
          <div className="flex items-center justify-between text-xs text-[#6E625D] pt-3 border-t border-[#F0EEE8]">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-[#2B211E]">
                Showing {filteredArticles.length} of {JOURNAL_ARTICLES.length} Stories
              </span>
              {activeSkinConcern !== 'ALL' && (
                <span className="bg-[#FAF0E6] text-[#85513f] px-2 py-0.5 rounded text-[10px] font-medium border border-[#d8a48f]/40">
                  Concern: {SKIN_CONCERN_FILTERS.find(c => c.id === activeSkinConcern)?.label}
                </span>
              )}
              {activeClimate !== 'ALL' && (
                <span className="bg-[#FAF0E6] text-[#85513f] px-2 py-0.5 rounded text-[10px] font-medium border border-[#d8a48f]/40">
                  Climate: {SKIN_CLIMATE_FILTERS.find(c => c.id === activeClimate)?.label}
                </span>
              )}
            </div>

            {(activeCategory !== 'ALL' || activeSkinConcern !== 'ALL' || activeClimate !== 'ALL' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('ALL');
                  setActiveSkinConcern('ALL');
                  setActiveClimate('ALL');
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="text-[11px] font-semibold text-[#85513f] hover:underline"
              >
                Reset All Diagnostic Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: MAIN ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E8DFD5] p-8">
            <BookOpen size={36} className="mx-auto text-[#85513f] opacity-60 mb-3" />
            <h3 className="font-serif text-xl text-[#2B211E]">No Curated Narratives Found</h3>
            <p className="font-sans text-xs text-[#6E625D] mt-1 max-w-sm mx-auto">
              We couldn't find any guides matching your current diagnostic filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setActiveSkinConcern('ALL');
                setActiveClimate('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-[#2B211E] text-white rounded-full text-xs font-sans uppercase tracking-wider"
            >
              Reset Filters & Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => {
              const isBookmarked = bookmarkedSlugs.includes(article.slug);
              return (
                <article
                  key={article.id}
                  onClick={() => handleOpenArticle(article)}
                  className="bg-white border border-[#E8DFD5] rounded-2xl overflow-hidden hover:border-[#85513f]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Hero Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF6F0]">
                      <img
                        src={article.heroImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Clinical Verification Badge if available */}
                      {article.clinicalStudy && (
                        <div className="absolute bottom-3 left-3 bg-[#2B211E]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[9px] font-sans flex items-center space-x-1.5 border border-[#85513f]/50">
                          <ShieldCheck size={11} className="text-[#d8a48f]" />
                          <span>{article.clinicalStudy.metric} · Verified</span>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 flex items-center space-x-1.5">
                        <button
                          onClick={e => toggleBookmark(article.slug, e)}
                          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-[#E8DFD5] flex items-center justify-center text-[#2B211E] hover:text-[#85513f] transition-colors shadow-xs"
                          aria-label="Bookmark"
                        >
                          <Bookmark
                            size={14}
                            className={
                              isBookmarked ? 'fill-[#85513f] text-[#85513f]' : ''
                            }
                          />
                        </button>
                      </div>

                      <div className="absolute top-3 left-3">
                        <span className="text-[9px] font-sans font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full bg-white/95 text-[#85513f] border border-[#E8DFD5] shadow-xs">
                          {article.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Author */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-[10px] font-sans uppercase tracking-[0.16em] text-[#807571] mb-2.5">
                        <span className="flex items-center space-x-1">
                          <Clock size={11} />
                          <span>{article.readTime}</span>
                        </span>
                        <span>·</span>
                        <span>{article.publishedDate}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#2B211E] font-medium leading-snug group-hover:text-[#85513f] transition-colors">
                        {article.title}
                      </h3>

                      <p className="font-sans text-xs text-[#5C504A] mt-2 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Memorable Rule Preview */}
                      <div className="mt-4 p-3 bg-[#FAF0E6]/70 rounded-lg border border-[#d8a48f]/30">
                        <p className="font-serif text-xs italic text-[#2B211E] line-clamp-2">
                          "{article.atelierRule}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer with Author and Read Story CTA */}
                  <div className="px-6 pb-6 pt-2 border-t border-[#F0EEE8] flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#85513f]/40"
                      />
                      <div className="text-left">
                        <p className="font-sans text-[11px] font-medium text-[#2B211E] leading-none">
                          {article.author.name}
                        </p>
                        <p className="font-sans text-[9px] text-[#807571] leading-none mt-0.5">
                          {article.author.role.split(',')[0]}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center space-x-1 text-xs font-sans font-semibold uppercase tracking-wider text-[#85513f] group-hover:translate-x-1 transition-transform">
                      <span>Read Story</span>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* SECTION 6: SCIENTIFIC & ARTIST ADVISORY BOARD */}
      <section id="advisory-board" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-[#FAF6F0] border border-[#E8DFD5] rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.25em] text-[#85513f] uppercase mb-2">
              <Award size={14} />
              <span>THE ATELIER ADVISORY COUNCIL</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#2B211E] font-normal leading-tight">
              Clinical Corneobiology Meets Parisian Haute Beauté
            </h2>
            <p className="mt-3 font-sans text-xs sm:text-sm text-[#5C504A] leading-relaxed">
              Every formula and masterclass rule is co-signed by leading barrier dermatologists, green chemists, and couture film artists. Never intuition alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADVISORY_BOARD_EXPERTS.map(expert => (
              <div
                key={expert.id}
                className="bg-white border border-[#E8DFD5] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-[#85513f] transition-colors"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={expert.portrait}
                      alt={expert.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#85513f]/40 shadow-xs"
                    />
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#2B211E]">
                        {expert.name}
                      </h4>
                      <p className="text-[11px] font-sans text-[#85513f] font-medium leading-snug">
                        {expert.title}
                      </p>
                      <p className="text-[10px] font-sans text-[#807571] mt-0.5">
                        {expert.institution} · {expert.location}
                      </p>
                    </div>
                  </div>

                  <p className="font-serif text-xs italic text-[#3D332F] leading-relaxed mb-4 bg-[#FAF6F0] p-3.5 rounded-xl border border-[#F0EEE8]">
                    {expert.quote}
                  </p>

                  <div className="text-[10px] font-sans text-[#6E625D] space-y-1">
                    <span className="font-bold text-[#2B211E] uppercase tracking-wider block">
                      Core Focus:
                    </span>
                    <p>{expert.focusArea}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0EEE8] flex flex-wrap gap-1.5">
                  {expert.verifiedBadges.map((badge, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-sans bg-[#FAF0E6] text-[#85513f] px-2 py-0.5 rounded-full border border-[#d8a48f]/40 font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BIOMIMETIC INGREDIENT CODEX & INCI EXPLORER */}
      <section id="ingredient-codex" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white border border-[#E8DFD5] rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-[#F0EEE8] gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.25em] text-[#85513f] uppercase mb-2">
                <Microscope size={14} />
                <span>INCI TRANSPARENCY & BIO-IDENTICAL MATRIX</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#2B211E] font-normal leading-tight">
                The Biomimetic Ingredient Codex
              </h2>
              <p className="mt-2 font-sans text-xs sm:text-sm text-[#5C504A] leading-relaxed">
                Discover what replaces synthetic petrochemical silicones, plastic thickeners, and heavy talcs in every ZoeNude formulation.
              </p>
            </div>

            {/* Codex Search Box */}
            <div className="relative min-w-[280px]">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#807571]"
              />
              <input
                type="text"
                value={codexSearch}
                onChange={e => setCodexSearch(e.target.value)}
                placeholder="Filter active biomimetic ingredient..."
                className="w-full bg-[#FAF6F0] border border-[#E8DFD5] rounded-full pl-9 pr-4 py-2.5 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIngredients.map(ing => (
              <div
                key={ing.id}
                onClick={() => setActiveIngredient(ing)}
                className="bg-[#FAF6F0]/60 border border-[#E8DFD5] rounded-2xl p-6 hover:border-[#85513f] hover:bg-white transition-all cursor-pointer flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-sans font-bold tracking-[0.16em] uppercase text-[#85513f] bg-[#FAF0E6] px-2 py-0.5 rounded border border-[#d8a48f]/30">
                      {ing.skinAffinity}
                    </span>
                    <span className="text-[10px] text-[#807571] font-mono">
                      {ing.origin.split('·')[0]}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-[#2B211E] group-hover:text-[#85513f] transition-colors leading-snug">
                    {ing.inciName}
                  </h4>
                  <p className="text-xs font-sans text-[#85513f] mt-0.5 mb-3 font-medium">
                    {ing.commonName}
                  </p>

                  <div className="space-y-2.5 text-xs font-sans">
                    <div className="p-2.5 bg-white rounded-lg border border-[#F0EEE8]">
                      <span className="text-[9px] uppercase font-bold text-[#807571] block">
                        Replaces Synthetic:
                      </span>
                      <span className="text-red-700 font-medium text-[11px]">
                        ✕ {ing.replacesSynthetic}
                      </span>
                    </div>

                    <div className="p-2.5 bg-[#FAF0E6]/50 rounded-lg border border-[#d8a48f]/20">
                      <span className="text-[9px] uppercase font-bold text-[#85513f] block">
                        Clinical Biological Action:
                      </span>
                      <span className="text-[#3D332F] text-[11px] leading-relaxed">
                        ✓ {ing.clinicalBenefit}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DFD5]/60 flex items-center justify-between text-[10px] font-sans text-[#85513f] font-semibold uppercase tracking-wider">
                  <span>View Clinical Bio-Action</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: 1-ON-1 VIRTUAL CONCIERGE CONSULTATION BOOKING CARD */}
      <section id="consultation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-r from-[#2B211E] to-[#433430] text-[#FCF9F3] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.25em] text-[#d8a48f] uppercase mb-2">
                <Video size={14} />
                <span>WHITE-GLOVE ATELIER CONCIERGE</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF6F0] font-normal leading-tight">
                Complimentary 15-Minute Virtual Consultation with a Paris Colorist
              </h3>
              <p className="mt-3 font-sans text-xs sm:text-sm text-[#D1C7BD] leading-relaxed max-w-2xl">
                Still hesitating between sister shades or managing rosacea flare-ups? Meet 1-on-1 via private video link with a certified ZoeNude Paris Atelier Colorist in ambient natural daylight. Zero sales pressure.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-sans text-[#FAF6F0]">
                <div className="flex items-center space-x-2">
                  <Check size={14} className="text-[#d8a48f]" />
                  <span>100% Complimentary ($0)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check size={14} className="text-[#d8a48f]" />
                  <span>Ambient Day-Light Live Match</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check size={14} className="text-[#d8a48f]" />
                  <span>Includes $15 Swatch Atelier Credit</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full sm:w-auto bg-[#d8a48f] hover:bg-[#c99580] text-[#2B211E] px-8 py-4 rounded-full text-xs font-sans font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <Calendar size={16} />
                <span>Book Virtual Session</span>
              </button>
              <span className="text-[10px] font-sans text-[#A89C94] mt-3">
                Paris, New York & Worldwide time slots available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: THE ZOE COLLECTIVE / REAL SKIN STORIES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#FAF6F0] border border-[#E8DFD5] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.25em] text-[#85513f] uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#85513f]" />
                <span>THE ZOE COLLECTIVE · COMMUNITY REVIEWS & REAL SKIN</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#2B211E] font-normal leading-tight">
                Living Proof on 10,000+ Unretouched Complexions
              </h3>
              <p className="mt-3 font-sans text-xs sm:text-sm text-[#5C504A] leading-relaxed">
                Beyond editorial advice lies the truth of living wear. Explore authentic shade reviews, high-resolution daylight portraits, and real skin journeys across all 24 shades.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => navigate('/community')}
                className="w-full sm:w-auto bg-[#2B211E] hover:bg-[#433430] text-white px-6 py-3.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Explore The Collective</span>
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => navigate('/complexion-studio#shade-finder-matrix')}
                className="w-full sm:w-auto bg-white hover:bg-[#F2EDE4] text-[#2B211E] border border-[#E8DFD5] px-6 py-3.5 rounded-full text-xs font-sans font-medium tracking-wider uppercase transition-colors flex items-center justify-center"
              >
                <span>Find Your Shade</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FULL ARTICLE READING DRAWER / MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div
            className="w-full max-w-3xl bg-[#FCF9F3] text-[#2B211E] min-h-screen shadow-2xl flex flex-col justify-between overflow-y-auto animate-slideLeft"
            onClick={e => e.stopPropagation()}
          >
            {/* Top Reader Sticky Nav */}
            <div className="sticky top-0 z-20 bg-[#FCF9F3]/95 backdrop-blur-md border-b border-[#E8DFD5] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[10px] font-sans uppercase tracking-[0.16em] text-[#807571]">
                <span className="text-[#85513f] font-semibold">{activeArticle.categoryLabel}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
                <span>·</span>
                <span>{activeArticle.publishedDate}</span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleShareArticle(activeArticle)}
                  className="p-2 rounded-full border border-[#E8DFD5] hover:bg-[#F2EDE4] text-[#2B211E] transition-colors"
                  title="Copy Article Link"
                  aria-label="Share story"
                >
                  <Share2 size={15} />
                </button>
                <button
                  onClick={() => toggleBookmark(activeArticle.slug)}
                  className="p-2 rounded-full border border-[#E8DFD5] hover:bg-[#F2EDE4] text-[#2B211E] transition-colors"
                  title="Save Story"
                  aria-label="Bookmark story"
                >
                  <Bookmark
                    size={15}
                    className={
                      bookmarkedSlugs.includes(activeArticle.slug)
                        ? 'fill-[#85513f] text-[#85513f]'
                        : ''
                    }
                  />
                </button>
                <button
                  onClick={handleCloseArticle}
                  className="p-2 rounded-full border border-[#E8DFD5] hover:bg-[#2B211E] hover:text-white transition-colors"
                  aria-label="Close story"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Main Article Body */}
            <div className="px-6 sm:px-12 py-8 flex-1">
              {/* Header Title Area */}
              <div className="mb-8">
                <h1 className="font-serif text-2xl sm:text-4xl text-[#2B211E] font-normal leading-tight">
                  {activeArticle.title}
                </h1>
                <p className="mt-2 font-sans text-sm sm:text-base text-[#6E625D]">
                  {activeArticle.subtitle}
                </p>

                {/* Author Card & Co-Reviewer */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E8DFD5]">
                  <div className="flex items-center space-x-3.5">
                    <img
                      src={activeArticle.author.avatar}
                      alt={activeArticle.author.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#85513f]/40"
                    />
                    <div>
                      <div className="font-serif text-sm font-medium text-[#2B211E]">
                        {activeArticle.author.name}
                      </div>
                      <div className="text-[11px] font-sans text-[#807571]">
                        {activeArticle.author.role}
                      </div>
                    </div>
                  </div>

                  {activeArticle.clinicalStudy && (
                    <div className="flex items-center space-x-2 bg-[#FAF0E6] px-3 py-1.5 rounded-lg border border-[#d8a48f]/40 text-[10px] font-sans text-[#85513f]">
                      <ShieldCheck size={14} />
                      <span>Clinically Verified by {activeArticle.clinicalStudy.verifiedBy}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-8 border border-[#E8DFD5] shadow-xs">
                <img
                  src={activeArticle.heroImage}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Core Atelier Rule Box */}
              <div className="bg-[#FAF0E6] border border-[#d8a48f]/60 rounded-xl p-5 mb-8">
                <div className="flex items-center space-x-2 text-[10px] font-sans font-bold tracking-[0.16em] uppercase text-[#85513f] mb-1.5">
                  <Sparkles size={14} />
                  <span>The Living Atelier Rule</span>
                </div>
                <p className="font-serif text-base text-[#2B211E] italic leading-relaxed">
                  "{activeArticle.atelierRule}"
                </p>
              </div>

              {/* Article Paragraphs */}
              <div className="prose prose-stone max-w-none space-y-5 text-[#3D332F] font-sans text-sm sm:text-base leading-relaxed">
                {activeArticle.contentParagraphs.map((para, i) => (
                  <p key={i} className={i === 0 ? 'first-letter:font-serif first-letter:text-4xl first-letter:float-left first-letter:mr-2.5 first-letter:text-[#85513f]' : ''}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Pull Quote */}
              {activeArticle.pullQuote && (
                <div className="my-8 py-6 border-y border-[#E8DFD5] text-center px-4">
                  <p className="font-serif italic text-lg sm:text-xl text-[#2B211E] max-w-lg mx-auto">
                    "{activeArticle.pullQuote.text}"
                  </p>
                  <span className="block mt-2 text-[10px] font-sans uppercase tracking-[0.18em] text-[#85513f]">
                    — {activeArticle.pullQuote.attribution}
                  </span>
                </div>
              )}

              {/* Masterclass Step-by-Step Instructions */}
              {activeArticle.steps && activeArticle.steps.length > 0 && (
                <div className="my-8 bg-white border border-[#E8DFD5] rounded-2xl p-6 sm:p-7 shadow-xs">
                  <div className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f] mb-4 flex items-center justify-between">
                    <span>STEP-BY-STEP APPLICATION MASTERCLASS</span>
                    <span className="text-[9px] text-[#807571]">Parisian Technique</span>
                  </div>
                  <div className="space-y-4">
                    {activeArticle.steps.map(step => (
                      <div key={step.stepNumber} className="flex items-start space-x-4">
                        <span className="font-serif text-lg text-[#85513f] font-bold w-7 flex-shrink-0">
                          {step.stepNumber}
                        </span>
                        <div>
                          <h4 className="font-serif text-sm font-semibold text-[#2B211E]">
                            {step.title}
                          </h4>
                          <p className="font-sans text-xs text-[#5C504A] mt-0.5 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CLINICAL STUDY METRIC CARD */}
              {activeArticle.clinicalStudy && (
                <div className="my-8 bg-gradient-to-br from-[#FAF6F0] to-[#FAF0E6] border border-[#d8a48f]/50 rounded-2xl p-6 shadow-xs">
                  <div className="flex items-center space-x-2 text-[10px] font-sans font-bold tracking-[0.2em] text-[#85513f] uppercase mb-2">
                    <Microscope size={14} />
                    <span>CLINICAL EVIDENCE PROTOCOL</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-serif text-3xl font-normal text-[#2B211E]">
                        {activeArticle.clinicalStudy.metric}
                      </div>
                      <p className="font-sans text-xs font-semibold text-[#85513f] mt-0.5">
                        {activeArticle.clinicalStudy.label}
                      </p>
                      <p className="font-sans text-xs text-[#5C504A] mt-1 leading-relaxed">
                        {activeArticle.clinicalStudy.context}
                      </p>
                    </div>
                    <div className="text-[10px] font-sans text-[#807571] bg-white p-3 rounded-lg border border-[#E8DFD5] flex-shrink-0">
                      <span className="block font-semibold text-[#2B211E]">Trial Duration:</span>
                      <span>{activeArticle.clinicalStudy.duration}</span>
                      <span className="block font-semibold text-[#2B211E] mt-1">Verified By:</span>
                      <span>{activeArticle.clinicalStudy.verifiedBy}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* INTERACTIVE "SHOP THE COMPLETE ROUTINE" CAPSULE */}
              {activeArticle.routineCapsule && (
                <div className="my-10 bg-[#2B211E] text-[#FCF9F3] rounded-2xl p-6 sm:p-8 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#433430]">
                    <div>
                      <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#d8a48f] uppercase block">
                        COMPLETE ATELIER ROUTINE CAPSULE
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-white">
                        {activeArticle.routineCapsule.bundleTitle}
                      </h3>
                    </div>
                    <span className="inline-flex items-center space-x-1 text-xs bg-[#d8a48f] text-[#2B211E] px-3 py-1 rounded-full font-bold">
                      <Percent size={12} />
                      <span>{activeArticle.routineCapsule.savingsNote}</span>
                    </span>
                  </div>

                  <p className="text-xs text-[#D1C7BD] mb-5">
                    Layer these exact harmonious formulations as described in the masterclass above. Select your preferred sister shades below:
                  </p>

                  {/* Product Bundle Selector Grid */}
                  <div className="space-y-3 mb-6">
                    {getArticleProducts(activeArticle.routineCapsule.productIds).map(prod => {
                      const currentShade = routineShades[prod.id] || prod.shades[0] || ALL_SHADES[4];
                      return (
                        <div
                          key={prod.id}
                          className="bg-[#3D312E] border border-[#524440] rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              src={prod.image}
                              alt={prod.title}
                              className="w-12 h-12 rounded-lg object-cover bg-white/10 flex-shrink-0"
                            />
                            <div>
                              <h5 className="font-serif text-sm text-white font-medium">
                                {prod.title}
                              </h5>
                              <p className="text-[11px] text-[#A89C94]">
                                {prod.subtitle} · ${prod.price}
                              </p>
                            </div>
                          </div>

                          {/* Shade picker if product has shades */}
                          {prod.shades && prod.shades.length > 0 && (
                            <div className="flex items-center space-x-2">
                              <span
                                className="w-4 h-4 rounded-full border border-white/40 flex-shrink-0"
                                style={{ backgroundColor: currentShade.hex }}
                              />
                              <select
                                value={currentShade.id}
                                onChange={e => {
                                  const found = prod.shades.find(s => s.id === e.target.value);
                                  if (found) {
                                    setRoutineShades(prev => ({ ...prev, [prod.id]: found }));
                                  }
                                }}
                                className="bg-[#2B211E] text-white border border-[#6E625D] rounded px-2.5 py-1 text-xs font-sans focus:outline-none focus:border-[#d8a48f]"
                              >
                                {prod.shades.map(shade => (
                                  <option key={shade.id} value={shade.id}>
                                    {shade.code} {shade.name} ({shade.undertone})
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* 1-Click Bundle Add To Cart */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#433430]">
                    <div>
                      <span className="text-[10px] text-[#A89C94] uppercase tracking-wider block">
                        Routine Bundle Total
                      </span>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif text-2xl text-[#FAF6F0] font-normal">
                          $
                          {Math.round(
                            getArticleProducts(activeArticle.routineCapsule.productIds).reduce(
                              (sum, p) => sum + p.price,
                              0
                            ) *
                              (1 - activeArticle.routineCapsule.discountPercent / 100)
                          )}
                        </span>
                        <span className="text-xs text-[#A89C94] line-through">
                          $
                          {getArticleProducts(
                            activeArticle.routineCapsule.productIds
                          ).reduce((sum, p) => sum + p.price, 0)}
                        </span>
                        <span className="text-[11px] text-[#d8a48f] font-semibold">
                          (Save {activeArticle.routineCapsule.discountPercent}%)
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddRoutineToCart(activeArticle)}
                      className="w-full sm:w-auto bg-[#d8a48f] hover:bg-[#c99580] text-[#2B211E] px-6 py-3.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2"
                    >
                      <ShoppingBag size={15} />
                      <span>Add Complete Routine to Cart</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Individual Formulations Used in this Story */}
              {activeArticle.relatedProductIds && activeArticle.relatedProductIds.length > 0 && (
                <div className="my-10 pt-8 border-t border-[#E8DFD5]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f]">
                        INDIVIDUAL ESSENTIALS
                      </span>
                      <h3 className="font-serif text-lg text-[#2B211E]">
                        Explore Formulations Separately
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {getArticleProducts(activeArticle.relatedProductIds).map(prod => {
                      const firstShade = prod.shades[0] || ALL_SHADES[4];
                      return (
                        <div
                          key={prod.id}
                          className="bg-white border border-[#E8DFD5] rounded-xl p-4 flex flex-col justify-between hover:border-[#85513f] transition-colors group"
                        >
                          <div className="flex space-x-3.5">
                            <img
                              src={prod.image}
                              alt={prod.title}
                              className="w-16 h-16 rounded-lg object-cover bg-[#FAF6F0] flex-shrink-0"
                            />
                            <div>
                              <h4 className="font-serif text-sm font-semibold text-[#2B211E] group-hover:text-[#85513f] transition-colors">
                                {prod.title}
                              </h4>
                              <p className="font-sans text-[11px] text-[#807571] mt-0.5">
                                {prod.subtitle}
                              </p>
                              <div className="font-sans text-xs font-semibold text-[#2B211E] mt-1.5">
                                ${prod.price}
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-[#F0EEE8] flex items-center justify-between">
                            <button
                              onClick={() => onQuickView && onQuickView(prod)}
                              className="text-[10px] font-sans text-[#807571] hover:text-[#2B211E] flex items-center space-x-1"
                            >
                              <Eye size={12} />
                              <span>Quick View</span>
                            </button>
                            <button
                              onClick={() => {
                                onAddToCart(prod, firstShade);
                                setToastMessage(`Added ${prod.title} to cart.`);
                                setTimeout(() => setToastMessage(null), 2500);
                              }}
                              className="bg-[#2B211E] hover:bg-[#85513f] text-white px-3 py-1.5 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase transition-colors flex items-center space-x-1.5"
                            >
                              <ShoppingBag size={11} />
                              <span>Add Shade {firstShade.code}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Sticky Action Footer */}
            <div className="sticky bottom-0 z-20 bg-[#FCF9F3] border-t border-[#E8DFD5] px-6 py-4 flex items-center justify-between">
              <button
                onClick={handleCloseArticle}
                className="text-xs font-sans font-semibold uppercase tracking-wider text-[#6E625D] hover:text-[#2B211E]"
              >
                ← Back to All Stories
              </button>

              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  handleCloseArticle();
                  navigate('/complexion-studio#shade-finder-matrix');
                }}
                className="bg-[#2B211E] hover:bg-[#433430] text-white px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors"
              >
                Launch Biomimetic Shade Finder →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MASTERCLASS VIDEO REEL MODAL */}
      {activeReel && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="w-full max-w-xl bg-[#2B211E] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#433430] animate-scaleUp"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black overflow-hidden">
              <img
                src={activeReel.thumbnail}
                alt={activeReel.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211E] via-transparent to-black/40" />

              {/* Close Button */}
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-[#2B211E] transition-colors"
                aria-label="Close video"
              >
                <X size={18} />
              </button>

              {/* Mock Ambient Video Player Playhead */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                  <Play size={28} className="ml-1 fill-white" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-[#d8a48f]">
                  4K 60FPS AMBIENT DEMO · {activeReel.duration}
                </span>
                <h3 className="font-serif text-2xl text-white mt-1">
                  {activeReel.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#433430]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A89C94] block">
                    Lead Artist
                  </span>
                  <span className="font-serif text-sm text-white">
                    {activeReel.artist} ({activeReel.artistRole})
                  </span>
                </div>
                <span className="text-[10px] font-sans font-bold bg-[#d8a48f] text-[#2B211E] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {activeReel.techniqueBadge}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#d8a48f] block mb-1">
                  Technique Breakdown:
                </span>
                <p className="text-xs text-[#D1C7BD] leading-relaxed">
                  {activeReel.stepsSummary}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveReel(null)}
                  className="text-xs text-[#A89C94] hover:text-white uppercase tracking-wider"
                >
                  Close Reel
                </button>
                <button
                  onClick={() => {
                    setActiveReel(null);
                    navigate('/complexion-studio#interactive-transformations');
                  }}
                  className="bg-[#d8a48f] hover:bg-[#c99580] text-[#2B211E] px-6 py-2.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-colors"
                >
                  Try Transformations Slider
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INGREDIENT CODEX DETAIL MODAL */}
      {activeIngredient && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="w-full max-w-lg bg-[#FCF9F3] text-[#2B211E] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DFD5] animate-scaleUp"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5]">
              <div className="flex items-center space-x-2">
                <Microscope size={16} className="text-[#85513f]" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#85513f]">
                  BIOMIMETIC INCI CODEX
                </span>
              </div>
              <button
                onClick={() => setActiveIngredient(null)}
                className="p-1 rounded-full text-[#807571] hover:text-[#2B211E]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="py-5 space-y-4">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#807571]">
                  Official INCI Nomenclature
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2B211E]">
                  {activeIngredient.inciName}
                </h3>
                <p className="text-xs font-sans text-[#85513f] font-medium mt-0.5">
                  {activeIngredient.commonName}
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#E8DFD5] space-y-2 text-xs">
                <div>
                  <span className="font-bold text-[#807571] text-[10px] uppercase block">
                    Source & Biome Origin:
                  </span>
                  <span>{activeIngredient.origin}</span>
                </div>
                <div>
                  <span className="font-bold text-[#807571] text-[10px] uppercase block">
                    Biomimetic Mechanism:
                  </span>
                  <span>{activeIngredient.biomimeticRole}</span>
                </div>
              </div>

              <div className="p-3.5 bg-red-50/60 rounded-xl border border-red-100 text-xs">
                <span className="font-bold text-red-800 text-[10px] uppercase block mb-0.5">
                  Eliminated Synthetic Ingredient:
                </span>
                <span className="text-red-900 font-medium">{activeIngredient.replacesSynthetic}</span>
              </div>

              <div className="p-3.5 bg-[#FAF0E6] rounded-xl border border-[#d8a48f]/40 text-xs">
                <span className="font-bold text-[#85513f] text-[10px] uppercase block mb-0.5">
                  Clinical Trial Benefit:
                </span>
                <span className="text-[#2B211E]">{activeIngredient.clinicalBenefit}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
              <button
                onClick={() => setActiveIngredient(null)}
                className="text-xs font-sans uppercase tracking-wider text-[#807571] hover:text-[#2B211E]"
              >
                Close Codex
              </button>
              <button
                onClick={() => {
                  setActiveIngredient(null);
                  navigate('/shop');
                }}
                className="bg-[#2B211E] text-white px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold hover:bg-[#85513f] transition-colors"
              >
                Shop Containing Formulations
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIRTUAL ATELIER CONCIERGE BOOKING MODAL */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="w-full max-w-xl bg-[#FCF9F3] text-[#2B211E] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DFD5] animate-scaleUp"
            onClick={e => e.stopPropagation()}
          >
            {consultationSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAF2EC] text-[#2F6B43] mx-auto flex items-center justify-center">
                  <Check size={32} />
                </div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#85513f] block">
                  ATELIER RESERVATION CONFIRMED
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
                  Your Paris Consultation is Booked
                </h3>
                <p className="font-sans text-xs text-[#5C504A] max-w-md mx-auto leading-relaxed">
                  We have sent your private Google Meet video room pass and digital daylight swatch checklist to <span className="font-semibold text-[#2B211E]">{bookingEmail}</span> for <span className="font-semibold text-[#2B211E]">{bookingDate} at {bookingTime}</span>.
                </p>
                <div className="p-4 bg-white rounded-xl border border-[#E8DFD5] max-w-sm mx-auto text-xs text-left">
                  <span className="font-bold text-[#85513f] block text-[10px] uppercase">
                    Client Pass:
                  </span>
                  <div>{bookingName}</div>
                  <div className="text-[#807571] text-[11px]">{bookingAtelier}</div>
                  <div className="text-[#2F6B43] font-semibold mt-1">✓ $15 Swatch Credit Attached</div>
                </div>
                <button
                  onClick={() => {
                    setIsConsultationOpen(false);
                    setConsultationSubmitted(false);
                  }}
                  className="mt-4 px-6 py-3 bg-[#2B211E] text-white rounded-full text-xs font-sans font-semibold tracking-wider uppercase hover:bg-[#85513f] transition-colors"
                >
                  Return to Journal
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD5]">
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#85513f] block">
                      PRIVATE ATELIER APPOINTMENT
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2B211E]">
                      Book Virtual Skin Consultation
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsConsultationOpen(false)}
                    className="p-1 rounded-full text-[#807571] hover:text-[#2B211E]"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="text-xs text-[#5C504A]">
                  15 minutes with a master colorist via private video link. We diagnose your vascular baseline, test sister shades in ambient light, and prepare your bespoke formulation trio.
                </p>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-[#6E625D] mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={e => setBookingName(e.target.value)}
                        placeholder="e.g. Camille Laurent"
                        className="w-full bg-white border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-[#6E625D] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingEmail}
                        onChange={e => setBookingEmail(e.target.value)}
                        placeholder="camille@domain.com"
                        className="w-full bg-white border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#6E625D] mb-1">
                      Atelier Location & Timezone
                    </label>
                    <select
                      value={bookingAtelier}
                      onChange={e => setBookingAtelier(e.target.value as any)}
                      className="w-full bg-white border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                    >
                      <option value="Virtual Global Concierge">Virtual Global Concierge (Direct Video Link)</option>
                      <option value="Paris Ateliers (Rue Saint-Honoré)">Paris Atelier (Rue Saint-Honoré 1er)</option>
                      <option value="New York Atelier (SoHo)">New York Atelier (SoHo Greene St)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-[#6E625D] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={e => setBookingDate(e.target.value)}
                        className="w-full bg-white border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-[#6E625D] mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={bookingTime}
                        onChange={e => setBookingTime(e.target.value)}
                        className="w-full bg-white border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                      >
                        <option value="10:00 CET (Paris Morning Daylight)">10:00 CET (Paris Morning Daylight)</option>
                        <option value="14:30 CET (Paris Diffuse Midday)">14:30 CET (Paris Diffuse Midday)</option>
                        <option value="17:00 CET (Golden Hour Session)">17:00 CET (Golden Hour Session)</option>
                        <option value="11:00 EST (New York Morning)">11:00 EST (New York Morning)</option>
                        <option value="15:00 EST (New York Afternoon)">15:00 EST (New York Afternoon)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#6E625D] mb-1">
                      Primary Consultation Focus
                    </label>
                    <select
                      value={bookingConcern}
                      onChange={e => setBookingConcern(e.target.value)}
                      className="w-full bg-white border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                    >
                      <option value="Shade Diagnostic & Biomimetic Match">Shade Diagnostic & Sister Match Selection</option>
                      <option value="Rosacea & Vascular Flush Correction">Rosacea & Facial Redness Neutralization</option>
                      <option value="Dry Stratum Corneum & Barrier Prep">Dry Skin & Flaking Prevention Protocol</option>
                      <option value="Mature Skin Anti-Settling Method">Mature Skin & Fine Line Fluidity</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
                  <span className="text-[11px] text-[#2F6B43] font-semibold">
                    ✓ 100% Free · No Purchase Necessary
                  </span>
                  <button
                    type="submit"
                    className="bg-[#2B211E] hover:bg-[#85513f] text-white px-6 py-2.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-colors"
                  >
                    Confirm Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
