import React from 'react';
import { Compass, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080809] border-t border-white/5 pt-16 pb-12 text-zinc-400 font-sans-clean">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
              <span className="font-cinzel tracking-[0.35em] text-xl font-semibold text-white">
                FAME ESTATE
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 font-light max-w-sm leading-relaxed">
              Dubai’s premier discreet real estate agency. Representing architectural masterpieces, private islands, and sky penthouses for high-net-worth global collectors.
            </p>

            <div className="pt-2 text-[11px] font-mono text-zinc-500">
              DIFC GATE PRECINCT 4 • LEVEL 14 • DUBAI, UAE
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="text-[10px] tracking-widest uppercase text-[#C5A880] block mb-2">
              PORTFOLIO SECTIONS
            </span>
            <ul className="space-y-2 uppercase tracking-wider text-zinc-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Residences Showcase</a></li>
              <li><a href="#manifesto" className="hover:text-white transition-colors">Agency Manifesto</a></li>
              <li><a href="#listings" className="hover:text-white transition-colors">Trophy Collection</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Private Advisory</a></li>
            </ul>
          </div>

          {/* Offices & Contact */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="text-[10px] tracking-widest uppercase text-[#C5A880] block mb-2">
              GLOBAL PRIVATE OFFICES
            </span>
            <div className="space-y-2 text-zinc-400">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span>DUBAI (HEADQUARTERS)</span>
                <span className="font-mono text-zinc-500">+971 4 800 FAME</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span>GENEVA (AFFAIRS)</span>
                <span className="font-mono text-zinc-500">+41 22 900 1200</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span>LONDON (MAYFAIR)</span>
                <span className="font-mono text-zinc-500">+44 20 7946 0900</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} FAME ESTATE REAL ESTATE LLC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">PRIVACY PROTOCOL</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">DISCREET TERMS</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">RERA PERMIT #71092</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
