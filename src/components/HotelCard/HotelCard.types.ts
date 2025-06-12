export interface BaseHotelCardProps {
  variant: 'horizontal' | 'compact';
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

export interface CompactHotelCardProps extends BaseHotelCardProps {
  originalRoomPrice: number;
  discount: number;
  finalPrice: number;
  hotelStarRating: number;
  title: string;
  description: string;
}

export interface HotelCardProps {
  hotelData: HorizontalHotelCardProps | CompactHotelCardProps;
  onClick?: () => void;
}
