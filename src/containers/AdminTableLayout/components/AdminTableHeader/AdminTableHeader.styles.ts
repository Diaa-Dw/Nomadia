import { Stack as MuiStack, styled } from '@mui/material';

export const Stack = styled(MuiStack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(1.2),
  marginBottom: theme.spacing(1.2),

  ['@media (max-width: 800px)']: {
    flexDirection: 'column',
    '& > *': {
      textAlign: 'center',
      width: '100%',
    },
  },
}));
