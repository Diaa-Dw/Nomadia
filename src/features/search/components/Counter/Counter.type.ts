import { SearchFormPayload } from '@/types';

export interface CounterProps {
  name: keyof SearchFormPayload;
  displayName?: string;
  preventIncrementOn?: number;
  preventDecrementOn?: number;
}
