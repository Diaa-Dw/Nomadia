import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Stack)(() => ({
  width: '100%',
  height: '93vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ContentBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
}));
