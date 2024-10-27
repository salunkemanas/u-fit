import { clsx } from "clsx";
import { ReactNode } from "react";

type TypographVariantProps = {
  children: ReactNode;
  className?: string;
};

function TypographyH1(props: TypographVariantProps) {
  const className = clsx(
    "scroll-m-20 text-5xl font-extrabold tracking-tight",
    props.className,
  );
  return <h1 className={className}>{props.children}</h1>;
}

function TypographyH2(props: TypographVariantProps) {
  const className = clsx(
    "scroll-m-20 text-3xl font-semibold tracking-tight",
    props.className,
  );
  return <h2 className={className}>{props.children}</h2>;
}

function TypographyH3(props: TypographVariantProps) {
  const className = clsx(
    "scroll-m-20 text-2xl font-semibold tracking-tight",
    props.className,
  );
  return <h3 className={className}>{props.children}</h3>;
}

function TypographyH4(props: TypographVariantProps) {
  const className = clsx(
    "scroll-m-20 text-xl font-semibold tracking-tight",
    props.className,
  );
  return <h4 className={className}>{props.children}</h4>;
}

function TypographyP(props: TypographVariantProps) {
  const className = clsx("", props.className);
  return <p className={className}>{props.children}</p>;
}

function TypographyBlockquote(props: TypographVariantProps) {
  const className = clsx("italic", props.className);
  return <blockquote className={className}>{props.children}</blockquote>;
}

function TypographyLead(props: TypographVariantProps) {
  const className = clsx("text-xl text-muted-foreground", props.className);
  return <p className={className}>{props.children}</p>;
}

function TypographyLarge(props: TypographVariantProps) {
  const className = clsx("text-lg font-semibold", props.className);
  return <div className={className}>{props.children}</div>;
}

function TypographySmall(props: TypographVariantProps) {
  const className = clsx("text-sm font-medium leading-none", props.className);
  return <small className={className}>{props.children}</small>;
}

function TypographyMuted(props: TypographVariantProps) {
  const className = clsx("text-sm text-muted-foreground", props.className);
  return <p className={className}>{props.children}</p>;
}

const TypographyComponentsVariantsMap: Record<
  string,
  (props: TypographVariantProps) => JSX.Element
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
