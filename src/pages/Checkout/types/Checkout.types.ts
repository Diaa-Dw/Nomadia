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
