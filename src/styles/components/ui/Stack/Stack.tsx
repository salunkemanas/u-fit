import { PropsWithChildren } from "react";

type StackProps = {
  className?: string;
  direction?: "row" | "column";
  gapX?: "xxs" | "xs" | "sm" | "md" | "lg";
  gapY?: "xxs" | "xs" | "sm" | "md" | "lg";
  gap?: "xxs" | "xs" | "sm" | "md" | "lg";
};

const GapPropsMap: Record<string, string> = {
  default: "gap-0",
  xxs: "gap-1",
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

function Stack(props: PropsWithChildren<StackProps>) {
  const gapclass = GapPropsMap[props.gap ?? "default"];
  return (
    <div
      className={`flex flex-${props.direction} ${props.className} ${gapclass}`}
    >
      {props.children}
    </div>
  );
}  

export default Stack;
