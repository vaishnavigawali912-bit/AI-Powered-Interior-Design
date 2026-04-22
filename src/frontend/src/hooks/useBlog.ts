import type { BlogPost } from "@/types";
import { useQuery } from "@tanstack/react-query";

const DEMO_POSTS: BlogPost[] = [
  {
    id: 1n,
    title: "10 Small Living Room Ideas That Feel Anything But Cramped",
    slug: "small-living-room-ideas-usa",
    excerpt:
      "Discover how top US interior designers make small living rooms feel expansive, luxurious, and deeply personal — without blowing the budget.",
    category: "Design Ideas",
    featuredImageUrl: "/assets/generated/blog-1.dim_800x500.jpg",
    body: "",
    author: "Sophia Reeves",
    publishedAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 3),
    readTimeMinutes: 6n,
    tags: ["living room", "small spaces", "USA", "budget design"],
  },
  {
    id: 2n,
    title: "Studio Apartment Ideas: Luxury on a Budget in NYC",
    slug: "studio-apartment-ideas-nyc",
    excerpt:
      "NYC apartments are notoriously tiny. We interviewed 5 designers on how they create luxury living in under 400 sq ft — and the results are stunning.",
    category: "Studio Living",
    featuredImageUrl: "/assets/generated/blog-2.dim_800x500.jpg",
    body: "",
    author: "Marcus Laine",
    publishedAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 7),
    readTimeMinutes: 8n,
    tags: ["studio apartment", "NYC", "luxury", "small spaces"],
  },
  {
    id: 3n,
    title: "The Japandi Guide: Why This Style Dominates Small Spaces in 2026",
    slug: "japandi-design-guide-small-spaces",
    excerpt:
      "Japandi — the Japanese-Scandinavian fusion — is the ultimate small-space design philosophy. Here's why it works and how to get the look.",
    category: "Design Styles",
    featuredImageUrl: "/assets/generated/blog-3.dim_800x500.jpg",
    body: "",
    author: "Yuki Tanaka",
    publishedAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 14),
    readTimeMinutes: 5n,
    tags: ["japandi", "design style", "minimalism", "2026 trends"],
  },
  {
    id: 4n,
    title: "Best Furniture for Small Spaces: Our 2026 Top Picks",
    slug: "best-furniture-small-spaces-2026",
    excerpt:
      "Multi-functional, space-saving, and genuinely beautiful — we've curated the top furniture pieces for small US apartments this year.",
    category: "Shopping Guides",
    featuredImageUrl: "/assets/generated/blog-1.dim_800x500.jpg",
    body: "",
    author: "Sophia Reeves",
    publishedAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 21),
    readTimeMinutes: 7n,
    tags: ["furniture", "shopping", "small spaces", "affiliate"],
  },
  {
    id: 5n,
    title: "How to Zone an Open-Plan Studio Without Walls",
    slug: "zone-open-plan-studio-no-walls",
    excerpt:
      "From rugs and lighting to furniture arrangement, learn the interior design secrets to creating distinct zones in a single-room apartment.",
    category: "Studio Living",
    featuredImageUrl: "/assets/generated/blog-2.dim_800x500.jpg",
    body: "",
    author: "Marcus Laine",
    publishedAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 28),
    readTimeMinutes: 6n,
    tags: ["open plan", "studio", "zoning", "interior design tips"],
  },
  {
    id: 6n,
    title: "Color Palettes That Make Small Rooms Look Bigger",
    slug: "color-palettes-small-rooms-look-bigger",
    excerpt:
      "Paint choices can make or break a small room. We explore the proven palettes — from warm whites to deep moody hues — that create visual spaciousness.",
    category: "Color & Style",
    featuredImageUrl: "/assets/generated/blog-3.dim_800x500.jpg",
    body: "",
    author: "Yuki Tanaka",
    publishedAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 35),
    readTimeMinutes: 4n,
    tags: ["color", "paint", "small rooms", "design tips"],
  },
];

export function useFeaturedBlogPosts(limit = 3) {
  return useQuery<BlogPost[]>({
    queryKey: ["blog", "featured", limit],
    queryFn: async () => DEMO_POSTS.slice(0, limit),
  });
}

export function useBlogPostsByCategory(
  category: string,
  page = 1,
  pageSize = 6,
) {
  return useQuery<BlogPost[]>({
    queryKey: ["blog", "category", category, page, pageSize],
    queryFn: async () => {
      const filtered =
        category === "All"
          ? DEMO_POSTS
          : DEMO_POSTS.filter((p) => p.category === category);
      const start = (page - 1) * pageSize;
      return filtered.slice(start, start + pageSize);
    },
  });
}

export function useBlogPostBySlug(slug: string) {
  return useQuery<BlogPost | null>({
    queryKey: ["blog", "slug", slug],
    queryFn: async () => DEMO_POSTS.find((p) => p.slug === slug) ?? null,
    enabled: !!slug,
  });
}

export function useRelatedBlogPosts(
  category: string,
  excludeId: bigint,
  limit = 3,
) {
  return useQuery<BlogPost[]>({
    queryKey: ["blog", "related", category, excludeId.toString(), limit],
    queryFn: async () =>
      DEMO_POSTS.filter(
        (p) => p.category === category && p.id !== excludeId,
      ).slice(0, limit),
  });
}

export const BLOG_CATEGORIES = [
  "All",
  "Design Ideas",
  "Studio Living",
  "Design Styles",
  "Shopping Guides",
  "Color & Style",
];
