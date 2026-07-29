import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, ShieldCheck, Sparkles, ArrowUpRight, DollarSign, Award, CheckCircle2 } from 'lucide-react';

interface PrivateVaultDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const PrivateVaultDrawer: React.FC<PrivateVaultDrawerProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  const [investmentAed, setInvestmentAed] = useState<number>(50000000); // 50M AED default
  const [holdingPeriodYears, setHoldingPeriodYears] = useState<number>(5);

  const isGoldenVisaEligible = investmentAed >= 2000000;
  const estimatedAnnualRentalAed = Math.round(investmentAed * 0.072); // 7.2% net yield
  const estimatedCapitalAppreciationAed = Math.round(investmentAed * Math.pow(1.085, holdingPeriodYears) - investmentAed); // 8.5% annual appreciation
  const totalProjectedWealthGainAed = estimatedAnnualRentalAed * holdingPeriodYears + estimatedCapitalAppreciationAed;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl h-full bg-[#0E0E0F] border-l border-[#C5A880]/30 shadow-2xl p-6 sm:p-10 overflow-y-auto flex flex-col justify-between"
        >
          {/* Drawer Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#C5A880]" />
                <span className="font-cinzel text-sm text-white tracking-widest uppercase">
                  THE PRIVATE VAULT // INVESTMENT MATRIX
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-sans-clean text-xs text-zinc-400 leading-relaxed font-light">
              Model your Dubai property portfolio returns, tax optimization, and 10-Year UAE Golden Visa eligibility.
            </p>
          </div>

          {/* Calculator Controls */}
          <div className="space-y-8 my-8">
            
            {/* Investment Amount Slider */}
            <div className="space-y-3 p-5 bg-[#121110] border border-white/5">
              <div className="flex justify-between items-center text-xs font-sans-clean">
                <span className="text-zinc-400 uppercase tracking-widest">Target Acquisition Budget</span>
                <span className="font-serif-luxury text-xl text-[#C5A880] font-medium">
                  AED {(investmentAed / 1000000).toFixed(1)}M
                </span>
              </div>

              <input
                type="range"
                min={5000000}
                max={300000000}
                step={5000000}
                value={investmentAed}
                onChange={(e) => setInvestmentAed(Number(e.target.value))}
                className="w-full accent-[#C5A880] cursor-pointer"
              />

              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>AED 5M ($1.36M)</span>
                <span>AED 300M ($81.6M)</span>
              </div>
            </div>

            {/* Holding Horizon Slider */}
            <div className="space-y-3 p-5 bg-[#121110] border border-white/5">
              <div className="flex justify-between items-center text-xs font-sans-clean">
                <span className="text-zinc-400 uppercase tracking-widest">Investment Horizon</span>
                <span className="font-mono text-sm text-white">{holdingPeriodYears} YEARS</span>
              </div>

              <input
                type="range"
                min={1}
                max={15}
                step={1}
                value={holdingPeriodYears}
                onChange={(e) => setHoldingPeriodYears(Number(e.target.value))}
                className="w-full accent-[#C5A880] cursor-pointer"
              />
            </div>

            {/* Results Grid */}
            <div className="space-y-4">
              <span className="text-[10px] font-sans-clean tracking-widest text-[#C5A880] uppercase block">
                PROJECTED WEALTH ANALYSIS
              </span>

              <div className="grid grid-cols-2 gap-3 font-sans-clean text-xs">
                <div className="p-4 bg-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block">NET ANNUAL RENTAL YIELD</span>
                  <span className="text-lg font-serif-luxury text-white">
                    AED {(estimatedAnnualRentalAed / 1000000).toFixed(2)}M / yr
                  </span>
                  <span className="text-[10px] text-emerald-400 block">7.2% Net ROI</span>
                </div>

                <div className="p-4 bg-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block">CAPITAL GAINS TAX</span>
                  <span className="text-lg font-serif-luxury text-emerald-400">0% TAX</span>
                  <span className="text-[10px] text-zinc-500 block">Fully Sovereign</span>
                </div>
              </div>

              {/* Total Projected Wealth Gain */}
              <div className="p-5 glass-panel-gold space-y-1 gold-glow">
                <span className="text-[10px] font-sans-clean tracking-widest text-zinc-400 uppercase block">
                  ESTIMATED TOTAL WEALTH CREATION ({holdingPeriodYears} YEARS)
                </span>
                <div className="font-serif-luxury text-3xl text-[#C5A880]">
                  + AED {(totalProjectedWealthGainAed / 1000000).toFixed(1)} Million
                </div>
                <span className="text-[11px] font-mono text-zinc-400 block">
                  ≈ +${(totalProjectedWealthGainAed / 3.6725 / 1000000).toFixed(1)}M USD
                </span>
              </div>

              {/* Golden Visa Status */}
              <div className="p-4 bg-[#121110] border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-xs font-medium text-white block">10-YEAR UAE GOLDEN VISA</span>
                    <span className="text-[10px] text-zinc-400">Residency for family, staff, and corporate entities.</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 font-mono text-[10px] uppercase">
                  ELIGIBLE
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Call to Action */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-[#C5A880] hover:bg-[#d8bc93] text-black font-sans-clean text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Consult Private Wealth Advisory</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
