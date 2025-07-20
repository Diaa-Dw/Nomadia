import { addDays, startOfDay } from 'date-fns';
import { createStaticRanges } from 'react-date-range';

const today = startOfDay(new Date());

export const selectionRange = (checkInDate: Date, checkOutDate: Date) => ({
  startDate: checkInDate,
  endDate: checkOutDate || addDays(new Date(), 1),
  key: 'selection' as const,
});

export const customRanges = [
  {
    label: 'Next 7 Days',
    range: () => ({
      startDate: today,
      endDate: addDays(today, 6),
    }),
  },
  {
    label: 'Next 30 Days',
    range: () => ({
      startDate: today,
      endDate: addDays(today, 29),
    }),
  },
];

export const staticRanges = createStaticRanges(customRanges);
