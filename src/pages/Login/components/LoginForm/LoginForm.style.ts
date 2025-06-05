import { styled } from '@mui/material/styles';
import { Form } from 'formik';

export const LoginFormContainer = styled(Form)(({ theme }) => ({
  background: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '24px',
  borderRadius: '16px',
  marginTop: '12px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.09)',
}));
