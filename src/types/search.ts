export interface SearchRequest {
  checkInDate: string;
  checkOutDate: string;
  city: string;
  numberOfRooms: number;
  adults: number;
  children: number;
  starRate?: number;
  sort?: string;
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface SearchFormPayload extends Omit<SearchRequest, 'checkInDate' | 'checkOutDate'> {
  dateRange: DateRange;
}
