import { c as createLucideIcon, e as useParams, r as reactExports, j as jsxRuntimeExports, d as Skeleton, L as Link, B as Button, S as Sparkles } from "./index-BM5VdnwD.js";
import { S as SEOHead } from "./SEOHead-CJeWf9wx.js";
import { b as useGalleryItem, g as getRoomTypeLabel, a as getStyleLabel } from "./index-CsEHY1cp.js";
import { A as ArrowLeft } from "./arrow-left-2z_LulCk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
];
const LayoutPanelLeft = createLucideIcon("layout-panel-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
];
const LayoutPanelTop = createLucideIcon("layout-panel-top", __iconNode);
function GalleryDetailPage() {
  const { id } = useParams({ from: "/gallery/$id" });
  const { data: item, isLoading } = useGalleryItem(BigInt(id));
  const [viewMode, setViewMode] = reactExports.useState("side-by-side");
  const [showAfter, setShowAfter] = reactExports.useState(true);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container py-12 space-y-8",
        "data-ocid": "gallery_detail.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-28" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-2/3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] rounded-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] rounded-2xl" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/3" }),
            [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5" }, i))
          ] })
        ]
      }
    );
  }
  if (!item) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container py-24 text-center",
        "data-ocid": "gallery_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-2xl", children: "🏠" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-xl mb-2", children: "Design not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This design may have been removed or the link is invalid." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back to Gallery"
          ] }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: item.title,
        description: item.description,
        canonical: `/gallery/${id}`,
        type: "article"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border-b border-border/40 py-3",
        "data-ocid": "gallery_detail.breadcrumb",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/gallery",
              className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth w-fit",
              "data-ocid": "gallery_detail.back.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back to Gallery"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1 p-1 rounded-lg bg-muted border border-border/40",
              "data-ocid": "gallery_detail.view_mode_toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setViewMode("side-by-side"),
                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-smooth ${viewMode === "side-by-side" ? "bg-card text-foreground shadow-sm border border-border/40" : "text-muted-foreground hover:text-foreground"}`,
                    "aria-label": "Side-by-side view",
                    "aria-pressed": viewMode === "side-by-side",
                    "data-ocid": "gallery_detail.side_by_side.toggle",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutPanelLeft, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Side by side" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setViewMode("toggle"),
                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-smooth ${viewMode === "toggle" ? "bg-card text-foreground shadow-sm border border-border/40" : "text-muted-foreground hover:text-foreground"}`,
                    "aria-label": "Toggle view",
                    "aria-pressed": viewMode === "toggle",
                    "data-ocid": "gallery_detail.toggle_view.toggle",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutPanelTop, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Toggle" })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-12 fade-in fade-in-delay-1",
        "data-ocid": "gallery_detail.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground border border-border/30", children: getRoomTypeLabel(item.roomType) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20", children: getStyleLabel(item.style) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl text-foreground mb-4 leading-tight", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-2xl", children: item.description })
          ] }),
          viewMode === "side-by-side" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",
              "data-ocid": "gallery_detail.images.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl overflow-hidden border border-border/40 shadow-sm",
                    "data-ocid": "gallery_detail.before_image",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 px-4 py-2.5 flex items-center gap-2 border-b border-border/30", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-muted-foreground/40" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Before" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: item.beforeImageUrl,
                          alt: `${item.title} — before`,
                          className: "w-full h-full object-cover",
                          onError: (e) => {
                            e.target.src = "/assets/images/placeholder.svg";
                          }
                        }
                      ) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl overflow-hidden border border-primary/30 shadow-glass",
                    "data-ocid": "gallery_detail.after_image",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 px-4 py-2.5 flex items-center gap-2 border-b border-primary/20", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-primary", children: "After" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: item.afterImageUrl,
                          alt: `${item.title} — after`,
                          className: "w-full h-full object-cover",
                          onError: (e) => {
                            e.target.src = "/assets/images/placeholder.svg";
                          }
                        }
                      ) })
                    ]
                  }
                )
              ]
            }
          ) : (
            /* Toggle view */
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12", "data-ocid": "gallery_detail.images.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden border border-border/40 shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: showAfter ? item.afterImageUrl : item.beforeImageUrl,
                  alt: `${item.title} — ${showAfter ? "after" : "before"}`,
                  className: "w-full h-full object-cover transition-smooth",
                  onError: (e) => {
                    e.target.src = "/assets/images/placeholder.svg";
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `px-4 py-1.5 rounded-full text-sm font-semibold ${showAfter ? "bg-primary/90 text-primary-foreground" : "bg-muted/80 text-foreground"} backdrop-blur-sm`,
                  children: showAfter ? "After" : "Before"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowAfter((v) => !v),
                  className: "glass-effect px-6 py-2.5 rounded-full text-sm font-semibold text-foreground border border-border/30 hover:bg-card/90 transition-smooth shadow-sm",
                  "data-ocid": "gallery_detail.before_after_toggle",
                  children: showAfter ? "← Show Before" : "Show After →"
                }
              ) })
            ] }) })
          ),
          item.designTips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-2xl border border-border/40 p-8 mb-8 fade-in fade-in-delay-2",
              "data-ocid": "gallery_detail.tips.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl text-foreground mb-6 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-primary" }),
                  "Design Tips from This Transformation"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: item.designTips.map((tip, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: `flex gap-3 items-start fade-in fade-in-delay-${Math.min(i + 1, 3)}`,
                    "data-ocid": `gallery_detail.tip.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed", children: tip })
                    ]
                  },
                  tip
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-muted/30 rounded-2xl border border-border/30 p-8 text-center fade-in fade-in-delay-3",
              "data-ocid": "gallery_detail.cta.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: "Ready to transform your own space?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm max-w-md mx-auto", children: "Browse hundreds more small-space transformations for inspiration, or explore the full gallery filtered to your room type." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    className: "gap-2 border-border/60 hover:border-primary/40 hover:text-primary",
                    "data-ocid": "gallery_detail.explore_gallery.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                      " Explore More Designs"
                    ]
                  }
                ) }) })
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  GalleryDetailPage as default
};
