// import { startOfDay } from 'date-fns';

export const parseDate = (value: unknown, fallback = new Date()): Date => {
  if (typeof value !== 'string') return fallback;
  const parsedDate = new Date(value);
  return isNaN(parsedDate.getTime()) ? fallback : parsedDate;
};

export const parseNumber = (value: unknown, fallback: number, min?: number): number => {
  const parsed = Number(value);
  if (isNaN(parsed)) return fallback;
  if (typeof min === 'number' && parsed < min) return fallback;
  return parsed;
};

export const parseEnum = <T extends readonly string[]>(
  value: unknown,
  options: T,
  fallback: T[number]
): T[number] => {
  return typeof value === 'string' && options.includes(value as T[number])
    ? (value as T[number])
    : fallback;
};
