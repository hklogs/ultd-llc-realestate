export type PropertyType = 'Single Family' | 'Estate' | 'Waterfront' | 'Farm & Ranch' | 'Modern';
export type PropertyStatus = 'Active' | 'Pending';

export interface Property {
  id: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
}

export interface ValuePillar {
  title: string;
  value: string;
  description: string;
}

export interface Executive {
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string[];
  specialties?: string[];
  linkedin?: string;
}

export type ActivePage = 'home' | 'about' | 'services' | 'properties' | 'contact' | 'disclosures' | 'terms' | 'privacy' | 'legacy' | 'overview';
