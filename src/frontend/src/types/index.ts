// ─── Frontend variant types (used by demo data in hooks) ─────────────────────

export type RoomType =
  | { StudioApartment: null }
  | { LivingRoom: null }
  | { Bedroom: null }
  | { Kitchen: null }
  | { Bathroom: null }
  | { HomeOffice: null }
  | { Dining: null };

export type DesignStyle =
  | { Modern: null }
  | { Scandinavian: null }
  | { Bohemian: null }
  | { Industrial: null }
  | { Japandi: null }
  | { Transitional: null }
  | { Coastal: null }
  | { Minimalist: null }
  | { Luxury: null }
  | { Eclectic: null };

export interface GalleryItem {
  id: bigint;
  title: string;
  roomType: RoomType;
  style: DesignStyle;
  beforeImageUrl: string;
  afterImageUrl: string;
  description: string;
  designTips: string[];
  relatedProductIds: bigint[];
}

export interface BlogPost {
  id: bigint;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featuredImageUrl: string;
  body: string;
  author: string;
  publishedAt: bigint;
  readTimeMinutes: bigint;
  tags: string[];
}

export type Timestamp = bigint;

// ─── Utility: human-readable labels ──────────────────────────────────────────

export function getRoomTypeLabel(rt: RoomType): string {
  if ("StudioApartment" in rt) return "Studio Apartment";
  if ("LivingRoom" in rt) return "Living Room";
  if ("Bedroom" in rt) return "Bedroom";
  if ("Kitchen" in rt) return "Kitchen";
  if ("Bathroom" in rt) return "Bathroom";
  if ("HomeOffice" in rt) return "Home Office";
  if ("Dining" in rt) return "Dining";
  return "Room";
}

export function getStyleLabel(style: DesignStyle): string {
  if ("Modern" in style) return "Modern";
  if ("Scandinavian" in style) return "Scandinavian";
  if ("Bohemian" in style) return "Bohemian";
  if ("Industrial" in style) return "Industrial";
  if ("Japandi" in style) return "Japandi";
  if ("Transitional" in style) return "Transitional";
  if ("Coastal" in style) return "Coastal";
  if ("Minimalist" in style) return "Minimalist";
  if ("Luxury" in style) return "Luxury";
  if ("Eclectic" in style) return "Eclectic";
  return "Style";
}

// ─── DesignResult — AI output (frontend-only for MVP) ─────────────────────────

export type DesignStyleLabel =
  | "Modern"
  | "Minimalist"
  | "Luxury"
  | "Eclectic"
  | "Scandinavian"
  | "Bohemian"
  | "Japandi"
  | "Industrial"
  | "Coastal"
  | "Transitional";

export type RoomTypeLabel =
  | "Studio Apartment"
  | "Living Room"
  | "Bedroom"
  | "Kitchen"
  | "Bathroom"
  | "Home Office"
  | "Dining";

export interface DesignResult {
  id: string;
  originalImageUrl: string;
  generatedImageUrl: string;
  style: DesignStyleLabel;
  roomType: RoomTypeLabel;
  prompt: string;
  createdAt: number;
}
