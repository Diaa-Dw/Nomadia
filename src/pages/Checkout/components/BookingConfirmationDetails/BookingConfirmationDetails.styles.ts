import { styled } from '@mui/material/styles';
import { Stack, Button, TableContainer, TableCell, Container as MuiContainer } from '@mui/material';

export const Container = styled(MuiContainer)(() => ({
  height: '69vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '8px 0',
}));

export const ContentContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: '990px',
  backgroundColor: theme.palette.background.paper,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  borderRadius: theme.spacing(2),

  gap: theme.spacing(3),
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxWidth: 600,
  boxShadow: theme.shadows[3],
}));

export const LabelCell = styled(TableCell)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  borderRight: `1px solid ${theme.palette.action.disabledOpacity}`,
}));

export const ValueCell = styled(TableCell)({
  width: '50%',
});

export const PrintButton = styled(Button)(() => ({
  textTransform: 'none',
}));
