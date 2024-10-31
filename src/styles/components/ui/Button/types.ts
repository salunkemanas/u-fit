import type { ButtonProps as BaseButtonProps } from "../../base/button";

type ButtonColor = "brand" | "neutral" | "success" | "warning" | "error";
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline" | "ghost" | "link";

export type ButtonProps = Pick<
  BaseButtonProps,
  "onClick" | "disabled" | "className"
> & {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
};
