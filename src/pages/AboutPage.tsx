import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Feather, 
  Award, 
  Compass, 
  Leaf, 
  Droplets, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const standards = [
    {
      icon: <Droplets className="w-5 h-5 text-[#85513f]" />,
      title: 'Biomimetic Lipid Fusion (BLF™)',
      description:
        'Our formulas do not sit on top of skin like a mask. Engineered with 94% bio-identical squalane, plant phytosterols, and ceramide NP, our tints melt at 37°C to fuse seamlessly with the natural stratum corneum.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#85513f]" />,
      title: 'Micro-Reflective Mineral Prisms',
      description:
        'We eliminated flat talc and chalky titanium oxides. Instead, microscopic prism minerals refract ambient light across three optical axes, diffusing redness and blurring pores without dulling your inner vitality.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#85513f]" />,
      title: 'Non-Comedogenic & Breathable',
      description:
        'Formulated without heavy silicones (D4/D5), mineral oils, synthetic fragrances, or pore-clogging film formers. Clinically tested on sensitive, reactive, and post-laser recovery complexions.',
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#85513f]" />,
      title: '100% Vegan & Leaping Bunny Certified',
      description:
        'Cruelty-free from inception. Packaged in custom-molded recyclable Italian frosted glass with brushed post-consumer aluminum caps and 100% FSC-certified soy-printed cartons.',
    },
  ];

  const ateliers = [
    {
      city: 'Paris Atelier',
      neighborhood: '12 Place Vendôme, 75001 Paris',
      description: 'Private color blending salon and custom formulation archive by appointment.',
      hours: 'Mon – Sat, 10am – 7pm CET',
    },
    {
      city: 'New York Studio',
      neighborhood: '84 Wooster Street, SoHo, NY 10012',
      description: 'Full chromatic shade diagnostics and personal artist masterclasses.',
      hours: 'Tue – Sun, 11am – 8pm EST',
    },
    {
      city: 'Athens Flagship',
      neighborhood: 'Kolonaki Square 4, Athens 106 73',
      description: 'The spiritual birthplace of ZoeNude, celebrating classical Mediterranean botanicals.',
      hours: 'Mon – Sat, 10am – 6pm EET',
    },
  ];

  const pressQuotes = [
    {
      quote: "The French beauty revolution nobody saw coming because you genuinely cannot see it on the skin.",
      publication: "Vogue France",
    },
    {
      quote: "ZoeNude solved the impossible dilemma between clean ingredients and ultra-luxury performance.",
      publication: "Harper's Bazaar",
    },
    {
      quote: "Skin looks like it was sculpted by sunlight and dew, rather than covered in makeup.",
      publication: "The Cut",
    },
  ];

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      {/* Editorial Hero Banner */}
      <section className="bg-[#FAF6F0] py-16 sm:py-24 border-b border-[#E8DFD5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story Header */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
                <Compass size={14} />
                <span>THE HOUSE OF ZOENUDE</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal leading-[1.15]">
                Beauty, Without the Evidence.
              </h1>

              <p className="font-serif text-lg sm:text-xl text-[#85513f] italic font-normal">
                Born from the Greek word &zeta;&omega;&eta; (&ldquo;vital living force&rdquo;) and the conviction that makeup should never conceal who you are.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#4E4542] leading-relaxed max-w-2xl font-light">
                For decades, cosmetic formulateurs treated the human complexion as an imperfect surface to be 
                primed, masked, and locked under layers of heavy talc and synthetic silicones. ZoeNude was created 
                to tear down that illusion. We craft biomimetic cosmetics that honor the breath, texture, 
                and radiance of living skin.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/shop"
                  className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold px-7 py-3.5 rounded tracking-wider uppercase transition-colors inline-flex items-center space-x-2"
                >
                  <span>Explore The Formulations</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/shade-finder"
                  className="bg-transparent hover:bg-[#FAF0E6] text-[#2B211E] border border-[#2B211E] text-xs font-semibold px-7 py-3.5 rounded tracking-wider uppercase transition-colors"
                >
                  Find Your Match
                </Link>
              </div>
            </div>

            {/* Right Column: Handcrafted Brand Crest Artwork */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                <div className="rounded-3xl overflow-hidden border-2 border-[#E8DFD5] shadow-xl bg-[#F5EDE2] p-2">
                  <img
                    src="/assets/aistudio/Gemini_Generated_Image_bj462jbj462jbj46_fa1cb5df.jpeg"
                    alt="ZoeNude Venus Portrait & Emblem"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
                {/* Floating Seal */}
                <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#E8DFD5] rounded-2xl p-4 shadow-xl max-w-[210px]">
                  <div className="flex items-center space-x-2 mb-1">
                    <Award size={16} className="text-[#85513f]" />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#2B211E]">
                      ATELIER CRITERIA
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-[#6E625D] leading-tight">
                    Clean biomimetic pigments tested across 24 true living undertones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Story & Founders */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: Atelier Texture & Swatch */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-lg aspect-[4/5] bg-[#F2EDE4]">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                  alt="ZoeNude Biomimetic Texture Application"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#2B211E] text-white text-[11px] font-sans tracking-[0.18em] px-4 py-2 rounded-full uppercase shadow-md">
                EST. 2018 · PARIS
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block">
              THE GENESIS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] leading-snug">
              Why Masking What Is Alive Makes No Sense
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#4E4542] leading-relaxed">
              <p>
                ZoeNude began in a small boutique laboratory on the Rue de Castiglione in Paris. 
                Founder Dr. Helena Vance, an aesthetic dermatologist, observed a persistent pattern: 
                her patients worked tirelessly on skin health, yet covered their results with thick, 
                occlusive foundations that suffocated pores, created micro-inflammation, and settled into fine lines.
              </p>
              <p>
                Partnering with veteran Parisian editorial makeup artist Marc de Saint-Germain, Dr. Vance spent 
                seven years developing the <strong>Bio-Lipid Matrix</strong>. Rather than suspending dry minerals 
                in heavy silicones, they engineered skin-identical liposomes derived from Italian olive squalane, 
                jojoba esters, and phytoceramides.
              </p>
              <blockquote className="border-l-2 border-[#85513f] pl-4 italic text-[#2B211E] text-sm sm:text-base font-serif my-4">
                &ldquo;True elegance is not an illusion painted on the surface. It is the undeniable presence of life, illuminated from within.&rdquo;
              </blockquote>
              <p>
                Today, ZoeNude is worn by actresses, editors, brides, and people worldwide who demand makeup 
                that looks like breathtaking skin—even under bright morning sun or high-definition cameras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Formulation Commitments */}
      <section className="bg-white py-20 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
              SCIENTIFIC RIGOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              The Four Commitments of Biomimetic Makeup
            </h2>
            <p className="text-xs sm:text-sm text-[#6E625D]">
              Every formulation must satisfy both clinical dermatological tolerance and runway visual fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6F0] rounded-2xl p-8 border border-[#E8DFD5] hover:border-[#85513f] transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#f4ece7] flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-[#2B211E]">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Flacon Architecture */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block">
              ENVIRONMENTAL CONSCIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              Designed to Leave No Residue On Earth
            </h2>
            <p className="text-xs sm:text-sm text-[#4E4542] leading-relaxed">
              We believe luxury without environmental responsibility is hollow. ZoeNude vessels are crafted from 
              substantial, endlessly recyclable frosted soda-lime glass sourced in Northern Italy. Each pump is 
              designed for clean separation, and our secondary packaging utilizes 100% FSC-certified post-consumer 
              board printed with waterless soy ink.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-xs text-[#2B211E]">
                <CheckCircle2 size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                <span>Zero plastic shimmer, zero microplastics, zero phthalates</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#2B211E]">
                <CheckCircle2 size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                <span>Fair-trade, child-labor-free certified mineral mica</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#2B211E]">
                <CheckCircle2 size={16} className="text-[#2F6B43] flex-shrink-0 mt-0.5" />
                <span>Carbon-neutral fulfillment with biodegradable cornstarch cushioning</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#E8DFD5] aspect-square bg-[#FAF6F0]">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
                  alt="Glass Cosmetic Formulation Flacon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E8DFD5] aspect-square bg-[#FAF6F0] mt-6">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
                  alt="Botanical Ingredients and Oils"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Ateliers */}
      <section className="bg-[#FAF6F0] py-20 border-t border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
              VISIT OUR SPACES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
              The ZoeNude Ateliers
            </h2>
            <p className="text-xs sm:text-sm text-[#6E625D]">
              Experience private shade blending, one-on-one undertone mapping, and formulation consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ateliers.map((atelier, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#E8DFD5] shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[#85513f]">
                    <MapPin size={16} />
                    <span className="text-xs font-sans font-bold uppercase tracking-wider">
                      {atelier.city}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#2B211E]">
                    {atelier.neighborhood}
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    {atelier.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F0EEE8] text-[11px] font-sans text-[#807571]">
                  {atelier.hours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Quotes & Critical Acclaim */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
            EDITORIAL ACCLAIM
          </span>
          <h2 className="font-serif text-3xl text-[#2B211E] mt-2">
            In The Words of Critics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressQuotes.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#E8DFD5] shadow-xs text-center flex flex-col justify-between"
            >
              <p className="font-serif text-base sm:text-lg italic text-[#2B211E] leading-relaxed">
                &ldquo;{p.quote}&rdquo;
              </p>
              <span className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase text-[#85513f] mt-6 block">
                {p.publication}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B211E] rounded-3xl p-10 sm:p-14 text-center text-white space-y-6 shadow-2xl">
          <span className="text-[10px] font-sans font-semibold tracking-[0.22em] text-[#d8a48f] uppercase">
            COMMENCE YOUR REGIMEN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF6F0] max-w-xl mx-auto font-normal">
            Ready to experience beauty without the evidence?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#D8CFCA] max-w-md mx-auto leading-relaxed">
            Take our 90-second diagnostic or browse the full collection of biomimetic essentials.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/shade-finder"
              className="bg-[#d8a48f] hover:bg-[#c99580] text-[#2B211E] text-xs font-semibold px-8 py-3.5 rounded tracking-wider uppercase transition-colors"
            >
              Take Complexion Quiz
            </Link>
            <Link
              to="/shop"
              className="bg-transparent hover:bg-white/10 text-white border border-[#807571] text-xs font-semibold px-8 py-3.5 rounded tracking-wider uppercase transition-colors"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
