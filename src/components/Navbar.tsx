import { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  onChangePage: (page: ActivePage) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ activePage, onChangePage, theme, toggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    if (activePage !== 'home') return;
    const checkSection = () => {
      const viewportCenter = window.innerHeight / 2;
      const sectionIds = ["overview", "legacy", "services", "properties-section", "philosophy", "location", "contact-section"];
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setActiveSection(id.replace('-section', ''));
        }
      });
    };
    checkSection();
    window.addEventListener('scroll', checkSection, { passive: true });
    return () => window.removeEventListener('scroll', checkSection);
  }, [activePage]);

  const isFrameSection = activePage === 'home' && (activeSection === 'overview' || activeSection === 'philosophy');

  const handleLogoClick = () => {
    if (activePage !== 'home') {
      onChangePage('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks: { label: string; page: ActivePage | 'legacy' }[] = [
    { label: 'OVERVIEW', page: 'home' },
    { label: 'LEGACY', page: 'legacy' },
    { label: 'SERVICES', page: 'services' },
    { label: 'PORTFOLIO', page: 'properties' },
    { label: 'CONTACT', page: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full px-4 sm:px-8 md:px-12 py-3 sm:py-5 flex justify-between items-center z-[1000] select-none transition-all duration-300 ${
        activePage === 'home'
          ? 'bg-transparent border-none backdrop-blur-none'
          : 'bg-[#101114]/95 border-b border-white/10 backdrop-blur-md'
      }`}
      id="main-navbar"
    >

      {/* Raw, Unboxed, Clean Logo Text (Hidden in Overview & Philosophy when frames play) */}
      <div 
        onClick={handleLogoClick}
        style={{
          opacity: isFrameSection ? 0 : 1,
          pointerEvents: isFrameSection ? 'none' : 'auto',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          transform: isFrameSection ? 'translateY(-10px)' : 'translateY(0)',
        }}
        className="flex flex-col cursor-pointer group"
        id="nav-logo"
      >
        <span className="font-display font-semibold text-sm sm:text-base md:text-lg tracking-widest leading-none text-[#F4F4F6] group-hover:text-[#C5A059] transition-colors duration-300">
          ULTD LLC
        </span>
        <span className="font-mono text-[7px] sm:text-[8px] font-bold tracking-[0.2em] text-[#C5A059] mt-0.5 sm:mt-1 uppercase">
          TEXAS REAL ESTATE
        </span>
      </div>

      {/* Pure Stealth Borderless Text Navigation */}
      <nav className="flex items-center space-x-3 sm:space-x-6 md:space-x-8 overflow-x-auto no-scrollbar">
        {navLinks.map((link) => {
          const isActive = activePage === link.page || (link.page === 'legacy' && activePage === 'home');
          return (
            <button
              key={link.label}
              onClick={(e) => {
                e.preventDefault();
                onChangePage(link.page as ActivePage);
              }}
              className={`font-mono text-[10px] sm:text-xs font-medium cursor-pointer bg-transparent border-none p-0 tracking-wider sm:tracking-widest uppercase active:scale-95 transition-all whitespace-nowrap ${
                isActive ? 'text-[#C5A059] font-bold' : 'text-white/60 hover:text-[#C5A059]'
              }`}
              id={`nav-item-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          );
        })}

        {/* Theme Toggle Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleTheme();
          }}
          className="text-white/60 hover:text-[#C5A059] transition-colors cursor-pointer bg-transparent border-none p-1 flex items-center justify-center active:scale-95"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          id="theme-toggle-btn"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </nav>
    </header>
  );
}
