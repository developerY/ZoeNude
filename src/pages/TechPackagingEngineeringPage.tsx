import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Cog,
  ShieldCheck,
  Droplets,
  Factory,
  FlaskConical,
  Scale,
  Check,
  ChevronDown,
  ChevronUp,
  Leaf,
  Recycle,
} from 'lucide-react';
import { TechSubNav } from '../components/TechSubNav';

export const TechPackagingEngineeringPage: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<'pha' | 'sulapac' | 'pla' | 'pulp'>('pha');
  const [selectedDrive, setSelectedDrive] = useState<'cam' | 'spindle' | 'slider'>('cam');
  const [selectedMfgStage, setSelectedMfgStage] = useState<'prototyping' | 'molding' | 'annealing'>('prototyping');
  const [showCitations, setShowCitations] = useState(false);

  const materialFamilies = {
    pha: {
      eyebrow: '01 · Microbial Bio-Polyesters',
      title: 'Polyhydroxyalkanoates (PHBV, P3HB, PHBHHx & P4HB)',
      summary:
        'Synthesized intracellularly via microbial fermentation of renewable plant sugars or lipids, PHAs deliver intrinsic resistance to anhydrous lip balms, complex esters, and oil-rich serums without softening, swelling, or plasticizer leaching.',
      highlights: [
        'Certified biodegradable across industrial compost, home compost, soil, and marine environments (TÜV OK Compost Home & Marine).',
        'Pure PHB homopolymer is highly crystalline and brittle for snap-fits; copolymerizing 3-hydroxybutyrate with 3-hydroxyvalerate (PHBV) or 3-hydroxyhexanoate (PHBHHx) tunes elasticity for living hinges, snap-fit lugs, and acoustic-click cam sleeves.',
        'Poly-4-hydroxybutyrate (P4HB) and 4HB/3HB copolymers provide true elastomeric compression-set recovery for hermetic jar gaskets and wiper seals—eliminating non-compostable silicone while preserving a mono-family PHA composition.',
      ],
    },
    sulapac: {
      eyebrow: '02 · Wood & Agricultural-Fiber Composites',
      title: 'Sulapac Injection-Molded Biocomposites',
      summary:
        'Compounding FSC-certified industrial wood side-streams or upcycled micronized camellia seed shells with biodegradable polyester binders (PLA, PHA, PBAT, PBS) yields ceramic-like acoustics, low mold shrinkage, and high dimensional stability.',
      highlights: [
        'Sulapac Luxe (IM1025.2NC) and Luxe Flex (IM1024.0NC / IM1024.0BP) replace petro-ABS in caps, compacts, and thin-walled lipstick barrels; Luxe Flex increases ductility tenfold and doubles Melt Flow Index for clean thread-core stripping.',
        'Sulapac Solid 2.0 & Premium (>85% USDA-certified biobased) replace Bakelite/thermodur resins; Solid 2.0 withstands dishwasher & microwave washing across reusable refill cycles with BPI industrial compostability and LOOPLA chemical recyclability.',
        'Sulapac Barrier (>85% biobased) resists hydrolytic swelling in direct contact with water-based emulsions across 12-week 40 °C accelerated aging (1-year retail shelf-life benchmark) and achieves marine biodegradation within 56 days (ISO 22403 / ASTM D6691).',
      ],
    },
    pla: {
      eyebrow: '03 · Fermented Plant Starches & Cork Hybrids',
      title: 'Nucleated Polylactic Acid (PLA) & 3D Cork Disassembly',
      summary:
        'Derived from fermented corn starch, maize, or sugarcane, neat PLA exhibits low heat deflection and strictly industrial compostability—so engineering practice pairs it with natural thermal insulators or mineral nucleation.',
      highlights: [
        'Unmodified PLA softens under elevated transit temperatures and cracks under threaded hoop stress, restricting neat grades to thin secondary frames, brush handles (HNB corn-fiber brushes), or protected assemblies.',
        'Cork-hybrid pressed compacts (3D Cork) bond a molded PLA structural pan base to a water-pigmented agglomerated cork lid with bio-based adhesives engineered for tool-free manual disassembly at end-of-life.',
        'Nucleating PLA with natural zeolite shifts crystal morphology toward the more stable α-phase, elevating tensile strength and improving dimensional stability under mechanical loads.',
      ],
    },
    pulp: {
      eyebrow: '04 · Agricultural By-Product Fiber Slurries',
      title: 'Dry-in-Mold Thermoformed Bamboo & Sugarcane Bagasse',
      summary:
        'To guarantee true backyard ambient compostability for disposable primary refills, rapidly regenerating bamboo pulp and sugarcane bagasse slurries are vacuum-preformed and hot-pressed into rigid paper-like sleeves and powder pans.',
      highlights: [
        'Zero forest clearing required: utilizes non-wood agricultural waste streams with a minimal embodied carbon footprint.',
        'Stripped of moving spirals, springs, and zamac hardware—commercialized in the Morrama / PPK Packaging Maya lipstick series and European deodorant refill sleeves.',
        'Disintegrates cleanly in ambient home compost bins (TÜV OK Compost HOME / AS 5810 / ISO 17427) within 6 to 12 months with zero persistent microplastic residue.',
      ],
    },
  };

  const materialComparisonRows = [
    {
      grade: 'Sulapac Luxe (IM1025.2NC)',
      feedstock: 'Wood flour + biodegradable biopolymers',
      mechanics: 'High stiffness & ceramic-like acoustic finish',
      component: 'Thick-walled fragrance caps, heavy outer lipstick sleeves',
      eol: 'Industrial Compostable (TÜV / BPI); LOOPLA Chemically Recyclable',
    },
    {
      grade: 'Sulapac Luxe Flex (IM1024.0NC / BP)',
      feedstock: 'USDA biobased wood flour + toughened biopolyesters',
      mechanics: '10× higher ductility than standard Luxe; doubled MFI for thin walls',
      component: 'Thin-walled lipstick barrels, threaded jar lids, compacts',
      eol: 'Industrial Compostable (TÜV Austria); Recyclable by design',
    },
    {
      grade: 'Sulapac Solid 2.0',
      feedstock: 'USDA biobased wood-biopolymer composite',
      mechanics: 'High impact Bakelite replacement; microwave & dishwasher safe',
      component: 'Washable reusable outer cosmetic tubs & durable vessels',
      eol: 'Industrial Compostable (BPI); LOOPLA Chemically Recyclable',
    },
    {
      grade: 'Sulapac Barrier',
      feedstock: 'USDA biobased moisture-resistant biopolymer blend',
      mechanics: 'Rigid; prevents hydrolytic emulsion weight loss over 12-week aging',
      component: 'Direct-contact inner refill cups for oil-in-water creams',
      eol: 'Industrial Compostable & Marine Biodegradable (56 d, ISO 22403 / ASTM D6691)',
    },
    {
      grade: 'Pure PHB Homopolymer',
      feedstock: 'Bio-fermented poly(3-hydroxybutyrate)',
      mechanics: 'High crystallinity & stiff modulus; low elongation at break',
      component: 'Rigidity modifier in blends (unsuitable alone for snap-fits)',
      eol: 'Home & Industrial Compostable; Marine & Soil Biodegradable',
    },
    {
      grade: 'PHBV / PHBHHx Copolymer',
      feedstock: 'Bio-fermented 3HB with 3HV or 3HHx monomers (e.g., 10.5 mol% 3HHx)',
      mechanics: 'Tunable modulus & ductile elongation for snap lugs & living hinges',
      component: 'High-precision lipstick twist mechanisms, elevator cups, hinges',
      eol: 'Home & Industrial Compostable (TÜV OK Compost Home / Marine)',
    },
    {
      grade: 'P4HB Elastomer',
      feedstock: 'Bio-fermented poly-4-hydroxybutyrate',
      mechanics: 'True elastomeric stretch & compression-set recovery',
      component: 'Hermetic jar closure gaskets, airless pistons, lipstick wiper seals',
      eol: 'Home & Industrial Compostable; Biocompatible / Resorbable',
    },
    {
      grade: 'Nucleated PLA',
      feedstock: 'Corn starch / sugarcane PLA + zeolite or TMC-328',
      mechanics: 'Stabilized α-crystalline morphology with elevated tensile strength',
      component: 'Secondary structural frames, brush handles, 3D Cork compacts',
      eol: 'Industrial Compostable Only (ASTM D6400 / EN 13432)',
    },
    {
      grade: 'Bamboo & Bagasse Pulp',
      feedstock: 'Alkali-treated bamboo & sugarcane bagasse slurry',
      mechanics: 'High specific stiffness after heated compression densification',
      component: 'Disposable primary lipstick refill sleeves & dry powder pans',
      eol: 'Home & Soil Compostable (TÜV OK Compost HOME / AS 5810 / ISO 17427)',
    },
  ];

  const driveArchitectures = {
    cam: {
      title: '01 · Mono-Material 3-Piece Cam-and-Spiral Swivel',
      summary:
        'Preserves the familiar luxury rotational twist gesture while molding the slotted inner body, helically grooved cam sleeve (A-shell), and central elevator cup (godet) from a single nucleated PHBV polymer family.',
      engineeringDetails: [
        'Dissimilar Surface Tribology: Prevents biopolymer galling or friction welding by applying a micro-matte EDM texture to the helical cam track while mirror-polishing the mating elevator lugs.',
        'Torque Stabilization: Bio-based fatty acid amide slip agents compounded directly into the PHBV masterbatch maintain smooth rotational drag from bottom-of-stroke to full extension.',
        'Acoustic Feedback: Tuned interference ribs inside the Sulapac Luxe cap produce a crisp snap closure without metal springs or zamac counterweights.',
      ],
    },
    spindle: {
      title: '02 · Two-Part Self-Threading Spindle Drive',
      summary:
        'Eliminates the thin-walled helical spiral sleeve entirely by integrating a stationary central screw spindle directly into the reusable twist base.',
      engineeringDetails: [
        'Hexagonal Anti-Rotation Keyway: A hexagonal cross-section refill barrel prevents bullet spin during actuation while improving case-pack shipping density.',
        'Direct Mechanical Threading: Rotating the twist base drives the internal spindle thread into the refill carrier with zero auxiliary pins, cams, or coil springs.',
        'Simplified Mold Tooling: Removes thin-section spiral undercuts that challenge semi-crystalline bioresin mold release.',
      ],
    },
    slider: {
      title: '03 · Linear Thumb-Slider Actuator',
      summary:
        'Replaces helical twist paths with straight axial travel—guiding a single PHA elevator shuttle along a clean axial track inside a Sulapac outer housing.',
      engineeringDetails: [
        'Humidity Drift Immunity: Semi-crystalline biopolymers can experience dimensional drift under high bathroom humidity; linear slots avoid tight radial helical clearances that risk binding.',
        'Tactile Top/Bottom Detents: Molded cantilever detents lock the lipstick bullet cleanly in deployed or retracted positions.',
        'Bottom-Loading Refill Path: Compatible with Toujours-style and Glide-style push-and-pull reload cartridges without straining thin pulp sleeves.',
      ],
    },
  };

  const barrierRows = [
    {
      chemistry: 'Carboxymethylated CNF + PVOH + Nanoclay',
      thickness: 'Thin hot-pressed multilayer coating',
      waterBarrier: '5–10× WVTR reduction via densified silicate tortuous path',
      oilBarrier: 'High oxygen & lipid holdout rivaling synthetic EVOH',
      application: 'Molded bamboo/bagasse lipstick sleeves & solid balm refills',
      compostImpact: 'Home & industrial compostable',
    },
    {
      chemistry: 'CNC-Stabilized AESO Pickering Emulsion / FAME Graft',
      thickness: 'Thin reactive dispersion coat on pulp',
      waterBarrier: 'Hydrophobic water contact angle & low Cobb absorption',
      oilBarrier: 'Maximum 12/12 Kit oil- and grease-resistance rating',
      application: 'Oil- and ester-rich anhydrous lipsticks, salves, solid sticks',
      compostImpact: 'Bio-derived, surfactant-free & PFAS-free',
    },
    {
      chemistry: 'CNF + Xylan + Chitosan Polysaccharide Barrier',
      thickness: 'Multilayer filtration or spray coat',
      waterBarrier: 'Ionic crosslinking between chitosan amino & CNF carboxyl groups',
      oilBarrier: 'Chitosan acetyl groups repel liquid emulsions & lipids',
      application: 'Humid bathroom refills & pressed powder compacts without PVOH',
      compostImpact: '100% polysaccharide; home compostable',
    },
    {
      chemistry: 'Polyglycolic Acid (PGA) Liner / Coating',
      thickness: 'Thin co-extruded or dispersion film',
      waterBarrier: 'Orders of magnitude tighter moisture barrier than PBS or PCL/PEG',
      oilBarrier: 'Dense methyl-free crystalline gas & aroma lock',
      application: 'High-water emulsions, serums, and volatile skincare creams',
      compostImpact: 'Rapidly hydrolyzes in industrial/home compost',
    },
    {
      chemistry: 'PLA / Cerium-Grafted CNF Composite',
      thickness: 'Solvent or dispersion coat on paperboard/pulp',
      waterBarrier: 'Improved moisture holdout vs uncoated fiber substrates',
      oilBarrier: 'Moderate gas and cosmetic oil resistance',
      application: 'Dry setting powders, blush pans, and secondary cartons',
      compostImpact: 'Industrial compostable',
    },
    {
      chemistry: 'Sulapac Barrier (Injection-Molded Wall)',
      thickness: 'Monolithic injection-molded inner pod wall',
      waterBarrier: 'Resists swelling over 12 weeks at 40 °C (1-yr shelf-life test)',
      oilBarrier: 'Inherent biopolyester lipid & emulsion holdout',
      application: 'Rigid snap-in jar refill cups for oil-in-water creams',
      compostImpact: 'Industrial compostable & marine biodegradable (56 d)',
    },
    {
      chemistry: 'RF-PECVD Organosilicon / SiOₓ / pH-Cap Trilayer',
      thickness: 'Nanometer-scale plasma vapor stack',
      waterBarrier: 'Near-zero permeation (glass-equivalent barrier)',
      oilBarrier: 'Near-zero OTR; blocks container leachables & fragrance scalping',
      application: 'Retinoids, antioxidants, fragrances, high-water AquaStick sticks',
      compostImpact: 'Nanoscale thickness preserves host compostability',
    },
  ];

  const mfgStages = {
    prototyping: {
      title: 'Cold-Quench FDM PHA Prototyping & Platinum-Cure Silicone Tooling',
      lead: 'Before cutting hardened multi-cavity steel molds, functional snap-fit retention, thread torque, and cam clearances are validated using 100% PHA 3D printing filaments (such as colorFabb allPHA).',
      bullets: [
        'Invert ABS/PLA Thermal Protocols: Heating the build plate induces rapid spherulitic crystallization and severe bottom-layer warping because PHA’s glass transition temperature lies near room ambient.',
        'Unheated Cold-Quench Printing: Run an unheated textured or smooth PEI bed prepared with 3DLac/PVA, wide anchoring brims, conservative volumetric speeds, inner-hidden Arachne wall seams, and 100% cooling fan from layer 2 onward.',
        'Silicone Master Casting: Pour platinum-cure silicone molds around 3D-printed master patterns with mold-release treatment for ergonomic focus groups and small-series direct hot-pouring of solid lipstick bullets.',
      ],
    },
    molding: {
      title: 'Industrial Multi-Cavity Injection Molding & Moisture Control',
      lead: 'Scaling seamlessly into valve-gated hot-runner lines (Cromes tooling / Oerlikon HRSflow) requires strict dehumidifying drying and sub-scorch thermal ceilings to prevent hydrolytic chain scission.',
      bullets: [
        'Aggressive Pre-Drying: Dry Sulapac Luxe/Flex granules in dehumidifying or vacuum dryers prior to processing; dry neat PHBHHx/PHBV copolymers via desiccant or circulating hot air.',
        'Masterbatch Feed Throat Cooling: Cool dried Sulapac granules before dosing biodegradable-carrier color masterbatches (PLA/PHA/PBAT/PBS) so carrier pellets never soften and bridge inside the feed throat.',
        'Thermal Ceiling & Purging: Enforce strict nozzle/hot-runner temperature limits to prevent wood-fiber scorching or PHA thermal collapse, minimize barrel dwell time, and purge with PE or PP during stoppages and shutdowns.',
      ],
    },
    annealing: {
      title: 'Eliminating Post-Mold Shrinkage & Dry-in-Mold Pulp Forming',
      lead: 'Un-nucleated PHA parts quenched in cold molds undergo 14–28 days of slow warehouse secondary crystallization—causing modulus climb, volumetric shrinkage, and jammed swivel tracks.',
      bullets: [
        'Heterogeneous Nucleation: Compound PHBV/P3HB with Boron Nitride (BN), TMC-328, EBH/EBS, or zinc phenylphosphonate (PPZn) rather than talc—preserving year-long non-isothermal stability without talc-fiber interfacial weakening.',
        'Warm Mold + Inline Annealing: Keep mold tooling heated rather than chilled, maintain holding pressure through gate freeze, and route ejected parts through an inline thermal annealing oven to reach plateau crystallinity before automated assembly.',
        'Automated Pulp Thermoforming & Eco-Decoration: Pretreat bamboo/bagasse pulp (alkali + sodium chlorite), vacuum-preform onto porous dies, hot-press in heated compression molds, spray internal barriers, and finish exteriors with polished/matte mold contrast, marbled masterbatch (FaiveleyTech / Dix Hectares), and soy/algae inks.',
      ],
    },
  };

  const injectionRows = [
    {
      param: 'Pre-Drying Protocol',
      sulapac: 'Dehumidifying or vacuum drying to strict low-moisture threshold',
      phbv: 'Desiccant drying to ultra-low residual moisture',
      phbhhx: 'Circulating hot-air drying prior to melt plastication',
    },
    {
      param: 'Feed Throat Control',
      sulapac: 'Cool base granules prior to dosing biodegradable color masterbatch',
      phbv: 'Controlled Zone 1 initial softening to avoid bridging',
      phbhhx: 'Ambient water-cooled feed throat',
    },
    {
      param: 'Barrel Thermal Profile',
      sulapac: 'Controlled ramp across feed, compression & metering zones',
      phbv: 'Balanced Zones 2–5 melt temperature window',
      phbhhx: 'Low-shear profile avoiding degradation vs cold-mold freeze-off',
    },
    {
      param: 'Nozzle & Hot Runner',
      sulapac: 'Strict ceiling below wood-fiber scorch threshold',
      phbv: 'Stable valve-gated hot-runner temperature with minimum dwell',
      phbhhx: 'Monitored melt ceiling; purge with PE/PP before shutdown',
    },
    {
      param: 'Mold Tooling State',
      sulapac: 'Temperature-controlled tool cavities with modified knuckle threads',
      phbv: 'Warm mold tooling (never chilled) for rapid in-mold crystallization',
      phbhhx: 'Balanced warm mold matched to melt temperature',
    },
    {
      param: 'Shrinkage & Conditioning',
      sulapac: 'Low wood-composite shrinkage; purge unit with PE/PP at shutdown',
      phbv: 'Stabilized via Boron Nitride nucleation + inline thermal annealing',
      phbhhx: 'Condition or inline anneal immediately after ejection',
    },
  ];

  const citations = [
    'Packaging Europe — Can molded pulp finally challenge plastic? (packagingeurope.com)',
    'Achieve Pack — Certified Compostable Packaging & California AB 1201 Compliance (achievepack.com)',
    'Intertek — Compostable Certification Program: ASTM D6400 / EN 13432 / ISO 17088 (intertek.com)',
    'Sulapac — Sustainable Materials Portfolio & Material Comparison Chart (sulapac.com)',
    'PPK Packaging & Harry Mason Design — Maya Refillable Bamboo-Bagasse System (ppkpackaging.com)',
    'Sales Plastics — PHA: Next-Gen Sustainable Cosmetic Packaging (salesplastics.com)',
    'Patents — US6548569B1 (P4HB / PHA Applications) & US20220169430A1 (RF-PECVD Silica Trilayer Compostable Vessels)',
    'PatSnap Eureka — Nanocellulose Packaging & Barrier Film Strategies (eureka.patsnap.com)',
    'ResearchGate / MDPI — CNC-AESO Pickering Emulsions & Plasma Deposition Barrier Performance',
    'colorFabb — allPHA Thermal & Cold-Quench Filament Processing Data (colorfabb.com)',
  ];

  const currentFamily = materialFamilies[selectedFamily];
  const currentDrive = driveArchitectures[selectedDrive];
  const currentMfg = mfgStages[selectedMfgStage];

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      <TechSubNav active="packaging-engineering" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F7F5EE] via-[#FAF7F1] to-[#F3F5EC] py-16 sm:py-20 border-b border-[#EADED5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <Link
              to="/about/tech/packaging"
              className="inline-flex items-center space-x-2 text-xs font-sans font-medium text-[#55715E] hover:text-[#2B211E] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Packaging Innovation Overview</span>
            </Link>

            <div className="space-y-2">
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#55715E] uppercase block">
                Zoe · Nude Cosmetics · Materials &amp; Manufacturing Monograph
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal leading-[1.08] text-balance">
                Engineering Biocompostable &amp; Reusable Cosmetic Packaging
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-[#85513f]">
                Resolving the Reusability–Compostability Paradox via Split-Lifecycle Architecture
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#4E4542] leading-relaxed font-light max-w-3xl">
              Manufacturing a lipstick tube or cosmetic container that is simultaneously multi-year reusable and backyard biocompostable creates a fundamental thermodynamic contradiction: polymers engineered to cleave rapidly in ambient soil lack the hydrolytic stability, creep resistance, and lipid holdout needed for repeated actuation—while thick, dishwasher-safe biocomposites will not disintegrate in low-temperature home compost bins.
            </p>
          </div>

          {/* Split-Lifecycle Dual Assembly Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-2xl border border-[#DFD6CB] p-7 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#85513f]">
                  Assembly 01 · Permanent Hardware
                </span>
                <Recycle size={18} className="text-[#85513f]" />
              </div>
              <h2 className="font-serif text-2xl text-[#2B211E] font-normal">
                Reusable Outer Casing &amp; Actuation Mechanism
              </h2>
              <p className="text-sm text-[#4E4542] leading-relaxed font-light">
                Isolates 100% of mechanical complexity, torque-bearing threads, cantilevered snap-fit undercuts, and drop impact resistance inside a multi-year shell retained by the customer.
              </p>
              <ul className="space-y-2 pt-2 border-t border-[#F0E8DF] text-xs text-[#5C4D47]">
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#85513f] mt-0.5 shrink-0" />
                  <span>Injection-molded in wood-biopolymer composites (Sulapac Luxe Flex / Solid 2.0) or nucleated PHA copolymers matching ABS/PP precision.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#85513f] mt-0.5 shrink-0" />
                  <span>Certified for industrial composting (ASTM D6400 / EN 13432) or LOOPLA chemical depolymerization at end of multi-year service life.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#DFD6CB] p-7 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#55715E]">
                  Assembly 02 · Consumable Insert
                </span>
                <Leaf size={18} className="text-[#55715E]" />
              </div>
              <h2 className="font-serif text-2xl text-[#2B211E] font-normal">
                Ultra-Lightweight Home-Compostable Refill Cartridge
              </h2>
              <p className="text-sm text-[#4E4542] leading-relaxed font-light">
                Stripped of all moving spirals, pins, or hinges—manufactured strictly as a thin-walled primary vessel housing the cosmetic bulk with a bio-derived barrier lining.
              </p>
              <ul className="space-y-2 pt-2 border-t border-[#F0E8DF] text-xs text-[#5C4D47]">
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#55715E] mt-0.5 shrink-0" />
                  <span>Dry-in-mold thermoformed from bamboo and sugarcane bagasse agricultural pulp (Morrama / PPK Maya architecture) or thin-walled PHA / Sulapac Barrier.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#55715E] mt-0.5 shrink-0" />
                  <span>Certified for ambient home composting (TÜV OK Compost HOME / ISO 17427 / AS 5810), returning to fertile soil within 6 to 12 months.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Biopolymer & Biocomposite Material Selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#55715E] uppercase block">
            Material Science
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
            Four Complementary Biopolymer &amp; Biocomposite Families
          </h2>
          <p className="text-sm text-[#4E4542] leading-relaxed font-light">
            Selecting each polymer matrix requires balancing melt rheology, crystallinity, heat deflection temperature, and emulsion compatibility—replacing neat PLA weaknesses with specialized structural grades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            {(
              [
                { id: 'pha', label: '01. Polyhydroxyalkanoates (PHBV, PHBHHx, P4HB)' },
                { id: 'sulapac', label: '02. Wood-Fiber Composites (Sulapac Portfolio)' },
                { id: 'pla', label: '03. Nucleated PLA & 3D Cork Hybrids' },
                { id: 'pulp', label: '04. Molded Bamboo & Bagasse Pulp' },
              ] as const
            ).map((item) => {
              const isActive = selectedFamily === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedFamily(item.id)}
                  className={`text-left px-4 py-3.5 rounded-xl border text-xs font-sans font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#2B211E] text-[#FCF9F3] border-[#2B211E]'
                      : 'bg-white text-[#4E4542] border-[#E4DDD4] hover:border-[#85513f] hover:text-[#2B211E]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EADED5] p-8 space-y-5">
            <div className="space-y-1.5 border-b border-[#F0E8DF] pb-4">
              <div className="flex items-center space-x-2 text-xs font-sans text-[#55715E]">
                <FlaskConical size={15} />
                <span>{currentFamily.eyebrow}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E] font-normal">
                {currentFamily.title}
              </h3>
              <p className="text-sm text-[#4E4542] leading-relaxed font-light pt-1">
                {currentFamily.summary}
              </p>
            </div>

            <ul className="space-y-3">
              {currentFamily.highlights.map((point) => (
                <li key={point} className="flex items-start space-x-3 text-sm text-[#2B211E]">
                  <Check size={16} className="text-[#55715E] mt-0.5 shrink-0" />
                  <span className="leading-relaxed font-light">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Material Grade Comparison Matrix */}
        <div className="bg-white rounded-2xl border border-[#EADED5] overflow-hidden shadow-2xs">
          <div className="px-6 py-4 bg-[#FAF4EC] border-b border-[#EADED5] flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-serif text-xl text-[#2B211E] font-normal">
              Biocompostable Material Grade Specification Matrix
            </h3>
            <span className="text-[11px] font-sans text-[#6E625D]">
              Structural, elastomeric &amp; barrier profiles by component duty cycle
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="border-b border-[#EADED5] bg-[#FCF9F3] text-[#5C4D47] uppercase tracking-wider text-[10px]">
                  <th className="py-3.5 px-5 font-semibold">Material Grade</th>
                  <th className="py-3.5 px-5 font-semibold">Feedstock &amp; Composition</th>
                  <th className="py-3.5 px-5 font-semibold">Mechanical Behavior</th>
                  <th className="py-3.5 px-5 font-semibold">Target Component</th>
                  <th className="py-3.5 px-5 font-semibold">End-of-Life Pathway</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0E8DF]">
                {materialComparisonRows.map((row) => (
                  <tr key={row.grade} className="hover:bg-[#FAF6F0]/70 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-[#2B211E] whitespace-nowrap">
                      {row.grade}
                    </td>
                    <td className="py-3.5 px-5 text-[#4E4542] font-light">{row.feedstock}</td>
                    <td className="py-3.5 px-5 text-[#4E4542] font-light">{row.mechanics}</td>
                    <td className="py-3.5 px-5 text-[#2B211E]">{row.component}</td>
                    <td className="py-3.5 px-5 text-[#55715E] font-medium">{row.eol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Mechanical Engineering & Structural Design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#85513f] uppercase block">
            Mechanical Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
            Mono-Material Drive Kinematics, Refill Locks &amp; Double-Walled Jars
          </h2>
          <p className="text-sm text-[#4E4542] leading-relaxed font-light">
            Conventional lipsticks rely on mixed petro-plastics (POM spirals against ABS cams and PP cups) plus metal weights that prevent composting. Zoe’s mechanical architectures keep identical or mono-family biopolymers smoothly moving without galling.
          </p>
        </div>

        {/* Interactive 3-Drive Switcher */}
        <div className="bg-white rounded-2xl border border-[#EADED5] p-6 sm:p-8 mb-10">
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#F0E8DF]">
            {(
              [
                { id: 'cam', label: '01 · 3-Piece Cam & Spiral' },
                { id: 'spindle', label: '02 · 2-Part Self-Threading Spindle' },
                { id: 'slider', label: '03 · Linear Thumb-Slider' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedDrive(tab.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-sans font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedDrive === tab.id
                    ? 'bg-[#2B211E] text-[#FCF9F3]'
                    : 'bg-[#FAF4EC] text-[#4E4542] hover:text-[#2B211E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-[#85513f] font-medium">
              <Cog size={15} />
              <span>Lipstick Actuation Architecture</span>
            </div>
            <h3 className="font-serif text-2xl text-[#2B211E] font-normal">{currentDrive.title}</h3>
            <p className="text-sm text-[#4E4542] leading-relaxed font-light max-w-3xl">
              {currentDrive.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {currentDrive.engineeringDetails.map((detail) => (
                <div
                  key={detail}
                  className="bg-[#FAF6F0] rounded-xl p-4 border border-[#EAE0D5] text-xs text-[#4E4542] leading-relaxed font-light"
                >
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two-column engineering cards: Refill Retention vs Double-Walled Jar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#FAF4EC] rounded-2xl border border-[#EADED5] p-8 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#85513f]">
              <Layers size={15} />
              <span>Refill Locking Interface &amp; Torque Control</span>
            </div>
            <h3 className="font-serif text-2xl text-[#2B211E] font-normal">
              Tiered Axial Retention Prevents Accidental Pull-Out
            </h3>
            <p className="text-sm text-[#4E4542] leading-relaxed font-light">
              Inside Maya-style bamboo-bagasse refill cartridges, a removable pulp hood shields the bullet during transit while the base engages cantilevered PHA annular snap lugs or a two-lug bayonet mount.
            </p>
            <ul className="space-y-2.5 text-xs text-[#2B211E] pt-2 border-t border-[#E4D8CC]">
              <li className="flex items-start space-x-2.5">
                <Check size={14} className="text-[#85513f] mt-0.5 shrink-0" />
                <span>
                  <strong>&gt;2× Retention Ratio:</strong> Cartridge extraction force is engineered at over double the Sulapac Luxe cap interference pull-off click—so daily uncapping never dislodges the refill.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check size={14} className="text-[#85513f] mt-0.5 shrink-0" />
                <span>
                  <strong>Motorized Torque Validation:</strong> Twist barrels are verified on automated torque testers (e.g., Mecmesin Vortex-xt) to confirm spike-free helical travel free of mold flash.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF4EC] rounded-2xl border border-[#EADED5] p-8 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#55715E]">
              <ShieldCheck size={15} />
              <span>Reusable Tub &amp; Jar Engineering</span>
            </div>
            <h3 className="font-serif text-2xl text-[#2B211E] font-normal">
              GPI 53-400 Modified Knuckle Threads &amp; Hermetic Bio-Seals
            </h3>
            <p className="text-sm text-[#4E4542] leading-relaxed font-light">
              Skincare jars use a four-part double-walled pod system: washable outer vessel (Sulapac Solid 2.0 / Premium), threaded lid (Luxe Flex), snap-in refill cup (Sulapac Barrier or coated bagasse pulp), and zero-plastic seal.
            </p>
            <ul className="space-y-2.5 text-xs text-[#2B211E] pt-2 border-t border-[#E4D8CC]">
              <li className="flex items-start space-x-2.5">
                <Check size={14} className="text-[#55715E] mt-0.5 shrink-0" />
                <span>
                  <strong>Anti-Notch Thread Profile:</strong> Standard sharp V-threads are replaced with modified buttress or rounded-knuckle GPI 53-400 profiles to distribute clamping loads and prevent wood-composite cracking.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check size={14} className="text-[#55715E] mt-0.5 shrink-0" />
                <span>
                  <strong>Zero-PE Cap Liners:</strong> Uses either an overmolded / press-fitted <strong>P4HB elastomeric gasket</strong> compressed against the refill rim or a precision <strong>Sulapac friction plug seal</strong> with integrated spatula.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Barrier Coating Engineering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-sans font-medium tracking-[0.16em] text-[#55715E] uppercase">
            <Droplets size={14} />
            <span>Formula Compatibility</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
            PFAS-Free &amp; PE-Free Barrier Chemistry (12–36 Month Shelf Life)
          </h2>
          <p className="text-sm text-[#4E4542] leading-relaxed font-light">
            Uncoated pulp wicks castor oil and esters out of lipsticks and softens in humid bathrooms, while water-in-oil emulsions phase-separate if water mass escapes. Three biocompostable barrier platforms lock formulas inside without fluorochemicals or polyethylene laminations.
          </p>
        </div>

        {/* 3 Barrier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl border border-[#EADED5] p-6 space-y-3">
            <span className="text-xs font-mono text-[#55715E] font-semibold">01 · Nanocellulose Lattices</span>
            <h3 className="font-serif text-xl text-[#2B211E] font-normal">
              TEMPO-CNF, Chitosan &amp; CNC-AESO Pickering Emulsions
            </h3>
            <p className="text-xs text-[#4E4542] leading-relaxed font-light">
              High-pressure homogenized cellulose nanofibrils paired with PVOH + silicate nanoclay, ionic CNF/Xylan/Chitosan complexes, or CNC-stabilized Acrylated Epoxidized Soybean Oil deliver top-rated oil resistance (Kit 12/12) and hot-pressed density.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#EADED5] p-6 space-y-3">
            <span className="text-xs font-mono text-[#55715E] font-semibold">02 · High-Barrier Polyesters</span>
            <h3 className="font-serif text-xl text-[#2B211E] font-normal">
              Polyglycolic Acid (PGA) &amp; Sulapac Barrier Pods
            </h3>
            <p className="text-xs text-[#4E4542] leading-relaxed font-light">
              PGA lacks PLA’s methyl side group, packing into an ultra-dense crystalline lattice with tight gas and moisture holdout—while injection-molded Sulapac Barrier cups protect aqueous creams without secondary liner steps.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#EADED5] p-6 space-y-3">
            <span className="text-xs font-mono text-[#85513f] font-semibold">03 · Atomic-Scale Vapor Stack</span>
            <h3 className="font-serif text-xl text-[#2B211E] font-normal">
              RF-PECVD Organosilicon / SiO₂ Trilayer
            </h3>
            <p className="text-xs text-[#4E4542] leading-relaxed font-light">
              Rotating RF-PECVD deposits a flexible organosilicon buffer (absorbing snap-fit flex stress), a dense inorganic silica barrier, and a pH-protective carbon cap—blocking retinoid oxidation and fragrance scalping at nanometer thickness that preserves host compostability.
            </p>
          </div>
        </div>

        {/* Barrier Matrix Table */}
        <div className="bg-white rounded-2xl border border-[#EADED5] overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="border-b border-[#EADED5] bg-[#FAF4EC] text-[#5C4D47] uppercase tracking-wider text-[10px]">
                  <th className="py-3.5 px-5 font-semibold">Barrier Technology</th>
                  <th className="py-3.5 px-5 font-semibold">Water Vapor Performance</th>
                  <th className="py-3.5 px-5 font-semibold">Oxygen &amp; Lipid Holdout</th>
                  <th className="py-3.5 px-5 font-semibold">Optimal Application</th>
                  <th className="py-3.5 px-5 font-semibold">Compostability Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0E8DF]">
                {barrierRows.map((row) => (
                  <tr key={row.chemistry} className="hover:bg-[#FAF6F0]/70 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-[#2B211E]">{row.chemistry}</td>
                    <td className="py-3.5 px-5 text-[#4E4542] font-light">{row.waterBarrier}</td>
                    <td className="py-3.5 px-5 text-[#4E4542] font-light">{row.oilBarrier}</td>
                    <td className="py-3.5 px-5 text-[#2B211E]">{row.application}</td>
                    <td className="py-3.5 px-5 text-[#55715E] font-medium">{row.compostImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: End-to-End Manufacturing Execution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-sans font-medium tracking-[0.16em] text-[#85513f] uppercase">
            <Factory size={14} />
            <span>Manufacturing Execution</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
            From Cold-Quench Prototyping to High-Cavitation Production
          </h2>
          <p className="text-sm text-[#4E4542] leading-relaxed font-light">
            Unlike petrochemical ABS or PP, biopolyesters require specialized thermal discipline across 3D validation, desiccant drying, warm-mold injection, and inline annealing to stop post-mold warpage.
          </p>
        </div>

        {/* Stage Switcher */}
        <div className="bg-white rounded-2xl border border-[#EADED5] p-6 sm:p-8 mb-10">
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#F0E8DF]">
            {(
              [
                { id: 'prototyping', label: 'Stage 01 · Cold-Quench PHA Prototyping' },
                { id: 'molding', label: 'Stage 02 · Injection Molding & Drying' },
                { id: 'annealing', label: 'Stage 03 · Nucleation, Annealing & Pulp Thermoforming' },
              ] as const
            ).map((stage) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedMfgStage(stage.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-sans font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedMfgStage === stage.id
                    ? 'bg-[#2B211E] text-[#FCF9F3]'
                    : 'bg-[#FAF4EC] text-[#4E4542] hover:text-[#2B211E]'
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            <h3 className="font-serif text-2xl text-[#2B211E] font-normal">{currentMfg.title}</h3>
            <p className="text-sm text-[#4E4542] leading-relaxed font-light max-w-3xl">
              {currentMfg.lead}
            </p>
            <ul className="space-y-3 pt-2">
              {currentMfg.bullets.map((b) => (
                <li key={b} className="flex items-start space-x-3 text-sm text-[#2B211E]">
                  <Check size={16} className="text-[#85513f] mt-0.5 shrink-0" />
                  <span className="leading-relaxed font-light">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Injection Molding Process Table */}
        <div className="bg-white rounded-2xl border border-[#EADED5] overflow-hidden shadow-2xs">
          <div className="px-6 py-4 bg-[#FAF4EC] border-b border-[#EADED5] flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-serif text-xl text-[#2B211E] font-normal">
              Industrial Injection Molding Protocol by Biopolymer Family
            </h3>
            <span className="text-[11px] font-sans text-[#6E625D]">
              Cromes tooling · Oerlikon HRSflow valve-gated hot runners
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="border-b border-[#EADED5] bg-[#FCF9F3] text-[#5C4D47] uppercase tracking-wider text-[10px]">
                  <th className="py-3.5 px-5 font-semibold">Process Parameter</th>
                  <th className="py-3.5 px-5 font-semibold">Sulapac Luxe &amp; Luxe Flex (IM1025 / IM1024)</th>
                  <th className="py-3.5 px-5 font-semibold">P3HB / Nucleated PHBV (Lipstick Mechanism)</th>
                  <th className="py-3.5 px-5 font-semibold">PHBHHx (Aonilex X151A · 10.5 mol% 3HHx)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0E8DF]">
                {injectionRows.map((row) => (
                  <tr key={row.param} className="hover:bg-[#FAF6F0]/70 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-[#2B211E] whitespace-nowrap">
                      {row.param}
                    </td>
                    <td className="py-3.5 px-5 text-[#4E4542] font-light">{row.sulapac}</td>
                    <td className="py-3.5 px-5 text-[#4E4542] font-light">{row.phbv}</td>
                    <td className="py-3.5 px-5 text-[#4E4542] font-light">{row.phbhhx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Certification, Regulatory Compliance & Warehouse Stability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-sans font-medium tracking-[0.16em] text-[#55715E] uppercase">
            <Scale size={14} />
            <span>Regulatory &amp; Supply Chain</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
            Dual Certification Stack, Labeling Law &amp; FIFO Stability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#2B211E] text-[#FCF9F3] rounded-2xl p-7 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#d8a48f] block">
              Statutory Labeling Rules
            </span>
            <h3 className="font-serif text-2xl font-normal">
              California AB 1201, Washington &amp; Colorado
            </h3>
            <p className="text-xs text-[#D7CCC6] leading-relaxed font-light">
              Printing unqualified &ldquo;biodegradable&rdquo; claims on packaging is prohibited. Components certified solely for commercial facilities carry explicit <em>Commercially Compostable Only</em> markings, while marine or landfill ASTM test references note regional exclusions clearly.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#EADED5] p-7 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#55715E] block">
              ISO 17025 Third-Party Labs
            </span>
            <h3 className="font-serif text-2xl text-[#2B211E] font-normal">
              Industrial + Home Compost Dual Stack
            </h3>
            <p className="text-xs text-[#4E4542] leading-relaxed font-light">
              Reusable outer assemblies and PHA mechanisms verify under <strong>ASTM D6400 / EN 13432 / ISO 17088</strong> (90–180 days commercial breakdown), while refill pulp cartridges certify under <strong>TÜV OK Compost HOME / AS 5810 / ISO 17427</strong> (6–12 months ambient soil breakdown).
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#EADED5] p-7 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#85513f] block">
              Warehouse Shelf Discipline
            </span>
            <h3 className="font-serif text-2xl text-[#2B211E] font-normal">
              FIFO Control &amp; Climate-Controlled Storage
            </h3>
            <p className="text-xs text-[#4E4542] leading-relaxed font-light">
              Unfilled PHA parts carry a 10–12 month pre-use window (9–18 months for PLA; 6–12 months for PBAT/starch). Components ship inside moisture-barrier master carton liners, store in dark climate-controlled facilities under strict FIFO rotation, and pass 12-week accelerated formulation stability prior to release.
            </p>
          </div>
        </div>

        {/* Collapsible Technical References */}
        <div className="bg-[#FAF4EC] rounded-2xl border border-[#EADED5] p-6">
          <button
            type="button"
            onClick={() => setShowCitations(!showCitations)}
            className="w-full flex items-center justify-between text-left cursor-pointer"
          >
            <div>
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#2B211E] block">
                Primary Technical Sources &amp; Standards Referenced
              </span>
              <span className="text-xs text-[#6E625D] font-light">
                Peer-reviewed barrier research, ISO/ASTM standards &amp; biopolymer technical datasheets
              </span>
            </div>
            <span className="p-2 rounded-full bg-white border border-[#E4DDD4] text-[#2B211E]">
              {showCitations ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>

          {showCitations && (
            <ol className="mt-5 pt-5 border-t border-[#E4D8CC] space-y-2 text-xs text-[#4E4542] font-light list-decimal list-inside">
              {citations.map((cite) => (
                <li key={cite} className="leading-relaxed">
                  {cite}
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#EADED5]">
          <Link
            to="/about/tech/packaging"
            className="bg-white hover:bg-[#FAF1E8] text-[#2B211E] border border-[#DFD2C7] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-6 py-3.5 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
          >
            <ArrowLeft size={14} />
            <span>Back to Packaging Overview</span>
          </Link>

          <Link
            to="/about/tech/distribution"
            className="bg-[#2B211E] hover:bg-[#433430] text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-6 py-3.5 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
          >
            <span>Next: Distribution Architecture</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};
