import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors duration-150 px-6 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:brightness-110",
  secondary:
    "bg-surface-2 text-foreground border border-border hover:border-accent/60 hover:text-accent",
  ghost: "text-foreground hover:text-accent",
};

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

type ExternalButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
};

export function ExternalButton({ variant = "primary", className = "", ...props }: ExternalButtonProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
