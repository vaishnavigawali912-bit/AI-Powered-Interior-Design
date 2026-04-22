import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGalleryItem } from "@/hooks/useGallery";
import { getRoomTypeLabel, getStyleLabel } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  LayoutPanelLeft,
  LayoutPanelTop,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

type ViewMode = "side-by-side" | "toggle";

export default function GalleryDetailPage() {
  const { id } = useParams({ from: "/gallery/$id" });
  const { data: item, isLoading } = useGalleryItem(BigInt(id));
  const [viewMode, setViewMode] = useState<ViewMode>("side-by-side");
  const [showAfter, setShowAfter] = useState(true);

  if (isLoading) {
    return (
      <div
        className="container py-12 space-y-8"
        data-ocid="gallery_detail.loading_state"
      >
        <Skeleton className="h-5 w-28" />
        <div className="space-y-3">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Skeleton className="aspect-[4/3] rounded-2xl" />
          <Skeleton className="aspect-[4/3] rounded-2xl" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-5 w-1/3" />
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-4 w-4/5" />
          ))}
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div
        className="container py-24 text-center"
        data-ocid="gallery_detail.error_state"
      >
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-2xl">
          🏠
        </div>
        <h2 className="font-semibold text-foreground text-xl mb-2">
          Design not found
        </h2>
        <p className="text-muted-foreground mb-6">
          This design may have been removed or the link is invalid.
        </p>
        <Link to="/gallery">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Gallery
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={item.title}
        description={item.description}
        canonical={`/gallery/${id}`}
        type="article"
      />

      {/* Breadcrumb bar */}
      <div
        className="bg-card border-b border-border/40 py-3"
        data-ocid="gallery_detail.breadcrumb"
      >
        <div className="container flex items-center justify-between gap-4">
          <Link
            to="/gallery"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth w-fit"
            data-ocid="gallery_detail.back.link"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Gallery
          </Link>

          {/* View mode toggle */}
          <div
            className="flex items-center gap-1 p-1 rounded-lg bg-muted border border-border/40"
            data-ocid="gallery_detail.view_mode_toggle"
          >
            <button
              type="button"
              onClick={() => setViewMode("side-by-side")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-smooth ${
                viewMode === "side-by-side"
                  ? "bg-card text-foreground shadow-sm border border-border/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Side-by-side view"
              aria-pressed={viewMode === "side-by-side"}
              data-ocid="gallery_detail.side_by_side.toggle"
            >
              <LayoutPanelLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Side by side</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("toggle")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-smooth ${
                viewMode === "toggle"
                  ? "bg-card text-foreground shadow-sm border border-border/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Toggle view"
              aria-pressed={viewMode === "toggle"}
              data-ocid="gallery_detail.toggle_view.toggle"
            >
              <LayoutPanelTop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Toggle</span>
            </button>
          </div>
        </div>
      </div>

      <section
        className="bg-background py-12 fade-in fade-in-delay-1"
        data-ocid="gallery_detail.section"
      >
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground border border-border/30">
                {getRoomTypeLabel(item.roomType)}
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20">
                {getStyleLabel(item.style)}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl text-foreground mb-4 leading-tight">
              {item.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              {item.description}
            </p>
          </div>

          {/* Before / After images */}
          {viewMode === "side-by-side" ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              data-ocid="gallery_detail.images.section"
            >
              {/* Before */}
              <div
                className="rounded-2xl overflow-hidden border border-border/40 shadow-sm"
                data-ocid="gallery_detail.before_image"
              >
                <div className="bg-muted/50 px-4 py-2.5 flex items-center gap-2 border-b border-border/30">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Before
                  </span>
                </div>
                <div className="aspect-[4/3] bg-muted">
                  <img
                    src={item.beforeImageUrl}
                    alt={`${item.title} — before`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/assets/images/placeholder.svg";
                    }}
                  />
                </div>
              </div>

              {/* After */}
              <div
                className="rounded-2xl overflow-hidden border border-primary/30 shadow-glass"
                data-ocid="gallery_detail.after_image"
              >
                <div className="bg-primary/10 px-4 py-2.5 flex items-center gap-2 border-b border-primary/20">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    After
                  </span>
                </div>
                <div className="aspect-[4/3] bg-muted">
                  <img
                    src={item.afterImageUrl}
                    alt={`${item.title} — after`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/assets/images/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Toggle view */
            <div className="mb-12" data-ocid="gallery_detail.images.section">
              <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-sm">
                <div className="aspect-video bg-muted">
                  <img
                    src={showAfter ? item.afterImageUrl : item.beforeImageUrl}
                    alt={`${item.title} — ${showAfter ? "after" : "before"}`}
                    className="w-full h-full object-cover transition-smooth"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/assets/images/placeholder.svg";
                    }}
                  />
                </div>

                {/* Overlay label */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                      showAfter
                        ? "bg-primary/90 text-primary-foreground"
                        : "bg-muted/80 text-foreground"
                    } backdrop-blur-sm`}
                  >
                    {showAfter ? "After" : "Before"}
                  </span>
                </div>

                {/* Toggle button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <button
                    type="button"
                    onClick={() => setShowAfter((v) => !v)}
                    className="glass-effect px-6 py-2.5 rounded-full text-sm font-semibold text-foreground border border-border/30 hover:bg-card/90 transition-smooth shadow-sm"
                    data-ocid="gallery_detail.before_after_toggle"
                  >
                    {showAfter ? "← Show Before" : "Show After →"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Design tips */}
          {item.designTips.length > 0 && (
            <div
              className="bg-card rounded-2xl border border-border/40 p-8 mb-8 fade-in fade-in-delay-2"
              data-ocid="gallery_detail.tips.section"
            >
              <h2 className="font-display text-2xl text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Design Tips from This Transformation
              </h2>
              <ul className="space-y-4">
                {item.designTips.map((tip, i) => (
                  <li
                    key={tip}
                    className={`flex gap-3 items-start fade-in fade-in-delay-${Math.min(i + 1, 3)}`}
                    data-ocid={`gallery_detail.tip.item.${i + 1}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div
            className="bg-muted/30 rounded-2xl border border-border/30 p-8 text-center fade-in fade-in-delay-3"
            data-ocid="gallery_detail.cta.section"
          >
            <h3 className="font-display text-xl text-foreground mb-2">
              Ready to transform your own space?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm max-w-md mx-auto">
              Browse hundreds more small-space transformations for inspiration,
              or explore the full gallery filtered to your room type.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/gallery">
                <Button
                  type="button"
                  variant="outline"
                  className="gap-2 border-border/60 hover:border-primary/40 hover:text-primary"
                  data-ocid="gallery_detail.explore_gallery.button"
                >
                  <ArrowLeft className="w-4 h-4" /> Explore More Designs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
