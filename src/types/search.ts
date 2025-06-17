import { Amenity } from './amenities';

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
  checkInDate: Date;
  checkOutDate: Date;
}

export interface SearchResponse {
  hotelId: number;
  hotelName: string;
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  cityName: string;
  roomPhotoUrl: string;
  discount: number;
  amenities: Amenity[];
  description: string;
}

export interface SearchFormPayload extends Omit<SearchRequest, 'checkInDate' | 'checkOutDate'> {
  dateRange: DateRange;
}

export interface SearchFormWithTimestamp extends SearchFormPayload {
  ts: number;
}
