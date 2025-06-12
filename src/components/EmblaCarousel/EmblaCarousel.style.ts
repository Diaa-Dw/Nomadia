import { Box, IconButton, styled } from '@mui/material';

export const Viewport = styled(Box)(() => ({
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
}));

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const Slide = styled(Box)(() => ({
  width: '240px',
  flex: '0 0 auto',
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
