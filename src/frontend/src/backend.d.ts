import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    title: string;
    body: string;
    slug: string;
    tags: Array<string>;
    publishedAt: Timestamp;
    author: string;
    featuredImageUrl: string;
    excerpt: string;
    category: string;
    readTimeMinutes: bigint;
}
export type Timestamp = bigint;
export interface BlogPage {
    total: bigint;
    page: bigint;
    pageSize: bigint;
    posts: Array<BlogPost>;
}
export interface GalleryItem {
    id: bigint;
    title: string;
    afterImageUrl: string;
    beforeImageUrl: string;
    description: string;
    style: DesignStyle;
    relatedProductIds: Array<bigint>;
    designTips: Array<string>;
    roomType: RoomType;
}
export interface DesignResult {
    id: DesignId;
    shareUrl?: string;
    createdAt: Timestamp;
    selectedStyle: string;
    imageKey: string;
}
export type DesignId = bigint;
export enum DesignStyle {
    Luxury = "Luxury",
    Eclectic = "Eclectic",
    Minimalist = "Minimalist",
    Modern = "Modern"
}
export enum RoomType {
    Kitchen = "Kitchen",
    Studio = "Studio",
    LivingRoom = "LivingRoom",
    Bedroom = "Bedroom"
}
export interface backendInterface {
    getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
    getFeaturedBlogPosts(limit: bigint): Promise<Array<BlogPost>>;
    getGalleryItem(id: bigint): Promise<GalleryItem | null>;
    getRelatedBlogPosts(category: string, excludeId: bigint, limit: bigint): Promise<Array<BlogPost>>;
    listBlogPostsByCategory(category: string, page: bigint, pageSize: bigint): Promise<BlogPage>;
    listGalleryItems(roomType: RoomType | null, style: DesignStyle | null): Promise<Array<GalleryItem>>;
    listMyDesigns(): Promise<Array<DesignResult>>;
    saveDesign(imageKey: string, selectedStyle: string): Promise<DesignResult>;
}
