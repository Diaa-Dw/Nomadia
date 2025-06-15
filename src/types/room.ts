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
