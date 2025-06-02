import type { ReactNode } from 'react';

export interface TextFieldProps {
  name: string;
  label: string;
  startIcon?: ReactNode;
  placeholder: string;
}
