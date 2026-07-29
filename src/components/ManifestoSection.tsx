import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sparkles, Building2, Volume2, Check } from 'lucide-react';
import { MANIFESTO_WORDS, MANIFESTO_PILLARS } from '../data/properties';

export const ManifestoSection: React.FC = () => {
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
  const [selectedPillarId, setSelectedPillarId] = useState<string>(MANIFESTO_PILLARS[0].id);
  const [isAutoHighlighting, setIsAutoHighlighting] = useState<boolean>(true);

  // Sequential word highlight loop
  useEffect(() => {
    if (!isAutoHighlighting) return;
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % MANIFESTO_WORDS.length);
    }, 350);
    return () => clearInterval(interval);
  }, [isAutoHighlighting]);

  const activePillar = MANIFESTO_PILLARS.find((p) => p.id === selectedPillarId) || MANIFESTO_PILLARS[0];

  return (
    <section id="manifesto" className="relative py-28 bg-[#0B0B0C] border-t border-b border-white/5 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20">
        
        {/* Section Header Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-2">
            <span className="text-xs font-sans-clean tracking-[0.35em] text-[#C5A880] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
              AGENCY MANIFESTO
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#FDFDFD] font-light">
              THE FAME PHILOSOPHY
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans-clean text-zinc-400">
            <button
              onClick={() => setIsAutoHighlighting(!isAutoHighlighting)}
              className="px-4 py-2 border border-white/10 hover:border-[#C5A880]/40 rounded-full transition-all cursor-pointer flex items-center gap-2"
            >
              <Volume2 className={`w-3.5 h-3.5 ${isAutoHighlighting ? 'text-[#C5A880]' : 'text-zinc-500'}`} />
              <span>{isAutoHighlighting ? 'PAUSE WORD REVEAL' : 'PLAY REVEAL'}</span>
            </button>
          </div>
        </div>

        {/* Massive Words Lighting Up Sequentially Across Entire Screen */}
        <div className="py-6 sm:py-10 max-w-5xl mx-auto text-center">
          <p className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] sm:leading-[1.25] tracking-tight text-zinc-600 selection:bg-[#C5A880]/20">
            {MANIFESTO_WORDS.map((item, idx) => {
              const isCurrent = idx === activeWordIndex;
              const isHighlighted = item.highlight;
              
              return (
                <span
                  key={idx}
                  onMouseEnter={() => {
                    setActiveWordIndex(idx);
                    setIsAutoHighlighting(false);
                  }}
                  className={`inline-block mr-[0.28em] transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? 'text-white scale-105 font-normal shadow-sm underline decoration-[#C5A880] underline-offset-8'
                      : isHighlighted
                      ? 'text-[#C5A880] font-normal'
                      : idx < activeWordIndex
                      ? 'text-zinc-300 font-light'
                      : 'text-zinc-700 font-light hover:text-zinc-400'
                  }`}
                >
                  {item.text}
                </span>
              );
            })}
          </p>

          <p className="font-sans-clean text-xs tracking-[0.25em] text-zinc-500 uppercase mt-8">
            [ HOVER OVER ANY WORD TO INSPECT PHILOSOPHY ]
          </p>
        </div>

        {/* Three Core Pillars Cards / Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {MANIFESTO_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-8 border transition-all duration-500 cursor-pointer relative group ${
                  isSelected
                    ? 'bg-[#121110] border-[#C5A880]/60 gold-glow'
                    : 'bg-[#0E0E0F] border-white/5 hover:border-white/20'
                }`}
              >
                {/* Gold Top Border Accent on Selected */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A880] via-[#E5C99F] to-[#C5A880]" />
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C5A880]">0{pillar.id.replace('pillar-0', '')}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#C5A880]" />}
                  </div>

                  <h3 className="font-serif-luxury text-2xl text-white font-normal group-hover:text-[#C5A880] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-sans-clean text-xs uppercase tracking-widest text-zinc-400">
                    {pillar.subtitle}
                  </p>

                  <p className="font-sans-clean text-xs text-zinc-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Banner */}
        <div className="glass-panel p-8 sm:p-10 border-l-2 border-l-[#C5A880] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-sans-clean tracking-widest uppercase text-[#C5A880]">
              CORE MANIFESTO PRINCIPLE // {activePillar.title}
            </span>
            <p className="font-serif-luxury text-xl sm:text-2xl text-zinc-200 italic font-light">
              "{activePillar.quote}"
            </p>
          </div>
          
          <div className="text-right">
            <span className="font-cinzel text-xs text-white tracking-widest uppercase block">
              FAME ESTATE PRIVATE OFFICE
            </span>
            <span className="text-[10px] font-sans-clean text-zinc-500 uppercase">
              DUBAI • GENEVA • LONDON
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
