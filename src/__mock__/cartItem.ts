import { CartItem } from '@/features/cart/types';

export const sampleItem: CartItem = {
  roomId: 1,
  roomNumber: 101,
  roomPhotoUrl: 'url',
  roomType: 'Deluxe',
  capacityOfAdults: 2,
  capacityOfChildren: 1,
  amenities: [],
  price: 100,
  availability: true,
  checkInDate: '2024-06-01',
  checkOutDate: '2024-06-02',
};
