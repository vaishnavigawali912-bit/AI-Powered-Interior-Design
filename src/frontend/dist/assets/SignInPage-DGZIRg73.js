import { c as createLucideIcon, u as useAuth, a as useNavigate, r as reactExports, j as jsxRuntimeExports, S as Sparkles, B as Button, L as Link } from "./index-BM5VdnwD.js";
import { m as motion } from "./proxy-DcSzmA0Z.js";
import { A as ArrowRight } from "./arrow-right-BqfckFjU.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$2);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const features = [
  { icon: Sparkles, label: "AI-powered design suggestions" },
  { icon: Zap, label: "Instant room transformations" },
  { icon: Shield, label: "Secure & private — no passwords" }
];
function SignInPage() {
  const { login, isLoggingIn, isInitializing, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      void navigate({ to: "/studio" });
    }
  }, [isAuthenticated, isInitializing, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16 px-4",
      "data-ocid": "signin.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 -z-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[140px]" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, ease: "easeOut" },
              className: "flex justify-center mb-8",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-body", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                "AI Design Studio"
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
              className: "glass-effect rounded-2xl p-8 md:p-10 shadow-2xl",
              "data-ocid": "signin.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.5, delay: 0.2 },
                    className: "flex justify-center mb-6",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-primary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, delay: 0.25 },
                    className: "text-center mb-8",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display italic text-3xl text-foreground mb-2", children: "Welcome back" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm leading-relaxed", children: "Sign in to transform your small space with AI-powered interior design." })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, delay: 0.35 },
                    className: "space-y-3 mb-8",
                    children: features.map(({ icon: Icon, label }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.4, delay: 0.4 + i * 0.08 },
                        className: "flex items-center gap-3 text-sm text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-accent" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body", children: label })
                        ]
                      },
                      label
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border/50" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 bg-card/80 text-xs text-muted-foreground font-body backdrop-blur-sm", children: "Secure login via Internet Identity" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.5 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          onClick: login,
                          disabled: isLoggingIn || isInitializing,
                          className: "w-full h-12 text-base font-body font-medium group transition-smooth",
                          "data-ocid": "signin.submit_button",
                          children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "flex items-center gap-2",
                              "data-ocid": "signin.loading_state",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" }),
                                "Connecting…"
                              ]
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            "Sign in with Internet Identity",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground font-body", children: "No password needed — blockchain-based secure authentication." })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.5, delay: 0.6 },
              className: "mt-6 text-center space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground font-body", children: [
                  "Don't have an account?",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/signup",
                      className: "text-primary hover:text-primary/80 font-medium transition-colors underline-offset-2 hover:underline",
                      "data-ocid": "signin.signup_link",
                      children: "Create account"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/60 font-body", children: [
                  "By continuing, you agree to our",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline cursor-pointer hover:text-muted-foreground transition-colors", children: "Terms" }),
                  " ",
                  "and",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline cursor-pointer hover:text-muted-foreground transition-colors", children: "Privacy Policy" }),
                  "."
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  SignInPage as default
};
