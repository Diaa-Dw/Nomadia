export interface Hotel {
  id: number;
  name: string;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
}

export type CreateHotelRequest = Omit<Hotel, 'id'>

export interface UpdateHotelRequest extends CreateHotelRequest {
  hotelId: number;
}
