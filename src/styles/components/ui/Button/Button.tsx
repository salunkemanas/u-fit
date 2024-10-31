import type { PropsWithChildren } from "react";
import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from "../../base/button";
import { cva } from "class-variance-authority";
import clsx from "clsx";

type ButtonProps = Pick<
  BaseButtonProps,
  "onClick" | "disabled" | "className"
> & {
  color?: "brand" | "neutral" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost" | "link";
};

const buttonVariants = cva(
  // base classes
  "h-min shadow-none",
  {
    variants: {
      // color -> brand, neutral, success, warning, danger
      color: {
        brand: "text-brand-secondary",
        neutral: "text-neutral-secondary",
        success: "text-success-secondary",
        warning: "text-warning-secondary",
        error: "text-error-secondary",
      },

      // variant -> solid, outline, ghost, link
      variant: {
        solid: "text-white",
        outline: "bg-transparent",
        ghost: "bg-transparent border-transparent",
        link: "bg-transparent border-transparent hover:underline hover:bg-transparent",
      },

      // size -> sm, md, lg
      size: {
        sm: "px-sm py-xxs text-xs leading-sm !border",
        md: "px-md py-xxs text-sm leading-md font-semibold !border-sm",
        lg: "px-xxl py-xxs text-md leading-lg font-bold !border-sm",
      },
    },
    compoundVariants: [
      // solid variant
      {
        variant: "solid",
        color: "brand",
        className: clsx(
          "bg-brand-secondary border-brand-secondary ",
          "hover:bg-brand-primary hover:border-brand-primary",
        ),
      },
      {
        variant: "solid",
        color: "neutral",
        className: clsx(
          "bg-neutral-secondary border-neutral-secondary ",
          "hover:bg-neutral-primary hover:border-neutral-primary",
        ),
      },
      {
        variant: "solid",
        color: "success",
        className: clsx(
          "bg-success-secondary border-success-secondary ",
          "hover:bg-success-primary hover:border-success-primary",
        ),
      },
      {
        variant: "solid",
        color: "warning",
        className: clsx(
          "bg-warning-secondary border-warning-secondary ",
          "hover:bg-warning-primary hover:border-warning-primary",
        ),
      },
      {
        variant: "solid",
        color: "error",
        className: clsx(
          "bg-error-secondary border-error-secondary",
          "hover:bg-error-primary hover:border-error-primary",
        ),
      },

      // outline variant
      {
        variant: "outline",
        color: "brand",
        className: "border-brand-secondary hover:bg-brand-alpha-20",
      },
      {
        variant: "outline",
        color: "neutral",
        className: "border-neutral-secondary hover:bg-neutral-alpha-20",
      },
      {
        variant: "outline",
        color: "success",
        className: "border-success-secondary hover:bg-success-alpha-20",
      },
      {
        variant: "outline",
        color: "warning",
        className: "border-warning-secondary hover:bg-warning-alpha-20",
      },
      {
        variant: "outline",
        color: "error",
        className: "border-error-secondary hover:bg-error-alpha-20",
      },

      // ghost variant
      {
        variant: "ghost",
        color: "brand",
        className: "hover:bg-brand-alpha-20",
      },
      {
        variant: "ghost",
        color: "neutral",
        className: "hover:bg-neutral-alpha-20",
      },
      {
        variant: "ghost",
        color: "success",
        className: "hover:bg-success-alpha-20",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "hover:bg-warning-alpha-20",
      },
      {
        variant: "ghost",
        color: "error",
        className: "hover:bg-error-alpha-20",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "brand",
      size: "md",
    },
  },
);

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, size, variant, color, className, ...rest } = props;
  const buttonClassName = buttonVariants({ size, variant, color });
  return (
    <BaseButton {...rest} className={clsx(buttonClassName, className)}>
      {children}
    </BaseButton>
  );
}
