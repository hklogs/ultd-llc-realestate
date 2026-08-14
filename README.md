# ULTD LLC — Texas Real Estate Brokerage

Ultra-premium, cinematic real estate brokerage website for ULTD LLC. Bespoke residential & commercial brokerage services across Texas, led by designated broker Pat Patton.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Motion (Framer Motion) + GSAP scroll-driven animations
- Leaflet / react-leaflet spatial coverage map
- Lenis smooth scrolling + custom ScrollStack showcase

## Run Locally

Prerequisites: Node.js

```bash
npm install
npm run dev        # serves at http://localhost:3000
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serves the production build
```

## Project Structure

- `src/App.tsx` — single-page app shell with animated page switching (home, about, services, properties, contact, disclosures)
- `src/components/Hero.tsx` — scroll-scrubbed cinematic hero driven by canvas frames in `public/assets/hero/frames/`
- `src/data.ts` — properties, services, executives, and market coverage data
- `src/components/` — Navbar, Narrative, Analytics, Showcase, MapSection, ContactSection, PropertiesHub, AboutView, ServicesView, DisclosuresSection
