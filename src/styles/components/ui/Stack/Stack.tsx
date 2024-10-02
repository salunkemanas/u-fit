import { ReactNode } from "react";

type StackProps = {
  children: ReactNode;
  className?: string;
  direction?: "row" | "column";
  gap?: string;
};

function Stack(props: StackProps) {
  return (
    <div
      className={`flex flex-${props.direction} ${props.className} ${props.gap}`}
    >
      {props.children}
    </div>
  );
}

export default Stack;
