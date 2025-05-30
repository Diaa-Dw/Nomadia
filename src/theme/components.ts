import type { Components } from '@mui/material';

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '8px 16px',
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        color: '#fff',
        padding: '8px 12px',
        '& input': {
          padding: '8px',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
};

export default components;
