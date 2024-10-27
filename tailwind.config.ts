import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        /* custom colors */
        // lightest, lighter, light
        // soft, medium, bold
        // dark, darker, darkest
        brand: {
          50: "#F3EAFA", // lightest
          100: "#E4D1F5", // lighter
          200: "#C9A3EA", // light
          300: "#B17AE1",
          400: "#964CD7", // soft
          500: "#7A2BBF", // medium
          600: "#62239A", // bold
          700: "#4A1A75",
          800: "#30114B", // dark
          900: "#180825", // darker
          950: "#0D0515", // darkest
        },
        success: {
          50: "#E4FBED",
          100: "#C5F7D7",
          200: "#8FF0B2",
          300: "#54E88A",
          400: "#1EDC64",
          500: "#16A34A",
          600: "#12823B",
          700: "#0D632D",
          800: "#09431E",
          900: "#041F0E",
          950: "#021208",
        },
        warning: {
          50: "#FEF5E1",
          100: "#FEEBC3",
          200: "#FDD787",
          300: "#FBC44B",
          400: "#FAB00F",
          500: "#CA8A04",
          600: "#A06E03",
          700: "#785302",
          800: "#503702",
          900: "#281C01",
          950: "#140E00",
        },
        error: {
          50: "#FBE9E9",
          100: "#F8D3D3",
          200: "#F1A7A7",
          300: "#EA7B7B",
          400: "#E34F4F",
          500: "#DC2626",
          600: "#B01C1C",
          700: "#841515",
          800: "#580E0E",
          900: "#2C0707",
          950: "#160404",
        },
        neutral: {
          50: "#EBEDF0",
          100: "#D9DDE2",
          200: "#B4BBC6",
          300: "#8B97A7",
          400: "#677588",
          500: "#4B5563",
          600: "#3B434E",
          700: "#2C323A",
          800: "#1F2329",
          900: "#0F1114",
          950: "#070709",
        },
      },
      backgroundColor: {
        // primary, secondary, tertiary, quaternary
        brand: {
          quaternary: "var(--palette-brand-200)",
          tertiary: "var(--palette-brand-400)",
          secondary: "var(--palette-brand-500)",
          primary: "var(--palette-brand-600)",
        },
        neutral: {
          quaternary: "var(--palette-neutral-200)",
          tertiary: "var(--palette-neutral-400)",
          secondary: "var(--palette-neutral-500)",
          primary: "var(--palette-neutral-600)",
        },
        success: {
          quaternary: "var(--palette-success-200)",
          tertiary: "var(--palette-success-400)",
          secondary: "var(--palette-success-500)",
          primary: "var(--palette-success-600)",
        },
        warning: {
          quaternary: "var(--palette-warning-200)",
          tertiary: "var(--palette-warning-400)",
          secondary: "var(--palette-warning-500)",
          primary: "var(--palette-warning-600)",
        },
        error: {
          quaternary: "var(--palette-error-200)",
          tertiary: "var(--palette-error-400)",
          secondary: "var(--palette-error-500)",
          primary: "var(--palette-error-600)",
        },
      },
      textColor: {
        // primary, secondary, tertiary, quaternary
        brand: {
          quaternary: "var(--palette-brand-100)",
          tertiary: "var(--palette-brand-300)",
          secondary: "var(--palette-brand-500)",
          primary: "var(--palette-brand-700)",
        },
        neutral: {
          quaternary: "var(--palette-neutral-100)",
          tertiary: "var(--palette-neutral-300)",
          secondary: "var(--palette-neutral-500)",
          primary: "var(--palette-neutral-700)",
        },
        success: {
          quaternary: "var(--palette-success-100)",
          tertiary: "var(--palette-success-300)",
          secondary: "var(--palette-success-500)",
          primary: "var(--palette-success-700)",
        },
        warning: {
          quaternary: "var(--palette-warning-100)",
          tertiary: "var(--palette-warning-300)",
          secondary: "var(--palette-warning-500)",
          primary: "var(--palette-warning-700)",
        },
        error: {
          quaternary: "var(--palette-error-100)",
          tertiary: "var(--palette-error-300)",
          secondary: "var(--palette-error-500)",
          primary: "var(--palette-error-700)",
        },
      },
      borderWidth: {
        "": "1px",
        sm: "2px",
        md: "3px",
        lg: "4px",
      },
      borderColor: {
        // primary, secondary, tertiary, quaternary
        brand: {
          quaternary: "var(--palette-brand-100)",
          tertiary: "var(--palette-brand-300)",
          secondary: "var(--palette-brand-500)",
          primary: "var(--palette-brand-700)",
        },
        neutral: {
          quaternary: "var(--palette-neutral-100)",
          tertiary: "var(--palette-neutral-300)",
          secondary: "var(--palette-neutral-500)",
          primary: "var(--palette-neutral-700)",
        },
        success: {
          quaternary: "var(--palette-success-100)",
          tertiary: "var(--palette-success-300)",
          secondary: "var(--palette-success-500)",
          primary: "var(--palette-success-700)",
        },
        warning: {
          quaternary: "var(--palette-warning-100)",
          tertiary: "var(--palette-warning-300)",
          secondary: "var(--palette-warning-500)",
          primary: "var(--palette-warning-700)",
        },
        error: {
          quaternary: "var(--palette-error-100)",
          tertiary: "var(--palette-error-300)",
          secondary: "var(--palette-error-500)",
          primary: "var(--palette-error-700)",
        },
      },
      borderRadius: {
        full: "9999px",
        xxl: "calc(var(--radius) + 6px)",
        xl: "calc(var(--radius) + 4px)",
        lg: "calc(var(--radius) + 2px)",
        md: "var(--radius)", // 8px
        sm: "calc(var(--radius) - 2px)",
        xs: "calc(var(--radius) - 4px)",
        xxs: "calc(var(--radius) - 6px)",
        none: "0",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
