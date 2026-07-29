import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Eye, Bed, Bath, Square, SlidersHorizontal } from 'lucide-react';
import { PropertyListing } from '../types';

interface ListingsGridProps {
  properties: PropertyListing[];
  onSelectProperty: (property: PropertyListing) => void;
}

export const ListingsGrid: React.FC<ListingsGridProps> = ({
  properties,
  onSelectProperty,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [currency, setCurrency] = useState<'AED' | 'USD'>('AED');
  const [sortBy, setSortBy] = useState<'price-desc' | 'area-desc'>('price-desc');

  const categories = ['ALL', 'Sky Penthouse', 'Beachfront Villa', 'Desert Estate', 'Private Island'];

  // Filter properties
  const filteredProperties = properties.filter((prop) => {
    if (selectedCategory === 'ALL') return true;
    return prop.type === selectedCategory;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'price-desc') {
      return b.priceAed - a.priceAed;
    }
    return b.builtUpAreaSqFt - a.builtUpAreaSqFt;
  });

  const formatPrice = (prop: PropertyListing) => {
    if (currency === 'USD') {
      return `$${(prop.priceUsd / 1000000).toFixed(1)}M`;
    }
    return `AED ${(prop.priceAed / 1000000).toFixed(0)}M`;
  };

  return (
    <section id="listings" className="py-24 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/5">
          <div className="space-y-3">
            <span className="text-xs font-sans-clean tracking-[0.35em] text-[#C5A880] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
              CURATED COLLECTION
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-[#FDFDFD] font-light">
              TROPHY RESIDENCES
            </h2>
            <p className="font-sans-clean text-xs text-zinc-400 font-light max-w-xl">
              Asymmetrical showcase of Dubai's rarest residential architecture. Floating specifications, editorial layouts, and off-market discretion.
            </p>
          </div>

          {/* Right Controls: Currency & Sorting */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Currency Switcher */}
            <div className="flex items-center p-1 bg-[#121110] border border-white/10 text-xs font-sans-clean">
              <button
                onClick={() => setCurrency('AED')}
                className={`px-3 py-1.5 transition-colors cursor-pointer ${
                  currency === 'AED' ? 'bg-[#C5A880] text-black font-medium' : 'text-zinc-400 hover:text-white'
                }`}
              >
                AED
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 transition-colors cursor-pointer ${
                  currency === 'USD' ? 'bg-[#C5A880] text-black font-medium' : 'text-zinc-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#121110] border border-white/10 text-xs font-sans-clean text-zinc-300 px-4 py-2 uppercase tracking-widest focus:outline-none focus:border-[#C5A880] cursor-pointer"
            >
              <option value="price-desc">SORT: HIGHEST VALUATION</option>
              <option value="area-desc">SORT: LARGEST BUILT-UP AREA</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 whitespace-nowrap text-xs font-sans-clean tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FDFDFD] text-black font-medium shadow-lg'
                  : 'bg-[#121110] text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat === 'ALL' ? 'ALL ESTATES' : cat}
            </button>
          ))}
        </div>

        {/* Staggered Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {sortedProperties.map((property, idx) => {
            // Calculate asymmetrical span: alternate between 7 cols and 5 cols for editorial visual rhythm
            const isWide = idx % 2 === 0;
            const colSpanClass = isWide ? 'lg:col-span-7' : 'lg:col-span-5';
            
            return (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`${colSpanClass} group relative flex flex-col justify-between`}
              >
                {/* Image Container with Floating Dynamic Typography */}
                <div 
                  onClick={() => onSelectProperty(property)}
                  className="relative h-[480px] sm:h-[540px] w-full overflow-hidden bg-[#121110] cursor-pointer"
                >
                  <img
                    src={property.heroImage}
                    alt={property.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Dark Editorial Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-90 pointer-events-none" />

                  {/* Floating Specs Typography Layer (Fame Estate Signature Style) */}
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
                    <span className="glass-panel px-3 py-1 font-mono text-[11px] text-[#C5A880] tracking-widest uppercase">
                      {property.floorLevel}
                    </span>
                    <span className="glass-panel px-3 py-1 font-sans-clean text-[10px] text-zinc-300 tracking-widest uppercase">
                      {property.tag}
                    </span>
                  </div>

                  {/* Floating Price Next to Image with Delicate Connector Hairline */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="glass-panel-gold px-4 py-2 text-right">
                      <span className="block text-[9px] font-sans-clean tracking-widest text-zinc-400 uppercase">OFFERING</span>
                      <span className="font-serif-luxury text-xl sm:text-2xl text-[#C5A880] font-medium">
                        {formatPrice(property)}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Overlay inside glass panel */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-sans-clean text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{property.location}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal group-hover:text-[#C5A880] transition-colors">
                      {property.title}
                    </h3>

                    {/* Specs Row */}
                    <div className="flex items-center gap-6 font-sans-clean text-xs text-zinc-300 pt-1 border-t border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Square className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{property.builtUpAreaSqFt.toLocaleString()} SQ FT</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{property.bedrooms} BEDS</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{property.bathrooms} BATHS</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Inspect CTA Overlay */}
                  <div className="absolute inset-0 bg-[#0B0B0C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30 pointer-events-none">
                    <div className="px-6 py-3 bg-[#C5A880] text-black font-sans-clean text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2 shadow-2xl">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Residence Dossier</span>
                    </div>
                  </div>
                </div>

                {/* Card Description Footer */}
                <div className="pt-4 flex items-center justify-between font-sans-clean text-xs text-zinc-400 border-b border-white/5 pb-4">
                  <span className="font-mono text-[11px] text-zinc-500">{property.coordinates}</span>
                  <button
                    onClick={() => onSelectProperty(property)}
                    className="text-zinc-300 hover:text-[#C5A880] flex items-center gap-1 transition-colors uppercase tracking-widest text-[11px] cursor-pointer"
                  >
                    <span>View Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
