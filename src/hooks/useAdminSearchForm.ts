import { useFormik } from 'formik';
import { INITIAL_VALUES } from '../constants';
import { useDebounce } from '@/hooks';
import { useMemo } from 'react';

const useAdminSearchForm = () => {
  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: () => {},
  });

  const { values } = formikProps;

  const debouncedValues = useDebounce(values, 300);

  const filters = useMemo(
    () => ({
      name: debouncedValues.filterField === 'name' ? debouncedValues.searchValue : '',
      searchQuery: debouncedValues.filterField === 'description' ? debouncedValues.searchValue : '',
    }),
    [debouncedValues]
  );

  return {
    filters,
    formikProps,
    searchValue: formikProps.values.searchValue,
    onSearchChange: formikProps.handleChange,
  };
};

export default useAdminSearchForm;
