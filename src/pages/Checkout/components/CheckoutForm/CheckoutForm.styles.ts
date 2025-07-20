import { styled } from '@mui/material';
import { Form } from 'formik';

export const CheckoutFormContainer = styled(Form)(({ theme }) => ({
  background: theme.palette.background.paper,
  width: '100%',
  maxWidth: '540px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: '24px',
  borderRadius: '16px',
  boxShadow: theme.shadows[2],
}));
