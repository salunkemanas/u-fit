import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // overriding the default [], and using just string -- @abhishek
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**",
  ],
  theme: {
    spacing: {
      xxxl: "32px",
      xxl: "28px",
      xl: "24px",
      lg: "20px",
      md: "16px",
      sm: "12px",
      xs: "8px",
      xxs: "4px",
      none: "0",
    },
    // ref: https://tailwindcss.com/docs/screens#using-custom-screen-names
    screens: {
      // => @media (min-width: 640px) { ... }
      tablet: "640px",

      // => @media (min-width: 1024px) { ... }
      laptop: "1024px",

      // => @media (min-width: 1280px) { ... }
      desktop: "1280px",
    },
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

        white: "var(--white)",
        black: "var(--black)",
        transparent: "var(--transparent)",

        /* custom colors */
        // lightest, lighter, light
        // soft, medium, bold
        // dark, darker, darkest
        brand: {
          50: "var(--palette-brand-50)", // lightest
          100: "var(--palette-brand-100)", // lighter
          200: "var(--palette-brand-200)", // light
          300: "var(--palette-brand-300)",
          400: "var(--palette-brand-400)", // soft
          500: "var(--palette-brand-500)", // medium
          600: "var(--palette-brand-600)", // bold
          700: "var(--palette-brand-700)",
          800: "var(--palette-brand-800)", // dark
          900: "var(--palette-brand-900)", // darker
          950: "var(--palette-brand-950)", // darkest

          alpha: {
            5: "var(--palette-brand-alpha-5)",
            10: "var(--palette-brand-alpha-10)",
            20: "var(--palette-brand-alpha-20)",
            30: "var(--palette-brand-alpha-30)",
            40: "var(--palette-brand-alpha-40)",
            50: "var(--palette-brand-alpha-50)",
            60: "var(--palette-brand-alpha-60)",
            70: "var(--palette-brand-alpha-70)",
            80: "var(--palette-brand-alpha-80)",
            90: "var(--palette-brand-alpha-90)",
            95: "var(--palette-brand-alpha-95)",
          },
        },
        success: {
          50: "var(--palette-success-50)",
          100: "var(--palette-success-100)",
          200: "var(--palette-success-200)",
          300: "var(--palette-success-300)",
          400: "var(--palette-success-400)",
          500: "var(--palette-success-500)",
          600: "var(--palette-success-600)",
          700: "var(--palette-success-700)",
          800: "var(--palette-success-800)",
          900: "var(--palette-success-900)",
          950: "var(--palette-success-950)",

          alpha: {
            5: "var(--palette-success-alpha-5)",
            10: "var(--palette-success-alpha-10)",
            20: "var(--palette-success-alpha-20)",
            30: "var(--palette-success-alpha-30)",
            40: "var(--palette-success-alpha-40)",
            50: "var(--palette-success-alpha-50)",
            60: "var(--palette-success-alpha-60)",
            70: "var(--palette-success-alpha-70)",
            80: "var(--palette-success-alpha-80)",
            90: "var(--palette-success-alpha-90)",
            95: "var(--palette-success-alpha-95)",
          },
        },
        warning: {
          50: "var(--palette-warning-50)",
          100: "var(--palette-warning-100)",
          200: "var(--palette-warning-200)",
          300: "var(--palette-warning-300)",
          400: "var(--palette-warning-400)",
          500: "var(--palette-warning-500)",
          600: "var(--palette-warning-600)",
          700: "var(--palette-warning-700)",
          800: "var(--palette-warning-800)",
          900: "var(--palette-warning-900)",
          950: "var(--palette-warning-950)",

          alpha: {
            5: "var(--palette-warning-alpha-5)",
            10: "var(--palette-warning-alpha-10)",
            20: "var(--palette-warning-alpha-20)",
            30: "var(--palette-warning-alpha-30)",
            40: "var(--palette-warning-alpha-40)",
            50: "var(--palette-warning-alpha-50)",
            60: "var(--palette-warning-alpha-60)",
            70: "var(--palette-warning-alpha-70)",
            80: "var(--palette-warning-alpha-80)",
            90: "var(--palette-warning-alpha-90)",
            95: "var(--palette-warning-alpha-95)",
          },
        },
        error: {
          50: "var(--palette-error-50)",
          100: "var(--palette-error-100)",
          200: "var(--palette-error-200)",
          300: "var(--palette-error-300)",
          400: "var(--palette-error-400)",
          500: "var(--palette-error-500)",
          600: "var(--palette-error-600)",
          700: "var(--palette-error-700)",
          800: "var(--palette-error-800)",
          900: "var(--palette-error-900)",
          950: "var(--palette-error-950)",

          alpha: {
            5: "var(--palette-error-alpha-5)",
            10: "var(--palette-error-alpha-10)",
            20: "var(--palette-error-alpha-20)",
            30: "var(--palette-error-alpha-30)",
            40: "var(--palette-error-alpha-40)",
            50: "var(--palette-error-alpha-50)",
            60: "var(--palette-error-alpha-60)",
            70: "var(--palette-error-alpha-70)",
            80: "var(--palette-error-alpha-80)",
            90: "var(--palette-error-alpha-90)",
            95: "var(--palette-error-alpha-95)",
          },
        },
        neutral: {
          50: "var(--palette-neutral-50)",
          100: "var(--palette-neutral-100)",
          200: "var(--palette-neutral-200)",
          300: "var(--palette-neutral-300)",
          400: "var(--palette-neutral-400)",
          500: "var(--palette-neutral-500)",
          600: "var(--palette-neutral-600)",
          700: "var(--palette-neutral-700)",
          800: "var(--palette-neutral-800)",
          900: "var(--palette-neutral-900)",
          950: "var(--palette-neutral-950)",

          alpha: {
            5: "var(--palette-neutral-alpha-5)",
            10: "var(--palette-neutral-alpha-10)",
            20: "var(--palette-neutral-alpha-20)",
            30: "var(--palette-neutral-alpha-30)",
            40: "var(--palette-neutral-alpha-40)",
            50: "var(--palette-neutral-alpha-50)",
            60: "var(--palette-neutral-alpha-60)",
            70: "var(--palette-neutral-alpha-70)",
            80: "var(--palette-neutral-alpha-80)",
            90: "var(--palette-neutral-alpha-90)",
            95: "var(--palette-neutral-alpha-95)",
          },
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
      fontSize: {
        xxl: "30px",
        xl: "24px",
        lg: "20px",
        md: "16px",
        sm: "14px",
        xs: "12px",
        xxs: "10px",
      },
      lineHeight: {
        xxl: "40px",
        xl: "32px",
        lg: "28px",
        md: "24px",
        sm: "20px",
        xs: "16px",
        xxs: "14px",
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
