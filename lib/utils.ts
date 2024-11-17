import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDuration = (duration: number) => {
  if (!duration) return "00:00";

  return new Date(duration * 1000).toLocaleTimeString([], {
    minute: "2-digit",
    second: "2-digit",
  });
};
