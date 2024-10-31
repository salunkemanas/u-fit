import type { ReactNode } from "react";

type BoxProps = {
  children?: ReactNode;
  className?: string;
};
function Box(props: BoxProps) {
  return <div className={`${props.className}`}>{props.children}</div>;
}

export default Box;
