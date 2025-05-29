import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled(Box)(({ theme }: StyledProps) => ({
  minHeight: '100vh',
  background: theme.vars?.palette.background.default,
}));
