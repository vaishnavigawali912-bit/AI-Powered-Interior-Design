import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import type { DesignStyleLabel } from "@/types/index";
import { Navigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BookmarkCheck,
  CheckCircle,
  ImageIcon,
  Loader2,
  RotateCcw,
  Save,
  Share2,
  Sparkles,
  Upload,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Demo design variation data ───────────────────────────────────────────────

interface DesignVariation {
  style: Extract<DesignStyleLabel, "Modern" | "Minimalist" | "Luxury">;
  afterImageUrl: string;
  description: string;
  tags: string[];
}

const DESIGN_VARIATIONS: DesignVariation[] = [
  {
    style: "Modern",
    afterImageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    description:
      "Clean lines and functional elegance. Neutral tones with bold geometric accents create an airy, sophisticated space.",
    tags: ["Clean Lines", "Neutral Palette", "Functional"],
  },
  {
    style: "Minimalist",
    afterImageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    description:
      "Less is more. A curated selection of essentials with intentional negative space amplifies every square foot.",
    tags: ["Intentional", "Serene", "Clutter-Free"],
  },
  {
    style: "Luxury",
    afterImageUrl:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    description:
      "Rich textures, warm metallics, and plush materials elevate your compact space into a five-star sanctuary.",
    tags: ["Rich Textures", "Warm Metallics", "Premium"],
  },
];

const BEFORE_IMAGE =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80";

const ANALYZING_MESSAGES = [
  "Analyzing your space…",
  "Detecting room dimensions…",
  "Generating style variations…",
  "Applying design principles…",
  "Polishing the results…",
];

type StudioPhase = "upload" | "analyzing" | "results";
type ActiveStyle = Extract<
  DesignStyleLabel,
  "Modern" | "Minimalist" | "Luxury"
>;

export default function StudioPage() {
  const { isAuthenticated, isInitializing } = useAuth();

  // All hooks must be declared before any conditional returns
  const [phase, setPhase] = useState<StudioPhase>("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<ActiveStyle>("Modern");
  const [analyzeMsg, setAnalyzeMsg] = useState(ANALYZING_MESSAGES[0]);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file (JPG, PNG, or WEBP).");
      return;
    }
    const url = URL.createObjectURL(file);
    setUploadedImage(url);
    setIsUploading(true);
    setUploadProgress(0);
    setPhase("upload");

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 22 + 8;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setIsUploading(false);
      }
      setUploadProgress(Math.min(progress, 100));
    }, 160);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  // ─── Auth guard (after all hooks) ─────────────────────────────────────────

  if (isInitializing) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh]"
        data-ocid="studio.loading_state"
      >
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  // ─── Handlers ─────────────────────────────────────────────────────────────

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleAnalyze = () => {
    setPhase("analyzing");
    let idx = 0;
    const msgInterval = setInterval(() => {
      idx = (idx + 1) % ANALYZING_MESSAGES.length;
      setAnalyzeMsg(ANALYZING_MESSAGES[idx]);
    }, 520);

    setTimeout(() => {
      clearInterval(msgInterval);
      setPhase("results");
    }, 2600);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate backend save — real integration: actor.saveDesign(imageKey, selectedStyle)
    await new Promise<void>((r) => setTimeout(r, 900));
    setIsSaving(false);
    toast.success("Design saved to your profile!", {
      icon: <BookmarkCheck className="w-4 h-4 text-accent" />,
    });
  };

  const variation = DESIGN_VARIATIONS.find((v) => v.style === selectedStyle)!;

  const handlePinterestShare = () => {
    const imageUrl = encodeURIComponent(variation.afterImageUrl);
    const desc = encodeURIComponent(
      `${selectedStyle} small space design — AI Interior Design by AI Space Design`,
    );
    const pageUrl = encodeURIComponent(window.location.href);
    window.open(
      `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${imageUrl}&description=${desc}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleInstagramShare = () => {
    navigator.clipboard.writeText(variation.afterImageUrl).then(() => {
      toast.success(
        "Image URL copied to clipboard! Paste it into Instagram to share.",
        { duration: 5000 },
      );
    });
  };

  const handleReset = () => {
    setPhase("upload");
    setUploadedImage(null);
    setUploadProgress(0);
    setSelectedStyle("Modern");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background" data-ocid="studio.page">
      {/* Page header */}
      <div className="bg-card border-b border-border/50">
        <div className="container max-w-5xl mx-auto px-4 py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-3"
          >
            <Badge
              variant="outline"
              className="border-accent/40 text-accent text-xs tracking-wide px-3 py-1"
              data-ocid="studio.badge"
            >
              ✦ AI Design Studio
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
              Transform Your Space
            </h1>
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto">
              Upload a photo of your room and receive three luxury design
              variations instantly.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 py-10 md:py-14 space-y-8">
        {/* ─── SECTION 1: Upload ────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {phase !== "results" && (
            <motion.section
              key="upload-section"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              data-ocid="studio.upload.section"
              className="glass-effect rounded-2xl p-6 md:p-8 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-body text-sm font-semibold">
                    1
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl text-foreground">
                  Upload Your Room Photo
                </h2>
              </div>

              {/* Drop zone */}
              <button
                type="button"
                aria-label="Upload room image — click or drag and drop"
                data-ocid="studio.upload.dropzone"
                className={[
                  "relative border-2 border-dashed rounded-xl transition-smooth cursor-pointer w-full text-left",
                  "flex flex-col items-center justify-center overflow-hidden",
                  uploadedImage
                    ? "min-h-[280px]"
                    : "min-h-[220px] md:min-h-[280px]",
                  isDragging
                    ? "border-accent bg-accent/5"
                    : "border-border/60 hover:border-primary/50 hover:bg-primary/3",
                ].join(" ")}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleInputChange}
                  data-ocid="studio.upload.input"
                />

                {uploadedImage ? (
                  <>
                    <img
                      src={uploadedImage}
                      alt="Uploaded room preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background/65 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center space-y-2 px-6">
                        {isUploading ? (
                          <>
                            <Loader2 className="w-8 h-8 animate-spin text-accent mx-auto" />
                            <p className="text-foreground font-body text-sm">
                              Uploading…{" "}
                              <span className="text-accent font-semibold">
                                {Math.round(uploadProgress)}%
                              </span>
                            </p>
                            <div className="w-48 h-1.5 bg-border/60 rounded-full mx-auto overflow-hidden">
                              <div
                                className="h-full bg-accent rounded-full transition-all duration-200"
                                style={{ width: `${uploadProgress}%` }}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-9 h-9 text-accent mx-auto" />
                            <p className="text-foreground font-body text-sm font-medium">
                              Photo ready
                            </p>
                            <p className="text-muted-foreground font-body text-xs">
                              Click to replace
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center px-6 py-10 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center mx-auto border border-primary/20">
                      <ImageIcon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-display text-lg text-foreground">
                      Drop your room photo here
                    </p>
                    <p className="text-muted-foreground font-body text-sm">
                      or{" "}
                      <span className="text-primary underline underline-offset-2">
                        browse files
                      </span>
                    </p>
                    <p className="text-muted-foreground font-body text-xs">
                      JPG, PNG, WEBP — up to 20MB
                    </p>
                  </div>
                )}
              </button>

              {/* Analyze CTA */}
              <Button
                size="lg"
                disabled={
                  !uploadedImage || isUploading || phase === "analyzing"
                }
                className="w-full md:w-auto gap-2 text-base"
                onClick={handleAnalyze}
                data-ocid="studio.analyze.primary_button"
              >
                {phase === "analyzing" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {analyzeMsg}
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Get AI Design
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ─── Analyzing overlay ──────────────────────────────────────── */}
        <AnimatePresence>
          {phase === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-effect rounded-2xl p-12 flex flex-col items-center gap-6 text-center"
              data-ocid="studio.analyzing.loading_state"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-accent/30 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-accent animate-pulse" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-accent/15 animate-ping" />
              </div>
              <div className="space-y-2">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={analyzeMsg}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28 }}
                    className="font-display text-xl md:text-2xl text-foreground"
                  >
                    {analyzeMsg}
                  </motion.p>
                </AnimatePresence>
                <p className="text-muted-foreground font-body text-sm">
                  Our AI is crafting your personalized design palette
                </p>
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-accent/60 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── SECTION 2: Results ─────────────────────────────────────── */}
        <AnimatePresence>
          {phase === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-8"
              data-ocid="studio.results.section"
            >
              {/* Style selector */}
              <div className="glass-effect rounded-2xl p-6 md:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-body text-sm font-semibold">
                      2
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl text-foreground">
                    Choose Your Style
                  </h2>
                </div>

                <div
                  className="flex gap-3 flex-wrap"
                  role="tablist"
                  aria-label="Design style selector"
                >
                  {DESIGN_VARIATIONS.map((v) => (
                    <button
                      type="button"
                      key={v.style}
                      role="tab"
                      aria-selected={selectedStyle === v.style}
                      onClick={() => setSelectedStyle(v.style)}
                      data-ocid={`studio.style.tab.${v.style.toLowerCase()}`}
                      className={[
                        "px-5 py-2.5 rounded-full font-body text-sm font-medium transition-smooth border",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        selectedStyle === v.style
                          ? "bg-accent text-accent-foreground border-accent shadow-md"
                          : "bg-card text-muted-foreground border-border hover:border-accent/50 hover:text-foreground",
                      ].join(" ")}
                    >
                      {v.style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Design variation cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {DESIGN_VARIATIONS.map((v, i) => (
                  <motion.button
                    type="button"
                    key={v.style}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    onClick={() => setSelectedStyle(v.style)}
                    data-ocid={`studio.variation.item.${i + 1}`}
                    className={[
                      "glass-effect rounded-xl overflow-hidden cursor-pointer transition-smooth group text-left w-full",
                      selectedStyle === v.style
                        ? "ring-2 ring-accent shadow-lg scale-[1.02]"
                        : "hover:shadow-md hover:scale-[1.015]",
                    ].join(" ")}
                  >
                    {/* After image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={v.afterImageUrl}
                        alt={`${v.style} design variation`}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2">
                        <span
                          className={[
                            "text-xs font-body font-semibold px-2.5 py-1 rounded-full",
                            selectedStyle === v.style
                              ? "bg-accent text-accent-foreground"
                              : "bg-background/80 backdrop-blur-sm text-foreground border border-border/50",
                          ].join(" ")}
                        >
                          {v.style}
                        </span>
                      </div>
                      {selectedStyle === v.style && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="w-5 h-5 text-accent drop-shadow-md" />
                        </div>
                      )}
                    </div>

                    {/* Before thumbnail strip */}
                    <div className="px-3 py-2.5 flex items-center gap-2.5 border-t border-border/30 bg-muted/20">
                      <img
                        src={uploadedImage ?? BEFORE_IMAGE}
                        alt="Before"
                        className="w-10 h-10 rounded-lg object-cover ring-1 ring-border/40 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-[10px] font-body text-muted-foreground uppercase tracking-wider">
                          Before
                        </p>
                        <p className="text-xs font-body text-foreground truncate">
                          Your uploaded space
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-4 space-y-2.5">
                      <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {v.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {v.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-body px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* ─── SECTION 3: Actions ────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.4 }}
                className="glass-effect rounded-2xl p-6 md:p-8 space-y-5"
                data-ocid="studio.actions.section"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-body text-sm font-semibold">
                      3
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl text-foreground">
                    Save &amp; Share
                  </h2>
                </div>

                <p className="text-muted-foreground font-body text-sm">
                  You selected the{" "}
                  <span className="text-accent font-semibold">
                    {selectedStyle}
                  </span>{" "}
                  style. Save it to your profile or inspire others.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="gap-2"
                    data-ocid="studio.save.primary_button"
                  >
                    {isSaving ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    {isSaving ? "Saving…" : "Save Design"}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handlePinterestShare}
                    className="gap-2 transition-smooth hover:border-rose-400/60 hover:text-rose-500"
                    data-ocid="studio.pinterest.button"
                  >
                    <Share2 className="w-4 h-4" />
                    Pin to Pinterest
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleInstagramShare}
                    className="gap-2 transition-smooth hover:border-accent/60 hover:text-accent"
                    data-ocid="studio.instagram.button"
                  >
                    <Upload className="w-4 h-4" />
                    Share to Instagram
                  </Button>
                </div>
              </motion.div>

              {/* Start over */}
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  onClick={handleReset}
                  className="text-muted-foreground hover:text-foreground gap-2"
                  data-ocid="studio.restart.button"
                >
                  <RotateCcw className="w-4 h-4" />
                  Upload a different photo
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
