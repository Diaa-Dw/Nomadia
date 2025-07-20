import { useFormik } from 'formik';
import { INITIAL_VALUES } from '../constants';
import { Filters } from '@/types';

const useAdminSearchForm = (onFilterChange: (value: Filters) => void) => {
  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: values => {
      const filters = {
        name: values.filterField === 'name' ? values.searchValue : '',
        searchQuery: values.filterField === 'description' ? values.searchValue : '',
      };
      onFilterChange(filters);
    },
  });

  return formikProps;
};

export default useAdminSearchForm;
