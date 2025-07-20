import { THEME_KEY } from '@/constants';
import { showErrorToast } from '@/utils';

export const getStoredTheme = (): Mode => {
  try {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
  } catch {
    showErrorToast('Failed to get theme from localStorage.');
  }

  return 'dark';
};

export const setStoredTheme = (theme: Mode): void => {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    showErrorToast('Failed to save theme to localStorage.');
  }
};
