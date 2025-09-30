import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow-sm transition";
    const variants = variant === "outline"
      ? "border border-slate-300 bg-white hover:bg-slate-50"
      : "bg-slate-900 text-white hover:bg-slate-800";
    const sizes = size === "lg" ? "text-base px-5 py-3" : "text-sm";
    return <button ref={ref} className={cn(base, variants, sizes, className)} {...props} />;
  }
);
Button.displayName = "Button";
