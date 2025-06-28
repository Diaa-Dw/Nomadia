import { Theme } from '@mui/material';

const globalStyles = (theme: Theme) => ({
  '*,*::after,*::before': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    overflowX: 'hidden',
  },

  '*::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '*::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.background.default,
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',
  },
  '*::-webkit-scrollbar-thumb:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
});

export default globalStyles;
