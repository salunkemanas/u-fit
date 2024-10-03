import { PropsWithChildren } from "react";
import { Button as BaseButton, ButtonProps } from "../../base/button";

type MyButtonProps = Pick<
  ButtonProps,
  "onClick" | "disabled" | "variant" | "size"
>;

export default function Button(props: PropsWithChildren<MyButtonProps>) {
  return <BaseButton>{props.children}</BaseButton>;
}
