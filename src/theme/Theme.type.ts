import type { ReactNode } from 'react';
import { createPalette, typography, components } from './';

export interface Theme {
  palette: ReturnType<typeof createPalette>;
  typography: typeof typography;
  components: typeof components;
  mode: 'light' | 'dark';
}

export interface ThemeContextType {
  toggleTheme: () => void;
  theme: Theme;
}

export interface ThemeProivderProps {
  children: ReactNode;
}
