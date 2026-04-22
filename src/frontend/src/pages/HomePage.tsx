import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useFeaturedBlogPosts } from "@/hooks/useBlog";
import { useGalleryItems } from "@/hooks/useGallery";
import { getRoomTypeLabel, getStyleLabel } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Camera,
  ImageUp,
  LayoutGrid,
  LogIn,
  Paintbrush,
  ShoppingBag,
  Sparkles,
  Upload,
  UserPlus,
  Wand2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI-Powered Redesign",
    description:
      "Upload any room photo and get tailored luxury design suggestions within seconds.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: LayoutGrid,
    title: "Small Space Optimization",
    description:
      "Smart layouts make even 200 sq ft feel open, functional, and beautifully designed.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Paintbrush,
    title: "Budget-Friendly Luxury",
    description:
      "Curated product picks from Amazon, IKEA, and Wayfair — stunning looks at real prices.",
    gradient: "from-primary/15 to-accent/10",
  },
  {
    icon: ShoppingBag,
    title: "USA-Focused Layouts",
    description:
      "Designs built for NYC studios, SF condos, and compact homes across the United States.",
    gradient: "from-accent/15 to-primary/10",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Camera,
    title: "Upload Your Photo",
    description:
      "Take a photo of your room and upload it to our AI design engine. Any angle works.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Choose Your Style",
    description:
      "Pick from 7 curated aesthetics — Modern, Japandi, Scandinavian, Coastal, and more.",
  },
  {
    step: "03",
    icon: Wand2,
    title: "Get Your AI Design",
    description:
      "Our AI generates a fully redesigned version of your room, optimized for your space.",
  },
  {
    step: "04",
    icon: ShoppingBag,
    title: "Shop the Look",
    description:
      "Every design links directly to affordable US products you can buy today.",
  },
];

const STATS = [
  { value: "10,000+", label: "Spaces Redesigned" },
  { value: "7", label: "Design Styles" },
  { value: "50+", label: "Design Tips" },
  { value: "4.9★", label: "User Rating" },
];

function useIntersectionObserver(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ── Upload & Design Section ──────────────────────────────────────────────────

function UploadDesignTeaser() {
  return (
    <div className="text-center" data-ocid="upload_teaser.panel">
      {/* Visual upload zone mockup */}
      <div
        className="relative mb-8 mx-auto max-w-md rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-10 group cursor-default"
        aria-hidden="true"
      >
        {/* Decorative ambient blobs */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-2">
            <ImageUp className="w-8 h-8 text-primary" />
          </div>
          <p className="text-foreground font-semibold text-base">
            Drop your room photo here
          </p>
          <p className="text-muted-foreground text-sm">
            PNG, JPG, WEBP up to 10 MB
          </p>
          <div className="mt-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
            Sign in to unlock AI design
          </div>
        </div>
      </div>

      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
        Ready to see your space transformed?
      </h3>
      <p className="text-muted-foreground text-base max-w-sm mx-auto mb-8 leading-relaxed">
        Create a free account to upload your room photo and receive AI-generated
        luxury design variations — tailored to your style.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/signup" data-ocid="upload_teaser.signup.primary_button">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth gap-2 font-semibold px-8 shadow-lg shadow-primary/20 w-full sm:w-auto"
          >
            <UserPlus className="w-4 h-4" />
            Get Started Free
          </Button>
        </Link>
        <Link to="/signin" data-ocid="upload_teaser.signin.secondary_button">
          <Button
            size="lg"
            variant="outline"
            className="border-border/60 hover:bg-muted/60 transition-smooth font-medium px-8 gap-2 w-full sm:w-auto"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}

function UploadDesignAuthenticated() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }
  function handleDragLeave() {
    setIsDragging(false);
  }
  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    void navigate({ to: "/studio" });
  }
  function handleClick() {
    void navigate({ to: "/studio" });
  }

  return (
    <div className="text-center" data-ocid="upload_authenticated.panel">
      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
        Upload Your Room Photo
      </h3>
      <p className="text-muted-foreground text-base max-w-sm mx-auto mb-8 leading-relaxed">
        Drag and drop your room image below, then let AI redesign it in seconds
        with a luxury aesthetic tailored to your space.
      </p>

      {/* Drag-and-drop upload zone */}
      <button
        type="button"
        aria-label="Upload room image and go to AI Design Studio"
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        data-ocid="upload_authenticated.dropzone"
        className={`relative w-full mx-auto max-w-md rounded-2xl border-2 border-dashed p-12 cursor-pointer transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-left ${
          isDragging
            ? "border-primary bg-primary/12 scale-[1.02]"
            : "border-primary/35 bg-primary/5 hover:border-primary/60 hover:bg-primary/8 hover:scale-[1.01]"
        }`}
      >
        {/* Ambient blobs */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div
            className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-2 transition-all duration-300 ${
              isDragging
                ? "bg-primary/25 border-primary/40 scale-110"
                : "bg-primary/15 border-primary/20 group-hover:bg-primary/22 group-hover:scale-105"
            }`}
          >
            <Upload
              className={`w-8 h-8 transition-colors duration-300 ${isDragging ? "text-primary" : "text-primary/80 group-hover:text-primary"}`}
            />
          </div>
          <p className="text-foreground font-semibold text-base">
            {isDragging
              ? "Release to start designing"
              : "Drag & drop your photo here"}
          </p>
          <p className="text-muted-foreground text-sm">
            or click to open the AI Design Studio
          </p>
          <div className="mt-1 text-xs text-muted-foreground/60">
            PNG, JPG, WEBP · up to 10 MB
          </div>
        </div>
      </button>

      <div className="mt-7">
        <Link
          to="/studio"
          data-ocid="upload_authenticated.get_ai_design.primary_button"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth gap-2 font-semibold px-10 shadow-lg shadow-primary/20"
          >
            <Wand2 className="w-4 h-4" />
            Get AI Design
          </Button>
        </Link>
      </div>
    </div>
  );
}

function UploadDesignSection() {
  const { isAuthenticated } = useAuth();
  const sectionAnim = useIntersectionObserver();

  return (
    <div ref={sectionAnim.ref}>
      <section
        className="relative overflow-hidden bg-card border-y border-border/40 py-20"
        data-ocid="upload_design.section"
      >
        {/* Background depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl translate-y-1/2" />
        </div>

        <div className="container relative z-10">
          <div
            className={`transition-all duration-700 ${sectionAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Section header */}
            <div className="text-center mb-10">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/30 bg-primary/5"
              >
                <Sparkles className="w-3 h-3 mr-1.5" />
                AI Design Studio
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Transform Your Space{" "}
                <span className="text-primary italic">with AI</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Upload any room photo and receive stunning, personalized luxury
                design variations in seconds.
              </p>
            </div>

            {/* Glass card containing the upload area */}
            <div className="max-w-xl mx-auto">
              <div className="glass-effect dark:glass-effect-dark rounded-3xl border border-border/25 p-8 md:p-10 shadow-xl shadow-primary/5">
                {isAuthenticated ? (
                  <UploadDesignAuthenticated />
                ) : (
                  <UploadDesignTeaser />
                )}
              </div>

              {/* Social proof line beneath card */}
              <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground/60">
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5" />
                  10,000+ rooms redesigned
                </span>
                <span className="w-px h-3 bg-border/50" aria-hidden="true" />
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI results in seconds
                </span>
                <span
                  className="w-px h-3 bg-border/50 hidden sm:block"
                  aria-hidden="true"
                />
                <span className="hidden sm:flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Free to use
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Home Page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { data: featuredPosts } = useFeaturedBlogPosts(3);
  const { data: galleryItems } = useGalleryItems();
  const features = useIntersectionObserver();
  const howItWorks = useIntersectionObserver();
  const galleryPreview = useIntersectionObserver();
  const blogPreview = useIntersectionObserver();

  return (
    <>
      <SEOHead
        title="AI Interior Design for Small Spaces USA | Transform Your Room"
        description="Transform your small living room, studio apartment, or compact home with AI-powered luxury interior design. Free design ideas, before/after galleries, and curated US product recommendations."
        ogImage="/assets/generated/hero-before-after.dim_1200x600.jpg"
        canonical="/"
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-background"
        data-ocid="hero.section"
      >
        {/* Ambient blobs */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/4 blur-3xl" />
        </div>

        <div className="container relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-8 fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Interior Design · Free · USA-Focused
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] tracking-tight mb-6 fade-in fade-in-delay-1">
            Transform Your Small Space{" "}
            <span className="text-primary italic block sm:inline">
              into Luxury
            </span>{" "}
            <span className="text-foreground/70">with AI</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed fade-in fade-in-delay-2">
            Studio apartments, NYC condos, and compact homes across the USA —
            beautifully redesigned by AI. Free design inspiration, before/after
            galleries, and curated product picks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in fade-in-delay-3">
            <Link to="/gallery" data-ocid="hero.gallery.primary_button">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth gap-2 font-semibold px-8 shadow-lg shadow-primary/20"
              >
                Explore Designs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/blog" data-ocid="hero.blog.secondary_button">
              <Button
                size="lg"
                variant="outline"
                className="border-border/60 hover:bg-muted/60 transition-smooth font-medium px-8 gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Read Design Guides
              </Button>
            </Link>
          </div>

          {/* Before/After Hero Image */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/30 fade-in fade-in-delay-3">
            <img
              src="/assets/generated/hero-before-after.dim_1200x600.jpg"
              alt="Before and after small space interior design transformation"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            {/* Divider label overlay */}
            <div className="absolute inset-0 flex pointer-events-none">
              <div className="w-1/2 flex items-end pb-4 pl-4">
                <span className="px-3 py-1.5 rounded-full bg-foreground/80 text-background text-xs font-semibold backdrop-blur-sm">
                  Before
                </span>
              </div>
              <div className="w-px bg-white/50 self-stretch" />
              <div className="w-1/2 flex items-end pb-4 pl-4">
                <span className="px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                  After · AI Redesigned
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Upload & Design ── */}
      <UploadDesignSection />

      {/* ── Stats bar ── */}
      <section
        className="bg-card border-y border-border/40 py-10"
        data-ocid="stats.section"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-primary font-semibold">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <div ref={howItWorks.ref}>
        <section
          className="bg-background py-24"
          data-ocid="how_it_works.section"
        >
          <div className="container">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/30 bg-primary/5"
              >
                Simple Process
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                From cluttered room to luxury retreat in four simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_IT_WORKS.map((step, i) => (
                <div
                  key={step.step}
                  className={`relative flex flex-col transition-all duration-700 ${
                    howItWorks.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                  data-ocid={`how_it_works.item.${i + 1}`}
                >
                  {/* Connector line (desktop) */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-[calc(100%-16px)] w-8 h-px bg-border/60 z-0"
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/15">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-display text-3xl text-foreground/15 font-semibold leading-none">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Feature Highlights ── */}
      <div ref={features.ref}>
        <section
          className="bg-muted/20 border-y border-border/30 py-24"
          data-ocid="features.section"
        >
          <div className="container">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 text-accent border-accent/30 bg-accent/5"
              >
                Why AI Space Design
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Design Intelligence for{" "}
                <span className="text-accent italic">Every Space</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Professional-grade design ideas without the professional price
                tag — made for small US homes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`glass-effect dark:glass-effect-dark rounded-2xl p-6 border border-border/30 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                    features.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                  data-ocid={`features.item.${i + 1}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5`}
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-base">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Gallery Teaser ── */}
      <div ref={galleryPreview.ref}>
        <section
          className="bg-background py-24"
          data-ocid="gallery_preview.section"
        >
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-primary border-primary/30 bg-primary/5"
                >
                  Before &amp; After
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">
                  Real Transformations
                </h2>
                <p className="text-muted-foreground text-lg max-w-lg">
                  Small spaces, dramatically redesigned. Every room in the
                  gallery was reimagined with AI.
                </p>
              </div>
              <Link
                to="/gallery"
                className="hidden md:block shrink-0"
                data-ocid="gallery_preview.view_all.link"
              >
                <Button
                  variant="ghost"
                  className="gap-2 text-primary hover:text-primary/80 hover:bg-primary/5"
                >
                  View all <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(galleryItems ?? []).slice(0, 3).map((item, i) => (
                <Link
                  key={item.id.toString()}
                  to="/gallery/$id"
                  params={{ id: item.id.toString() }}
                  className={`group block transition-all duration-700 ${
                    galleryPreview.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                  data-ocid={`gallery_preview.item.${i + 1}`}
                >
                  <div className="rounded-2xl overflow-hidden bg-card border border-border/40 hover:shadow-xl transition-smooth hover:-translate-y-1">
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                      <img
                        src={
                          i === 0
                            ? "/assets/generated/gallery-1-after.dim_800x600.jpg"
                            : i === 1
                              ? "/assets/generated/gallery-2-after.dim_800x600.jpg"
                              : "/assets/generated/gallery-3-after.dim_800x600.jpg"
                        }
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-card/85 backdrop-blur-sm text-xs font-medium text-foreground border border-border/20">
                          {getRoomTypeLabel(item.roomType)}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                          {getStyleLabel(item.style)}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-smooth text-base">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link
                to="/gallery"
                data-ocid="gallery_preview.mobile_view_all.link"
              >
                <Button variant="outline" className="gap-2">
                  View Full Gallery <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── Blog Teaser ── */}
      <div ref={blogPreview.ref}>
        <section
          className="bg-muted/20 border-y border-border/30 py-24"
          data-ocid="blog_preview.section"
        >
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-accent border-accent/30 bg-accent/5"
                >
                  Design Guides
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">
                  Design Ideas &amp; Inspiration
                </h2>
                <p className="text-muted-foreground text-lg max-w-lg">
                  Expert articles on small-space living, curated for US homes.
                </p>
              </div>
              <Link
                to="/blog"
                className="hidden md:block shrink-0"
                data-ocid="blog_preview.view_all.link"
              >
                <Button
                  variant="ghost"
                  className="gap-2 text-primary hover:text-primary/80 hover:bg-primary/5"
                >
                  All articles <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(featuredPosts ?? []).map((post, i) => (
                <Link
                  key={post.id.toString()}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className={`group block transition-all duration-700 ${
                    blogPreview.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                  data-ocid={`blog_preview.item.${i + 1}`}
                >
                  <div className="rounded-2xl overflow-hidden bg-card border border-border/40 hover:shadow-xl transition-smooth hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={
                          i === 0
                            ? "/assets/generated/blog-1.dim_800x500.jpg"
                            : i === 1
                              ? "/assets/generated/blog-2.dim_800x500.jpg"
                              : "/assets/generated/blog-3.dim_800x500.jpg"
                        }
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2 flex-1 text-base leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground/70 border-t border-border/30 pt-3">
                        <span className="font-medium">{post.author}</span>
                        <span>{Number(post.readTimeMinutes)} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link to="/blog" data-ocid="blog_preview.mobile_view_all.link">
                <Button variant="outline" className="gap-2">
                  All Design Guides <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── CTA Banner ── */}
      <section
        className="relative overflow-hidden bg-card border-t border-border/40 py-24"
        data-ocid="cta_banner.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/8 blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/8 blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            100% Free to Use
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-5">
            Start Designing Your{" "}
            <span className="text-primary italic">Space Today</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Browse hundreds of AI-powered before/after transformations, get
            inspired, and find products to make it real — all completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gallery" data-ocid="cta_banner.primary_button">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth gap-2 font-semibold px-10 shadow-lg shadow-primary/25"
              >
                Explore the Gallery
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/blog" data-ocid="cta_banner.secondary_button">
              <Button
                size="lg"
                variant="outline"
                className="border-border/60 hover:bg-muted/60 transition-smooth font-medium px-10 gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Read Guides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
