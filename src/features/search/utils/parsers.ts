import { startOfDay } from 'date-fns';

export const parseDate = (value: unknown, fallback = new Date()): Date => {
  return typeof value === 'string' ? startOfDay(new Date(value)) : fallback;
};

export const parseNumber = (value: unknown, fallback: number): number => {
  const parsed = Number(value);
  return isNaN(parsed) ? fallback : parsed;
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
