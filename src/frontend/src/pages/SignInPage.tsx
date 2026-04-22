import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Lock, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const features = [
  { icon: Sparkles, label: "AI-powered design suggestions" },
  { icon: Zap, label: "Instant room transformations" },
  { icon: Shield, label: "Secure & private — no passwords" },
];

export default function SignInPage() {
  const { login, isLoggingIn, isInitializing, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      void navigate({ to: "/studio" });
    }
  }, [isAuthenticated, isInitializing, navigate]);

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16 px-4"
      data-ocid="signin.page"
    >
      {/* Ambient background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="w-full max-w-md">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-body">
            <Sparkles className="w-3.5 h-3.5" />
            AI Design Studio
          </span>
        </motion.div>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="glass-effect rounded-2xl p-8 md:p-10 shadow-2xl"
          data-ocid="signin.card"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Lock className="w-7 h-7 text-primary" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-center mb-8"
          >
            <h1 className="font-display italic text-3xl text-foreground mb-2">
              Welcome back
            </h1>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Sign in to transform your small space with AI-powered interior
              design.
            </p>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="space-y-3 mb-8"
          >
            {features.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </span>
                <span className="font-body">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-card/80 text-xs text-muted-foreground font-body backdrop-blur-sm">
                Secure login via Internet Identity
              </span>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              onClick={login}
              disabled={isLoggingIn || isInitializing}
              className="w-full h-12 text-base font-body font-medium group transition-smooth"
              data-ocid="signin.submit_button"
            >
              {isLoggingIn ? (
                <span
                  className="flex items-center gap-2"
                  data-ocid="signin.loading_state"
                >
                  <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  Connecting…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Sign in with Internet Identity
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground font-body">
              No password needed — blockchain-based secure authentication.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground font-body">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:text-primary/80 font-medium transition-colors underline-offset-2 hover:underline"
              data-ocid="signin.signup_link"
            >
              Create account
            </Link>
          </p>
          <p className="text-xs text-muted-foreground/60 font-body">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer hover:text-muted-foreground transition-colors">
              Terms
            </span>{" "}
            and{" "}
            <span className="underline cursor-pointer hover:text-muted-foreground transition-colors">
              Privacy Policy
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
