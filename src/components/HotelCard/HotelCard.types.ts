export interface BaseHotelCardProps {
  hotelId: number;
  hotelName: string;
  roomPhotoUrl: string;
  cityName: string;
}

export interface HorizontalHotelCardProps extends BaseHotelCardProps {
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  StarRating: number;
  discount: number;
  amenities: {
    id: number;
    name: string;
    description: string;
  }[];
  numberOfChildren: number;
  numberOfAdults: number;
  numberOfRooms: number;
  checkInDate: string;
  checkOutDate: string;
}

export interface CompactHotelCardProps {
  hotelId: number;
  hotelName: string;
  cityName: string;

  // Ratings (either of these might be present)
  hotelStarRating?: number;
  starRating?: number;

  // Prices (some optional)
  originalRoomPrice?: number;
  discount?: number;
  finalPrice?: number;
  priceLowerBound?: number;
  priceUpperBound?: number;

  // Images (one of these)
  roomPhotoUrl?: string;
  thumbnailUrl?: string;

  // Optional extra info
  title?: string;
  description?: string;
  visitDate?: string;
}
export interface HotelCardProps {
  variant: 'horizontal' | 'compact';
  hotelData: HorizontalHotelCardProps | CompactHotelCardProps;
  onClick?: () => void;
}
