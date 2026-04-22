import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LogIn,
  LogOut,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Wand2,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const BASE_NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
];

function isNavActive(pathname: string, to: string): boolean {
  if (to === "/") return pathname === "/";
  return pathname.startsWith(to);
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { isAuthenticated, isInitializing, isLoggingIn, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation
  const prevPathRef = { current: pathname };
  if (prevPathRef.current !== pathname) {
    prevPathRef.current = pathname;
    setMenuOpen(false);
  }

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const authNavLinks = isAuthenticated
    ? [...BASE_NAV_LINKS, { label: "Studio", to: "/studio" }]
    : BASE_NAV_LINKS;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-smooth ${
        scrolled
          ? "glass-effect shadow-glass dark:glass-effect-dark dark:shadow-glass-dark"
          : "bg-card/80 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="header.logo.link"
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-lg font-semibold text-foreground tracking-tight">
            AI Space Design
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {authNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth flex items-center gap-1.5 ${
                isNavActive(pathname, link.to)
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
              data-ocid={`header.nav.${link.label.toLowerCase()}.link`}
            >
              {link.label === "Studio" && <Wand2 className="w-3.5 h-3.5" />}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="header.theme_toggle"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>

          {/* Auth controls — desktop */}
          {!isInitializing && isAuthenticated && (
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="hidden md:flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-smooth"
              data-ocid="header.signout.button"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          )}
          {!isInitializing && !isAuthenticated && (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/signin" data-ocid="header.signin.link">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                  data-ocid="header.signin.button"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" data-ocid="header.signup.link">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-medium"
                  data-ocid="header.signup.button"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? "Signing in…" : "Get Started"}
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="header.hamburger.button"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div
          className="md:hidden glass-effect dark:glass-effect-dark border-t border-border/20 px-4 py-3 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200"
          data-ocid="header.mobile_menu"
        >
          {authNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2.5 rounded-md text-sm font-medium transition-smooth flex items-center gap-1.5 ${
                isNavActive(pathname, link.to)
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
              data-ocid={`header.mobile_nav.${link.label.toLowerCase()}.link`}
            >
              {link.label === "Studio" && <Wand2 className="w-3.5 h-3.5" />}
              {link.label}
            </Link>
          ))}

          <div className="border-t border-border/20 pt-2 mt-1 flex flex-col gap-1">
            {!isInitializing && isAuthenticated && (
              <button
                type="button"
                onClick={logout}
                className="px-4 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth flex items-center gap-1.5 w-full text-left"
                data-ocid="header.mobile_signout.button"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            )}
            {!isInitializing && !isAuthenticated && (
              <div className="flex flex-col gap-1">
                <Link
                  to="/signin"
                  className="px-4 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth flex items-center gap-1.5"
                  data-ocid="header.mobile_signin.link"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="mt-1"
                  data-ocid="header.mobile_signup.link"
                >
                  <Button
                    size="sm"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-medium"
                    data-ocid="header.mobile_signup.button"
                  >
                    Get Started — It&apos;s Free
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
