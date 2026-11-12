import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cloud,
  Smartphone,
  Cpu,
  Sun,
  Zap,
  ShieldCheck,
  Database,
  Building2,
  Check,
} from 'lucide-react';
import { TechSubNav } from '../components/TechSubNav';
import nfcDispenserImg from '../assets/images/nfc_beauty_dispenser_1794515736580.jpg';
import mobileDispenseImg from '../assets/images/zoe_mobile_dispense_1794515736779.jpg';

export const TechDistributionPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [powerMode, setPowerMode] = useState<'nfc' | 'solar'>('nfc');
  const [activeArchLayer, setActiveArchLayer] = useState<'cloud' | 'phone' | 'dispenser'>('cloud');

  const purchaseSteps = [
    {
      num: '01',
      title: 'Identify',
      actor: "Customer's Phone",
      summary:
        'Customer opens Zoe Nude and scans a QR code or taps an NFC point on the machine. The printed QR code identifies the machine ID—never authorizing dispensing by itself.',
    },
    {
      num: '02',
      title: 'Discover',
      actor: 'Phone ↔ Zoe Nude Cloud',
      summary:
        "The app identifies the machine and retrieves its live available products, shade matrix, pricing, and inventory from the Zoe Nude Cloud.",
    },
    {
      num: '03',
      title: 'Purchase',
      actor: "Customer's Phone",
      summary:
        'Customer browses ingredients, selects their match, and initiates payment directly inside the app—zero physical pinpads or machine touchscreens needed.',
    },
    {
      num: '04',
      title: 'Authorize',
      actor: 'Zoe Nude Cloud → Phone',
      summary:
        'The cloud generates a unique, cryptographically bound single-use expiring authorization tied strictly to that specific machine, SKU, and transaction.',
    },
    {
      num: '05',
      title: 'Dispense',
      actor: 'Phone → Simple Dispenser',
      summary:
        'The phone passes the local authorization via NFC proximity. In passive designs, the smartphone NFC field also supplies the micro-energy to trip a mechanical release.',
    },
    {
      num: '06',
      title: 'Report',
      actor: 'Dispenser → Phone → Cloud',
      summary:
        'The dispenser confirms physical release back to the phone, which acts as the network bridge to report completion to the cloud before final payment capture.',
    },
    {
      num: '07',
      title: 'Update',
      actor: 'Zoe Nude Cloud',
      summary:
        'Cloud inventory decrements in real time while sales history, loyalty credits, and replenishment alerts update automatically.',
    },
  ];

  const archDetails = {
    cloud: {
      title: 'Zoe Nude Cloud',
      role: 'The Central Brain',
      description:
        'All central software intelligence resides in the cloud—preventing software duplication across thousands of hardware cabinets.',
      responsibilities: [
        'Centralized product catalog, shade intelligence, and dynamic pricing',
        'Single-use expiring cryptographic dispense authorization',
        'Real-time inventory tracking, sales analytics, and replenishment forecasting',
        'Direct customer loyalty records and personalized shade history',
      ],
    },
    phone: {
      title: "Customer's Phone",
      role: 'The Smart Terminal & Network Bridge',
      description:
        'Every visitor already carries an advanced high-resolution screen, biometric wallet, and high-speed cellular connection.',
      responsibilities: [
        'Rich product discovery, ingredient inspection, and shade selection UI',
        'Secure in-app checkout and biometric payment processing',
        'Machine identification via QR scan or NFC tap',
        'Network bridge relaying encrypted dispense confirmations to the cloud—eliminating cellular modems in the machine',
      ],
    },
    dispenser: {
      title: 'Simple Dispenser',
      role: 'The Physical Endpoint',
      description:
        'Stripped down to essential mechanics: secure product storage, reliable release latch, minimal NFC electronics, and dispensing confirmation.',
      responsibilities: [
        'No touchscreen display, pinpad, cellular modem, Wi-Fi radio, or onboard computer',
        'Low-energy mechanical release (spring-loaded latch and gravity-fed dispensing)',
        'Standardized, compact footprint installable where full storefronts cannot operate',
        'Confirmed product release reporting before final transaction capture',
      ],
    },
  };

  const telemetryRows = [
    { data: 'Machine ID', purpose: 'Identify the physical host location' },
    { data: 'Product / SKU', purpose: 'Track localized shade & formula demand' },
    { data: 'Transaction time', purpose: 'Understand venue traffic and purchasing patterns' },
    { data: 'Sale price', purpose: 'Revenue accounting and location economics' },
    { data: 'Dispense confirmation', purpose: 'Guarantee inventory accuracy before final charge capture' },
    { data: 'Anonymous customer ID', purpose: 'Loyalty recognition and repeat purchase continuity' },
    { data: 'Product preferences', purpose: 'Personalized recommendations inside the Zoe Nude App' },
    { data: 'Machine stock records', purpose: 'Automated route replenishment forecasting' },
  ];

  const costReductions = [
    {
      num: '01',
      title: 'Eliminate Individual Parcel Shipping',
      detail: 'Replenish in bulk to automated locations instead of mailing single-item boxes and void-fill.',
    },
    {
      num: '02',
      title: 'Eliminate Traditional Retail Storefronts',
      detail: 'Zero multi-year boutique leases, build-outs, utility bills, or conventional sales floor staffing.',
    },
    {
      num: '03',
      title: 'Eliminate Expensive Machine Computers',
      detail: 'No touchscreens, industrial PCs, card readers, or recurring cellular data plans per cabinet.',
    },
    {
      num: '04',
      title: 'Eliminate Conventional Checkout Counters',
      detail: 'The entire transaction, verification, and receipt flow executes inside the customer’s phone.',
    },
    {
      num: '05',
      title: 'Centralize Software Development',
      detail: 'Upgrade UX, pricing, and intelligence once in the cloud rather than maintaining embedded OS fleets.',
    },
  ];

  const venues = [
    'Boutique Hotels',
    'Fitness Studios & Gyms',
    'University Campuses',
    'Airport Concourses',
    'Creative Offices',
    'Residential Lobbies',
    'Hair & Nail Salons',
  ];

  const currentArch = archDetails[activeArchLayer];
  const currentStep = purchaseSteps[activeStep];

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      <TechSubNav active="distribution" />

      {/* Hero Section: Brand Positioning */}
      <section className="bg-gradient-to-br from-[#FAF2EB] via-[#FDF6F0] to-[#F5ECE1] py-16 sm:py-20 border-b border-[#EADED5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <span className="font-serif text-lg tracking-wider text-[#2B211E] block">Zoe</span>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase block">
                  NUDE COSMETICS · DISTRIBUTION ARCHITECTURE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal leading-[1.1] text-balance">
                Beauty. Without the Baggage.
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#85513f]">
                No stores. No shipping. No unnecessary overhead.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#4E4542] leading-relaxed font-light max-w-xl">
                We are building a new distribution model for cosmetics—combining a beauty brand, a mobile commerce platform, and a cloud-managed network of localized automated dispensers. <strong>The app is the store. The machine is fulfillment.</strong>
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#E6D9CE]">
                <div>
                  <span className="text-xs font-sans font-semibold text-[#2B211E] block">No Individual Shipping</span>
                  <span className="text-xs text-[#6E625D] font-light">Direct local collection</span>
                </div>
                <div>
                  <span className="text-xs font-sans font-semibold text-[#2B211E] block">No Traditional Checkouts</span>
                  <span className="text-xs text-[#6E625D] font-light">24/7 app-authorized access</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#E4DDD4] bg-white shadow-lg">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={nfcDispenserImg}
                    alt="Zoe Nude low-energy NFC automated cosmetics dispenser"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex items-center justify-between text-xs text-[#5C4D47] bg-[#FAF6F0] border-t border-[#EADED5]">
                  <span className="font-medium text-[#2B211E]">Zoe Nude Simple Dispenser Endpoint</span>
                  <span>NFC Authorized · Mechanical Release</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Thesis: The Machine Is Not the Technology. The Network Is. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#85513f] uppercase block">
            System Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
            Zoe Nude: The Machine Is Not the Technology. The Network Is.
          </h2>
          <p className="text-sm text-[#4E4542] leading-relaxed font-light">
            Intelligence moves out of the physical cabinet and into the software ecosystem. Select a layer below to inspect how responsibilities divide across Cloud, Phone, and Dispenser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive 3-Node Architecture Selector */}
          <div className="lg:col-span-5 space-y-3">
            {(
              [
                {
                  id: 'cloud',
                  label: 'ZOE NUDE CLOUD',
                  sub: 'Catalog, authorization, analytics & fleet state',
                  icon: Cloud,
                },
                {
                  id: 'phone',
                  label: "CUSTOMER'S PHONE",
                  sub: 'Shopping UI, payments & cellular bridge',
                  icon: Smartphone,
                },
                {
                  id: 'dispenser',
                  label: 'SIMPLE DISPENSER',
                  sub: 'Mechanical release & NFC tap—no onboard OS',
                  icon: Cpu,
                },
              ] as const
            ).map((node) => {
              const Icon = node.icon;
              const isSelected = activeArchLayer === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveArchLayer(node.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-colors flex items-start space-x-4 cursor-pointer ${
                    isSelected
                      ? 'bg-[#2B211E] text-[#FCF9F3] border-[#2B211E]'
                      : 'bg-white text-[#2B211E] border-[#E4DDD4] hover:border-[#85513f]'
                  }`}
                >
                  <Icon
                    size={20}
                    className={`mt-0.5 shrink-0 ${isSelected ? 'text-[#d8a48f]' : 'text-[#85513f]'}`}
                  />
                  <div className="space-y-1">
                    <div className="text-xs font-sans font-semibold tracking-wider uppercase">
                      {node.label}
                    </div>
                    <div className={`text-xs font-light ${isSelected ? 'text-[#D7CCC6]' : 'text-[#5C4D47]'}`}>
                      {node.sub}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Architecture Specification */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EADED5] p-8 space-y-6">
            <div className="border-b border-[#F0E8DF] pb-5 space-y-2">
              <div className="text-xs font-sans font-medium text-[#85513f]">
                {currentArch.role}
              </div>
              <h3 className="font-serif text-3xl text-[#2B211E] font-normal">
                {currentArch.title}
              </h3>
              <p className="text-sm text-[#4E4542] leading-relaxed font-light">
                {currentArch.description}
              </p>
            </div>

            <ul className="space-y-3">
              {currentArch.responsibilities.map((item) => (
                <li key={item} className="flex items-start space-x-3 text-sm text-[#2B211E]">
                  <Check size={16} className="text-[#85513f] mt-0.5 shrink-0" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1: Interactive 7-Step Purchase Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#85513f] uppercase block">
                01. Transaction Sequence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
                How a Offline-Capable Purchase Works
              </h2>
              <p className="text-sm text-[#4E4542] leading-relaxed font-light">
                The machine needs no Wi-Fi, Bluetooth, or cellular modem. The customer&rsquo;s smartphone supplies the cloud link and triggers a single-use cryptographic authorization locally over NFC.
              </p>
            </div>

            {/* 7 Step Buttons */}
            <div className="flex flex-wrap gap-2">
              {purchaseSteps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`px-3.5 py-2 rounded-lg border text-xs font-sans font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
                      isActive
                        ? 'bg-[#2B211E] text-[#FCF9F3] border-[#2B211E]'
                        : 'bg-white text-[#4E4542] border-[#E4DDD4] hover:border-[#85513f]'
                    }`}
                  >
                    {step.num}. {step.title}
                  </button>
                );
              })}
            </div>

            {/* Active Step Detail Card */}
            <div className="bg-white rounded-2xl border border-[#EADED5] p-6 sm:p-7 space-y-3">
              <div className="flex items-center justify-between text-xs font-sans text-[#85513f]">
                <span className="font-mono tabular-nums font-semibold">
                  Step {currentStep.num} of 07
                </span>
                <span>{currentStep.actor}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#2B211E] font-normal">
                {currentStep.title}
              </h3>
              <p className="text-sm text-[#4E4542] leading-relaxed font-light">
                {currentStep.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF4EC] border border-[#E4DDD4] flex items-start space-x-3 text-xs text-[#4E4542] leading-relaxed">
              <ShieldCheck size={18} className="text-[#85513f] shrink-0 mt-0.5" />
              <span>
                <strong>Engineering Safeguard:</strong> Every dispense uses a unique, expiring token tied to one SKU, confirming mechanical delivery before final payment capture. Printed QR codes identify the cabinet and never independently authorize release.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E4DDD4] bg-white shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={mobileDispenseImg}
                  alt="Zoe Nude app checkout alongside bamboo vessel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-xs text-[#5C4D47] space-y-1 bg-[#FAF6F0] border-t border-[#EADED5]">
                <div className="font-medium text-[#2B211E]">Phone as Network &amp; Checkout Terminal</div>
                <p className="font-light">
                  Customer browses, matches shades, and authorizes dispensing right from their device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 & 3: Ultra-Low Power Engineering (NFC Energy Harvesting & Solar) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#55715E] uppercase block">
              02 &amp; 03. Power Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
              Ultra-Low-Power &amp; Solar Dispensing Directions
            </h2>
            <p className="text-sm text-[#4E4542] leading-relaxed font-light">
              Ambient-temperature cosmetics require zero refrigeration, heating, or compressor loads—unlocking passive NFC energy harvesting and compact solar architectures.
            </p>
          </div>

          {/* Interactive Comparison Switch */}
          <div className="inline-flex p-1 bg-[#F1E7DC] rounded-lg shrink-0">
            <button
              type="button"
              onClick={() => setPowerMode('nfc')}
              className={`px-4 py-2 text-xs font-sans font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center space-x-1.5 ${
                powerMode === 'nfc' ? 'bg-white text-[#2B211E] shadow-2xs font-semibold' : 'text-[#5C4D47]'
              }`}
            >
              <Zap size={13} />
              <span>Passive NFC Dispenser</span>
            </button>
            <button
              type="button"
              onClick={() => setPowerMode('solar')}
              className={`px-4 py-2 text-xs font-sans font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center space-x-1.5 ${
                powerMode === 'solar' ? 'bg-white text-[#2B211E] shadow-2xs font-semibold' : 'text-[#5C4D47]'
              }`}
            >
              <Sun size={13} />
              <span>Solar-Assisted Dispenser</span>
            </button>
          </div>
        </div>

        {/* Active Power Specification Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EADED5] p-8 space-y-5">
            {powerMode === 'nfc' ? (
              <>
                <div className="space-y-1">
                  <span className="text-xs font-sans font-medium text-[#85513f]">
                    Infineon Passive NFC Controller Benchmark
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
                    NFC Energy Harvesting (~20–50 mW)
                  </h3>
                </div>
                <p className="text-sm text-[#4E4542] leading-relaxed font-light">
                  Documented passive NFC lock systems harvest roughly <strong>20–50 mW</strong> directly from a smartphone&rsquo;s NFC electromagnetic field—supplying both cryptographic verification and micro-actuator power upon tap without internal batteries or grid hookups.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F0E8DF] text-xs text-[#4E4542]">
                  <div>
                    <strong className="text-[#2B211E] block mb-1">Eliminated Subsystems</strong>
                    No machine battery for NFC logic, no Wi-Fi, no Bluetooth, no cellular modem, no screen, and no always-on CPU.
                  </div>
                  <div>
                    <strong className="text-[#2B211E] block mb-1">Mechanical Design Constraint</strong>
                    Because 20–50 mW will not drive conventional vending auger motors, hardware uses a spring-loaded latch and gravity-fed release.
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="text-xs font-sans font-medium text-[#55715E]">
                    Off-Grid Micro-Storage Architecture
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211E]">
                    Solar Panel + Capacitor / Battery Buffer
                  </h3>
                </div>
                <p className="text-sm text-[#4E4542] leading-relaxed font-light">
                  Unlike food or beverage kiosks weighed down by cooling compressors, ambient cosmetics only draw power during brief dispensing actuations—allowing a compact solar panel paired with a small rechargeable battery or supercapacitor to run autonomously between purchases.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F0E8DF] text-xs text-[#4E4542]">
                  <div>
                    <strong className="text-[#2B211E] block mb-1">Ambient Shelf Advantage</strong>
                    Zero refrigeration, zero heating elements, and minimal standby draw mean tiny photovoltaic panels maintain full readiness.
                  </div>
                  <div>
                    <strong className="text-[#2B211E] block mb-1">Flexible Siting</strong>
                    Deployable along sunlit courtyards, university walkways, gym foyers, and transit hubs without trenching AC conduit.
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Hardware Comparison Table */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#EADED5] overflow-hidden">
            <div className="px-6 py-4 bg-[#FAF4EC] border-b border-[#EADED5]">
              <h3 className="font-serif text-lg text-[#2B211E]">Power Architecture Matrix</h3>
            </div>
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="border-b border-[#F0E8DF] text-[#6E625D]">
                  <th className="py-3 px-5 font-semibold">Design</th>
                  <th className="py-3 px-5 font-semibold">Power Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0E8DF] text-[#2B211E]">
                <tr>
                  <td className="py-4 px-5 font-medium">Passive NFC Dispenser</td>
                  <td className="py-4 px-5 text-[#4E4542] font-light">
                    Energy harvested directly from customer smartphone NFC field (~20–50 mW)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-medium">Solar-Assisted Dispenser</td>
                  <td className="py-4 px-5 text-[#4E4542] font-light">
                    Small solar panel, supercapacitor or rechargeable cell storage, low-draw actuator
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-medium">Release Mechanics</td>
                  <td className="py-4 px-5 text-[#4E4542] font-light">
                    Spring-loaded latch &amp; gravity-fed drop (zero heavy motors or cooling)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Cloud Telemetry & Data Purpose Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#EADED5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-sans text-[#85513f] uppercase tracking-[0.16em]">
              <Database size={14} />
              <span>04. Focused Telemetry</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
              The Data Is Where the Intelligence Lives
            </h2>
            <p className="text-sm text-[#4E4542] leading-relaxed font-light">
              Rather than harvesting unrelated personal smartphone data, Zoe Nude collects strictly scoped operational signals—with customer consent—to keep shelves stocked, validate deliveries, and personalize loyalty rewards.
            </p>
            <div className="pt-2 space-y-2 text-xs text-[#5C4D47]">
              <strong className="text-[#2B211E] block">Core System Components</strong>
              <p className="font-light leading-relaxed">
                <strong>A. Zoe Nude App</strong> — Product discovery, checkout, loyalty, and dispenser connection.
              </p>
              <p className="font-light leading-relaxed">
                <strong>B. Zoe Nude Cloud</strong> — Centralized transaction settlement, forecasting, and analytics.
              </p>
              <p className="font-light leading-relaxed">
                <strong>C. Zoe Nude Dispenser</strong> — Standardized mechanical cabinet with NFC interface.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EADED5] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-sans">
                <thead>
                  <tr className="bg-[#FAF4EC] border-b border-[#EADED5] text-[#6E625D]">
                    <th className="py-3.5 px-6 font-semibold uppercase tracking-wider">Data Signal</th>
                    <th className="py-3.5 px-6 font-semibold uppercase tracking-wider">Business Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0E8DF]">
                  {telemetryRows.map((row) => (
                    <tr key={row.data} className="hover:bg-[#FCF9F3] transition-colors">
                      <td className="py-3 px-6 font-medium text-[#2B211E] whitespace-nowrap">{row.data}</td>
                      <td className="py-3 px-6 text-[#4E4542] font-light">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 & 6: Economic Advantages & Real-World Venues */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-10 space-y-2">
          <span className="text-xs font-sans font-medium tracking-[0.16em] text-[#85513f] uppercase block">
            05. Network Economics
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E] font-normal text-balance">
            Five Structural Cost Reductions
          </h2>
          <p className="text-sm text-[#4E4542] leading-relaxed font-light">
            Machine replenishment routes, maintenance, site agreements, and inventory coordination become a lean, data-directed operational model—replacing brick-and-mortar and parcel waste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {costReductions.map((item) => (
            <div key={item.num} className="bg-white rounded-xl border border-[#E4DDD4] p-6 space-y-2">
              <span className="font-mono tabular-nums text-xs text-[#85513f] block">{item.num}.</span>
              <h3 className="font-serif text-xl text-[#2B211E] font-normal">{item.title}</h3>
              <p className="text-xs text-[#5C4D47] leading-relaxed font-light">{item.detail}</p>
            </div>
          ))}

          {/* Strategic Host Venues Card */}
          <div className="bg-[#FAF4EC] rounded-xl border border-[#E4DDD4] p-6 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-sans font-semibold text-[#85513f]">
              <Building2 size={14} />
              <span>Accessible Deployment Venues</span>
            </div>
            <p className="text-xs text-[#4E4542] leading-relaxed font-light">
              Reaching daily environments traditional beauty retail cannot economically justify:
            </p>
            <div className="text-xs text-[#2B211E] font-medium leading-relaxed">
              {venues.join(' · ')}
            </div>
          </div>
        </div>

        {/* Closing Company Positioning Statement */}
        <div className="bg-[#2B211E] text-[#FCF9F3] rounded-2xl p-8 sm:p-12 text-center space-y-5">
          <div className="space-y-1">
            <span className="font-serif text-xl tracking-wider block">Zoe</span>
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#d8a48f] uppercase block">
              NUDE COSMETICS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-balance">
            Beauty. On Your Terms.
          </h2>
          <p className="font-serif italic text-lg text-[#d8a48f]">
            Beautifully You. Naturally Free.
          </p>
          <p className="font-sans text-sm text-[#D7CCC6] max-w-2xl mx-auto leading-relaxed font-light">
            The cosmetics establish the brand. The app creates the direct relationship. The cloud generates the intelligence. The dispenser delivers instant physical access—turning the distributed network into the enduring platform.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about/tech/packaging"
              className="bg-white text-[#2B211E] hover:bg-[#FAF1E8] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-6 py-3 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
            >
              <span>Packaging Innovation</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/shop"
              className="bg-transparent border border-[#6E5C54] hover:border-white text-[#FCF9F3] text-xs font-sans font-semibold tracking-[0.14em] uppercase px-6 py-3 rounded-lg transition-colors inline-flex items-center space-x-2 whitespace-nowrap shrink-0"
            >
              <span>Explore Formulations</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
