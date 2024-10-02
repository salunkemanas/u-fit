import { PropsWithChildren } from "react";
import { cva } from "class-variance-authority";

const stackClasses = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    gap: {
      default: "gap-0",
      xxs: "gap-1",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
    },
    gapX: {
      default: "gap-x-0",
      xxs: "gap-x-1",
      xs: "gap-x-2",
      sm: "gap-x-3",
      md: "gap-x-4",
      lg: "gap-x-6",
    },
    gapY: {
      default: "gap-y-0",
      xxs: "gap-y-1",
      xs: "gap-y-2",
      sm: "gap-y-3",
      md: "gap-y-4",
      lg: "gap-y-6",
    },
  },
  // Define default variants
  defaultVariants: {
    direction: "row",
    gap: "default",
  },
});

type StackProps = {
  className?: string;
  direction?: "row" | "column";
  gapX?: "xxs" | "xs" | "sm" | "md" | "lg";
  gapY?: "xxs" | "xs" | "sm" | "md" | "lg";
  gap?: "xxs" | "xs" | "sm" | "md" | "lg";
};

function Stack(props: PropsWithChildren<StackProps>) {
  const stackClass = stackClasses({
    direction: props.direction,
    gap: props.gap,
    gapX: props.gapX,
    gapY: props.gapY,
  });
  return (
    <div
      className={`flex flex-${props.direction} ${props.className} ${stackClass}`}
    >
      {props.children}
    </div>
  );
}

export default Stack;
