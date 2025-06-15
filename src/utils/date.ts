import { format } from 'date-fns';

export const formatDisplayDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDate = (date: Date): string => format(date, 'yyyy-MM-dd');
