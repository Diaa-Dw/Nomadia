import * as Yup from 'yup';
import { PaymentType } from '../types';

const REGEX = {
  cardNumber: /^[0-9]{16}$/,
  cvv: /^[0-9]{3}$/,
  expiry: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
  phone: /^[0-9+]{1,15}$/,
};

const validateExpiry = (value: string | undefined): boolean => {
  if (!value) return false;

  const [monthStr, yearStr] = value.split('/');
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  if (isNaN(month) || isNaN(year)) return false;

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear() % 100;

  return year > currentYear || (year === currentYear && month >= currentMonth);
};

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),

  email: Yup.string().email('Invalid email').required('Email is required'),

  phoneNumber: Yup.string()
    .matches(REGEX.phone, 'Invalid phone number')
    .required('Phone Number is required'),

  address: Yup.string().required('Address is required'),

  paymentMethod: Yup.mixed<PaymentType>()
    .oneOf(Object.values(PaymentType))
    .required('Payment Method is required'),

  cardNumber: Yup.string().when('paymentMethod', {
    is: PaymentType.CREDIT_CARD,
    then: schema =>
      schema.required('Card Number is required').matches(REGEX.cardNumber, 'Invalid card number'),
    otherwise: schema => schema.notRequired(),
  }),

  expiry: Yup.string().when('paymentMethod', {
    is: PaymentType.CREDIT_CARD,
    then: schema =>
      schema
        .required('Expiry is required')
        .matches(REGEX.expiry, 'Invalid expiry date')
        .test('valid-expiry', 'Card has expired', validateExpiry),
    otherwise: schema => schema.notRequired(),
  }),

  cvv: Yup.string().when('paymentMethod', {
    is: PaymentType.CREDIT_CARD,
    then: schema => schema.required('CVV is required').matches(REGEX.cvv, 'Invalid CVV'),
    otherwise: schema => schema.notRequired(),
  }),

  specialRequests: Yup.string().default(''),
});

export default validationSchema;
