import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#050508",
          cyan: "#06b6d4",
          "cyan-light": "#22d3ee",
          "cyan-dark": "#0891b2",
          card: "var(--brand-card)",
          border: "var(--brand-border)",
          support: "#06b6d4",
          "support-light": "#22d3ee",
          "support-dark": "#0891b2",
          neon: "#00f3ff",
        },


      },
      backgroundImage: {
        "premium-gradient": "radial-gradient(circle at center, #11111a 0%, #050508 100%)",

        "support-gradient": "linear-gradient(to right, #06b6d4, #3b82f6)",
        "dashboard-grid": "radial-gradient(circle, rgba(0, 243, 255, 0.05) 1px, transparent 1px)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "glow": "glow 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4", boxShadow: "0 0 20px rgba(6, 182, 212, 0.25)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 50px rgba(6, 182, 212, 0.45)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "premium": "0 20px 50px rgba(0, 0, 0, 0.6)",
        "cyan-glow": "0 0 20px rgba(6, 182, 212, 0.2)",
        "cyan-glow-strong": "0 0 40px rgba(6, 182, 212, 0.4)",
        "neon-glow": "0 0 30px rgba(0, 243, 255, 0.3)",

      },
    },
  },
  plugins: [],
};
export default config;

