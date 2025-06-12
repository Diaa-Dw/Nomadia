import { Box, IconButton, styled } from '@mui/material';

export const Viewport = styled(Box)(() => ({
  overflow: 'hidden',
  width: '100%',
}));

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  padding: '0 8px',
}));

export const Slide = styled(Box)(({ theme }) => ({
  minWidth: '296px',
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
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const PrevButton = styled(NavButton)({
  left: 8,
});

export const NextButton = styled(NavButton)({
  right: 8,
});
