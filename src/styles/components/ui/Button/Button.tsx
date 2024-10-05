import { PropsWithChildren } from "react";
import { Button as BaseButton, ButtonProps } from "../../base/button";

type MyButtonProps = Pick<
  ButtonProps,
  "onClick" | "disabled" | "variant" | "size" | "color" | "className"
>;

export default function Button(props: PropsWithChildren<MyButtonProps>) {
  const { children, ...rest } = props;
  return <BaseButton {...rest}>{children}</BaseButton>;
}
