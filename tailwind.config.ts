import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background":
            "url('https://cdn.dribbble.com/userupload/4270087/file/original-dd685e687e629f85a09d662b41578434.png?resize=1024x1024')",
      },
      gridTemplateColumns: {},
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        heading: ['var(--font-heading)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans],
      },
      inset: {},
      padding: {},
      height: {},
      margin: {},
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        label: "clamp(1rem, 1vw + 1.31rem, 1.2rem)",
        "sub-title": "clamp(1rem, 1.56vw + 1.56rem, 1.25rem)",
        title: "clamp(2.44rem, 2.38vw + 1.85rem, 2.8rem)",
        features: "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        section: "clamp(3.81rem, 5.18vw + 2.52rem, 4rem)",
        hero: "clamp(4.77rem, 7.48vw + 2.9rem, 6rem)",
      },
      colors: {
        primary: {
          '700': '#00249C',
          '500': '#F9F8F5',
          '400': '#000000',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          '300': '#27E2A5',
          '150': '#0070F3',
          '200': '#FFCC36',
          '100': '#FF4D73',
          '50': '#87EAFF',
          '20': '#0192FF',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      width: {},
      gap: {},
      keyframes: {
        "accordion-down": {

          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },

        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
