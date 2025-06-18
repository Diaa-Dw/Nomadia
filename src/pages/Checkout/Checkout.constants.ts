import { CheckoutFormValues, PaymentType } from './types/Checkout.types';

export const INITIAL_VALUES: CheckoutFormValues = {
  fullName: '',
  email: '',
  phoneNumber: '',
  address: '',
  paymentMethod: PaymentType.CREDIT_CARD,
  cardNumber: '',
  expiry: '',
  cvv: '',
  specialRequests: '',
};
