import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginContainer = styled(Box)(({ theme }) => ({
  height: '93vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& h1': {
    margin: '0',
    backgroundClip: 'text',
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));
