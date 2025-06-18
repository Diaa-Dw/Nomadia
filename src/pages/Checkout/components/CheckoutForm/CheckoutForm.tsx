import { TextField } from '@/components';
import { AccountCircle, CreditCard, Email, Home, Lock, Schedule } from '@mui/icons-material';
import { Autocomplete, Button } from '@mui/material';
import { FormikProvider } from 'formik';
import { useCheckoutForm } from '../../hooks';
import { PaymentType } from '../../types';
import PhoneInputField from '../PhoneInputField/PhoneInputField';
import { CheckoutFormContainer } from './CheckoutForm.styles';

const CheckoutForm = () => {
  const { formikProps } = useCheckoutForm();
  const { isValid, dirty, setFieldValue, values } = formikProps;

  const isCashPayment = values.paymentMethod !== PaymentType.CREDIT_CARD;

  return (
    <FormikProvider value={formikProps}>
      <CheckoutFormContainer>
        <TextField
          name="fullName"
          label="fullName"
          placeholder="Full Name"
          startIcon={<AccountCircle />}
        />
        <TextField name="email" label="Email" placeholder="Email" startIcon={<Email />} />
        <PhoneInputField name="phoneNumber" label="Phone Number" />
        <TextField name="address" label="Address" placeholder="Address" startIcon={<Home />} />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={[PaymentType.CASH, PaymentType.CREDIT_CARD]}
          renderInput={params => (
            <TextField name="paymentMethod" {...params} label="Payment Method" />
          )}
          onChange={(_e, value) => {
            setFieldValue('paymentMethod', value);
          }}
        />
        <TextField
          name="cardNumber"
          label="Card Number"
          startIcon={<CreditCard />}
          placeholder="1234 5678 9123 4567"
          disabled={isCashPayment}
        />
        <TextField
          name="expiry"
          label="Card Expiry Date"
          placeholder="MM/YY"
          disabled={isCashPayment}
          startIcon={<Schedule />}
        />
        <TextField
          name="cvv"
          label="CVV"
          placeholder="123"
          disabled={isCashPayment}
          startIcon={<Lock />}
        />
        <TextField
          name="specialRequests"
          label="Additional Requests"
          placeholder="Add any notes, e.g. extra towels or late check-in"
          multiline
          rows={4}
        />
        <Button type="submit" variant={'contained'} disabled={!isValid || !dirty} disableElevation>
          Confirm Booking
        </Button>
      </CheckoutFormContainer>
    </FormikProvider>
  );
};

export default CheckoutForm;
