import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDuration = (duration: number) => {
  if (!duration) return "00:00";

  return new Date(duration * 1000).toISOString().substring(14, 19);
};
