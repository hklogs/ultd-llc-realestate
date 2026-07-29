import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Globe, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenVault: () => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVault, onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [language, setLanguage] = useState<'EN' | 'FR' | 'AR'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const langs: ('EN' | 'FR' | 'AR')[] = ['EN', 'FR', 'AR'];
    const nextIndex = (langs.indexOf(language) + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0C]/85 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>
          <span className="font-cinzel tracking-[0.35em] text-lg md:text-xl font-semibold text-[#FDFDFD] group-hover:text-[#C5A880] transition-colors">
            FAME ESTATE
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-zinc-500 font-sans-clean ml-2 border-l border-zinc-800 pl-3">
            DUBAI
          </span>
        </a>

        {/* Center/Right Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans-clean text-xs tracking-[0.2em] text-zinc-300 uppercase">
          <a
            href="#hero"
            className="hover:text-[#C5A880] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all"
          >
            Residences
          </a>
          <a
            href="#manifesto"
            className="hover:text-[#C5A880] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all"
          >
            Philosophy
          </a>
          <a
            href="#listings"
            className="hover:text-[#C5A880] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all"
          >
            Collection
          </a>
          <button
            onClick={onOpenVault}
            className="flex items-center gap-1.5 hover:text-[#C5A880] transition-colors cursor-pointer text-amber-200/90"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Vault & Yield</span>
          </button>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Sound Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-sans-clean tracking-wider text-zinc-400 hover:text-white hover:border-[#C5A880]/40 transition-all cursor-pointer"
            title="Toggle Ambient Audio Experience"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-[10px] text-zinc-500">AMBIENCE OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#C5A880] animate-pulse" />
                <span className="text-[10px] text-[#C5A880]">AMBIENCE ON</span>
              </>
            )}
          </button>

          {/* Language Selector */}
          <button
            onClick={toggleLanguage}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-sans-clean text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-500" />
            <span>{language}</span>
          </button>

          {/* Inquire CTA Button */}
          <button
            onClick={onOpenInquiry}
            className="relative group overflow-hidden px-5 py-2.5 rounded-none border border-[#C5A880]/50 bg-[#121110]/80 hover:bg-[#C5A880] text-white hover:text-black font-sans-clean text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 shadow-lg cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Private Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
