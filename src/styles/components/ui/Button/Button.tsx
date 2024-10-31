import type { PropsWithChildren } from "react";
import { cn } from "@/styles/components/utils";
import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from "../../base/button";
import clsx from "clsx";
import { ButtonProps } from "./types";
import { ButtonStyles } from "./styles";

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, size, variant, color, className, ...rest } = props;
  const buttonClassName = ButtonStyles({ size, variant, color });

  return (
    <BaseButton {...rest} className={cn(clsx(buttonClassName, className))}>
      {children}
    </BaseButton>
  );
}
