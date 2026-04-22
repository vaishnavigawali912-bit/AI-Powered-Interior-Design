import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "@tanstack/react-router";
import { Bookmark, Palette, Share2, Sparkles, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  {
    icon: Bookmark,
    label: "Save designs",
    detail:
      "Keep your favorite AI-generated rooms in your personal collection.",
  },
  {
    icon: Share2,
    label: "Share creations",
    detail: "Export to Pinterest or Instagram with one tap.",
  },
  {
    icon: TrendingUp,
    label: "Track your style journey",
    detail:
      "See how your taste evolves over time with a personal design history.",
  },
  {
    icon: Palette,
    label: "Unlock AI studio",
    detail:
      "Upload your room and receive curated design transformations instantly.",
  },
];

export default function SignUpPage() {
  const { isAuthenticated, isInitializing, isLoggingIn, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      void navigate({ to: "/studio" });
    }
  }, [isAuthenticated, isInitializing, navigate]);

  return (
    <>
      <title>Create Your Free Account — AI Space Design</title>

      <section
        className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-background"
        data-ocid="signup.page"
      >
        <div className="w-full max-w-lg fade-in">
          {/* Glassmorphism card */}
          <div className="glass-effect rounded-2xl p-8 md:p-10 shadow-xl border border-border/30">
            {/* Icon badge */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full ring-2 ring-card" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2 tracking-tight">
              Create your design account
            </h1>
            <p className="text-center text-muted-foreground text-sm mb-8 max-w-xs mx-auto">
              Join thousands of small-space owners transforming their homes with
              AI-powered interior design — completely free.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-8" data-ocid="signup.benefits.list">
              {benefits.map(({ icon: Icon, label, detail }, i) => (
                <li
                  key={label}
                  className="flex items-start gap-3 fade-in"
                  style={{ animationDelay: `${i * 0.08 + 0.15}s` }}
                  data-ocid={`signup.benefit.item.${i + 1}`}
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <Button
              size="lg"
              onClick={login}
              disabled={isLoggingIn || isInitializing}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-medium flex items-center justify-center gap-2"
              data-ocid="signup.submit_button"
            >
              {isLoggingIn ? (
                <>
                  <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  Connecting…
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Get started for free
                </>
              )}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 border-t border-border/40" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="flex-1 border-t border-border/40" />
            </div>

            {/* Sign-in link */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-primary hover:text-primary/80 font-medium transition-smooth"
                data-ocid="signup.signin.link"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Privacy note */}
          <p className="text-center text-xs text-muted-foreground mt-4 px-2">
            Authentication is handled by{" "}
            <span className="font-medium text-foreground/70">
              Internet Identity
            </span>{" "}
            — no passwords, no emails, no data collected. Your privacy is
            protected by design.
          </p>
        </div>
      </section>
    </>
  );
}
