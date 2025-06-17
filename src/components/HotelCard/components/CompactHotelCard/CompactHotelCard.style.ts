import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CompactCardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '280px',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(1),
  margin: '0 auto',
}));

export const CompactHotelImage = styled('img')({
  width: '100%',
  height: 150,
  objectFit: 'cover',
  cursor: 'pointer',
});

export const DiscountChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: '8px',
  right: '8px',
  fontWeight: 'bold',
  boxShadow: theme.shadows[3],
}));
