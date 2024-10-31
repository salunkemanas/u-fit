import type { PropsWithChildren } from "react";
import TypographyComponentsVariantsMap from "./TypographyVariants";
import { TypographyStyles } from "./styles";
import { cn } from "../../utils";

export default function Typography(props: PropsWithChildren<TypographyProps>) {
  const { variant, color, className } = props;

  const Component = TypographyComponentsVariantsMap[variant];
  const typographyClassName = TypographyStyles({ color });

  return (
    <Component className={cn(typographyClassName, className)}>
      {props.children}
    </Component>
  );
}
