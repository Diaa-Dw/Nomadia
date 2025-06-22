import { hotelTypeOptions } from '../constants';

export const getHotelTypeValue = (label: string): number | undefined =>
  hotelTypeOptions.find(opt => opt.label === label)?.value;
