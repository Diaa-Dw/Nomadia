import { differenceInCalendarDays, format, parseISO } from 'date-fns';

export const formatDisplayDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDate = (date: Date): string => format(date, 'yyyy-MM-dd');

export const getDateDifference = (start: string, end: string): number => {
  const startDate = parseISO(start);
  const endDate = parseISO(end);

  const diff = differenceInCalendarDays(endDate, startDate);
  
  return Math.max(diff, 1);
};
