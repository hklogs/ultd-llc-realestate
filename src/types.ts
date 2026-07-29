export interface PropertyListing {
  id: string;
  title: string;
  subTitle: string;
  location: string;
  areaDistrict: string;
  priceAed: number;
  priceUsd: number;
  type: 'Sky Penthouse' | 'Beachfront Villa' | 'Desert Estate' | 'Private Island';
  floorLevel: string;
  builtUpAreaSqFt: number;
  bedrooms: number;
  bathrooms: number;
  heroImage: string;
  gallery: string[];
  tag: string;
  status: 'Available' | 'Under Offer' | 'Off-Market Discretionary';
  architect: string;
  completionYear: string;
  coordinates: string;
  description: string;
  features: string[];
}

export interface ManifestoPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  searchQuery: string;
  sortBy: 'price-desc' | 'price-asc' | 'area-desc';
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: 'WhatsApp' | 'Email' | 'Private Call';
  propertyOfInterest?: string;
  inquiryType: 'Acquisition' | 'Discreet Sale' | 'Portfolio Management' | 'Private Dossier';
  budgetBand: string;
  notes: string;
}
