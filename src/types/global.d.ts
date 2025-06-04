import type { Theme } from '@mui/material/styles';

declare global {
  type Mode = 'light' | 'dark';

  interface StyledProps {
    theme: Theme;
  }
}
