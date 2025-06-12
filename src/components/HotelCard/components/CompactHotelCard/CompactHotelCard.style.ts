import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CompactCardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 240,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(1),
}));

export const CompactHotelImage = styled('img')({
  width: '100%',
  height: 150,
  objectFit: 'cover',
});

export const DiscountChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: '5px',
  right: '5px',
  boxShadow: theme.shadows[3],
}));
