import type { backendInterface, BlogPost, BlogPage, GalleryItem, DesignResult } from "../backend.d";
import { DesignStyle, RoomType } from "../backend.d";

const sampleBlogPost: BlogPost = {
  id: BigInt(1),
  title: "10 Small Space Design Tricks That Make Any Room Feel Bigger",
  body: "Transform your compact living space with these expert-approved design strategies...",
  slug: "small-space-design-tricks",
  tags: ["small space", "interior design", "tips"],
  publishedAt: BigInt(Date.now()),
  author: "Design Team",
  featuredImageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
  excerpt: "Transform your compact living space with these expert-approved design strategies that maximize style and function.",
  category: "Tips & Tricks",
  readTimeMinutes: BigInt(5),
};

const sampleBlogPost2: BlogPost = {
  id: BigInt(2),
  title: "Studio Apartment Ideas: Luxury on a Budget",
  body: "Creating a luxurious studio apartment doesn't require a massive budget...",
  slug: "studio-apartment-luxury-budget",
  tags: ["studio", "budget", "luxury"],
  publishedAt: BigInt(Date.now() - 86400000),
  author: "Design Team",
  featuredImageUrl: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800",
  excerpt: "Creating a luxurious studio apartment doesn't require a massive budget — just the right design choices.",
  category: "Studio Apartments",
  readTimeMinutes: BigInt(7),
};

const sampleGalleryItem: GalleryItem = {
  id: BigInt(1),
  title: "Modern Studio Transformation",
  afterImageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
  beforeImageUrl: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800",
  description: "A stunning transformation from cluttered studio to a sleek, modern living space.",
  style: DesignStyle.Modern,
  relatedProductIds: [],
  designTips: ["Use mirrors to create depth", "Opt for multi-functional furniture", "Stick to a neutral palette"],
  roomType: RoomType.Studio,
};

const sampleGalleryItem2: GalleryItem = {
  id: BigInt(2),
  title: "Minimalist Bedroom Redesign",
  afterImageUrl: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800",
  beforeImageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  description: "A minimalist bedroom transformation that brings calm and sophistication.",
  style: DesignStyle.Minimalist,
  relatedProductIds: [],
  designTips: ["Less is more", "Choose quality over quantity", "Natural light is key"],
  roomType: RoomType.Bedroom,
};

const sampleDesignResult: DesignResult = {
  id: BigInt(1),
  shareUrl: "https://example.com/share/design-1",
  createdAt: BigInt(Date.now()),
  selectedStyle: "Modern",
  imageKey: "design-1-image",
};

export const mockBackend: backendInterface = {
  getBlogPostBySlug: async (slug: string) => {
    if (slug === sampleBlogPost.slug) return sampleBlogPost;
    return sampleBlogPost2;
  },
  getFeaturedBlogPosts: async (_limit: bigint) => [sampleBlogPost, sampleBlogPost2],
  getGalleryItem: async (id: bigint) => {
    if (id === BigInt(1)) return sampleGalleryItem;
    return sampleGalleryItem2;
  },
  getRelatedBlogPosts: async (_category: string, _excludeId: bigint, _limit: bigint) => [sampleBlogPost2],
  listBlogPostsByCategory: async (_category: string, page: bigint, pageSize: bigint): Promise<BlogPage> => ({
    total: BigInt(2),
    page,
    pageSize,
    posts: [sampleBlogPost, sampleBlogPost2],
  }),
  listGalleryItems: async (_roomType, _style) => [sampleGalleryItem, sampleGalleryItem2],
  listMyDesigns: async () => [sampleDesignResult],
  saveDesign: async (imageKey: string, selectedStyle: string): Promise<DesignResult> => ({
    id: BigInt(Date.now()),
    shareUrl: undefined,
    createdAt: BigInt(Date.now()),
    selectedStyle,
    imageKey,
  }),
};
