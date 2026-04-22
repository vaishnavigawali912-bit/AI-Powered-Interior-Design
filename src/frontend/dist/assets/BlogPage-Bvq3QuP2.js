import { r as reactExports, j as jsxRuntimeExports, d as Skeleton, L as Link } from "./index-BM5VdnwD.js";
import { S as SEOHead } from "./SEOHead-CJeWf9wx.js";
import { B as Badge } from "./badge-tB3h2WQz.js";
import { u as useFeaturedBlogPosts, B as BLOG_CATEGORIES } from "./useBlog-CMXvW-OQ.js";
import { U as User, C as Calendar, a as Clock } from "./user-DmQb6Srx.js";
import { A as ArrowRight } from "./arrow-right-BqfckFjU.js";
function formatDate(ts) {
  return new Date(Number(ts)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function FeaturedPostHero({ post }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/blog/$slug",
      params: { slug: post.slug },
      className: "group block",
      "data-ocid": "blog.featured.hero",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative rounded-3xl overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-xl transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/7] md:aspect-[21/9] bg-muted overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.featuredImageUrl,
              alt: post.title,
              className: "w-full h-full object-cover group-hover:scale-[1.03] transition-smooth duration-700",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/90 text-primary-foreground text-xs uppercase tracking-wider", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-4xl text-white leading-snug mb-3 group-hover:text-primary-foreground/90 transition-smooth line-clamp-2", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-sm md:text-base line-clamp-2 mb-4 max-w-2xl", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-white/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
              post.author
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
              formatDate(post.publishedAt)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
              Number(post.readTimeMinutes),
              " min read"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 right-5 glass-effect rounded-full px-4 py-2 text-xs font-semibold text-foreground flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-smooth", children: [
          "Read Article ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] })
      ] })
    }
  );
}
function PostCard({ post, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/blog/$slug",
      params: { slug: post.slug },
      className: "group block h-full",
      "data-ocid": `blog.item.${index}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl overflow-hidden bg-card border border-border/40 shadow-sm hover:shadow-lg transition-smooth h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: post.featuredImageUrl,
            alt: post.title,
            className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
            onError: (e) => {
              e.target.src = "/assets/images/placeholder.svg";
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent uppercase tracking-wider mb-2 inline-block", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2 text-base flex-1", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mb-4", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground border-t border-border/30 pt-3 mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
              formatDate(post.publishedAt)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              Number(post.readTimeMinutes),
              " min read"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-smooth", children: [
          "Read More ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] }) })
      ] })
    }
  );
}
function GridSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
      "data-ocid": "blog.loading_state",
      children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-video w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" })
        ] })
      ] }, i))
    }
  );
}
function BlogPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const { data: allPosts, isLoading } = useFeaturedBlogPosts(6);
  const filtered = activeCategory === "All" ? allPosts ?? [] : (allPosts ?? []).filter((p) => p.category === activeCategory);
  const featuredPost = filtered[0];
  const gridPosts = filtered.slice(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Small Space Interior Design Blog | Tips & Inspiration USA",
        description: "Expert interior design articles for small spaces in the USA. Studio apartment ideas, design style guides, furniture recommendations, and color inspiration.",
        canonical: "/blog"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border/40 py-14",
        "data-ocid": "blog.header.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-accent uppercase tracking-widest mb-3", children: "Design Journal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-3", children: "Small Space Design Ideas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl", children: "Expert guides, style breakdowns, and practical ideas for small-space living across the USA. Updated weekly." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/20 border-b border-border/30 py-4 sticky top-16 z-40 backdrop-blur-sm",
        "data-ocid": "blog.categories.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex gap-2 flex-wrap",
            role: "tablist",
            "aria-label": "Filter by category",
            children: BLOG_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": activeCategory === cat,
                onClick: () => setActiveCategory(cat),
                className: `px-4 py-1.5 rounded-full text-sm font-medium transition-smooth border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
                "data-ocid": `blog.category.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}.tab`,
                children: cat
              },
              cat
            ))
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", "data-ocid": "blog.grid.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          className: "aspect-[21/9] rounded-3xl w-full",
          "data-ocid": "blog.hero.loading_state"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridSkeleton, {})
    ] }) : !filtered.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24", "data-ocid": "blog.empty_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "📝" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2 text-lg", children: "No articles in this category yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Check back soon — new articles are published weekly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveCategory("All"),
          className: "mt-5 text-sm text-primary font-medium hover:underline",
          children: "View all articles"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10 fade-in", children: [
      featuredPost && /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedPostHero, { post: featuredPost }),
      gridPosts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-6", children: activeCategory === "All" ? "More Articles" : activeCategory }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: gridPosts.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PostCard,
          {
            post,
            index: i + 2
          },
          post.id.toString()
        )) })
      ] })
    ] }) }) })
  ] });
}
export {
  BlogPage as default
};
