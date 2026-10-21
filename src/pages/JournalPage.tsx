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
  Filter
} from 'lucide-react';
import {
  JOURNAL_ARTICLES,
  JOURNAL_CATEGORIES,
  QUICK_BEAUTY_TIPS
} from '../data/journalData';
import { PRODUCTS, ALL_SHADES } from '../data/cosmeticsData';
import { JournalArticle, JournalCategory, Product, Shade } from '../types';

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

  // Category and Search State
  const initialCategory = (searchParams.get('category') as JournalCategory) || 'ALL';
  const [activeCategory, setActiveCategory] = useState<JournalCategory>(
    JOURNAL_CATEGORIES.some(c => c.id === initialCategory) ? initialCategory : 'ALL'
  );
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Saved / Bookmarked articles in state
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>([
    'art-of-epidermal-melt',
    'three-minute-second-skin-ritual'
  ]);

  // Selected article for full-screen reading modal
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  // Copied toast state
  const [copiedTipId, setCopiedTipId] = useState<string | null>(null);
  const [shareToast, setShareToast] = useState(false);

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
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter(article => {
      const matchesCategory =
        activeCategory === 'ALL' || article.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.author.name.toLowerCase().includes(q) ||
        article.keyTips.some(t => t.toLowerCase().includes(q)) ||
        article.atelierRule.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredStory = JOURNAL_ARTICLES[0]; // "The Art of Epidermal Melt"

  // Helper to get products linked to an article
  const getArticleProducts = (productIds: string[]): Product[] => {
    return PRODUCTS.filter(p => productIds.includes(p.id));
  };

  return (
    <div className="bg-[#FCF9F3] text-[#2B211E] min-h-screen">
      {/* Toast Alert for Share */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2B211E] text-[#FCF9F3] px-5 py-3 rounded-lg shadow-2xl border border-[#4E4542] flex items-center space-x-2 text-xs font-sans tracking-wide animate-slideUp">
          <Check size={14} className="text-[#d8a48f]" />
          <span>Article link copied to clipboard.</span>
        </div>
      )}

      {/* Editorial Page Header */}
      <section className="border-b border-[#E8DFD5] bg-[#FAF6F0] pt-14 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-[11px] font-sans uppercase tracking-[0.16em] text-[#807571] mb-6">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#2B211E] transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#85513f] font-semibold">The Journal & Beauty Tips</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.25em] text-[#85513f] uppercase block mb-3">
                LES NARRATIVES DU TEINT · EDITION 2027
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal tracking-tight leading-[1.08]">
                Skin Narratives, Masterclasses & Biomimetic Science
              </h1>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#5C504A] max-w-2xl leading-relaxed">
                Formulation deep-dives, step-by-step master artist techniques, and cellular
                prep rituals direct from our Parisian laboratory and master colorists.
                All wisdom, zero evidence.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-3 text-xs font-sans text-[#6E625D]">
              <div className="bg-white/80 border border-[#E8DFD5] rounded-xl p-4 shadow-xs">
                <div className="flex items-center space-x-2 text-[#85513f] font-semibold text-[11px] uppercase tracking-wider mb-1">
                  <Sparkles size={14} />
                  <span>The 2027 Atelier Philosophy</span>
                </div>
                <p className="text-[#4E4542] text-[11px] leading-relaxed">
                  "Makeup is not an opaque layer applied to mask living skin; it is an
                  active bio-lipid extension of your natural beauty."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Atelier Beauty Tips Carousel / Cheat Sheet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
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
            <span className="text-[10px] font-sans tracking-[0.14em] uppercase text-[#85513f] font-semibold px-2.5 py-1 rounded-md bg-[#FAF0E6]">
              Instant Master Rules
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_BEAUTY_TIPS.map((tip, idx) => (
              <div
                key={tip.id}
                className="bg-[#FCF9F3] border border-[#E8DFD5] rounded-xl p-4 flex flex-col justify-between hover:border-[#85513f]/50 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-sans text-[#807571] mb-2">
                    <span className="font-semibold text-[#85513f] uppercase tracking-wider">
                      Rule 0{idx + 1}
                    </span>
                    <span className="text-[#998F8B]">{tip.technique}</span>
                  </div>
                  <h4 className="font-serif text-base text-[#2B211E] font-medium group-hover:text-[#85513f] transition-colors">
                    {tip.title}
                  </h4>
                  <p className="text-[10px] font-sans italic text-[#85513f] mt-0.5 mb-2">
                    "{tip.tagline}"
                  </p>
                  <p className="text-xs font-sans text-[#5C504A] leading-relaxed line-clamp-4">
                    {tip.tip}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#E8DFD5]/70 flex items-center justify-between">
                  <button
                    onClick={() => handleCopyTip(tip.id, `${tip.title}: ${tip.tip}`)}
                    className="text-[10px] font-sans font-medium text-[#6E625D] hover:text-[#2B211E] transition-colors flex items-center space-x-1"
                  >
                    {copiedTipId === tip.id ? (
                      <>
                        <Check size={12} className="text-[#2F6B43]" />
                        <span className="text-[#2F6B43] font-semibold">Saved to Notes</span>
                      </>
                    ) : (
                      <>
                        <Bookmark size={12} />
                        <span>Save Tip</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      // Navigate to corresponding article
                      const targetSlug =
                        idx === 0
                          ? 'art-of-epidermal-melt'
                          : idx === 1
                          ? 'vascular-undertone-vs-surface-flush'
                          : idx === 2
                          ? 'art-of-epidermal-melt'
                          : 'z-glow-cheek-placement-masterclass';
                      const art = JOURNAL_ARTICLES.find(a => a.slug === targetSlug);
                      if (art) handleOpenArticle(art);
                    }}
                    className="text-[10px] font-sans font-semibold text-[#85513f] hover:text-[#2B211E] flex items-center space-x-1 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cover Story Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-[#2B211E] text-[#FCF9F3] rounded-3xl overflow-hidden border border-[#4E4542] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Image Col */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[480px] overflow-hidden">
              <img
                src={featuredStory.heroImage}
                alt={featuredStory.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211E] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-5 left-5 bg-[#2B211E]/80 backdrop-blur-md border border-white/20 text-[#FAF6F0] px-3.5 py-1.5 rounded-full text-[10px] font-sans font-medium uppercase tracking-[0.18em]">
                ATELIER COVER STORY
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 text-[10px] font-sans tracking-[0.2em] text-[#d8a48f] uppercase mb-4">
                  <span>{featuredStory.categoryLabel}</span>
                  <span>·</span>
                  <span>{featuredStory.readTime}</span>
                  <span>·</span>
                  <span>{featuredStory.publishedDate}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF6F0] font-normal leading-snug">
                  {featuredStory.title}
                </h2>

                <p className="mt-4 font-sans text-xs sm:text-sm text-[#D8CFCA] leading-relaxed">
                  {featuredStory.excerpt}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] uppercase font-sans font-semibold tracking-wider text-[#d8a48f] mb-1">
                    Core Beauty Rule
                  </div>
                  <p className="font-serif italic text-xs sm:text-sm text-[#F2ECE6]">
                    "{featuredStory.atelierRule}"
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={featuredStory.author.avatar}
                    alt={featuredStory.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#d8a48f]/40"
                  />
                  <div>
                    <div className="font-serif text-xs text-[#FAF6F0] font-medium">
                      {featuredStory.author.name}
                    </div>
                    <div className="text-[10px] font-sans text-[#A89D98]">
                      {featuredStory.author.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => toggleBookmark(featuredStory.slug)}
                    className="p-3 rounded-full border border-white/20 hover:bg-white/10 text-[#FAF6F0] transition-colors"
                    aria-label="Bookmark story"
                  >
                    <Bookmark
                      size={16}
                      className={
                        bookmarkedSlugs.includes(featuredStory.slug)
                          ? 'fill-[#d8a48f] text-[#d8a48f]'
                          : ''
                      }
                    />
                  </button>

                  <button
                    onClick={() => handleOpenArticle(featuredStory)}
                    className="flex-1 sm:flex-none bg-[#FAF6F0] hover:bg-white text-[#2B211E] px-6 py-3 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Read Masterclass</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Navigation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="border-b border-[#E8DFD5] pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {JOURNAL_CATEGORIES.map(category => {
              const isSelected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleSelectCategory(category.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all duration-200 flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-[#2B211E] text-white shadow-xs font-semibold'
                      : 'text-[#5C504A] hover:text-[#2B211E] hover:bg-[#F2EDE4]'
                  }`}
                >
                  <span>{category.label}</span>
                  {category.id !== 'ALL' && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[#E8DFD5] text-[#6E625D]'
                      }`}
                    >
                      {category.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search tips, squalane, redness..."
              className="w-full bg-white border border-[#E8DFD5] rounded-full pl-9 pr-8 py-2 text-xs font-sans placeholder-[#998F8B] text-[#2B211E] focus:outline-none focus:border-[#85513f] transition-colors"
            />
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#807571]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#807571] hover:text-[#2B211E]"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Pill Counter */}
        <div className="mt-3 flex items-center justify-between text-xs text-[#807571] font-sans">
          <div>
            Showing <span className="font-semibold text-[#2B211E]">{filteredArticles.length}</span>{' '}
            {filteredArticles.length === 1 ? 'article & beauty guide' : 'articles & beauty guides'}
            {activeCategory !== 'ALL' && (
              <span> in <span className="text-[#85513f] font-medium">{activeCategory}</span></span>
            )}
            {searchQuery && <span> matching "{searchQuery}"</span>}
          </div>

          {(activeCategory !== 'ALL' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
                setSearchParams({});
              }}
              className="text-[11px] font-semibold text-[#85513f] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E8DFD5] p-8">
            <BookOpen size={36} className="mx-auto text-[#85513f] opacity-60 mb-3" />
            <h3 className="font-serif text-xl text-[#2B211E]">No Stories Found</h3>
            <p className="font-sans text-xs text-[#6E625D] mt-1 max-w-sm mx-auto">
              We couldn't find any beauty guides matching "{searchQuery}". Try searching for
              "undertone", "squalane", "melt", or select "All Stories".
            </p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 bg-[#2B211E] text-white rounded-full text-xs font-sans uppercase tracking-wider"
            >
              Show All Stories
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
                  className="bg-white border border-[#E8DFD5] rounded-2xl overflow-hidden hover:border-[#85513f]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Hero Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF6F0]">
                      <img
                        src={article.heroImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
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

                      <div className="absolute bottom-3 left-3 bg-[#2B211E]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[9px] font-sans font-medium uppercase tracking-wider">
                        {article.categoryLabel}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      {/* Zero-pill metadata line */}
                      <div className="text-[10px] font-sans tracking-[0.16em] uppercase text-[#807571] mb-2 flex items-center space-x-2">
                        <span>{article.readTime}</span>
                        <span>·</span>
                        <span>{article.publishedDate}</span>
                      </div>

                      <h3 className="font-serif text-xl text-[#2B211E] font-medium leading-snug group-hover:text-[#85513f] transition-colors">
                        {article.title}
                      </h3>

                      <p className="mt-2 font-sans text-xs text-[#5C504A] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Atelier Rule Callout */}
                      <div className="mt-4 p-3 rounded-lg bg-[#FCF9F3] border-l-2 border-[#85513f]">
                        <p className="font-serif italic text-[11px] text-[#4E4542] line-clamp-2">
                          "{article.atelierRule}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 border-t border-[#F0EEE8] bg-[#FAFAF8] flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full object-cover border border-[#E8DFD5]"
                      />
                      <span className="text-[11px] font-sans font-medium text-[#4E4542]">
                        {article.author.name}
                      </span>
                    </div>

                    <span className="text-xs font-sans font-semibold text-[#85513f] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
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

      {/* Complexion Studio Cross-Promotion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#FAF0E6]/80 border border-[#d8a48f]/40 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block mb-1">
              COMPLEXION STUDIO INTEGRATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
              Put the Techniques to the Test
            </h3>
            <p className="mt-2 font-sans text-xs sm:text-sm text-[#5C504A] leading-relaxed">
              Explore our interactive 24-Shade Matrix, try the Real Skin Transformations before & after slider, or order the $12 Home Swatch Trio to find your sister match in ambient light.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => navigate('/complexion-studio#shade-finder-matrix')}
              className="bg-[#2B211E] hover:bg-[#433430] text-white px-5 py-3 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors"
            >
              Explore Shade Matrix
            </button>
            <button
              onClick={() => navigate('/complexion-studio#interactive-transformations')}
              className="bg-white hover:bg-[#F2EDE4] text-[#2B211E] border border-[#E8DFD5] px-5 py-3 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors"
            >
              View Transformations
            </button>
          </div>
        </div>
      </section>

      {/* The Zoe Collective / Community Stories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#2B211E] text-[#FCF9F3] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-[#85513f]/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.25em] text-[#d8a48f] uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#d8a48f]" />
                <span>THE ZOE COLLECTIVE · COMMUNITY REVIEWS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF6F0] font-normal leading-tight">
                Living Proof on 10,000+ Unretouched Complexions
              </h3>
              <p className="mt-3 font-sans text-xs sm:text-sm text-[#D1C7BD] leading-relaxed">
                Beyond editorial advice lies the truth of living wear. Explore authentic shade reviews, high-resolution daylight portraits, and real skin journeys across all 24 shades.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => navigate('/community')}
                className="w-full sm:w-auto bg-[#d8a48f] hover:bg-[#c99580] text-[#2B211E] px-6 py-3.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Explore The Collective</span>
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => navigate('/complexion-studio#shade-finder-matrix')}
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-[#6E625D] px-6 py-3.5 rounded-full text-xs font-sans font-medium tracking-wider uppercase transition-colors flex items-center justify-center"
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
                  className="p-2 rounded-full bg-[#2B211E] text-white hover:bg-[#433430] transition-colors"
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

                {/* Author Card */}
                <div className="mt-6 flex items-center space-x-3.5 pt-4 border-t border-[#E8DFD5]">
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
                  <div className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f] mb-4">
                    STEP-BY-STEP APPLICATION MASTERCLASS
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

              {/* Key Artist Tips */}
              <div className="my-8 bg-[#FAF6F0] border border-[#E8DFD5] rounded-2xl p-6">
                <div className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-[#2B211E] mb-3 flex items-center space-x-2">
                  <Check size={14} className="text-[#85513f]" />
                  <span>Key Artist Takeaways</span>
                </div>
                <ul className="space-y-2.5">
                  {activeArticle.keyTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#4E4542]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#85513f] mt-1.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scientific Laboratory Note */}
              {activeArticle.scientificNote && (
                <div className="my-8 p-5 rounded-xl bg-white border border-[#E8DFD5] text-xs font-sans text-[#5C504A]">
                  <span className="font-semibold text-[10px] uppercase tracking-wider text-[#85513f] block mb-1">
                    Parisian Laboratory Biomimetic Note (2027)
                  </span>
                  <p className="leading-relaxed">
                    {activeArticle.scientificNote}
                  </p>
                </div>
              )}

              {/* Formulations Used in this Story */}
              {activeArticle.relatedProductIds && activeArticle.relatedProductIds.length > 0 && (
                <div className="my-10 pt-8 border-t border-[#E8DFD5]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-[#85513f]">
                        SHOP THE TECHNIQUE
                      </span>
                      <h3 className="font-serif text-lg text-[#2B211E]">
                        Formulations Used in this Story
                      </h3>
                    </div>
                    <span className="text-[10px] text-[#807571] font-sans">
                      Biocompatible Matrix
                    </span>
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
                              className="w-16 h-16 rounded-lg object-cover border border-[#F0EEE8] flex-shrink-0"
                            />
                            <div>
                              <span className="text-[9px] font-sans font-semibold tracking-wider text-[#85513f] uppercase block">
                                {prod.category}
                              </span>
                              <h4 className="font-serif text-sm text-[#2B211E] font-medium leading-tight group-hover:text-[#85513f] transition-colors">
                                {prod.title}
                              </h4>
                              <p className="text-[11px] font-sans text-[#807571] mt-0.5 line-clamp-1">
                                {prod.subtitle}
                              </p>
                              <div className="text-xs font-serif font-semibold text-[#2B211E] mt-1">
                                ${prod.price}
                              </div>
                            </div>
                          </div>

                          <div className="pt-3 mt-3 border-t border-[#F0EEE8] flex items-center space-x-2">
                            {onQuickView && (
                              <button
                                onClick={() => onQuickView(prod)}
                                className="flex-1 py-1.5 px-2 bg-[#FCF9F3] hover:bg-[#F2EDE4] text-[#2B211E] text-[10px] font-sans font-medium rounded border border-[#E8DFD5] flex items-center justify-center space-x-1"
                              >
                                <Eye size={12} />
                                <span>Inspect</span>
                              </button>
                            )}
                            <button
                              onClick={() => onAddToCart(prod, firstShade)}
                              className="flex-1 py-1.5 px-2 bg-[#2B211E] hover:bg-[#433430] text-white text-[10px] font-sans font-semibold rounded flex items-center justify-center space-x-1"
                            >
                              <ShoppingBag size={12} />
                              <span>Add ${prod.price}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Modal Navigation */}
            <div className="bg-[#FAF6F0] border-t border-[#E8DFD5] px-6 py-4 flex items-center justify-between text-xs font-sans">
              <button
                onClick={handleCloseArticle}
                className="text-[#6E625D] hover:text-[#2B211E] font-medium"
              >
                ← Return to Journal
              </button>

              <button
                onClick={() => {
                  const currentIndex = JOURNAL_ARTICLES.findIndex(
                    a => a.id === activeArticle.id
                  );
                  const nextIndex = (currentIndex + 1) % JOURNAL_ARTICLES.length;
                  handleOpenArticle(JOURNAL_ARTICLES[nextIndex]);
                }}
                className="text-[#85513f] hover:text-[#2B211E] font-semibold flex items-center space-x-1"
              >
                <span>Next Story</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
