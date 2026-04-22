import { c as createLucideIcon, e as useParams, j as jsxRuntimeExports, L as Link, B as Button, d as Skeleton, r as reactExports } from "./index-BM5VdnwD.js";
import { S as SEOHead } from "./SEOHead-CJeWf9wx.js";
import { a as useBlogPostBySlug, b as useRelatedBlogPosts } from "./useBlog-CMXvW-OQ.js";
import { A as ArrowLeft } from "./arrow-left-2z_LulCk.js";
import { U as User, C as Calendar, a as Clock } from "./user-DmQb6Srx.js";
import { A as ArrowRight } from "./arrow-right-BqfckFjU.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function formatDate(ts) {
  return new Date(Number(ts)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function PostSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "container py-12 max-w-3xl mx-auto space-y-6",
      "data-ocid": "blog_post.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-video rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }, i)) })
      ]
    }
  );
}
function renderInlineParts(line) {
  const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      const text = part.replace(/\*\*/g, "");
      return /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: text }, text);
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const isInternal = linkMatch[2].startsWith("/");
      return isInternal ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: linkMatch[2],
          className: "text-primary underline underline-offset-2 hover:text-primary/80 transition-smooth",
          children: linkMatch[1]
        },
        linkMatch[2]
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: linkMatch[2],
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-primary underline underline-offset-2 hover:text-primary/80 transition-smooth",
          children: linkMatch[1]
        },
        linkMatch[2]
      );
    }
    return part;
  });
}
function BodyRenderer({ content }) {
  const blocks = content.trim().split(/\n\n+/);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "space-y-5 font-body text-foreground/90 leading-relaxed",
      "data-ocid": "blog_post.body",
      children: blocks.map((block) => {
        const blockKey = block.slice(0, 60);
        if (block.startsWith("## ")) {
          const text = block.replace(/^## /, "");
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl text-foreground mt-10 mb-3 leading-tight",
              children: text
            },
            blockKey
          );
        }
        if (block.startsWith("### ")) {
          const text = block.replace(/^### /, "");
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-semibold text-lg text-foreground mt-8 mb-2",
              children: text
            },
            blockKey
          );
        }
        if (/^\*\*[^*]+\*\*$/.test(block.trim())) {
          const text = block.replace(/\*\*/g, "").trim();
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl text-foreground mt-10 mb-3 leading-tight",
              children: text
            },
            blockKey
          );
        }
        const lines = block.split("\n").filter(Boolean);
        if (lines.length === 1) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/85 leading-relaxed", children: renderInlineParts(lines[0]) }, blockKey);
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-foreground/85 leading-relaxed",
            children: renderInlineParts(line)
          },
          line.slice(0, 60)
        )) }, blockKey);
      })
    }
  );
}
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
  slug
}) {
  reactExports.useEffect(() => {
    const base = typeof window !== "undefined" ? window.location.origin : "https://example.com";
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
          url: `${base}/assets/images/og-image.jpg`
        }
      },
      datePublished: new Date(Number(publishedAt)).toISOString(),
      mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/blog/${slug}` }
    };
    const id = "blog-post-jsonld";
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      var _a;
      (_a = document.getElementById(id)) == null ? void 0 : _a.remove();
    };
  }, [title, description, author, publishedAt, imageUrl, slug]);
  return null;
}
function BlogPostPage() {
  var _a;
  const { slug } = useParams({ from: "/blog/$slug" });
  const { data: post, isLoading } = useBlogPostBySlug(slug);
  const { data: related } = useRelatedBlogPosts(
    (post == null ? void 0 : post.category) ?? "",
    (post == null ? void 0 : post.id) ?? 0n,
    3
  );
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(PostSkeleton, {});
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container py-24 text-center",
        "data-ocid": "blog_post.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-5", children: "📝" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-xl mb-2", children: "Article not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This article may have been removed or the link is incorrect." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back to Blog"
          ] }) })
        ]
      }
    );
  }
  const bodyContent = ((_a = post.body) == null ? void 0 : _a.trim()) ? post.body : SAMPLE_BODY;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: `${post.title} | AI Interior Design Blog`,
        description: post.excerpt,
        ogImage: post.featuredImageUrl,
        canonical: `/blog/${post.slug}`,
        type: "article"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JsonLd,
      {
        title: post.title,
        description: post.excerpt,
        author: post.author,
        publishedAt: post.publishedAt,
        imageUrl: post.featuredImageUrl,
        slug: post.slug
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border-b border-border/40 py-4",
        "data-ocid": "blog_post.breadcrumb",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth w-fit group",
            "data-ocid": "blog_post.back.link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 group-hover:-translate-x-0.5 transition-smooth" }),
              "Back to Blog"
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background pt-12 pb-0",
        "data-ocid": "blog_post.hero.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent uppercase tracking-widest", children: post.category }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl text-foreground leading-tight mb-5", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed mb-8", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-y border-border/40 py-4 mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
              post.author
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
              formatDate(post.publishedAt)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
              Number(post.readTimeMinutes),
              " min read"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-2xl overflow-hidden border border-border/40 mb-12 aspect-video bg-muted shadow-md",
              "data-ocid": "blog_post.featured_image",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: post.featuredImageUrl,
                  alt: post.title,
                  className: "w-full h-full object-cover",
                  onError: (e) => {
                    e.target.src = "/assets/images/placeholder.svg";
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BodyRenderer, { content: bodyContent }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-12 p-6 rounded-2xl bg-muted/50 border border-border/40 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: "Inspired? See Real Transformations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4", children: "Browse our before & after gallery of AI-designed small spaces across the USA." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "default",
                className: "gap-2",
                "data-ocid": "blog_post.gallery.cta_button",
                children: [
                  "Explore Design Gallery ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ) })
          ] }),
          post.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 flex-wrap mt-8 pt-6 border-t border-border/40",
              "data-ocid": "blog_post.tags",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
                post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground border border-border/30",
                    children: tag
                  },
                  tag
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth w-fit group",
              "data-ocid": "blog_post.back_bottom.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 group-hover:-translate-x-0.5 transition-smooth" }),
                "Back to Blog"
              ]
            }
          ) })
        ] })
      }
    ),
    related && related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border/30 py-16",
        "data-ocid": "blog_post.related.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl text-foreground mb-8", children: [
            "More in ",
            post.category
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: related.map((rp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/blog/$slug",
              params: { slug: rp.slug },
              className: "group block",
              "data-ocid": `blog_post.related.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden bg-card border border-border/40 hover:shadow-lg transition-smooth h-full flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: rp.featuredImageUrl,
                    alt: rp.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                    onError: (e) => {
                      e.target.src = "/assets/images/placeholder.svg";
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent uppercase tracking-wider mb-2", children: rp.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm group-hover:text-primary transition-smooth line-clamp-2 flex-1", children: rp.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground mt-3 pt-2 border-t border-border/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                      formatDate(rp.publishedAt)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-medium flex items-center gap-1", children: [
                      "Read ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                    ] })
                  ] })
                ] })
              ] })
            },
            rp.id.toString()
          )) })
        ] })
      }
    )
  ] });
}
export {
  BlogPostPage as default
};
