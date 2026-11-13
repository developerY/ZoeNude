import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Cpu, Smartphone, Cloud, PackageCheck } from 'lucide-react';
import { TechSubNav } from '../components/TechSubNav';
import bambooPackagingImg from '../assets/images/compostable_bamboo_packaging_1794515735918.jpg';
import nfcDispenserImg from '../assets/images/nfc_beauty_dispenser_1794515736580.jpg';

export const TechPage: React.FC = () => {
  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      <TechSubNav active="overview" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAF1E8] via-[#FCF7F1] to-[#FCF9F3] py-16 sm:py-24 border-b border-[#EADED5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-sans font-medium tracking-[0.18em] text-[#85513f] uppercase">
            Zoe · Nude Cosmetics · Technology &amp; Infrastructure
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal leading-[1.12] max-w-4xl mx-auto text-balance">
            A Technology Company That Formulates Living Beauty.
          </h1>

          <p className="font-sans text-base text-[#4E4542] max-w-2xl mx-auto leading-relaxed font-light">
            Our innovation extends beyond the formula. Zoe Nude combines responsible packaging engineering with an app-first, cloud-managed automated retail network—removing unnecessary waste, storefronts, and shipping friction between product and skin.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about/tech/packaging"
              className="bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-6 py-3.5 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
            >
              <span>Explore Packaging</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/about/tech/distribution"
              className="bg-white hover:bg-[#FAF1E8] text-[#2B211E] border border-[#DFD2C7] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-6 py-3.5 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
            >
              <span>Explore Distribution</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Two Core Technology Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Pillar 01: Packaging Innovation */}
          <article className="bg-white rounded-2xl border border-[#EADED5] overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#F5ECE1]">
                <img
                  src={bambooPackagingImg}
                  alt="Zoe Nude Cosmetics refillable bamboo jars and compostable bamboo packaging tubs"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-sans text-[#55715E]">
                  <span>01. Sustainable Materials</span>
                  <span aria-hidden="true">·</span>
                  <span>Compostable Bamboo</span>
                </div>

                <h2 className="font-serif text-3xl text-[#2B211E] font-normal leading-tight text-balance">
                  Nude by Nature. Kind to Nature.
                </h2>

                <p className="font-sans text-sm text-[#4E4542] leading-relaxed font-light">
                  True to the meaning of Nude—natural, authentic, and uncomplicated—our packaging system eliminates excess cartons and single-use plastics in favor of refillable vessels and compostable bamboo packaging components.
                </p>

                <div className="pt-2 border-t border-[#F0E8DF] space-y-2 text-xs text-[#5C4D47]">
                  <div className="flex items-center space-x-2">
                    <Leaf size={14} className="text-[#55715E] shrink-0" />
                    <span>Compostable bamboo components certified to compostability standards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PackageCheck size={14} className="text-[#55715E] shrink-0" />
                    <span>Zero unnecessary outer sleeves, films, or excessive layers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8">
              <Link
                to="/about/tech/packaging"
                className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors group/link whitespace-nowrap shrink-0"
              >
                <span>Read Packaging Innovation</span>
                <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>

          {/* Pillar 02: Distribution Network */}
          <article className="bg-white rounded-2xl border border-[#EADED5] overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#F5ECE1]">
                <img
                  src={nfcDispenserImg}
                  alt="Zoe Nude minimalist architectural NFC automated cosmetics dispenser"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-sans text-[#85513f]">
                  <span>02. Retail Infrastructure</span>
                  <span aria-hidden="true">·</span>
                  <span>Cloud + App + NFC Dispenser</span>
                </div>

                <h2 className="font-serif text-3xl text-[#2B211E] font-normal leading-tight text-balance">
                  Beauty. Without the Baggage.
                </h2>

                <p className="font-sans text-sm text-[#4E4542] leading-relaxed font-light">
                  The app is the store. The machine is fulfillment. By moving software intelligence into the customer&rsquo;s smartphone and the Zoe Nude Cloud, we unlock 24/7 automated access without parcel shipping or traditional retail stores.
                </p>

                <div className="pt-2 border-t border-[#F0E8DF] space-y-2 text-xs text-[#5C4D47]">
                  <div className="flex items-center space-x-2">
                    <Smartphone size={14} className="text-[#85513f] shrink-0" />
                    <span>Customer&rsquo;s phone serves as store UI, payment terminal, and cloud bridge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cpu size={14} className="text-[#85513f] shrink-0" />
                    <span>Self-powered dispensers: solar, hand crank &amp; NFC energy harvesting</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8">
              <Link
                to="/about/tech/distribution"
                className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors group/link whitespace-nowrap shrink-0"
              >
                <span>Read Distribution Architecture</span>
                <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        </div>

        {/* Integrated Four-Layer Stack Overview */}
        <div className="mt-16 pt-14 border-t border-[#EADED5]">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#85513f] uppercase block">
              How the System Fits Together
            </span>
            <h2 className="font-serif text-3xl text-[#2B211E] font-normal text-balance">
              Four Integrated Layers From Lab to Skin
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF4EC] rounded-xl p-6 border border-[#EADED5] space-y-2">
              <div className="text-xs font-sans font-medium text-[#85513f]">01. Formulation</div>
              <h3 className="font-serif text-xl text-[#2B211E]">Clean Cosmetics</h3>
              <p className="text-xs text-[#5C4D47] leading-relaxed font-light">
                Bio-identical skincare-grade cosmetics formulated in Los Angeles and San Francisco without synthetic baggage.
              </p>
            </div>

            <div className="bg-[#FAF4EC] rounded-xl p-6 border border-[#EADED5] space-y-2">
              <div className="text-xs font-sans font-medium text-[#55715E]">02. Vessels</div>
              <h3 className="font-serif text-xl text-[#2B211E]">Bamboo Packaging</h3>
              <p className="text-xs text-[#5C4D47] leading-relaxed font-light">
                Refillable structures and compostable bamboo components built for a lighter environmental footprint.
              </p>
            </div>

            <div className="bg-[#FAF4EC] rounded-xl p-6 border border-[#EADED5] space-y-2">
              <div className="text-xs font-sans font-medium text-[#85513f]">03. Intelligence</div>
              <h3 className="font-serif text-xl text-[#2B211E]">Zoe App &amp; Cloud</h3>
              <p className="text-xs text-[#5C4D47] leading-relaxed font-light">
                <Cloud size={12} className="inline mr-1 text-[#85513f]" />
                Centralized catalog, diagnostics, single-use dispense authorization, and demand analytics.
              </p>
            </div>

            <div className="bg-[#FAF4EC] rounded-xl p-6 border border-[#EADED5] space-y-2">
              <div className="text-xs font-sans font-medium text-[#85513f]">04. Access</div>
              <h3 className="font-serif text-xl text-[#2B211E]">NFC Dispensers</h3>
              <p className="text-xs text-[#5C4D47] leading-relaxed font-light">
                Low-energy physical endpoints in hotels, campuses, gyms, and offices with zero storefront overhead.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
