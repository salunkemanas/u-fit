import { PropsWithChildren } from "react";
import { cva } from "class-variance-authority";

const stackClasses = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    gap: {
      none: "gap-0",
      xxs: "gap-1",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-5",
      xl: "gap-6",
      "2xl": "gap-7",
      "3xl": "gap-8",
      "4xl": "gap-9",
    },
    gapX: {
      none: "gap-x-0",
      xxs: "gap-x-1",
      xs: "gap-x-2",
      sm: "gap-x-3",
      md: "gap-x-4",
      lg: "gap-x-6",
      xl: "gap-6",
      "2xl": "gap-7",
      "3xl": "gap-8",
      "4xl": "gap-9",
    },
    gapY: {
      none: "gap-y-0",
      xxs: "gap-y-1",
      xs: "gap-y-2",
      sm: "gap-y-3",
      md: "gap-y-4",
      lg: "gap-y-6",
      xl: "gap-6",
      "2xl": "gap-7",
      "3xl": "gap-8",
      "4xl": "gap-9",
    },
  },
  // Define default variants
  defaultVariants: {
    direction: "row",
    gap: "none",
    gapX: "none",
    gapY: "none",
  },
});

type StackProps = {
  className?: string;
  direction?: "row" | "column";
  gapX?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  gapY?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  gap?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
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
