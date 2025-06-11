import { Theme } from '@mui/material';
import type { ReactNode } from 'react';

export interface ThemeContextType {
  toggleTheme: () => void;
  mode: string;
  theme: Theme;
}

export interface ThemeProivderProps {
  children: ReactNode;
}
