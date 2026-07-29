import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronRight, ChevronLeft, MapPin, Play, Compass } from 'lucide-react';
import { PropertyListing } from '../types';

interface HeroSectionProps {
  properties: PropertyListing[];
  onSelectProperty: (property: PropertyListing) => void;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  properties,
  onSelectProperty,
  onOpenInquiry,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeProp = properties[currentIndex] || properties[0];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, properties.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-[#0B0B0C]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Split Screen Container */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1 my-auto">
        
        {/* Left Column (30% - 40% Width): Editorial Slogan & Agency Identity */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 z-10 pt-6 lg:pt-0">
          {/* Subtle Tag & Line Counter */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-sans-clean tracking-[0.3em] uppercase text-[#C5A880] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
              Dubai Private Portfolio
            </span>
            <span className="h-3 w-[1px] bg-zinc-800"></span>
            <span className="font-mono text-xs text-zinc-500 tracking-widest">
              [ 0{currentIndex + 1} / 0{properties.length} ]
            </span>
          </div>

          {/* Massive Serif Headline */}
          <div className="space-y-3">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FDFDFD] leading-[1.05] tracking-tight">
              PROPERTIES <br />
              <span className="italic font-normal text-zinc-300">THAT EVOKE</span> <br />
              <span className="text-[#C5A880] font-cinzel text-3xl sm:text-4xl lg:text-5xl block mt-1 tracking-wider">
                EMOTION
              </span>
            </h1>
          </div>

          {/* Subtitle description */}
          <p className="font-sans-clean text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-md">
            Architectural masterpieces carved for the ultra-discreet. We represent Dubai’s most unrepeatable trophy estates, sky penthouses, and private beachfronts.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onSelectProperty(activeProp)}
              className="px-7 py-3.5 bg-[#FDFDFD] text-[#0B0B0C] font-sans-clean text-xs tracking-[0.2em] font-medium uppercase hover:bg-[#C5A880] hover:text-black transition-all duration-300 flex items-center gap-3 cursor-pointer group shadow-xl"
            >
              <span>Explore Residence</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onOpenInquiry}
              className="px-6 py-3.5 border border-zinc-800 hover:border-[#C5A880]/50 text-zinc-300 hover:text-white font-sans-clean text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              Discreet Dossier
            </button>
          </div>

          {/* Coordinates & Micro Meta */}
          <div className="pt-6 border-t border-white/5 flex items-center justify-between text-zinc-500 font-sans-clean text-xs">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-mono tracking-wider text-[11px]">{activeProp.coordinates}</span>
            </div>
            <div className="text-[11px] tracking-widest uppercase text-zinc-400">
              AED {(activeProp.priceAed / 1000000).toFixed(0)}M
            </div>
          </div>
        </div>

        {/* Right Column (70% Width): Massive Vertical Visual Showcase */}
        <div className="lg:col-span-7 relative h-[560px] sm:h-[640px] lg:h-[720px] w-full rounded-none overflow-hidden group">
          
          {/* Main Visual Carousel Image with Staggered Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProp.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={activeProp.heroImage}
                alt={activeProp.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08] transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* Subtle dark gradient vignettes for editorial depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Gold Hairline Frame Accent */}
          <div className="absolute inset-4 border border-[#C5A880]/20 pointer-events-none z-10 hidden sm:block" />

          {/* Top Floating Badge (4K Film Reel Status) */}
          <div className="absolute top-8 right-8 z-20 flex items-center gap-3">
            <div className="glass-panel px-3.5 py-1.5 flex items-center gap-2 text-[11px] font-sans-clean tracking-widest uppercase text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>CINEMATIC ARCHITECTURE // 4K</span>
            </div>
          </div>

          {/* Bottom Floating Specs Overlay (Glassmorphism) */}
          <div className="absolute bottom-8 left-6 right-6 sm:left-8 sm:right-8 z-20">
            <div className="glass-panel-gold p-6 sm:p-8 rounded-none flex flex-col md:flex-row md:items-end justify-between gap-6 gold-glow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#C5A880] font-sans-clean text-xs tracking-widest uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeProp.location}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400">{activeProp.type}</span>
                </div>
                
                <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal tracking-wide">
                  {activeProp.title}
                </h2>

                <div className="flex items-center gap-6 font-sans-clean text-xs text-zinc-300 pt-1">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">BUILT-UP AREA</span>
                    <span className="font-mono text-sm">{activeProp.builtUpAreaSqFt.toLocaleString()} SQ FT</span>
                  </div>
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">FLOOR / LEVEL</span>
                    <span className="font-mono text-sm">{activeProp.floorLevel}</span>
                  </div>
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">COMPLETION</span>
                    <span className="font-mono text-sm">{activeProp.completionYear}</span>
                  </div>
                </div>
              </div>

              {/* Price & Quick Inspect */}
              <div className="flex items-center justify-between md:flex-col md:items-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                <div className="text-right">
                  <span className="text-[10px] font-sans-clean tracking-widest text-zinc-400 uppercase block">ACQUISITION VALUE</span>
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#C5A880]">
                    AED {(activeProp.priceAed / 1000000).toFixed(0)},000,000
                  </span>
                  <span className="block text-[11px] text-zinc-400 font-mono font-light">
                    ≈ ${ (activeProp.priceUsd / 1000000).toFixed(1) }M USD
                  </span>
                </div>

                <button
                  onClick={() => onSelectProperty(activeProp)}
                  className="px-4 py-2 bg-white/10 hover:bg-[#C5A880] text-white hover:text-black font-sans-clean text-[11px] uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Inspect</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Controls (Bottom Right Floating Arrows) */}
          <div className="absolute top-8 left-8 z-20 flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 glass-panel hover:border-[#C5A880] text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Property"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 glass-panel hover:border-[#C5A880] text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Property"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 h-10 glass-panel hover:border-[#C5A880] text-zinc-300 text-[10px] uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Play className={`w-3 h-3 ${isPlaying ? 'text-[#C5A880]' : 'text-zinc-500'}`} />
              <span>{isPlaying ? 'AUTO ROTATE' : 'PAUSED'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Hairline Separator */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mt-12">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C5A880]/30 to-transparent" />
      </div>
    </section>
  );
};
