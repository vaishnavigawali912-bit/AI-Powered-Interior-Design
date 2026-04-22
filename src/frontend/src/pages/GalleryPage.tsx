import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGalleryItems } from "@/hooks/useGallery";
import type { DesignStyle, GalleryItem, RoomType } from "@/types";
import { getRoomTypeLabel, getStyleLabel } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { useCallback, useState } from "react";

// ─── Filter config ────────────────────────────────────────────────────────────

const ROOM_FILTERS: { label: string; key: string; value: RoomType | null }[] = [
  { label: "All Rooms", key: "all", value: null },
  { label: "Studio", key: "StudioApartment", value: { StudioApartment: null } },
  { label: "Living Room", key: "LivingRoom", value: { LivingRoom: null } },
  { label: "Bedroom", key: "Bedroom", value: { Bedroom: null } },
  { label: "Home Office", key: "HomeOffice", value: { HomeOffice: null } },
  { label: "Kitchen", key: "Kitchen", value: { Kitchen: null } },
];

const STYLE_FILTERS: {
  label: string;
  key: string;
  value: DesignStyle | null;
}[] = [
  { label: "All Styles", key: "all", value: null },
  { label: "Modern", key: "Modern", value: { Modern: null } },
  { label: "Japandi", key: "Japandi", value: { Japandi: null } },
  { label: "Scandinavian", key: "Scandinavian", value: { Scandinavian: null } },
  { label: "Bohemian", key: "Bohemian", value: { Bohemian: null } },
  { label: "Coastal", key: "Coastal", value: { Coastal: null } },
  { label: "Industrial", key: "Industrial", value: { Industrial: null } },
];

// ─── Gallery card ─────────────────────────────────────────────────────────────

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const [showAfter, setShowAfter] = useState(true);

  const delayClass =
    index % 3 === 0
      ? "fade-in fade-in-delay-1"
      : index % 3 === 1
        ? "fade-in fade-in-delay-2"
        : "fade-in fade-in-delay-3";

  return (
    <article
      className={`group rounded-2xl overflow-hidden bg-card border border-border/40 hover:shadow-lg hover:scale-[1.02] transition-smooth h-full flex flex-col ${delayClass}`}
      data-ocid={`gallery.item.${index + 1}`}
    >
      {/* Image toggle area */}
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <img
          src={showAfter ? item.afterImageUrl : item.beforeImageUrl}
          alt={`${item.title} — ${showAfter ? "after" : "before"}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />

        {/* Before / After toggle button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowAfter((prev) => !prev);
          }}
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full glass-effect text-xs font-semibold text-foreground border border-border/30 hover:bg-card/90 transition-smooth"
          aria-label={`Show ${showAfter ? "before" : "after"} image`}
          data-ocid={`gallery.before_after_toggle.${index + 1}`}
        >
          {showAfter ? "← Before" : "After →"}
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="px-2.5 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/20">
            {getRoomTypeLabel(item.roomType)}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-xs font-medium text-primary-foreground">
            {getStyleLabel(item.style)}
          </span>
        </div>
      </div>

      {/* Card body — wrapped in Link for navigation */}
      <Link
        to="/gallery/$id"
        params={{ id: item.id.toString() }}
        className="p-5 flex flex-col flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-b-2xl"
        aria-label={`View ${item.title} transformation details`}
      >
        <h2 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-1">
          {item.title}
        </h2>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
          {item.description}
        </p>
        <div className="flex items-center gap-1 mt-4 text-sm text-primary font-medium">
          View transformation <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </Link>
    </article>
  );
}

// ─── Filter pill ──────────────────────────────────────────────────────────────

function ActiveFilterPill({
  label,
  onClear,
  ocid,
}: {
  label: string;
  onClear: () => void;
  ocid: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
      {label}
      <button
        type="button"
        onClick={onClear}
        aria-label={`Remove ${label} filter`}
        className="hover:text-primary/70 transition-smooth"
        data-ocid={ocid}
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const navigate = useNavigate();

  // Read filter state from URL search params
  const rawSearch =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();
  const roomKey = rawSearch.get("room") ?? "all";
  const styleKey = rawSearch.get("style") ?? "all";

  const activeRoomFilter =
    ROOM_FILTERS.find((f) => f.key === roomKey) ?? ROOM_FILTERS[0];
  const activeStyleFilter =
    STYLE_FILTERS.find((f) => f.key === styleKey) ?? STYLE_FILTERS[0];

  const { data: items, isLoading } = useGalleryItems(
    activeRoomFilter.value ?? undefined,
    activeStyleFilter.value ?? undefined,
  );

  const setRoomFilter = useCallback(
    (key: string) => {
      const params = new URLSearchParams(window.location.search);
      if (key === "all") params.delete("room");
      else params.set("room", key);
      navigate({ to: "/gallery", search: Object.fromEntries(params) });
    },
    [navigate],
  );

  const setStyleFilter = useCallback(
    (key: string) => {
      const params = new URLSearchParams(window.location.search);
      if (key === "all") params.delete("style");
      else params.set("style", key);
      navigate({ to: "/gallery", search: Object.fromEntries(params) });
    },
    [navigate],
  );

  const clearAllFilters = useCallback(() => {
    navigate({ to: "/gallery", search: {} });
  }, [navigate]);

  const hasActiveFilters =
    activeRoomFilter.value !== null || activeStyleFilter.value !== null;

  return (
    <>
      <SEOHead
        title="Interior Design Gallery | Small Space Transformations USA"
        description="Browse stunning before and after interior design transformations for studio apartments, living rooms, bedrooms, and more. AI-powered luxury design for small spaces across the USA."
        canonical="/gallery"
      />

      {/* Page header */}
      <section
        className="bg-card border-b border-border/40 py-14 fade-in fade-in-delay-1"
        data-ocid="gallery.header.section"
      >
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
            Design Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real small-space transformations — studios, living rooms, bedrooms,
            and more. Toggle between before and after, or filter by room type
            and design style.
          </p>
        </div>
      </section>

      {/* Sticky filter bar */}
      <section
        className="bg-muted/20 border-b border-border/30 py-5 sticky top-16 z-40 backdrop-blur-sm"
        data-ocid="gallery.filters.section"
      >
        <div className="container space-y-3">
          {/* Room type filters */}
          <fieldset className="flex gap-2 flex-wrap border-0 p-0 m-0">
            <legend className="sr-only">Filter by room type</legend>
            {ROOM_FILTERS.map((f) => (
              <button
                type="button"
                key={f.key}
                onClick={() => setRoomFilter(f.key)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-smooth border ${
                  f.key === activeRoomFilter.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                aria-pressed={f.key === activeRoomFilter.key}
                data-ocid={`gallery.room_filter.${f.key.toLowerCase()}.toggle`}
              >
                {f.label}
              </button>
            ))}
          </fieldset>

          {/* Style filters */}
          <fieldset className="flex gap-2 flex-wrap border-0 p-0 m-0">
            <legend className="sr-only">Filter by design style</legend>
            {STYLE_FILTERS.map((f) => (
              <button
                type="button"
                key={f.key}
                onClick={() => setStyleFilter(f.key)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-smooth border ${
                  f.key === activeStyleFilter.key
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
                }`}
                aria-pressed={f.key === activeStyleFilter.key}
                data-ocid={`gallery.style_filter.${f.key.toLowerCase()}.toggle`}
              >
                {f.label}
              </button>
            ))}
          </fieldset>

          {/* Active filter pills */}
          {hasActiveFilters && (
            <div
              className="flex flex-wrap gap-2 items-center pt-1"
              data-ocid="gallery.active_filters"
            >
              <span className="text-xs text-muted-foreground font-medium">
                Active:
              </span>
              {activeRoomFilter.value !== null && (
                <ActiveFilterPill
                  label={activeRoomFilter.label}
                  onClear={() => setRoomFilter("all")}
                  ocid="gallery.room_filter_clear.button"
                />
              )}
              {activeStyleFilter.value !== null && (
                <ActiveFilterPill
                  label={activeStyleFilter.label}
                  onClear={() => setStyleFilter("all")}
                  ocid="gallery.style_filter_clear.button"
                />
              )}
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs text-muted-foreground hover:text-foreground transition-smooth underline underline-offset-2"
                data-ocid="gallery.clear_all_filters.button"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-background py-12" data-ocid="gallery.grid.section">
        <div className="container">
          {isLoading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="gallery.loading_state"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-2xl overflow-hidden">
                  <Skeleton className="aspect-[4/3] w-full" />
                  <div className="p-5 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : !items?.length ? (
            <div
              className="text-center py-24 fade-in"
              data-ocid="gallery.empty_state"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-2xl">
                🏠
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">
                No designs found
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                No transformations match your current filters. Try adjusting
                your selections or clear all filters to browse the full gallery.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={clearAllFilters}
                className="gap-2 border-primary/30 text-primary hover:bg-primary/5"
                data-ocid="gallery.clear_filters.button"
              >
                <X className="w-4 h-4" /> Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                {items.length} transformation{items.length !== 1 ? "s" : ""}{" "}
                found
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, i) => (
                  <GalleryCard key={item.id.toString()} item={item} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
