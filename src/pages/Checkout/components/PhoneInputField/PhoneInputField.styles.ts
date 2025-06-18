import { styled } from '@mui/material';
import PhoneInput from 'react-phone-input-2';

export const StyledPhoneInput = styled(PhoneInput)(({ theme }) => ({
  marginTop: theme.spacing(1),

  '& .form-control': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.action.disabled}`,
    '&:hover': {
      borderColor: theme.palette.text.primary,
    },
    '&:focus': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },

  '& .country-name': {
    color: '#000',
  },
}));
