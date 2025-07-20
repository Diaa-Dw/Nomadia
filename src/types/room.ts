import { Amenity } from './amenities';

export interface Room {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  amenities: Amenity[];
  price: number;
  availability: boolean;
}

export interface fetchHotelRoomsProps {
  hotelId: number;
  checkInDate: string;
  checkOutDate: string;
}
