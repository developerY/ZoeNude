import { JournalArticle, QuickBeautyTip, JournalCategory } from '../types';

export const JOURNAL_CATEGORIES: { id: JournalCategory; label: string; count: number; description: string }[] = [
  { id: 'ALL', label: 'All Stories', count: 8, description: 'Complete library of skin narratives, masterclasses, and formulation science.' },
  { id: 'APPLICATION TIPS', label: 'Application Tips', count: 3, description: 'Master artist techniques for seamless, undetectable veil application.' },
  { id: 'BIOMIMETIC SCIENCE', label: 'Biomimetic Science', count: 2, description: 'Inside our Parisian laboratory: bio-lipids, squalane matrices, and skin biology.' },
  { id: 'LIVING RITUALS', label: 'Living Rituals', count: 2, description: 'Mindful 3-minute ceremonies to awaken, prep, and preserve radiant skin.' },
  { id: 'SHADE & COLOR SCIENCE', label: 'Shade & Color Science', count: 2, description: 'Mastering undertones, vascular flush vs true melanin, and sister shade matching.' },
  { id: 'SKIN PREP', label: 'Skin Prep', count: 2, description: 'Essential stratum corneum hydration and primer layering to eliminate flaking.' },
];

export const QUICK_BEAUTY_TIPS: QuickBeautyTip[] = [
  {
    id: 'tip-01',
    title: 'The Fingertip Warm-Press',
    tagline: 'Melt, do not buff',
    tip: 'Never warm bio-lipid foundation on the back of your hand where moisture evaporates. Dispense half a pump onto middle and ring finger cushions, press hands together for 3 seconds to match core body temperature (37°C), then press lightly from the center of the face outward.',
    category: 'Application Technique',
    technique: 'Body-Temperature Activation',
  },
  {
    id: 'tip-02',
    title: 'The Clavicle Undertone Test',
    tagline: 'Ignore cheek flush',
    tip: 'Over 62% of people buy foundation too cool or pink because they match their flushed cheek center. Always match against your lower collarbone or side of the neck in indirect midday window light to uncover your true vascular undertone.',
    category: 'Color Diagnostics',
    technique: 'Vascular Reference Matching',
  },
  {
    id: 'tip-03',
    title: 'The 90-Second Self-Level',
    tagline: 'Patience before setting',
    tip: 'Unlike synthetic silicone makeup that stays wet until dried with talc powder, biomimetic plant squalane self-levels into the skin lipid barrier within 90 seconds. Resist the urge to powder immediately; wait 90 seconds and you will find you need 80% less powder.',
    category: 'Formulation Insight',
    technique: 'Phyto-Lipid Cohesion',
  },
  {
    id: 'tip-04',
    title: 'The Z-Glow Arch Placement',
    tagline: 'Living bone structure',
    tip: 'Avoid harsh contour stripes below the cheekbone. Trace a delicate "Z" with your multi-stick: top of cheekbone arch, downward along the outer eye orbit, and soft sweep into the temple. Blend with patting motions to sculpt bone structure naturally.',
    category: 'Sculpt & Dimension',
    technique: 'Zygomatic Light Tracing',
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    slug: 'art-of-epidermal-melt',
    title: 'The Art of Epidermal Melt: Why We Never Warm Foundation on the Back of the Hand',
    subtitle: 'A Masterclass in Bio-Lipid Temperature Activation & Cashmere Touch',
    category: 'APPLICATION TIPS',
    categoryLabel: 'Application Masterclass',
    publishedDate: 'March 2027',
    readTime: '4 MIN READ',
    author: {
      name: 'Hélène Moreau',
      role: 'Master Colorist & Formulation Director, Paris Atelier',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Traditional makeup artists teach you to pump foundation onto the back of your hand. With bio-lipid matrices, doing so breaks micro-dispersed pigment spheres prematurely before they ever touch your face. Here is the atelier method for seamless living skin.',
    atelierRule: 'Atelier Rule #1: Body temperature (37°C) is the catalyst. Never let ambient air or dry hand skin steal the bio-lipid hydration before your face receives it.',
    contentParagraphs: [
      'For decades, standard backstage protocol dictated pumping liquid makeup onto the back of the non-dominant hand. In the era of petrochemical silicones (cyclopentasiloxane and heavy dimethicone), this made sense: the solvent needed to flash off so the heavy pigment could be picked up with a dense synthetic brush.',
      'With ZoeNude\'s Bio-Lipid Fusion (BLF™), however, the back of your hand is the worst place for your formulation. The skin on the dorsal hand is notoriously thin, prone to trans-epidermal moisture loss, and absorbs delicate carrier lipids like squalane and camellia oil within 12 seconds—leaving behind dry, aggregated pigment crystals.',
      'When you apply directly to your fingertips and gently press together, the natural warmth of your finger pads activates the micro-spheres. The pigment remains floating in suspension, ready to meld with your facial stratum corneum the instant you tap it onto the cheek.',
      'Watch your skin in the mirror after 90 seconds. The formulation does not sit as a mask above your skin; it dissolves into the lipid mantle, giving that fabled "did you just finish a facial?" radiance that remains untouched even under 4K lenses.'
    ],
    keyTips: [
      'Dispense half a pump onto the cushions of your index and middle fingers.',
      'Gently tap fingertip pads together 3 times—no vigorous rubbing.',
      'Stamp from the inner cheek outwards toward the hairline; never drag or swipe in downward strokes.',
      'Allow 90 seconds for self-leveling before deciding if you need a second veil layer.'
    ],
    scientificNote: 'Bio-Lipid Fusion utilizes cold-pressed botanical squalane whose molecular weight closely mirrors human sebum (approx. 422.8 g/mol). Surface tension drops by 45% when warmed to 35-37°C, enabling micro-pigments to slip into skin micro-relief rather than pooling in pores.',
    pullQuote: {
      text: 'Makeup should not disguise the person; it should look as though your own skin decided to behave impeccably.',
      attribution: 'Hélène Moreau, 2027 Paris Atelier Session'
    },
    steps: [
      {
        stepNumber: '01',
        title: 'Thermal Activation',
        description: 'Dispense 1 drop onto the pads of your two middle fingers. Press lightly together for 3 seconds to warm the lipid carrier without friction.'
      },
      {
        stepNumber: '02',
        title: 'The 3-Zone Stipple',
        description: 'Target the areas with natural redness first: center of forehead, bridge of nose, and the apples of the cheeks. Tap in soft, rapid butterfly presses.'
      },
      {
        stepNumber: '03',
        title: 'Feathered Perimeter Fade',
        description: 'Using only the residual pigment remaining on your fingers, sweep gently across jawline and down into the upper neck. No hard demarcation line.'
      }
    ],
    relatedProductIds: ['skin-veil-luminous-tint', 'bio-lipid-restorative-primer']
  },
  {
    id: 'art-02',
    slug: 'vascular-undertone-vs-surface-flush',
    title: 'Vascular Undertones vs Surface Redness: How to Stop Buying the Wrong Shade',
    subtitle: 'The Color Diagnostic Secret Behind our 24-Shade Living Spectrum',
    category: 'SHADE & COLOR SCIENCE',
    categoryLabel: 'Color Science Guide',
    publishedDate: 'April 2027',
    readTime: '5 MIN READ',
    author: {
      name: 'Dr. Aris Vane',
      role: 'Biomimetic Dermatological Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    heroImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Over 62% of women mistakenly wear cool or pink foundations because they misinterpret rosacea, hormonal flush, or broken capillaries as their genetic undertone. The result? A muddy, greyish mask that fights your body.',
    atelierRule: 'Atelier Rule #2: Your true undertone lives where the sun and blood pressure cannot fool you—the lower clavicle, inner bicep, and base of the neck.',
    contentParagraphs: [
      'In our clinical trials conducted across 1,200 women in early 2027, the single most common frustration was the dreaded "afternoon oxidation." Clients reported that their foundation looked acceptable at 8 AM, but by 2 PM appeared ash-grey or orange.',
      'In 84% of cases, the foundation had not oxidized at all. Rather, the client had chosen a pink or cool foundation to "match" the persistent redness on their cheeks and nose bridge.',
      'Surface redness is an epidermal condition—dilated micro-capillaries, environmental windburn, post-acne erythema, or mild rosacea. It is not your genetic undertone. When you layer cool pink pigment over warm surface redness, optical color theory causes the wavelengths to neutralize into a drab cement grey.',
      'To discover your true shade, ignore your cheeks entirely. Stand in indirect northern daylight, lower your shirt collar, and look at the junction between your neck and clavicle. If that skin is golden, you are Warm. If it is beige-olive, you are Olive. If it has no dominant cast, you are Neutral.'
    ],
    keyTips: [
      'Never test foundation on your jawline while experiencing active facial flushing.',
      'If your chest and neck look warm golden while your face looks pink, choose a Neutral or Warm foundation.',
      'ZoeNude\'s micro-dispersed green-gold earthen oxides cancel red flush without feeling heavy or artificial.',
      'When between two depth sister shades (e.g. 04 vs 05), choose the warmer undertone for seamless seamless transitions.'
    ],
    scientificNote: 'Human skin reflectance is governed by oxyhemoglobin (red, 542 nm / 577 nm peaks) and melanin (broad absorption 400-700 nm). Matching to hemoglobin leads to chromatic disharmony because vascular dilation fluctuates by up to 300% throughout the day.',
    pullQuote: {
      text: 'Stop matching your inflammation. Match your true living genetics.',
      attribution: 'Dr. Aris Vane, Biomimetic Color Symposium 2027'
    },
    steps: [
      {
        stepNumber: '01',
        title: 'Calm the Flush',
        description: 'Wait at least 20 minutes after washing your face or applying morning skincare before evaluating shade swatches.'
      },
      {
        stepNumber: '02',
        title: 'The Clavicle Swatch Bar',
        description: 'Apply three parallel vertical stripes along the base of your neck down onto your collarbone: one Neutral, one Warm, one Olive.'
      },
      {
        stepNumber: '03',
        title: 'The Blink Test',
        description: 'Step 3 paces back from the mirror and blink rapidly. The stripe that completely disappears from view is your biometric sister match.'
      }
    ],
    relatedProductIds: ['skin-veil-luminous-tint', 'alabaster-silk-finishing-powder']
  },
  {
    id: 'art-03',
    slug: 'three-minute-second-skin-ritual',
    title: 'The 3-Minute Second Skin Morning Ritual: Prep, Veil, and Cashmere',
    subtitle: 'A Minimalist Parisian Beauty Ceremony for Modern Living',
    category: 'LIVING RITUALS',
    categoryLabel: 'Daily Atelier Ritual',
    publishedDate: 'February 2027',
    readTime: '3 MIN READ',
    author: {
      name: 'Sophie Laurent',
      role: 'Lead Atelier Aesthetician',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    },
    heroImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Complexity is the enemy of elegance. When your makeup relies on 14 steps, powders, and fixers, your skin cannot breathe. Here is how three biomimetic essentials deliver luminous, unshakeable radiance in under 180 seconds.',
    atelierRule: 'Atelier Rule #3: Layer by density, not by habit. Hydration first, bio-lipid veil second, cushion touchpoints last.',
    contentParagraphs: [
      'At our Rue Saint-Honoré atelier, clients often arrive carrying cosmetic bags overflowing with 25 products. Yet the most striking skin is almost always created with three deliberate gestures.',
      'Step One awakens the dermal reservoir with Bio-Lipid Restorative Primer. Containing 3% niacinamide and alpine willowherb, it refines pore appearance without plastic siloxanes that pill or suffocate.',
      'Step Two applies Skin Veil Luminous Tint. Rather than painting the entire face uniformly like a canvas, we deposit pigment only where tone needs harmonizing—the perimeter of the face remains bare and fresh.',
      'Step Three unites lips and cheeks with Radiant Glaze Dew Multi-Stick. Using the same warm earthen nude on both cheeks and lips creates monochromatic harmony that makes the eyes look immediately brighter.'
    ],
    keyTips: [
      'Keep your skincare damp—never apply primer to bone-dry, parched skin.',
      'Blend with the warmth of your middle finger pads to bond the bio-lipids.',
      'One multi-stick serves as blush, eye sheen, and lip conditioning tint.',
      'Never re-powder at 4 PM; mist face with thermal water and press lightly with clean palms.'
    ],
    scientificNote: 'Formulating without film-forming polymers ensures the skin\'s natural trans-epidermal moisture cycle remains unimpeded, reducing micro-comedone formation by 92% compared to conventional long-wear foundations.',
    pullQuote: {
      text: 'True luxury is having so much confidence in your formulation that three minutes is all you require.',
      attribution: 'Sophie Laurent, Atelier Masterclass 2027'
    },
    steps: [
      {
        stepNumber: '01',
        title: '0:00 - 0:45 | Epidermal Hydration Lock',
        description: 'Smooth 2 pumps of Bio-Lipid Primer over freshly cleansed face. Press upward into cheeks and forehead until tacky-smooth.'
      },
      {
        stepNumber: '02',
        title: '0:45 - 2:00 | The Atmospheric Veil',
        description: 'Dot 1 pump of Skin Veil across cheeks, chin, and forehead. Melt outward with gentle stamping motions.'
      },
      {
        stepNumber: '03',
        title: '2:00 - 3:00 | Monochromatic Flush',
        description: 'Swipe Radiant Glaze Multi-Stick across high cheekbones and press onto center of lips with thumb pad.'
      }
    ],
    relatedProductIds: ['bio-lipid-restorative-primer', 'skin-veil-luminous-tint', 'radiant-glaze-dew-multi-stick']
  },
  {
    id: 'art-04',
    slug: 'micro-algae-vs-synthetic-silicones',
    title: 'Micro-Algae vs Synthetic Silicones: The Truth Behind Breathable Wear',
    subtitle: 'Inside the Molecular Architecture of Our Brittany Coast Algal Lipids',
    category: 'BIOMIMETIC SCIENCE',
    categoryLabel: 'Biomimetic Science',
    publishedDate: 'January 2027',
    readTime: '6 MIN READ',
    author: {
      name: 'Dr. Elena Rossi',
      role: 'Biomimetic Formulation Chemist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why Dimethicone and Cyclopentasiloxane create the temporary illusion of smoothness while secretly congesting the epidermal matrix. How micro-algae lipids create a true bio-identical second skin that improves hydration over 28 days.',
    atelierRule: 'Atelier Rule #4: If an ingredient wouldn’t naturally be recognized by your skin’s cellular receptors, it has no place in your foundation.',
    contentParagraphs: [
      'In conventional cosmetics, 60% of the bottle is comprised of volatile silicone fluids. They are cheap to manufacture, dry instantly, and produce an artificial satin slipperiness. But silicones are hydrophobic synthetic plastics. They create an impenetrable sheet that locks sebum, dead keratin, and anaerobic bacteria beneath the surface.',
      'At ZoeNude, we spent five years developing our proprietary micro-algal lipid matrix sustainably harvested from the extreme tidal zone off the coast of Brittany. Under harsh Atlantic tides, these micro-algae synthesize unique polar glycolipids to prevent cellular dehydration.',
      'When incorporated into our foundation, these polar lipids organize into a biomimetic lamellar bilayer. Rather than sealing your pores, they form a flexible lattice that allows water vapor and oxygen to circulate freely.',
      'In our double-blind clinical study launched in early 2027, subjects wearing our algal lipid foundation demonstrated a 34% increase in stratum corneum hydration and a 41% reduction in micro-inflammatory markers after 28 days of daily wear.'
    ],
    keyTips: [
      'Look for "Cyclopentasiloxane" and "Dimethicone/Vinyl Crosspolymer" on your current ingredient labels.',
      'Algal lipids actively support your natural skin microbiome rather than sterilizing it.',
      'Breathable formulations allow your natural healthy skin oils to blend harmoniously with pigments, eliminating the 3 PM cake phenomenon.',
      'Safe for sensitive, acne-prone, and rosacea-compromised skin barriers.'
    ],
    scientificNote: 'Brittany micro-algal glycolipids possess a critical amphiphilic balance with hydrophilic polar heads and hydrophobic polyunsaturated fatty acid tails, forming liquid crystal phases indistinguishable from human intercellular lipids.',
    pullQuote: {
      text: 'We did not engineer a cosmetic. We synthesized an extension of the living human epidermis.',
      attribution: 'Dr. Elena Rossi, 2027 Clean Science Whitepaper'
    },
    steps: [
      {
        stepNumber: '01',
        title: 'Sustainable Extraction',
        description: 'Micro-algae cultivated in closed sterile bioreactors powered by renewable solar energy in Brittany.'
      },
      {
        stepNumber: '02',
        title: 'Supercritical CO2 Purification',
        description: 'Lipids isolated without toxic chemical solvents, preserving 100% of antioxidant carotenoids and omega-3s.'
      },
      {
        stepNumber: '03',
        title: 'Pigment Encapsulation',
        description: 'Pure mineral iron oxides are micro-coated in the algal matrix, ensuring pigment never touches bare skin directly.'
      }
    ],
    relatedProductIds: ['skin-veil-luminous-tint', 'bio-lipid-restorative-primer']
  },
  {
    id: 'art-05',
    slug: 'z-glow-cheek-placement-masterclass',
    title: 'The Z-Glow Cheek Placement: Sculpting Bone Structure Without Harsh Contours',
    subtitle: 'Why the 2016 Contour Line is Dead, and How Light Reflection Replaces Shadow',
    category: 'APPLICATION TIPS',
    categoryLabel: 'Application Masterclass',
    publishedDate: 'May 2027',
    readTime: '4 MIN READ',
    author: {
      name: 'Camille Dubois',
      role: 'Editorial Runway & Cinema Makeup Artist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
    heroImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Dark brown lines carved under the cheekbone flatten facial dimension in natural daylight. Modern cinema makeup relies instead on tracing the natural curve of the zygomatic bone with warm earthen glow.',
    atelierRule: 'Atelier Rule #5: Shadow reveals artificial makeup; reflected light reveals bone structure.',
    contentParagraphs: [
      'The era of the heavy instagram contour stripe has concluded. When viewed under the merciless glare of morning sunlight or direct conversation across a cafe table, grey-brown contour lines betray the very illusion they were meant to construct.',
      'Living human bone structure is defined by where ambient light catches the highest curved plane of the zygomatic arch. When that high plane is infused with healthy micro-circulation (warm peach-rose pigment and dewy lipid luster), the eye perceives depth naturally without needing dark shadows.',
      'The "Z-Glow" technique was pioneered at our Paris masterclasses: you place the multi-stick at the outer corner of the brow bone, angle down across the high cheek apex, and feather slightly back toward the temple in a soft cursive "Z".',
      'The result is an instant visual lift that moves with your facial muscles, smiles, and laughter without splitting or collecting in fine expression lines.'
    ],
    keyTips: [
      'Smile gently while looking straight ahead to locate the apex of your cheekbone.',
      'Warm the multi-stick stick against your thumb pad before touching the face.',
      'Blend in an upward and outward arc—never drag color downward toward the mouth.',
      'Set with a whisper of micro-milled Alabaster Powder only at the perimeter, keeping the cheek apex dewy.'
    ],
    scientificNote: 'Light bouncing off botanical ester balms creates specular reflection (gloss) surrounded by diffuse reflection from mineral iron oxides, mimicking the natural refractive index of young human stratum corneum (n = 1.55).',
    pullQuote: {
      text: 'You don\'t need to carve a new face when your own bone structure is already extraordinary.',
      attribution: 'Camille Dubois, 2027 Runway Masterclass'
    },
    steps: [
      {
        stepNumber: '01',
        title: 'Locate the High Plane',
        description: 'Feel with your index finger for the highest bone ledge right below your temple. This is where light naturally lands.'
      },
      {
        stepNumber: '02',
        title: 'The Soft Z Trace',
        description: 'Using Radiant Glaze Dew Multi-Stick, draw a soft continuous stroke: from upper outer orbital rim down to cheekbone apex and sweeping back to hairline.'
      },
      {
        stepNumber: '03',
        title: 'The Butterfly Tap',
        description: 'Using only the pad of your ring finger, tap in rapid upward pulses. The edges will vanish into your Skin Veil within 15 seconds.'
      }
    ],
    relatedProductIds: ['radiant-glaze-dew-multi-stick', 'lip-cashmere-satin-lipstick']
  },
  {
    id: 'art-06',
    slug: 'skin-aging-and-titanium-dioxide',
    title: 'Skin Aging & Titanium Dioxide: How Heavy Powders Amplify Fine Lines',
    subtitle: 'The Micro-Milled Squalane Diffusing Alternative to Chalky Setting Powders',
    category: 'SKIN PREP',
    categoryLabel: 'Formulation Deep Dive',
    publishedDate: 'April 2027',
    readTime: '5 MIN READ',
    author: {
      name: 'Dr. Elena Rossi',
      role: 'Biomimetic Formulation Chemist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
    heroImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why traditional baking powders cause under-eye crinkling by 2 PM. Understanding the difference between raw talc minerals and squalane-coated spherical starches that diffuse light without absorbing essential skin moisture.',
    atelierRule: 'Atelier Rule #6: Powder should diffuse light, not dehydrate tissue. If your powder leaves a white cast, it is drying your skin.',
    contentParagraphs: [
      'Have you ever noticed that your makeup looks smooth in the morning, but by mid-afternoon your smile lines look deeper and your under-eyes look crepey? In 95% of cases, the culprit is not your age—it is your setting powder.',
      'Traditional powders rely heavily on uncoated talc and raw titanium dioxide. Under a scanning electron microscope, talc particles are jagged platelets. As your facial muscles move throughout the day, these dry platelets aggregate inside micro-crevices, absorbing every molecule of sebum and moisture until the skin collapses into dry lines.',
      'Our Alabaster Silk Finishing Powder re-imagines setting entirely. We replaced talc with Japanese micro-rice starch spheres that are individually vacuum-coated in a microscopic film of plant squalane and silk amino acids.',
      'Because the particles are spherical and lipid-coated, they roll smoothly over skin texture without catching on dehydration lines. They selectively absorb excess liquid lipids from sebum while leaving your cellular water reservoir intact.'
    ],
    keyTips: [
      'Never bake with heavy powder under the delicate peri-orbital eye area.',
      'Apply powder with a fluffy velour puff or silk brush, pressing and rolling rather than sweeping.',
      'Only powder the T-zone: center of forehead, sides of the nose, and the chin cleft.',
      'Leave your cheekbones, bridge of the nose, and temples untouched for dimensional vitality.'
    ],
    scientificNote: 'Spherical micro-rice starch particles measure 3-8 micrometers, exhibiting isotropic light scattering that creates a soft-focus Gaussian blur across skin pores without triggering retro-reflective flash photography washout.',
    pullQuote: {
      text: 'A good powder makes people notice how smooth your skin looks—not how well your face is powdered.',
      attribution: 'Dr. Elena Rossi, 2027 Cosmetic Science Journal'
    },
    steps: [
      {
        stepNumber: '01',
        title: 'Deposition in the Lid',
        description: 'Tap a dime-sized amount of Alabaster Silk Powder into the compact lid. Swirl a soft silk brush to load the bristles evenly.'
      },
      {
        stepNumber: '02',
        title: 'The Hand Tap',
        description: 'Firmly tap the brush handle against your wrist to discharge excess loose surface powder.'
      },
      {
        stepNumber: '03',
        title: 'Targeted Roll Press',
        description: 'Press the brush gently into the sides of the nose and center forehead in rolling arcs. Zero buffing, zero friction.'
      }
    ],
    relatedProductIds: ['alabaster-silk-finishing-powder', 'skin-veil-luminous-tint']
  },
  {
    id: 'art-07',
    slug: 'night-before-prep-lipid-reset',
    title: 'The Night-Before Prep: How Evening Lipids Guarantee Flawless Morning Makeup',
    subtitle: 'The 10-Minute Stratum Corneum Reset That Eliminates Foundation Flaking',
    category: 'SKIN PREP',
    categoryLabel: 'Evening Skin Prep',
    publishedDate: 'March 2027',
    readTime: '3 MIN READ',
    author: {
      name: 'Sophie Laurent',
      role: 'Lead Atelier Aesthetician',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    },
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'No foundation in the world can lay smoothly over desiccated, flaking corneocytes. How a simple evening lipid compress restores intercellular cement while you sleep so your morning veil glides on like silk.',
    atelierRule: 'Atelier Rule #7: Flawless morning makeup is 80% decided by your nighttime lipid barrier.',
    contentParagraphs: [
      'When clients consult our atelier complaining that foundation clings to dry patches around their nose or between their brows, their first impulse is always aggressive physical scrubs or high-strength chemical acids.',
      'In reality, aggressive exfoliation strips the delicate intercellular lipid bilayers that hold your surface skin cells flat. The edges of the cells curl upward like dried autumn leaves—and when you apply liquid pigment, it lodges beneath those curled edges, highlighting texture tenfold.',
      'The antidote is nighttime lipid replenishment. Instead of stripping, we seal the skin in bio-compatible ceramides and squalane after evening cleansing. While you rest in REM sleep, the lipids seep into micro-fissures, soldering the keratinocytes back into a planar, glass-smooth mosaic.',
      'Wake up, splash with tepid water (no harsh foaming cleansers), apply your Bio-Lipid Primer, and watch your foundation dissolve into the skin with zero texture or demarcation.'
    ],
    keyTips: [
      'Stop using high-pH foaming facial washes that strip barrier lipids.',
      'Press evening facial oils into damp skin immediately following your essence or mist.',
      'In the morning, skip the cleanser completely—a gentle rinse with cool water preserves nighttime lipids.',
      'Use a 100% mulberry silk pillowcase to prevent sleep friction from sapping hydration.'
    ],
    scientificNote: 'Ceramide NP and plant phytosterols in a 3:1:1 physiological molar ratio accelerate barrier recovery by 58% compared to single-ingredient emollient oils.',
    pullQuote: {
      text: 'Treat your stratum corneum not as an enemy to be scrubbed, but as a living silk fabric to be conditioned.',
      attribution: 'Sophie Laurent, Atelier Paris 2027'
    },
    steps: [
      {
        stepNumber: '01',
        title: 'Gentle Oil Melt Cleansing',
        description: 'Dissolve daily pollutants with a warm plant oil balm. Rinse clean with a steamed organic muslin cloth.'
      },
      {
        stepNumber: '02',
        title: 'Hydrosol Saturation',
        description: 'Mist face generously with rosewater or thermal spring water until the skin is thoroughly quenched.'
      },
      {
        stepNumber: '03',
        title: 'The Lipid Lock-In',
        description: 'Warm 3 drops of pure squalane oil between palms and press firmly against face for 10 seconds per zone.'
      }
    ],
    relatedProductIds: ['bio-lipid-restorative-primer', 'skin-veil-luminous-tint']
  },
  {
    id: 'art-08',
    slug: 'golden-hour-swatch-test',
    title: 'The Golden Hour Swatch Test: Finding Your Sister Shade in 3 Lights',
    subtitle: 'Why Department Store Bulbs Lie, and How Ambient Light Reveals Your True Tone',
    category: 'SHADE & COLOR SCIENCE',
    categoryLabel: 'Color Science Guide',
    publishedDate: 'June 2027',
    readTime: '4 MIN READ',
    author: {
      name: 'Hélène Moreau',
      role: 'Master Colorist & Formulation Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    heroImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Retail store fluorescent bulbs distort undertones by up to 40% with unnatural blue spikes. The 3-light ambient method to evaluate your Home Swatch Trio in Morning Window Light, Midday Diffused Sun, and Golden Sunset.',
    atelierRule: 'Atelier Rule #8: A true biomimetic shade match never changes color as you walk from indoor warmth to outdoor sunlight.',
    contentParagraphs: [
      'Have you ever had a salesperson match you at a beauty counter, only to look in your car rearview mirror five minutes later in absolute horror? You are not alone.',
      'Department store LED track lights typically measure 4500K with aggressive green-blue mercury vapor peaks designed to make diamonds sparkle, not make human skin look natural. They wash out warm undertones and exaggerate redness.',
      'This is precisely why ZoeNude introduced the Home Swatch Trio: we mail you three adjacent sister shades in ambient light vials so you can test them in your actual daily living environment.',
      'The test takes 3 light checkpoints: 9 AM soft morning window light, 1 PM diffuse overcast sky, and 6 PM golden hour sunset. If a shade disappears into your neck and collarbone across all three lighting temperatures, you have found your lifelong second skin.'
    ],
    keyTips: [
      'Always test in natural daylight near a north- or east-facing window.',
      'Avoid checking your match under direct overhead bathroom halogen spotlights.',
      'Test 3 adjacent shades: your primary estimate, one undertone warmer, and one depth lighter.',
      'Photograph your swatches without flash or beauty filters to see the honest digital color balance.'
    ],
    scientificNote: 'Color rendering index (CRI) of natural morning sunlight is 100, while commercial retail LEDs average CRI 78-85, causing a metameric failure where pigments appear visually identical under artificial light but clash violently outdoors.',
    pullQuote: {
      text: 'You don\'t live under department store spot-lamps. Never let them dictate your complexion.',
      attribution: 'Hélène Moreau, 2027 Color Science Lab'
    },
    steps: [
      {
        stepNumber: '01',
        title: 'Morning Window Swatch (9 AM)',
        description: 'Apply 3 parallel fingertip swipes along the jawline down to the collarbone. Check in soft indirect window light.'
      },
      {
        stepNumber: '02',
        title: 'Midday Diffuse Check (1 PM)',
        description: 'Step outdoors or onto a balcony. One shade will begin to disappear into the lower neck tissue.'
      },
      {
        stepNumber: '03',
        title: 'Golden Sunset Verification (6 PM)',
        description: 'Under warm 3000K sunset light, check for any chalkiness or ashy cast. The correct shade glows with natural radiance.'
      }
    ],
    relatedProductIds: ['skin-veil-luminous-tint', 'alabaster-silk-finishing-powder']
  }
];
