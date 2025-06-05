import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled(Box)(({ theme }) => {
  console.log('🚀 ~ LayoutContainer ~ theme:', theme);
  return {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };
});
