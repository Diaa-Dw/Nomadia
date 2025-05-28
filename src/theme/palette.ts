import { type PaletteOptions } from '@mui/material/styles';

const createPalette = (mode: Mode): PaletteOptions => {
  return {
    primary: {
      main: mode === 'dark' ? '#42a5f5' : '#1565c0',
      light: '#42a5f5',
      dark: '#0d47a1',
    },
    secondary: {
      main: mode === 'dark' ? '#90a4ae' : '#607d8b',
      light: '#90a4ae',
      dark: '#455a64',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#e0e0e0',
      paper: mode === 'dark' ? '#424242' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#333333',
      secondary: mode === 'dark' ? '#b0b0b0' : '#666666',
      disabled: mode === 'dark' ? '#757575' : '#999999',
    },
    success: {
      main: '#2e7d32',
    },
    info: {
      main: '#00acc1',
    },
  };
};

export default createPalette;
