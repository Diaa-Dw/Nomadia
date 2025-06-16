import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchContainer = styled(Container)(({ theme }) => ({
  height: 'calc(100vh - 65px)',
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

export const ResultWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  overflow: 'auto',
  margin: theme.spacing(2),
  minHeight: 0,
}));

export const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: 0,
});
