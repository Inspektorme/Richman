import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border bg-white", className)} {...props} />;
}
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 border-b flex items-start", className)} {...props} />;
}
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn("text-lg font-semibold", className)} {...props} />;
}
export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
