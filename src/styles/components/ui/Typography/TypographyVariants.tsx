import { ReactNode } from "react";

function TypographyH1(props: { children: ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
}

function TypographyH2(props: { children: ReactNode }) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mt-0">
      {props.children}
    </h2>
  );
}

function TypographyH3(props: { children: ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
}

function TypographyH4(props: { children: ReactNode }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
}

function TypographyP(props: { children: ReactNode }) {
  return <p>{props.children}</p>;
}

function TypographyBlockquote(props: { children: ReactNode }) {
  return <blockquote className="italic">{props.children}</blockquote>;
}

function TypographyLead(props: { children: ReactNode }) {
  return <p className="text-xl text-muted-foreground">{props.children}</p>;
}

function TypographyLarge(props: { children: ReactNode }) {
  return <div className="text-lg font-semibold">{props.children}</div>;
}

function TypographySmall(props: { children: ReactNode }) {
  return (
    <small className="text-sm font-medium leading-none">{props.children}</small>
  );
}

function TypographyMuted(props: { children: ReactNode }) {
  return <p className="text-sm text-muted-foreground">{props.children}</p>;
}

const TypographyComponentsVariantsMap: Record<
  string,
  (props: { children: ReactNode }) => JSX.Element
> = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  blockquote: TypographyBlockquote,
  lead: TypographyLead,
  large: TypographyLarge,
  small: TypographySmall,
  muted: TypographyMuted,
};

export default TypographyComponentsVariantsMap;
