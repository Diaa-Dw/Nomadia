import { BookResponse } from '../../types';

export interface BookingConfirmationDetailsProps {
  details: BookResponse;
}

export interface RowDef {
  label: string;
  field: string;
  isDate?: boolean;
}
