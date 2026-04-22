import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPostBySlug, useRelatedBlogPosts } from "@/hooks/useBlog";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  User,
} from "lucide-react";
import { useEffect } from "react";

function formatDate(ts: bigint): string {
  return new Date(Number(ts)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function PostSkeleton() {
  return (
    <div
      className="container py-12 max-w-3xl mx-auto space-y-6"
      data-ocid="blog_post.loading_state"
    >
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="h-5 w-1/2" />
      <Skeleton className="aspect-video rounded-2xl" />
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
    </div>
  );
}

// Renders a body string with markdown-like syntax into React elements
function renderInlineParts(line: string) {
  const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      const text = part.replace(/\*\*/g, "");
      return <strong key={text}>{text}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const isInternal = linkMatch[2].startsWith("/");
      return isInternal ? (
        <Link
          key={linkMatch[2]}
          to={linkMatch[2] as "/gallery"}
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-smooth"
        >
          {linkMatch[1]}
        </Link>
      ) : (
        <a
          key={linkMatch[2]}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-smooth"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

function BodyRenderer({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div
      className="space-y-5 font-body text-foreground/90 leading-relaxed"
      data-ocid="blog_post.body"
    >
      {blocks.map((block) => {
        const blockKey = block.slice(0, 60);
        // H2: ## Heading
        if (block.startsWith("## ")) {
          const text = block.replace(/^## /, "");
          return (
            <h2
              key={blockKey}
              className="font-display text-2xl text-foreground mt-10 mb-3 leading-tight"
            >
              {text}
            </h2>
          );
        }
        // H3: ### Heading
        if (block.startsWith("### ")) {
          const text = block.replace(/^### /, "");
          return (
            <h3
              key={blockKey}
              className="font-semibold text-lg text-foreground mt-8 mb-2"
            >
              {text}
            </h3>
          );
        }
        // Legacy bold-only headings: **Heading**
        if (/^\*\*[^*]+\*\*$/.test(block.trim())) {
          const text = block.replace(/\*\*/g, "").trim();
          return (
            <h2
              key={blockKey}
              className="font-display text-2xl text-foreground mt-10 mb-3 leading-tight"
            >
              {text}
            </h2>
          );
        }

        const lines = block.split("\n").filter(Boolean);
        if (lines.length === 1) {
          return (
            <p key={blockKey} className="text-foreground/85 leading-relaxed">
              {renderInlineParts(lines[0])}
            </p>
          );
        }
        return (
          <div key={blockKey} className="space-y-1">
            {lines.map((line) => (
              <p
                key={line.slice(0, 60)}
                className="text-foreground/85 leading-relaxed"
              >
                {renderInlineParts(line)}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// Sample rich article body with gallery internal link
const SAMPLE_BODY = `## Small Spaces Can Feel Luxurious

Small spaces don't have to mean small style. The secret lies not in how much space you have, but in how intentionally you design it. Explore our [design gallery](/gallery) to see stunning real-world transformations across US homes.

## The Power of Vertical Space

Most small-space dwellers forget to look up. Vertical storage — tall bookshelves, wall-mounted cabinets, hanging plants — draws the eye upward and makes ceilings feel higher. In a studio apartment, a floor-to-ceiling shelving unit can store an entire home office worth of material while taking up less floor space than a desk.

## Light as a Design Element

Natural light is your most powerful ally in a small space. Keep windows unobstructed, use sheer curtains instead of blackout drapes, and position mirrors strategically to bounce light deeper into the room. A large mirror opposite a window can effectively double the perceived light in a room.

## The Right Furniture Scale

Scale is everything. Oversized furniture in a small space feels oppressive; undersized feels provisional. The sweet spot is mid-scale pieces — a sofa that seats three comfortably without dominating the room, a dining table that expands for guests but tucks away normally.

## Color Psychology for Small Spaces

Contrary to popular belief, dark colors can make small spaces feel more intimate and sophisticated, not smaller. The key is consistency — a monochromatic dark palette makes walls recede, while too many competing colors create visual noise that makes a space feel cramped.

## Multifunctional is Non-Negotiable

Every piece of furniture in a small space should ideally serve two purposes. A storage ottoman is a coffee table, footrest, and linen closet. A platform bed has built-in drawers. A bench at the foot of the bed is also extra seating. This isn't compromise — it's intelligent design.
`;

function JsonLd({
  title,
  description,
  author,
  publishedAt,
  imageUrl,
  slug,
}: {
  title: string;
  description: string;
  author: string;
  publishedAt: bigint;
  imageUrl: string;
  slug: string;
}) {
  useEffect(() => {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://example.com";
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      image: `${base}${imageUrl}`,
      author: { "@type": "Person", name: author },
      publisher: {
        "@type": "Organization",
        name: "AI Space Design",
        logo: {
          "@type": "ImageObject",
          url: `${base}/assets/images/og-image.jpg`,
        },
      },
      datePublished: new Date(Number(publishedAt)).toISOString(),
      mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/blog/${slug}` },
    };
    const id = "blog-post-jsonld";
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [title, description, author, publishedAt, imageUrl, slug]);

  return null;
}

export default function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const { data: post, isLoading } = useBlogPostBySlug(slug);
  const { data: related } = useRelatedBlogPosts(
    post?.category ?? "",
    post?.id ?? 0n,
    3,
  );

  if (isLoading) return <PostSkeleton />;

  if (!post) {
    return (
      <div
        className="container py-24 text-center"
        data-ocid="blog_post.error_state"
      >
        <p className="text-5xl mb-5">📝</p>
        <h2 className="font-semibold text-foreground text-xl mb-2">
          Article not found
        </h2>
        <p className="text-muted-foreground mb-6">
          This article may have been removed or the link is incorrect.
        </p>
        <Link to="/blog">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const bodyContent = post.body?.trim() ? post.body : SAMPLE_BODY;

  return (
    <>
      <SEOHead
        title={`${post.title} | AI Interior Design Blog`}
        description={post.excerpt}
        ogImage={post.featuredImageUrl}
        canonical={`/blog/${post.slug}`}
        type="article"
      />
      <JsonLd
        title={post.title}
        description={post.excerpt}
        author={post.author}
        publishedAt={post.publishedAt}
        imageUrl={post.featuredImageUrl}
        slug={post.slug}
      />

      {/* Breadcrumb nav */}
      <div
        className="bg-card border-b border-border/40 py-4"
        data-ocid="blog_post.breadcrumb"
      >
        <div className="container">
          <Link
            to="/blog"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth w-fit group"
            data-ocid="blog_post.back.link"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-smooth" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article header */}
      <section
        className="bg-background pt-12 pb-0"
        data-ocid="blog_post.hero.section"
      >
        <div className="container max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              {post.category}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author / meta bar */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-y border-border/40 py-4 mb-10">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {Number(post.readTimeMinutes)} min read
            </span>
          </div>

          {/* Featured image */}
          <div
            className="rounded-2xl overflow-hidden border border-border/40 mb-12 aspect-video bg-muted shadow-md"
            data-ocid="blog_post.featured_image"
          >
            <img
              src={post.featuredImageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
          </div>

          {/* Article body */}
          <BodyRenderer content={bodyContent} />

          {/* Internal CTA to gallery */}
          <div className="my-12 p-6 rounded-2xl bg-muted/50 border border-border/40 text-center">
            <p className="text-sm font-semibold text-foreground mb-2">
              Inspired? See Real Transformations
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Browse our before &amp; after gallery of AI-designed small spaces
              across the USA.
            </p>
            <Link to="/gallery">
              <Button
                variant="default"
                className="gap-2"
                data-ocid="blog_post.gallery.cta_button"
              >
                Explore Design Gallery <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div
              className="flex items-center gap-2 flex-wrap mt-8 pt-6 border-t border-border/40"
              data-ocid="blog_post.tags"
            >
              <Tag className="w-4 h-4 text-muted-foreground shrink-0" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground border border-border/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Back link */}
          <div className="mt-10 mb-4">
            <Link
              to="/blog"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth w-fit group"
              data-ocid="blog_post.back_bottom.link"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-smooth" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related && related.length > 0 && (
        <section
          className="bg-muted/30 border-t border-border/30 py-16"
          data-ocid="blog_post.related.section"
        >
          <div className="container">
            <h2 className="font-display text-3xl text-foreground mb-8">
              More in {post.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp, i) => (
                <Link
                  key={rp.id.toString()}
                  to="/blog/$slug"
                  params={{ slug: rp.slug }}
                  className="group block"
                  data-ocid={`blog_post.related.item.${i + 1}`}
                >
                  <div className="rounded-2xl overflow-hidden bg-card border border-border/40 hover:shadow-lg transition-smooth h-full flex flex-col">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={rp.featuredImageUrl}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/assets/images/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                        {rp.category}
                      </span>
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-smooth line-clamp-2 flex-1">
                        {rp.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-3 pt-2 border-t border-border/30">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(rp.publishedAt)}
                        </span>
                        <span className="text-primary font-medium flex items-center gap-1">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
