import { Box, IconButton, styled } from '@mui/material';
import { SlideProps } from './EmblaCarousel.type';

export const Viewport = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  width: '100%',
  padding: `${theme.spacing(2)} 0`,
}));

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  padding: '0 8px',
}));

export const Slide = styled(Box, {
  shouldForwardProp: prop => prop !== 'width',
})<SlideProps>(({ theme, width }) => ({
  minWidth: width || '296px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flex: '0 0 100%',
  },
}));
export const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.background.paper,
  zIndex: 1,
  boxShadow: theme.shadows[3],
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const PrevButton = styled(NavButton)({
  left: 0,
});

export const NextButton = styled(NavButton)({
  right: 16,
});
