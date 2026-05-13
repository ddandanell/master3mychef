/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors
        'brand-black': '#050505',
        'brand-white': '#F5F3EF',
        'brand-gold': '#D4AF37',
        'brand-gold-light': '#E8C84B',
        // Homepage
        'home-bg-dark': '#0A0A0A',
        'home-text-light': '#F5F3EF',
        'home-card-bg-dark': '#1A1A1A',
        'home-card-text-dark': '#1A1A1A',
        'home-text-secondary': '#9A9590',
        // Fine Dining
        'fd-bg-primary': '#050505',
        'fd-text-primary': '#F5F3EF',
        'fd-text-secondary': '#9A9590',
        'fd-text-tertiary': '#8A8A8A',
        'fd-accent-gold': '#D4AF37',
        'fd-accent-gold-light': '#E8C84B',
        'fd-card-bg': '#1A1A1A',
        'fd-border': '#2A2A2A',
        // Catering
        'cat-bg-primary': '#F5F3EF',
        'cat-bg-alt': '#FFFFFF',
        'cat-text-primary': '#2C2419',
        'cat-text-secondary': '#6B5B4E',
        'cat-text-muted': '#7A6E64',
        'cat-accent': '#D4AF37',
        'cat-accent-light': '#E8C84B',
        'cat-border': '#E5E0D8',
        // Events
        'evt-bg-primary': '#F5F3EF',
        'evt-bg-alt': '#FFFFFF',
        'evt-text-primary': '#1A1A1A',
        'evt-text-secondary': '#3D3D3D',
        'evt-text-muted': '#5A5A5A',
        'evt-accent-slate': '#2C5F7C',
        'evt-accent-gold': '#D4AF37',
        'evt-border': '#E5E0D8',
        // Functional
        'success': '#4CAF50',
        'error': '#E53935',
        'whatsapp': '#25D366',
        'whatsapp-hover': '#128C7E',
        // Shadcn defaults (keep for compatibility)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container-mobile': '100%',
        'container-tablet': '720px',
        'container-desktop': '960px',
        'container-lg': '1120px',
        'container-xl': '1280px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'whatsapp': '0 4px 20px rgba(37, 211, 102, 0.3)',
        'whatsapp-hover': '0 6px 30px rgba(37, 211, 102, 0.4)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 4px 20px rgba(37, 211, 102, 0.3)" },
          "50%": { boxShadow: "0 4px 30px rgba(37, 211, 102, 0.5)" },
        },
        "scroll-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scroll-pulse": "scroll-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
