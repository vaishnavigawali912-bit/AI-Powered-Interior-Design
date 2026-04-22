# Design Brief

## Direction

AI Interior Design for Small Spaces — Modern luxury SaaS showcasing AI-powered interior design suggestions for compact US apartments and small homes with editorial elegance and glass-like UI layers.

## Tone

Refined minimalism: confident restraint with purposeful elegance. Airbnb/Apple aesthetic — approachable, never austere or cold, with warm accents over cool neutrals.

## Differentiation

Glassmorphism cards on layered depth backgrounds with warm-cool color harmony (cool foundations + warm taupe primary accent) and scroll-triggered subtle animations. Every card feels like a floating design suggestion.

## Color Palette

| Token      | OKLCH           | Role                      |
| ---------- | --------------- | ------------------------- |
| background | 0.98 0.008 230  | Cool off-white (spacious) |
| foreground | 0.18 0.015 230  | Deep cool grey            |
| card       | 1.0 0.004 230   | Pure white with blur      |
| primary    | 0.48 0.14 45    | Warm taupe (inviting)     |
| accent     | 0.6 0.15 170    | Cool teal (interactive)   |
| muted      | 0.94 0.01 230   | Soft neutral              |

## Typography

- Display: Instrument Serif (italic) — headings, hero, editorial voice
- Body: General Sans — paragraphs, UI labels, clean readability
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl font-bold`, label `text-sm font-semibold`, body `text-base`

## Elevation & Depth

Glass cards (backdrop blur, semi-transparency) float on layered backgrounds. Shadows are soft and cool, never harsh. Depth through opacity, blur, and z-stacking — not aggressive drop shadows.

## Structural Zones

| Zone    | Background           | Border                    | Notes                           |
| ------- | -------------------- | ------------------------- | ------------------------------- |
| Header  | bg-card/glass-effect | border-border/10          | Sticky, subtle blur             |
| Hero    | bg-background        | —                         | Large imagery, warm primary CTA |
| Content | bg-background        | —                         | Sections alternate bg-muted/5   |
| Cards   | glass-effect         | border-border/20 with blur | Hover lift (translate-y-1)      |
| Footer  | bg-muted/5           | border-t border-border/10 | Minimal, centered text          |

## Spacing & Rhythm

Generous whitespace (6–12 rem gaps between sections). Content grouping via cards with 2rem internal padding. Micro-spacing (0.5–1rem) between UI elements. Mobile-first density with expanded gaps at md breakpoint.

## Component Patterns

- Buttons: primary (warm taupe bg, rounded-lg), hover (scale-105, shadow-glass transition-smooth)
- Cards: glass-effect class, rounded-lg, p-6, hover (translate-y-1 shadow-glass)
- Badges: small caps, accent color, rounded-full

## Motion

- Entrance: fade-in with staggered delays (0.1s per item) + subtle translateY(8px)
- Hover: scale-105 or translate-y-1 on interactive elements, 0.3s smooth easing
- Decorative: float animation (3s infinite) on select hero imagery

## Constraints

- No raw hex colors, use semantic tokens exclusively
- No 3D transforms or heavy animations (preserve performance for image galleries)
- Glassmorphism only on cards and header, not every element
- Maintain AA+ contrast in both light and dark modes

## Signature Detail

Semi-transparent glass cards with cool backdrop blur on warm-cool backgrounds — creates visual depth and luxury without complexity, perfect for showcasing interior design imagery.

