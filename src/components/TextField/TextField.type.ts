import type { ReactNode } from 'react';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps & {
  name: string;
  label?: string;
  startIcon?: ReactNode;
  placeholder?: string;
};
