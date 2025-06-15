import { styled } from '@mui/material/styles';
import { Box, Skeleton, Typography } from '@mui/material';

export const GalleryWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const MainImageWrapper = styled(Box)(() => ({
  flexGrow: 1,
  minWidth: 0,
}));

export const MainImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '500px',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',

  '&:hover': {
    transform: 'scale(1.02)',
  },

  [theme.breakpoints.down('md')]: {
    height: '350px',
  },
}));

export const SideImageGrid = styled(Box, {
  shouldForwardProp: prop => prop !== 'count',
})<{ count: number }>(({ theme, count }) => ({
  display: 'grid',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    width: '500px',
    height: '500px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    gridTemplateColumns: `repeat(${Math.min(count, 4)}, 1fr)`,
    gridTemplateRows: '1fr',
  },
}));

export const SideImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
}));

export const SideImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.3s ease',

  '&:hover': {
    transform: 'scale(1.03)',
  },

  [theme.breakpoints.up('lg')]: {
    minWidth: '400px',
  },
}));

export const SkeletonBox = styled(Skeleton, {
  shouldForwardProp: prop => prop !== 'height',
})<{ height?: number | string }>(({ theme, height = 200 }) => ({
  width: '100%',
  height: typeof height === 'number' ? `${height}px` : height,
  borderRadius: theme.shape.borderRadius,
}));

export const OverlayText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius,
}));
