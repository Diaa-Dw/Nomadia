import { Box, styled } from '@mui/material';

export const LoaderContainer = styled(Box)(({ theme }: StyledProps) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  background: theme.palette.background.paper,
}));
