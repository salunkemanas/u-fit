import type { PropsWithChildren } from "react";
import TypographyComponentsVariantsMap from "./TypographyVariants";

type TypographyProps = {
  variant:
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
};

export default function Typography(props: PropsWithChildren<TypographyProps>) {
  const { variant } = props;

  const Component = TypographyComponentsVariantsMap[variant];

  return <Component>{props.children}</Component>;
}
