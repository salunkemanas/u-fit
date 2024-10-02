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
      xl: "gap-x-6",
      "2xl": "gap-x-7",
      "3xl": "gap-x-8",
      "4xl": "gap-x-9",
    },
    gapY: {
      none: "gap-y-0",
      xxs: "gap-y-1",
      xs: "gap-y-2",
      sm: "gap-y-3",
      md: "gap-y-4",
      lg: "gap-y-6",
      xl: "gap-y-6",
      "2xl": "gap-y-7",
      "3xl": "gap-y-8",
      "4xl": "gap-y-9",
    },
  },

  defaultVariants: {
    direction: "row",
    gapX: "none",
    gapY: "none",
  },
});

type gapVariants =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

type StackProps = {
  className?: string;
  direction?: "row" | "column";
  gapX?: gapVariants;
  gapY?: gapVariants;
  gap?: gapVariants;
};

function Stack(props: PropsWithChildren<StackProps>) {
  const stackClass = stackClasses({
    direction: props.direction,
    gap: props.gap,
    gapX: props.gapX,
    gapY: props.gapY,
  });
  return <div className={stackClass}>{props.children}</div>;
}

export default Stack;
