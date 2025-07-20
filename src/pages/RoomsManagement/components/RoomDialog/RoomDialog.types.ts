import { FormikProps } from 'formik';
import { ReactNode } from 'react';

export interface RoomDialogProps<T> {
  open: boolean;
  onClose: () => void;
  title: string;
  isPending: boolean;
  formikProps: FormikProps<T>;
  actionText: string;
  actionIcon?: ReactNode;
}
