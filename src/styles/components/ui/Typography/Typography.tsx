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

  className?: string;
};

export default function Typography(props: PropsWithChildren<TypographyProps>) {
  const { variant } = props;

  const Component = TypographyComponentsVariantsMap[variant];

  return <Component className={props.className}>{props.children}</Component>;
}
