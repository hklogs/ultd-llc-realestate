import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Square, Bed, Bath, ArrowUpRight, ShieldCheck, Download, Layers, Check, Phone } from 'lucide-react';
import { PropertyListing } from '../types';

interface PropertyDetailModalProps {
  property: PropertyListing | null;
  onClose: () => void;
  onOpenInquiry: (propertyTitle?: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onOpenInquiry,
}) => {
  if (!property) return null;

  const [activeImage, setActiveImage] = useState<string>(property.heroImage);
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'SPECIFICATIONS' | 'FLOORPLAN'>('OVERVIEW');
  const [dossierRequested, setDossierRequested] = useState<boolean>(false);

  const handleDownloadDossier = () => {
    setDossierRequested(true);
    setTimeout(() => setDossierRequested(false), 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl bg-[#0E0E0F] border border-[#C5A880]/30 shadow-2xl overflow-hidden my-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0B0B0C]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
              <span className="font-cinzel tracking-[0.25em] text-xs text-white uppercase">
                RESIDENCE DOSSIER // {property.id.toUpperCase()}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 max-h-[80vh] overflow-y-auto">
            
            {/* Left Column (7 Cols): Gallery & Interactive Floorplan */}
            <div className="lg:col-span-7 bg-[#0B0B0C] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between space-y-6">
              
              {/* Main Active Image Showcase */}
              <div className="relative h-[360px] sm:h-[440px] w-full bg-[#121110] overflow-hidden group">
                <img
                  src={activeImage}
                  alt={property.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 glass-panel px-3 py-1 font-mono text-[11px] text-[#C5A880]">
                  {property.coordinates}
                </div>
              </div>

              {/* Gallery Thumbnails Carousel */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {[property.heroImage, ...property.gallery].map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative h-20 w-28 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                      activeImage === imgUrl ? 'border-[#C5A880] ring-1 ring-[#C5A880]' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Gallery ${i}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Download Dossier CTA */}
              <div className="glass-panel p-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-sans-clean font-medium text-white block">DISCREET PDF BROCHURE</span>
                  <span className="text-[10px] text-zinc-400 font-sans-clean">Floorplans, architectural blueprints & legal title structure.</span>
                </div>
                
                <button
                  onClick={handleDownloadDossier}
                  className="px-4 py-2 bg-[#121110] hover:bg-[#C5A880] text-zinc-300 hover:text-black border border-white/10 font-sans-clean text-[11px] uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {dossierRequested ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>DOSSIER SENT</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>DOWNLOAD</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right Column (5 Cols): Property Details & Inquiry Form Trigger */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-8 bg-[#0E0E0F] flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Header Info */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans-clean text-[#C5A880] tracking-widest uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{property.location}</span>
                  </div>
                  <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-normal">
                    {property.title}
                  </h2>
                  <p className="text-xs font-sans-clean text-zinc-400 mt-1">{property.subTitle}</p>
                </div>

                {/* Price Tag */}
                <div className="p-4 bg-[#121110] border border-[#C5A880]/30 space-y-1">
                  <span className="text-[10px] font-sans-clean tracking-widest text-zinc-400 uppercase block">GUIDE PRICE</span>
                  <div className="font-serif-luxury text-3xl text-[#C5A880] font-medium">
                    AED {(property.priceAed / 1000000).toFixed(0)},000,000
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">
                    ≈ ${ (property.priceUsd / 1000000).toFixed(2) }M USD
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex border-b border-white/10 text-xs font-sans-clean">
                  {(['OVERVIEW', 'SPECIFICATIONS'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 uppercase tracking-widest cursor-pointer transition-colors ${
                        activeTab === tab
                          ? 'border-b-2 border-[#C5A880] text-[#C5A880] font-medium'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'OVERVIEW' ? (
                  <div className="space-y-4">
                    <p className="font-sans-clean text-xs text-zinc-300 leading-relaxed font-light">
                      {property.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[10px] font-sans-clean uppercase tracking-widest text-[#C5A880] block">
                        KEY AMENITIES & FEATURES
                      </span>
                      <ul className="space-y-1.5 text-xs font-sans-clean text-zinc-300">
                        {property.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#C5A880]"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 font-sans-clean text-xs">
                    <div className="p-3 bg-white/5 space-y-1">
                      <span className="text-[10px] text-zinc-500 uppercase block">ARCHITECT</span>
                      <span className="text-zinc-200">{property.architect}</span>
                    </div>
                    <div className="p-3 bg-white/5 space-y-1">
                      <span className="text-[10px] text-zinc-500 uppercase block">COMPLETION</span>
                      <span className="text-zinc-200">{property.completionYear}</span>
                    </div>
                    <div className="p-3 bg-white/5 space-y-1">
                      <span className="text-[10px] text-zinc-500 uppercase block">BUILT-UP AREA</span>
                      <span className="text-zinc-200">{property.builtUpAreaSqFt.toLocaleString()} SQ FT</span>
                    </div>
                    <div className="p-3 bg-white/5 space-y-1">
                      <span className="text-[10px] text-zinc-500 uppercase block">BED / BATH</span>
                      <span className="text-zinc-200">{property.bedrooms} Beds / {property.bathrooms} Baths</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry(property.title);
                  }}
                  className="w-full py-3.5 bg-[#C5A880] hover:bg-[#d8bc93] text-black font-sans-clean text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Schedule Private Viewing</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] font-sans-clean text-zinc-500 tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict NDA & VIP Discretion Guaranteed</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
