import { cva } from "class-variance-authority";

export const TypographyStyles = cva("", {
  variants: {
    color: {
      brand: "text-brand-secondary",
      neutral: "text-neutral-secondary",
      success: "text-success-secondary",
      warning: "text-warning-secondary",
      error: "text-error-secondary",

      black: "text-black",
      white: "text-white",
      muted: "text-neutral-tertiary",
      disabled: "text-neutral-quaternary",

      default: "text-neutral-primary",
    },
  },
  defaultVariants: {
    color: "default",
  },
});
