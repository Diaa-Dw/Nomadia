import type { Components, Theme } from '@mui/material';

const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '8px 16px',
        textTransform: 'none',
      },
      contained: ({ theme }) => ({
        boxShadow: 'none',
        color: theme.palette.background.default,
        fontWeight: '600',
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        '&:hover': {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '&.Mui-disabled': {
          backgroundImage: `linear-gradient(to right, ${theme.palette.grey[400]}, ${theme.palette.grey[500]})`,
          color: theme.palette.action.disabled,
          opacity: 0.7,
        },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        padding: '4px 8px',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '4px 0',
        borderRadius: '8px',
        color: '#fff',
        '& input': {
          padding: '4px',
          borderRadius: '8px',
        },
        '& input:-webkit-autofill': {
          boxShadow: `0 0 0px 1000px ${theme.palette.background.paper} inset`,
          border: '0 !important',
          outline: '0 !important',
          backgroundClip: 'content-box !important',
          filter: 'none !important',
          WebkitTextFillColor: theme.palette.text.primary,
        },
      }),
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
};

export default components;
