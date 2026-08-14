import { EXECUTIVES } from '../data';
import { ActivePage } from '../types';
import { ArrowLeft, Linkedin } from 'lucide-react';

interface LeadershipViewProps {
  onChangePage: (page: ActivePage) => void;
}

export default function LeadershipView({ onChangePage }: LeadershipViewProps) {
  return (
    <div 
      className="w-full bg-[#070709] text-[#F4F4F6] relative z-10 select-none" 
      id="leadership-view-page"
    >

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-16 space-y-10 relative z-10">
        
        {/* Top Back Navigation Button */}
        <button
          onClick={() => {
            if (window.location.hash) {
              history.pushState(null, '', window.location.pathname + window.location.search);
            }
            onChangePage('legacy');
          }}
          className="inline-flex items-center space-x-2 font-mono text-xs text-[#C5A059] font-bold hover:underline cursor-pointer tracking-wider uppercase mb-2 active:scale-95 transition-transform"
          id="leadership-return-home-btn"
        >
          <ArrowLeft size={14} />
          <span>RETURN TO LEGACY & LEADERSHIP</span>
        </button>

        {/* Minimalist Page Header */}
        <div className="border-b border-white/10 pb-6 space-y-2">
          <span className="font-mono text-[9px] text-[#C5A059] font-bold uppercase tracking-[0.25em] block">
            EXECUTIVE DOSSIERS
          </span>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl tracking-wide text-[#F4F4F6] uppercase leading-none">
            LEADERSHIP <span className="text-[#C5A059]">& ADVISORY</span>
          </h1>
        </div>

        {/* Minimal Executive Dossiers */}
        <div className="space-y-10">
          {EXECUTIVES.map((exec) => (
            <div
              key={exec.name}
              className="bg-[#101114] border border-white/10 p-6 sm:p-8 rounded-[2px] space-y-6"
              id={`dossier-${exec.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Header: Photo, Name, Role & LinkedIn */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 gap-6">
                <div className="flex items-center space-x-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden border border-white/10 bg-black/40">
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-1">
                    <h2 className="font-display font-semibold text-xl sm:text-3xl text-[#F4F4F6] uppercase leading-none">
                      {exec.name}
                    </h2>
                    <span className="font-mono text-xs text-[#C5A059] font-bold uppercase tracking-wider block pt-0.5">
                      {exec.role}
                    </span>
                  </div>
                </div>

                {exec.linkedin && (
                  <a
                    href={exec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-[#C5A059] hover:text-[#F4F4F6] hover:underline uppercase tracking-wider"
                  >
                    <Linkedin size={14} />
                    <span>LINKEDIN ↗</span>
                  </a>
                )}
              </div>

              {/* Bio */}
              <p className="font-sans text-xs sm:text-sm text-[#8E909A] leading-relaxed font-light">
                {exec.bio}
              </p>

              {/* Credentials & Qualifications */}
              {(exec.credentials || []).length > 0 && (
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <span className="font-mono text-[9px] text-[#C5A059] font-bold uppercase tracking-widest block">
                    QUALIFICATIONS:
                  </span>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-[#8E909A]">
                    {(exec.credentials || []).map((cred, credIdx) => (
                      <span key={credIdx} className="bg-[#08080A] border border-white/10 px-2.5 py-1 uppercase rounded-[2px]">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
