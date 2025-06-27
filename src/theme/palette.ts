import { type PaletteOptions } from '@mui/material/styles';

const createPalette = (mode: Mode): PaletteOptions => {
  return {
    mode,
    primary: {
      main: mode === 'dark' ? '#6366F1' : '#4F46E5',
      light: '#818CF8',
      dark: '#4338CA',
    },
    secondary: {
      main: mode === 'dark' ? '#8B5CF6' : '#7C3AED',
      light: '#A78BFA',
      dark: '#6D28D9',
    },
    background: {
      default: mode === 'dark' ? '#0F172A' : '#F8FAFC',
      paper: mode === 'dark' ? '#1E293B' : '#E2E8F0',
    },
    text: {
      primary: mode === 'dark' ? '#F1F5F9' : '#1E293B',
      secondary: mode === 'dark' ? '#94A3B8' : '#64748B',
      disabled: mode === 'dark' ? '#475569' : '#CBD5E1',
    },
    error: { main: '#EF4444' },

    success: {
      main: '#009d52',
      light: '#4ade80',
      dark: '#047857',
    },
    info: {
      main: '#00acc1',
    },
  };
};

export default createPalette;
