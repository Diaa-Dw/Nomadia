import { useFormik } from 'formik';
import { INITIAL_VALUES } from '../constants';
import { useDebounce } from '@/hooks';
import { useMemo } from 'react';

const useCitySearchForm = () => {
  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: () => {},
  });

  const { values } = formikProps;

  const debouncedValues = useDebounce(values, 300);

  const filters = useMemo(
    () => ({
      name: debouncedValues.filterField === 'name' ? debouncedValues.searchValue : undefined,
      searchQuery:
        debouncedValues.filterField === 'description' ? debouncedValues.searchValue : undefined,
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

export default useCitySearchForm;
