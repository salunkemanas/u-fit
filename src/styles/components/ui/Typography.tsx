import { PropsWithChildren, ReactNode } from "react";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

function TypographyH1(props: { children: ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: { children: ReactNode }) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: { children: ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
}

const TypographyComponents: Record<
  string,
  (props: { children: ReactNode }) => JSX.Element
> = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
};

export default function Typography(props: PropsWithChildren<TypographyProps>) {
  const { variant } = props;

  const Component = TypographyComponents[variant];

  return <Component>{props.children}</Component>;
}
