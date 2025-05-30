import type { ReactNode } from 'react';
import type { Theme } from '@mui/material';

export interface ThemeContextType {
  toggleTheme: () => void;
  theme: Theme;
}

export interface ThemeProivderProps {
  children: ReactNode;
}
