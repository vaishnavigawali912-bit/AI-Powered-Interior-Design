import { a as useNavigate, r as reactExports, j as jsxRuntimeExports, d as Skeleton, B as Button, X, L as Link } from "./index-BM5VdnwD.js";
import { S as SEOHead } from "./SEOHead-CJeWf9wx.js";
import { u as useGalleryItems, g as getRoomTypeLabel, a as getStyleLabel } from "./index-CsEHY1cp.js";
import { A as ArrowRight } from "./arrow-right-BqfckFjU.js";
const ROOM_FILTERS = [
  { label: "All Rooms", key: "all", value: null },
  { label: "Studio", key: "StudioApartment", value: { StudioApartment: null } },
  { label: "Living Room", key: "LivingRoom", value: { LivingRoom: null } },
  { label: "Bedroom", key: "Bedroom", value: { Bedroom: null } },
  { label: "Home Office", key: "HomeOffice", value: { HomeOffice: null } },
  { label: "Kitchen", key: "Kitchen", value: { Kitchen: null } }
];
const STYLE_FILTERS = [
  { label: "All Styles", key: "all", value: null },
  { label: "Modern", key: "Modern", value: { Modern: null } },
  { label: "Japandi", key: "Japandi", value: { Japandi: null } },
  { label: "Scandinavian", key: "Scandinavian", value: { Scandinavian: null } },
  { label: "Bohemian", key: "Bohemian", value: { Bohemian: null } },
  { label: "Coastal", key: "Coastal", value: { Coastal: null } },
  { label: "Industrial", key: "Industrial", value: { Industrial: null } }
];
function GalleryCard({ item, index }) {
  const [showAfter, setShowAfter] = reactExports.useState(true);
  const delayClass = index % 3 === 0 ? "fade-in fade-in-delay-1" : index % 3 === 1 ? "fade-in fade-in-delay-2" : "fade-in fade-in-delay-3";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: `group rounded-2xl overflow-hidden bg-card border border-border/40 hover:shadow-lg hover:scale-[1.02] transition-smooth h-full flex flex-col ${delayClass}`,
      "data-ocid": `gallery.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] bg-muted relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: showAfter ? item.afterImageUrl : item.beforeImageUrl,
              alt: `${item.title} — ${showAfter ? "after" : "before"}`,
              className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowAfter((prev) => !prev);
              },
              className: "absolute bottom-3 right-3 px-3 py-1.5 rounded-full glass-effect text-xs font-semibold text-foreground border border-border/30 hover:bg-card/90 transition-smooth",
              "aria-label": `Show ${showAfter ? "before" : "after"} image`,
              "data-ocid": `gallery.before_after_toggle.${index + 1}`,
              children: showAfter ? "← Before" : "After →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/20", children: getRoomTypeLabel(item.roomType) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-xs font-medium text-primary-foreground", children: getStyleLabel(item.style) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/gallery/$id",
            params: { id: item.id.toString() },
            className: "p-5 flex flex-col flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-b-2xl",
            "aria-label": `View ${item.title} transformation details`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-1", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 flex-1", children: item.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-4 text-sm text-primary font-medium", children: [
                "View transformation ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function ActiveFilterPill({
  label,
  onClear,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onClear,
        "aria-label": `Remove ${label} filter`,
        className: "hover:text-primary/70 transition-smooth",
        "data-ocid": ocid,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
      }
    )
  ] });
}
function GalleryPage() {
  const navigate = useNavigate();
  const rawSearch = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const roomKey = rawSearch.get("room") ?? "all";
  const styleKey = rawSearch.get("style") ?? "all";
  const activeRoomFilter = ROOM_FILTERS.find((f) => f.key === roomKey) ?? ROOM_FILTERS[0];
  const activeStyleFilter = STYLE_FILTERS.find((f) => f.key === styleKey) ?? STYLE_FILTERS[0];
  const { data: items, isLoading } = useGalleryItems(
    activeRoomFilter.value ?? void 0,
    activeStyleFilter.value ?? void 0
  );
  const setRoomFilter = reactExports.useCallback(
    (key) => {
      const params = new URLSearchParams(window.location.search);
      if (key === "all") params.delete("room");
      else params.set("room", key);
      navigate({ to: "/gallery", search: Object.fromEntries(params) });
    },
    [navigate]
  );
  const setStyleFilter = reactExports.useCallback(
    (key) => {
      const params = new URLSearchParams(window.location.search);
      if (key === "all") params.delete("style");
      else params.set("style", key);
      navigate({ to: "/gallery", search: Object.fromEntries(params) });
    },
    [navigate]
  );
  const clearAllFilters = reactExports.useCallback(() => {
    navigate({ to: "/gallery", search: {} });
  }, [navigate]);
  const hasActiveFilters = activeRoomFilter.value !== null || activeStyleFilter.value !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Interior Design Gallery | Small Space Transformations USA",
        description: "Browse stunning before and after interior design transformations for studio apartments, living rooms, bedrooms, and more. AI-powered luxury design for small spaces across the USA.",
        canonical: "/gallery"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border/40 py-14 fade-in fade-in-delay-1",
        "data-ocid": "gallery.header.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-3", children: "Design Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl", children: "Real small-space transformations — studios, living rooms, bedrooms, and more. Toggle between before and after, or filter by room type and design style." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/20 border-b border-border/30 py-5 sticky top-16 z-40 backdrop-blur-sm",
        "data-ocid": "gallery.filters.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { className: "flex gap-2 flex-wrap border-0 p-0 m-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "sr-only", children: "Filter by room type" }),
            ROOM_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setRoomFilter(f.key),
                className: `px-3.5 py-1.5 rounded-full text-sm font-medium transition-smooth border ${f.key === activeRoomFilter.key ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
                "aria-pressed": f.key === activeRoomFilter.key,
                "data-ocid": `gallery.room_filter.${f.key.toLowerCase()}.toggle`,
                children: f.label
              },
              f.key
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { className: "flex gap-2 flex-wrap border-0 p-0 m-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "sr-only", children: "Filter by design style" }),
            STYLE_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setStyleFilter(f.key),
                className: `px-3.5 py-1.5 rounded-full text-sm font-medium transition-smooth border ${f.key === activeStyleFilter.key ? "bg-accent text-accent-foreground border-accent" : "bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"}`,
                "aria-pressed": f.key === activeStyleFilter.key,
                "data-ocid": `gallery.style_filter.${f.key.toLowerCase()}.toggle`,
                children: f.label
              },
              f.key
            ))
          ] }),
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap gap-2 items-center pt-1",
              "data-ocid": "gallery.active_filters",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: "Active:" }),
                activeRoomFilter.value !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActiveFilterPill,
                  {
                    label: activeRoomFilter.label,
                    onClear: () => setRoomFilter("all"),
                    ocid: "gallery.room_filter_clear.button"
                  }
                ),
                activeStyleFilter.value !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActiveFilterPill,
                  {
                    label: activeStyleFilter.label,
                    onClear: () => setStyleFilter("all"),
                    ocid: "gallery.style_filter_clear.button"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: clearAllFilters,
                    className: "text-xs text-muted-foreground hover:text-foreground transition-smooth underline underline-offset-2",
                    "data-ocid": "gallery.clear_all_filters.button",
                    children: "Clear all"
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", "data-ocid": "gallery.grid.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        "data-ocid": "gallery.loading_state",
        children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" })
          ] })
        ] }, i))
      }
    ) : !(items == null ? void 0 : items.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-24 fade-in",
        "data-ocid": "gallery.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-2xl", children: "🏠" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2 text-lg", children: "No designs found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-sm mx-auto", children: "No transformations match your current filters. Try adjusting your selections or clear all filters to browse the full gallery." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: clearAllFilters,
              className: "gap-2 border-primary/30 text-primary hover:bg-primary/5",
              "data-ocid": "gallery.clear_filters.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                " Clear All Filters"
              ]
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
        items.length,
        " transformation",
        items.length !== 1 ? "s" : "",
        " ",
        "found"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryCard, { item, index: i }, item.id.toString())) })
    ] }) }) })
  ] });
}
export {
  GalleryPage as default
};
