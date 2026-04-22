import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { BLOG_CATEGORIES, useFeaturedBlogPosts } from "@/hooks/useBlog";
import type { BlogPost } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { useState } from "react";

function formatDate(ts: bigint): string {
  return new Date(Number(ts)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function FeaturedPostHero({ post }: { post: BlogPost }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group block"
      data-ocid="blog.featured.hero"
    >
      <article className="relative rounded-3xl overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-xl transition-smooth">
        <div className="aspect-[16/7] md:aspect-[21/9] bg-muted overflow-hidden">
          <img
            src={post.featuredImageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-smooth duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/assets/images/placeholder.svg";
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <Badge className="mb-3 bg-primary/90 text-primary-foreground text-xs uppercase tracking-wider">
            {post.category}
          </Badge>
          <h2 className="font-display text-2xl md:text-4xl text-white leading-snug mb-3 group-hover:text-primary-foreground/90 transition-smooth line-clamp-2">
            {post.title}
          </h2>
          <p className="text-white/75 text-sm md:text-base line-clamp-2 mb-4 max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {Number(post.readTimeMinutes)} min read
            </span>
          </div>
        </div>
        {/* Read more chip */}
        <div className="absolute top-5 right-5 glass-effect rounded-full px-4 py-2 text-xs font-semibold text-foreground flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-smooth">
          Read Article <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </article>
    </Link>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group block h-full"
      data-ocid={`blog.item.${index}`}
    >
      <article className="rounded-2xl overflow-hidden bg-card border border-border/40 shadow-sm hover:shadow-lg transition-smooth h-full flex flex-col">
        <div className="aspect-[16/9] bg-muted overflow-hidden">
          <img
            src={post.featuredImageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/assets/images/placeholder.svg";
            }}
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 inline-block">
            {post.category}
          </span>
          <h2 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2 text-base flex-1">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/30 pt-3 mt-auto">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {Number(post.readTimeMinutes)} min read
            </span>
          </div>
        </div>
        <div className="px-5 pb-4">
          <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-smooth">
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}

function GridSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      data-ocid="blog.loading_state"
    >
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-2xl overflow-hidden">
          <Skeleton className="aspect-video w-full" />
          <div className="p-5 space-y-2">
            <Skeleton className="h-3 w-1/4" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: allPosts, isLoading } = useFeaturedBlogPosts(6);

  const filtered =
    activeCategory === "All"
      ? (allPosts ?? [])
      : (allPosts ?? []).filter((p) => p.category === activeCategory);

  const featuredPost = filtered[0];
  const gridPosts = filtered.slice(1);

  return (
    <>
      <SEOHead
        title="Small Space Interior Design Blog | Tips & Inspiration USA"
        description="Expert interior design articles for small spaces in the USA. Studio apartment ideas, design style guides, furniture recommendations, and color inspiration."
        canonical="/blog"
      />

      {/* Page header */}
      <section
        className="bg-card border-b border-border/40 py-14"
        data-ocid="blog.header.section"
      >
        <div className="container">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Design Journal
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
            Small Space Design Ideas
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Expert guides, style breakdowns, and practical ideas for small-space
            living across the USA. Updated weekly.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section
        className="bg-muted/20 border-b border-border/30 py-4 sticky top-16 z-40 backdrop-blur-sm"
        data-ocid="blog.categories.section"
      >
        <div className="container">
          <div
            className="flex gap-2 flex-wrap"
            role="tablist"
            aria-label="Filter by category"
          >
            {BLOG_CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-smooth border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                data-ocid={`blog.category.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}.tab`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-12" data-ocid="blog.grid.section">
        <div className="container">
          {isLoading ? (
            <div className="space-y-8">
              <Skeleton
                className="aspect-[21/9] rounded-3xl w-full"
                data-ocid="blog.hero.loading_state"
              />
              <GridSkeleton />
            </div>
          ) : !filtered.length ? (
            <div className="text-center py-24" data-ocid="blog.empty_state">
              <p className="text-4xl mb-4">📝</p>
              <h3 className="font-semibold text-foreground mb-2 text-lg">
                No articles in this category yet
              </h3>
              <p className="text-muted-foreground">
                Check back soon — new articles are published weekly.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-5 text-sm text-primary font-medium hover:underline"
              >
                View all articles
              </button>
            </div>
          ) : (
            <div className="space-y-10 fade-in">
              {/* Featured hero post */}
              {featuredPost && <FeaturedPostHero post={featuredPost} />}

              {/* Grid of remaining posts */}
              {gridPosts.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-6">
                    {activeCategory === "All"
                      ? "More Articles"
                      : activeCategory}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {gridPosts.map((post, i) => (
                      <PostCard
                        key={post.id.toString()}
                        post={post}
                        index={i + 2}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
