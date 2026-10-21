import React, { useState } from 'react';
import {
  Instagram,
  Heart,
  Sparkles,
  ArrowRight,
  Share2,
  MessageCircle,
  Star,
  Check,
  ShieldCheck,
  Camera,
  Filter,
  SlidersHorizontal,
  Sun,
  Flame,
  Award,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_SHADES, PRODUCTS } from '../data/cosmeticsData';

interface ClientPortrait {
  id: string;
  name: string;
  handle: string;
  city: string;
  image: string;
  shadeCode: string;
  shadeName: string;
  shadeHex: string;
  toneCategory: 'fair' | 'light-med' | 'tan' | 'deep';
  lighting: 'Natural North Light' | 'Golden Hour' | 'Atelier Indoor';
  formulation: string;
  productSlug: string;
  skinType: string;
  concernHarmonized: string;
  quote: string;
  likes: number;
}

const COLLECTIVE_PORTRAITS: ClientPortrait[] = [
  {
    id: 'col-01',
    name: 'Elena Rostova',
    handle: '@elena_rostova',
    city: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    shadeCode: '03',
    shadeName: 'Bisque Neutral',
    shadeHex: '#E8C7B0',
    toneCategory: 'fair',
    lighting: 'Natural North Light',
    formulation: 'Complexion Veil + Lip Cashmere in Raw Sand',
    productSlug: 'skin-veil-luminous-tint',
    skinType: 'Sensitive / Rosacea Prone',
    concernHarmonized: 'Vascular Flushing Diffused',
    quote:
      'For twenty years I fought my cheek flushing with thick matte foundation. ZoeNude taught me to let the warmth illuminate through. People ask what facialist I visit—not what makeup I wear.',
    likes: 2420,
  },
  {
    id: 'col-02',
    name: 'Soraia Sterling',
    handle: '@soraia_editorial',
    city: 'London, UK',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80',
    shadeCode: '18',
    shadeName: 'Cocoa Warm',
    shadeHex: '#7C4633',
    toneCategory: 'tan',
    lighting: 'Golden Hour',
    formulation: 'Complexion Veil + Radiant Glaze in Spiced Ember',
    productSlug: 'skin-veil-luminous-tint',
    skinType: 'Normal / Dehydrated',
    concernHarmonized: 'Balanced Golden Radiance',
    quote:
      'Deep olive skin tones so often end up ashen with traditional mineral makeup. The 94% bio-lipid veil melts into my epidermis like liquid silk. Zero chalkiness, pure naked dimension.',
    likes: 3105,
  },
  {
    id: 'col-03',
    name: 'Dr. Camille Chen',
    handle: '@dr_camille_chen',
    city: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
    shadeCode: '08',
    shadeName: 'Sand Balance',
    shadeHex: '#D8A07A',
    toneCategory: 'light-med',
    lighting: 'Atelier Indoor',
    formulation: 'Complexion Veil (Shade 08)',
    productSlug: 'skin-veil-luminous-tint',
    skinType: 'Barrier Compromised / Dry',
    concernHarmonized: 'Post-Retinol Peeling Soothed',
    quote:
      'As a clinical dermatologist working 12-hour surgical shifts under hospital fluorescents, I refuse anything that congests pores. The meadowfoam and squalane lipids actually strengthen my skin barrier throughout the day.',
    likes: 2890,
  },
  {
    id: 'col-04',
    name: 'Amara Koné',
    handle: '@amara.kone',
    city: 'Lagos & Paris',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=700&q=80',
    shadeCode: '22',
    shadeName: 'Espresso Velvet',
    shadeHex: '#4C271D',
    toneCategory: 'deep',
    lighting: 'Natural North Light',
    formulation: 'Complexion Veil + Lip Cashmere in Sienna Living',
    productSlug: 'skin-veil-luminous-tint',
    skinType: 'Combination / Melasma Prone',
    concernHarmonized: 'Hyperpigmentation Harmonized',
    quote:
      'No demarcation lines around my jawline whatsoever. It mimics skin texture so accurately that my husband genuinely could not tell I had anything on my face.',
    likes: 3410,
  },
  {
    id: 'col-05',
    name: 'Claire Vandeberg',
    handle: '@claire_v_skin',
    city: 'Amsterdam, Netherlands',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
    shadeCode: '05',
    shadeName: 'Oat Warm',
    shadeHex: '#E2B89A',
    toneCategory: 'fair',
    lighting: 'Golden Hour',
    formulation: 'Radiant Glaze Dew Multi-Stick (Nude Flush)',
    productSlug: 'radiant-glaze-dew-multi-stick',
    skinType: 'Dry Mature Skin (48 yrs)',
    concernHarmonized: 'Fine Line Plumpness & Dew',
    quote:
      'At 48, heavy powders settle into expression lines instantly. ZoeNude moves with my face. The dew stick on cheekbones and lips is my 60-second morning salvation.',
    likes: 1980,
  },
  {
    id: 'col-06',
    name: 'Maya Takahashi',
    handle: '@maya_atelier_skin',
    city: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
    shadeCode: '10',
    shadeName: 'Almond Warm',
    shadeHex: '#CE8B64',
    toneCategory: 'light-med',
    lighting: 'Natural North Light',
    formulation: 'Complexion Veil + Alabaster Silk Powder',
    productSlug: 'skin-veil-luminous-tint',
    skinType: 'Oily T-Zone / Sensitive',
    concernHarmonized: 'Soft-Focus Pores without Chalkiness',
    quote:
      'The Japanese rice starch in the powder blurs pores invisibly while keeping the cheek glaze intact. True epidermal architecture in harmony.',
    likes: 2150,
  },
  {
    id: 'col-07',
    name: 'Zainab Al-Mansoor',
    handle: '@zainab_glow',
    city: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=700&q=80',
    shadeCode: '15',
    shadeName: 'Caramel Living',
    shadeHex: '#995437',
    toneCategory: 'tan',
    lighting: 'Golden Hour',
    formulation: 'Complexion Veil + Lip Cashmere in Terracotta Whisper',
    productSlug: 'lip-cashmere-satin-lipstick',
    skinType: 'Normal / Sun-Exposed',
    concernHarmonized: 'High Temperature Humidity Wear',
    quote:
      'In 40°C heat, silicone emulsions slide off within an hour. Because ZoeNude is built on plant lipids that mirror sebum, it bonds naturally and stays radiant through the evening breeze.',
    likes: 2740,
  },
  {
    id: 'col-08',
    name: 'Nia Washington',
    handle: '@nia_cleanliving',
    city: 'Atlanta, USA',
    image: 'https://images.unsplash.com/photo-1534751516642-a171ed252184?auto=format&fit=crop&w=700&q=80',
    shadeCode: '24',
    shadeName: 'Ebony Rich',
    shadeHex: '#3D1C16',
    toneCategory: 'deep',
    lighting: 'Atelier Indoor',
    formulation: 'Complexion Veil (Shade 24)',
    productSlug: 'skin-veil-luminous-tint',
    skinType: 'Dry / Hyperpigmentation',
    concernHarmonized: 'Rich Undertone Zero-Ashen Match',
    quote:
      'The biggest hurdle in clean beauty has always been deep shade accuracy. Shade 24 has red-violet undertones that make deep skin look energized, never dull or gray.',
    likes: 3890,
  },
];

interface VerifiedReview {
  id: string;
  author: string;
  shadeCode: string;
  shadeName: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  skinType: string;
  verifiedPurchase: boolean;
  helpfulCount: number;
}

const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 'rev-01',
    author: 'Genevieve M.',
    shadeCode: '04',
    shadeName: 'Silk Neutral',
    rating: 5,
    date: 'February 18, 2027',
    title: 'The online diagnostic quiz was spot on',
    text: 'I was hesitant about ordering shade 04 without testing it in person, but the 90-second quiz and sample trio completely removed the risk. It genuinely looks like my own bare skin, just having its most restful holiday.',
    skinType: 'Sensitive / Rosacea',
    verifiedPurchase: true,
    helpfulCount: 84,
  },
  {
    id: 'rev-02',
    author: 'Kavita R.',
    shadeCode: '14',
    shadeName: 'Ochre Warm',
    rating: 5,
    date: 'February 12, 2027',
    title: 'Zero demarcation line on my neckline',
    text: 'Every foundation I’ve owned oxidized to an orange mask by midday. ZoeNude stays true to color from 8 AM to 10 PM. You can apply with bare fingers in 45 seconds flat.',
    skinType: 'Combination',
    verifiedPurchase: true,
    helpfulCount: 62,
  },
  {
    id: 'rev-03',
    author: 'Margot de Saint-Germain',
    shadeCode: '02',
    shadeName: 'Alabaster Cool',
    rating: 5,
    date: 'February 05, 2027',
    title: 'Finally, a formulation for mature dehydrated skin',
    text: 'At 62, I stopped wearing traditional makeup because it aged me by ten years. Complexion Veil gives that fresh, luminous bounce that makes skin look plump and loved.',
    skinType: 'Mature (60+)',
    verifiedPurchase: true,
    helpfulCount: 119,
  },
  {
    id: 'rev-04',
    author: 'Fatima B.',
    shadeCode: '20',
    shadeName: 'Mahogany Neutral',
    rating: 5,
    date: 'January 28, 2027',
    title: 'True neutral undertone in deep shade spectrum',
    text: 'So many brands think deep skin only has orange or yellow undertones. Shade 20 has the exact neutral balance that mirrors my jawline. The refillable glass bottle is an art piece on my vanity.',
    skinType: 'Normal / Dry',
    verifiedPurchase: true,
    helpfulCount: 95,
  },
];

export const CommunityPage: React.FC = () => {
  // Filter state for portraits
  const [toneFilter, setToneFilter] = useState<'all' | 'fair' | 'light-med' | 'tan' | 'deep'>('all');
  const [lightingFilter, setLightingFilter] = useState<'all' | 'Natural North Light' | 'Golden Hour' | 'Atelier Indoor'>('all');

  // Like counters
  const [likes, setLikes] = useState<Record<string, number>>(
    COLLECTIVE_PORTRAITS.reduce((acc, p) => ({ ...acc, [p.id]: p.likes }), {})
  );
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});

  // Review filter
  const [reviewSkinFilter, setReviewSkinFilter] = useState<string>('all');
  const [helpfulReviews, setHelpfulReviews] = useState<Record<string, number>>(
    VERIFIED_REVIEWS.reduce((acc, r) => ({ ...acc, [r.id]: r.helpfulCount }), {})
  );
  const [votedHelpful, setVotedHelpful] = useState<Record<string, boolean>>({});

  // Interactive join form state
  const [joinHandle, setJoinHandle] = useState('');
  const [joinEmail, setJoinEmail] = useState('');
  const [joinShade, setJoinShade] = useState('04 Silk Neutral');
  const [joinSkinStory, setJoinSkinStory] = useState('');
  const [joinSubmitted, setJoinSubmitted] = useState(false);

  const handleLike = (id: string) => {
    setUserLiked((prev) => {
      const isAlreadyLiked = !!prev[id];
      setLikes((likeCounts) => ({
        ...likeCounts,
        [id]: isAlreadyLiked ? likeCounts[id] - 1 : likeCounts[id] + 1,
      }));
      return { ...prev, [id]: !isAlreadyLiked };
    });
  };

  const handleHelpful = (id: string) => {
    setVotedHelpful((prev) => {
      if (prev[id]) return prev;
      setHelpfulReviews((counts) => ({
        ...counts,
        [id]: counts[id] + 1,
      }));
      return { ...prev, [id]: true };
    });
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinEmail || !joinHandle) return;
    setJoinSubmitted(true);
  };

  const filteredPortraits = COLLECTIVE_PORTRAITS.filter((p) => {
    const matchesTone = toneFilter === 'all' || p.toneCategory === toneFilter;
    const matchesLighting = lightingFilter === 'all' || p.lighting === lightingFilter;
    return matchesTone && matchesLighting;
  });

  const filteredReviews = VERIFIED_REVIEWS.filter((r) => {
    if (reviewSkinFilter === 'all') return true;
    return r.skinType.toLowerCase().includes(reviewSkinFilter.toLowerCase());
  });

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      {/* Hero Header */}
      <section className="bg-[#FAF6F0] py-14 sm:py-20 border-b border-[#E8DFD5] relative overflow-hidden">
        {/* Subtle Decorative Atelier Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#85513f]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.22em] text-[#85513f] uppercase bg-white/80 border border-[#E8DFD5] px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles size={13} className="text-[#85513f]" />
            <span>THE ZOE COLLECTIVE · LIVING PROOF</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal tracking-tight">
            #LifeLooksGoodOnYou
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#4E4542] max-w-2xl mx-auto leading-relaxed">
            Real skin, unretouched moments, and genuine morning rituals shared by our client community across 24 biomimetic shades. Captured in daylight without beauty filters or smoothing lenses.
          </p>

          {/* Quick Page Anchors */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-sans">
            <a
              href="#gallery"
              className="bg-[#2B211E] text-white hover:bg-[#433430] px-4 py-2 rounded-full font-medium transition-all shadow-xs"
            >
              Living Skin Gallery ({COLLECTIVE_PORTRAITS.length})
            </a>
            <a
              href="#reviews"
              className="bg-white text-[#2B211E] border border-[#E8DFD5] hover:border-[#85513f] px-4 py-2 rounded-full font-medium transition-all"
            >
              Verified Shade Reviews (4.9 ★)
            </a>
            <a
              href="#stories"
              className="bg-white text-[#2B211E] border border-[#E8DFD5] hover:border-[#85513f] px-4 py-2 rounded-full font-medium transition-all"
            >
              Client Morning Rituals
            </a>
            <a
              href="#join"
              className="bg-[#FAF0E6] text-[#85513f] border border-[#d8a48f]/40 hover:bg-[#f5e6d8] px-4 py-2 rounded-full font-semibold transition-all"
            >
              Join The Collective
            </a>
          </div>

          {/* Atelier Trust Metrics */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-[#E8DFD5]/70 mt-8">
            <div className="p-3 text-center">
              <span className="block font-serif text-2xl sm:text-3xl text-[#2B211E] font-medium">24</span>
              <span className="text-[10px] sm:text-[11px] font-sans text-[#6E625D] uppercase tracking-wider">
                Biomimetic Shades
              </span>
            </div>
            <div className="p-3 text-center">
              <span className="block font-serif text-2xl sm:text-3xl text-[#85513f] font-medium">100%</span>
              <span className="text-[10px] sm:text-[11px] font-sans text-[#6E625D] uppercase tracking-wider">
                Unretouched Photography
              </span>
            </div>
            <div className="p-3 text-center">
              <span className="block font-serif text-2xl sm:text-3xl text-[#2B211E] font-medium">4.9 ★</span>
              <span className="text-[10px] sm:text-[11px] font-sans text-[#6E625D] uppercase tracking-wider">
                Verified Match Score
              </span>
            </div>
            <div className="p-3 text-center">
              <span className="block font-serif text-2xl sm:text-3xl text-[#2B211E] font-medium">14,200+</span>
              <span className="text-[10px] sm:text-[11px] font-sans text-[#6E625D] uppercase tracking-wider">
                Living Skin Clients
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        {/* SECTION 1: Living Skin Portrait Gallery */}
        <section id="gallery" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD5] pb-6">
            <div>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#85513f] block mb-1">
                COMMUNITY PORTRAITS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
                Living Skin in Everyday Light
              </h2>
              <p className="font-sans text-xs text-[#6E625D] mt-1 max-w-lg">
                Filter by tone depth and natural ambient light to see how our bio-lipid veil adapts to genuine skin texture and vascular undertones.
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {/* Tone Filter */}
              <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E8DFD5]">
                <button
                  onClick={() => setToneFilter('all')}
                  className={`text-[10px] font-sans px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    toneFilter === 'all'
                      ? 'bg-[#2B211E] text-white'
                      : 'text-[#4E4542] hover:text-[#2B211E]'
                  }`}
                >
                  All Tones
                </button>
                <button
                  onClick={() => setToneFilter('fair')}
                  className={`text-[10px] font-sans px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                    toneFilter === 'fair'
                      ? 'bg-[#85513f] text-white'
                      : 'text-[#4E4542] hover:text-[#2B211E]'
                  }`}
                >
                  Fair (01-06)
                </button>
                <button
                  onClick={() => setToneFilter('light-med')}
                  className={`text-[10px] font-sans px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                    toneFilter === 'light-med'
                      ? 'bg-[#85513f] text-white'
                      : 'text-[#4E4542] hover:text-[#2B211E]'
                  }`}
                >
                  Light-Med (07-12)
                </button>
                <button
                  onClick={() => setToneFilter('tan')}
                  className={`text-[10px] font-sans px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                    toneFilter === 'tan'
                      ? 'bg-[#85513f] text-white'
                      : 'text-[#4E4542] hover:text-[#2B211E]'
                  }`}
                >
                  Tan (13-18)
                </button>
                <button
                  onClick={() => setToneFilter('deep')}
                  className={`text-[10px] font-sans px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                    toneFilter === 'deep'
                      ? 'bg-[#85513f] text-white'
                      : 'text-[#4E4542] hover:text-[#2B211E]'
                  }`}
                >
                  Rich Deep (19-24)
                </button>
              </div>

              {/* Lighting Filter */}
              <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-[#E8DFD5] text-[10px]">
                <Sun size={12} className="text-[#85513f] ml-1.5" />
                <select
                  value={lightingFilter}
                  onChange={(e) => setLightingFilter(e.target.value as any)}
                  className="bg-transparent border-none text-[#2B211E] font-sans font-medium focus:outline-none pr-2 py-1 cursor-pointer"
                >
                  <option value="all">All Ambient Lighting</option>
                  <option value="Natural North Light">Natural North Light</option>
                  <option value="Golden Hour">Golden Hour Glow</option>
                  <option value="Atelier Indoor">Atelier Indoor Light</option>
                </select>
              </div>
            </div>
          </div>

          {/* Portrait Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortraits.map((portrait) => {
              const isLiked = !!userLiked[portrait.id];
              return (
                <article
                  key={portrait.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Portrait Media Frame */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF6F0]">
                    <img
                      src={portrait.image}
                      alt={`${portrait.name} wearing ${portrait.shadeName}`}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />

                    {/* Lighting Badge */}
                    <div className="absolute top-3 left-3 bg-[#FCF9F3]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-sans font-medium text-[#2B211E] border border-[#E8DFD5]/80 flex items-center space-x-1 shadow-xs">
                      <Sun size={10} className="text-[#85513f]" />
                      <span>{portrait.lighting}</span>
                    </div>

                    {/* Unretouched Seal */}
                    <div className="absolute top-3 right-3 bg-[#2B211E]/80 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-sans uppercase tracking-widest text-[#F9F6F0]">
                      Unretouched
                    </div>

                    {/* Shade Hex Color Indicator at bottom */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#E8DFD5] flex items-center justify-between shadow-xs">
                      <div className="flex items-center space-x-2">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner flex-shrink-0"
                          style={{ backgroundColor: portrait.shadeHex }}
                        ></span>
                        <div className="leading-tight">
                          <span className="text-[10px] font-sans font-bold text-[#2B211E] block">
                            Shade {portrait.shadeCode}
                          </span>
                          <span className="text-[9px] font-sans text-[#6E625D]">
                            {portrait.shadeName}
                          </span>
                        </div>
                      </div>
                      <span className="text-[8px] font-sans uppercase tracking-wider px-1.5 py-0.5 bg-[#FAF6F0] rounded text-[#85513f] font-semibold border border-[#E8DFD5]">
                        {portrait.toneCategory}
                      </span>
                    </div>
                  </div>

                  {/* Portrait Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xs font-sans font-bold text-[#2B211E]">
                            {portrait.name}
                          </h3>
                          <span className="text-[10px] font-sans text-[#807571]">
                            {portrait.city} · {portrait.handle}
                          </span>
                        </div>
                        <button
                          onClick={() => handleLike(portrait.id)}
                          aria-label={`Like ${portrait.name}'s portrait`}
                          className="flex items-center space-x-1 text-xs text-[#85513f] hover:text-[#2B211E] transition-colors p-1"
                        >
                          <Heart
                            size={15}
                            className={isLiked ? 'fill-[#e63946] text-[#e63946]' : 'text-[#85513f]'}
                          />
                          <span className="text-[11px] font-sans font-medium">{likes[portrait.id]}</span>
                        </button>
                      </div>

                      {/* Concern Harmonized Badge */}
                      <div className="inline-block bg-[#FAF6F0] border border-[#E8DFD5] px-2 py-0.5 rounded text-[9px] font-sans text-[#85513f] font-medium">
                        ✦ {portrait.concernHarmonized}
                      </div>

                      <blockquote className="font-serif italic text-xs text-[#4E4542] leading-relaxed pt-1">
                        "{portrait.quote}"
                      </blockquote>
                    </div>

                    <div className="pt-3 border-t border-[#F0EEE8] space-y-2">
                      <div className="text-[9px] font-sans text-[#6E625D] truncate">
                        <strong className="text-[#2B211E]">Worn:</strong> {portrait.formulation}
                      </div>
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/shop?search=${encodeURIComponent(portrait.shadeName)}`}
                          className="text-[11px] font-sans font-semibold text-[#85513f] hover:text-[#2B211E] transition-colors flex items-center space-x-1"
                        >
                          <span>Shop Shade {portrait.shadeCode}</span>
                          <ArrowRight size={11} />
                        </Link>
                        <Link
                          to="/complexion-studio#shade-finder-matrix"
                          className="text-[10px] font-sans text-[#807571] hover:text-[#2B211E]"
                        >
                          View Matrix
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: Verified Client Reviews */}
        <section id="reviews" className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xs space-y-8 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E8DFD5] pb-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-sans font-bold tracking-[0.2em] text-[#85513f] uppercase mb-1">
                <ShieldCheck size={14} />
                <span>VERIFIED COMMUNITY REVIEWS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
                What Clients Say About The Bio-Lipid Match
              </h2>
              <p className="font-sans text-xs text-[#6E625D] mt-1 max-w-xl">
                Every review represents an authentic purchase. Our shade guarantee ensures free color exchanges until your skin finds its ideal second-skin harmony.
              </p>
            </div>

            {/* Overall Rating Badge */}
            <div className="flex items-center space-x-4 bg-[#FAF6F0] p-4 rounded-2xl border border-[#E8DFD5]">
              <div className="text-center pr-4 border-r border-[#E8DFD5]">
                <span className="font-serif text-3xl font-bold text-[#2B211E]">4.9</span>
                <div className="flex text-[#85513f] text-xs mt-0.5">
                  {'★★★★★'.split('').map((c, i) => (
                    <span key={i}>{c}</span>
                  ))}
                </div>
              </div>
              <div className="text-xs font-sans text-[#4E4542] space-y-0.5">
                <div className="font-semibold text-[#2B211E]">1,480+ Verified Matches</div>
                <div className="text-[11px] text-[#6E625D]">96% Match Accuracy on 1st Order</div>
              </div>
            </div>
          </div>

          {/* Skin Type Filter for Reviews */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-sans font-medium text-[#6E625D] mr-2">Filter by Skin Concern:</span>
            {['all', 'sensitive', 'mature', 'combination', 'dry'].map((filterKey) => (
              <button
                key={filterKey}
                onClick={() => setReviewSkinFilter(filterKey)}
                className={`text-xs font-sans capitalize px-3.5 py-1.5 rounded-full border transition-all ${
                  reviewSkinFilter === filterKey
                    ? 'bg-[#2B211E] text-white border-[#2B211E]'
                    : 'bg-white text-[#4E4542] border-[#E8DFD5] hover:border-[#85513f]'
                }`}
              >
                {filterKey === 'all' ? 'All Skin Types' : `${filterKey} Skin`}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#FCF9F3] p-6 rounded-2xl border border-[#E8DFD5] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-sans font-bold text-[#2B211E]">
                        {review.author}
                      </span>
                      {review.verifiedPurchase && (
                        <span className="inline-flex items-center space-x-1 text-[9px] font-sans font-semibold text-[#2F6B43] bg-[#EAF2EC] px-2 py-0.5 rounded-full">
                          <Check size={10} />
                          <span>Verified Client</span>
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-sans text-[#807571]">{review.date}</span>
                  </div>

                  {/* Shade worn tag */}
                  <div className="flex items-center space-x-2 text-[10px] font-sans text-[#6E625D]">
                    <span className="font-semibold text-[#85513f]">Shade {review.shadeCode} ({review.shadeName})</span>
                    <span>·</span>
                    <span>{review.skinType}</span>
                  </div>

                  <div className="flex text-[#85513f] text-xs">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={13} className="fill-[#85513f]" />
                    ))}
                  </div>

                  <h4 className="font-sans font-bold text-xs text-[#2B211E] pt-1">
                    {review.title}
                  </h4>

                  <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8DFD5]/70 flex items-center justify-between text-[11px] font-sans">
                  <span className="text-[#807571]">Was this review helpful?</span>
                  <button
                    onClick={() => handleHelpful(review.id)}
                    className={`flex items-center space-x-1 px-2.5 py-1 rounded-md text-[10px] font-medium border transition-colors ${
                      votedHelpful[review.id]
                        ? 'bg-[#EAF2EC] text-[#2F6B43] border-[#d2e3d7]'
                        : 'bg-white text-[#4E4542] border-[#E8DFD5] hover:text-[#2B211E]'
                    }`}
                  >
                    <span>Helpful ({helpfulReviews[review.id]})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/complexion-studio#sample-trio-builder"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#85513f] hover:text-[#2B211E] border-b border-[#85513f] pb-0.5"
            >
              <span>Build Your At-Home Trio Swatch Card ($12 Credit)</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* SECTION 3: Client Living Skin Rituals */}
        <section id="stories" className="space-y-6 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#85513f] block">
              CLIENT RITUALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              Three Distinct Journeys of Skin Acceptance
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4E4542]">
              How three women of differing generations and complexions re-architected their morning relationship with beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Story 1 */}
            <div className="bg-[#FAF6F0] rounded-2xl p-6 border border-[#E8DFD5] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-[9px] font-sans uppercase tracking-[0.16em] text-[#85513f] font-bold">
                  RITUAL 01 · ROSACEA CARE
                </span>
                <h3 className="font-serif text-xl text-[#2B211E]">
                  "From concealing heat to embracing vascular glow."
                </h3>
                <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
                  Elena blends 2 drops of Biomimetic Complexion Veil with morning squalane oil. Instead of flattening the natural flush on her cheek apples, the plant lipids create a luminous European peach bloom.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8DFD5] flex items-center justify-between text-xs font-sans">
                <span className="text-[#6E625D]">Elena R., 34</span>
                <Link to="/journal?category=APPLICATION TIPS" className="text-[#85513f] font-semibold hover:underline">
                  Read Technique →
                </Link>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-[#FAF6F0] rounded-2xl p-6 border border-[#E8DFD5] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-[9px] font-sans uppercase tracking-[0.16em] text-[#85513f] font-bold">
                  RITUAL 02 · 12-HOUR SHIFT
                </span>
                <h3 className="font-serif text-xl text-[#2B211E]">
                  "Surviving surgical theater lights without dryness."
                </h3>
                <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
                  Dr. Camille applies the 3-minute second skin veil over active sunscreen. The cold-pressed meadowfoam lipid structure shields against dry hospital air conditioning without migrating or gathering in smile lines.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8DFD5] flex items-center justify-between text-xs font-sans">
                <span className="text-[#6E625D]">Dr. Camille C., 41</span>
                <Link to="/journal?category=LIVING RITUALS" className="text-[#85513f] font-semibold hover:underline">
                  View 3-Min Protocol →
                </Link>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-[#FAF6F0] rounded-2xl p-6 border border-[#E8DFD5] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-[9px] font-sans uppercase tracking-[0.16em] text-[#85513f] font-bold">
                  RITUAL 03 · NAKED ELEGANCE
                </span>
                <h3 className="font-serif text-xl text-[#2B211E]">
                  "Deep skin that never looks painted on."
                </h3>
                <p className="font-sans text-xs text-[#4E4542] leading-relaxed">
                  Amara uses fingers exclusively. The warmth of human fingertips melts the bio-lipid formulation into epidermal ridges in seconds, giving rich espresso depth without visible edges or chalkiness.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8DFD5] flex items-center justify-between text-xs font-sans">
                <span className="text-[#6E625D]">Amara K., 29</span>
                <Link to="/manifesto" className="text-[#85513f] font-semibold hover:underline">
                  Read Manifesto →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Interactive Join The Collective Submission Box */}
        <section id="join" className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-[#E8DFD5] text-center space-y-6 max-w-3xl mx-auto scroll-mt-24 shadow-xs">
          <div className="space-y-2">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#85513f] block">
              JOIN THE CONVERSATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              Share Your Living Skin Moment
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed max-w-xl mx-auto">
              Tag <strong className="text-[#2B211E]">@ZoeNudeAtelier</strong> and <strong className="text-[#2B211E]">#LifeLooksGoodOnYou</strong> on Instagram to be featured in our seasonal client gallery and receive a complimentary bespoke sample trio gift voucher.
            </p>
          </div>

          {joinSubmitted ? (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#d2e3d7] max-w-lg mx-auto space-y-3 text-left">
              <div className="flex items-center space-x-2 text-[#2F6B43] text-sm font-semibold">
                <Award size={18} />
                <span>Welcome to The Zoe Collective, {joinHandle}!</span>
              </div>
              <p className="text-xs text-[#4E4542] leading-relaxed">
                Your living skin story has been received by our Paris Atelier curation desk. We have dispatched your complimentary sample trio voucher code to <strong className="text-[#2B211E]">{joinEmail}</strong>.
              </p>
              <div className="bg-[#FAF6F0] p-3 rounded-lg border border-[#E8DFD5] text-center">
                <span className="text-[10px] text-[#6E625D] uppercase tracking-wider block">Your Bespoke Collective Code</span>
                <span className="font-mono text-sm font-bold text-[#85513f] tracking-widest">COLLECTIVE-GLOW-2027</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleJoinSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFD5] text-left max-w-lg mx-auto space-y-4 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#6E625D] mb-1">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@yourhandle"
                    value={joinHandle}
                    onChange={(e) => setJoinHandle(e.target.value)}
                    className="w-full bg-[#FCF9F3] border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#6E625D] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={joinEmail}
                    onChange={(e) => setJoinEmail(e.target.value)}
                    className="w-full bg-[#FCF9F3] border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#6E625D] mb-1">
                  Your ZoeNude Shade Match or Tone
                </label>
                <select
                  value={joinShade}
                  onChange={(e) => setJoinShade(e.target.value)}
                  className="w-full bg-[#FCF9F3] border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f] cursor-pointer"
                >
                  {ALL_SHADES.slice(0, 12).map((s) => (
                    <option key={s.id} value={`${s.code} ${s.name}`}>
                      Shade {s.code} · {s.name} ({s.undertone})
                    </option>
                  ))}
                  <option value="Not Sure Yet (Needs Quiz)">Not Sure Yet · I want the Diagnostic Quiz</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#6E625D] mb-1">
                  What Do You Love Most About Your Bare Skin Today?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. My freckles in summer, or how calm my rosacea feels..."
                  value={joinSkinStory}
                  onChange={(e) => setJoinSkinStory(e.target.value)}
                  className="w-full bg-[#FCF9F3] border border-[#E8DFD5] rounded-lg px-3 py-2 text-xs font-sans text-[#2B211E] focus:outline-none focus:border-[#85513f]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-sans font-semibold tracking-wider uppercase py-3 rounded-lg transition-colors shadow-xs"
              >
                Submit Portrait Story & Claim Gift
              </button>
            </form>
          )}

          <div className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#85513f] hover:text-[#2B211E] border-b border-[#85513f] pb-0.5"
            >
              <Instagram size={14} />
              <span>Follow @ZoeNudeAtelier on Instagram</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
