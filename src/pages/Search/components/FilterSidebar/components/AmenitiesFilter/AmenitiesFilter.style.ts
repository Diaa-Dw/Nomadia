import { Box, FormControlLabel, styled } from '@mui/material';

export const AmenitiesContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const AmenitiesBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  maxHeight: 300,
  overflowY: 'auto',
}));

export const CheckboxLabel = styled(FormControlLabel)(() => ({
  marginLeft: 0,
  '.MuiTypography-root': {
    fontSize: 14,
  },
}));
