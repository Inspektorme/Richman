import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: any[]) {
  // Fallback without tailwind-merge to keep deps light; simple clsx is enough.
  return clsx(inputs);
}
