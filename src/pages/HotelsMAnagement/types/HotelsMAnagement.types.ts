import { InfiniteData } from '@tanstack/react-query';

export interface Hotel {
  id: number;
  name: string;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
}

export interface AddHotelRequest extends Omit<Hotel, 'id'> {
  cityId: number | null;
}

export interface UseHotelsFormProps {
  initialValues: AddHotelRequest | Hotel;
  mutateAsync: (values: AddHotelRequest | Hotel) => Promise<Hotel | number>;
  onClose: () => void;
}

export type HotelsInfiniteData = InfiniteData<Hotel[]>;
