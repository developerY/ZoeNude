import { Product, Shade, Pillar, Testimonial, CommunityPost } from '../types';

export const ALL_SHADES: Shade[] = [
  // Fair
  {
    id: 'f-01',
    name: 'Alabaster Silk',
    code: '01',
    hex: '#F7E7D9',
    undertone: 'Neutral',
    spectrum: 'Fair',
    description: 'Porcelain with balanced neutral undertones'
  },
  {
    id: 'f-02',
    name: 'Opal Ivory',
    code: '02',
    hex: '#F3DEC9',
    undertone: 'Cool',
    description: 'Very fair skin with soft rose undertones',
    spectrum: 'Fair'
  },
  {
    id: 'f-03',
    name: 'Bisque Light',
    code: '03',
    hex: '#EBD2BA',
    undertone: 'Warm',
    description: 'Fair complexion with delicate golden warmth',
    spectrum: 'Fair'
  },
  {
    id: 'f-04',
    name: 'Vanilla Dew',
    code: '03.5',
    hex: '#E6CAA9',
    undertone: 'Olive',
    description: 'Fair with subtle golden-olive balance',
    spectrum: 'Fair'
  },

  // Light-Med
  {
    id: 'lm-04',
    name: 'Silk Neutral',
    code: '04',
    hex: '#DDB697',
    undertone: 'Neutral',
    spectrum: 'Light-Med',
    description: 'Balanced beige for light-medium skin tones'
  },
  {
    id: 'lm-05',
    name: 'Warm Beige',
    code: '05',
    hex: '#D2A782',
    undertone: 'Warm',
    spectrum: 'Light-Med',
    description: 'Golden radiant tone for light-medium with peach warmth'
  },
  {
    id: 'lm-06',
    name: 'Nude Cashmere',
    code: '06',
    hex: '#C59A74',
    undertone: 'Neutral',
    spectrum: 'Light-Med',
    description: 'Soft toasted nude with balanced living skin pigments'
  },
  {
    id: 'lm-07',
    name: 'Golden Squalane',
    code: '07',
    hex: '#BA8D65',
    undertone: 'Warm',
    spectrum: 'Light-Med',
    description: 'Medium with rich golden undertones'
  },
  {
    id: 'lm-08',
    name: 'Olive Sand',
    code: '07.5',
    hex: '#B48B60',
    undertone: 'Olive',
    spectrum: 'Light-Med',
    description: 'Light-medium with muted neutral olive depth'
  },

  // Tan
  {
    id: 't-08',
    name: 'Desert Sand',
    code: '08',
    hex: '#AA7B51',
    undertone: 'Warm',
    spectrum: 'Tan',
    description: 'Tan complexion with warm terracotta sunlit tones'
  },
  {
    id: 't-09',
    name: 'Spiced Almond',
    code: '09',
    hex: '#9F6F47',
    undertone: 'Neutral',
    spectrum: 'Tan',
    description: 'Medium tan with neutral golden balance'
  },
  {
    id: 't-10',
    name: 'Caramel Glaze',
    code: '10',
    hex: '#90613A',
    undertone: 'Warm',
    spectrum: 'Tan',
    description: 'Deep tan with rich caramel undertones'
  },
  {
    id: 't-11',
    name: 'Toasted Pecan',
    code: '11',
    hex: '#845330',
    undertone: 'Cool',
    spectrum: 'Tan',
    description: 'Tan with rich red-neutral depth'
  },

  // Deep
  {
    id: 'd-14',
    name: 'Mocha Radiance',
    code: '14',
    hex: '#744626',
    undertone: 'Warm',
    spectrum: 'Deep',
    description: 'Deep tone with golden chestnut warmth'
  },
  {
    id: 'd-16',
    name: 'Espresso Velvet',
    code: '16',
    hex: '#5E351B',
    undertone: 'Neutral',
    spectrum: 'Deep',
    description: 'Rich espresso with balanced neutral undertones'
  },
  {
    id: 'd-18',
    name: 'Cocoa Living',
    code: '18',
    hex: '#4A2714',
    undertone: 'Cool',
    spectrum: 'Deep',
    description: 'Intense rich cocoa with neutral-cool undertones'
  },
  {
    id: 'd-20',
    name: 'Ebony Silk',
    code: '20',
    hex: '#341B0D',
    undertone: 'Neutral',
    spectrum: 'Deep',
    description: 'Deepest neutral obsidian with radiant bio-lipid luster'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'skin-veil-luminous-tint',
    title: 'Skin Veil Luminous Tint',
    subtitle: '94% Bio-Lipid Serum Base Foundation',
    category: 'COMPLEXION VEIL',
    badge: 'CULT FAVORITE',
    price: 48,
    rating: 4.9,
    reviewsCount: 482,
    description: 'Weightless serum foundation that melts onto skin with 24 breathable true-skin shades.',
    longDescription: 'Engineered with bio-identical squalane, plant phytosterols, and micro-dispersed mineral pigments, Skin Veil dissolves seamlessly upon contact. Rather than masking skin under heavy titanium polymers, it mimics the living lipid mantle, neutralizing redness and hyperpigmentation while letting natural freckles and expressions breathe through.',
    keyIngredients: ['Organic Botanical Squalane', 'Tri-Ceramide Complex', 'Micro-Dispersed Mineral Oxides', 'Fermented Camellia Seed Oil'],
    benefits: ['Zero cakiness or creasing', 'Undetectable 16-hour breathable wear', 'Refillable frosted glass vial', 'Dermatologist tested & non-comedogenic'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    volume: '30 ml / 1.0 fl oz',
    isBestSeller: true,
    shades: [
      ALL_SHADES[0], // 01
      ALL_SHADES[2], // 03
      ALL_SHADES[4], // 04
      ALL_SHADES[5], // 05
      ALL_SHADES[9], // 08
      ALL_SHADES[14], // 16
      ALL_SHADES[15]  // 18
    ]
  },
  {
    id: 'lip-cashmere-satin-lipstick',
    title: 'Lip Cashmere Satin Lipstick',
    subtitle: 'Ceramide-Infused Conditioning Nude',
    category: 'LIP CARE · SATIN',
    badge: 'NEW HUE',
    price: 36,
    rating: 4.8,
    reviewsCount: 312,
    description: 'Ultra-emollient botanical waxes and plant ceramides deliver plush, non-drying nude pigment.',
    longDescription: 'Formulated to honor the natural lip architecture. Infused with cold-pressed moringa butter, meadowfoam seed oil, and skin-softening ceramides. Provides a cushiony, satin-sheen veil of nude colour that enhances lip volume without tackiness or heavy silicone.',
    keyIngredients: ['Moringa Seed Butter', 'Barrier-Repair Ceramide NP', 'Organic Jojoba Esters', 'Vitamin E Acetate'],
    benefits: ['Plumping cushion feel without tingling', 'Never bleeds into fine lines', 'Refillable magnetic brass casing', 'Clean vegan wax matrix'],
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    volume: '3.8 g / 0.13 oz',
    isBestSeller: true,
    shades: [
      { id: 'lip-01', name: 'Raw Sand', code: 'L-01', hex: '#C2866B', undertone: 'Warm', spectrum: 'Light-Med', description: 'Sun-warmed peachy nude' },
      { id: 'lip-02', name: 'Cashmere Petal', code: 'L-02', hex: '#BA7A71', undertone: 'Cool', spectrum: 'Light-Med', description: 'Soft dusty rose nude' },
      { id: 'lip-03', name: 'Terracotta Whisper', code: 'L-03', hex: '#AA624C', undertone: 'Warm', spectrum: 'Tan', description: 'Earthen burnt ochre nude' },
      { id: 'lip-04', name: 'Sienna Living', code: 'L-04', hex: '#874635', undertone: 'Neutral', spectrum: 'Deep', description: 'Deep spiced chestnut nude' }
    ]
  },
  {
    id: 'radiant-glaze-dew-multi-stick',
    title: 'Radiant Glaze Dew Multi-Stick',
    subtitle: 'Universal Luminous Tint for Cheeks & Lips',
    category: 'CHEEK & LIP',
    price: 38,
    rating: 5.0,
    reviewsCount: 189,
    description: 'Universal skin glaze infused with cold-pressed moringa oil for effortless lit-from-within flush.',
    longDescription: 'A multi-use balm stick that melts into the cheeks, high points, and lips for a fresh, transparent wash of color. Packed with antioxidant botanicals and luminous pearl reflect that captures ambient light without visible glitter.',
    keyIngredients: ['Cold-Pressed Moringa Oil', 'Kalahari Melon Seed Oil', 'Mica (Ethically Sourced)', 'Rosehip Fruit Extract'],
    benefits: ['One-swipe flush', 'Seamless finger-blend application', 'Non-sticky glass skin sheen', 'Multi-zone adaptability'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    volume: '7.5 g / 0.26 oz',
    shades: [
      { id: 'glaze-01', name: 'Golden Aura', code: 'G-01', hex: '#D8A07A', undertone: 'Warm', spectrum: 'Fair', description: 'Champagne dewy glaze' },
      { id: 'glaze-02', name: 'Nude Flush', code: 'G-02', hex: '#C47E68', undertone: 'Neutral', spectrum: 'Light-Med', description: 'Living peach-pink blush' },
      { id: 'glaze-03', name: 'Spiced Ember', code: 'G-03', hex: '#9E5440', undertone: 'Warm', spectrum: 'Tan', description: 'Sun-drenched terracotta warmth' }
    ]
  },
  {
    id: 'alabaster-silk-finishing-powder',
    title: 'Alabaster Silk Finishing Powder',
    subtitle: 'Micro-Milled Squalane Diffusing Veil',
    category: 'SETTING ESSENCE',
    badge: 'REFILLABLE',
    price: 44,
    rating: 4.9,
    reviewsCount: 244,
    description: 'Micro-milled rice starch and squalane blur texture and absorb shine without flattening dimension.',
    longDescription: 'A revolutionary baked finishing powder that dispels the flatness of traditional talc powders. Micro-spherical rice starches gently absorb excess midday sebum while squalane-coated minerals preserve the vital, luminous reflection of fresh skin.',
    keyIngredients: ['Japanese Micro-Rice Starch', 'Plant Squalane Coating', 'Colloidal Oat Flour', 'Silk Amino Complex'],
    benefits: ['Zero flashback or white cast', 'Blurs pores invisibly', 'Does not cling to dry patches', 'Magnetic refillable compact'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    volume: '9 g / 0.31 oz',
    shades: [
      { id: 'pow-01', name: 'Translucent Light', code: 'P-01', hex: '#F9F1E6', undertone: 'Neutral', spectrum: 'Fair', description: 'Invisible veil for fair to medium skin' },
      { id: 'pow-02', name: 'Translucent Deep', code: 'P-02', hex: '#B88258', undertone: 'Warm', spectrum: 'Deep', description: 'Rich warmth veil for tan to deep skin' }
    ]
  },
  {
    id: 'bio-lipid-restorative-primer',
    title: 'Bio-Lipid Restorative Primer',
    subtitle: 'Epidermal Smoothing Serum Concentrate',
    category: 'COMPLEXION VEIL',
    badge: 'ATELIER EXCLUSIVE',
    price: 46,
    rating: 4.9,
    reviewsCount: 167,
    description: 'Silicone-free botanical primer that locks in moisture and creates an adhesive skin-identical canvas.',
    longDescription: 'Created as the essential prelude to Skin Veil. Harnessing fermented alpine botanicals and hyaluronic crosspolymers to plump micro-crevices and smooth skin texture without plastic silicones.',
    keyIngredients: ['Hyaluronic Acid Crosspolymer', 'Alpine Willowherb', 'Niacinamide (3%)', 'Snow Mushroom Extract'],
    benefits: ['All-day moisture retention', 'Silicone-free breathability', 'Grip without stickiness'],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    volume: '30 ml / 1.0 fl oz',
    shades: [
      { id: 'pri-01', name: 'Luminous Alabaster', code: 'PR-01', hex: '#FDFBF7', undertone: 'Neutral', spectrum: 'Fair', description: 'Universal sheer glow' }
    ]
  },
  {
    id: 'arch-sculpt-brow-pomade',
    title: 'Arch Sculpt Feather Brow',
    subtitle: 'Micro-Fiber Tinted Brow Glaze',
    category: 'EYES & BROWS',
    price: 32,
    rating: 4.8,
    reviewsCount: 142,
    description: 'Flexible conditioning waxes that tint, groom, and hold hair naturally without stiffness.',
    longDescription: 'Formulated with castor seed oil and organic peptides to nurture brow health while sculpting each hair with undetectable hold and feathery dimension.',
    keyIngredients: ['Organic Castor Oil', 'Peptide Lash/Brow Complex', 'Carnauba Wax', 'Panthenol'],
    benefits: ['Never flakes or turns crunch', 'Hair-by-hair definition', 'Conditioning peptide nourishment'],
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    volume: '4.5 ml / 0.15 fl oz',
    shades: [
      { id: 'br-01', name: 'Ash Blonde', code: 'B-01', hex: '#8B7B6B', undertone: 'Cool', spectrum: 'Fair', description: 'Soft cool blonde' },
      { id: 'br-02', name: 'Taupe Brunette', code: 'B-02', hex: '#5A463B', undertone: 'Neutral', spectrum: 'Light-Med', description: 'Universal soft brown' },
      { id: 'br-03', name: 'Deep Espresso', code: 'B-03', hex: '#2F231D', undertone: 'Warm', spectrum: 'Deep', description: 'Rich deep black-brown' }
    ]
  }
];

export const PILLARS: Pillar[] = [
  {
    number: '01',
    tag: 'THE FLAGSHIP CONCEPT',
    badge: 'MOST DISTINCTIVE',
    title: 'Beauty, Without the Evidence.',
    description: 'The boldest expression of our founding ethos. Featherlight, breathable micro-pigments suspend in organic botanical squalane to dissolve invisibly while balancing redness.',
    extendedStory: 'This is the foundational soul of ZoeNude. We reject the cakey masks of traditional cosmetic cover-ups. Our philosophy is predicated on harmony: makeup should be so closely matched to your skin physiology that onlookers cannot discern where your biology ends and our formula begins.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '02',
    tag: 'IDENTITY',
    badge: 'CUSTOMER-FIRST',
    title: 'Still You. Just Radiant.',
    description: 'Emotionally grounded. Our products never disguise your expressions, freckles, or character—they simply light your features from within.',
    extendedStory: 'The most emotionally resonant pillar of our atelier. Beauty does not mean erasing your lived history, laughter lines, or unique freckles. Our formulas are engineered to highlight the genuine luminance already present in your features.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '03',
    tag: 'VERSATILITY',
    title: 'Your Skin. Elevated.',
    description: 'Where high performance merges seamlessly into restorative dermatology. Biomimetic ceramides and plant sterols enrich every application.',
    extendedStory: 'The boundary between makeup and dermatological skincare is formally erased. Each tint, glaze, and powder is active skincare in disguise, reinforcing the lipid barrier while enhancing complexion.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '04',
    tag: 'THE PROMISE',
    title: 'Less Makeup. More You.',
    description: 'Effortless three-minute morning routines. One swipe melts into the epidermis, eliminating chalky layers and creasing.',
    extendedStory: 'Modern life does not require a 15-step masking ritual. With intuitive melting textures and fingertip-friendly application, you achieve flawless editorial skin in under 180 seconds.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '05',
    tag: 'ZOE ("LIFE")',
    title: 'Life Looks Good on You.',
    description: 'From the Greek \'Zoe\', life itself. 100% vegan, refillable glass vessels, and circular cruelty-free formulation crafted for vibrant everyday living.',
    extendedStory: 'Rooted in the ancient Greek word for vitality and living energy. Zoe is cosmetics designed for moving, dancing, sweating, hugging, and living fully without worrying about makeup sliding or fading.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    isDarkCard: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Architect · Wears Shade 03 Bisque',
    shadeWorn: 'Shade 03 Bisque',
    quote: '"I spent twenty years trying to cover my hyperpigmentation. ZoeNude taught me to harmonize it. My friends keep asking what facialist I go to—not what makeup I wear."',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    skinType: 'Combination / Sensitive'
  },
  {
    id: 'soraia',
    name: 'Soraia Sterling',
    role: 'Fashion Editor · Wears Shade 18 Cocoa',
    shadeWorn: 'Shade 18 Cocoa',
    quote: '"The Lip Cashmere in \'Raw Sand\' is the holy grail. It doesn\'t bleed, never clings to dry patches, and makes my lips look naturally fuller without aggressive gloss."',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
    skinType: 'Normal / Dry'
  },
  {
    id: 'dr-camille',
    name: 'Dr. Camille Chen',
    role: 'Dermatologist · Wears Shade 08 Sand',
    shadeWorn: 'Shade 08 Sand',
    quote: '"I was skeptical of online shade matching, but the Trio Sample card nailed it on day one. The finish stays dewy through a 12-hour surgical shift."',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
    skinType: 'Barrier Compromised'
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'c-01',
    title: 'Morning Ritual with Skin Veil',
    author: '@matildadjerf_atelier',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80',
    tag: 'Beauty, Without the Evidence',
    likes: 2420
  },
  {
    id: 'c-02',
    title: '94% Bio-Lipid Essence on marble vanity',
    author: '@editorialskinjournal',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80',
    tag: 'Atelier Staples',
    likes: 1890
  },
  {
    id: 'c-03',
    title: 'Warm noon golden hour glow',
    author: '@claire_v_skin',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    tag: 'ZoeNude Glow',
    likes: 3105
  },
  {
    id: 'c-04',
    title: 'Cashmere texture swatch study',
    author: '@monochrome_beauty',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80',
    tag: 'Lip Cashmere In Raw Sand',
    likes: 2780
  }
];
