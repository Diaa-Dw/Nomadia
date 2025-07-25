import { Amenity } from '@/types';

export interface HotelResponse {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
  cityId: number;
}

export interface PhotoResponse {
  id: number;
  url: string;
}

export interface ReviewResponse {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}
