import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowUpRight, Menu, Globe, SlidersHorizontal, MapPin } from "lucide-react";
import { SAMPLE_PROPERTIES } from "../data/properties";
import { PropertyListing } from "../types";
import { PropertyDetailModal } from "./PropertyDetailModal";
import { PrivateVaultDrawer } from "./PrivateVaultDrawer";
import { ContactInquirySection } from "./ContactInquirySection";

gsap.registerPlugin(ScrollTrigger);

export default function FameEstateExact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const manifestoTextRef = useRef<HTMLHeadingElement>(null);
  const manifestoContainerRef = useRef<HTMLElement>(null);

  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [inquiryPropertyTitle, setInquiryPropertyTitle] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (propertyTitle?: string) => {
    setInquiryPropertyTitle(propertyTitle);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let splitInstance: SplitType | null = null;

    const ctx = gsap.context(() => {
      // 1. MANIFESTO WORD-BY-WORD LIGHTING ANIMATION
      if (manifestoTextRef.current) {
        splitInstance = new SplitType(manifestoTextRef.current, { types: "words" });

        gsap.fromTo(
          splitInstance.words,
          { color: "#222225", opacity: 0.3 },
          {
            color: "#FFFFFF",
            opacity: 1,
            stagger: 0.1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: manifestoContainerRef.current,
              start: "top 70%",
              end: "bottom 40%",
              scrub: 0.8,
            },
          }
        );
      }

      // 2. HERO SPLIT PINNING & DUAL TEXT TRANSITION
      if (heroRef.current) {
        const heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
          },
        });

        // Slide 1 fades out upward
        heroTimeline.to("#hero-slide-1", {
          opacity: 0,
          y: -40,
          duration: 1,
        });

        // Slide 2 fades in from below
        heroTimeline.fromTo(
          "#hero-slide-2",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "<0.2"
        );
      }
    });

    return () => {
      if (splitInstance) {
        splitInstance.revert();
      }
      ctx.revert();
    };
  }, []);

  const featuredListings = [
    {
      prop: SAMPLE_PROPERTIES[0],
      img: "/fameestate-01.webp",
      badge: "Off-Market",
      title: "The Palm Mansion",
      location: "Palm Jumeirah, Dubai",
      price: "AED 165,000,000",
    },
    {
      prop: SAMPLE_PROPERTIES[1],
      img: "/fameestate-02.webp",
      badge: "Exclusive",
      title: "Villa Monolith Aman",
      location: "Billionaires' Row, Palm Jumeirah",
      price: "AED 210,000,000",
    },
    {
      prop: SAMPLE_PROPERTIES[2],
      img: "/fameestate-03.webp",
      badge: "Off-Market",
      title: "The Dune Sanctuary",
      location: "Al Barari, Dubai",
      price: "AED 98,000,000",
    },
    {
      prop: SAMPLE_PROPERTIES[3],
      img: "/fameestate-04.webp",
      badge: "Crown Jewel",
      title: "Jumeirah Bay Black Diamond",
      location: "Jumeirah Bay Island, Dubai",
      price: "AED 280,000,000",
    },
  ];

  return (
    <div className="bg-[#0B0B0C] text-[#E5E5E5] selection:bg-white selection:text-black">
      
      {/* ─── FIXED NAVIGATION BAR ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 border-b border-white/[0.08] bg-[#0B0B0C]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-xl font-serif tracking-[0.2em] font-light uppercase text-white">
            FAME ESTATE
          </span>
          <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border border-white/20 text-gray-400">
            DUBAI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-gray-400">
          <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Residences</a>
          <button 
            onClick={() => setIsVaultOpen(true)}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <SlidersHorizontal size={12} className="text-[#C5A880]" />
            <span>Vault & Yield</span>
          </button>
          <a href="#contact" className="hover:text-white transition-colors">Inquire</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleOpenInquiry()}
            className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <span>Private Access</span>
            <ArrowUpRight size={14} />
          </button>
          <button 
            onClick={() => setIsVaultOpen(true)}
            className="md:hidden text-white p-1"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION: PINNED PINCH SCREEN ─── */}
      <section ref={heroRef} className="relative h-screen w-full pt-24 overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full w-full">
          
          {/* LEFT 50%: DUAL OVERLAPPING TEXT CONTENT */}
          <div className="w-full lg:w-1/2 h-full relative flex items-center px-8 md:px-16 z-20">
            
            {/* SLIDE 01 */}
            <div id="hero-slide-1" className="absolute max-w-xl space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
                Luxury Real Estate — Dubai
              </p>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] text-white font-light">
                Where lifestyle <br />
                <span className="italic font-normal">becomes legacy.</span>
              </h1>
              <p className="text-base text-gray-400 font-light max-w-md leading-relaxed">
                Exclusive real estate agency specializing in luxury residential and commercial properties that evoke emotion and give clients a new sense of self.
              </p>
            </div>

            {/* SLIDE 02 */}
            <div id="hero-slide-2" className="absolute max-w-xl space-y-6 opacity-0">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
                Architectural Sanctuaries
              </p>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.05] text-white font-light">
                Curated for <br />
                <span className="italic font-normal">unmatched distinction.</span>
              </h2>
              <p className="text-base text-gray-400 font-light max-w-md leading-relaxed">
                Seamlessly connecting global buyers with premier investments tailored to elegance, comfort, and financial success.
              </p>
            </div>

          </div>

          {/* RIGHT 50%: VIDEO / VISUAL MEDIA CONTAINER */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative p-4 lg:p-8">
            <div className="w-full h-full relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141416]">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/fameestate.webp"
                className="w-full h-full object-cover"
              >
                <source src="/fameestate.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-60 lg:opacity-30" />
            </div>
          </div>

        </div>
      </section>

      {/* ─── MANIFESTO SECTION: GSAP WORD GLOW ─── */}
      <section
        id="philosophy"
        ref={manifestoContainerRef}
        className="min-h-screen flex items-center justify-center px-8 md:px-20 py-32 border-y border-white/[0.08]"
      >
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8 font-medium">
            Agency Philosophy
          </p>
          <h2
            ref={manifestoTextRef}
            className="text-3xl md:text-6xl font-serif leading-[1.3] tracking-tight font-light text-[#222225]"
          >
            We sell real estate that evokes emotions and gives a new sense of self. From the very start, we’ve followed a philosophy of personal approach, no templates, and maximum involvement in every single project.
          </h2>
        </div>
      </section>

      {/* ─── FEATURED ASYMMETRICAL RESIDENCES GRID ─── */}
      <section id="portfolio" className="px-8 md:px-20 py-32 space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Portfolio</p>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-white">Featured Properties</h3>
          </div>
          <p className="text-sm text-gray-400 max-w-xs font-light">
            Selected off-market penthouses, villas, and beachfront architectural landmarks in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {featuredListings.map((item, idx) => (
            <div
              key={item.prop.id}
              onClick={() => setSelectedProperty(item.prop)}
              className={`group space-y-6 cursor-pointer ${idx % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-[#141416] border border-white/[0.08]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 backdrop-blur-md bg-black/40 px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest text-white">
                  {item.badge}
                </div>
              </div>
              <div className="flex justify-between items-start pt-2">
                <div>
                  <h4 className="text-2xl font-serif text-white group-hover:text-gray-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                    {item.location}
                  </p>
                </div>
                <p className="text-lg font-serif text-white">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT INQUIRY SECTION ─── */}
      <ContactInquirySection initialPropertyTitle={inquiryPropertyTitle} />

      {/* ─── FOOTER & CONTACT ─── */}
      <footer className="px-8 md:px-20 py-24 border-t border-white/[0.08] flex flex-col items-center text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-serif font-light text-white max-w-3xl leading-tight">
          Begin your journey to elevated living.
        </h2>
        <button
          onClick={() => handleOpenInquiry()}
          className="px-10 py-5 bg-white text-black text-xs uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Schedule Private Consultation
        </button>
        <p className="text-xs uppercase tracking-widest text-gray-600 pt-12">
          © {new Date().getFullYear()} Fame Estate Dubai. All Rights Reserved.
        </p>
      </footer>

      {/* ─── PROPERTY DETAIL MODAL ─── */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onOpenInquiry={(title) => handleOpenInquiry(title)}
      />

      {/* ─── PRIVATE VAULT DRAWER ─── */}
      <PrivateVaultDrawer
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

    </div>
  );
}
