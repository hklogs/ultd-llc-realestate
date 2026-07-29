import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, Check, ShieldCheck, ArrowUpRight, MessageSquare } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactInquirySectionProps {
  initialPropertyTitle?: string;
}

export const ContactInquirySection: React.FC<ContactInquirySectionProps> = ({
  initialPropertyTitle,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'WhatsApp',
    propertyOfInterest: initialPropertyTitle || 'General Ultra-Prime Portfolio',
    inquiryType: 'Acquisition',
    budgetBand: 'AED 50M - 100M',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Fame Estate Private Office, I would like to schedule a confidential inquiry regarding ${formData.propertyOfInterest}.`
    );
    window.open(`https://wa.me/97140000000?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 bg-[#0B0B0C] border-t border-white/5 relative overflow-hidden">
      {/* Subtle background gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#C5A880]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-12 text-center">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-sans-clean tracking-[0.35em] text-[#C5A880] uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            PRIVATE ADVISORY INQUIRY
          </span>
          
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#FDFDFD] font-light">
            INITIATE CONVERSATION
          </h2>

          <p className="font-sans-clean text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
            All inquiries are received exclusively by our Senior Partners under non-disclosure confidentiality protocols.
          </p>
        </div>

        {/* Minimalist Centered Form Visualization with Thin Lines */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 glass-panel-gold border-[#C5A880]/50 space-y-6 text-center max-w-xl mx-auto gold-glow"
          >
            <div className="w-12 h-12 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mx-auto border border-[#C5A880]/40">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="font-serif-luxury text-3xl text-white font-normal">
              INQUIRY RECEIVED
            </h3>

            <p className="font-sans-clean text-xs text-zinc-300 font-light leading-relaxed">
              A Senior Partner from our Dubai Private Office will reach out to you via your preferred channel within 2 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsAppDirect}
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-sans-clean text-xs tracking-widest uppercase flex items-center gap-2 cursor-pointer transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 border border-white/20 hover:border-white text-zinc-300 font-sans-clean text-xs tracking-widest uppercase cursor-pointer transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 text-left max-w-2xl mx-auto">
            
            {/* Inquiry Type Buttons */}
            <div className="space-y-2">
              <label className="text-[10px] font-sans-clean tracking-widest uppercase text-zinc-500 block text-center">
                SELECT PURPOSE OF INQUIRY
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'Acquisition',
                  'Discreet Sale',
                  'Portfolio Management',
                  'Private Dossier',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, inquiryType: type as any })}
                    className={`py-2.5 px-3 text-center text-xs font-sans-clean tracking-widest uppercase transition-all cursor-pointer border ${
                      formData.inquiryType === type
                        ? 'bg-[#C5A880] text-black font-medium border-[#C5A880]'
                        : 'bg-[#121110] text-zinc-400 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid with Minimalist Thin Hairlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Full Name Input */}
              <div className="space-y-1 relative group">
                <input
                  type="text"
                  required
                  placeholder="FULL NAME *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-[#C5A880] py-3 text-xs font-sans-clean text-white tracking-widest focus:outline-none placeholder:text-zinc-600 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1 relative group">
                <input
                  type="email"
                  required
                  placeholder="CONFIDENTIAL EMAIL *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-[#C5A880] py-3 text-xs font-sans-clean text-white tracking-widest focus:outline-none placeholder:text-zinc-600 transition-colors"
                />
              </div>

              {/* Phone / WhatsApp Input */}
              <div className="space-y-1 relative group">
                <input
                  type="tel"
                  placeholder="PHONE / WHATSAPP NUMBER *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-[#C5A880] py-3 text-xs font-sans-clean text-white tracking-widest focus:outline-none placeholder:text-zinc-600 transition-colors"
                />
              </div>

              {/* Budget Band Selection */}
              <div className="space-y-1 relative group">
                <select
                  value={formData.budgetBand}
                  onChange={(e) => setFormData({ ...formData, budgetBand: e.target.value })}
                  className="w-full bg-[#0B0B0C] border-b border-zinc-800 focus:border-[#C5A880] py-3 text-xs font-sans-clean text-zinc-300 tracking-widest focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="AED 20M - 50M">ESTIMATED BUDGET: AED 20M - 50M</option>
                  <option value="AED 50M - 100M">ESTIMATED BUDGET: AED 50M - 100M</option>
                  <option value="AED 100M - 250M">ESTIMATED BUDGET: AED 100M - 250M</option>
                  <option value="AED 250M+">ESTIMATED BUDGET: AED 250M+ ($68M+)</option>
                </select>
              </div>

            </div>

            {/* Special Notes / Specific Estate */}
            <div className="space-y-1">
              <textarea
                rows={3}
                placeholder="ADDITIONAL ARCHITECTURAL REQUIREMENTS OR SPECIFIC RESIDENCE INTEREST..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-transparent border-b border-zinc-800 focus:border-[#C5A880] py-3 text-xs font-sans-clean text-white tracking-widest focus:outline-none placeholder:text-zinc-600 transition-colors resize-none"
              />
            </div>

            {/* Prominent CTA Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-black font-sans-clean text-xs tracking-[0.25em] font-medium uppercase transition-all duration-300 shadow-xl cursor-pointer inline-flex items-center justify-center gap-3"
              >
                <span>REQUEST PRIVATE CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] font-sans-clean text-zinc-500 uppercase tracking-widest text-center pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>STRICT NDA GUARANTEED • DIFC PRIVATE ADVISORY</span>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
