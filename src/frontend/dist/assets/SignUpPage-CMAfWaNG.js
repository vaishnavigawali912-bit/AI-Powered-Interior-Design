import { c as createLucideIcon, u as useAuth, a as useNavigate, r as reactExports, j as jsxRuntimeExports, S as Sparkles, B as Button, L as Link } from "./index-BM5VdnwD.js";
import { S as Share2 } from "./share-2-igR78Y0r.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
];
const Bookmark = createLucideIcon("bookmark", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const benefits = [
  {
    icon: Bookmark,
    label: "Save designs",
    detail: "Keep your favorite AI-generated rooms in your personal collection."
  },
  {
    icon: Share2,
    label: "Share creations",
    detail: "Export to Pinterest or Instagram with one tap."
  },
  {
    icon: TrendingUp,
    label: "Track your style journey",
    detail: "See how your taste evolves over time with a personal design history."
  },
  {
    icon: Palette,
    label: "Unlock AI studio",
    detail: "Upload your room and receive curated design transformations instantly."
  }
];
function SignUpPage() {
  const { isAuthenticated, isInitializing, isLoggingIn, login } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      void navigate({ to: "/studio" });
    }
  }, [isAuthenticated, isInitializing, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Create Your Free Account — AI Space Design" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-background",
        "data-ocid": "signup.page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect rounded-2xl p-8 md:p-10 shadow-xl border border-border/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full ring-2 ring-card" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl text-center text-foreground mb-2 tracking-tight", children: "Create your design account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm mb-8 max-w-xs mx-auto", children: "Join thousands of small-space owners transforming their homes with AI-powered interior design — completely free." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", "data-ocid": "signup.benefits.list", children: benefits.map(({ icon: Icon, label, detail }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-3 fade-in",
                style: { animationDelay: `${i * 0.08 + 0.15}s` },
                "data-ocid": `signup.benefit.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground leading-snug", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-snug mt-0.5", children: detail })
                  ] })
                ]
              },
              label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                onClick: login,
                disabled: isLoggingIn || isInitializing,
                className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-medium flex items-center justify-center gap-2",
                "data-ocid": "signup.submit_button",
                children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" }),
                  "Connecting…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                  "Get started for free"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "or" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border/40" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
              "Already have an account?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/signin",
                  className: "text-primary hover:text-primary/80 font-medium transition-smooth",
                  "data-ocid": "signup.signin.link",
                  children: "Sign in"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-4 px-2", children: [
            "Authentication is handled by",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/70", children: "Internet Identity" }),
            " ",
            "— no passwords, no emails, no data collected. Your privacy is protected by design."
          ] })
        ] })
      }
    )
  ] });
}
export {
  SignUpPage as default
};
