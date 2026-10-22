import React, { useState } from 'react';
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
  MapPin,
  X
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [isSealVisible, setIsSealVisible] = useState(true);
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

  const brandPillars = [
    {
      quote: "Precision biomimetic pigment calibration engineered to mirror true vascular undertones without artificial masking.",
      publication: "KoColor",
      category: "Color Science",
    },
    {
      quote: "Undetectable second-skin wear formulated with bio-lipids that move in harmony with your natural lipid barrier.",
      publication: "ZoeWear",
      category: "Living Wear",
    },
    {
      quote: "Multi-dimensional light refraction and cellular frequency that preserves vitality and radiant skin luminescence.",
      publication: "ZoeWave",
      category: "Cellular Radiance",
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
                <div className="rounded-3xl overflow-hidden border-2 border-[#E8DFD5] shadow-2xl bg-[#F5EDE2] p-2 group hover:shadow-3xl transition-shadow duration-500">
                  <img
                    src="/assets/aistudio/Gemini_Generated_Image_t98fi1t98fi1t98f__1__ebb6a715.jpeg"
                    alt="ZoeNude Cosmetics Embossed Insignia - Beauty, Without the Evidence"
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                {/* Floating Seal with Close Button */}
                {isSealVisible ? (
                  <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#E8DFD5] rounded-2xl p-4 shadow-xl max-w-[220px] transition-all duration-300 animate-fadeIn">
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setIsSealVisible(false)}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FAF6F0] hover:bg-[#2B211E] text-[#6E625D] hover:text-white border border-[#E8DFD5] flex items-center justify-center transition-colors shadow-xs z-20 focus:outline-none cursor-pointer"
                      title="Close official seal note"
                      aria-label="Close official seal note"
                    >
                      <X size={13} />
                    </button>

                    <div className="flex items-center space-x-2 mb-1">
                      <Award size={16} className="text-[#85513f] flex-shrink-0" />
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#2B211E]">
                        OFFICIAL ATELIER SEAL
                      </span>
                    </div>
                    <p className="text-[11px] font-sans text-[#6E625D] leading-tight pr-1">
                      The Aphrodite Crest · Hand-embossed mark of authenticity & living skin beauty.
                    </p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsSealVisible(true)}
                    className="absolute -bottom-3 -left-3 bg-white/95 hover:bg-white backdrop-blur-md border border-[#E8DFD5] rounded-full px-3 py-1.5 text-[10px] font-sans font-semibold text-[#85513f] uppercase tracking-wider shadow-md flex items-center space-x-1.5 transition-all cursor-pointer hover:shadow-lg"
                    title="View atelier seal note"
                  >
                    <Award size={12} />
                    <span>View Atelier Seal</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Story & Founders */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: Atelier Heritage Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-lg aspect-[4/5] bg-[#F2EDE4]">
                <img
                  src="/assets/aistudio/Gemini_Generated_Image_bj462jbj462jbj46_fa1cb5df.jpeg"
                  alt="ZoeNude Muse & Formulation Origins"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#2B211E] text-white text-[11px] font-sans tracking-[0.18em] px-4 py-2 rounded-full uppercase shadow-md">
                EST. 2027 · PARIS
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

      {/* The Zoe Manifesto Bridge Section */}
      <section className="bg-[#2B211E] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#85513f]/20 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#362a26] border border-[#52413c] rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#4d3c36]">
              <div>
                <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.22em] text-[#d8a48f] uppercase mb-2">
                  <Feather size={14} />
                  <span>THE FOUNDING CODE</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF6F0] font-normal">
                  The Zoe Manifesto
                </h2>
                <p className="font-serif text-sm sm:text-base text-[#d8a48f] italic mt-1">
                  Five foundational truths governing every pigment, oil, and mineral we touch.
                </p>
              </div>

              <Link
                to="/manifesto"
                className="inline-flex items-center space-x-2 bg-[#d8a48f] hover:bg-[#c99580] text-[#2B211E] text-xs font-semibold px-6 py-3.5 rounded tracking-wider uppercase transition-colors flex-shrink-0 self-start md:self-auto"
              >
                <span>Read Full Manifesto</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 5 Pillars Quick Index */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-8">
              {[
                { num: '01', title: 'Skin First, Pigment Second', tag: 'Biomimicry' },
                { num: '02', title: 'The Optical Illusion', tag: 'Prism Light' },
                { num: '03', title: 'Clean Chemistry', tag: 'Zero Occlusion' },
                { num: '04', title: 'Universal Chromatics', tag: 'Living Tones' },
                { num: '05', title: 'Conscious Luxury', tag: 'Italian Glass' },
              ].map((p) => (
                <Link
                  key={p.num}
                  to="/manifesto"
                  className="bg-[#2B211E]/70 hover:bg-[#2B211E] border border-[#4d3c36] hover:border-[#d8a48f] p-4 rounded-xl transition-all group block text-left"
                >
                  <span className="text-[10px] font-sans font-bold text-[#d8a48f] block mb-1">
                    PILLAR {p.num}
                  </span>
                  <div className="text-xs font-serif text-white group-hover:text-[#d8a48f] transition-colors leading-snug">
                    {p.title}
                  </div>
                  <span className="text-[9px] text-[#A69A95] uppercase tracking-wider block mt-2">
                    {p.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Formulation Commitments */}
      <section id="commitments" className="bg-white py-20 border-y border-[#E8DFD5] scroll-mt-24">
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
      <section id="ateliers" className="bg-[#FAF6F0] py-20 border-t border-[#E8DFD5] scroll-mt-24">
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

      {/* The Trilogy Pillars: KoColor, ZoeWear, ZoeWave */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
            THE ATELIER FOUNDATION
          </span>
          <h2 className="font-serif text-3xl text-[#2B211E] mt-2">
            KoColor · ZoeWear · ZoeWave
          </h2>
          <p className="text-xs sm:text-sm text-[#6E625D] mt-2 max-w-lg mx-auto">
            The three unified disciplines defining our biomimetic second-skin formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandPillars.map((p, idx) => {
            const gradients = [
              'from-[#E27D86] via-[#E9B858] to-[#689775]',
              'from-[#F08060] via-[#E9B858] to-[#C85A3E]',
              'from-[#5E8DB8] via-[#8F79B2] to-[#E27D86]',
            ];
            const dotColors = ['bg-[#E27D86]', 'bg-[#F08060]', 'bg-[#8F79B2]'];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#E8DFD5] shadow-xs text-center flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className={`w-2.5 h-2.5 rounded-full ${dotColors[idx]} group-hover:scale-125 transition-transform`} />
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#85513f]">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>
                  <p className="font-serif text-base sm:text-lg italic text-[#2B211E] leading-relaxed">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EEE8]">
                  <div className={`h-[2.5px] w-16 mx-auto mb-3 bg-gradient-to-r ${gradients[idx]} rounded-full`} />
                  <span className="text-base font-serif font-bold tracking-[0.16em] uppercase text-[#2B211E] block">
                    {p.publication}
                  </span>
                  <span className="text-[10px] font-sans tracking-wider uppercase text-[#85513f] mt-0.5 block font-semibold">
                    {p.category}
                  </span>
                </div>
              </div>
            );
          })}
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
