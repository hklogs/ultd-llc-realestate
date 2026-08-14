import { Property, Service, ValuePillar, Executive } from './types';

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: 'TREC Regulated',
    value: '0594267',
    description: 'Fully licensed and state-regulated Texas real estate brokerage ensuring absolute transactional compliance and consumer safety.',
  },
  {
    title: 'Years of Clout',
    value: '50+',
    description: 'Bespoke real estate counsel built on five decades of industry leadership, market cycles experience, and trusted advocacy since 1975.',
  },
  {
    title: 'Nexxy Powered',
    value: 'Digital',
    description: 'Cutting-edge digital tools and marketing strategies powered by the Nexxy Team to amplify exposure and maximize target outreach.',
  },
  {
    title: 'Availability',
    value: '24/7',
    description: 'Always responsive, client-first representation. Elite accessibility for high-net-worth individuals and corporate partners.',
  },
  {
    title: 'Audit Ready',
    value: '100%',
    description: 'Transparent and legal operations with deep regulatory compliance, keeping every transaction pristine, safe, and legally compliant.',
  },
  {
    title: 'Advocacy',
    value: 'Focused',
    description: 'Personalized boutique representation where you work directly with veteran brokers, never delegated to junior agents.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'buyer-rep',
    title: 'Buyer Representation',
    shortDesc: 'Off-market asset sourcing, micro-market analysis, and aggressive contract positioning from search to closing.',
    longDesc: 'Off-market asset sourcing, micro-market analysis, and aggressive contract positioning from search to closing.',
    features: [
      'Bespoke off-market asset sourcing and private collection searches',
      'Exhaustive historical value analysis and micro-market comparisons',
      'Aggressive contract positioning and tactical purchase strategy'
    ]
  },
  {
    id: 'seller-rep',
    title: 'Seller Representation',
    shortDesc: 'Architectural staging, editorial media production, and targeted global syndication to maximize asset valuation.',
    longDesc: 'Architectural staging, editorial media production, and targeted global syndication to maximize asset valuation.',
    features: [
      'Comprehensive comparative market valuation and positioning strategy',
      'Architectural styling, staging design, and space refinement advisory',
      'Ultra-high-definition editorial media and global syndication'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Real Estate',
    shortDesc: 'Underwriting, IRR forecasting, strategic lease negotiation, and complex 1031 exchange execution.',
    longDesc: 'Underwriting, IRR forecasting, strategic lease negotiation, and complex 1031 exchange execution.',
    features: [
      'Investment underwriting, cash flow modeling, and IRR forecasting',
      'Strategic tenant representation and institutional lease negotiation',
      'Complex tax-advantaged 1031 exchange planning and execution'
    ]
  },
  {
    id: 'property-mgmt',
    title: 'Property Management',
    shortDesc: 'Capital preservation, rigorous tenant screening, automated reporting, and 24/7 facility oversight.',
    longDesc: 'Capital preservation, rigorous tenant screening, automated reporting, and 24/7 facility oversight.',
    features: [
      'Rigorous background check, credit history, and asset screening',
      'Automated rent collection, accounting portals, and direct distributions',
      '24/7 urgent maintenance dispatch and vetted vendor relationships'
    ]
  },
  {
    id: 'investment',
    title: 'Investment Advisory',
    shortDesc: 'Portfolio yield modeling, risk-adjusted capital allocation, and long-term exit strategy planning.',
    longDesc: 'Portfolio yield modeling, risk-adjusted capital allocation, and long-term exit strategy planning.',
    features: [
      'Bespoke ROI/cap-rate modeling and risk-adjusted yield analyses',
      'Strategic geographic diversification across high-growth Texas corridors',
      'Long-term capital gains strategy and exit-timing counsel'
    ]
  },
  {
    id: 'financing',
    title: 'Mortgage & Financing',
    shortDesc: 'Capital placement and seamless debt structuring via our licensed affiliate, Europa Financing LLC (NMLS #607611).',
    longDesc: 'Capital placement and seamless debt structuring via our licensed affiliate, Europa Financing LLC (NMLS #607611).',
    features: [
      'Pre-qualification modeling and instant lender-backed pre-approvals',
      'Commercial debt placement and mezzanine bridge-loan structuring',
      'Construction-to-permanent financing for custom developments'
    ]
  }
];


export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    type: 'Single Family',
    status: 'Active',
    price: 3850000,
    address: '1250 Barton Creek Blvd, Austin, TX 78735',
    beds: 5,
    baths: 6,
    sqft: 8500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: 'A spectacular hillside residence overlooking Barton Creek. Features sprawling limestone terraces, custom-crafted steel-frame windows, a private infinity-edge pool, and bespoke interior cabinetry designed for effortless indoor-outdoor entertainment.'
  },
  {
    id: 'prop-2',
    type: 'Estate',
    status: 'Active',
    price: 4200000,
    address: '8800 Scenic Brook Dr, Austin, TX 78736',
    beds: 6,
    baths: 7,
    sqft: 10200,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'An architectural private sanctuary nestled among towering heritage oaks. Highlights include an expansive primary wing with a private courtyard, a professional chef’s kitchen, a wine vault, and integrated smart-home automated environmental systems.'
  },
  {
    id: 'prop-3',
    type: 'Waterfront',
    status: 'Active',
    price: 7500000,
    address: '1800 Cypress Club Pointe, Austin, TX 78746',
    beds: 7,
    baths: 9,
    sqft: 14800,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A masterpiece of modernist glass and steel on the shores of Lake Austin. Features direct deep-water frontage, a two-slip covered boat dock, soaring 22-foot floor-to-ceiling glass walls, and automated shade curtains for breathtaking sunset views.'
  },
  {
    id: 'prop-4',
    type: 'Farm & Ranch',
    status: 'Active',
    price: 2650000,
    address: '3600 River Rd, Wimberley, TX 78676',
    beds: 4,
    baths: 4,
    sqft: 6200,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    description: 'An iconic Texas Hill Country equestrian ranch with Blanco River access. Features premium horse stables, a covered riding arena, a guest lodge, and expansive pastures perfect for luxury recreation, surrounded by pristine rolling terrain.'
  },
  {
    id: 'prop-5',
    type: 'Modern',
    status: 'Active',
    price: 5900000,
    address: '4200 Watersedge Cv, Austin, TX 78730',
    beds: 5,
    baths: 6,
    sqft: 9200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'A minimalist masterpiece combining raw concrete, custom copper accents, and solid white oak timbering. Designed by an award-winning architect to prioritize natural ambient lighting and capture seamless panoramic views of Lake Austin.'
  },
  {
    id: 'prop-6',
    type: 'Estate',
    status: 'Pending',
    price: 8750000,
    address: '8900 Exposition Blvd, Austin, TX 78703',
    beds: 8,
    baths: 10,
    sqft: 16500,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'A historic Tarrytown landmark estate reimagined with state-of-the-art luxuries. Features magnificent formal gardens, a private tennis court, detached dual-story guest quarters, and secure perimeter gating for maximum privacy.'
  },
  {
    id: 'prop-7',
    type: 'Single Family',
    status: 'Active',
    price: 2950000,
    address: '1402 West Avenue, Austin, TX 78701',
    beds: 4,
    baths: 4,
    sqft: 4800,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    description: 'An elegant downtown Austin urban sanctuary featuring custom steel entry doors, private plunge pool, rooftop deck with capital skyline views, and bespoke interior finishes throughout.'
  },
  {
    id: 'prop-8',
    type: 'Waterfront',
    status: 'Active',
    price: 9200000,
    address: '7200 Lake Travis Way, Austin, TX 78732',
    beds: 6,
    baths: 8,
    sqft: 12500,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    description: 'A cliffside architectural masterpiece commanding panoramic deep-water views over Lake Travis. Features an negative-edge infinity pool, private tram to dual-slip boat dock, and temperature-controlled wine cellar.'
  },
  {
    id: 'prop-9',
    type: 'Farm & Ranch',
    status: 'Active',
    price: 4850000,
    address: '1500 Old Ranch Rd 12, Wimberley, TX 78676',
    beds: 5,
    baths: 6,
    sqft: 8200,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: 'A 150-acre legacy Hill Country cattle and recreational ranch. Includes live creek water features, custom timber-frame principal residence, manager quarters, and fully equipped equestrian facilities.'
  },
  {
    id: 'prop-10',
    type: 'Modern',
    status: 'Active',
    price: 6400000,
    address: '3100 Turtle Creek Blvd, Dallas, TX 75219',
    beds: 4,
    baths: 5,
    sqft: 7100,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Ultra-luxurious modernist high-rise penthouse in Dallas Turtle Creek corridor. Boasts 360-degree skyline views, private elevator foyer, Italian marble kitchen, and wrap-around cantilevered terraces.'
  },
  {
    id: 'prop-11',
    type: 'Estate',
    status: 'Active',
    price: 11500000,
    address: '1000 River Oaks Blvd, Houston, TX 77019',
    beds: 7,
    baths: 10,
    sqft: 15200,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'A palatial River Oaks gated mansion situated on 3 acres of pristine grounds. Features grand dual staircases, subterranean 8-car garage, resort pool complex, and detached ballroom suite.'
  },
  {
    id: 'prop-12',
    type: 'Single Family',
    status: 'Active',
    price: 3450000,
    address: '510 Alamo Heights Pkwy, San Antonio, TX 78209',
    beds: 5,
    baths: 5,
    sqft: 5600,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'A classic San Antonio Alamo Heights estate combining historic Spanish revival architecture with modern luxury comforts, lush native courtyards, and detached cabana.'
  }
];


export const EXECUTIVES: Executive[] = [
  {
    name: 'Pat Patton',
    role: 'Designated Broker & Founder',
    image: '/pat.png',
    linkedin: 'https://www.linkedin.com/in/pat-pan-2a01254/',
    bio: 'With over five decades of elite real estate practice in Texas, Pat Patton brings an extraordinary depth of regulatory knowledge and transaction execution to ULTD LLC. Licensed as a broker since 1975, Pat’s corporate history includes senior sales leadership and marketing roles at global enterprises like Xerox, Procter & Gamble, and Pfizer. His teaching tenure includes lecturing at Huston-Tillotson University in Austin, TX, and Germany’s Hochschule Anhalt University. His rigorous academics include a Master of Science in International Marketing from the University of Greenwich, London (graduated with Distinction, 4.0 GPA), and a double Bachelor of Business Administration in Marketing and Management from the University of Texas at Austin. Pat holds multi-industry certifications, enabling him to navigate real estate, complex loan structuring, and commercial risk placement with unparalleled precision.',
    credentials: [
      'Designated Texas Real Estate Broker (License #0175549, Active since 1975)',
      'Licensed Georgia Real Estate Broker (GREC License #393350)',
      'Residential Mortgage Loan Originator (NMLS ID #215194)',
      'Europa Financing LLC #607611 attached to NMLS ID #215194',
      'Texas Licensed General Lines Insurance Agent (License #674792)',
      'Texas Licensed Life, Accident & Health Agent (License #1410621)',
      'Adjunct Faculty at Huston-Tillotson University (Austin, TX)',
      'Adjunct Faculty at Hochschule Anhalt University (Anhalt, Germany)'
    ],
    specialties: [
      'Commercial Acquisitions & Portfolio Dispositions',
      'Structured Project Financing & Mezzanine Debt',
      'Corporate Cost Segregation & Yield Optimization',
      'International M&A Advisory & Relocations'
    ]
  },
  {
    name: 'Andrea Pamintuan',
    role: 'International Program Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    bio: 'Andrea Pamintuan directs strategic programs and global initiatives that fuel organizational growth, international investor partnerships, and operational refinement. Drawing on her extensive background in specialty pharmacy operations, clinical healthcare networks, financial services, marketing strategy, and high-stakes CRM systems administration, Andrea is a specialist in process engineering and client relations. She manages multi-million dollar operational budgets, optimizes workflow structures, and leads technology-driven cross-functional partnerships. Her technical acumen coupled with her BSICT degree and executive presence ensures that ULTD LLC’s high-value international clientele experiences seamless, white-glove transaction management.',
    credentials: [
      'Bachelor of Science in Information and Communication Technology (BSICT)',
      'Certified Customer Relationship Management (CRM) Administrator',
      'Advanced Program & Portfolio Management Specialist',
      'Healthcare and Corporate Network Operations Director',
      'Cross-Border Mergers & Acquisitions Program Coordinator'
    ]
  }
];

export const MARKETS = [
  {
    name: 'Austin Metro',
    desc: 'The vibrant, high-tech core of Central Texas. Representing luxury downtown penthouses, historic central estates, and modern West Lake Hills sanctuaries.',
    tag: 'Primary Core',
    lat: 30.2672,
    lng: -97.7431
  },
  {
    name: 'Texas Hill Country',
    desc: 'Breathtaking rolling hills, majestic custom lakefront estates on Lake Travis, and legacy equestrian ranches surrounding Wimberley and Fredericksburg.',
    tag: 'Scenic & Legacy',
    lat: 30.3,
    lng: -98.9
  },
  {
    name: 'Dallas-Fort Worth',
    desc: 'The economic powerhouse. Providing expert advisory for urban corporate high-rises, sprawling suburban estates, and commercial real estate assets.',
    tag: 'Industrial & Suburbs',
    lat: 32.7767,
    lng: -96.7970
  },
  {
    name: 'Greater Houston',
    desc: 'Texas’ largest metropolitan market. Orchestrating dynamic commercial acquisitions, luxury urban corridors, and master-planned community investments.',
    tag: 'Port & Expansion',
    lat: 29.7604,
    lng: -95.3698
  },
  {
    name: 'San Antonio',
    desc: 'A historic, culturally rich, and highly resilient growth corridor, heavily supported by military medical hubs, tourism, and real estate demand.',
    tag: 'Culture & Medical',
    lat: 29.4241,
    lng: -98.4936
  },
  {
    name: 'Statewide Texas',
    desc: 'Providing full legal representation and professional brokerage consulting for raw land, investment portfolios, and 1031 exchanges in any Texas market.',
    tag: 'Statewide Reach',
    lat: 31.5,
    lng: -98.5
  }
];
