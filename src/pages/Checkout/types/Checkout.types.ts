export interface CheckoutFormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  paymentMethod: PaymentType;
  cardNumber: string;
  expiry: string;
  cvv: string;
  specialRequests: string;
}

export enum PaymentType {
  CREDIT_CARD = 'credit-card',
  CASH = 'cash',
}

export interface BookRequest {
  customerName: string;
  hotelName: string;
  roomNumber: number;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
}

export interface BookResponse {
  customerName: string;
  hotelName: string;
  roomNumber: string;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
  bookingStatus: string;
  confirmationNumber: string;
}
