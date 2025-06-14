import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchContainer = styled(Container)(({ theme }) => ({
  minHeight: 'calc(100vh - 65px)',
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  gridTemplateRows: '1fr',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
  },
}));

export const FilterContainer = styled(Box)(({ theme }) => ({
  borderRight: `3px solid ${theme.palette.action.hover}`,
}));
