import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: 'url(/hero.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '24px',
  margin: '24px 0',
  overflow: 'hidden',
  height: 250,
  [theme.breakpoints.down('sm')]: {
    height: 200,
    padding: '16px',
  },
}));

export const ContentContainer = styled(Container)(() => ({
  display: 'flex',
  width: '100%',
  background: 'transparent',
  flexDirection: 'column',
  textAlign: 'center',
  '& > *': {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
  },
}));

export const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(0, 0, 0, 0.548)',
  zIndex: 1,
}));
