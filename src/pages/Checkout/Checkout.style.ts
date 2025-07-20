import { Stack, styled } from '@mui/material';

export const CheckoutContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  gap: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
