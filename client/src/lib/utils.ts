import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTimeSaved(age: number, expectancy: number): { hours: number, days: number } {
  const yearsRemaining = Math.max(0, expectancy - age);
  
  // Average person wastes 1y3m in 70 years (15 months in 70 years)
  // Calculate proportional time for remaining years
  const monthsSaved = (15 / 70) * yearsRemaining;
  const hoursSaved = Math.round(monthsSaved * 30 * 24); // approx hours in a month
  const daysSaved = Math.round(monthsSaved * 30);
  
  return { hours: hoursSaved, days: daysSaved };
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}
