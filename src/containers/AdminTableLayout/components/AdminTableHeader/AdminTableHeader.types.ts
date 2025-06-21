import { FormikProps } from 'formik';
import { SearchOption } from '../../AdminTableLayout.types';

export interface AdminTableHeaderProps<T, F> {
  title: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onAdd: () => void;
  formikProps: FormikProps<F>;
  searchOptions: SearchOption<T>[];
}
