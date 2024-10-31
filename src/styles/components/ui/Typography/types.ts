type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "blockquote"
  | "lead"
  | "large"
  | "small"
  | "muted";

type TypographyColors =
  | "brand"
  | "neutral"
  | "success"
  | "warning"
  | "error"
  | "black"
  | "white"
  | "muted"
  | "disabled";

type TypographyProps = {
  variant: TypographyVariants;
  color?: TypographyColors;
  className?: string;
};
