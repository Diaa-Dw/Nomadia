import { GridProps } from '@mui/material';
import { ReactNode } from 'react';

export interface FieldContainerProps extends GridProps {
  children: ReactNode;
  icon?: ReactNode;
  pointer?: boolean;
}
