import { PropsWithChildren } from "react";
import { Button as BaseButton, ButtonProps } from "../../base/button";

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return <BaseButton>{props.children}</BaseButton>;
}
