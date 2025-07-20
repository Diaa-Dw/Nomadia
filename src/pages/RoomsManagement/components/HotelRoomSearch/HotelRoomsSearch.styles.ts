import { styled } from '@mui/material';
import { Form } from 'formik';

export const SearchContainer = styled(Form)(({ theme }) => ({
  maxWidth: '1018px',
  margin: '16px auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  padding: '12px 16px',
  borderRadius: theme.spacing(1),

  '& .MuiBox-root ': {
    flexGrow: 1,
  },
  '& .MuiDivider-root': {
    alignSelf: 'stretch',
    width: 2,
    flexShrink: 0,
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',

    '& .MuiBox-root ': {
      width: '100%',
    },
    '& .MuiDivider-root': {
      width: '100%',
      height: 2,
    },
  },
}));
