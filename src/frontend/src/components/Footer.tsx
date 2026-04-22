import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { ExternalLink, Sparkles } from "lucide-react";

const FOOTER_LINKS = {
  Design: [
    { label: "Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
    { label: "Design Gallery", to: "/gallery" },
  ],
  Resources: [
    { label: "Studio Apartment Ideas", to: "/blog?category=Studio+Living" },
    { label: "Small Living Room Ideas", to: "/gallery" },
    { label: "Design Styles Guide", to: "/blog?category=Design+Styles" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <footer
      className="bg-card border-t border-border/40 mt-auto"
      data-ocid="footer"
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 mb-3 w-fit"
              data-ocid="footer.logo.link"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display text-lg font-semibold text-foreground">
                AI Space Design
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered interior design for small spaces across the USA.
              Transform studio apartments, NYC condos, and compact homes into
              luxury living — beautifully and affordably.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                      data-ocid={`footer.${section.toLowerCase()}.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 opacity-40" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {year} AI Space Design. All rights reserved.</p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-smooth"
            data-ocid="footer.caffeine.link"
          >
            Built with love using caffeine.ai
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
